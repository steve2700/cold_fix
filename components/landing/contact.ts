// One place for the landing page contact details.
// Same numbers as the rest of the site (see README brand reference).

export const PHONE_TEL = "+27703096749"
export const PHONE_DISPLAY = "070 309 6749"
export const WA_NUMBER = "27703096749"

export const DEFAULT_WA_MESSAGE =
  "Hi Cold Fix, my cold room or commercial fridge has a fault. Can a technician come out today? My suburb is: "

export function waLink(message: string = DEFAULT_WA_MESSAGE) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`
}
