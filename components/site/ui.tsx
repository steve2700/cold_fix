import type { ComponentProps, ReactNode } from "react"
import Link from "next/link"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { CallLink, WhatsAppLink } from "@/components/landing/cta"
import { ControllerDisplay } from "@/components/landing/controller-display"
import { FaultFinder, type FaultLabels } from "@/components/landing/fault-finder"
import type { Fault } from "@/components/landing/fault-types"
import { PHONE_DISPLAY } from "@/components/landing/contact"
import styles from "@/components/landing/landing.module.css"

export type DisplayProps = ComponentProps<typeof ControllerDisplay>

export const displayFont = { fontFamily: "var(--font-lp-display), Impact, sans-serif" }

export const callBtn =
  "inline-flex min-h-[3.75rem] items-center justify-center gap-3 rounded-lg bg-[#ff9f1c] px-7 text-xl font-extrabold text-[#07162e] shadow-[0_4px_0_#b36b00] transition active:translate-y-[3px] active:shadow-none focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-white"

export const waBtn =
  "inline-flex min-h-[3.75rem] items-center justify-center gap-3 rounded-lg bg-[#25d366] px-7 text-xl font-extrabold text-[#06230f] shadow-[0_4px_0_#13803d] transition active:translate-y-[3px] active:shadow-none focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-white"

export const h2Class = "m-0 text-[2.75rem] font-extrabold leading-[0.95] text-[#0f2c59] sm:text-[3.5rem]"

