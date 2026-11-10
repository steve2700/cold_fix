import { HeroSection } from "@/components/home/hero-section"
import { ServicesOverview } from "@/components/home/services-overview"
import { WorkPhotosStrip } from "@/components/home/work-photos-strip"
import { WhyChooseUs } from "@/components/home/why-choose-us"
import { ServiceAreasPreview } from "@/components/home/service-areas-preview"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <WorkPhotosStrip />
      <WhyChooseUs />
      <ServiceAreasPreview />
      <CTASection />
    </>
  )
}
