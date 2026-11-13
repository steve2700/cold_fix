// File path: app/aircon-repairs/page.tsx
// URL: https://www.coldfix.co.za/aircon-repairs
// Google Ads landing page for the "Aircon repairs" ad group. Repairs only.

import type { Metadata } from "next"
import Link from "next/link"
import { FaultFinder } from "@/components/landing/fault-finder"
import { LandingHeader, LandingStickyBar } from "@/components/landing/landing-chrome"
import { PhotoSection } from "@/components/site/photo-section"
import { SERVICE_CONTENT } from "@/components/site/service-content"
import {
  CostSection,
  FaqSection,
  FinalCta,
  Hero,
  ScopeSection,
  StepsSection,
  displayFont,
  h2Class,
} from "@/components/site/ui"

export const metadata: Metadata = {
  title: "Aircon Repairs in Gauteng | Call Now",
  description:
    "Aircon not cooling? Cold Fix repairs split, multi split, inverter and ducted aircons across Gauteng. Same day callouts, 24/7 emergencies, free quotes.",
  alternates: {
    canonical: "https://www.coldfix.co.za/aircon-repairs",
  },
  // Ad landing page: keeps the main service pages as the ones that rank in Google.
  // Change index to true if you also want this page to appear in search results.
  robots: { index: false, follow: true },
}

// Same fault answers as the main aircon page, without the "I need a new aircon" one. This page is repairs only.
const faults = SERVICE_CONTENT.airConditioning.faults.filter((f) => f.id !== "install")

const steps = [
  {
    title: "Call or WhatsApp",
    description: "Tell us what the aircon is doing. If you can, send a photo of the indoor unit, the outdoor unit or the flashing lights.",
  },
  {
    title: "We book a technician",
    description: "Same day callouts. Emergencies run 24/7, so a breakdown in a heatwave does not have to wait for morning.",
  },
  {
    title: "We find the fault and quote",
    description: "We find the actual fault and tell you what the repair costs before we start work.",
  },
  {
    title: "We repair it and test it",
    description: "We fix it, then run the aircon and check that it cools properly before we leave.",
  },
]

const scope = [
  "Split system repairs",
  "Multi split repairs",
  "Inverter aircon repairs",
  "Ducted aircon repairs",
  "Gas leak detection and refills",
  "Compressor repairs",
  "Capacitor and fan motor repairs",
  "Circuit board and sensor repairs",
  "Drain and water leak repairs",
  "Frozen coil and airflow faults",
  "Electrical and breaker faults",
  "Servicing to stop repeat faults",
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
    q: "Why does my aircon keep losing gas?",
    a: "Gas is not used up. If it is low, there is a leak somewhere. We find the leak before we refill, so you are not paying for gas that escapes again.",
  },
  {
    q: "Is it worth repairing an old aircon?",
    a: "Often yes. A new capacitor, fan motor or board can give an old unit years more life. If the repair costs close to the price of a new unit, we tell you so and let you decide.",
  },
  {
    q: "Do you repair all brands?",
    a: "We repair the aircon brands found in most Gauteng homes and businesses. Tell us the brand and model when you call and we will tell you what we can do.",
  },
  {
    q: "What if you need a part?",
    a: "We bring common parts to the job where we can. For bigger parts, such as a compressor, we tell you how long it will take before you commit.",
  },
]

export default function AirconRepairsLandingPage() {
  return (
    <div className="bg-white pb-24 text-[#0d1b2e] md:pb-0">
      <LandingHeader />

      <Hero
        place="aircon_repairs"
        h1="The aircon quit on the hottest day of the year."
        lead="Cold Fix repairs split, multi split, inverter and ducted aircons across Gauteng. Call or WhatsApp now. We book a technician the same day, and emergency callouts run 24/7."
        micro="Send a photo of the indoor unit, the outdoor unit or the flashing lights on WhatsApp. It helps us arrive with the right parts."
        visual={{
          variant: "climb",
          start: 24,
          end: 34,
          decimals: 1,
          unit: "°C",
          limit: 26,
          limitLabel: "26°C comfort",
          gaugeMin: 18,
          gaugeMax: 38,
          icons: ["wind", "droplets"],
          okText: "Cooling",
          alarmText: "Room too warm",
          label: "Room thermometer climbing to 34 degrees Celsius with the aircon not cooling.",
          caption: "Above about 26°C it gets hard to sleep, concentrate or serve customers.",
        }}
      />

      <CostSection
        title="A hot house costs more than comfort."
        note="An aircon that fails in summer hits sleep, work and trade all at once."
        rows={[
          { t: "28°C", h: "Sleep gets hard.", p: "People are tired and short tempered. Children and older people feel it first." },
          { t: "32°C", h: "The house is hard to live in.", p: "Staff and customers are uncomfortable, and shops and offices start to lose trade." },
          { t: "36°C", h: "You cannot stay inside.", p: "Work stops. Anything sensitive to heat in the room starts to suffer." },
        ]}
        closing="The sooner the aircon is repaired, the less of this you have to sit through."
      />

      {/* Fault finder */}
      <section id="faults" className="scroll-mt-16 bg-[#e6f0f5]">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <h2 className={`${h2Class} max-w-[40rem]`} style={displayFont}>
            Tell us what the aircon is doing.
          </h2>
          <p className="mb-10 mt-5 max-w-[36rem] leading-relaxed text-[#33475f]">
            Pick the one closest to your problem. You will see what usually causes it, what we do about it, and what to
            do while you wait.
          </p>
          <FaultFinder faults={faults} place="aircon_fault_finder" selectFromUrl scrollToId="faults" />
        </div>
      </section>

      <PhotoSection
        title="Aircon repairs, up close."
        intro="What the work looks like."
        keys={["acManifold", "acInstalled", "aircon", "acWallUnit"]}
      />

      <StepsSection title="From your call to cool air." steps={steps} />

      <ScopeSection
        title="If it cools the room, we repair it."
        intro="We repair aircons for homes, offices and shops. Repairs only on this page, so the people who answer the phone are the people who fix faults all day. Tell us the brand and model when you call."
        items={scope}
      />

      <FaqSection faqs={faqs} />

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-12 md:py-16">
          <p className="m-0 text-[1.1875rem] leading-relaxed text-[#33475f]">
            Need a new aircon installed or a full service?{" "}
            <Link
              href="/air-conditioning-services"
              className="font-bold text-[#0f2c59] underline underline-offset-4 hover:text-[#b86a00]"
            >
              See air conditioning services
            </Link>
            .
          </p>
        </div>
      </section>

      <FinalCta
        place="aircon_repairs"
        headline="Get the room cool again."
        lead="Call or WhatsApp now. Tell us what the aircon is doing and where you are, and we will tell you when a technician can be there."
        display={{
          variant: "steady",
          end: 22,
          limit: 26,
          limitLabel: "26°C comfort",
          gaugeMin: 18,
          gaugeMax: 38,
          icons: ["wind", "droplets"],
          okText: "Cooling",
          label: "Room thermometer holding 22 degrees Celsius.",
          caption: "This is the reading we want you looking at when we leave.",
        }}
      />

      <LandingStickyBar />
    </div>
  )
}
