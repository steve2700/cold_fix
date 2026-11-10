"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { CallLink, WhatsAppLink } from "@/components/landing/cta"
import type { Fault } from "@/components/landing/fault-types"

export type FaultLabels = { causes: string; fix: string; wait: string }
const DEFAULT_LABELS: FaultLabels = { causes: "Usually caused by", fix: "What we do", wait: "While you wait" }

function Detail({ fault, place, labels }: { fault: Fault; place: string; labels: FaultLabels }) {
  return (
    <div className="space-y-5">
      <div>
        <h4 className="text-base font-bold text-[#0f2c59]">{labels.causes}</h4>
        <ul className="mt-2 space-y-1.5 text-[1.0625rem] leading-snug">
          {fault.causes.map((c) => (
            <li key={c} className="flex gap-3">
              <span aria-hidden="true" className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-[#00b4d8]" />
              <span>{c}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="text-base font-bold text-[#0f2c59]">{labels.fix}</h4>
        <p className="mt-2 text-[1.0625rem] leading-relaxed">{fault.fix}</p>
      </div>
      <div className="rounded-md border-l-4 border-[#ff9f1c] bg-[#fff6e6] px-4 py-3">
        <h4 className="text-base font-bold text-[#0f2c59]">{labels.wait}</h4>
        <p className="mt-1 text-[1.0625rem] leading-relaxed">{fault.wait}</p>
      </div>
      <div className="flex flex-col gap-3 pt-1 sm:flex-row">
        <CallLink
          place={`${place}_${fault.id}`}
          className="inline-flex min-h-14 items-center justify-center gap-3 rounded-lg bg-[#ff9f1c] px-6 text-lg font-extrabold text-[#07162e] shadow-[0_3px_0_#b36b00] transition active:translate-y-[2px] active:shadow-none focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-[#0f2c59]"
        >
          Call now
        </CallLink>
        <WhatsAppLink
          place={`${place}_${fault.id}`}
          message={fault.message}
          className="inline-flex min-h-14 items-center justify-center gap-3 rounded-lg bg-[#25d366] px-6 text-lg font-extrabold text-[#06230f] shadow-[0_3px_0_#13803d] transition active:translate-y-[2px] active:shadow-none focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-[#0f2c59]"
        >
          WhatsApp now
        </WhatsAppLink>
      </div>
    </div>
  )
}

export function FaultFinder({
  faults,
  place = "fault_finder",
  labels = DEFAULT_LABELS,
}: {
  faults: Fault[]
  place?: string
  labels?: FaultLabels
}) {
  const [openId, setOpenId] = useState<string>(faults[0].id)
  const current = faults.find((f) => f.id === openId) ?? faults[0]

  return (
    <div className="grid gap-8 md:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] md:gap-12">
      <ul className="m-0 list-none p-0">
        {faults.map((fault) => {
          const open = fault.id === openId
          return (
            <li key={fault.id} className="border-b border-[#0f2c59]/20 first:border-t">
              <button
                type="button"
                aria-expanded={open}
                onClick={() => setOpenId(fault.id)}
                className={`flex min-h-16 w-full items-center justify-between gap-4 py-4 pr-2 text-left text-[1.1875rem] leading-snug transition-colors focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-[-4px] focus-visible:outline-[#0f2c59] md:pl-0 ${
                  open ? "font-bold text-[#0f2c59]" : "font-medium text-[#1d2f47] hover:text-[#0f2c59]"
                }`}
              >
                <span className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className={`hidden h-3 w-3 shrink-0 rounded-full md:block ${
                      open ? "bg-[#ff9f1c]" : "bg-[#0f2c59]/20"
                    }`}
                  />
                  {fault.label}
                </span>
                <ChevronDown
                  aria-hidden="true"
                  className={`h-6 w-6 shrink-0 transition-transform md:hidden ${open ? "rotate-180" : ""}`}
                />
              </button>

              {/* Phones: the answer opens right under the question you tapped. */}
              {open ? (
                <div id={`fault-${fault.id}`} className="pb-8 pt-1 md:hidden">
                  <Detail fault={fault} place={`${place}_mobile`} labels={labels} />
                </div>
              ) : null}
            </li>
          )
        })}
      </ul>

      {/* Tablets and desktops: the answer stays in view on the right. */}
      <div className="hidden md:block">
        <div className="sticky top-24 rounded-xl bg-white p-8 shadow-[0_1px_0_rgba(15,44,89,0.12),0_24px_48px_-24px_rgba(15,44,89,0.35)]">
          <p className="m-0 mb-5 text-[1.375rem] font-bold leading-snug text-[#0f2c59]">{current.label}</p>
          <Detail fault={current} place={`${place}_desktop`} labels={labels} />
        </div>
      </div>
    </div>
  )
}
