"use client"

import type { ReactNode } from "react"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"
import { PHONE_TEL, DEFAULT_WA_MESSAGE, waLink } from "@/components/landing/contact"
import { Phone } from "lucide-react"

type CallLinkProps = {
  className?: string
  children?: ReactNode
  place: string
  icon?: boolean
}

type WhatsAppLinkProps = {
  className?: string
  children?: ReactNode
  place: string
  message?: string
  icon?: boolean
}

// Tapping "Call now" opens the phone dialler.
// The gtag event lets you count call taps in Google Ads and Analytics.
export function CallLink({ className, children, place, icon = true }: CallLinkProps) {
  const onClick = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "call_click", { place })
    }
  }
  return (
    <a href={`tel:${PHONE_TEL}`} onClick={onClick} className={className}>
      {icon ? <Phone aria-hidden="true" className="h-[1.1em] w-[1.1em] shrink-0" strokeWidth={2.4} /> : null}
      {children}
    </a>
  )
}

// Same Google Ads conversion as the floating WhatsApp button on the main site.
export function WhatsAppLink({
  className,
  children,
  place,
  message = DEFAULT_WA_MESSAGE,
  icon = true,
}: WhatsAppLinkProps) {
  const onClick = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-18395132504/VSWzCMGu--UcENjkvcNE",
        value: 1.0,
        currency: "ZAR",
      })
      window.gtag("event", "whatsapp_click", { place })
    }
  }
  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className={className}
    >
      {icon ? <WhatsAppIcon aria-hidden="true" className="h-[1.2em] w-[1.2em] shrink-0" /> : null}
      {children}
    </a>
  )
}
