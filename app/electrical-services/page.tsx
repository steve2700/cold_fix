// File path: app/electrical-services/page.tsx
// Clean URL: https://www.coldfix.co.za/electrical-services

import type { Metadata } from "next"
import { ServicePageTemplate } from "@/components/service-page-template"
import { SERVICE_CONTENT } from "@/components/site/service-content"
import { Zap, Shield, Award, Lightbulb, Battery, CheckCircle, Wind, Refrigerator, WashingMachine, Wrench } from "lucide-react"

export const metadata: Metadata = {
  title: "Electrical Services for Appliance and Aircon Installs in Gauteng | Cold Fix Services",
  description:
    "Safe electrical connections, wiring, and fault finding for appliance, air conditioning, and refrigeration installations across Gauteng. Serving Pretoria, Johannesburg and Midrand. Same day quotes available.",
  keywords:
    "electrician Gauteng, appliance wiring Pretoria, aircon power connection Johannesburg, electrical fault finding Midrand, isolator installation, dedicated circuit",
  openGraph: {
    title: "Electrical Services | Cold Fix Services Gauteng",
    description:
      "Wiring, fault finding, and safe power connections for appliance and air conditioning installations across Gauteng.",
    images: [
      {
        url: "/electrician-working-on-electrical-panel-in-gauteng.jpg",
        width: 1200,
        height: 630,
        alt: "Electrical connections for appliance and aircon installs in Gauteng by Cold Fix Services",
      },
    ],
  },
}

export default function ElectricalServicesPage() {
  return (
    <ServicePageTemplate
      content={SERVICE_CONTENT.electricalServices}
      title="Electrical Services"
      description="Every appliance, air conditioner, and cold room needs a safe, reliable power supply. Cold Fix Services provides the electrical work that supports our installations, including wiring, fault finding, dedicated circuits, isolators, and safe power connections. Our team makes sure your equipment is connected correctly, safely, and to standard across Gauteng."
      icon={Zap}
      heroImage="/electrician-working-on-electrical-panel-in-gauteng.jpg"
      priceRange="Free quotes"
      responseTime="Same day"
      features={[
        "Power connections for appliance installs",
        "Dedicated circuits for aircon and cold rooms",
        "Isolator switch installation",
        "Plug points for new appliances",
        "Electrical fault finding and diagnostics",
        "Tripping and earth leakage faults",
        "Stove and oven connections",
        "Distribution board checks and upgrades",
        "Safe wiring for refrigeration equipment",
        "Surge protection for sensitive electronics",
        "Rewiring tied to appliance installations",
        "Emergency electrical fault callouts",
      ]}
      benefits={[
        {
          title: "Safe Connections",
          description:
            "We connect appliances, air conditioners, and refrigeration equipment safely, protecting your family, staff, and equipment.",
          icon: Shield,
        },
        {
          title: "Qualified Electricians",
          description:
            "Our electrical work is carried out by qualified electricians who follow South African wiring standards on every job.",
          icon: Award,
        },
        {
          title: "Fault Finding Experts",
          description:
            "Tripping breakers, dead plugs, and earth leakage faults are traced to the source and fixed properly, not patched.",
          icon: CheckCircle,
        },
        {
          title: "Protect Your Equipment",
          description:
            "Correct circuits and surge protection keep your fridges, aircons, and appliances safe from power problems.",
          icon: Battery,
        },
        {
          title: "One Team, One Callout",
          description:
            "We handle the electrical side of your installation so you do not need to arrange a separate electrician.",
          icon: Lightbulb,
        },
        {
          title: "Honest Pricing",
          description:
            "You get a clear quote before any work begins, with no hidden costs and no unnecessary extras.",
          icon: Zap,
        },
      ]}
      process={[
        {
          step: 1,
          title: "Assessment",
          description:
            "We inspect your power supply, board, and circuits to plan a safe connection for your appliance or cooling equipment.",
        },
        {
          step: 2,
          title: "Clear Quote",
          description:
            "You receive an honest quote covering materials and labour, with any safety improvements clearly explained.",
        },
        {
          step: 3,
          title: "Safe Installation",
          description:
            "Our electricians complete the wiring, circuit, or connection to standard, using quality materials.",
        },
        {
          step: 4,
          title: "Testing and Handover",
          description:
            "We test the connection, confirm it is safe and working, and make sure your equipment runs correctly.",
        },
      ]}
      relatedServices={[
        { title: "Air Conditioning Services", href: "/air-conditioning-services", icon: Wind },
        { title: "Appliance Repairs", href: "/appliance-repairs", icon: WashingMachine },
        { title: "Refrigeration Repairs", href: "/refrigeration-repairs", icon: Refrigerator },
        { title: "Plumbing Services", href: "/plumbing-services", icon: Wrench },
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
            <h2 className="mb-8 text-3xl font-bold">Electrical Work That Supports Your Installations</h2>

            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6">
                A new air conditioner, cold room, or major appliance is only as reliable as the power supply behind it. <strong>Cold Fix Services</strong> provides the electrical work that goes hand in hand with our cooling and appliance installations across <strong>Pretoria, Johannesburg, Midrand</strong>, and the wider Gauteng region. From dedicated circuits and isolators to fault finding on equipment that keeps tripping, our qualified electricians make sure everything is connected safely and correctly.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h3 className="font-bold text-lg mb-2 text-secondary">Connections for New Equipment</h3>
                  <p className="text-sm text-muted-foreground">
                    Dedicated circuits, isolators, and plug points for air conditioners, cold rooms, stoves, and large appliances.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h3 className="font-bold text-lg mb-2 text-secondary">Fault Finding and Repairs</h3>
                  <p className="text-sm text-muted-foreground">
                    Tripping breakers, earth leakage faults, dead plugs, and wiring problems traced and fixed at the source.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h3 className="font-bold text-lg mb-2 text-secondary">Board Checks and Upgrades</h3>
                  <p className="text-sm text-muted-foreground">
                    Distribution board inspections and upgrades so your circuits can safely handle modern appliance loads.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h3 className="font-bold text-lg mb-2 text-secondary">Surge and Safety Protection</h3>
                  <p className="text-sm text-muted-foreground">
                    Surge protection and earth leakage safeguards that protect your fridges, aircons, and sensitive electronics.
                  </p>
                </div>
              </div>

              <div className="mt-8 p-6 rounded-xl bg-gradient-to-br from-secondary/5 to-accent/5 border border-border">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Zap className="h-6 w-6 text-secondary" />
                  Need a Safe Power Connection?
                </h3>
                <p className="text-muted-foreground mb-4">
                  Whether you are installing a new air conditioner or tracing a fault that keeps tripping your power, our team can help. Call us on <strong className="text-secondary">+27 70 309 6749</strong> for a free quote across Gauteng.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ServicePageTemplate>
  )
}
