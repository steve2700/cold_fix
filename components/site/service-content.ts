import type { Fault } from "@/components/landing/fault-types"
import { COLD_ROOM_FAULTS } from "@/components/landing/faults-cold-room"
import type { CostRow, DisplayProps } from "@/components/site/ui"
import type { WorkPhotoKey } from "@/components/site/work-photos"

export type ServiceContent = {
  h1: string
  lead: string
  micro?: string
  visual: DisplayProps
  cost: { title: string; note: string; rows: CostRow[]; closing: string }
  faultsTitle: string
  faultsIntro: string
  faults: Fault[]
  faultLabels?: { causes: string; fix: string; wait: string }
  photos?: WorkPhotoKey[]
  scopeTitle: string
  whyTitle: string
  faqs: { q: string; a: string }[]
  finalHeadline: string
  finalLead: string
  finalDisplay?: DisplayProps
}

// Builds a WhatsApp message that already describes the problem.
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

const FAQ_FAST = {
  q: "How fast can you get to us?",
  a: "We book same day callouts and run 24/7 emergency response across Gauteng. Call or WhatsApp now and we will tell you what is possible for your suburb.",
}
const FAQ_QUOTE = {
  q: "Do you charge for a quote?",
  a: "Quotes are free. We find the fault and tell you what the repair costs before we start work.",
}
const FAQ_REPLACE = {
  q: "Can it be repaired, or does it need replacing?",
  a: "Most faults can be repaired. If something is beyond sensible repair, we say so and explain why before you spend money on it.",
}
const FAQ_PARTS = {
  q: "What if you need a part?",
  a: "We bring common parts to the job where we can. For bigger parts, we tell you how long it will take before you commit.",
}

const fridgeLabel = "Fridge controller reading 10 degrees Celsius with a high temperature alarm. Food in a fridge must stay at 5 degrees or below."

/* ------------------------------------------------------------------ */
/* Fridge and freezer repairs                                          */
/* ------------------------------------------------------------------ */
const refrigerationRepairs: ServiceContent = {
  photos: ["fridgeCondenser", "fridgeManifold"],
  h1: "The fridge went quiet in the night. By morning the food is warm.",
  lead: "Cold Fix repairs fridges, freezers and chest freezers across Gauteng. Call or WhatsApp now. We book a technician the same day and tell you what the repair costs before we start.",
  visual: {
    variant: "climb",
    start: 3,
    end: 10,
    gaugeMin: 0,
    gaugeMax: 12,
    label: fridgeLabel,
    caption: "Food in a fridge must stay at 5°C or below. A warm fridge will not wait for the weekend.",
  },
  cost: {
    title: "A warm fridge costs more than the food.",
    note: "Waiting rarely makes a fridge fault cheaper. It does make the shopping bill bigger.",
    rows: [
      { t: "5°C", h: "The fridge is no longer safe.", p: "Milk, meat and leftovers start to go the moment the temperature passes this line." },
      { t: "8°C", h: "The freezer starts to soften.", p: "If the freezer section cannot hold its temperature, ice cream goes first and packets of meat start to thaw." },
      { t: "12°C", h: "The shopping goes in the bin.", p: "A full week of groceries is a lot of money to throw away, and it happens faster when the kitchen is hot." },
    ],
    closing: "The sooner a technician looks at it, the less you lose.",
  },
  faultsTitle: "Tell us what the fridge is doing.",
  faultsIntro:
    "Pick the one closest to your problem. You will see what usually causes it, what we do about it, and what to do while you wait.",
  faults: [
    f(
      "warm",
      "The fridge is running but not cold",
      ["Low refrigerant from a leak", "A dirty condenser coil at the back or bottom", "A fan that has stopped", "A faulty thermostat or sensor", "A door seal that no longer seals"],
      "We measure temperatures and test the cooling system first, then find the actual fault. If gas is low, we find the leak before we refill, so you are not paying for gas that escapes again.",
      "Keep the door shut. Move meat and dairy into a cooler box with ice.",
      "my fridge is running but not cold",
    ),
    f(
      "freezer-fine",
      "The freezer works but the fridge section is warm",
      ["A blocked air vent between the freezer and the fridge", "A damper or fan that has failed", "A defrost fault that has iced up the coil", "A faulty thermostat"],
      "We check the airflow, clear the ice, and test the defrost parts and the fan. Then we confirm the fridge section pulls down to temperature.",
      "Do not stack food against the back wall. It can block the air vent.",
      "my freezer works but the fridge section is warm",
    ),
    f(
      "silent",
      "It is completely silent and not running",
      ["A failed start relay or capacitor", "A faulty thermostat or control board", "A tripped overload on the compressor", "A power supply problem at the plug", "A seized compressor, which is the less common cause"],
      "We test the electrical parts first and the compressor after that. A lot of these faults turn out to be a small part and not a new compressor.",
      "Check the plug and the wall socket with another appliance. Do not keep switching it on and off.",
      "my fridge is completely silent and not running",
    ),
    f(
      "power-cut",
      "It stopped working after a power cut or load shedding",
      ["A compressor overload that tripped when the power came back", "A start relay or capacitor damaged by the surge", "A control board that has failed", "A plug or socket that has been damaged"],
      "We test the start parts and the board, then check the compressor. We can also advise on a surge protector so the next power cut does not do the same thing.",
      "Wait five minutes before switching it back on, and keep the door shut.",
      "my fridge stopped working after a power cut",
    ),
    f(
      "clicking",
      "It clicks, hums or tries to start and stops",
      ["A worn start relay or capacitor", "A compressor that is struggling to start", "Low voltage at the plug", "A fan blade that is catching on ice"],
      "We test the start components, measure the supply, and check the compressor under load. Many of these are quick fixes if we get to them early.",
      "Switch it off at the wall if it keeps clicking. Do not leave it trying to start.",
      "my fridge keeps clicking and trying to start",
    ),
    f(
      "ice",
      "There is ice or frost building up inside",
      ["A defrost heater, timer or sensor that has failed", "A door seal letting in warm, damp air", "A blocked drain at the back of the fridge", "A fan that has stopped"],
      "We restore the defrost cycle, clear the drain, replace failed parts and fix whatever is letting the warm air in.",
      "Do not chip the ice with a knife. You can puncture the coil and turn a repair into a bigger one.",
      "my fridge or freezer has ice building up inside",
    ),
    f(
      "leak",
      "There is water inside or on the floor",
      ["A blocked or frozen defrost drain", "A cracked drain pan", "A door seal with condensation running in", "A water line to an ice maker or dispenser"],
      "We clear the drain, check the pan and the seals, and fix the cause so the water does not come back.",
      "Mop the floor so nobody slips, and pull the fridge out only if you can do it safely.",
      "my fridge is leaking water",
    ),
    f(
      "chest",
      "The chest freezer is not freezing",
      ["Low refrigerant", "A faulty thermostat", "A worn lid seal", "A condenser wall that is dirty or blocked", "A compressor that is failing"],
      "We test the cooling circuit and the thermostat, check the seal, and tell you honestly if the compressor is the problem.",
      "Keep the lid closed and move the most valuable food into another freezer.",
      "my chest freezer is not freezing",
    ),
    f(
      "noise",
      "It is loud, rattling or buzzing",
      ["A fan motor with worn bearings", "A fan blade hitting ice", "A loose panel or pipe", "A compressor that is starting to fail"],
      "We trace the noise to its source. Fan motors and loose fittings are quick fixes. A failing compressor is better caught early.",
      "Note when it happens: all the time, or only at certain points. Tell us when you call.",
      "my fridge is making a loud noise",
    ),
  ],
  scopeTitle: "If it keeps food cold at home, we repair it.",
  whyTitle: "Why people call Cold Fix for fridge repairs.",
  faqs: [
    FAQ_FAST,
    FAQ_QUOTE,
    {
      q: "Is it worth repairing an old fridge?",
      a: "Often yes. A new thermostat, fan or seal can give an old fridge years more life. If the repair costs close to the price of a new one, or the sealed system has failed, we tell you so and let you decide.",
    },
    FAQ_PARTS,
    {
      q: "Should I throw the food away?",
      a: "Food safety decisions are yours to make. As a rule, chilled food that has been above 5°C for a long time should not be eaten. If you are unsure, do not risk it.",
    },
  ],
  finalHeadline: "Get the fridge cold again.",
  finalLead: "Call or WhatsApp now. Tell us what it is doing and where you are, and we will tell you when a technician can be there.",
  finalDisplay: {
    variant: "steady",
    end: 3,
    gaugeMin: 0,
    gaugeMax: 12,
    okText: "Holding temperature",
    label: "Fridge controller holding 3 degrees Celsius.",
    caption: "This is the reading we want you looking at when we leave.",
  },
}

