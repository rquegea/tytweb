import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AboutSection } from "@/components/about-section"

const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://trucoytrufa.es"

export const metadata: Metadata = {
  title: "Sobre Nosotros · Agencia de Marketing en Madrid",
  description:
    "Conoce a Truco y Trufa, agencia de marketing en Madrid especializada en trade marketing, eventos corporativos, activaciones y social media para marcas de gran consumo.",
  alternates: { canonical: `${base}/about` },
  openGraph: {
    type: "website",
    url: `${base}/about`,
    title: "Sobre Nosotros · Truco y Trufa",
    description:
      "Agencia de marketing en Madrid con experiencia en trade marketing, eventos y social media para marcas de gran consumo.",
    images: [
      { url: `${base}/logotytweb.png`, width: 1200, height: 630, alt: "Truco y Trufa - Sobre Nosotros" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sobre Nosotros · Truco y Trufa",
    description:
      "Agencia de marketing en Madrid con experiencia en trade marketing, eventos y social media.",
    images: [`${base}/logotytweb.png`],
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <div className="py-24">
          <div className="site-container">
            <AboutSection />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}


