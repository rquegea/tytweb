import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { PageTransition } from "@/components/page-transition"
import "./globals.css"

const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://trucoytrufa.es"

export const metadata: Metadata = {
  metadataBase: new URL(base),
  title: { default: "Truco y Trufa — agencia de marketing en Madrid", template: "%s | Truco y Trufa" },
  description: "Agencia de marketing en Madrid especializada en gran consumo: trade, eventos y social.",
  generator: "v0.app",
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
    "@id": `${base}/#organization`,
    name: "Truco y Trufa",
    legalName: "Truco y Trufa S.L.",
    url: base,
    logo: `${base}/logotytweb.png`,
    description: "Agencia de marketing en Madrid especializada en trade marketing, eventos y social media.",
    email: "info@trucoytrufa.es",
    telephone: "+34915134694",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Calle de Francisco Sancha, 4",
      addressLocality: "Madrid",
      postalCode: "28034",
      addressCountry: "ES",
    },
    sameAs: [
      "https://www.instagram.com/trucoytrufa",
      "https://www.linkedin.com/company/truco-y-trufa",
      "https://www.facebook.com/trucoytrufa",
    ],
  }

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${base}/#website`,
    url: base,
    name: "Truco y Trufa",
    description: "Agencia de marketing en Madrid",
    publisher: {
      "@id": `${base}/#organization`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${base}/work?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  }

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: base,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Trabajo",
        item: `${base}/work`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Noticias",
        item: `${base}/news`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Sobre Nosotros",
        item: `${base}/about`,
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Contacto",
        item: `${base}/contact`,
      },
      {
        "@type": "ListItem",
        position: 6,
        name: "Proyectos",
        item: `${base}/projects`,
      },
    ],
  }

  const professionalServiceJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${base}/#organization`,
    name: "Truco y Trufa S.L.",
    alternateName: "Truco & Trufa",
    description: "Agencia de marketing en Madrid especializada en trade marketing, eventos, activaciones y social media para marcas de gran consumo.",
    image: `${base}/logotytweb.png`,
    url: base,
    logo: `${base}/logotytweb.png`,
    telephone: "+34915134694",
    email: "info@trucoytrufa.es",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Calle de Francisco Sancha, 4, 2ª planta derecha",
      addressLocality: "Madrid",
      addressRegion: "Madrid",
      postalCode: "28034",
      addressCountry: "ES",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 40.4665,
      longitude: -3.6898,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:30",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "22",
    },
    areaServed: {
      "@type": "Country",
      name: "España",
    },
    priceRange: "€€€",
    serviceType: [
      "Agencia de Marketing",
      "Trade Marketing",
      "Marketing para Gran Consumo",
      "Eventos Corporativos",
      "Gestión de Redes Sociales",
      "Estrategia de Marca",
    ],
    sameAs: [
      "https://www.instagram.com/trucoytrufa",
      "https://www.linkedin.com/company/truco-y-trufa",
      "https://www.facebook.com/trucoytrufa",
    ],
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
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
