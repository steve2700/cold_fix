import Link from "next/link"
import { SERVICES } from "@/components/site/site-data"
import { displayFont, h2Class } from "@/components/site/ui"

export function ServicesOverview() {
  return (
    <section className="bg-white" aria-labelledby="services-heading">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:py-24">
        <div>
          <h2 id="services-heading" className={h2Class} style={displayFont}>
            What has stopped working?
          </h2>
          <p className="mt-5 max-w-[26rem] leading-relaxed text-[#33475f]">
            Pick the problem closest to yours. Every page shows what usually causes it, what we do about it, and how to
            reach us now.
          </p>
        </div>
        <ul className="m-0 list-none p-0">
          {SERVICES.map((s) => (
            <li key={s.href} className="border-t border-[#0f2c59]/20 last:border-b">
              <Link
                href={s.href}
                className="group flex min-h-20 items-center justify-between gap-4 py-4 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-[-4px] focus-visible:outline-[#0f2c59]"
              >
                <span>
                  <span className="block text-[1.375rem] font-bold leading-snug text-[#0f2c59] group-hover:underline">
                    {s.title}
                  </span>
                  <span className="mt-0.5 block leading-snug text-[#33475f]">{s.problem}</span>
                </span>
                <span aria-hidden="true" className="text-3xl leading-none text-[#ff9f1c]">
                  +
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
