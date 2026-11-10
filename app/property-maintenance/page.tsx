// File path: app/property-maintenance/page.tsx
// Clean URL: https://www.coldfix.co.za/property-maintenance

import type { Metadata } from "next"
import { ServicePageTemplate } from "@/components/service-page-template"
import { SERVICE_CONTENT } from "@/components/site/service-content"
import { CalendarClock, Clock, ShieldCheck, TrendingUp, CheckCircle, Settings, Wind, Refrigerator, Store } from "lucide-react"

export const metadata: Metadata = {
  title: "Maintenance Contracts in Gauteng | Scheduled Appliance and Cooling Servicing | Cold Fix Services",
  description:
    "Scheduled maintenance contracts for homes and businesses across Gauteng. Regular servicing for air conditioning, refrigeration, and appliances keeps your equipment reliable. Serving Pretoria, Johannesburg and Midrand.",
  keywords:
    "maintenance contracts Gauteng, appliance servicing plan Pretoria, aircon maintenance Johannesburg, refrigeration servicing Midrand, scheduled maintenance, cooling service plan",
  openGraph: {
    title: "Maintenance Contracts | Cold Fix Services Gauteng",
    description:
      "Scheduled servicing for homes and businesses that keeps your appliances and cooling equipment working year round across Gauteng.",
    images: [
      {
        url: "/property-maintenance-worker-repairing-fixtures-in-a.jpg",
        width: 1200,
        height: 630,
        alt: "Maintenance contracts for appliances and cooling equipment in Gauteng by Cold Fix Services",
      },
    ],
  },
}

export default function MaintenanceContractsPage() {
  return (
    <ServicePageTemplate
      content={SERVICE_CONTENT.propertyMaintenance}
      title="Maintenance Contracts"
      description="Regular servicing keeps your appliances and cooling equipment reliable and cheaper to run. Cold Fix Services offers scheduled maintenance contracts for homes and businesses across Gauteng, covering air conditioning, refrigeration, and household appliances. Planned visits mean fewer breakdowns, longer equipment life, and priority support when you need it."
      icon={CalendarClock}
      heroImage="/property-maintenance-worker-repairing-fixtures-in-a.jpg"
      priceRange="Tailored plans"
      responseTime="Priority response"
      features={[
        "Scheduled air conditioning servicing",
        "Regular refrigeration maintenance",
        "Household appliance servicing",
        "Filter cleaning and replacement",
        "Gas pressure checks and top ups",
        "Coil and condenser cleaning",
        "Electrical and safety checks",
        "Priority response for contract clients",
        "Early fault detection",
        "Service records and reporting",
        "Plans for homes and businesses",
        "Single site and multi site contracts",
      ]}
      benefits={[
        {
          title: "Fewer Breakdowns",
          description:
            "Regular servicing catches small problems early, before they turn into expensive failures at the worst possible time.",
          icon: ShieldCheck,
        },
        {
          title: "Lower Running Costs",
          description:
            "Clean, well tuned equipment uses less energy, which keeps your electricity bills down month after month.",
          icon: Settings,
        },
        {
          title: "Priority Support",
          description:
            "Contract clients move to the front of the queue when a breakdown does happen, so you are never left waiting.",
          icon: Clock,
        },
        {
          title: "Longer Equipment Life",
          description:
            "Planned maintenance protects your investment and extends the life of your appliances and cooling systems.",
          icon: TrendingUp,
        },
        {
          title: "Clear Records",
          description:
            "You receive service reports after every visit, so you always know what was checked and what was done.",
          icon: CheckCircle,
        },
        {
          title: "Tailored Plans",
          description:
            "We build a maintenance schedule around your home or business, your equipment, and your budget.",
          icon: CalendarClock,
        },
      ]}
      process={[
        {
          step: 1,
          title: "Assessment",
          description:
            "We review your appliances and cooling equipment to understand your servicing needs and priorities.",
        },
        {
          step: 2,
          title: "Tailored Plan",
          description:
            "We propose a maintenance schedule and quote that fits your property, equipment, and budget.",
        },
        {
          step: 3,
          title: "Scheduled Servicing",
          description:
            "Our technicians carry out regular servicing at agreed intervals and keep detailed records.",
        },
        {
          step: 4,
          title: "Reporting and Support",
          description:
            "You receive service reports and priority support, so your equipment stays reliable year round.",
        },
      ]}
      relatedServices={[
        { title: "HVAC Maintenance Contracts", href: "/hvac-maintenance-contracts", icon: Settings },
        { title: "Air Conditioning Services", href: "/air-conditioning-services", icon: Wind },
        { title: "Refrigeration Repairs", href: "/refrigeration-repairs", icon: Refrigerator },
        { title: "Commercial Refrigeration", href: "/commercial-refrigeration", icon: Store },
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
            <h2 className="mb-8 text-3xl font-bold">Servicing Plans That Keep You Running</h2>

            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6">
                The best way to avoid a breakdown is to service your equipment before it fails. <strong>Cold Fix Services</strong> offers scheduled maintenance contracts for homes and businesses across <strong>Pretoria, Johannesburg, Midrand</strong>, and the wider Gauteng region. We tailor every plan to your appliances and cooling equipment, so you get regular care, priority support, and clear records on every visit.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h3 className="font-bold text-lg mb-2 text-secondary">Home Maintenance Plans</h3>
                  <p className="text-sm text-muted-foreground">
                    Regular servicing of your air conditioners, fridges, and key appliances to keep your home comfortable and running.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h3 className="font-bold text-lg mb-2 text-secondary">Business Maintenance Plans</h3>
                  <p className="text-sm text-muted-foreground">
                    Planned servicing for shops, offices, and restaurants that protects stock, comfort, and trading hours.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h3 className="font-bold text-lg mb-2 text-secondary">Priority Response</h3>
                  <p className="text-sm text-muted-foreground">
                    Contract clients get priority when something does go wrong, keeping downtime to a minimum.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h3 className="font-bold text-lg mb-2 text-secondary">Clear Reporting</h3>
                  <p className="text-sm text-muted-foreground">
                    Detailed service records after each visit, so you always know the condition of your equipment.
                  </p>
                </div>
              </div>

              <div className="mt-8 p-6 rounded-xl bg-gradient-to-br from-secondary/5 to-accent/5 border border-border">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <CalendarClock className="h-6 w-6 text-secondary" />
                  Set Up a Maintenance Plan
                </h3>
                <p className="text-muted-foreground mb-4">
                  Keep your appliances and cooling equipment in top condition all year. Call us on <strong className="text-secondary">+27 70 309 6749</strong> to set up a plan that suits your home or business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ServicePageTemplate>
  )
}
