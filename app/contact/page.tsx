import type { Metadata } from "next"
import Link from "next/link"
import { CallLink, WhatsAppLink } from "@/components/landing/cta"
import { PHONE_DISPLAY } from "@/components/landing/contact"
import { QuoteForm } from "@/components/site/quote-form"
import { AREAS } from "@/components/site/site-data"
import { Hero, callBtn, displayFont, h2Class, waBtn } from "@/components/site/ui"
import styles from "@/components/landing/landing.module.css"

export const metadata: Metadata = {
  title: "Contact Cold Fix Services | Free Quote in Gauteng, Pretoria, Johannesburg and Midrand",
  description:
    "Contact Cold Fix Services for air conditioning, refrigeration, cold rooms, or appliance repairs in Gauteng. Free consultation and same day quotes. Call +27 70 309 6749.",
  keywords:
    "contact Cold Fix Services, air conditioning quote Gauteng, refrigeration repair Pretoria, appliance repair Johannesburg, Midrand cooling company, emergency callout",
  openGraph: {
    title: "Contact Cold Fix Services | Free Quote in Gauteng",
    description:
      "Get in touch for all air conditioning, refrigeration, and appliance repair needs in Pretoria, Johannesburg, and Gauteng. Free quotes, 24/7 emergency support, same day response.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact Cold Fix Services",
      },
    ],
  },
}

export default function ContactPage() {
  return (
    <>
      <Hero
        place="contact"
        crumbs={[{ label: "Contact" }]}
        h1="Something has stopped. Tell us what, and where."
        lead="The fastest way to reach us is the phone. WhatsApp is next. Same day callouts, free quotes and 24/7 emergency support across Gauteng."
        micro="Send a photo of the fault on WhatsApp. It helps us arrive with the right parts."
        visual={{
          variant: "steady",
          text: "CALL",
          staticState: "alarm",
          icons: ["wrench", "clock"],
          alarmText: "Call now",
          label: "Display reading Call.",
          caption: "Tell us what it is doing and where you are. We will tell you when a technician can be there.",
        }}
      />

      <section className="bg-[#e6f0f5]">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
          <div>
            <h2 className={h2Class} style={displayFont}>
              Send us the details.
            </h2>
            <p className="mb-8 mt-5 max-w-[30rem] leading-relaxed text-[#33475f]">
              Fill this in and press the green button. WhatsApp opens with your message ready to send.
            </p>
            <QuoteForm />
          </div>

          <div>
            <div className={styles.plate}>
              <p className="m-0 mb-5 text-[2.25rem] font-extrabold leading-none text-[#0f2c59]" style={displayFont}>
                Cold Fix Services
              </p>
              <div className="flex flex-col gap-3">
                <CallLink place="contact_plate" className={callBtn + " w-full"}>
                  Call now
                  <span className="font-semibold">{PHONE_DISPLAY}</span>
                </CallLink>
                <WhatsAppLink place="contact_plate" className={waBtn + " w-full"}>
                  WhatsApp now
                </WhatsAppLink>
              </div>
              <dl className="m-0 mt-6">
                <div className={styles.plateRow}>
                  <dt className={styles.plateKey}>Phone</dt>
                  <dd className={`m-0 ${styles.plateValue}`}>+27 70 309 6749</dd>
                </div>
                <div className={styles.plateRow}>
                  <dt className={styles.plateKey}>Email</dt>
                  <dd className={`m-0 ${styles.plateValue}`}>
                    <a href="mailto:info@coldfix.co.za" className="underline underline-offset-4">
                      info@coldfix.co.za
                    </a>
                  </dd>
                </div>
                <div className={styles.plateRow}>
                  <dt className={styles.plateKey}>Office hours</dt>
                  <dd className={`m-0 ${styles.plateValue}`}>Mon to Fri: 8:00 AM to 5:00 PM</dd>
                </div>
                <div className={styles.plateRow}>
                  <dt className={styles.plateKey}>Emergencies</dt>
                  <dd className={`m-0 ${styles.plateValue}`}>24/7</dd>
                </div>
                <div className={styles.plateRow}>
                  <dt className={styles.plateKey}>Coverage</dt>
                  <dd className={`m-0 ${styles.plateValue}`}>Gauteng, South Africa</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
          <h2 className="m-0 text-[2.25rem] font-extrabold leading-none text-[#0f2c59]" style={displayFont}>
            Areas we serve
          </h2>
          <ul className="m-0 mt-6 flex list-none flex-wrap gap-3 p-0">
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
          <p className="mt-6 max-w-[38rem] leading-relaxed text-[#33475f]">
            Do not see your area? Call us. We cover the whole province.
          </p>
        </div>
      </section>
    </>
  )
}
