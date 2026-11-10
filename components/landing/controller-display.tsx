"use client"

import { useEffect, useState } from "react"
import { Bell, Snowflake, Droplets, Wind, Zap, Wrench, Clock, ListChecks, Gauge, type LucideIcon } from "lucide-react"
import styles from "./landing.module.css"

// Seven segment digits drawn as SVG paths. Each digit is 64 wide by 96 tall.
const PATHS: Record<string, string> = {
  a: "M12,4 L16,0 L44,0 L48,4 L44,8 L16,8 Z",
  b: "M48,6 L52,10 L52,42 L48,46 L44,42 L44,10 Z",
  c: "M48,50 L52,54 L52,86 L48,90 L44,86 L44,54 Z",
  d: "M12,92 L16,88 L44,88 L48,92 L44,96 L16,96 Z",
  e: "M8,50 L12,54 L12,86 L8,90 L4,86 L4,54 Z",
  f: "M8,6 L12,10 L12,42 L8,46 L4,42 L4,10 Z",
  g: "M12,48 L16,44 L44,44 L48,48 L44,52 L16,52 Z",
}

const LIT: Record<string, string> = {
  "0": "abcdef",
  "1": "bc",
  "2": "abdeg",
  "3": "abcdg",
  "4": "bcfg",
  "5": "acdfg",
  "6": "acdefg",
  "7": "abc",
  "8": "abcdefg",
  "9": "abcdfg",
  "-": "g",
  " ": "",
  E: "adefg",
  F: "aefg",
  H: "bcefg",
  L: "def",
  C: "adef",
  P: "abefg",
  U: "bcdef",
  A: "abcefg",
  r: "eg",
  n: "ceg",
  o: "cdeg",
  d: "bcdeg",
  t: "defg",
}

const ICONS: Record<string, LucideIcon> = {
  snow: Snowflake,
  wind: Wind,
  droplets: Droplets,
  zap: Zap,
  wrench: Wrench,
  clock: Clock,
  list: ListChecks,
  gauge: Gauge,
}

export type IconKey = keyof typeof ICONS | string

function Digit({ ch, dp }: { ch: string; dp: boolean }) {
  const lit = LIT[ch] ?? ""
  return (
    <svg viewBox="0 0 64 96" className={styles.digit} aria-hidden="true">
      {Object.entries(PATHS).map(([key, d]) => (
        <path key={key} d={d} className={lit.includes(key) ? styles.segOn : styles.segOff} />
      ))}
      <circle cx="60" cy="92" r="4" className={dp ? styles.segOn : styles.segOff} />
    </svg>
  )
}

function Colon() {
  return (
    <svg viewBox="0 0 24 96" className={`${styles.digit} ${styles.colon}`} aria-hidden="true">
      <circle cx="12" cy="32" r="5" className={styles.segOn} />
      <circle cx="12" cy="66" r="5" className={styles.segOn} />
    </svg>
  )
}

type Props = {
  // "climb" moves from start to end once. "steady" just holds the end value.
  variant?: "climb" | "steady"
  start?: number
  end?: number
  decimals?: 0 | 1
  unit?: string
  limit?: number
  limitLabel?: string
  // "above": alarm when the reading goes over the limit. "below": alarm when it drops under it.
  alarmWhen?: "above" | "below"
  gaugeMin?: number
  gaugeMax?: number
  hideGauge?: boolean
  // Static readouts: letters and numbers (for example "E21"), or a clock such as "02:14".
  text?: string
  clock?: string
  okText?: string
  alarmText?: string
  // For static readouts: show them as healthy ("ok") or as a fault ("alarm").
  staticState?: "alarm" | "ok"
  icons?: [IconKey, IconKey]
  duration?: number
  caption: string
  label: string
}

