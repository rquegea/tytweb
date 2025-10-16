import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactsSection } from "@/components/contacts-section"

const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://trucoytrufa.es"

export const metadata: Metadata = {
  title: "Contacto · Agencia de marketing en Madrid",
  description:
    "Contacta con Truco y Trufa para proyectos de trade marketing, activaciones, eventos y social.",
  alternates: { canonical: `${base}/contact` },
  openGraph: {
    type: "website",
    url: `${base}/contact`,
    title: "Contacto · Agencia de marketing en Madrid",
    description:
      "Cuéntanos tu proyecto de trade marketing, activaciones, eventos o social.",
    images: [
      { url: `${base}/placeholder.jpg`, width: 1200, height: 630, alt: "Contacto Truco y Trufa" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contacto · Agencia de marketing en Madrid",
    description:
      "Cuéntanos tu proyecto de trade marketing, activaciones, eventos o social.",
    images: [`${base}/placeholder.jpg`],
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


