"use client"

import { useState } from "react"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"
import { waLink } from "@/components/landing/contact"

const SERVICES = [
  "Fridge or freezer repair",
  "Cold room or freezer room",
  "Shop or restaurant refrigeration",
  "Air conditioning",
  "Washing machine",
  "Other appliance (dryer, dishwasher, oven, stove)",
  "Electrical",
  "Plumbing or gas connection",
  "Maintenance contract",
  "Emergency",
  "Something else",
]

const fieldClass =
  "mt-2 block min-h-14 w-full rounded-lg border-2 border-[#0f2c59]/40 bg-white px-4 text-[1.0625rem] text-[#0d1b2e] focus:border-[#0f2c59] focus:outline-none focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-[#0f2c59]"

// There is no server behind this form. It writes your message for you and opens WhatsApp,
// so what you type is in front of a real person as soon as you press send.
export function QuoteForm() {
  const [name, setName] = useState("")
  const [service, setService] = useState(SERVICES[0])
  const [suburb, setSuburb] = useState("")
  const [details, setDetails] = useState("")

  const message =
    `Hi Cold Fix, I need help with: ${service}.` +
    (details.trim() ? ` ${details.trim()}` : "") +
    ` My suburb is: ${suburb.trim() || "(not given yet)"}.` +
    (name.trim() ? ` My name is ${name.trim()}.` : "")

  const mailto = `mailto:info@coldfix.co.za?subject=${encodeURIComponent("Repair request: " + service)}&body=${encodeURIComponent(message)}`

  return (
    <div className="rounded-xl bg-white p-6 shadow-[0_1px_0_rgba(15,44,89,0.12),0_24px_48px_-24px_rgba(15,44,89,0.35)] sm:p-8">
      <div className="space-y-5">
        <div>
          <label htmlFor="qf-name" className="text-base font-bold text-[#0f2c59]">
            Your name
          </label>
          <input id="qf-name" className={fieldClass} value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" />
        </div>
        <div>
          <label htmlFor="qf-service" className="text-base font-bold text-[#0f2c59]">
            What needs help?
          </label>
          <select id="qf-service" className={fieldClass} value={service} onChange={(e) => setService(e.target.value)}>
            {SERVICES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="qf-suburb" className="text-base font-bold text-[#0f2c59]">
            Your suburb
          </label>
          <input id="qf-suburb" className={fieldClass} value={suburb} onChange={(e) => setSuburb(e.target.value)} autoComplete="address-level2" />
        </div>
        <div>
          <label htmlFor="qf-details" className="text-base font-bold text-[#0f2c59]">
            What is it doing?
          </label>
          <textarea
            id="qf-details"
            rows={4}
            className={fieldClass + " py-3"}
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            placeholder="For example: the cold room reads 9 degrees and the compressor is silent."
          />
        </div>
      </div>

      <a
        href={waLink(message)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-7 inline-flex min-h-[3.75rem] w-full items-center justify-center gap-3 rounded-lg bg-[#25d366] px-7 text-xl font-extrabold text-[#06230f] shadow-[0_4px_0_#13803d] transition active:translate-y-[3px] active:shadow-none focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-[#0f2c59]"
      >
        <WhatsAppIcon aria-hidden="true" className="h-[1.2em] w-[1.2em] shrink-0" />
        Send on WhatsApp
      </a>
      <p className="mb-0 mt-3 text-base leading-snug text-[#33475f]">
        This opens WhatsApp with your message already written. Press send there and we get it straight away.
      </p>
      <p className="mb-0 mt-4 text-base leading-snug text-[#33475f]">
        Prefer email?{" "}
        <a href={mailto} className="font-bold text-[#0f2c59] underline underline-offset-4">
          Write to info@coldfix.co.za
        </a>
      </p>
    </div>
  )
}
