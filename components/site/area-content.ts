import type { Fault } from "@/components/landing/fault-types"
import type { DisplayProps } from "@/components/site/ui"

function f(
  areaName: string,
  id: string,
  label: string,
  causes: string[],
  fix: string,
  wait: string,
  what: string,
): Fault {
  return {
    id,
    label,
    causes,
    fix,
    wait,
    message: `Hi Cold Fix, ${what} in ${areaName}. Can a technician come out today? My suburb is: `,
  }
}

export function makeAreaFaults(areaName: string): Fault[] {
  return [
    f(
      areaName,
      "fridge",
      "My fridge or freezer is not cold",
      ["Low refrigerant from a leak", "A dirty condenser coil", "A fan that has stopped", "A faulty thermostat, relay or capacitor", "A door seal that no longer seals"],
      "We measure temperatures and test the cooling system, find the actual fault and repair it. If gas is low, we find the leak before we refill.",
      "Keep the door shut. Move meat and dairy into a cooler box with ice.",
      "my fridge or freezer is not cold",
    ),
    f(
      areaName,
      "aircon",
      "My aircon is not cooling",
      ["Low refrigerant", "A dirty filter or coil", "A failed fan or capacitor", "A blocked drain", "A board or sensor fault"],
      "We find the fault, clean what is blocked and repair what has failed. We do not top up gas without finding the leak.",
      "Switch the unit off and clean or replace the filter if you can reach it safely.",
      "my aircon is not cooling",
    ),
    f(
      areaName,
      "washing-machine",
      "My washing machine will not drain, spin or start",
      ["A blocked pump or hose", "A failed pump or belt", "A faulty door lock", "A control board fault"],
      "We clear the blockage, test the pump, belt, lock and board, and run a full cycle to confirm it works.",
      "Switch it off at the wall. Do not force the door if there is water inside.",
      "my washing machine will not drain, spin or start",
    ),
    f(
      areaName,
      "dryer-oven",
      "My tumble dryer, dishwasher, oven or stove has stopped working",
      ["A failed heating element", "A faulty thermostat or fuse", "A blocked drain or filter", "A control board fault"],
      "We test the parts involved, repair what has failed and confirm it works before we leave.",
      "Do not use an appliance that smells burnt or sparks. Switch it off at the wall.",
      "my tumble dryer, dishwasher, oven or stove has stopped working",
    ),
    f(
      areaName,
      "cold-room",
      "My cold room or shop fridge is down",
      ["A compressor or condensing unit that has stopped", "A fan failure", "A controller or sensor fault", "A power fault", "A refrigerant leak"],
      "We come out, find the fault and repair it on site wherever we can, because stock cannot wait.",
      "Keep the door shut and move your most valuable stock into another unit or cooler boxes with ice.",
      "my cold room or shop fridge is down",
    ),
    f(
      areaName,
      "emergency",
      "It is an emergency and I need help now",
      ["A breakdown at night or on a weekend", "Stock or food at risk", "A unit that is sparking or leaking"],
      "Emergency callouts run 24/7. We tell you what to do while a technician is on the way.",
      "If an appliance is sparking or burning, switch it off at the wall and at the breaker and keep away from it.",
      "I need an emergency callout",
    ),
  ]
}

export function areaHeroVisual(areaName: string): DisplayProps {
  return {
    variant: "climb",
    start: 3,
    end: 10,
    gaugeMin: 0,
    gaugeMax: 12,
    label: `Fridge controller reading 10 degrees Celsius with a high temperature alarm. Food in a fridge must stay at 5 degrees or below. Cold Fix repairs fridges in ${areaName}.`,
    caption: "Food in a fridge must stay at 5°C or below. A warm fridge will not wait for the weekend.",
  }
}

export function areaFaqs(areaName: string) {
  return [
    {
      q: `Do you come to ${areaName}?`,
      a: `Yes. We repair fridges, freezers, aircon, cold rooms and household appliances in ${areaName} and the surrounding suburbs.`,
    },
    {
      q: `How fast can a technician get to ${areaName}?`,
      a: `We book same day callouts and run 24/7 emergency response across Gauteng. Call or WhatsApp now and we will tell you what is possible for your suburb.`,
    },
    {
      q: "Do you charge for a quote?",
      a: "Quotes are free. We find the fault and tell you what the repair costs before we start work.",
    },
  ]
}