export function ControllerDisplay({
  variant = "climb",
  start = 2,
  end = 9,
  decimals = 1,
  unit = "°C",
  limit = 5,
  limitLabel = "5°C limit",
  alarmWhen = "above",
  gaugeMin = 0,
  gaugeMax = 12,
  hideGauge = false,
  text,
  clock,
  okText = "Holding temperature",
  alarmText = "High temperature alarm",
  staticState = "alarm",
  icons = ["snow", "droplets"],
  duration = 6500,
  caption,
  label,
}: Props) {
  const isStatic = text !== undefined || clock !== undefined
  const [value, setValue] = useState(variant === "climb" ? start : end)

  useEffect(() => {
    if (isStatic || variant !== "climb") return
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduce) {
      setValue(end)
      return
    }
    const delay = 900
    const t0 = performance.now() + delay
    const factor = decimals === 0 ? 1 : 10
    let raf = 0
    const tick = (now: number) => {
      const t = Math.min(Math.max((now - t0) / duration, 0), 1)
      const eased = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2
      setValue(Math.round((start + (end - start) * eased) * factor) / factor)
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [variant, start, end, decimals, duration, isStatic])

  const alarm = isStatic ? staticState === "alarm" : alarmWhen === "above" ? value > limit : value < limit
  const tone = alarm ? styles.alarm : styles.ok
  const IconA = ICONS[icons[0]] ?? Snowflake
  const IconB = ICONS[icons[1]] ?? Droplets

  // Work out what the digit slots show.
  let slots: string[] = []
  let dpIndex = -1
  let colonAfter = -1
  if (clock !== undefined) {
    slots = clock.replace(":", "").split("")
    colonAfter = 1
  } else if (text !== undefined) {
    slots = text.split("")
  } else {
    const abs = Math.abs(value)
    if (decimals === 0) {
      slots = [...(value < 0 ? ["-"] : []), ...abs.toFixed(0).split("")]
    } else {
      const [whole, tenth] = abs.toFixed(1).split(".")
      slots = [...(value < 0 ? ["-"] : []), ...whole.split(""), tenth]
      dpIndex = slots.length - 2
    }
  }
  const minSlots = clock !== undefined ? 4 : decimals === 0 && text === undefined ? 3 : 4
  while (slots.length < minSlots) {
    slots.unshift(" ")
    if (dpIndex >= 0) dpIndex += 1
  }

  const span = gaugeMax - gaugeMin
  const pct = (n: number) => `${Math.min(100, Math.max(0, ((n - gaugeMin) / span) * 100))}%`
  const limitPct = ((limit - gaugeMin) / span) * 100
  const gaugeBackground =
    alarmWhen === "above"
      ? `linear-gradient(90deg, #00b4d8 0%, #00b4d8 ${limitPct}%, #ff9f1c ${limitPct}%, #ff9f1c 100%)`
      : `linear-gradient(90deg, #ff9f1c 0%, #ff9f1c ${limitPct}%, #00b4d8 ${limitPct}%, #00b4d8 100%)`

  return (
    <figure className={`${styles.panel} m-0`} role="img" aria-label={label}>
      <span className={`${styles.screw} ${styles.tl}`} aria-hidden="true" />
      <span className={`${styles.screw} ${styles.tr}`} aria-hidden="true" />
      <span className={`${styles.screw} ${styles.bl}`} aria-hidden="true" />
      <span className={`${styles.screw} ${styles.br}`} aria-hidden="true" />

      <div className={`${styles.glass} ${tone}`} aria-hidden="true">
        <div className={styles.status}>
          <div className={styles.statusIcons}>
            <IconA className={`h-5 w-5 ${styles.iconOn}`} strokeWidth={2.2} />
            <IconB className={`h-5 w-5 ${styles.iconOff}`} strokeWidth={2.2} />
            <Bell className={`h-5 w-5 ${alarm ? styles.bell : styles.iconOff}`} strokeWidth={2.2} />
          </div>
          <span style={{ color: alarm ? "#ff9f1c" : "#6f8bab" }}>{alarm ? alarmText : okText}</span>
        </div>

        <div className={styles.readout}>
          <div className={styles.digits}>
            {slots.map((ch, i) => (
              <span key={i} className="contents">
                <Digit ch={ch} dp={i === dpIndex} />
                {i === colonAfter ? <Colon /> : null}
              </span>
            ))}
          </div>
          {unit && !isStatic ? <span className={styles.unit}>{unit}</span> : null}
        </div>

        {!isStatic && !hideGauge ? (
          <div className={styles.gauge} style={{ background: gaugeBackground }}>
            <span className={styles.tick} style={{ left: `${limitPct}%` }} />
            <span className={styles.tickLabel} style={{ left: `${limitPct}%` }}>
              {limitLabel}
            </span>
            <span className={styles.needle} style={{ left: pct(value) }} />
          </div>
        ) : null}

        <p className={isStatic || hideGauge ? `${styles.caption} !mt-6` : styles.caption}>{caption}</p>
      </div>
    </figure>
  )
}
