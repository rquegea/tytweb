import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AboutSection } from "@/components/about-section"

export const metadata: Metadata = {
  title: "About",
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


