// File path: app/cold-room-commercial-refrigeration-repairs/page.tsx
// URL: https://www.coldfix.co.za/cold-room-commercial-refrigeration-repairs
// Google Ads landing page for the "Cold room and commercial refrigeration repairs" ad group.

import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { CallLink, WhatsAppLink } from "@/components/landing/cta"
import { ControllerDisplay } from "@/components/landing/controller-display"
import { FaultFinder } from "@/components/landing/fault-finder"
import { COLD_ROOM_FAULTS } from "@/components/landing/faults-cold-room"
import { PHONE_DISPLAY } from "@/components/landing/contact"
import styles from "@/components/landing/landing.module.css"

export const metadata: Metadata = {
  title: "Cold Room and Commercial Refrigeration Repairs in Gauteng | Call Now",
  description:
    "Cold room or commercial fridge not cooling? Cold Fix repairs cold rooms, freezer rooms, display fridges and commercial refrigeration across Gauteng. Same day callouts, 24/7 emergencies.",
  alternates: {
    canonical: "https://www.coldfix.co.za/cold-room-commercial-refrigeration-repairs",
  },
  // Ad landing page: keeps the main service pages as the ones that rank in Google.
  // Change index to true if you also want this page to appear in search results.
  robots: { index: false, follow: true },
}

const areas = [
  "Pretoria",
  "Johannesburg",
  "Midrand",
  "Sandton",
  "Centurion",
  "Fourways",
  "Randburg",
  "Bedfordview",
  "Rosebank",
  "Roodepoort",
  "Morningside",
]

const steps = [
  {
    title: "Call or WhatsApp",
    text: "Tell us what the unit is doing. If you can, send a photo of the controller display or the fault.",
  },
  {
    title: "We book a technician",
    text: "Same day callouts. Emergencies run 24/7, so a breakdown at night does not have to wait for morning.",
  },
  {
    title: "We find the fault and quote",
    text: "We find the actual fault and tell you what the repair costs before we start work.",
  },
  {
    title: "We repair it and test it",
    text: "We fix it, then check that the temperature is pulling down properly before we leave.",
  },
]

const equipment = [
  "Walk in cold rooms",
  "Freezer rooms",
  "Blast chillers",
  "Display fridges and freezers",
  "Bottle coolers",
  "Under counter fridges and freezers",
  "Deli and butchery cabinets",
  "Condensing units",
]

const parts = [
  "Compressors",
  "Condensers and evaporators",
  "Fan motors",
  "Defrost heaters, timers and sensors",
  "Expansion valves",
  "Controllers and thermostats",
  "Door seals, hinges and latches",
  "Gas leak detection and refills",
  "Drain lines and drain heaters",
]

const faqs = [
  {
    q: "How fast can you get to us?",
    a: "We book same day callouts and run 24/7 emergency response across Gauteng. Call or WhatsApp now and we will tell you what is possible for your suburb.",
  },
  {
    q: "Do you charge for a quote?",
    a: "Quotes are free. We find the fault and tell you what the repair costs before we start work.",
  },
  {
    q: "Can it be repaired, or does it need replacing?",
    a: "Most faults can be repaired. If a unit is beyond sensible repair, we say so and explain why before you spend money on it.",
  },
  {
    q: "What if you need a part?",
    a: "We bring common parts to the job where we can. For bigger parts, such as a compressor, we tell you how long it will take before you commit.",
  },
  {
    q: "Should I throw the stock away?",
    a: "Food safety decisions are yours to make, with your environmental health officer where needed. As a rule, chilled food that has been above 5°C for a long time should not be sold. If you are unsure, do not risk it.",
  },
]

const callBtn =
  "inline-flex min-h-[3.75rem] items-center justify-center gap-3 rounded-lg bg-[#ff9f1c] px-7 text-xl font-extrabold text-[#07162e] shadow-[0_4px_0_#b36b00] transition active:translate-y-[3px] active:shadow-none focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-white"

const waBtn =
  "inline-flex min-h-[3.75rem] items-center justify-center gap-3 rounded-lg bg-[#25d366] px-7 text-xl font-extrabold text-[#06230f] shadow-[0_4px_0_#13803d] transition active:translate-y-[3px] active:shadow-none focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-white"

