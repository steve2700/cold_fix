import { WhySection } from "@/components/site/ui"

const items = [
  {
    title: "Experienced technicians",
    description:
      "Skilled appliance, air conditioning and refrigeration technicians with years of hands on experience across Gauteng.",
  },
  {
    title: "Insured and certified",
    description:
      "Our technicians are refrigerant handling certified and every callout is fully insured, so you can book with peace of mind.",
  },
  {
    title: "Honest, upfront pricing",
    description:
      "We find the fault and give you a clear quote before any work starts. No hidden costs and no surprises.",
  },
  {
    title: "Quality workmanship",
    description:
      "Quality parts and proven repair methods, so the fix lasts and the appliance or cooling system keeps running.",
  },
  {
    title: "Fast, same day callouts",
    description:
      "A broken fridge or freezer cannot wait. We respond quickly with same day callouts and 24/7 emergency response.",
  },
  {
    title: "Cooling specialists",
    description:
      "From walk in cold rooms to household fridges and split unit aircon, cooling is what we do every single day.",
  },
]

export function WhyChooseUs() {
  return <WhySection title="Why Gauteng calls Cold Fix." items={items} />
}
