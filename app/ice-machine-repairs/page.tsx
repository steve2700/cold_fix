// File path: app/ice-machine-repairs/page.tsx
// URL: https://www.coldfix.co.za/ice-machine-repairs
// Google Ads landing page for the "Ice machine repairs" ad group.

import type { Metadata } from "next"
import Link from "next/link"
import { FaultFinder } from "@/components/landing/fault-finder"
import { ICE_MACHINE_FAULTS } from "@/components/landing/faults-ice-machine"
import { LandingHeader, LandingStickyBar } from "@/components/landing/landing-chrome"
import { PhotoSection } from "@/components/site/photo-section"
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
  title: "Ice Machine Repairs in Gauteng | Call Now",
  description:
    "Ice machine not making ice? Cold Fix repairs commercial ice machines for bars, restaurants, hotels and shops across Gauteng. Same day callouts, 24/7 emergencies.",
  alternates: {
    canonical: "https://www.coldfix.co.za/ice-machine-repairs",
  },
  // Ad landing page: keeps the main service pages as the ones that rank in Google.
  // Change index to true if you also want this page to appear in search results.
  robots: { index: false, follow: true },
}

const steps = [
  {
    title: "Call or WhatsApp",
    description: "Tell us what the machine is doing. If you can, send a photo of the display lights and the brand plate.",
  },
  {
    title: "We book a technician",
    description: "Same day callouts. Emergencies run 24/7, so a breakdown on a busy night does not have to wait for morning.",
  },
  {
    title: "We find the fault and quote",
    description: "We find the actual fault and tell you what the repair costs before we start work.",
  },
  {
    title: "We repair it and test it",
    description: "We fix it, then run the machine and check that it makes ice properly before we leave.",
  },
]

const scope = [
  "Under counter ice machines",
  "Free standing ice machines",
  "Bar and counter top ice makers",
  "Ice dispensers and bins",
  "Water inlet valves and filters",
  "Water pumps and float switches",
  "Compressors and condensers",
  "Fan motors",
  "Sensors, boards and controls",
  "Descaling and sanitising",
  "Drains and water lines",
  "Gas leak detection and refills",
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
    q: "How often should an ice machine be cleaned?",
    a: "Most makers recommend cleaning and sanitising at least twice a year, and more often in busy venues or places with hard water. Ask us about a service.",
  },
  {
    q: "Is it safe to serve ice from a machine that smells or tastes off?",
    a: "No. Ice counts as food. Throw the ice away, do not serve it, and call us.",
  },
  {
    q: "Can it be repaired, or does it need replacing?",
    a: "Most faults can be repaired. If a machine is beyond sensible repair, we say so and explain why before you spend money on it.",
  },
  {
    q: "What if you need a part?",
    a: "We bring common parts to the job where we can. For bigger parts, such as a compressor, we tell you how long it will take before you commit.",
  },
]

export default function IceMachineRepairsLandingPage() {
  return (
    <div className="bg-white pb-24 text-[#0d1b2e] md:pb-0">
      <LandingHeader />

      <Hero
        place="ice_machine"
        h1="Friday night. The bar is full. The ice machine just stopped."
        lead="Cold Fix repairs commercial ice machines for bars, restaurants, hotels and shops across Gauteng. Call or WhatsApp now. We book a technician the same day, and emergency callouts run 24/7."
        micro="Send a photo of the brand plate and the display lights on WhatsApp. It helps us arrive with the right parts."
        visual={{
          variant: "climb",
          start: 12,
          end: 0,
          decimals: 0,
          unit: "kg",
          limit: 3,
          limitLabel: "Running out",
          alarmWhen: "below",
          gaugeMin: 0,
          gaugeMax: 14,
          icons: ["snow", "droplets"],
          okText: "Making ice",
          alarmText: "Out of ice",
          label: "Ice bin level dropping from full to empty, with an out of ice alarm.",
          caption: "When the ice runs out, so do the drink orders.",
        }}
      />

      <CostSection
        title="Every hour without ice costs you trade."
        note="A bar without ice is a bar without cold drinks. The loss starts the moment the bin is empty."
        rows={[
          { t: "8pm", h: "The bin is running low.", p: "Staff start rationing ice and stop filling the big glasses." },
          { t: "10pm", h: "The bar runs out.", p: "Drinks go warm. Customers send them back or stop ordering." },
          { t: "Midnight", h: "You are buying bags of ice.", p: "A run to the shop costs money and staff time, and it still does not keep up." },
        ]}
        closing="Every hour without ice is trade you do not get back."
      />

      {/* Fault finder */}
      <section className="bg-[#e6f0f5]">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <h2 className={`${h2Class} max-w-[40rem]`} style={displayFont}>
            Tell us what the ice machine is doing.
          </h2>
          <p className="mb-10 mt-5 max-w-[36rem] leading-relaxed text-[#33475f]">
            Pick the one closest to your problem. You will see what usually causes it, what we do about it, and what to
            do while you wait.
          </p>
          <FaultFinder faults={ICE_MACHINE_FAULTS} place="ice_fault_finder" />
        </div>
      </section>

      <PhotoSection
        title="What is inside an ice machine."
        intro="The parts we test, clean and replace."
        keys={["iceMachine", "iceCompressor", "iceMakerAssembly", "iceModuleRemoved", "iceTray"]}
      />

      <StepsSection title="From your call to ice again." steps={steps} />

      <ScopeSection
        title="If it makes ice, we repair it."
        intro="We work with bars, restaurants, hotels and shops. Repairs only on this page, so the people who answer the phone are the people who fix faults all day. Tell us the brand and model when you call."
        items={scope}
      />

      <FaqSection faqs={faqs} />

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-12 md:py-16">
          <p className="m-0 text-[1.1875rem] leading-relaxed text-[#33475f]">
            Cold room or commercial fridge down as well?{" "}
            <Link
              href="/cold-room-commercial-refrigeration-repairs"
              className="font-bold text-[#0f2c59] underline underline-offset-4 hover:text-[#b86a00]"
            >
              See cold room and commercial refrigeration repairs
            </Link>
            .
          </p>
        </div>
      </section>

      <FinalCta
        place="ice_machine"
        headline="Get the ice flowing again."
        lead="Call or WhatsApp now. Tell us what the machine is doing and where you are, and we will tell you when a technician can be there."
        display={{
          variant: "steady",
          end: 12,
          decimals: 0,
          unit: "kg",
          limit: 3,
          limitLabel: "Running out",
          alarmWhen: "below",
          gaugeMin: 0,
          gaugeMax: 14,
          icons: ["snow", "droplets"],
          okText: "Making ice",
          label: "Ice bin level showing full.",
          caption: "This is the bin we want you looking at when we leave.",
        }}
      />

      <LandingStickyBar />
    </div>
  )
}
