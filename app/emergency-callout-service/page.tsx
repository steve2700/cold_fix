// File path: app/emergency-callout-service/page.tsx
// Clean URL: https://www.coldfix.co.za/emergency-callout-service

import type { Metadata } from "next"
import { ServicePageTemplate } from "@/components/service-page-template"
import { SERVICE_CONTENT } from "@/components/site/service-content"
import { Clock, Phone, Wrench, Award, ShieldCheck, Snowflake, Refrigerator, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "Emergency Callout Service in Gauteng | Fast Refrigeration and Appliance Repairs | Cold Fix Services",
  description:
    "Emergency callout service for refrigeration, air conditioning, and appliance breakdowns across Gauteng. Fast response to protect your stock and get you running again. Serving Pretoria, Johannesburg and Midrand.",
  keywords:
    "emergency refrigeration repair Gauteng, emergency aircon repair Johannesburg, urgent fridge repair Pretoria, emergency appliance callout, breakdown repair Midrand",
  openGraph: {
    title: "Emergency Callout Service | Cold Fix Services Gauteng",
    description:
      "Fast emergency callouts for refrigeration, air conditioning, and appliance breakdowns across Gauteng.",
    images: [
      {
        url: "/emergency-callout-technician.png",
        width: 1200,
        height: 630,
        alt: "Emergency callout service in Gauteng by Cold Fix Services",
      },
    ],
  },
}

export default function EmergencyCalloutPage() {
  return (
    <ServicePageTemplate
      content={SERVICE_CONTENT.emergencyCalloutService}
      title="Emergency Callout Service"
      description="When a fridge, freezer, cold room, or air conditioner fails, every hour counts. Cold Fix Services provides a fast emergency callout service across Gauteng for refrigeration, air conditioning, and appliance breakdowns. We respond quickly to protect your stock, restore cooling, and get your home or business running again."
      icon={Clock}
      heroImage="/emergency-callout-technician.png"
      priceRange="Free quotes"
      responseTime="Rapid response"
      features={[
        "Rapid response refrigeration breakdowns",
        "Emergency air conditioning repairs",
        "Cold room and freezer room callouts",
        "Commercial fridge and freezer breakdowns",
        "Appliance breakdown callouts",
        "On site diagnosis and repair",
        "Temporary solutions to protect stock",
        "Gas leak detection and refills",
        "Compressor and electrical fault repairs",
        "Priority response for maintenance clients",
        "Honest quotes before work begins",
        "Serving homes and businesses",
      ]}
      benefits={[
        {
          title: "Fast Response",
          description:
            "We prioritise emergencies and move quickly to reach you, because a breakdown cannot wait.",
          icon: Clock,
        },
        {
          title: "Protect Your Stock",
          description:
            "For businesses, a cooling failure can mean thousands in losses. We act fast to keep temperatures safe.",
          icon: ShieldCheck,
        },
        {
          title: "Certified Technicians",
          description:
            "Refrigerant handling certified technicians equipped to diagnose and repair on the first visit where possible.",
          icon: Award,
        },
        {
          title: "Homes and Businesses",
          description:
            "Whether it is your kitchen fridge or a commercial cold room, we respond to both residential and commercial emergencies.",
          icon: Refrigerator,
        },
        {
          title: "Honest Pricing",
          description:
            "Even in an emergency, you get a clear quote before we start, with no inflated callout surprises.",
          icon: Wrench,
        },
        {
          title: "Prepared Technicians",
          description:
            "Our teams carry common spares so many emergency repairs can be completed on the spot.",
          icon: Snowflake,
        },
      ]}
      process={[
        {
          step: 1,
          title: "Call Us",
          description:
            "Phone our team, describe the fault, and we will dispatch a technician as quickly as possible.",
        },
        {
          step: 2,
          title: "Rapid Diagnosis",
          description:
            "Our technician arrives, diagnoses the breakdown on site, and explains what needs to be done.",
        },
        {
          step: 3,
          title: "On Site Repair",
          description:
            "We repair on the spot where possible, or take temporary measures to protect your stock and cooling.",
        },
        {
          step: 4,
          title: "Back Up and Running",
          description:
            "We confirm the system is working correctly and advise on any follow up needed.",
        },
      ]}
      relatedServices={[
        { title: "Refrigeration Repairs", href: "/refrigeration-repairs", icon: Refrigerator },
        { title: "Air Conditioning Services", href: "/air-conditioning-services", icon: Snowflake },
        { title: "Appliance Repairs", href: "/appliance-repairs", icon: Wrench },
        { title: "Electrical Services", href: "/electrical-services", icon: Zap },
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
            <h2 className="mb-8 text-3xl font-bold">Fast Help When Cooling Fails</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6">
                A sudden breakdown can put your food, medication, or business stock at risk. <strong>Cold Fix Services</strong> offers a fast emergency callout service for refrigeration, air conditioning, and appliance failures across <strong>Pretoria, Johannesburg, Midrand</strong>, and the wider Gauteng region. Call us and we will get a technician to you as soon as possible.
              </p>
              <div className="rounded-xl bg-card border border-border p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary/10">
                  <Phone className="h-6 w-6 text-secondary" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-secondary">Emergency? Call Cold Fix Services</h3>
                  <p className="text-sm text-muted-foreground">
                    Reach us on{" "}
                    <a href="tel:+27703096749" className="font-semibold text-foreground underline">
                      +27 70 309 6749
                    </a>{" "}
                    for a rapid response across Gauteng.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ServicePageTemplate>
  )
}
