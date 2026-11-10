import type React from "react"
import type { Metadata } from "next"
import { Sofia_Sans_Extra_Condensed, Atkinson_Hyperlegible_Next } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Script from "next/script"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { HideOnLanding } from "@/components/hide-on-landing"
import { StickyContactBar } from "@/components/site/sticky-contact-bar"

const display = Sofia_Sans_Extra_Condensed({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-lp-display",
  display: "swap",
})

const bodyFont = Atkinson_Hyperlegible_Next({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-lp-body",
  display: "swap",
  adjustFontFallback: false,
  fallback: ["system-ui", "Arial", "sans-serif"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.coldfix.co.za"),
  title: {
    default: "Cold Fix Services | Appliance, Aircon & Refrigeration Repairs in Gauteng",
    template: "%s | Cold Fix Services Gauteng",
  },
  description:
    "Cold Fix Services delivers fast, reliable appliance repairs, air conditioning installation and servicing, cold room installation and commercial refrigeration across Gauteng, Pretoria and Johannesburg. Same day callouts available.",
  keywords:
    "fridge repair Johannesburg, appliance repairs Gauteng, air conditioning repair Pretoria, cold room installation Gauteng, commercial refrigeration Johannesburg, aircon service Sandton, washing machine repair Gauteng, emergency fridge repair, Cold Fix Services",
  authors: [{ name: "Cold Fix Services", url: "https://www.coldfix.co.za" }],
  creator: "Cold Fix Services",
  publisher: "Cold Fix Services",
  applicationName: "Cold Fix Services",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#0F2C59" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://www.coldfix.co.za",
    siteName: "Cold Fix Services",
    title: "Cold Fix Services | Appliance, Aircon & Refrigeration Repairs in Gauteng",
    description:
      "Fast, reliable appliance repairs, air conditioning and refrigeration services across Gauteng. Serving Pretoria, Johannesburg and surrounding areas.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cold Fix Services, Appliance and Refrigeration Repairs in Gauteng",
      },
      {
        url: "/logo-square.png",
        width: 512,
        height: 512,
        alt: "Cold Fix Services Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@coldfixservices",
    creator: "@coldfixservices",
    title: "Cold Fix Services | Appliance & Refrigeration Repairs Gauteng",
    description:
      "Appliance repairs, aircon and refrigeration services across Gauteng. Serving Pretoria, Johannesburg and surrounding areas.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://www.coldfix.co.za",
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "Appliance and Refrigeration Repair",
  other: {
    "geo.region": "ZA-GP",
    "geo.placename": "Gauteng, South Africa",
    "geo.position": "-26.1076;28.0567",
    "ICBM": "-26.1076, 28.0567",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-ZA">
      <head>
        <meta name="theme-color" content="#0F2C59" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=yes" />

        {/* Google tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-18395132504"
          strategy="afterInteractive"
        />
        <Script id="google-tag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18395132504');
          `}
        </Script>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Cold Fix Services",
              url: "https://www.coldfix.co.za",
              logo: "https://www.coldfix.co.za/logo-square.png",
              image: "https://www.coldfix.co.za/og-image.png",
              description: "Appliance repair, cold room installation, air conditioning and refrigeration services in Gauteng",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Johannesburg",
                addressRegion: "Gauteng",
                addressCountry: "ZA",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -26.1076,
                longitude: 28.0567,
              },
              areaServed: ["Gauteng", "Pretoria", "Johannesburg", "Sandton", "Midrand", "Centurion"],
              sameAs: [
                "https://www.facebook.com/coldfixservices",
                "https://www.instagram.com/coldfixservices",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+27-70-309-6749",
                contactType: "Customer Service",
                areaServed: "ZA",
                availableLanguage: ["en"],
              },
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://www.coldfix.co.za",
              name: "Cold Fix Services",
              image: "https://www.coldfix.co.za/logo-square.png",
              url: "https://www.coldfix.co.za",
              telephone: "+27-70-309-6749",
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Johannesburg",
                addressRegion: "Gauteng",
                addressCountry: "ZA",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -26.1076,
                longitude: 28.0567,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "08:00",
                closes: "17:00",
              },
              sameAs: [
                "https://www.facebook.com/coldfixservices",
                "https://www.instagram.com/coldfixservices",
              ],
            }),
          }}
        />
      </head>
      <body className={`${display.variable} ${bodyFont.variable} antialiased`} style={{ fontFamily: "var(--font-lp-body), system-ui, sans-serif" }}>
        <div className="flex min-h-screen flex-col">
          <HideOnLanding><Header /></HideOnLanding>
          <main className="flex-grow">{children}</main>
          <HideOnLanding><Footer /></HideOnLanding>
          <HideOnLanding><StickyContactBar /></HideOnLanding>
        </div>
        <div className="hidden md:block">
          <HideOnLanding><WhatsAppButton /></HideOnLanding>
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
