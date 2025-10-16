import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { PageTransition } from "@/components/page-transition"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com"),
  title: { default: "Truco y Trufa — agencia de marketing en Madrid", template: "%s | Truco y Trufa" },
  description: "Agencia de marketing en Madrid especializada en gran consumo: trade, eventos y social.",
  generator: "v0.app",
  alternates: { canonical: "/" },
  icons: {
    icon: "/logotytweb1.png",
    shortcut: "/logotytweb1.png",
    apple: "/logotytweb1.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Truco & Trufa",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
    logo: "/logotytweb.png",
    sameAs: ["https://instagram.com", "https://linkedin.com"],
    siteNavigationElement: [
      { "@type": "SiteNavigationElement", name: "Work", url: "/work" },
      { "@type": "SiteNavigationElement", name: "Projects", url: "/projects" },
      { "@type": "SiteNavigationElement", name: "About", url: "/about" },
      { "@type": "SiteNavigationElement", name: "Contact", url: "/contact" },
    ],
  }

  const professionalServiceJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Truco y Trufa S.L.",
    image: "https://turbologo.com/es/crear-logo",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
    logo: "https://turbologo.com/es/crear-logo",
    telephone: "+34 000 000 000",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Calle San Gerardo 4",
      addressLocality: "Madrid",
      postalCode: "28034",
      addressCountry: "ES",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:30",
      },
    ],
    areaServed: "ES",
    priceRange: "€€",
    serviceType: [
      "Estrategia de marketing",
      "Trade marketing",
      "Diseño gráfico",
      "Gestión de redes sociales",
    ],
    sameAs: ["https://instagram.com", "https://linkedin.com"],
  }

  return (
    <html lang="es">
      <body>
        <PageTransition>
          <Suspense fallback={null}>{children}</Suspense>
        </PageTransition>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceJsonLd) }}
        />
        <Analytics />
      </body>
    </html>
  )
}