/* ------------------------------------------------------------------ */
/* Cold room installation and repair                                   */
/* ------------------------------------------------------------------ */
const coldRoomInstallationRepair: ServiceContent = {
  h1: "The cold room is the heart of the kitchen. When it stops, everything stops.",
  lead: "Cold Fix installs and repairs walk in cold rooms and freezer rooms for restaurants, butcheries and retailers across Gauteng. Call or WhatsApp now. Same day callouts, and emergencies run 24/7.",
  micro: "Send a photo of the controller display on WhatsApp. It helps us arrive with the right parts.",
  visual: {
    variant: "climb",
    start: 2,
    end: 9,
    gaugeMin: 0,
    gaugeMax: 12,
    label: "Cold room controller reading 9 degrees Celsius with a high temperature alarm. Chilled food must stay at 5 degrees or below.",
    caption: "Chilled food must stay at 5°C or below. Above that, bacteria start multiplying.",
  },
  cost: {
    title: "The stock is only the first thing you lose.",
    note: "A cold room that fails at the wrong time takes the menu, the delivery and the day with it.",
    rows: [
      { t: "5°C", h: "You cross the limit for chilled food.", p: "From here every hour counts against you." },
      { t: "8°C", h: "Meat, dairy and prepared food start to turn.", p: "Staff carry stock to whatever fridge has space, and service slows down." },
      { t: "12°C", h: "The delivery cannot go in.", p: "The menu shrinks, orders get cancelled, and an inspector who walks in today will not like the thermometer." },
    ],
    closing: "A cold room that is installed properly and repaired quickly protects all of it.",
  },
  faultsTitle: "Tell us what the cold room is doing.",
  faultsIntro:
    "Pick the one closest to your problem. You will see what usually causes it, what we do about it, and what to do while you wait.",
  faults: [
    ...COLD_ROOM_FAULTS,
    f(
      "panels",
      "The panels are damaged or the insulation is wet",
      ["Impact damage from trolleys or forklifts", "Joints where the sealant has failed", "Water getting into the panel from a leak or cleaning", "Floor or door frame damage"],
      "We repair or replace the damaged panels, reseal the joints and make sure the room is airtight again. Wet insulation does not dry out, so it has to be replaced.",
      "Keep the door shut and tell us where the damage is when you call. A photo helps.",
      "the panels on my cold room are damaged",
    ),
  ],
  scopeTitle: "Cold rooms, from the first panel to the last repair.",
  whyTitle: "Why businesses call Cold Fix for cold rooms.",
  faqs: [
    FAQ_FAST,
    FAQ_QUOTE,
    {
      q: "Do you install new cold rooms and freezer rooms?",
      a: "Yes. We design, install, repair and maintain walk in cold rooms and freezer rooms. Call or WhatsApp us the size you need and what you will store, and we will talk you through the options.",
    },
    {
      q: "Can you repair a cold room somebody else installed?",
      a: "Yes. We diagnose the fault in whatever system is there and tell you honestly what it needs.",
    },
    FAQ_PARTS,
  ],
  finalHeadline: "Get the cold room back to temperature.",
  finalLead: "Call or WhatsApp now. Tell us what it is doing and where you are, and we will tell you when a technician can be there.",
  finalDisplay: {
    variant: "steady",
    end: -18,
    gaugeMin: -20,
    gaugeMax: 12,
    okText: "Holding temperature",
    label: "Freezer room controller holding minus 18 degrees Celsius.",
    caption: "This is the reading we want you looking at when we leave.",
  },
}

/* ------------------------------------------------------------------ */
/* Commercial refrigeration                                            */
/* ------------------------------------------------------------------ */
const commercialRefrigeration: ServiceContent = {
  h1: "The drinks fridge is warm. The shop is full. Customers are walking out.",
  lead: "Cold Fix repairs display fridges, bottle coolers, under counter units, deli cabinets and ice machines for shops, restaurants and bars across Gauteng. Call or WhatsApp now. Same day callouts.",
  visual: {
    variant: "climb",
    start: 3,
    end: 11,
    gaugeMin: 0,
    gaugeMax: 14,
    label: "Display fridge controller reading 11 degrees Celsius with a high temperature alarm. Chilled stock must stay at 5 degrees or below.",
    caption: "Chilled stock must stay at 5°C or below. Warm drinks do not sell.",
  },
  cost: {
    title: "A warm fridge costs more than the stock.",
    note: "In a shop or restaurant the fridge is part of how you earn. When it fails, the loss starts straight away.",
    rows: [
      { t: "5°C", h: "The stock is no longer within the limit.", p: "Dairy, meat and prepared food are at risk, and a health inspector will check this number." },
      { t: "8°C", h: "Customers notice.", p: "The drink is not cold. The cabinet is sweating. People buy somewhere else." },
      { t: "12°C", h: "You are throwing stock away.", p: "And you are explaining to staff and customers why the cold drinks are sold out." },
    ],
    closing: "Every hour a commercial fridge is down is an hour of trade you do not get back.",
  },
  faultsTitle: "Tell us what the fridge is doing.",
  faultsIntro:
    "Pick the one closest to your problem. You will see what usually causes it, what we do about it, and what to do while you wait.",
  faults: [
    f(
      "display-warm",
      "The display fridge is warm",
      ["A condenser coil clogged with dust and grease", "Low refrigerant from a leak", "A condenser or evaporator fan that has failed", "A faulty thermostat or controller", "A door seal that no longer seals"],
      "We diagnose on site and repair there and then whenever the part is available. Commercial units cannot afford to wait a week.",
      "Move the most valuable stock to another fridge. Keep the doors shut as much as you can.",
      "my display fridge is warm",
    ),
    f(
      "bottle-cooler",
      "The bottle cooler is not cold or the glass is fogging",
      ["A dirty condenser", "A fan that has stopped", "A worn door seal", "Low refrigerant", "A faulty thermostat or compressor start parts"],
      "We clean and test the cooling system, replace failed fans or seals, and check the gas before we leave.",
      "Do not keep opening the door to check. Every opening lets warm air in.",
      "my bottle cooler is not cold",
    ),
    f(
      "deli",
      "The deli or butchery cabinet is warm or icing up",
      ["A defrost fault", "A blocked drain", "A fan that has failed", "Low refrigerant", "A cabinet loaded past its load line"],
      "We restore the defrost cycle, clear the drain, repair the fan and check the cooling system. Then we confirm the cabinet holds temperature.",
      "Move meat and dairy into the cold room or another cabinet. Do not leave it sitting in a warm cabinet.",
      "my deli or butchery cabinet is warm or icing up",
    ),
    f(
      "under-counter",
      "The under counter fridge or freezer is not cold or is dripping",
      ["A blocked condenser with no airflow", "A failed fan", "A blocked drain", "A worn door seal", "A faulty thermostat"],
      "We clean and test the unit, replace what has failed and make sure it has the airflow it needs to run properly.",
      "Pull the stock out of the unit and keep it cold elsewhere until we arrive.",
      "my under counter fridge is not cold",
    ),
    f(
      "ice-machine",
      "The ice machine is not making ice",
      ["A water supply problem or a blocked filter", "Scale on the water system", "A dirty condenser", "A failed sensor or pump", "A refrigeration fault"],
      "We check the water supply, clean the scale, test the sensors and pump, and test the cooling system. Then we run the machine to confirm it makes ice again.",
      "Check that the water is switched on at the isolator and that the filter is not blocked.",
      "my ice machine is not making ice",
    ),
    f(
      "wont-start",
      "The compressor will not start or keeps clicking",
      ["A failed start capacitor or relay", "A tripped overload", "A faulty contactor or power supply problem", "A seized compressor, which is the less common cause"],
      "We test the electrical parts first and the compressor after that. A lot of these faults turn out to be a small part and not a new compressor.",
      "Switch it off at the isolator. Do not keep trying to restart it.",
      "the compressor on my commercial fridge will not start",
    ),
    f(
      "noise",
      "It is loud, rattling or vibrating",
      ["A fan motor with worn bearings", "Loose panels or pipe clamps", "Ice hitting a fan blade", "A compressor that is starting to fail"],
      "We trace the noise to its source. Fan motors and loose fittings are quick fixes. A failing compressor is better caught now.",
      "Note when it happens and tell us when you call.",
      "my commercial fridge is making a loud noise",
    ),
    f(
      "seal",
      "The door seal is torn or the door will not close",
      ["A split or hardened gasket", "Sagging hinges", "A worn latch"],
      "We replace the seal and adjust the hinges and latch so the door pulls in tight. A good seal also takes load off the compressor and cuts your electricity bill.",
      "Keep the door shut as much as you can until we arrive.",
      "the door seal on my commercial fridge is damaged",
    ),
  ],
  scopeTitle: "If it keeps stock cold, we repair it.",
  whyTitle: "Why businesses call Cold Fix for commercial refrigeration.",
  faqs: [
    FAQ_FAST,
    FAQ_QUOTE,
    {
      q: "Do you service ice machines too?",
      a: "Yes. We repair and service ice machines for restaurants, bars and shops, from water supply faults to refrigeration problems.",
    },
    {
      q: "Can you set up a maintenance plan so it stops breaking down?",
      a: "Yes. Planned visits catch dirty condensers, worn seals and failing fans before they close the shop. Ask us for a plan that fits your equipment.",
    },
    FAQ_PARTS,
  ],
  finalHeadline: "Get the shop fridge cold again.",
  finalLead: "Call or WhatsApp now. Tell us what it is doing and where you are, and we will tell you when a technician can be there.",
  finalDisplay: {
    variant: "steady",
    end: 3,
    gaugeMin: 0,
    gaugeMax: 14,
    okText: "Holding temperature",
    label: "Display fridge controller holding 3 degrees Celsius.",
    caption: "This is the reading we want you looking at when we leave.",
  },
}

