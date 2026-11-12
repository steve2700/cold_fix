"use client"

import type { ReactNode } from "react"
import { usePathname } from "next/navigation"

// Ad landing pages have no site menu, footer or floating WhatsApp bubble.
// Nothing for the visitor to tap except Call now and WhatsApp now.
// To add another landing page later, add its path here.
const LANDING_PATHS = [
  "/cold-room-commercial-refrigeration-repairs",
  "/ice-machine-repairs",
]

export function HideOnLanding({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const clean = (pathname || "/").replace(/\/+$/, "") || "/"
  if (LANDING_PATHS.includes(clean)) return null
  return <>{children}</>
}
