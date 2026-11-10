import type { Metadata } from "next"
import Link from "next/link"
import { FinalCta, Hero, displayFont, h2Class } from "@/components/site/ui"

export const metadata: Metadata = {
  title: "Service Areas | Cold Fix Services - Pretoria, Johannesburg, Midrand & All Gauteng",
  description:
    "Cold Fix Services provides appliance, air conditioning, and refrigeration repairs throughout Gauteng including Pretoria, Johannesburg, Sandton, Centurion, Midrand, Fourways, and 10 major areas. Same day quotes and 24 hour emergency support.",
  keywords: "service areas Gauteng, fridge repair Pretoria, aircon repair Johannesburg, appliance repairs Midrand, Sandton refrigeration, Centurion aircon, Fourways appliance repair",
  openGraph: {
    title: "Service Areas | Cold Fix Services Serving All Gauteng",
    description:
      "Appliance, air conditioning, and refrigeration repairs across all major areas in Gauteng province. Same day callouts, free quotes, and 24 hour emergency support.",
    images: [
      {
        url: "/gauteng-service-areas-map.webp",
        width: 1200,
        height: 630,
        alt: "Cold Fix Services service areas map, Gauteng Province",
      },
    ],
  },
}

const serviceAreas = [
  {
    name: "Pretoria",
    href: "/service-areas/pretoria",
    description:
      "Appliance, air conditioning, and refrigeration repairs throughout Pretoria and surrounding suburbs including Montana, Hatfield, Menlyn, Brooklyn, and Centurion.",
    suburbs: ["Montana", "Hatfield", "Menlyn", "Brooklyn", "Waterkloof", "Centurion", "Lynnwood", "Silverton"],
    highlight: true,
    responseTime: "30 min",
    projects: "150+",
  },
  {
    name: "Johannesburg",
    href: "/service-areas/johannesburg",
    description:
      "Full service appliance, aircon, and refrigeration repairs across Johannesburg including Sandton, Rosebank, Fourways, Randburg, and the CBD.",
    suburbs: ["Sandton", "Rosebank", "Fourways", "Randburg", "Parktown", "CBD", "Melrose", "Houghton"],
    highlight: true,
    responseTime: "30 min",
    projects: "200+",
  },
  {
    name: "Midrand",
    href: "/service-areas/midrand",
    description:
      "Reliable appliance, aircon, and refrigeration repairs in Carlswald, Halfway House, and surrounding areas.",
    suburbs: ["Carlswald", "Halfway House", "Vorna Valley", "Glen Austin", "Waterfall Estate"],
    highlight: true,
    responseTime: "20 min",
    projects: "100+",
  },
  {
    name: "Sandton",
    href: "/service-areas/sandton",
    description:
      "Trusted appliance and refrigeration repairs for residential and commercial properties in Sandton, Morningside, Rivonia, and Sunninghill.",
    suburbs: ["Morningside", "Rivonia", "Sunninghill", "Bryanston", "Hyde Park"],
    responseTime: "25 min",
    projects: "80+",
  },
  {
    name: "Centurion",
    href: "/service-areas/centurion",
    description:
      "Expert appliance, aircon, and refrigeration repair solutions throughout Centurion including Highveld, Eldoraigne, and Irene.",
    suburbs: ["Highveld", "Eldoraigne", "Irene", "Wierdapark", "Zwartkop"],
    responseTime: "25 min",
    projects: "70+",
  },
  {
    name: "Fourways",
    href: "/service-areas/fourways",
    description:
      "Professional appliance and refrigeration repair services in Fourways, Lonehill, Dainfern, and the northern suburbs of Johannesburg.",
    suburbs: ["Lonehill", "Dainfern", "Broadacres", "Cedar Lakes"],
    responseTime: "30 min",
    projects: "60+",
  },
  {
    name: "Randburg",
    href: "/service-areas/randburg",
    description:
      "Quality appliance and refrigeration repairs for residential and commercial properties in Randburg, Ferndale, and Blairgowrie.",
    suburbs: ["Ferndale", "Blairgowrie", "Northcliff", "Boskruin"],
    responseTime: "35 min",
    projects: "50+",
  },
  {
    name: "Bedfordview",
    href: "/service-areas/bedfordview",
    description: "Comprehensive appliance and refrigeration repair services in Bedfordview, Edenvale, Germiston, and the East Rand suburbs.",
    suburbs: ["Edenvale", "Germiston", "Kensington", "Kempton Park"],
    responseTime: "40 min",
    projects: "40+",
  },
  {
    name: "Rosebank",
    href: "/service-areas/rosebank",
    description:
      "Trusted appliance and refrigeration repairs in Rosebank, Parktown, Saxonwold, and the northern Johannesburg suburbs.",
    suburbs: ["Parktown", "Saxonwold", "Dunkeld", "Forest Town"],
    responseTime: "35 min",
    projects: "45+",
  },
  {
    name: "Roodepoort",
    href: "/service-areas/roodepoort",
    description:
      "Expert appliance and refrigeration repairs in Roodepoort, Florida, Constantia Kloof, and western Johannesburg suburbs.",
    suburbs: ["Northgate", "Florida", "Constantia Kloof", "Wilropark"],
    responseTime: "40 min",
    projects: "35+",
  },
]

export default function ServiceAreasPage() {
  return (
    <>
      <Hero
        place="service_areas"
        crumbs={[{ label: "Service Areas" }]}
        h1="Wherever in Gauteng the fault is, we come to you."
        lead="Cold Fix delivers appliance, aircon and refrigeration repairs across Gauteng. Same day callouts, free quotes and 24/7 emergency support."
        micro="Send a photo of the fault on WhatsApp. It helps us arrive with the right parts."
        visual={{
          variant: "climb",
          start: 3,
          end: 10,
          gaugeMin: 0,
          gaugeMax: 12,
          label: "Fridge controller reading 10 degrees Celsius with a high temperature alarm.",
          caption: "Food in a fridge must stay at 5°C or below. A warm fridge will not wait for the weekend.",
        }}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <h2 className={`${h2Class} max-w-[40rem]`} style={displayFont}>
            Find your area.
          </h2>
          <ul className="m-0 mt-10 list-none p-0">
            {serviceAreas.map((area) => (
              <li key={area.name} className="grid gap-4 border-t border-[#0f2c59]/20 py-8 last:border-b md:grid-cols-[minmax(0,4fr)_minmax(0,8fr)]">
                <h3 className="m-0 text-[2rem] font-extrabold leading-none text-[#0f2c59]" style={displayFont}>
                  <Link href={area.href} className="underline-offset-4 hover:underline">
                    {area.name}
                  </Link>
                </h3>
                <div>
                  <p className="m-0 leading-relaxed text-[#33475f]">{area.description}</p>
                  <p className="mb-0 mt-3 leading-loose text-[#0f2c59]">{area.suburbs.join(", ")}</p>
                  <p className="mb-0 mt-3">
                    <Link href={area.href} className="font-bold text-[#0f2c59] underline underline-offset-4 hover:text-[#b86a00]">
                      Repairs in {area.name}
                    </Link>
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-10 max-w-[38rem] text-[1.1875rem] leading-relaxed text-[#33475f]">
            Do not see your area listed? Call us. We cover the whole province.
          </p>
        </div>
      </section>

      <FinalCta
        place="service_areas"
        headline="Tell us where you are."
        lead="Call or WhatsApp now. Tell us what has stopped and which suburb you are in, and we will tell you when a technician can be there."
      />
    </>
  )
}
