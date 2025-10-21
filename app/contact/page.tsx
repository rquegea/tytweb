import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactsSection } from "@/components/contacts-section"

const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://trucoytrufa.es"

export const metadata: Metadata = {
  title: "Contacto · Agencia de Marketing en Madrid",
  description:
    "Contacta con Truco y Trufa. Agencia de marketing en Madrid: Calle Francisco Sancha, 4, Madrid 28034. Tel: +34 915 134 694. Email: info@trucoytrufa.es",
  alternates: { canonical: `${base}/contact` },
  openGraph: {
    type: "website",
    url: `${base}/contact`,
    title: "Contacto · Truco y Trufa",
    description:
      "Contacta con nuestra agencia de marketing en Madrid. Especialistas en trade marketing, eventos y social media.",
    images: [
      { url: `${base}/logotytweb.png`, width: 1200, height: 630, alt: "Truco y Trufa - Contacto" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contacto · Truco y Trufa",
    description:
      "Contacta con nuestra agencia de marketing en Madrid. Tel: +34 915 134 694",
    images: [`${base}/logotytweb.png`],
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <div className="py-24">
          <div className="site-container">
            <ContactsSection />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}


