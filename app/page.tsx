"use client"
import type { Metadata } from "next"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { WorksSection } from "@/components/works-section"
import { AboutSection } from "@/components/about-section"
import { ContactsSection } from "@/components/contacts-section"
import { Footer } from "@/components/footer"
import { useScrollReveal } from "@/components/utils/scroll-reveal"

const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://trucoytrufa.es"

export const metadata: Metadata = {
  title: "Agencia de marketing en Madrid · Truco y Trufa",
  description:
    "Agencia de marketing en Madrid experta en trade marketing, activaciones, eventos y social. Estrategias creativas con impacto en negocio.",
  alternates: { canonical: `${base}/` },
  openGraph: {
    type: "website",
    url: `${base}/`,
    title: "Agencia de marketing en Madrid · Truco y Trufa",
    description:
      "Trade marketing, activaciones, eventos y social con impacto en negocio.",
    images: [
      { url: `${base}/placeholder.jpg`, width: 1200, height: 630, alt: "Home Truco y Trufa" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agencia de marketing en Madrid · Truco y Trufa",
    description:
      "Trade marketing, activaciones, eventos y social con impacto en negocio.",
    images: [`${base}/placeholder.jpg`],
  },
}

export default function HomePage() {
  useScrollReveal()
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <div className="scroll-fade-in"><HeroSection /></div>
        <div className="scroll-fade-in"><WorksSection /></div>
        <div className="scroll-fade-in"><AboutSection /></div>
        <div className="scroll-fade-in"><ContactsSection /></div>
      </main>
      <Footer />
    </div>
  )
}