/* ------------------------------------------------------------------ */
/* Air conditioning                                                    */
/* ------------------------------------------------------------------ */
const airConditioning: ServiceContent = {
  photos: ["aircon"],
  h1: "It is 33 degrees outside. The aircon is blowing warm air.",
  lead: "Cold Fix installs, services and repairs split systems, multi splits, ducted systems and inverters across Gauteng. Call or WhatsApp now. Same day callouts, and free quotes.",
  micro: "Send a photo of the indoor unit or the remote display on WhatsApp. It helps us arrive with the right parts.",
  visual: {
    variant: "climb",
    start: 23,
    end: 33,
    decimals: 1,
    unit: "°C",
    limit: 26,
    limitLabel: "26°C comfort",
    gaugeMin: 18,
    gaugeMax: 36,
    icons: ["wind", "droplets"],
    okText: "Cooling",
    alarmText: "Room too warm",
    label: "Room thermometer climbing to 33 degrees Celsius with the aircon not cooling.",
    caption: "Above about 26°C it gets hard to sleep, concentrate or serve customers.",
  },
  cost: {
    title: "A hot room costs more than comfort.",
    note: "An aircon that fails in summer hits sleep, work and trade all at once.",
    rows: [
      { t: "26°C", h: "Work and sleep get harder.", p: "People are irritable, tired and slower. Children and older people feel it first." },
      { t: "30°C", h: "The room is hard to use.", p: "Staff and customers are uncomfortable, and shops and offices start to lose trade." },
      { t: "35°C", h: "You cannot stay in the space.", p: "Business slows or stops. Sensitive equipment in the room starts to suffer." },
    ],
    closing: "The sooner the aircon is looked at, the less of this you have to sit through.",
  },
  faultsTitle: "Tell us what the aircon is doing.",
  faultsIntro:
    "Pick the one closest to your problem. You will see what usually causes it, what we do about it, and what to do while you wait.",
  faults: [
    f(
      "warm-air",
      "It runs but blows warm or weak air",
      ["Low refrigerant from a leak", "A dirty filter or blocked indoor coil", "A dirty outdoor coil", "A failed fan or compressor start part", "A faulty sensor or board"],
      "We measure pressures and temperatures, clean what is blocked and find the actual fault. If gas is low, we find the leak before we refill, so you are not paying for gas that escapes again.",
      "Switch the unit off and clean or replace the filter if you can reach it safely.",
      "my aircon runs but blows warm air",
    ),
    f(
      "dripping",
      "Water is dripping from the indoor unit",
      ["A blocked drain line", "A drain pan that is cracked or not level", "A dirty coil that is overflowing", "A frozen coil that is melting"],
      "We clear and flush the drain, check the pan and the slope, clean the coil and fix whatever iced it up in the first place.",
      "Switch the unit off and put a towel or bucket under it to protect the wall and floor.",
      "water is dripping from my aircon indoor unit",
    ),
    f(
      "smell",
      "There is a bad smell when it runs",
      ["A dirty filter", "Mould or bacteria on the indoor coil", "A drain that does not clear properly", "Dust and damp inside the blower"],
      "We clean the filters, the coil and the drain, and sanitise the system. Then we check the airflow so the smell does not come back.",
      "Switch it to fan only for 20 minutes after use. It dries the coil and slows the smell down.",
      "my aircon has a bad smell",
    ),
    f(
      "ice",
      "Ice has formed on the indoor unit or the pipe",
      ["A dirty filter or blocked airflow", "Low refrigerant", "A fan that has stopped", "An expansion fault"],
      "We switch it off to let it thaw, then find out why it froze. Cleaning the airflow and fixing the cause is what stops it happening again.",
      "Switch the unit off at once and let it thaw. Running it while frozen can damage the compressor.",
      "my aircon has ice on the indoor unit",
    ),
    f(
      "outdoor",
      "The outdoor unit is not running or is making a noise",
      ["A failed capacitor", "A fan motor that has failed", "A compressor that will not start", "A loose panel or fan blade", "A tripped breaker or power fault"],
      "We test the electrical parts first and the compressor after that. A lot of these faults turn out to be a small part and not a new unit.",
      "Switch the unit off at the isolator. Do not keep trying to restart it.",
      "my aircon outdoor unit is not running",
    ),
    f(
      "no-power",
      "It will not turn on or the remote does nothing",
      ["A failed board", "A power supply or breaker fault", "A fuse or isolator that has tripped", "A dead remote or a faulty receiver"],
      "We test the supply, the board and the receiver, and tell you honestly if a board repair or a replacement makes sense.",
      "Try fresh batteries in the remote, then check the breaker. If it trips again, leave it off.",
      "my aircon will not turn on",
    ),
    f(
      "tripping",
      "It trips the breaker",
      ["A failed compressor or fan motor", "Damaged or wet wiring", "A short in the outdoor unit", "An undersized or overloaded circuit"],
      "We isolate each part and test it until we find what is tripping the circuit. Then we repair it safely.",
      "Do not keep resetting the breaker. Switch the unit off and call us.",
      "my aircon keeps tripping the breaker",
    ),
    f(
      "error",
      "It shows an error code or the lights are flashing",
      ["A failed sensor", "A communication fault between the indoor and outdoor units", "A protection trip from low gas or high pressure", "A board that needs repair or replacement"],
      "We read the code, work out whether it is a sensor or a real fault, and repair what it points to.",
      "Take a photo of the flashing lights or the code and send it to us on WhatsApp.",
      "my aircon is showing an error code",
    ),
    f(
      "install",
      "I need a new aircon installed",
      ["Not sure which size you need", "Not sure which type is right for the room", "Not sure if the power supply is ready", "Want a quote for more than one room"],
      "Tell us the room size, what it is used for and where the unit would go. We tell you the right size, the right type and what the installation will cost.",
      "Send a photo of the wall where the unit would go and the outside wall behind it.",
      "I need a new aircon installed",
    ),
  ],
  scopeTitle: "Install it, service it, repair it.",
  whyTitle: "Why people call Cold Fix for aircon.",
  faqs: [
    FAQ_FAST,
    FAQ_QUOTE,
    {
      q: "How often should an aircon be serviced?",
      a: "Most units should be serviced at least once a year, and more often in dusty places or where they run all day. A regular service keeps the airflow clean and helps you catch small faults early.",
    },
    {
      q: "Do you install new aircons too?",
      a: "Yes. We install split systems, multi splits, ducted systems and inverters, and we can advise on the right size and type for your space.",
    },
    FAQ_PARTS,
  ],
  finalHeadline: "Get the room cool again.",
  finalLead: "Call or WhatsApp now. Tell us what it is doing and where you are, and we will tell you when a technician can be there.",
  finalDisplay: {
    variant: "steady",
    end: 22,
    limit: 26,
    limitLabel: "26°C comfort",
    gaugeMin: 18,
    gaugeMax: 36,
    icons: ["wind", "droplets"],
    okText: "Cooling",
    label: "Room thermometer holding 22 degrees Celsius.",
    caption: "This is the reading we want you looking at when we leave.",
  },
}