type Crumb = { label: string; href?: string }

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */
export function Hero({
  crumbs,
  h1,
  lead,
  micro = "Send a photo of the fault on WhatsApp. It helps us arrive with the right parts.",
  visual,
  place,
}: {
  crumbs?: Crumb[]
  h1: string
  lead: string
  micro?: string
  visual: DisplayProps
  place: string
}) {
  return (
    <section className="relative overflow-hidden bg-[#0a2146] text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: "repeating-linear-gradient(90deg, #ffffff 0, #ffffff 1px, transparent 1px, transparent 120px)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-5 pb-14 pt-2 md:pb-20">
        {crumbs ? <Breadcrumbs variant="onDark" items={crumbs} /> : <div className="h-6" />}
        <div className="mt-4 grid items-center gap-12 md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
          <div>
            <h1
              className="m-0 text-[3.25rem] font-extrabold leading-[0.92] tracking-[-0.005em] sm:text-[4.5rem] lg:text-[5.25rem]"
              style={displayFont}
            >
              {h1}
            </h1>
            <p className="mt-6 max-w-[34rem] text-[1.1875rem] leading-relaxed text-[#cfe0ec]">{lead}</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <CallLink place={`${place}_hero`} className={callBtn}>
                Call now
                <span className="font-semibold">{PHONE_DISPLAY}</span>
              </CallLink>
              <WhatsAppLink place={`${place}_hero`} className={waBtn}>
                WhatsApp now
              </WhatsAppLink>
            </div>
            <p className="mt-4 max-w-[30rem] text-base leading-snug text-[#9fb6c8]">{micro}</p>
          </div>
          <div className="flex justify-center md:justify-end">
            <ControllerDisplay {...visual} />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* What waiting costs                                                  */
/* ------------------------------------------------------------------ */
export type CostRow = { t: string; h: string; p: string }

export function CostSection({
  title,
  note,
  rows,
  closing,
}: {
  title: string
  note: string
  rows: CostRow[]
  closing: string
}) {
  const colours = ["#0089a8", "#b86a00", "#c2410c", "#b91c1c"]
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:py-24">
        <div>
          <h2 className={h2Class} style={displayFont}>
            {title}
          </h2>
          <p className="mt-5 max-w-[26rem] leading-relaxed text-[#33475f]">{note}</p>
        </div>
        <ol className="m-0 list-none p-0">
          {rows.map((row, i) => (
            <li
              key={row.t}
              className="grid grid-cols-[5.5rem_1fr] items-baseline gap-5 border-t border-[#0f2c59]/20 py-6 sm:grid-cols-[7rem_1fr]"
            >
              <span
                className="text-[3rem] font-extrabold leading-none sm:text-[4rem]"
                style={{ ...displayFont, color: colours[Math.min(i, colours.length - 1)] }}
              >
                {row.t}
              </span>
              <div>
                <p className="m-0 text-[1.375rem] font-bold leading-snug text-[#0f2c59]">{row.h}</p>
                <p className="mt-1.5 leading-relaxed text-[#33475f]">{row.p}</p>
              </div>
            </li>
          ))}
          <li className="border-t border-[#0f2c59]/20 pt-6">
            <p className="m-0 text-[1.375rem] font-bold leading-snug text-[#0f2c59]">{closing}</p>
          </li>
        </ol>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Fault finder band                                                   */
/* ------------------------------------------------------------------ */
export function FaultSection({
  title,
  intro,
  faults,
  place,
  labels,
}: {
  title: string
  intro: string
  faults: Fault[]
  place: string
  labels?: FaultLabels
}) {
  return (
    <section className="bg-[#e6f0f5]">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <h2 className={`${h2Class} max-w-[40rem]`} style={displayFont}>
          {title}
        </h2>
        <p className="mb-10 mt-5 max-w-[36rem] leading-relaxed text-[#33475f]">{intro}</p>
        <FaultFinder faults={faults} place={place} labels={labels} />
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Steps                                                               */
/* ------------------------------------------------------------------ */
export function StepsSection({
  title,
  steps,
}: {
  title: string
  steps: { title: string; description: string }[]
}) {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:py-24">
        <div>
          <h2 className={h2Class} style={displayFont}>
            {title}
          </h2>
        </div>
        <ol className="m-0 list-none p-0">
          {steps.map((s, i) => (
            <li key={s.title} className="grid grid-cols-[3.25rem_1fr] gap-5 border-t border-[#0f2c59]/20 py-6">
              <span
                aria-hidden="true"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0f2c59] text-xl font-extrabold text-white"
              >
                {i + 1}
              </span>
              <div>
                <h3 className="m-0 text-[1.375rem] font-bold leading-snug text-[#0f2c59]">{s.title}</h3>
                <p className="mt-1.5 leading-relaxed text-[#33475f]">{s.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* What we do (the old "features" list, in two plain columns)          */
/* ------------------------------------------------------------------ */
export function ScopeSection({
  title,
  intro,
  items,
}: {
  title: string
  intro?: string
  items: string[]
}) {
  const half = Math.ceil(items.length / 2)
  const cols = [items.slice(0, half), items.slice(half)]
  return (
    <section className="bg-[#0f2c59] text-white">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <h2 className="m-0 max-w-[42rem] text-[2.75rem] font-extrabold leading-[0.95] sm:text-[3.5rem]" style={displayFont}>
          {title}
        </h2>
        {intro ? <p className="mt-5 max-w-[38rem] leading-relaxed text-[#cfe0ec]">{intro}</p> : null}
        <div className="mt-12 grid gap-x-12 md:grid-cols-2">
          {cols.map((col, i) => (
            <ul key={i} className="m-0 list-none p-0">
              {col.map((item) => (
                <li key={item} className="border-t border-white/20 py-3 text-[1.1875rem]">
                  {item}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Why people call us (the old "benefits", as a plain list)            */
/* ------------------------------------------------------------------ */
export function WhySection({
  title,
  items,
}: {
  title: string
  items: { title: string; description: string }[]
}) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <h2 className={`${h2Class} max-w-[40rem]`} style={displayFont}>
          {title}
        </h2>
        <dl className="m-0 mt-12 grid gap-x-12 md:grid-cols-2">
          {items.map((b) => (
            <div key={b.title} className="border-t border-[#0f2c59]/20 py-6">
              <dt className="text-[1.375rem] font-bold leading-snug text-[#0f2c59]">{b.title}</dt>
              <dd className="m-0 mt-1.5 leading-relaxed text-[#33475f]">{b.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */
export function FaqSection({
  title = "Questions before you call",
  faqs,
}: {
  title?: string
  faqs: { q: string; a: string }[]
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  }
  return (
    <section className="bg-[#f3f7fa]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-3xl px-5 py-16 md:py-24">
        <h2 className={h2Class} style={displayFont}>
          {title}
        </h2>
        <div className="mt-8">
          {faqs.map((f) => (
            <details key={f.q} className="group border-t border-[#0f2c59]/20 last:border-b">
              <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 py-4 text-[1.25rem] font-bold leading-snug text-[#0f2c59] focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-[-4px] focus-visible:outline-[#0f2c59] [&::-webkit-details-marker]:hidden">
                {f.q}
                <span
                  aria-hidden="true"
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-[#0f2c59] text-xl leading-none transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="m-0 max-w-[38rem] pb-6 leading-relaxed text-[#33475f]">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Related pages and areas                                             */
/* ------------------------------------------------------------------ */
export function LinksSection({
  relatedTitle = "You might also need",
  related,
  areasTitle = "Where we work",
  areas,
}: {
  relatedTitle?: string
  related?: { title: string; href: string }[]
  areasTitle?: string
  areas?: string[]
}) {
  if (!related?.length && !areas?.length) return null
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-14 md:grid-cols-2 md:py-20">
        {related?.length ? (
          <div>
            <h2 className="m-0 text-[2.25rem] font-extrabold leading-none text-[#0f2c59]" style={displayFont}>
              {relatedTitle}
            </h2>
            <ul className="m-0 mt-6 list-none p-0">
              {related.map((r) => (
                <li key={r.href} className="border-t border-[#0f2c59]/20 last:border-b">
                  <Link
                    href={r.href}
                    className="flex min-h-14 items-center justify-between gap-4 py-3 text-[1.1875rem] font-semibold text-[#0f2c59] hover:underline focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-[-4px] focus-visible:outline-[#0f2c59]"
                  >
                    {r.title}
                    <span aria-hidden="true" className="text-2xl leading-none text-[#ff9f1c]">
                      +
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
        {areas?.length ? (
          <div>
            <h2 className="m-0 text-[2.25rem] font-extrabold leading-none text-[#0f2c59]" style={displayFont}>
              {areasTitle}
            </h2>
            <p className="mt-6 leading-loose text-[#33475f]">
              {areas.map((a, i) => (
                <span key={a}>
                  <Link
                    href={`/service-areas/${a.toLowerCase().replace(/\s+/g, "-")}`}
                    className="font-semibold text-[#0f2c59] underline underline-offset-4 hover:text-[#b86a00]"
                  >
                    {a}
                  </Link>
                  {i < areas.length - 1 ? ", " : ""}
                </span>
              ))}
              {" "}and surrounds.
            </p>
          </div>
        ) : null}
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Final call to action with the data plate                            */
/* ------------------------------------------------------------------ */
export function FinalCta({
  headline,
  lead,
  display,
  place,
  areas = ["Pretoria", "Johannesburg", "Midrand", "Sandton", "Centurion", "Fourways", "Randburg", "Bedfordview", "Rosebank", "Roodepoort", "Morningside"],
}: {
  headline: string
  lead: string
  display?: DisplayProps
  place: string
  areas?: string[]
}) {
  return (
    <section className="relative overflow-hidden bg-[#07162e] text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
        <div>
          <h2 className="m-0 text-[3.25rem] font-extrabold leading-[0.92] sm:text-[4.5rem]" style={displayFont}>
            {headline}
          </h2>
          <p className="mt-5 max-w-[30rem] text-[1.1875rem] leading-relaxed text-[#cfe0ec]">{lead}</p>
          {display ? (
            <div className="mt-8 hidden md:block">
              <ControllerDisplay {...display} />
            </div>
          ) : null}
        </div>

        <div className={styles.plate}>
          <span className={styles.rivet} style={{ top: 8, left: 8 }} aria-hidden="true" />
          <span className={styles.rivet} style={{ top: 8, right: 8 }} aria-hidden="true" />
          <span className={styles.rivet} style={{ bottom: 8, left: 8 }} aria-hidden="true" />
          <span className={styles.rivet} style={{ bottom: 8, right: 8 }} aria-hidden="true" />

          <p className="m-0 mb-5 text-[2.25rem] font-extrabold leading-none text-[#0f2c59]" style={displayFont}>
            Cold Fix Services
          </p>

          <div className="flex flex-col gap-3">
            <CallLink place={`${place}_final`} className={callBtn + " w-full"}>
              Call now
              <span className="font-semibold">{PHONE_DISPLAY}</span>
            </CallLink>
            <WhatsAppLink place={`${place}_final`} className={waBtn + " w-full"}>
              WhatsApp now
            </WhatsAppLink>
          </div>

          <dl className="m-0 mt-6">
            <div className={styles.plateRow}>
              <dt className={styles.plateKey}>Callouts</dt>
              <dd className={`m-0 ${styles.plateValue}`}>Same day. Emergencies 24/7</dd>
            </div>
            <div className={styles.plateRow}>
              <dt className={styles.plateKey}>Quotes</dt>
              <dd className={`m-0 ${styles.plateValue}`}>Free</dd>
            </div>
            <div className={styles.plateRow}>
              <dt className={styles.plateKey}>Technicians</dt>
              <dd className={`m-0 ${styles.plateValue}`}>Certified and fully insured</dd>
            </div>
            <div className={styles.plateRow}>
              <dt className={styles.plateKey}>We cover</dt>
              <dd className={`m-0 ${styles.plateValue}`}>{areas.join(", ")} and surrounds</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}

/* Wrapper that gives older prose sections the same heading style. */
export function Prose({ children }: { children: ReactNode }) {
  return <div className={styles.prose}>{children}</div>
}
