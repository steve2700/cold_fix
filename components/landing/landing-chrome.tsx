import Image from "next/image"
import { CallLink, WhatsAppLink } from "@/components/landing/cta"
import { PHONE_DISPLAY } from "@/components/landing/contact"

// Top bar for ad landing pages: logo and two ways to reach us. No menu to wander off with.
export function LandingHeader() {
  return (
    <header className="sticky top-0 z-40 bg-[#07162e]/95 text-white backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <div className="flex items-center gap-3">
          <Image
            src="/logo-square.png"
            alt="Cold Fix Services"
            width={44}
            height={44}
            priority
            className="h-11 w-11 rounded-lg"
          />
          <span className="hidden text-lg font-bold sm:block">Cold Fix Services</span>
        </div>
        <div className="flex items-center gap-3">
          <CallLink
            place="header"
            className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-[#ff9f1c] px-4 text-base font-extrabold text-[#07162e] focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <span className="md:hidden">Call now</span>
            <span className="hidden md:inline">Call now {PHONE_DISPLAY}</span>
          </CallLink>
          <WhatsAppLink
            place="header"
            className="hidden min-h-11 items-center gap-2 rounded-lg bg-[#25d366] px-4 text-base font-extrabold text-[#06230f] focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-white md:inline-flex"
          >
            WhatsApp now
          </WhatsAppLink>
        </div>
      </div>
    </header>
  )
}

// On phones, Call and WhatsApp stay under your thumb the whole way down.
export function LandingStickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-black/20 bg-[#07162e] p-2.5 pb-[calc(0.625rem+env(safe-area-inset-bottom))] md:hidden">
      <div className="grid grid-cols-2 gap-2.5">
        <CallLink
          place="sticky_bar"
          className="inline-flex min-h-14 items-center justify-center gap-2 rounded-lg bg-[#ff9f1c] px-3 text-lg font-extrabold text-[#07162e] focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Call now
        </CallLink>
        <WhatsAppLink
          place="sticky_bar"
          className="inline-flex min-h-14 items-center justify-center gap-2 rounded-lg bg-[#25d366] px-3 text-lg font-extrabold text-[#06230f] focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          WhatsApp now
        </WhatsAppLink>
      </div>
    </div>
  )
}