export default function ColdRoomRepairsLandingPage() {
  return (
    <div
      className="bg-white pb-24 text-[#0d1b2e] md:pb-0"
      style={{ fontFamily: "var(--font-lp-body), system-ui, sans-serif", fontSize: "1.0625rem" }}
    >
      {/* Header: no menu, only ways to reach us */}
      <header className="sticky top-0 z-40 bg-[#07162e]/95 text-white backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
          <div className="flex items-center gap-3">
            <Image
              src="/logo-square.png"
              alt="Cold Fix Services"
              width={44}
              height={44}
              priority
              className="h-11 w-11 rounded-lg"
            />
            <span className="hidden text-lg font-bold sm:block">Cold Fix Services</span>
          </div>
          <div className="flex items-center gap-3">
            <CallLink
              place="header"
              className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-[#ff9f1c] px-4 text-base font-extrabold text-[#07162e] focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <span className="md:hidden">Call now</span>
              <span className="hidden md:inline">Call now {PHONE_DISPLAY}</span>
            </CallLink>
            <WhatsAppLink
              place="header"
              className="hidden min-h-11 items-center gap-2 rounded-lg bg-[#25d366] px-4 text-base font-extrabold text-[#06230f] focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-white md:inline-flex"
            >
              WhatsApp now
            </WhatsAppLink>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0a2146] text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, #ffffff 0, #ffffff 1px, transparent 1px, transparent 120px)",
          }}
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-14 md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] md:py-20">
          <div>
            <h1
              className="m-0 text-[3.5rem] font-extrabold leading-[0.92] tracking-[-0.005em] sm:text-[4.75rem] lg:text-[5.75rem]"
              style={{ fontFamily: "var(--font-lp-display), Impact, sans-serif" }}
            >
              It is 5am. The cold room reads 9 degrees. The delivery arrives at 7.
            </h1>
            <p className="mt-6 max-w-[34rem] text-[1.1875rem] leading-relaxed text-[#cfe0ec]">
              Cold Fix repairs cold rooms, freezer rooms and commercial fridges across Gauteng. Call or WhatsApp
              now. We book a technician the same day, and emergency callouts run 24/7.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <CallLink place="hero" className={callBtn}>
                Call now
                <span className="font-semibold">{PHONE_DISPLAY}</span>
              </CallLink>
              <WhatsAppLink place="hero" className={waBtn}>
                WhatsApp now
              </WhatsAppLink>
            </div>
            <p className="mt-4 max-w-[30rem] text-base leading-snug text-[#9fb6c8]">
              Send a photo of the controller display on WhatsApp. It helps us arrive with the right parts.
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            <ControllerDisplay
              variant="climb"
              start={2}
              end={9}
              gaugeMin={0}
              gaugeMax={12}
              label="Cold room controller reading 9 degrees Celsius with a high temperature alarm. Chilled food must stay at 5 degrees or below."
              caption="Chilled food must stay at 5°C or below. Above that, bacteria start multiplying."
            />
          </div>
        </div>
      </section>

      {/* What warming costs, in order of temperature */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:py-24">
          <div>
            <h2
              className="m-0 text-[2.75rem] font-extrabold leading-[0.95] text-[#0f2c59] sm:text-[3.5rem]"
              style={{ fontFamily: "var(--font-lp-display), Impact, sans-serif" }}
            >
              The stock is only the first thing you lose.
            </h2>
            <p className="mt-5 max-w-[26rem] leading-relaxed text-[#33475f]">
              Waiting rarely makes a cold room fault cheaper. It does make the stock bill bigger.
            </p>
          </div>

          <ol className="m-0 list-none p-0">
            {[
              {
                t: "5°C",
                h: "You cross the limit for chilled food.",
                p: "From here every hour counts against you.",
              },
              {
                t: "8°C",
                h: "Meat, dairy and prepared food start to turn.",
                p: "Staff begin carrying stock to whatever fridge has space. Service slows down.",
              },
              {
                t: "12°C",
                h: "The delivery cannot go in.",
                p: "The menu shrinks, orders get cancelled, and an inspector who walks in today will not like the thermometer.",
              },
            ].map((row, i) => (
              <li
                key={row.t}
                className="grid grid-cols-[5.5rem_1fr] items-baseline gap-5 border-t border-[#0f2c59]/20 py-6 sm:grid-cols-[7rem_1fr]"
              >
                <span
                  className="text-[3rem] font-extrabold leading-none sm:text-[4rem]"
                  style={{
                    fontFamily: "var(--font-lp-display), Impact, sans-serif",
                    color: i === 0 ? "#0089a8" : i === 1 ? "#b86a00" : "#c2410c",
                  }}
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
              <p className="m-0 text-[1.375rem] font-bold leading-snug text-[#0f2c59]">
                The faster a technician is on site, the less of this you have to live through.
              </p>
            </li>
          </ol>
        </div>
      </section>

      {/* Fault finder */}
      <section className="bg-[#e6f0f5]">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <h2
            className="m-0 max-w-[40rem] text-[2.75rem] font-extrabold leading-[0.95] text-[#0f2c59] sm:text-[3.5rem]"
            style={{ fontFamily: "var(--font-lp-display), Impact, sans-serif" }}
          >
            Tell us what it is doing.
          </h2>
          <p className="mb-10 mt-5 max-w-[36rem] leading-relaxed text-[#33475f]">
            Pick the one closest to your problem. You will see what usually causes it, what we do about it, and what
            to do while you wait.
          </p>
          <FaultFinder faults={COLD_ROOM_FAULTS} place="fault_finder" />
        </div>
      </section>

      {/* How a callout works */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:py-24">
          <div>
            <h2
              className="m-0 text-[2.75rem] font-extrabold leading-[0.95] text-[#0f2c59] sm:text-[3.5rem]"
              style={{ fontFamily: "var(--font-lp-display), Impact, sans-serif" }}
            >
              From your call to a cold room again.
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
                  <p className="mt-1.5 leading-relaxed text-[#33475f]">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* What we repair */}
      <section className="bg-[#0f2c59] text-white">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <h2
            className="m-0 max-w-[40rem] text-[2.75rem] font-extrabold leading-[0.95] sm:text-[3.5rem]"
            style={{ fontFamily: "var(--font-lp-display), Impact, sans-serif" }}
          >
            If it keeps food cold, we repair it.
          </h2>
          <p className="mt-5 max-w-[38rem] leading-relaxed text-[#cfe0ec]">
            We work with restaurants, butcheries, supermarkets, shops and bars. Repairs only on this page, so the
            people who answer the phone are the people who fix faults all day.
          </p>

          <div className="mt-12 grid gap-12 md:grid-cols-2">
            <div>
              <h3 className="m-0 text-xl font-bold text-[#ff9f1c]">Equipment</h3>
              <ul className="m-0 mt-4 list-none space-y-0 p-0">
                {equipment.map((item) => (
                  <li key={item} className="border-t border-white/20 py-3 text-[1.1875rem]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="m-0 text-xl font-bold text-[#ff9f1c]">Parts and faults</h3>
              <ul className="m-0 mt-4 list-none space-y-0 p-0">
                {parts.map((item) => (
                  <li key={item} className="border-t border-white/20 py-3 text-[1.1875rem]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Questions */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-5 py-16 md:py-24">
          <h2
            className="m-0 text-[2.75rem] font-extrabold leading-[0.95] text-[#0f2c59] sm:text-[3.5rem]"
            style={{ fontFamily: "var(--font-lp-display), Impact, sans-serif" }}
          >
            Questions before you call
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

      {/* Final call to action */}
      <section className="relative overflow-hidden bg-[#07162e] text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
          <div>
            <h2
              className="m-0 text-[3.25rem] font-extrabold leading-[0.92] sm:text-[4.5rem]"
              style={{ fontFamily: "var(--font-lp-display), Impact, sans-serif" }}
            >
              Get the cold room back to temperature.
            </h2>
            <p className="mt-5 max-w-[30rem] text-[1.1875rem] leading-relaxed text-[#cfe0ec]">
              Call or WhatsApp now. Tell us what it is doing and where you are, and we will tell you when a technician
              can be there.
            </p>
            <div className="mt-8 hidden md:block">
              <ControllerDisplay
                variant="steady"
                end={-18}
                gaugeMin={-20}
                gaugeMax={12}
                label="Freezer room controller holding minus 18 degrees Celsius."
                caption="This is the reading we want you looking at when we leave."
              />
            </div>
          </div>

          <div className={styles.plate}>
            <span className={`${styles.rivet}`} style={{ top: 8, left: 8 }} aria-hidden="true" />
            <span className={`${styles.rivet}`} style={{ top: 8, right: 8 }} aria-hidden="true" />
            <span className={`${styles.rivet}`} style={{ bottom: 8, left: 8 }} aria-hidden="true" />
            <span className={`${styles.rivet}`} style={{ bottom: 8, right: 8 }} aria-hidden="true" />

            <p
              className="m-0 mb-5 text-[2.25rem] font-extrabold leading-none text-[#0f2c59]"
              style={{ fontFamily: "var(--font-lp-display), Impact, sans-serif" }}
            >
              Cold Fix Services
            </p>

            <div className="flex flex-col gap-3">
              <CallLink place="final" className={callBtn + " w-full"}>
                Call now
                <span className="font-semibold">{PHONE_DISPLAY}</span>
              </CallLink>
              <WhatsAppLink place="final" className={waBtn + " w-full"}>
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

        <div className="border-t border-white/15">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-6 text-sm text-[#9fb6c8]">
            <span>Cold Fix Services, Gauteng, South Africa</span>
            <span className="flex gap-5">
              <Link href="/privacy-policy" className="underline underline-offset-4 hover:text-white">
                Privacy policy
              </Link>
              <Link href="/terms-of-service" className="underline underline-offset-4 hover:text-white">
                Terms of service
              </Link>
            </span>
          </div>
        </div>
      </section>

      {/* Phones: Call and WhatsApp stay under your thumb the whole way down */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-black/20 bg-[#07162e] p-2.5 pb-[calc(0.625rem+env(safe-area-inset-bottom))] md:hidden">
        <div className="grid grid-cols-2 gap-2.5">
          <CallLink
            place="sticky_bar"
            className="inline-flex min-h-14 items-center justify-center gap-2 rounded-lg bg-[#ff9f1c] px-3 text-lg font-extrabold text-[#07162e] focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Call now
          </CallLink>
          <WhatsAppLink
            place="sticky_bar"
            className="inline-flex min-h-14 items-center justify-center gap-2 rounded-lg bg-[#25d366] px-3 text-lg font-extrabold text-[#06230f] focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            WhatsApp now
          </WhatsAppLink>
        </div>
      </div>
    </div>
  )
}
