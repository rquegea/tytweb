import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AboutSection } from "@/components/about-section"

const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://trucoytrufa.es"

export const metadata: Metadata = {
  title: "Quiénes somos · Agencia de marketing en Madrid",
  description:
    "Equipo con experiencia en trade marketing, activaciones, eventos y social. Metodología orientada a resultados.",
  alternates: { canonical: `${base}/about` },
  openGraph: {
    type: "website",
    url: `${base}/about`,
    title: "Quiénes somos · Agencia de marketing en Madrid",
    description:
      "Experiencia en trade marketing, activaciones, eventos y social.",
    images: [
      { url: `${base}/placeholder.jpg`, width: 1200, height: 630, alt: "Sobre Truco y Trufa" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quiénes somos · Agencia de marketing en Madrid",
    description:
      "Experiencia en trade marketing, activaciones, eventos y social.",
    images: [`${base}/placeholder.jpg`],
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


