"use client"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WorkGrid } from "@/components/work-grid"
import { useScrollReveal } from "@/components/utils/scroll-reveal"

export default function WorkPage() {
  // Activar aparición gradual al hacer scroll
  useScrollReveal()

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        {/* Page wrapper padding (top & bottom) */}
        <div className="py-24">
          {/* Main Container */}
          <div className="site-container">
            {/* Sección Proyectos */}
            <section aria-labelledby="work-hero" className="bg-white scroll-fade-in">
              {/* Hero centrado */}
              <div className="max-w-[1200px] mx-auto text-center">
                <h1 id="work-hero" className="heading-1 text-[#0F0E0E]">
                  Work we’re proud of
                </h1>
                <p className="body-micro uppercase tracking-widest text-[#0F0E0E] opacity-70 mt-5">
                  Over the years I completed hundreds of projects with several clients. Here is a selection of the best ones.
                </p>
              </div>

              {/* Filtros de categorías se muestran dentro del grid */}
            </section>

            {/* Grid filtrable (in-page) */}
            <div className="scroll-fade-in">
              <WorkGrid />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
