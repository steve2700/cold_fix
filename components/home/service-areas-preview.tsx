import Link from "next/link"
import { AREAS } from "@/components/site/site-data"
import { displayFont } from "@/components/site/ui"

export function ServiceAreasPreview() {
  return (
    <section className="bg-[#e6f0f5]" aria-labelledby="service-areas-heading">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <h2
          id="service-areas-heading"
          className="m-0 max-w-[40rem] text-[2.75rem] font-extrabold leading-[0.95] text-[#0f2c59] sm:text-[3.5rem]"
          style={displayFont}
        >
          We come to you, across Gauteng.
        </h2>
        <p className="mb-8 mt-5 max-w-[38rem] leading-relaxed text-[#33475f]">
          Cold Fix delivers appliance, aircon and refrigeration repairs throughout Gauteng. Tap your area to see the
          suburbs we cover.
        </p>
        <ul className="m-0 flex list-none flex-wrap gap-3 p-0">
          {AREAS.map((a) => (
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
        <p className="mt-8">
          <Link
            href="/service-areas"
            className="text-lg font-bold text-[#0f2c59] underline underline-offset-4 hover:text-[#b86a00]"
          >
            See all service areas
          </Link>
        </p>
      </div>
    </section>
  )
}
