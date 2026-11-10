// File path: app/commercial-refrigeration/page.tsx
// Clean URL: https://www.coldfix.co.za/commercial-refrigeration

import type { Metadata } from "next"
import { ServicePageTemplate } from "@/components/service-page-template"
import { SERVICE_CONTENT } from "@/components/site/service-content"
import { Store, Snowflake, Wrench, Clock, Award, ShieldCheck, Warehouse, Refrigerator } from "lucide-react"

export const metadata: Metadata = {
  title: "Commercial Refrigeration in Gauteng | Display Fridges and Freezers | Cold Fix Services",
  description:
    "Commercial refrigeration repair and maintenance across Gauteng. We service display fridges, under counter units, bottle coolers, ice machines, and deli cabinets for shops and restaurants. Serving Pretoria, Johannesburg and Midrand.",
  keywords:
    "commercial refrigeration Gauteng, display fridge repair Johannesburg, bottle cooler repair Pretoria, ice machine repair, deli fridge repair Midrand",
  openGraph: {
    title: "Commercial Refrigeration | Cold Fix Services Gauteng",
    description:
      "Repair and maintenance for display fridges, coolers, ice machines, and commercial units across Gauteng.",
    images: [
      {
        url: "/commercial-refrigeration-display.png",
        width: 1200,
        height: 630,
        alt: "Commercial refrigeration service in Gauteng by Cold Fix Services",
      },
    ],
  },
}

export default function CommercialRefrigerationPage() {
  return (
    <ServicePageTemplate
      content={SERVICE_CONTENT.commercialRefrigeration}
      title="Commercial Refrigeration"
      description="Cold Fix Services keeps commercial refrigeration running for shops, restaurants, bars, and supermarkets across Gauteng. We repair and maintain display fridges, under counter units, bottle coolers, deli cabinets, ice machines, and more, helping you protect stock, meet food safety standards, and avoid costly downtime."
      icon={Store}
      heroImage="/commercial-refrigeration-display.png"
      priceRange="Free quotes"
      responseTime="Same day"
      features={[
        "Display fridge repairs",
        "Bottle cooler and beverage fridge repairs",
        "Under counter fridge and freezer repairs",
        "Deli and butchery cabinet repairs",
        "Ice machine repairs and servicing",
        "Blast chiller repairs",
        "Refrigerant gas leak detection and refills",
        "Compressor and condenser repairs",
        "Thermostat and controller repairs",
        "Door seal and gasket replacement",
        "Preventative maintenance plans",
        "Emergency breakdown callouts",
      ]}
      benefits={[
        {
          title: "Minimise Downtime",
          description:
            "Commercial units keep your business trading. We respond fast to get faulty equipment back online and your stock safe.",
          icon: Clock,
        },
        {
          title: "Certified Technicians",
          description:
            "Refrigerant handling certified technicians experienced across a wide range of commercial refrigeration equipment.",
          icon: Award,
        },
        {
          title: "Protect Your Stock",
          description:
            "We keep your fridges and freezers at safe temperatures so you avoid spoilage and food safety risks.",
          icon: ShieldCheck,
        },
        {
          title: "All Equipment Types",
          description:
            "From bottle coolers to ice machines and deli cabinets, we service the full range of commercial units.",
          icon: Refrigerator,
        },
        {
          title: "Honest Pricing",
          description:
            "Clear quotes before any work, with practical advice on repairs, maintenance, and replacement.",
          icon: Wrench,
        },
        {
          title: "Maintenance Plans",
          description:
            "Scheduled servicing keeps your equipment reliable and helps you avoid unexpected breakdowns.",
          icon: Snowflake,
        },
      ]}
      process={[
        {
          step: 1,
          title: "Assessment",
          description:
            "We inspect the faulty equipment, test the cooling system, and identify the cause of the problem.",
        },
        {
          step: 2,
          title: "Clear Quote",
          description:
            "You receive an honest quote covering parts and labour with no hidden costs.",
        },
        {
          step: 3,
          title: "Repair or Service",
          description:
            "Our technicians complete the repair or service using quality parts and proper refrigeration methods.",
        },
        {
          step: 4,
          title: "Testing and Handover",
          description:
            "We confirm the unit holds the correct temperature and make sure your equipment is ready for trade.",
        },
      ]}
      relatedServices={[
        { title: "Cold Room Installation and Repair", href: "/cold-room-installation-repair", icon: Warehouse },
        { title: "Refrigeration Repairs", href: "/refrigeration-repairs", icon: Refrigerator },
        { title: "HVAC Maintenance Contracts", href: "/hvac-maintenance-contracts", icon: ShieldCheck },
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
            <h2 className="mb-8 text-3xl font-bold">Commercial Refrigeration You Can Rely On</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Downtime on commercial refrigeration means lost stock and lost sales. <strong>Cold Fix Services</strong> repairs and maintains the fridges, freezers, coolers, and ice machines that keep shops and restaurants running across <strong>Pretoria, Johannesburg, Midrand</strong>, and the wider Gauteng region. We work around your trading hours wherever possible to limit disruption.
              </p>
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h3 className="font-bold text-lg mb-2 text-secondary">Retail and Hospitality</h3>
                  <p className="text-sm text-muted-foreground">
                    Display fridges, bottle coolers, deli cabinets, and ice machines serviced and repaired on site.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h3 className="font-bold text-lg mb-2 text-secondary">Preventative Care</h3>
                  <p className="text-sm text-muted-foreground">
                    Maintenance plans that keep equipment efficient and catch problems before they cause a breakdown.
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