/* ------------------------------------------------------------------ */
/* Appliance repairs                                                   */
/* ------------------------------------------------------------------ */
const applianceRepairs: ServiceContent = {
  photos: ["electricOvenHob", "defyStove", "defyOven", "dishwasher"],
  h1: "The washing is piling up and dinner is in an hour.",
  lead: "Cold Fix repairs washing machines, tumble dryers, dishwashers, ovens and stoves across Gauteng. Call or WhatsApp now. Same day callouts, and we tell you the cost before we start.",
  visual: {
    variant: "climb",
    text: "Err",
    icons: ["droplets", "zap"],
    alarmText: "Fault detected",
    label: "Appliance display showing an error.",
    caption: "That is your appliance asking for help. We read the fault and fix what it points to.",
  },
  cost: {
    title: "A broken appliance costs more every day.",
    note: "Appliances never fail at a convenient time. The longer they stay broken, the more of the house they take with them.",
    rows: [
      { t: "Day 1", h: "You cope.", p: "You wash in the sink, eat out, and tell yourself it will sort itself out." },
      { t: "Day 3", h: "Life starts to bend around it.", p: "Laundry piles up, takeaways add up, and everyone in the house is tired of it." },
      { t: "Day 7", h: "It costs more than the repair would have.", p: "A week of workarounds usually costs more than a technician visit." },
    ],
    closing: "The faster it is repaired, the sooner the house runs normally again.",
  },
  faultsTitle: "Tell us what is broken.",
  faultsIntro:
    "Pick the one closest to your problem. You will see what usually causes it, what we do about it, and what to do while you wait.",
  faults: [
    f(
      "wm-drain",
      "The washing machine will not drain or spin",
      ["A blocked pump or drain hose", "A failed drain pump", "A worn belt or motor", "A faulty lid or door lock", "A control board fault"],
      "We clear the blockage, test the pump, belt and motor, and check the lock and the board. Then we run a full cycle to confirm it spins and drains properly.",
      "Switch it off at the wall. If the door is locked with water inside, wait before opening it.",
      "my washing machine will not drain or spin",
    ),
    f(
      "dish-drain",
      "The dishwasher will not drain or clean properly",
      ["A blocked drain hose or filter", "A failed drain pump", "A spray arm that is clogged or loose", "A faulty inlet valve", "A heating element or sensor fault"],
      "We clear the filter and the drain, test the pump and the valve, and check the heating and the spray arms. Then we run a cycle to confirm it works.",
      "Clean the filter at the bottom of the tub if you know where it is, and remove any standing water first.",
      "my dishwasher will not drain or clean properly",
    ),
    f(
      "dryer",
      "The tumble dryer is not heating or is taking forever",
      ["A blocked vent or lint filter", "A failed heating element", "A faulty thermostat or thermal fuse", "A worn belt or drum roller", "A control board fault"],
      "We clear the airflow, test the element, thermostat and fuse, and check the belt and the drum. Then we run a load to confirm it dries properly.",
      "Clean the lint filter and check that the vent is not blocked. Do not keep running a dryer that smells like it is burning.",
      "my tumble dryer is not heating",
    ),
    f(
      "oven",
      "The oven is not heating or is uneven",
      ["A failed heating element", "A faulty thermostat or temperature sensor", "A fan that has stopped", "A worn door seal", "A control board or timer fault"],
      "We test the element, the thermostat and the fan, and replace what has failed. Then we check the temperature against the dial.",
      "Do not use the oven if you can smell burning or see sparking.",
      "my oven is not heating properly",
    ),
    f(
      "hob",
      "A hob plate or burner is not working",
      ["A failed plate or element", "A faulty switch", "Damaged wiring", "A blocked or faulty gas burner", "A faulty igniter"],
      "We test the plate, the switch and the wiring, or the burner and the igniter on a gas hob, and replace what has failed.",
      "If you smell gas, do not use any flame or switch. Open the windows, close the gas at the cylinder and call us.",
      "a plate or burner on my hob is not working",
    ),
    f(
      "microwave",
      "The microwave runs but does not heat",
      ["A failed magnetron or high voltage part", "A blown fuse", "A faulty door switch", "A control board fault"],
      "We test the high voltage parts and the door switches, and tell you honestly if a repair makes sense on a unit of that age.",
      "Do not use it if it sparks or smells burnt. Unplug it and call us.",
      "my microwave runs but does not heat",
    ),
    f(
      "leak",
      "Water is leaking from the appliance",
      ["A loose or cracked hose", "A worn door seal", "A failed pump or seal", "A blocked drain or overfilled drawer"],
      "We find where the water is coming from, replace the hose, seal or pump that has failed, and test it with a full cycle.",
      "Switch the appliance off at the wall, turn off the water and mop the floor so nobody slips.",
      "water is leaking from my appliance",
    ),
    f(
      "trip",
      "It trips the power or shows an error code",
      ["A shorted element or motor", "Damaged wiring or a wet connection", "A failed sensor", "A control board fault"],
      "We read the fault, test the parts it points to, and repair them safely.",
      "Do not keep resetting the breaker. Switch the appliance off and send us a photo of the error.",
      "my appliance trips the power or shows an error code",
    ),
  ],
  scopeTitle: "If it runs on a plug or gas in your home, we repair it.",
  whyTitle: "Why people call Cold Fix for appliance repairs.",
  faqs: [
    FAQ_FAST,
    FAQ_QUOTE,
    {
      q: "Do you repair all brands?",
      a: "We repair the appliance brands found in most Gauteng homes. If you tell us the brand and model when you call, we can tell you what we can do.",
    },
    FAQ_REPLACE,
    FAQ_PARTS,
  ],
  finalHeadline: "Get the house running again.",
  finalLead: "Call or WhatsApp now. Tell us what is broken and where you are, and we will tell you when a technician can be there.",
}

