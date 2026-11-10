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
} satisfies Record<string, WorkPhoto>

export type WorkPhotoKey = keyof typeof WORK_PHOTOS
