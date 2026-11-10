// File path: app/hvac-maintenance-contracts/page.tsx
// Clean URL: https://www.coldfix.co.za/hvac-maintenance-contracts

import type { Metadata } from "next"
import { ServicePageTemplate } from "@/components/service-page-template"
import { SERVICE_CONTENT } from "@/components/site/service-content"
import { ShieldCheck, Snowflake, Wrench, Clock, Award, Wind, Store, Warehouse } from "lucide-react"

export const metadata: Metadata = {
  title: "HVAC Maintenance Contracts in Gauteng | Air Conditioning Service Plans | Cold Fix Services",
  description:
    "HVAC and air conditioning maintenance contracts across Gauteng. Scheduled servicing for offices, retail, and industrial sites keeps your systems efficient and reliable. Serving Pretoria, Johannesburg and Midrand.",
  keywords:
    "HVAC maintenance contract Gauteng, air conditioning service plan Johannesburg, aircon maintenance Pretoria, commercial HVAC servicing, refrigeration maintenance Midrand",
  openGraph: {
    title: "HVAC Maintenance Contracts | Cold Fix Services Gauteng",
    description:
      "Scheduled HVAC and refrigeration maintenance plans that keep your systems efficient and reliable across Gauteng.",
    images: [
      {
        url: "/hvac-maintenance-technician.png",
        width: 1200,
        height: 630,
        alt: "HVAC maintenance contracts in Gauteng by Cold Fix Services",
      },
    ],
  },
}

export default function HvacMaintenancePage() {
  return (
    <ServicePageTemplate
      content={SERVICE_CONTENT.hvacMaintenanceContracts}
      title="HVAC Maintenance Contracts"
      description="Regular maintenance keeps air conditioning and refrigeration systems efficient, reliable, and cheaper to run. Cold Fix Services offers tailored HVAC maintenance contracts for offices, retail, and industrial sites across Gauteng. Scheduled servicing means fewer breakdowns, longer equipment life, and lower running costs."
      icon={ShieldCheck}
      heroImage="/hvac-maintenance-technician.png"
      priceRange="Tailored plans"
      responseTime="Priority response"
      features={[
        "Scheduled air conditioning servicing",
        "Refrigeration system maintenance",
        "Filter cleaning and replacement",
        "Gas pressure checks and top ups",
        "Coil and condenser cleaning",
        "Electrical and control checks",
        "Performance and efficiency reporting",
        "Priority breakdown response for contract clients",
        "Preventative fault detection",
        "Compliance and record keeping",
        "Flexible plans by site and equipment",
        "Single site and multi site contracts",
      ]}
      benefits={[
        {
          title: "Fewer Breakdowns",
          description:
            "Regular servicing catches small problems before they become expensive failures, keeping your systems running.",
          icon: ShieldCheck,
        },
        {
          title: "Lower Running Costs",
          description:
            "Clean, well tuned systems use less energy, which lowers your electricity bills over time.",
          icon: Snowflake,
        },
        {
          title: "Priority Response",
          description:
            "Contract clients get priority when a breakdown does happen, minimising downtime for your business.",
          icon: Clock,
        },
        {
          title: "Certified Technicians",
          description:
            "Refrigerant handling certified technicians who service your equipment to manufacturer standards.",
          icon: Award,
        },
        {
          title: "Longer Equipment Life",
          description:
            "Proper maintenance extends the life of your air conditioning and refrigeration investment.",
          icon: Wind,
        },
        {
          title: "Tailored Plans",
          description:
            "We build a maintenance schedule around your sites, equipment, and budget, with no unnecessary extras.",
          icon: Wrench,
        },
      ]}
      process={[
        {
          step: 1,
          title: "Site Survey",
          description:
            "We assess your equipment and sites to understand your maintenance needs and priorities.",
        },
        {
          step: 2,
          title: "Tailored Plan",
          description:
            "We propose a maintenance schedule and quote that fits your equipment, sites, and budget.",
        },
        {
          step: 3,
          title: "Scheduled Servicing",
          description:
            "Our technicians carry out regular servicing at agreed intervals, keeping detailed records.",
        },
        {
          step: 4,
          title: "Reporting and Support",
          description:
            "You receive service reports and priority support, so your systems stay reliable year round.",
        },
      ]}
      relatedServices={[
        { title: "Air Conditioning Services", href: "/air-conditioning-services", icon: Wind },
        { title: "Commercial Refrigeration", href: "/commercial-refrigeration", icon: Store },
        { title: "Cold Room Installation and Repair", href: "/cold-room-installation-repair", icon: Warehouse },
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
            <h2 className="mb-8 text-3xl font-bold">Maintenance Plans That Protect Your Systems</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Air conditioning and refrigeration equipment works hardest when you can least afford a breakdown. <strong>Cold Fix Services</strong> offers scheduled maintenance contracts that keep your systems efficient and reliable for businesses across <strong>Pretoria, Johannesburg, Midrand</strong>, and the wider Gauteng region. We tailor every plan to your equipment and sites.
              </p>
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h3 className="font-bold text-lg mb-2 text-secondary">Offices and Retail</h3>
                  <p className="text-sm text-muted-foreground">
                    Regular aircon servicing that keeps staff and customers comfortable and systems efficient.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h3 className="font-bold text-lg mb-2 text-secondary">Industrial and Cold Chain</h3>
                  <p className="text-sm text-muted-foreground">
                    Preventative refrigeration maintenance that protects stock and keeps operations running.
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