/* ------------------------------------------------------------------ */
/* Washing machine repairs                                             */
/* ------------------------------------------------------------------ */
const washingMachineRepairs: ServiceContent = {
  photos: ["washerOnSite", "washerHisense"],
  h1: "There is water on the laundry floor and a drum full of wet washing.",
  lead: "Cold Fix repairs front loaders and top loaders across Gauteng. Call or WhatsApp now. Same day callouts, and we run a full cycle before we leave.",
  micro: "Send a photo of the error code or the leak on WhatsApp. It helps us arrive with the right parts.",
  visual: {
    variant: "climb",
    text: "E21",
    icons: ["droplets", "zap"],
    alarmText: "Fault detected",
    label: "Washing machine display showing error E21.",
    caption: "Error codes differ by brand, but every one of them points to a fault we can find.",
  },
  cost: {
    title: "Laundry does not wait.",
    note: "A washing machine fault is never just one problem. It is the washing, the floor and the week.",
    rows: [
      { t: "Day 1", h: "The drum is full and the door is locked.", p: "Wet washing sits in the machine and starts to smell." },
      { t: "Day 3", h: "The laundry mountain is growing.", p: "Everyone is out of clean clothes, and the laundromat is not cheap." },
      { t: "Day 7", h: "It is costing more than the repair.", p: "A week of laundromats and workarounds adds up quickly." },
    ],
    closing: "A machine repaired this week is worth more than a machine replaced next month.",
  },
  faultsTitle: "Tell us what the machine is doing.",
  faultsIntro:
    "Pick the one closest to your problem. You will see what usually causes it, what we do about it, and what to do while you wait.",
  faults: [
    f(
      "wont-start",
      "It will not start or turn on",
      ["A door or lid lock that is not closing", "A faulty door switch", "A failed control board", "A power supply or plug fault", "A blown fuse inside the machine"],
      "We test the supply, the lock and the board, and repair what has failed. Then we run a full cycle to confirm it works.",
      "Check the plug, the socket and that the door closes properly. Do not keep forcing the door.",
      "my washing machine will not start",
    ),
    f(
      "not-draining",
      "It is full of water and will not drain",
      ["A blocked pump or filter", "A kinked or blocked drain hose", "A failed drain pump", "A faulty pressure switch"],
      "We clear the filter and the hose, test the pump and the switch, and replace what has failed.",
      "Switch it off at the wall. Do not open the door while there is water in the drum.",
      "my washing machine is full of water and will not drain",
    ),
    f(
      "not-filling",
      "It will not fill with water",
      ["A closed tap or kinked hose", "A blocked inlet filter", "A failed inlet valve", "A faulty pressure switch"],
      "We check the tap and the hose first, clean the filter, then test the valve and the switch.",
      "Check that both taps are open and the hose is not bent behind the machine.",
      "my washing machine will not fill with water",
    ),
    f(
      "not-spinning",
      "It is not spinning or spins unevenly",
      ["A worn belt", "A motor or motor brushes that have failed", "An unbalanced load", "Worn shock absorbers or suspension", "A faulty control board"],
      "We test the belt, motor and board, check the suspension, and repair what is causing it. Then we run a full spin cycle.",
      "Redistribute the load and try a spin only. If it still will not spin, leave it and call us.",
      "my washing machine is not spinning",
    ),
    f(
      "leak",
      "It is leaking from the door, drum or base",
      ["A worn or torn door seal", "A cracked hose or loose clamp", "A failed pump seal", "Too much detergent causing overflow", "A damaged drum seal"],
      "We find exactly where the water is coming from, replace the seal, hose or pump, and test with a full cycle.",
      "Switch it off at the wall, turn off the taps and mop the floor so nobody slips.",
      "my washing machine is leaking",
    ),
    f(
      "noise",
      "It is banging, grinding or shaking",
      ["Worn drum bearings", "Failed shock absorbers", "A foreign object in the drum or pump", "A machine that is not level or still has the transit bolts in"],
      "We find the source of the noise and repair it. Bearings are a bigger job, so we tell you honestly what it will cost before we start.",
      "Stop using the machine if it is grinding. It can damage the drum.",
      "my washing machine is banging and grinding",
    ),
    f(
      "door",
      "The door will not open or lock",
      ["A failed door lock", "A faulty door switch", "Water still in the drum", "A control board fault", "A broken door handle or hinge"],
      "We test the lock and the switch, drain the machine if needed, and replace the part that has failed.",
      "Switch the machine off at the wall and wait a few minutes. Do not force the door.",
      "the door on my washing machine will not open or lock",
    ),
    f(
      "error",
      "It shows an error code",
      ["A water fault", "A drainage fault", "A motor or lock fault", "A sensor or board fault"],
      "We read the code, find what it points to, test the parts involved and repair them.",
      "Take a photo of the display and send it to us on WhatsApp. It tells us a lot before we arrive.",
      "my washing machine is showing an error code",
    ),
  ],
  scopeTitle: "Every common washing machine fault, fixed.",
  whyTitle: "Why people call Cold Fix for washing machines.",
  faqs: [
    FAQ_FAST,
    FAQ_QUOTE,
    {
      q: "Do you repair front loaders and top loaders?",
      a: "Yes. We repair both, from the major brands found in most Gauteng homes.",
    },
    FAQ_REPLACE,
    {
      q: "Do you repair machines in rental properties?",
      a: "Yes. We work with landlords and agents, and we can quote and repair quickly so tenants are not without a machine for long.",
    },
  ],
  finalHeadline: "Get laundry day back to normal.",
  finalLead: "Call or WhatsApp now. Tell us what the machine is doing and where you are, and we will tell you when a technician can be there.",
}

/* ------------------------------------------------------------------ */
/* Electrical services                                                 */
/* ------------------------------------------------------------------ */
const electricalServices: ServiceContent = {
  h1: "The breaker keeps tripping and nobody knows why.",
  lead: "Cold Fix does the electrical work behind your appliances, aircon and cold rooms across Gauteng: fault finding, dedicated circuits, isolators and safe connections. Call or WhatsApp now.",
  micro: "Send a photo of the breaker board or the equipment on WhatsApp. It helps us come prepared.",
  visual: {
    variant: "climb",
    start: 22,
    end: 72,
    decimals: 0,
    unit: "A",
    limit: 60,
    limitLabel: "Breaker limit",
    gaugeMin: 0,
    gaugeMax: 80,
    icons: ["zap", "gauge"],
    okText: "Normal load",
    alarmText: "Overload",
    label: "Load meter climbing above the breaker limit.",
    caption: "A breaker trips to protect your wiring and your equipment. We find out why it tripped.",
  },
  cost: {
    title: "Resetting it is not fixing it.",
    note: "A breaker that keeps tripping is telling you something. Ignoring it risks the equipment and the wiring.",
    rows: [
      { t: "Once", h: "It might be a one off.", p: "Or it might be an early warning from a heater, a motor or a wire." },
      { t: "Twice", h: "Something is wrong.", p: "Resetting again and again puts stress on the circuit and the equipment." },
      { t: "Often", h: "Fridges, freezers and aircon are at risk.", p: "Food, stock and expensive equipment depend on that circuit staying on." },
    ],
    closing: "Do not keep resetting it. Call us and we will find it.",
  },
  faultsTitle: "Tell us what the power is doing.",
  faultsIntro:
    "Pick the one closest to your problem. You will see what usually causes it, what we do about it, and what to do while you wait.",
  faults: [
    f(
      "tripping",
      "The breaker or earth leakage keeps tripping",
      ["A shorted heater element", "A motor or compressor winding fault", "Damaged or wet wiring", "An overloaded circuit", "An earth leakage fault in an appliance"],
      "We isolate each circuit and each piece of equipment, and test until we find what is tripping it. Then we repair it safely.",
      "Do not keep resetting it. Switch off the equipment you think is causing it and call us.",
      "my breaker keeps tripping",
    ),
    f(
      "no-power",
      "Part of the building has no power",
      ["A tripped breaker that will not reset", "A burnt or loose connection", "A failed isolator or contactor", "Damaged wiring"],
      "We trace the circuit from the board outwards, find the fault, and repair it safely.",
      "Leave the circuit off if the breaker will not reset. Do not open the board yourself.",
      "part of my building has no power",
    ),
    f(
      "new-appliance",
      "A new appliance needs a power point or its own circuit",
      ["An appliance that is too big for the existing circuit", "No plug point where it needs to go", "An old or overloaded board"],
      "We check the board and the circuit, install the plug point or dedicated circuit, and test it before we hand it over.",
      "Tell us the appliance and where it will go, and send a photo of the wall and the board if you can.",
      "I need a new power point for an appliance",
    ),
    f(
      "aircon-cold",
      "An aircon or cold room needs a dedicated circuit and isolator",
      ["A new installation", "An existing circuit that is too small", "A unit that trips as soon as it starts"],
      "We install a dedicated circuit and an isolator so the unit has a safe, correct supply and can be switched off for servicing.",
      "Tell us the unit and its position and we will tell you what the supply needs.",
      "I need a dedicated circuit for an aircon or cold room",
    ),
    f(
      "burning",
      "There is a burning smell or a plug is hot",
      ["A loose connection", "An overloaded plug or extension lead", "A failing appliance", "Damaged wiring"],
      "We find the loose or overheating connection and repair it. Then we check the circuit and the equipment.",
      "Switch the circuit off at the board, unplug the equipment and do not use that plug until we have looked at it.",
      "there is a burning smell or hot plug",
    ),
    f(
      "surge",
      "Surges or lightning have damaged equipment",
      ["A power surge from the grid", "Lightning nearby", "No surge protection on sensitive equipment", "A failing supply"],
      "We check what has been damaged, repair or advise on replacement, and fit surge protection so it does not happen again.",
      "Unplug sensitive equipment during storms and when the power comes back after an outage.",
      "a power surge has damaged my equipment",
    ),
    f(
      "stove",
      "A stove or oven needs connecting or is not getting power",
      ["A new stove that needs connecting", "A loose connection at the stove", "A tripped breaker", "A faulty isolator"],
      "We connect it safely, test the circuit, and check the isolator.",
      "Do not try to connect a stove yourself. Leave the supply off until we arrive.",
      "my stove or oven needs connecting",
    ),
    f(
      "board",
      "The distribution board is old, crowded or needs upgrading",
      ["Too many circuits on one breaker", "Breakers that are warm or buzzing", "No earth leakage protection", "Extra circuits added over the years"],
      "We inspect the board, tell you what needs to change, and repair or upgrade it safely.",
      "Do not open the board yourself. Tell us what you have noticed and send a photo of the outside.",
      "my distribution board needs checking or upgrading",
    ),
  ],
  scopeTitle: "The electrical work that keeps your equipment running.",
  whyTitle: "Why people call Cold Fix for electrical work.",
  faqs: [
    FAQ_FAST,
    FAQ_QUOTE,
    {
      q: "Do you do electrical work on its own, or only with appliance jobs?",
      a: "We specialise in the electrical work that supports appliances, aircon and cold rooms: connections, dedicated circuits, isolators, fault finding and board checks. Tell us what you need and we will say whether it is something we do.",
    },
    {
      q: "Is it safe to keep resetting the breaker?",
      a: "No. A breaker trips for a reason. If it trips more than once, switch off what you think is causing it and call us.",
    },
    FAQ_PARTS,
  ],
  finalHeadline: "Get the power back and keep it on.",
  finalLead: "Call or WhatsApp now. Tell us what the power is doing and where you are, and we will tell you when a technician can be there.",
}

