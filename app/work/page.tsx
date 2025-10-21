import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WorkGrid } from "@/components/work-grid"
import { ScrollRevealInit } from "@/components/utils/scroll-reveal"

export const metadata: Metadata = {
  title: "Nuestro Trabajo · Portfolio de Proyectos",
  description:
    "Descubre nuestro portfolio de proyectos de marketing: trade marketing, eventos corporativos, campañas digitales y activaciones. Casos de éxito para marcas líderes.",
  alternates: { canonical: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://trucoytrufa.es"}/work` },
  openGraph: {
    type: "website",
    url: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://trucoytrufa.es"}/work`,
    title: "Nuestro Trabajo · Truco y Trufa",
    description:
      "Portfolio de proyectos de marketing para marcas líderes. Trade marketing, eventos y campañas digitales.",
    images: [
      { 
        url: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://trucoytrufa.es"}/logotytweb.png`, 
        width: 1200, 
        height: 630, 
        alt: "Truco y Trufa - Portfolio" 
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nuestro Trabajo · Truco y Trufa",
    description: "Portfolio de proyectos de marketing para marcas líderes.",
    images: [`${process.env.NEXT_PUBLIC_SITE_URL ?? "https://trucoytrufa.es"}/logotytweb.png`],
  },
}

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* @ts-expect-error Server Component wrapping a client component for side-effect */}
      <ScrollRevealInit />
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
                  Trabajo del que estamos orgullosos
                </h1>
                <p className="body-micro uppercase tracking-widest text-[#0F0E0E] opacity-70 mt-5">
                  A lo largo de los años hemos completado cientos de proyectos con diversos clientes. Aquí está una selección de los mejores.
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
