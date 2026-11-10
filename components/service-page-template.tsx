import type { ReactNode } from "react"
import type { LucideIcon } from "lucide-react"
import type { ServiceContent } from "@/components/site/service-content"
import { PhotoSection } from "@/components/site/photo-section"
import {
  CostSection,
  FaqSection,
  FaultSection,
  FinalCta,
  Hero,
  LinksSection,
  Prose,
  ScopeSection,
  StepsSection,
  WhySection,
} from "@/components/site/ui"

// Older props are kept so every service page keeps working.
// The new look comes from `content`, which holds the problem first copy for that page.
interface ServicePageTemplateProps {
  title: string
  description: string
  icon?: LucideIcon
  heroImage?: string
  features: string[]
  benefits: { title: string; description: string; icon?: LucideIcon }[]
  process?: { step: number; title: string; description: string }[]
  relatedServices?: { title: string; href: string; icon?: LucideIcon }[]
  serviceAreas?: string[]
  priceRange?: string
  responseTime?: string
  content: ServiceContent
  children?: ReactNode
}

export function ServicePageTemplate({
  title,
  features,
  benefits,
  process,
  relatedServices,
  serviceAreas,
  content,
  children,
}: ServicePageTemplateProps) {
  const place = title.toLowerCase().replace(/[^a-z]+/g, "_").replace(/^_|_$/g, "")

  return (
    <>
      <Hero
        place={place}
        crumbs={[{ label: "Services", href: "/services" }, { label: title }]}
        h1={content.h1}
        lead={content.lead}
        micro={content.micro}
        visual={content.visual}
      />

      <CostSection
        title={content.cost.title}
        note={content.cost.note}
        rows={content.cost.rows}
        closing={content.cost.closing}
      />

      <FaultSection
        title={content.faultsTitle}
        intro={content.faultsIntro}
        faults={content.faults}
        place={`${place}_faults`}
        labels={content.faultLabels}
      />

      {content.photos && content.photos.length > 0 ? <PhotoSection keys={content.photos} /> : null}

      {process && process.length > 0 ? (
        <StepsSection
          title="From your call to a job done."
          steps={process.map((p) => ({ title: p.title, description: p.description }))}
        />
      ) : null}

      <ScopeSection title={content.scopeTitle} items={features} />

      <WhySection
        title={content.whyTitle}
        items={benefits.map((b) => ({ title: b.title, description: b.description }))}
      />

      {children ? <Prose>{children}</Prose> : null}

      <FaqSection faqs={content.faqs} />

      <LinksSection
        related={relatedServices?.map((r) => ({ title: r.title, href: r.href }))}
        areas={serviceAreas}
      />

      <FinalCta
        place={place}
        headline={content.finalHeadline}
        lead={content.finalLead}
        display={content.finalDisplay}
      />
    </>
  )
}
