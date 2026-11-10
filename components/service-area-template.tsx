import type { ReactNode } from "react"
import Link from "next/link"
import { makeAreaFaults, areaHeroVisual, areaFaqs } from "@/components/site/area-content"
import {
  FaqSection,
  FaultSection,
  FinalCta,
  Hero,
  LinksSection,
  Prose,
  ScopeSection,
  displayFont,
  h2Class,
} from "@/components/site/ui"

// Older props are kept so every area page keeps working.
interface ServiceAreaTemplateProps {
  areaName: string
  description: string
  suburbs: string[]
  heroImage?: string
  introImage?: string
  introduction: string
  servicesOffered: string[]
  whyChooseUs: string[]
  nearbyAreas: { name: string; href: string }[]
  responseTime?: string
  projectsCompleted?: number
  children?: ReactNode
}

const popularServices = [
  { title: "Air Conditioning Services", href: "/air-conditioning-services" },
  { title: "Refrigeration Repairs", href: "/refrigeration-repairs" },
  { title: "Appliance Repairs", href: "/appliance-repairs" },
  { title: "Emergency Callout Service", href: "/emergency-callout-service" },
]

export function ServiceAreaTemplate({
  areaName,
  description,
  suburbs,
  introduction,
  servicesOffered,
  whyChooseUs,
  nearbyAreas,
  children,
}: ServiceAreaTemplateProps) {
  const place = `area_${areaName.toLowerCase().replace(/[^a-z]+/g, "_")}`

  return (
    <>
      <Hero
        place={place}
        crumbs={[{ label: "Service Areas", href: "/service-areas" }, { label: areaName }]}
        h1={`Fridge, aircon or appliance broken in ${areaName}? We can be there today.`}
        lead={description}
        micro="Send a photo of the fault on WhatsApp. It helps us arrive with the right parts."
        visual={areaHeroVisual(areaName)}
      />

      <FaultSection
        title="What has stopped working?"
        intro={`Pick the one closest to your problem. You will see what usually causes it, what we do about it, and what to do while you wait. The WhatsApp message already says you are in ${areaName}.`}
        faults={makeAreaFaults(areaName)}
        place={`${place}_faults`}
      />

      {/* Local intro and suburbs */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:py-24">
          <div>
            <h2 className={h2Class} style={displayFont}>
              Cold Fix in {areaName}.
            </h2>
          </div>
          <div>
            <p className="m-0 text-[1.1875rem] leading-relaxed text-[#33475f]">{introduction}</p>
            <h3 className="mb-3 mt-10 text-[1.375rem] font-bold text-[#0f2c59]">Suburbs we cover in {areaName}</h3>
            <p className="m-0 leading-loose text-[#33475f]">
              {suburbs.map((s, i) => (
                <span key={s}>
                  <span className="font-semibold text-[#0f2c59]">{s}</span>
                  {i < suburbs.length - 1 ? ", " : ""}
                </span>
              ))}
              {" "}and surrounds.
            </p>
          </div>
        </div>
      </section>

      <ScopeSection title={`What we repair in ${areaName}.`} items={servicesOffered} />

      {/* Why choose us, as a plain list */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:py-24">
          <div>
            <h2 className={h2Class} style={displayFont}>
              Why {areaName} calls Cold Fix.
            </h2>
          </div>
          <ul className="m-0 list-none p-0">
            {whyChooseUs.map((item) => (
              <li
                key={item}
                className="border-t border-[#0f2c59]/20 py-5 text-[1.25rem] font-semibold leading-snug text-[#0f2c59]"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {children ? <Prose>{children}</Prose> : null}

      <FaqSection faqs={areaFaqs(areaName)} />

      <LinksSection relatedTitle="Popular services" related={popularServices} areas={undefined} />

      {nearbyAreas.length > 0 ? (
        <section className="bg-[#e6f0f5]">
          <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
            <h2 className="m-0 text-[2.25rem] font-extrabold leading-none text-[#0f2c59]" style={displayFont}>
              We also serve nearby areas
            </h2>
            <ul className="m-0 mt-6 flex list-none flex-wrap gap-3 p-0">
              {nearbyAreas.map((a) => (
                <li key={a.href}>
                  <Link
                    href={a.href}
                    className="inline-flex min-h-12 items-center rounded-lg border-2 border-[#0f2c59] px-5 text-lg font-bold text-[#0f2c59] hover:bg-[#0f2c59] hover:text-white focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-[#0f2c59]"
                  >
                    {a.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <FinalCta
        place={place}
        headline={`Get it working again in ${areaName}.`}
        lead="Call or WhatsApp now. Tell us what has stopped and where you are, and we will tell you when a technician can be there."
        areas={[areaName, ...nearbyAreas.map((n) => n.name)]}
      />
    </>
  )
}