/* ------------------------------------------------------------------ */
/* Plumbing services                                                   */
/* ------------------------------------------------------------------ */
const plumbingServices: ServiceContent = {
  photos: ["gasHob"],
  h1: "There is water where it should not be, and it is coming from behind the appliance.",
  lead: "Cold Fix does the water and gas work behind your appliances across Gauteng: connections, leak repairs and isolation valves. Call or WhatsApp now. Same day callouts.",
  micro: "Send a photo of the leak or the connection on WhatsApp. It helps us arrive with the right fittings.",
  visual: {
    variant: "climb",
    start: 3.2,
    end: 0.4,
    decimals: 1,
    unit: "bar",
    limit: 1.5,
    limitLabel: "Low pressure",
    alarmWhen: "below",
    gaugeMin: 0,
    gaugeMax: 4,
    icons: ["droplets", "gauge"],
    okText: "Normal pressure",
    alarmText: "Low pressure",
    label: "Water pressure meter dropping to a low reading.",
    caption: "Low pressure at an appliance is often the first sign of a problem in the pipework.",
  },
  cost: {
    title: "Water damage is quiet at the start.",
    note: "A small leak behind an appliance does its damage out of sight, then all at once.",
    rows: [
      { t: "A drip", h: "Cupboards swell and floors lift.", p: "Mould starts quietly behind the appliance where nobody looks." },
      { t: "A day", h: "A loose connection can flood the room.", p: "A burst hose can put water across a kitchen or laundry in hours." },
      { t: "A week", h: "The damage spreads.", p: "Ceilings stain, floors rot and the water bill climbs without anyone noticing." },
    ],
    closing: "Turn the water off at the isolator, then call us.",
  },
  faultsTitle: "Tell us where the water or gas is going wrong.",
  faultsIntro:
    "Pick the one closest to your problem. You will see what usually causes it, what we do about it, and what to do while you wait.",
  faults: [
    f(
      "wm-hose",
      "The washing machine hose or tap is dripping",
      ["A worn or cracked hose", "A loose connection", "A tap or valve that no longer seals", "A damaged washer inside the fitting"],
      "We replace the hose or washer, fit an isolation valve if there is not one, and test under pressure.",
      "Turn the tap off at the wall and put a bucket or towel under the connection.",
      "the hose or tap on my washing machine is dripping",
    ),
    f(
      "dishwasher",
      "The dishwasher is leaking or will not drain",
      ["A loose inlet or drain connection", "A blocked drain connection under the sink", "A hose that is kinked or cracked", "A worn seal"],
      "We check the connections under the sink, clear the drain, replace worn hoses and fittings, and test a full cycle.",
      "Switch the dishwasher off, turn the water off and mop the floor so nobody slips.",
      "my dishwasher is leaking or will not drain",
    ),
    f(
      "fridge-line",
      "The fridge or ice machine water line is leaking",
      ["A cracked or kinked water line", "A loose fitting", "A faulty inlet valve", "A blocked filter"],
      "We replace the line or the fitting, check the valve and the filter, and test it for leaks.",
      "Turn off the water to the fridge or ice machine, and mop up so nobody slips.",
      "the water line to my fridge or ice machine is leaking",
    ),
    f(
      "gas",
      "I can smell gas at the hob or oven",
      ["A loose or damaged gas connection", "A worn hose", "A faulty valve or regulator", "A burner that is leaking"],
      "We check the whole gas connection with a leak test, replace damaged parts, and make sure it is safe before we leave.",
      "No flames and no switches. Open the windows, close the gas at the cylinder, leave the area and call us.",
      "I can smell gas at my hob or oven",
    ),
    f(
      "burst",
      "A pipe has burst or is dripping",
      ["An old or corroded pipe", "A joint that has failed", "A freeze or pressure problem", "Damage from building work"],
      "We find the leak, repair or replace the section and test the line under pressure.",
      "Turn the water off at the main and open the taps to drain the line. Switch off the power if water is near any sockets.",
      "a pipe has burst or is dripping",
    ),
    f(
      "pressure",
      "The water pressure to an appliance is low",
      ["A partly closed or faulty isolation valve", "A blocked filter or screen", "A kinked or damaged hose", "A leak in the pipework"],
      "We check the valve, the filters and the pipework, find where the pressure is being lost and repair it.",
      "Check that the tap behind the appliance is fully open and the hose is not bent.",
      "the water pressure to my appliance is low",
    ),
    f(
      "tap",
      "A tap or mixer is dripping or broken",
      ["A worn washer or cartridge", "A corroded tap body", "A loose connection under the basin", "A mixer that needs replacing"],
      "We repair or replace the tap or mixer and test it for leaks.",
      "Turn off the isolation valve under the basin to stop the drip.",
      "my tap or mixer is dripping",
    ),
    f(
      "new-connection",
      "A new appliance needs a water or gas connection",
      ["A new washing machine or dishwasher", "A new ice machine or fridge with a water line", "A new hob or oven on gas", "A move or rearrangement of the kitchen or laundry"],
      "We install the water, drain or gas connection, fit isolation valves and test it before we hand it over.",
      "Tell us the appliance and where it will go, and send a photo of the space.",
      "I need a water or gas connection for a new appliance",
    ),
  ],
  scopeTitle: "The plumbing that keeps your appliances running.",
  whyTitle: "Why people call Cold Fix for plumbing.",
  faqs: [
    FAQ_FAST,
    FAQ_QUOTE,
    {
      q: "Do you do general plumbing or only appliance connections?",
      a: "We focus on the water and gas work behind appliances, refrigeration and cooling: connections, leak repairs on appliance pipework, isolation valves, taps and mixers. Tell us what you need and we will say whether it is something we do.",
    },
    {
      q: "What should I do if I smell gas?",
      a: "Do not use any flame or switch. Open the windows, close the gas at the cylinder, leave the area and call us.",
    },
    FAQ_PARTS,
  ],
  finalHeadline: "Stop the leak. Keep the house dry.",
  finalLead: "Call or WhatsApp now. Tell us where the water or gas is going wrong and where you are, and we will tell you when a technician can be there.",
}

