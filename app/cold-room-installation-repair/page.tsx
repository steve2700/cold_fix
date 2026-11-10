// File path: app/cold-room-installation-repair/page.tsx
// Clean URL: https://www.coldfix.co.za/cold-room-installation-repair

import type { Metadata } from "next"
import { ServicePageTemplate } from "@/components/service-page-template"
import { SERVICE_CONTENT } from "@/components/site/service-content"
import { Warehouse, Snowflake, Wrench, Clock, Award, ShieldCheck, Store, Refrigerator } from "lucide-react"

export const metadata: Metadata = {
  title: "Cold Room Installation and Repair in Gauteng | Cold Fix Services",
  description:
    "Cold room installation, repair, and maintenance across Gauteng. We build and service walk in cold rooms and freezer rooms for restaurants, butcheries, and businesses. Serving Pretoria, Johannesburg and Midrand.",
  keywords:
    "cold room installation Gauteng, cold room repair Johannesburg, walk in freezer room Pretoria, freezer room repair, cold room maintenance Midrand",
  openGraph: {
    title: "Cold Room Installation and Repair | Cold Fix Services Gauteng",
    description:
      "Professional cold room and freezer room installation, repair, and maintenance for businesses across Gauteng.",
    images: [
      {
        url: "/cold-room-installation.png",
        width: 1200,
        height: 630,
        alt: "Cold room installation and repair in Gauteng by Cold Fix Services",
      },
    ],
  },
}

export default function ColdRoomPage() {
  return (
    <ServicePageTemplate
      content={SERVICE_CONTENT.coldRoomInstallationRepair}
      title="Cold Room Installation and Repair"
      description="Cold Fix Services designs, installs, repairs, and maintains walk in cold rooms and freezer rooms for restaurants, butcheries, retailers, and other businesses across Gauteng. From new installations to breakdown repairs and routine maintenance, our technicians keep your stock at the right temperature and your operation running."
      icon={Warehouse}
      heroImage="/cold-room-installation.png"
      priceRange="Free quotes"
      responseTime="Same day"
      features={[
        "New cold room installation",
        "Freezer room installation",
        "Cold room repairs and breakdowns",
        "Refrigeration plant and condenser repairs",
        "Temperature control and monitoring setup",
        "Panel, door, and seal replacement",
        "Evaporator and fan repairs",
        "Gas leak detection and refills",
        "Preventative maintenance visits",
        "Insulated panel repairs",
        "Defrost system repairs",
        "Emergency breakdown callouts",
      ]}
      benefits={[
        {
          title: "Protect Your Stock",
          description:
            "A cold room failure can ruin thousands in stock. We respond fast to keep your temperatures stable and your losses at zero.",
          icon: ShieldCheck,
        },
        {
          title: "Certified Technicians",
          description:
            "Refrigerant handling certified technicians experienced in commercial cold room and freezer room systems.",
          icon: Award,
        },
        {
          title: "Same Day Response",
          description:
            "When a cold room goes down, every hour counts. We prioritise breakdown callouts to get you cooling again quickly.",
          icon: Clock,
        },
        {
          title: "Built to Last",
          description:
            "We install and repair with quality components and proper methods so your cold room performs reliably for years.",
          icon: Snowflake,
        },
        {
          title: "Honest Pricing",
          description:
            "Clear quotes before any work starts, with practical advice on installation, repair, and maintenance options.",
          icon: Wrench,
        },
        {
          title: "Business Ready",
          description:
            "We understand food safety and uptime pressures, and we work around your trading hours wherever possible.",
          icon: Store,
        },
      ]}
      process={[
        {
          step: 1,
          title: "Site Assessment",
          description:
            "We visit your site to assess your cooling needs, space, and power, then plan the right installation or repair.",
        },
        {
          step: 2,
          title: "Clear Quote",
          description:
            "You receive a detailed quote covering equipment, parts, and labour with no hidden costs.",
        },
        {
          step: 3,
          title: "Installation or Repair",
          description:
            "Our technicians complete the work to a high standard, using quality components and proper refrigeration practice.",
        },
        {
          step: 4,
          title: "Testing and Handover",
          description:
            "We confirm the cold room holds the correct temperature and brief you on care and maintenance.",
        },
      ]}
      relatedServices={[
        { title: "Commercial Refrigeration", href: "/commercial-refrigeration", icon: Store },
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
            <h2 className="mb-8 text-3xl font-bold">Cold Rooms Built and Maintained for Gauteng Businesses</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Whether you run a restaurant, butchery, supermarket, or distribution business, your cold room is central to your operation. <strong>Cold Fix Services</strong> installs new cold rooms and freezer rooms, repairs failing units, and keeps existing rooms in top condition across <strong>Pretoria, Johannesburg, Midrand</strong>, and the wider Gauteng region.
              </p>
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h3 className="font-bold text-lg mb-2 text-secondary">Installations</h3>
                  <p className="text-sm text-muted-foreground">
                    New walk in cold rooms and freezer rooms sized to your stock, space, and power supply.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h3 className="font-bold text-lg mb-2 text-secondary">Repairs and Maintenance</h3>
                  <p className="text-sm text-muted-foreground">
                    Fast breakdown repairs and scheduled maintenance to prevent costly failures and stock loss.
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
