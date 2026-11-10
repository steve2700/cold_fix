import { FinalCta } from "@/components/site/ui"

export function CTASection() {
  return (
    <FinalCta
      place="home"
      headline="Get it working again today."
      lead="Call or WhatsApp now. Tell us what has stopped and where you are, and we will tell you when a technician can be there."
      display={{
        variant: "steady",
        end: 3,
        gaugeMin: 0,
        gaugeMax: 12,
        okText: "Holding temperature",
        label: "Fridge controller holding 3 degrees Celsius.",
        caption: "This is the reading we want you looking at when we leave.",
      }}
    />
  )
}