/* ------------------------------------------------------------------ */
/* Maintenance contracts (homes and businesses)                        */
/* ------------------------------------------------------------------ */
const maintenanceLabels = {
  causes: "What goes wrong without servicing",
  fix: "What a service visit covers",
  wait: "Good to know",
}

const propertyMaintenance: ServiceContent = {
  h1: "The breakdown always happens on the busiest day.",
  lead: "Cold Fix offers scheduled maintenance for homes and businesses across Gauteng: aircon, refrigeration and household appliances. Planned visits, fewer breakdowns and priority support.",
  micro: "Tell us what you have and where, and we will put a plan together.",
  visual: {
    variant: "climb",
    start: 120,
    end: 420,
    decimals: 0,
    unit: "days",
    limit: 365,
    limitLabel: "Yearly service",
    gaugeMin: 0,
    gaugeMax: 450,
    icons: ["wrench", "list"],
    okText: "Service up to date",
    alarmText: "Service overdue",
    label: "Counter showing 420 days since the last service, past the yearly service limit.",
    caption: "Most equipment needs a service at least once a year. After that, small faults start to grow.",
  },
  cost: {
    title: "Unserviced equipment fails in its own time.",
    note: "A service costs far less than a breakdown on the hottest, busiest or most important day.",
    rows: [
      { t: "6 months", h: "Dust and dirt start to build up.", p: "Filters and coils begin to load up, and the equipment starts working harder." },
      { t: "12 months", h: "Running costs creep up.", p: "Dirty coils, tired seals and low gas pressure add to the electricity bill." },
      { t: "18 months", h: "That is often when it fails.", p: "Usually on a hot day, a busy day or a holiday weekend." },
    ],
    closing: "A planned visit catches the small fault before it becomes the big one.",
  },
  faultsTitle: "Tell us what you want looked after.",
  faultsIntro:
    "Pick the equipment closest to yours. You will see what goes wrong without servicing and what a service visit covers.",
  faultLabels: maintenanceLabels,
  faults: [
    f(
      "home-aircon",
      "Air conditioners at home",
      ["Dirty filters and indoor coils", "A blocked drain line", "Low refrigerant pressure", "A dirty outdoor coil", "Worn capacitors and fan motors"],
      "We clean the filters and coils, flush the drain, check gas pressure, test the electrical parts and run the unit to confirm it cools properly.",
      "Most units need a service at least once a year, more often in dusty places or where they run all day.",
      "I would like a maintenance plan for the air conditioners at my home",
    ),
    f(
      "home-fridge",
      "Fridges and freezers at home",
      ["Dust and pet hair on the condenser coil", "Worn door seals", "Fans that slow down or stop", "Drains that block and freeze"],
      "We clean the coil, check the seals and the fans, clear the drain and test the temperatures.",
      "A clean condenser is the cheapest way to extend the life of a fridge.",
      "I would like a maintenance plan for the fridges and freezers at my home",
    ),
    f(
      "home-appliances",
      "Washing machines, dishwashers and ovens",
      ["Lint, soap and limescale build up", "Blocked filters and drain hoses", "Worn door seals and hoses", "Elements and pumps under strain"],
      "We clean filters and pumps, check hoses and seals, test elements and motors and run a cycle to confirm everything works.",
      "A yearly check on hoses and filters can prevent most leaks and blockages.",
      "I would like a maintenance plan for the appliances at my home",
    ),
    f(
      "business-fridge",
      "Shop or restaurant fridges and freezers",
      ["Condensers clogged with dust and grease", "Worn door seals", "Failing fans", "Low refrigerant", "Defrost faults"],
      "We clean the condensers, check seals and fans, test defrost, check gas and record the temperatures.",
      "Planned servicing protects your stock and helps you meet food safety standards.",
      "I would like a maintenance plan for the fridges in my business",
    ),
    f(
      "business-aircon",
      "Aircon at a shop or office",
      ["Dirty filters and coils", "Drains that block", "Low refrigerant", "Worn fan motors and capacitors"],
      "We service the indoor and outdoor units, check the controls and the electrical parts, and report on each unit.",
      "Aircon that is serviced regularly runs cheaper and breaks down less often.",
      "I would like a maintenance plan for the aircon at my business",
    ),
    f(
      "multi-site",
      "More than one site",
      ["Different equipment at each site", "Different service dates and records", "Nobody sure who to call", "Inconsistent servicing from site to site"],
      "We plan one schedule for all your sites, keep service records and give you one number to call.",
      "Tell us the sites, the equipment and how often you want visits.",
      "I would like a maintenance plan for more than one site",
    ),
  ],
  scopeTitle: "What a maintenance plan covers.",
  whyTitle: "Why people choose a Cold Fix plan.",
  faqs: [
    {
      q: "What does a maintenance plan cost?",
      a: "Plans are tailored to your equipment and how often you want visits. Call or WhatsApp us what you have and we will quote you.",
    },
    {
      q: "Do contract clients get priority?",
      a: "Yes. Maintenance clients get priority response when something breaks.",
    },
    {
      q: "Can I get service records?",
      a: "Yes. We keep service records and report on what we found and what we did on every visit.",
    },
    FAQ_FAST,
  ],
  finalHeadline: "Stop the breakdowns before they start.",
  finalLead: "Call or WhatsApp now. Tell us what equipment you have and where, and we will put a plan together.",
}

