// File path: app/refrigeration-repairs/page.tsx
// Clean URL: https://www.coldfix.co.za/refrigeration-repairs

import type { Metadata } from "next"
import { ServicePageTemplate } from "@/components/service-page-template"
import {
  Refrigerator,
  Snowflake,
  Wrench,
  Clock,
  Award,
  ShieldCheck,
  Store,
  Warehouse,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Fridge & Freezer Repairs in Gauteng | Cold Fix Services",
  description:
    "Fridge, freezer and refrigerator repairs across Gauteng. We fix cooling faults, refrigerant leaks, thermostats, compressors and more. Same-day callouts available.",
  keywords:
    "fridge repair Gauteng, refrigerator repair Gauteng, freezer repair Gauteng, fridge repair Johannesburg, fridge repair Pretoria, refrigerator repair near me, fridge not cooling repair, fridge technician Gauteng",
  openGraph: {
    title: "Fridge & Freezer Repairs in Gauteng | Cold Fix Services",
    description:
      "Fast fridge and freezer repairs across Gauteng. Cooling faults, refrigerant leaks, compressors, thermostats and more. Same-day callouts available.",
    images: [
      {
        url: "/refrigeration-repair-technician.png",
        width: 1200,
        height: 630,
        alt: "Fridge and freezer repair technician in Gauteng",
      },
    ],
  },
}

export default function RefrigerationRepairsPage() {
  return (
    <ServicePageTemplate
      title="Fridge & Freezer Repairs in Gauteng"
      description="Need a fridge or freezer repair? Cold Fix Services provides fast, reliable on-site repairs for refrigerators, fridges, freezers and chest freezers across Gauteng. Our refrigerant-handling certified technicians diagnose the actual fault, explain the repair clearly and provide an upfront quote before work starts. We repair cooling problems, refrigerant leaks, thermostats, compressors, fans, defrost systems, door seals and more."
      icon={Refrigerator}
      heroImage="/refrigeration-repair-technician.png"
      priceRange="Free quotes"
      responseTime="Same day"
      features={[
        "Fridge and refrigerator repairs",
        "Freezer and chest freezer repairs",
        "Fridge not cooling diagnosis",
        "Refrigerant leak detection and repair",
        "Refrigerant recharge where required",
        "Thermostat and control repairs",
        "Compressor diagnosis and replacement",
        "Door seal and gasket replacement",
        "Defrost system repairs",
        "Fan and evaporator repairs",
        "Bar fridge and beverage cooler repairs",
        "Emergency refrigeration callouts",
      ]}
      benefits={[
        {
          title: "Fast Same-Day Response",
          description:
            "A broken fridge cannot always wait. We respond quickly with same-day callouts where available to help protect your food and stock.",
          icon: Clock,
        },
        {
          title: "Certified Technicians",
          description:
            "Our refrigerant-handling certified technicians diagnose cooling faults and use proper refrigeration repair methods.",
          icon: Award,
        },
        {
          title: "Major Brands Serviced",
          description:
            "We repair major fridge and freezer brands, including Samsung, LG and other common household refrigeration brands.",
          icon: Refrigerator,
        },
        {
          title: "Quality Parts",
          description:
            "We use quality replacement parts and proper repair methods to help restore reliable cooling.",
          icon: ShieldCheck,
        },
        {
          title: "Clear Upfront Quotes",
          description:
            "You receive a clear quote before repair work starts, with honest advice on whether repair or replacement makes more sense.",
          icon: Wrench,
        },
        {
          title: "Cooling Specialists",
          description:
            "We diagnose the root cause of refrigeration faults rather than simply treating the visible symptom.",
          icon: Snowflake,
        },
      ]}
      process={[
        {
          step: 1,
          title: "Tell Us the Problem",
          description:
            "Tell us what your fridge or freezer is doing, whether it is not cooling, leaking, making noise or showing another fault.",
        },
        {
          step: 2,
          title: "On-Site Diagnosis",
          description:
            "A technician inspects the unit and tests the cooling system to identify the actual cause of the problem.",
        },
        {
          step: 3,
          title: "Clear Quote",
          description:
            "You receive an upfront quote for the recommended repair, including parts and labour.",
        },
        {
          step: 4,
          title: "Repair & Test",
          description:
            "We complete the repair using proper techniques and test the unit before handing it back to you.",
        },
      ]}
      relatedServices={[
        {
          title: "Commercial Refrigeration",
          href: "/commercial-refrigeration",
          icon: Store,
        },
        {
          title: "Cold Room Installation and Repair",
          href: "/cold-room-installation-repair",
          icon: Warehouse,
        },
        {
          title: "Appliance Repairs",
          href: "/appliance-repairs",
          icon: Wrench,
        },
        {
          title: "Emergency Callout Service",
          href: "/emergency-callout-service",
          icon: Clock,
        },
      ]}
      serviceAreas={[
        "Pretoria",
        "Johannesburg",
        "Midrand",
        "Sandton",
        "Centurion",
        "Fourways",
        "Randburg",
        "Rosebank",
        "Bedfordview",
        "Roodepoort",
      ]}
    >
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-3xl font-bold">
              Fridge Not Cooling? Get a Fast Repair Across Gauteng
            </h2>

            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Is your fridge running but not getting cold? Is your freezer
                struggling to freeze, leaking water, making unusual noises or
                building up excessive ice?{" "}
                <strong>Cold Fix Services</strong> provides professional fridge,
                refrigerator and freezer repairs across{" "}
                <strong>Pretoria, Johannesburg, Midrand</strong> and the wider
                Gauteng region.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Our technicians diagnose the actual cause of the fault before
                recommending a repair. We handle cooling faults, refrigerant
                leaks, thermostats, compressors, fans, defrost systems, door
                seals and other common refrigeration problems. Where refrigerant
                work is required, we provide leak detection, repair and
                recharge as appropriate.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h3 className="font-bold text-lg mb-2 text-secondary">
                    Common Fridge & Freezer Problems We Fix
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Fridge not cooling, freezer not freezing, temperature
                    problems, refrigerant leaks, water leaks, ice build-up,
                    loud noises, power tripping, faulty thermostats, compressor
                    problems and doors that no longer seal properly.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-card border border-border">
                  <h3 className="font-bold text-lg mb-2 text-secondary">
                    Refrigerant & Gas Problems
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    If your fridge has lost refrigerant, we can inspect the
                    system, check for leaks and carry out the required repair
                    before recharging the system where appropriate.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-card border border-border">
                  <h3 className="font-bold text-lg mb-2 text-secondary">
                    Major Brands Serviced
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    We service major household refrigeration brands, including
                    Samsung, LG and other common fridge and freezer brands.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-card border border-border">
                  <h3 className="font-bold text-lg mb-2 text-secondary">
                    Repair or Replace?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    We give honest advice on whether repairing your fridge or
                    freezer is worthwhile or whether replacement may be the
                    better long-term option.
                  </p>
                </div>
              </div>

              <div className="mt-12 rounded-2xl bg-card border border-border p-8">
                <h2 className="text-2xl font-bold mb-4">
                  Need a Fridge Technician Near You?
                </h2>

                <p className="text-muted-foreground leading-relaxed">
                  If your fridge or freezer is not cooling properly, do not
                  leave the problem until food or stock is spoiled. Contact
                  Cold Fix Services for a diagnosis, clear quote and professional
                  refrigeration repair across Gauteng.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ServicePageTemplate>
  )
}
