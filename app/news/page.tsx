import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollRevealInit } from "@/components/utils/scroll-reveal"

const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://trucoytrufa.es"

export const metadata: Metadata = {
  title: "Noticias · Actualidad de Marketing y Eventos",
  description:
    "Últimas noticias, novedades y tendencias en marketing, trade marketing, eventos corporativos y campañas digitales. Mantente al día con Truco y Trufa.",
  alternates: { canonical: `${base}/news` },
  openGraph: {
    type: "website",
    url: `${base}/news`,
    title: "Noticias · Truco y Trufa",
    description:
      "Últimas noticias y tendencias en marketing, trade marketing y eventos corporativos.",
    images: [
      { url: `${base}/logotytweb.png`, width: 1200, height: 630, alt: "Truco y Trufa - Noticias" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Noticias · Truco y Trufa",
    description:
      "Últimas noticias y tendencias en marketing, trade marketing y eventos.",
    images: [`${base}/logotytweb.png`],
  },
}

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* @ts-expect-error Server Component wrapping a client component for side-effect */}
      <ScrollRevealInit />
      <Header />
      <main className="pt-20">
        <div className="py-24">
          <div className="site-container">
            {/* Hero Section */}
            <section className="scroll-fade-in">
              <div className="max-w-[1200px] mx-auto text-center">
                <h1 className="heading-1 text-[#0F0E0E]">
                  Noticias
                </h1>
                <p className="body-micro uppercase tracking-widest text-[#0F0E0E] opacity-70 mt-5">
                  Mantente al día con las últimas tendencias y novedades del sector y de Truco & Trufa
                </p>
              </div>
            </section>

            {/* News Grid */}
            <section className="mt-24 scroll-fade-in">
              <div className="max-w-[600px] mx-auto">
                {/* Noticia destacada */}
                <article className="group">
                  <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden mb-6">
                    <img
                      src="/news/ttech-launch.jpg"
                      alt="Lanzamiento de T&Tech - Marketing Digital y Tecnología"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-3">
                    <div className="text-xs uppercase tracking-wider text-[#0F0E0E] opacity-60">
                      Próximamente
                    </div>
                    <h2 className="text-2xl font-semibold text-[#0F0E0E] group-hover:opacity-70 transition-opacity">
                      Lanzamiento de T&Tech
                    </h2>
                    <p className="text-sm text-[#0F0E0E] opacity-70">
                      Estamos preparando el lanzamiento de nuestra nueva división T&Tech, especializada en marketing digital y soluciones tecnológicas innovadoras para marcas de gran consumo. Pronto compartiremos más detalles sobre esta emocionante novedad.
                    </p>
                  </div>
                </article>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

