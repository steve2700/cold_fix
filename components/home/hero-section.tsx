import { Hero } from "@/components/site/ui"

export function HeroSection() {
  return (
    <Hero
      place="home"
      h1="The fridge is warm. The aircon is off. The washing is piling up."
      lead="Cold Fix repairs fridges, freezers, aircon, cold rooms and household appliances across Pretoria, Johannesburg, Midrand and greater Gauteng. Call or WhatsApp now. Same day callouts, and emergencies run 24/7."
      micro="Send a photo of the fault on WhatsApp. It helps us arrive with the right parts."
      visual={{
        variant: "climb",
        start: 3,
        end: 10,
        gaugeMin: 0,
        gaugeMax: 12,
        label:
          "Fridge controller reading 10 degrees Celsius with a high temperature alarm. Food in a fridge must stay at 5 degrees or below.",
        caption: "Food in a fridge must stay at 5°C or below. A warm fridge will not wait for the weekend.",
      }}
    />
  )
}
