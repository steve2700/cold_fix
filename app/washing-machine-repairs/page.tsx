// File path: app/washing-machine-repairs/page.tsx
// Clean URL: https://www.coldfix.co.za/washing-machine-repairs

import type { Metadata } from "next"
import { ServicePageTemplate } from "@/components/service-page-template"
import { WashingMachine, Wrench, Clock, Award, ShieldCheck, Zap, Droplets, Store } from "lucide-react"

export const metadata: Metadata = {
  title: "Washing Machine Repairs in Gauteng | Same Day Callouts | Cold Fix Services",
  description:
    "Washing machine repairs across Gauteng. We fix machines that won't start, drain, spin, or stop leaking, all major brands, same day callouts, honest quotes. Serving Pretoria, Johannesburg, Fourways and Midrand.",
  keywords:
    "washing machine repair Gauteng, washing machine repair Johannesburg, washing machine repair Fourways, washing machine not spinning, washing machine leaking, washing machine repair Pretoria, front loader repair, top loader repair",
  openGraph: {
    title: "Washing Machine Repairs | Cold Fix Services Gauteng",
    description:
      "Fast, honest washing machine repairs across Gauteng. Same day callouts, all major brands, upfront quotes.",
    images: [
      {
        url: "/washing_machine_repairs.jpg",
        width: 1200,
        height: 630,
        alt: "Washing machine repair technician at work in Gauteng",
      },
    ],
  },
}

export default function WashingMachineRepairsPage() {
  return (
    <ServicePageTemplate
      title="Washing Machine Repairs"
      description="A washing machine that won't start, won't drain, or floods your laundry doesn't wait for a convenient time to break. Cold Fix Services repairs washing machines across Gauteng with same day callouts, honest diagnostics, and quality parts, so laundry day gets back to normal fast."
      icon={WashingMachine}
      heroImage="/washing_machine_repairs.jpg"
      priceRange="Free quotes"
      responseTime="Same day"
      features={[
        "Machine won't start or turn on",
        "Not spinning or spinning unevenly",
        "Not draining or filling with water",
        "Leaking from the door, drum, or base",
        "Loud banging, grinding, or vibrating",
        "Door won't open or lock properly",
        "Error codes and control board faults",
        "Motor and belt replacement",
        "Pump and drainage repairs",
        "Door seal and hinge replacement",
        "Bearing and drum repairs",
        "Front loader and top loader servicing",
      ]}
      benefits={[
        {
          title: "Same Day Callouts",
          description:
            "A machine that's out of action piles up fast. We prioritise washing machine callouts to get your laundry moving again quickly.",
          icon: Clock,
        },
        {
          title: "Fix It, Not Just The Symptom",
          description:
            "We diagnose the actual fault, not just what's easiest to replace, so the same problem doesn't come back in a month.",
          icon: Wrench,
        },
        {
          title: "Honest Repair Or Replace Advice",
          description:
            "If a repair costs more than it's worth, we'll tell you before you spend a cent. No repairs sold for the sake of it.",
          icon: ShieldCheck,
        },
        {
          title: "All Major Brands",
          description:
            "Front loaders, top loaders, and combo units, we service the brands found in most Gauteng homes and rental properties.",
          icon: Award,
        },
        {
          title: "Leak Ready Response",
          description:
            "A leaking machine can damage floors and units below. We treat leak call outs with urgency to limit the damage.",
          icon: Droplets,
        },
        {
          title: "Safe, Tested Work",
          description:
            "Every repair is tested through a full cycle before we consider the job done, not just switched on and left.",
          icon: Zap,
        },
      ]}
      process={[
        {
          step: 1,
          title: "Tell Us What's Wrong",
          description:
            "Call or WhatsApp us with the fault, brand, and your area. We'll give you a realistic idea of what's likely going on before we even arrive.",
        },
        {
          step: 2,
          title: "On Site Diagnosis",
          description:
            "Our technician inspects the machine, runs it where safe to do so, and confirms the actual fault, not a guess.",
        },
        {
          step: 3,
          title: "Upfront Quote",
          description:
            "You get a clear price for parts and labour before any work starts, plus honest advice if replacement makes more sense.",
        },
        {
          step: 4,
          title: "Repair And Full Cycle Test",
          description:
            "We complete the repair and run a full test cycle to confirm it drains, spins, and locks correctly before we leave.",
        },
      ]}
      relatedServices={[
        { title: "Appliance Repairs", href: "/appliance-repairs", icon: WashingMachine },
        { title: "Electrical Services", href: "/electrical-services", icon: Zap },
        { title: "Plumbing Services", href: "/plumbing-services", icon: Droplets },
        { title: "Emergency Callout Service", href: "/emergency-callout-service", icon: Clock },
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
            <h2 className="mb-8 text-3xl font-bold">Washing Machine Repairs You Can Trust, Across Gauteng</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6">
                A broken washing machine is never just an inconvenience, it's laundry piling up, a wet floor, or a
                household routine thrown off. <strong>Cold Fix Services</strong> repairs washing machines for
                homeowners, tenants, and property managers across <strong>Pretoria, Johannesburg, Fourways,
                Midrand</strong>, and the wider Gauteng region, with honest diagnostics and parts that last.
              </p>
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h3 className="font-bold text-lg mb-2 text-secondary">Common Faults We Fix</h3>
                  <p className="text-sm text-muted-foreground">
                    Machines that won't start, won't spin, won't drain, or leak from the door or base, diagnosed and
                    repaired on site in most cases.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h3 className="font-bold text-lg mb-2 text-secondary">Built For Rentals And Landlords</h3>
                  <p className="text-sm text-muted-foreground">
                    Fast turnaround and clear invoicing for property managers and landlords who need tenants back up
                    and running without the back and forth.
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Whether it's a front loader that's stopped mid cycle in Johannesburg or a top loader flooding a
                laundry in Fourways, our technicians arrive with the common parts on hand and the experience to spot
                what's actually wrong, not just what's easiest to replace.
              </p>
            </div>
          </div>
        </div>
      </section>
    </ServicePageTemplate>
  )
}
