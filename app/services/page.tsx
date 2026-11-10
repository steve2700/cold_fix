// File path: app/services/page.tsx
// URL: https://www.coldfix.co.za/services

import type { Metadata } from "next"
import { ServicesOverview } from "@/components/home/services-overview"
import { WhyChooseUs } from "@/components/home/why-choose-us"
import { FinalCta, Hero } from "@/components/site/ui"

export const metadata: Metadata = {
  title: "Our Services | Air Conditioning, Refrigeration and Appliance Repairs in Gauteng | Cold Fix Services",
  description:
    "Explore Cold Fix Services: air conditioning, refrigeration repairs, cold rooms, commercial refrigeration, appliance repairs, HVAC maintenance, and emergency callouts across Pretoria, Johannesburg and Midrand.",
  keywords:
    "air conditioning Gauteng, refrigeration repairs Pretoria, appliance repairs Johannesburg, cold room installation, commercial refrigeration, HVAC maintenance Midrand",
  openGraph: {
    title: "Our Services | Cold Fix Services Gauteng",
    description:
      "Professional air conditioning, refrigeration, and appliance repair services for Pretoria, Johannesburg and the wider Gauteng region.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cold Fix Services air conditioning and refrigeration technicians in Gauteng",
      },
    ],
  },
}

export default function ServicesPage() {
  return (
    <>
      <Hero
        place="services"
        crumbs={[{ label: "Services" }]}
        h1="Whatever has stopped working, start here."
        lead="Cold Fix repairs, installs and maintains air conditioning, refrigeration and household appliances across Pretoria, Johannesburg, Midrand and greater Gauteng. One team, one number. Same day callouts, and emergencies run 24/7."
        micro="Send a photo of the fault on WhatsApp. It helps us arrive with the right parts."
        visual={{
          variant: "steady",
          text: "CooL",
          staticState: "ok",
          icons: ["snow", "wind"],
          okText: "Back in service",
          label: "Display reading Cool.",
          caption: "That is the word we want on every display when we leave.",
        }}
      />
      <ServicesOverview />
      <WhyChooseUs />
      <FinalCta
        place="services"
        headline="Get it working again today."
        lead="Call or WhatsApp now. Tell us what has stopped and where you are, and we will tell you when a technician can be there."
      />
    </>
  )
}