const hvacMaintenanceContracts: ServiceContent = {
  h1: "Nobody notices the aircon until it stops. By then the office is 33 degrees.",
  lead: "Cold Fix runs HVAC maintenance contracts for offices, retail and industrial sites across Gauteng: scheduled servicing, priority breakdown response and clear records. Call or WhatsApp now.",
  micro: "Tell us about your site and your equipment, and we will put a plan together.",
  visual: {
    variant: "climb",
    start: 150,
    end: 450,
    decimals: 0,
    unit: "days",
    limit: 365,
    limitLabel: "Yearly service",
    gaugeMin: 0,
    gaugeMax: 480,
    icons: ["wind", "wrench"],
    okText: "Service up to date",
    alarmText: "Service overdue",
    label: "Counter showing 450 days since the last service, past the yearly service limit.",
    caption: "Planned visits catch the small faults before they close the office or the cold room.",
  },
  cost: {
    title: "A breakdown costs more than a plan.",
    note: "For a business, equipment that fails during trading hours takes the day with it.",
    rows: [
      { t: "6 months", h: "Efficiency starts to slip.", p: "Dirty filters and coils make the system work harder and cost more to run." },
      { t: "12 months", h: "Faults start to hide.", p: "Worn belts, low gas and tired electrical parts are all waiting for a hot day." },
      { t: "18 months", h: "It fails during trading hours.", p: "Staff go home, customers walk out, and stock warms in the back." },
    ],
    closing: "A scheduled visit is cheaper than an unscheduled shutdown.",
  },
  faultsTitle: "Tell us about your site.",
  faultsIntro: "Pick the closest match. You will see what goes wrong without servicing and what a service visit covers.",
  faultLabels: maintenanceLabels,
  faults: [
    f(
      "office",
      "Office aircon",
      ["Dirty filters and coils", "Blocked drains", "Low refrigerant", "Worn fan motors and capacitors", "Controls that drift or fail"],
      "We service every indoor and outdoor unit, test the controls and the electrical parts, and give you a report on each unit.",
      "Offices with many units benefit most from one scheduled visit per site rather than call by call repairs.",
      "I would like an HVAC maintenance contract for our office",
    ),
    f(
      "retail",
      "Retail aircon and refrigeration",
      ["Dust and grease on coils", "Failing fans", "Low refrigerant", "Worn door seals on display fridges", "Defrost faults"],
      "We service the aircon and the refrigeration on the same visit, check temperatures and seals, and record what we find.",
      "One team looking after aircon and refrigeration means fewer phone calls for you.",
      "I would like an HVAC maintenance contract for our retail site",
    ),
    f(
      "cold-chain",
      "Cold rooms and cold chain",
      ["Evaporator and condenser build up", "Worn door seals and gaskets", "Defrost system faults", "Low refrigerant", "Temperature drift over time"],
      "We service the plant, check the defrost and the seals, record temperatures and flag problems before they take stock with them.",
      "For cold chain, temperature records matter as much as the service itself. We keep them.",
      "I would like an HVAC maintenance contract for our cold rooms",
    ),
    f(
      "industrial",
      "Industrial sites",
      ["Heavy dirt and dust loads", "Larger systems with more parts to fail", "Different equipment across the site", "Pressure to avoid downtime"],
      "We survey the site, plan a service schedule that fits your operation, and respond with priority when something fails.",
      "A site survey is the first step. Tell us where you are and what you run.",
      "I would like an HVAC maintenance contract for our industrial site",
    ),
    f(
      "multi-site",
      "More than one site",
      ["Different equipment at each site", "Different service dates and records", "Nobody sure who to call", "Inconsistent servicing from site to site"],
      "We plan one schedule for all your sites, keep service records and give you one number to call.",
      "Tell us the sites, the equipment and how often you want visits.",
      "I would like an HVAC maintenance contract for more than one site",
    ),
  ],
  scopeTitle: "What a maintenance contract covers.",
  whyTitle: "Why businesses choose a Cold Fix contract.",
  faqs: [
    {
      q: "What does a maintenance contract cost?",
      a: "Plans are tailored by site and equipment. Call or WhatsApp us what you have and we will quote you.",
    },
    {
      q: "Do contract clients get priority when something breaks?",
      a: "Yes. Contract clients get priority breakdown response.",
    },
    {
      q: "Do you keep service records?",
      a: "Yes. We keep records and report on what we found and what we did on every visit, which helps with compliance and with planning.",
    },
    {
      q: "Can you cover more than one site?",
      a: "Yes. We run single site and multi site contracts.",
    },
    FAQ_FAST,
  ],
  finalHeadline: "Keep the systems running and the site open.",
  finalLead: "Call or WhatsApp now. Tell us about your site and equipment, and we will put a plan together.",
}

/* ------------------------------------------------------------------ */
/* Emergency callout service                                           */
/* ------------------------------------------------------------------ */
const emergencyCalloutService: ServiceContent = {
  h1: "It is 2am. The cold room is warming. Who do you call?",
  lead: "Cold Fix runs 24/7 emergency callouts for refrigeration, aircon and appliance breakdowns across Gauteng. Call or WhatsApp now. We tell you what to do while we are on the way.",
  micro: "Send a photo of the unit or the controller on WhatsApp. It helps us arrive with the right parts.",
  visual: {
    variant: "climb",
    clock: "02:14",
    icons: ["clock", "snow"],
    alarmText: "Breakdown",
    label: "Clock showing 2:14 in the morning with a breakdown alarm.",
    caption: "Breakdowns do not wait for office hours. Neither do we.",
  },
  cost: {
    title: "The first hours decide how much you lose.",
    note: "What you do in the first hour, and how fast a technician arrives, changes the whole bill.",
    rows: [
      { t: "Hour 1", h: "Keep the door shut and call us.", p: "A closed room holds its temperature longer than an open one." },
      { t: "Hour 4", h: "Stock starts to warm.", p: "Decisions get harder. Move what you can into another fridge or cooler boxes." },
      { t: "Hour 8", h: "You may be throwing stock away.", p: "An early callout is the only thing that changes this." },
    ],
    closing: "Call early. A technician on the way is worth more than a technician on Monday.",
  },
  faultsTitle: "Tell us what has failed.",
  faultsIntro:
    "Pick the one closest to your problem. You will see what usually causes it, what to do right now, and what we do when we arrive.",
  faults: [
    f(
      "cold-room",
      "The cold room or freezer room has stopped cooling",
      ["A compressor or condensing unit that has stopped", "A failed fan on the evaporator or condenser", "A power or electrical fault", "A controller or sensor fault", "A refrigerant leak"],
      "We come out, find the fault and repair it on site. Where the part is not on the van, we tell you the fastest way to protect your stock in the meantime.",
      "Keep the door shut. Move your most valuable stock into another cold room or into cooler boxes with ice.",
      "my cold room has stopped cooling and I need an emergency callout",
    ),
    f(
      "shop-fridge",
      "A shop or restaurant fridge or freezer is down",
      ["A compressor that will not start", "A fan failure", "A blocked condenser", "A controller fault", "A power supply fault"],
      "We diagnose on site and repair there and then whenever the part is available.",
      "Move stock into another unit and keep the doors shut as much as you can.",
      "my shop fridge or freezer is down and I need an emergency callout",
    ),
    f(
      "power-cut",
      "The power came back but the unit did not start",
      ["A compressor overload that tripped", "A start relay or capacitor damaged by the surge", "A controller that has locked out", "A phase failure on a three phase unit"],
      "We test the supply, the start parts and the controller, and restore the unit.",
      "Wait five minutes before trying again. Do not keep switching it on and off.",
      "the power came back after an outage but my fridge or cold room did not start",
    ),
    f(
      "aircon",
      "The aircon has failed in a business or home",
      ["A failed compressor, capacitor or fan", "A refrigerant leak", "An electrical or board fault", "A blocked or frozen coil"],
      "We find the fault and repair it on site wherever we can.",
      "Switch the unit off, open windows and doors for airflow and keep the heat out where you can.",
      "my aircon has failed and I need an emergency callout",
    ),
    f(
      "home-fridge",
      "The home fridge or freezer has stopped",
      ["A failed start part", "A thermostat or board fault", "A fan or compressor fault", "A power fault"],
      "We diagnose and repair on site, and tell you honestly if the unit is worth repairing.",
      "Keep the doors shut. Move meat and dairy into cooler boxes with ice.",
      "my home fridge or freezer has stopped and I need an emergency callout",
    ),
    f(
      "appliance",
      "An appliance is leaking, sparking or burning",
      ["A shorted element or motor", "A split hose or loose connection", "Damaged wiring", "A failing board or pump"],
      "We make it safe first, then find and repair the fault.",
      "Switch it off at the wall and at the breaker, turn the water off if it is leaking, and keep away from it.",
      "an appliance is leaking, sparking or burning and I need an emergency callout",
    ),
  ],
  scopeTitle: "What we respond to.",
  whyTitle: "Why people call Cold Fix in an emergency.",
  faqs: [
    {
      q: "Do you really work 24 hours?",
      a: "Yes. Emergency callouts run 24/7 across Gauteng. Call or WhatsApp us and we will tell you what is possible for your suburb.",
    },
    FAQ_QUOTE,
    {
      q: "What should I do while I wait for the technician?",
      a: "Keep the door of the fridge or cold room shut. Move the most valuable stock into another unit or cooler boxes with ice. Switch off any appliance that is sparking, smoking or leaking, and keep away from it.",
    },
    {
      q: "Do you charge more for emergencies?",
      a: "Call us and we will tell you what applies to your situation before a technician is sent.",
    },
    FAQ_PARTS,
  ],
  finalHeadline: "Do not wait for morning.",
  finalLead: "Call or WhatsApp now. Tell us what has failed and where you are, and we will tell you when a technician can be there.",
}

export const SERVICE_CONTENT = {
  refrigerationRepairs,
  coldRoomInstallationRepair,
  commercialRefrigeration,
  airConditioning,
  applianceRepairs,
  washingMachineRepairs,
  electricalServices,
  plumbingServices,
  propertyMaintenance,
  hvacMaintenanceContracts,
  emergencyCalloutService,
}
