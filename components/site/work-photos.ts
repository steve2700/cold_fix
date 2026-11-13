export type WorkPhoto = {
  src: string
  width: number
  height: number
  alt: string
  caption: string
}

// Real job photos from Cold Fix. Files live in /public.
export const WORK_PHOTOS = {
  aircon: { src: "/coldfix-air-conditioner-wall-unit-installation-gauteng.jpg", width: 780, height: 852, alt: "Outdoor unit of a split air conditioner mounted on a face brick wall during installation, with a drill and a spirit level on site", caption: "Fitting the outdoor unit of a split aircon on a brick wall." },
  electricOvenHob: { src: "/coldfix-built-in-electric-oven-and-hob-repair-gauteng.jpg", width: 720, height: 803, alt: "Built in electric oven and glass hob in a kitchen with the oven door open", caption: "A built in electric oven and hob." },
  gasHob: { src: "/coldfix-gas-hob-installation-gauteng.jpg", width: 480, height: 640, alt: "Gas hob on a kitchen counter with tools laid out during installation", caption: "Installing a built in gas hob." },
  defyStove: { src: "/coldfix-defy-stove-and-cooktop-repair-gauteng.jpg", width: 472, height: 590, alt: "Defy stove with four electric plates and an oven in a kitchen", caption: "A Defy stove with electric plates and an oven." },
  defyOven: { src: "/coldfix-defy-gemini-oven-repair-gauteng.jpg", width: 720, height: 731, alt: "Defy Gemini Petit Chef built in oven with a clock and control knobs", caption: "A Defy Gemini Petit Chef oven." },
  dishwasher: { src: "/coldfix-dishwasher-repair-service-gauteng.jpg", width: 218, height: 363, alt: "Built in dishwasher pulled out of its cupboard with the door open for service", caption: "A dishwasher pulled out of its cupboard for service." },
  fridgeCondenser: { src: "/coldfix-fridge-condenser-gas-servicing-gauteng.jpg", width: 1536, height: 2048, alt: "Back of a fridge with the condenser coil and compressor exposed, with a refrigerant cylinder and a toolbox of parts on the floor", caption: "Refrigerant servicing on a fridge, with the condenser and compressor exposed." },
  fridgeManifold: { src: "/coldfix-fridge-gas-manifold-diagnostics-gauteng.jpg", width: 590, height: 590, alt: "Gauge manifold hoses and refrigerant cylinders connected to the back of a fridge for diagnostics", caption: "Checking a fridge with a gauge manifold." },
  washerOnSite: { src: "/coldfix-top-load-washing-machine-repair-on-site-gauteng.jpg", width: 1536, height: 2048, alt: "Top loading washing machine opened up in a yard with its top panel, wiring and a toolbox of parts visible", caption: "Repairing a top loading washing machine on site." },
  washerHisense: { src: "/coldfix-top-load-washing-machine-repair-gauteng.jpg", width: 1552, height: 1415, alt: "Hisense top loading washing machine standing outside on a wooden plank", caption: "A Hisense top loading washing machine." },
  iceCompressor: { src: "/coldfix-ice-machine-compressor-and-condenser-repair-gauteng.jpg", width: 480, height: 638, alt: "Compressor, condenser fan and wiring inside the refrigeration compartment of an ice machine", caption: "The compressor and condenser fan inside an ice machine." },
  iceMakerAssembly: { src: "/coldfix-ice-maker-assembly-and-ice-bin-repair-gauteng.jpg", width: 700, height: 438, alt: "Ice maker assembly above a bin of ice cubes", caption: "An ice maker assembly above the ice bin." },
  iceModuleRemoved: { src: "/coldfix-ice-maker-module-removed-for-repair-gauteng.jpg", width: 480, height: 640, alt: "Ice maker module taken out of a freezer compartment with its wiring and water fittings showing", caption: "An ice maker module taken out for repair." },
  iceTray: { src: "/coldfix-ice-maker-tray-and-wiring-repair-gauteng.jpg", width: 738, height: 414, alt: "Ice maker tray assembly lying on a counter with its wiring plug", caption: "An ice maker tray assembly and its wiring plug." },
  iceMachine: { src: "/coldfix-under-counter-ice-machine-repair-gauteng.jpg", width: 554, height: 554, alt: "Stainless steel under counter ice machine with a bin full of ice and a scoop", caption: "An under counter ice machine." },
  acManifold: { src: "/coldfix-aircon-gas-manifold-servicing-gauteng.jpg", width: 400, height: 533, alt: "Gauge manifold with blue and red hoses connected to an outdoor aircon unit for servicing, with a drill on top", caption: "Checking aircon gas pressures with a gauge manifold." },
  acInstalled: { src: "/coldfix-split-aircon-outdoor-unit-installed-gauteng.jpg", width: 675, height: 900, alt: "Outdoor unit of a split aircon on a steel stand against a brick wall, with a white pipe cover running up the wall", caption: "An outdoor split aircon unit on its stand." },
  acWallUnit: { src: "/coldfix-aircon-outdoor-unit-wall-mounted-gauteng.jpg", width: 547, height: 365, alt: "Outdoor aircon unit mounted on a brick wall with an isolator switch and cable", caption: "A wall mounted outdoor aircon unit." },
} satisfies Record<string, WorkPhoto>

export type WorkPhotoKey = keyof typeof WORK_PHOTOS
