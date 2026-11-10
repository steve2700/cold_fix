// File path: app/plumbing-services/page.tsx
// Clean URL: https://www.coldfix.co.za/plumbing-services

import type { Metadata } from "next"
import { ServicePageTemplate } from "@/components/service-page-template"
import { SERVICE_CONTENT } from "@/components/site/service-content"
import { Droplets, Wrench, Clock, ShieldCheck, CheckCircle, Refrigerator, WashingMachine, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "Plumbing Connections for Appliance Installs in Gauteng | Cold Fix Services",
  description:
    "Gas and water connections for appliance, ice maker, and dishwasher installations across Gauteng. Leak repairs tied to fridges and cooling equipment. Serving Pretoria, Johannesburg and Midrand. Same day quotes available.",
  keywords:
    "appliance water connection Gauteng, gas connection Pretoria, dishwasher plumbing Johannesburg, ice maker water line Midrand, washing machine connection, appliance leak repair",
  openGraph: {
    title: "Plumbing Services | Cold Fix Services Gauteng",
    description:
      "Gas and water connections for appliance installs, plus leak repairs tied to fridges, ice makers, and dishwashers across Gauteng.",
    images: [
      {
        url: "/professional-plumber-working-on-pipes-in-a-gauteng-.jpg",
        width: 1200,
        height: 630,
        alt: "Plumbing connections for appliance installs in Gauteng by Cold Fix Services",
      },
    ],
  },
}

export default function PlumbingServicesPage() {
  return (
    <ServicePageTemplate
      content={SERVICE_CONTENT.plumbingServices}
      title="Plumbing Services"
      description="Many appliances need a reliable water or gas connection to work safely. Cold Fix Services provides the plumbing that supports our appliance, refrigeration, and cooling installations, including water lines for dishwashers, washing machines, and ice makers, gas connections for hobs and ovens, and leak repairs on the pipework feeding your equipment across Gauteng."
      icon={Droplets}
      heroImage="/professional-plumber-working-on-pipes-in-a-gauteng-.jpg"
      priceRange="Free quotes"
      responseTime="Same day"
      features={[
        "Water connections for washing machines",
        "Dishwasher water and drain connections",
        "Fridge and ice maker water lines",
        "Gas connections for hobs and ovens",
        "Isolation valves for appliances",
        "Leak detection on appliance pipework",
        "Burst and dripping pipe repairs",
        "Drain connections for new appliances",
        "Tap and mixer replacement",
        "Water pressure checks for appliances",
        "Pipe rerouting for installations",
        "Emergency leak callouts",
      ]}
      benefits={[
        {
          title: "Safe Water and Gas",
          description:
            "We connect your appliances to water and gas safely, so your dishwasher, washing machine, or hob runs without leaks or risk.",
          icon: ShieldCheck,
        },
        {
          title: "One Team, One Callout",
          description:
            "We handle the plumbing side of your appliance install, so you do not need to arrange a separate plumber.",
          icon: Wrench,
        },
        {
          title: "Leak Repairs Done Right",
          description:
            "We trace and repair leaks on the pipework feeding your fridge, ice maker, or dishwasher before they cause damage.",
          icon: Droplets,
        },
        {
          title: "Fast Response",
          description:
            "A leaking connection cannot wait. We respond quickly to protect your floors, cabinets, and appliances from water damage.",
          icon: Clock,
        },
        {
          title: "Quality Fittings",
          description:
            "We use quality valves, hoses, and fittings so your connections stay reliable long after the install is done.",
          icon: CheckCircle,
        },
        {
          title: "Honest Pricing",
          description:
            "You get a clear quote before any work starts, with no hidden costs and no unnecessary extras.",
          icon: Refrigerator,
        },
      ]}
      process={[
        {
          step: 1,
          title: "Assessment",
          description:
            "We check your water supply, drainage, or gas point to plan a safe, tidy connection for your appliance.",
        },
        {
          step: 2,
          title: "Clear Quote",
          description:
            "You receive an honest quote covering fittings and labour, explained clearly before we begin.",
        },
        {
          step: 3,
          title: "Connection or Repair",
          description:
            "We complete the water, drain, or gas connection, or repair the leak, using quality fittings and proper methods.",
        },
        {
          step: 4,
          title: "Testing and Handover",
          description:
            "We test for leaks and correct flow, confirm everything is safe, and make sure your appliance works as it should.",
        },
      ]}
      relatedServices={[
        { title: "Appliance Repairs", href: "/appliance-repairs", icon: WashingMachine },
        { title: "Refrigeration Repairs", href: "/refrigeration-repairs", icon: Refrigerator },
        { title: "Electrical Services", href: "/electrical-services", icon: Zap },
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
      {/* Additional Content Section */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-3xl font-bold">Plumbing That Supports Your Appliances</h2>

            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6">
                A dishwasher, washing machine, fridge with an ice maker, or a gas hob all rely on a safe, well fitted connection. <strong>Cold Fix Services</strong> takes care of the plumbing that goes with our appliance and cooling installations across <strong>Pretoria, Johannesburg, Midrand</strong>, and the wider Gauteng region. We fit water lines, drains, and gas connections, and we repair leaks on the pipework feeding your equipment.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h3 className="font-bold text-lg mb-2 text-secondary">Water and Drain Connections</h3>
                  <p className="text-sm text-muted-foreground">
                    Clean water lines and drain connections for washing machines, dishwashers, and fridges with ice and water dispensers.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h3 className="font-bold text-lg mb-2 text-secondary">Gas Connections</h3>
                  <p className="text-sm text-muted-foreground">
                    Safe gas connections for hobs and ovens, fitted with the correct valves and checked for leaks before handover.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h3 className="font-bold text-lg mb-2 text-secondary">Leak Repairs</h3>
                  <p className="text-sm text-muted-foreground">
                    Fast repairs on dripping or burst pipes feeding your appliances, protecting your floors and cabinets from damage.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h3 className="font-bold text-lg mb-2 text-secondary">Isolation and Safety</h3>
                  <p className="text-sm text-muted-foreground">
                    Isolation valves that let you shut off water or gas to an appliance quickly and safely when needed.
                  </p>
                </div>
              </div>

              <div className="mt-8 p-6 rounded-xl bg-gradient-to-br from-secondary/5 to-accent/5 border border-border">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Droplets className="h-6 w-6 text-secondary" />
                  Installing a New Appliance?
                </h3>
                <p className="text-muted-foreground mb-4">
                  Let us handle the water or gas connection at the same time. Call us on <strong className="text-secondary">+27 70 309 6749</strong> for a free quote across Gauteng.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ServicePageTemplate>
  )
}
