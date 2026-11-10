// File path: app/appliance-repairs/page.tsx
// Clean URL: https://www.coldfix.co.za/appliance-repairs

import type { Metadata } from "next"
import { ServicePageTemplate } from "@/components/service-page-template"
import { SERVICE_CONTENT } from "@/components/site/service-content"
import { Wrench, WashingMachine, Clock, Award, ShieldCheck, Refrigerator, Zap, Store } from "lucide-react"

export const metadata: Metadata = {
  title: "Appliance Repairs in Gauteng | Washing Machine, Dishwasher, Oven Repair | Cold Fix Services",
  description:
    "Home appliance repairs across Gauteng. We repair washing machines, tumble dryers, dishwashers, ovens, stoves, and more. Fast, reliable service in Pretoria, Johannesburg and Midrand. Same day callouts available.",
  keywords:
    "appliance repairs Gauteng, washing machine repair Johannesburg, dishwasher repair Pretoria, tumble dryer repair, oven repair Midrand, stove repair",
  openGraph: {
    title: "Appliance Repairs | Cold Fix Services Gauteng",
    description:
      "Fast, reliable repairs for washing machines, dishwashers, ovens, and home appliances across Gauteng.",
    images: [
      {
        url: "/appliance_repairs.jpg",
        width: 1200,
        height: 630,
        alt: "Appliance repairs in Gauteng by Cold Fix Services",
      },
    ],
  },
}

export default function ApplianceRepairsPage() {
  return (
    <ServicePageTemplate
      content={SERVICE_CONTENT.applianceRepairs}
      title="Appliance Repairs"
      description="A broken appliance disrupts your whole day. Cold Fix Services repairs washing machines, tumble dryers, dishwashers, ovens, stoves, and other household appliances across Gauteng. Our technicians diagnose the fault, quote honestly, and repair with quality parts so your home runs smoothly again."
      icon={WashingMachine}
      heroImage="/appliance_repairs.jpg"
      priceRange="Free quotes"
      responseTime="Same day"
      features={[
        "Washing machine repairs",
        "Tumble dryer repairs",
        "Dishwasher repairs",
        "Oven and stove repairs",
        "Hob and cooktop repairs",
        "Microwave repairs",
        "Fault finding and diagnostics",
        "Motor and pump replacement",
        "Element and thermostat replacement",
        "Control board repairs",
        "Door seal and hinge repairs",
        "Emergency breakdown callouts",
      ]}
      benefits={[
        {
          title: "Fast Turnaround",
          description:
            "We respond quickly with same day callouts so you are not left without your essential appliances for long.",
          icon: Clock,
        },
        {
          title: "Skilled Technicians",
          description:
            "Experienced technicians who diagnose faults accurately and repair a wide range of appliance brands.",
          icon: Award,
        },
        {
          title: "Quality Parts",
          description:
            "We fit quality replacement parts so your repair lasts and your appliance performs like it should.",
          icon: ShieldCheck,
        },
        {
          title: "Honest Pricing",
          description:
            "Clear quotes before we start, with honest advice on whether a repair or replacement makes more sense.",
          icon: Wrench,
        },
        {
          title: "All Major Brands",
          description:
            "From washing machines to ovens, we service and repair the appliance brands found in most Gauteng homes.",
          icon: Refrigerator,
        },
        {
          title: "Safe and Reliable",
          description:
            "We repair to a safe standard, testing every appliance thoroughly before we hand it back to you.",
          icon: Zap,
        },
      ]}
      process={[
        {
          step: 1,
          title: "Diagnosis",
          description:
            "We inspect and test your appliance to identify exactly what is causing the fault.",
        },
        {
          step: 2,
          title: "Clear Quote",
          description:
            "You receive an honest quote covering parts and labour, with advice on repair versus replacement.",
        },
        {
          step: 3,
          title: "Professional Repair",
          description:
            "Our technicians carry out the repair using quality parts and proper methods.",
        },
        {
          step: 4,
          title: "Testing and Handover",
          description:
            "We test the appliance to confirm it is working correctly and safely before we leave.",
        },
      ]}
      relatedServices={[
        { title: "Refrigeration Repairs", href: "/refrigeration-repairs", icon: Refrigerator },
        { title: "Electrical Services", href: "/electrical-services", icon: Zap },
        { title: "Property Maintenance", href: "/property-maintenance", icon: Store },
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
            <h2 className="mb-8 text-3xl font-bold">Home Appliance Repairs Across Gauteng</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6">
                When your washing machine stops mid cycle or your oven will not heat, you need a reliable technician fast. <strong>Cold Fix Services</strong> repairs the household appliances you depend on for clients across <strong>Pretoria, Johannesburg, Midrand</strong>, and the wider Gauteng region, with honest quotes and quality parts on every job.
              </p>
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h3 className="font-bold text-lg mb-2 text-secondary">Laundry Appliances</h3>
                  <p className="text-sm text-muted-foreground">
                    Washing machines and tumble dryers that will not start, drain, spin, or heat properly.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h3 className="font-bold text-lg mb-2 text-secondary">Kitchen Appliances</h3>
                  <p className="text-sm text-muted-foreground">
                    Ovens, stoves, hobs, dishwashers, and microwaves diagnosed and repaired on site.
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
