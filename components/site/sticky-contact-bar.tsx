import { CallLink, WhatsAppLink } from "@/components/landing/cta"

// On phones, Call now and WhatsApp now stay under the thumb on every page.
export function StickyContactBar() {
  return (
    <>
      <div className="h-20 md:hidden" aria-hidden="true" />
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
    </>
  )
}
