// File path: app/air-conditioning-services/page.tsx
// Clean URL: https://www.coldfix.co.za/air-conditioning-services

import type { Metadata } from "next"
import { ServicePageTemplate } from "@/components/service-page-template"
import { SERVICE_CONTENT } from "@/components/site/service-content"
import { Snowflake, Zap, Award, Wrench, Building2, Clock, Refrigerator, WashingMachine } from "lucide-react"

export const metadata: Metadata = {
  title: "Air Conditioning Services in Gauteng | AC Installation, Repairs and Servicing | Cold Fix Services",
  description:
    "Professional air conditioning installation, servicing, repairs and gas refills in Gauteng. Expert aircon technicians for homes and businesses in Pretoria, Johannesburg and Midrand. Split systems, ducted AC, inverters. Same day service available.",
  keywords:
    "air conditioning Gauteng, AC installation Pretoria, aircon repairs Johannesburg, aircon service Midrand, split system installation, ducted air conditioning, aircon gas refill, inverter aircon",
  openGraph: {
    title: "Air Conditioning Services | Cold Fix Services Gauteng",
    description:
      "Reliable climate control for homes and businesses in Gauteng. Professional AC installation, servicing, repairs and gas refills. Same day service available.",
    images: [
      {
        url: "/air-conditioning-service-gauteng.png",
        width: 1200,
        height: 630,
        alt: "Professional air conditioning installation in Gauteng by Cold Fix Services",
      },
    ],
  },
}

export default function AirConditioningServicesPage() {
  return (
    <ServicePageTemplate
      content={SERVICE_CONTENT.airConditioning}
      title="Air Conditioning Services"
      description="Stay comfortable all year round with professional air conditioning solutions from Cold Fix Services. We install, service, and repair split systems, multi split units, ducted systems, and inverters for homes and businesses across Gauteng. Our technicians are refrigerant handling certified and work with all major brands to keep your space cool and your running costs low."
      icon={Snowflake}
      heroImage="/air-conditioning-service-gauteng.png"
      priceRange="Free quotes"
      responseTime="Same day"
      features={[
        "Complete AC installation",
        "Split system air conditioning",
        "Multi split installations",
        "Ducted air conditioning systems",
        "Inverter air conditioners",
        "Regular servicing and maintenance",
        "Aircon repairs and fault finding",
        "Gas refills and recharging",
        "Filter and coil cleaning",
        "Thermostat and control setup",
        "Energy efficient upgrades",
        "Commercial climate control",
      ]}
      benefits={[
        {
          title: "Year Round Comfort",
          description:
            "Stay cool in summer and warm in winter with efficient, reliable climate control installed and maintained by our certified technicians.",
          icon: Snowflake,
        },
        {
          title: "Lower Running Costs",
          description:
            "We recommend and install energy efficient inverter units that reduce electricity use and keep your monthly bills down.",
          icon: Zap,
        },
        {
          title: "Certified Technicians",
          description:
            "Qualified, refrigerant handling certified technicians who install, service, and repair all major air conditioning brands.",
          icon: Award,
        },
        {
          title: "All Major Brands",
          description:
            "We work with leading brands including Samsung, LG, Midea, Panasonic, Hisense, and more for both supply and service.",
          icon: Building2,
        },
        {
          title: "Preventative Servicing",
          description:
            "Scheduled servicing keeps your system efficient, extends its lifespan, and prevents costly breakdowns.",
          icon: Wrench,
        },
        {
          title: "Fast Response",
          description:
            "Same day service for repairs and emergency callouts, because a broken aircon in a heatwave cannot wait.",
          icon: Clock,
        },
      ]}
      process={[
        {
          step: 1,
          title: "Free Assessment",
          description:
            "We assess your space, cooling needs, and budget, then recommend the best air conditioning solution for you.",
        },
        {
          step: 2,
          title: "Professional Installation",
          description:
            "Our certified technicians install your system with care, ensuring correct placement, connection, and testing.",
        },
        {
          step: 3,
          title: "System Testing",
          description:
            "We test cooling capacity, airflow, thermostat settings, and overall performance before we hand over.",
        },
        {
          step: 4,
          title: "Servicing Plan",
          description:
            "We offer scheduled servicing plans to keep your system running efficiently throughout the year.",
        },
      ]}
      relatedServices={[
        { title: "Refrigeration Repairs", href: "/refrigeration-repairs", icon: Refrigerator },
        { title: "HVAC Maintenance Contracts", href: "/hvac-maintenance-contracts", icon: Wrench },
        { title: "Electrical Services", href: "/electrical-services", icon: Zap },
        { title: "Appliance Repairs", href: "/appliance-repairs", icon: WashingMachine },
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
      {/* Additional Content Section */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-3xl font-bold">Complete Air Conditioning Solutions for Gauteng</h2>

            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Whether you need a new installation for your home, aircon repairs for your office, or regular servicing for a commercial system, <strong>Cold Fix Services</strong> has the skill and experience to deliver reliable, energy efficient climate control across <strong>Pretoria, Johannesburg, Midrand</strong>, and all of Gauteng.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="p-6 rounded-xl bg-card border border-border hover:border-secondary/50 transition-all">
                  <h3 className="font-bold text-lg mb-2 text-secondary flex items-center gap-2">
                    <Snowflake className="h-5 w-5" />
                    Residential Installations
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Split systems, multi split units, and ducted air conditioning for homes of all sizes, from single rooms to whole house climate control.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-card border border-border hover:border-secondary/50 transition-all">
                  <h3 className="font-bold text-lg mb-2 text-secondary flex items-center gap-2">
                    <Building2 className="h-5 w-5" />
                    Commercial Systems
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Air conditioning for offices, retail spaces, and restaurants that need powerful, efficient climate control.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-card border border-border hover:border-secondary/50 transition-all">
                  <h3 className="font-bold text-lg mb-2 text-secondary flex items-center gap-2">
                    <Wrench className="h-5 w-5" />
                    Repairs and Gas Refills
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Fast response for breakdowns, refrigerant leaks, compressor issues, thermostat faults, and all aircon repairs.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-card border border-border hover:border-secondary/50 transition-all">
                  <h3 className="font-bold text-lg mb-2 text-secondary flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Servicing and Maintenance
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Regular servicing including filter cleaning, gas top ups, coil cleaning, and performance checks to keep your system efficient.
                  </p>
                </div>
              </div>

              <div className="mt-8 p-6 rounded-xl bg-gradient-to-br from-secondary/5 to-accent/5 border border-border">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Clock className="h-6 w-6 text-secondary" />
                  Emergency Aircon Repairs Available
                </h3>
                <p className="text-muted-foreground mb-4">
                  Air conditioning breakdowns never happen at a convenient time. We offer same day emergency repairs across Gauteng. Call us on <strong className="text-secondary">+27 70 309 6749</strong> for immediate help.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ServicePageTemplate>
  )
}
