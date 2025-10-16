"use client"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { WorksSection } from "@/components/works-section"
import { AboutSection } from "@/components/about-section"
import { ContactsSection } from "@/components/contacts-section"
import { Footer } from "@/components/footer"
import { useScrollReveal } from "@/components/utils/scroll-reveal"

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
