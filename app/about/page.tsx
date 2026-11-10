import type { Metadata } from "next"
import { FinalCta, Hero, displayFont, h2Class } from "@/components/site/ui"

export const metadata: Metadata = {
  title: "About Cold Fix Services | Air Conditioning and Refrigeration Experts in Gauteng",
  description:
    "Learn about Cold Fix Services, the trusted name in Gauteng for air conditioning, refrigeration, and appliance repairs. Over 10 years serving Pretoria, Johannesburg, and Midrand.",
  keywords:
    "about Cold Fix Services, air conditioning company Gauteng, refrigeration technicians Pretoria, appliance repairs Johannesburg, company history, mission vision values",
  openGraph: {
    title: "About Cold Fix Services | Air Conditioning and Refrigeration Experts in Gauteng",
    description:
      "The trusted cooling partner in Gauteng. Certified technicians delivering air conditioning, refrigeration, and appliance repairs in Pretoria, Johannesburg, and Midrand.",
    images: [
      {
        url: "/cold-fix-technician-team-in-gauteng.png",
        width: 1200,
        height: 630,
        alt: "Cold Fix Services technician team in Gauteng",
      },
    ],
  },
}

const values = [
  {
    title: "Excellence in Every Repair",
    description:
      "We deliver the highest standards of workmanship, making sure every unit we touch is fixed properly and built to last. Quality is never compromised.",
  },
  {
    title: "Safety and Full Compliance",
    description:
      "We follow correct refrigerant handling and electrical safety standards on every job, protecting your family, your staff, and your equipment.",
  },
  {
    title: "Efficient and Sustainable",
    description:
      "We help you run cooling and appliances that use less energy, saving you money on running costs while being kinder to the environment.",
  },
  {
    title: "Long Term Relationships",
    description:
      "We build lasting relationships through trust, transparency, and consistent service. Your comfort and peace of mind are our priority.",
  },
]

const mission = [
  "Deliver excellence on every callout, ensuring client satisfaction, safety, and long term value through quality workmanship.",
  "Maintain the highest standards of safety, compliance, and quality in line with South African regulations.",
  "Offer energy efficient and reliable solutions that benefit our clients and the environment.",
  "Build long lasting relationships based on trust, transparency, and exceptional service.",
]

const vision = [
  "Become the most trusted and sought after air conditioning and refrigeration company in Gauteng and beyond.",
  "Support communities by keeping homes comfortable and businesses running without interruption.",
  "Lead in reliability, efficiency, and service excellence within the South African cooling industry.",
  "Set the benchmark for honest, dependable cooling services that deliver exceptional value.",
]

export default function AboutPage() {
  return (
    <>
      <Hero
        place="about"
        crumbs={[{ label: "About Us" }]}
        h1="Behind every breakdown call is someone who needs it fixed today."
        lead="Cold Fix Services is a trusted partner for residential, commercial and industrial clients across Pretoria, Johannesburg and Midrand. We keep homes and businesses cool, comfortable and running."
        micro="Questions? Call or WhatsApp us."
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

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:py-24">
          <div>
            <h2 className={h2Class} style={displayFont}>
              Your trusted partner for cooling and appliances in Gauteng.
            </h2>
          </div>
          <div className="space-y-5 text-[1.1875rem] leading-relaxed text-[#33475f]">
            <p className="m-0">
              Cold Fix Services is a proudly South African company delivering air conditioning, refrigeration repairs,
              cold room installation, commercial refrigeration, appliance repairs and maintenance contracts for clients
              in Gauteng, including Pretoria, Johannesburg and Midrand.
            </p>
            <p className="m-0">
              We specialise in reliable, high quality service for homes and businesses. Our team keeps your fridges,
              freezers, cold rooms, air conditioners and appliances running so you never have to worry about spoiled
              stock or an uncomfortable space.
            </p>
            <p className="m-0">
              With over 10 years of experience, we are committed to honest advice, lasting repairs and exceeding client
              expectations on every callout.
            </p>
            <p className="m-0">
              We bring together a team of skilled, certified professionals. Our years of experience in air
              conditioning, refrigeration and appliance repair let us provide tailored solutions for residential,
              commercial and industrial clients across Gauteng.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#0f2c59] text-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
          <div>
            <h2 className="m-0 text-[2.75rem] font-extrabold leading-[0.95] sm:text-[3.5rem]" style={displayFont}>
              Our mission
            </h2>
            <ul className="m-0 mt-8 list-none p-0">
              {mission.map((m) => (
                <li key={m} className="border-t border-white/20 py-4 text-[1.1875rem] leading-snug">
                  {m}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="m-0 text-[2.75rem] font-extrabold leading-[0.95] sm:text-[3.5rem]" style={displayFont}>
              Our vision
            </h2>
            <ul className="m-0 mt-8 list-none p-0">
              {vision.map((v) => (
                <li key={v} className="border-t border-white/20 py-4 text-[1.1875rem] leading-snug">
                  {v}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <h2 className={`${h2Class} max-w-[40rem]`} style={displayFont}>
            The principles that guide everything we do.
          </h2>
          <p className="mt-5 max-w-[36rem] leading-relaxed text-[#33475f]">
            Our core values shape every decision we make, every repair we deliver and every relationship we build.
          </p>
          <dl className="m-0 mt-12 grid gap-x-12 md:grid-cols-2">
            {values.map((v) => (
              <div key={v.title} className="border-t border-[#0f2c59]/20 py-6">
                <dt className="text-[1.375rem] font-bold leading-snug text-[#0f2c59]">{v.title}</dt>
                <dd className="m-0 mt-1.5 leading-relaxed text-[#33475f]">{v.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <FinalCta
        place="about"
        headline="Ready to work with Cold Fix?"
        lead="Call or WhatsApp now to talk through your air conditioning, refrigeration or appliance repair. We give honest advice, clear quotes and lasting fixes."
      />
    </>
  )
}
