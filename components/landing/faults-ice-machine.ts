import type { Fault } from "@/components/landing/fault-types"

function f(id: string, label: string, causes: string[], fix: string, wait: string, what: string): Fault {
  return {
    id,
    label,
    causes,
    fix,
    wait,
    message: `Hi Cold Fix, ${what}. Can a technician come out today? My suburb is: `,
  }
}

export const ICE_MACHINE_FAULTS: Fault[] = [
  f(
    "no-ice",
    "It is not making any ice",
    [
      "The water supply is off or the filter is blocked",
      "A water inlet valve that has failed",
      "Scale on the freezing surface",
      "A sensor or control that has failed",
      "A refrigeration fault, such as low gas or a failing compressor",
    ],
    "We check the water supply and filter first, clean off any scale, then test the valve, the sensors and the cooling system. We run the machine to confirm it makes ice again before we leave.",
    "Check that the water isolator is open, the filter is not blocked and the machine is switched on at the wall.",
    "my ice machine is not making any ice",
  ),
  f(
    "little-ice",
    "It makes ice, but far too little",
    [
      "A dirty condenser or no space for air around the machine",
      "Scale building up on the freezing surface",
      "Low water flow",
      "A room that is too hot",
      "Low refrigerant",
    ],
    "We clean the condenser, descale the machine, check the water flow and test the cooling system. Then we measure how fast it makes ice.",
    "Clear the space around the machine so air can move. A machine boxed in by shelves cannot cool itself.",
    "my ice machine is making far too little ice",
  ),
  f(
    "bad-ice",
    "The ice is cloudy, small, hollow or sticking together",
    [
      "Scale or dirt in the water system",
      "A filter that needs replacing",
      "Low water pressure",
      "A water level or harvest problem",
    ],
    "We descale and sanitise the machine, replace the filter and check the water level and pressure. Then we check that the ice forms properly.",
    "If the ice tastes or smells bad, do not serve it.",
    "my ice machine is making cloudy or hollow ice",
  ),
  f(
    "smell",
    "The ice tastes or smells bad",
    [
      "A dirty ice bin",
      "Slime or mould in the machine",
      "An old water filter",
      "Scale and dirt in the water lines",
    ],
    "We clean and sanitise the machine and the bin, replace the filter and flush the water lines.",
    "Throw the ice away and do not serve it. Ice counts as food.",
    "the ice from my ice machine tastes or smells bad",
  ),
  f(
    "leak",
    "Water is leaking from the machine",
    [
      "A blocked drain",
      "A water inlet valve that does not close",
      "A cracked water tray or loose fitting",
      "An overflowing bin or reservoir",
    ],
    "We find where the water is coming from, clear the drain, replace the valve or fitting that has failed and test it.",
    "Switch the machine off at the wall, turn the water off and mop the floor so nobody slips.",
    "my ice machine is leaking water",
  ),
  f(
    "wont-start",
    "It will not switch on, or the lights are flashing",
    [
      "A power or breaker problem",
      "A tripped safety shutdown",
      "A failed control board",
      "A bin sensor that thinks the bin is full",
    ],
    "We check the supply, read the fault lights or code, and test the sensors and the board.",
    "Take a photo of the lights or the display and send it to us on WhatsApp. It tells us a lot before we arrive.",
    "my ice machine will not switch on or the lights are flashing",
  ),
  f(
    "compressor",
    "The compressor will not start or it trips the breaker",
    [
      "A failed start capacitor or relay",
      "A tripped overload",
      "A faulty contactor or wiring problem",
      "A seized compressor, which is the less common cause",
    ],
    "We test the electrical parts first and the compressor after that. A lot of these faults turn out to be a small part and not a new compressor.",
    "Switch it off at the isolator. Do not keep resetting the breaker.",
    "the compressor on my ice machine will not start",
  ),
  f(
    "noise",
    "It is loud, rattling or vibrating",
    [
      "A fan motor with worn bearings",
      "A water pump that is failing",
      "Loose panels or pipe clamps",
      "A compressor that is starting to fail",
    ],
    "We trace the noise to its source. Fan motors, pumps and loose fittings are quick fixes. A failing compressor is better caught early.",
    "Note when it happens: when it starts a batch, when it drops the ice, or all the time. Tell us when you call.",
    "my ice machine is making a loud noise",
  ),
]
