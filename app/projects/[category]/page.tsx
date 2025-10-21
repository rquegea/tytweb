import Link from "next/link"
import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CATEGORIES, getProjectsByCategory } from "@/lib/projects"
import { ScrollRevealInit } from "@/components/utils/scroll-reveal"

interface PageProps {
  params: Promise<{ category: string }>
}

const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://trucoytrufa.es"

const categoryTitles: Record<string, string> = {
  "t&tech": "T&Tech · Marketing Digital y Tecnología",
  "t&trade": "T&Trade · Trade Marketing y Retail",
  "t&events": "T&Events · Eventos Corporativos",
  "t&team": "T&Team · Team Building",
  "t&tailor": "T&Tailor · Soluciones Personalizadas",
}

const categoryDescriptions: Record<string, string> = {
  "t&tech": "Proyectos de marketing digital, campañas online y tecnología para marcas de gran consumo.",
  "t&trade": "Proyectos de trade marketing, visual merchandising y activaciones en punto de venta.",
  "t&events": "Eventos corporativos, activaciones de marca y experiencias memorables para empresas.",
  "t&team": "Proyectos de team building y cohesión de equipos para empresas.",
  "t&tailor": "Soluciones personalizadas y proyectos a medida para cada cliente.",
}

export async function generateStaticParams() {
  return CATEGORIES.map((c) => ({ category: c }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category: rawCategory } = await params
  const category = decodeURIComponent(rawCategory)
  const title = categoryTitles[category] || `${category} · Proyectos`
  const description = categoryDescriptions[category] || `Proyectos de ${category}`
  
  return {
    title,
    description,
    alternates: { canonical: `${base}/projects/${encodeURIComponent(category)}` },
    openGraph: {
      type: "website",
      url: `${base}/projects/${encodeURIComponent(category)}`,
      title: `${title} · Truco y Trufa`,
      description,
      images: [
        { url: `${base}/logotytweb.png`, width: 1200, height: 630, alt: title },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} · Truco y Trufa`,
      description,
      images: [`${base}/logotytweb.png`],
    },
  }
}

export default async function ProjectsCategoryPage({ params }: PageProps) {
  const { category: rawCategory } = await params
  const projects = getProjectsByCategory(decodeURIComponent(rawCategory))

  return (
    <div className="min-h-screen bg-white">
      {/* @ts-expect-error Server Component wrapping a client component for side-effect */}
      <ScrollRevealInit />
      <Header />
      <main className="pt-20">
        <div className="py-24">
          <div className="site-container">
            <div className="sr-only">
              <h1 className="heading-2 text-[#0F0E0E]">Categoría: {decodeURIComponent(rawCategory)}</h1>
            </div>

            <div className="sr-only">
              {projects.length === 0 ? (
                <p className="opacity-70 mt-8">No hay proyectos en esta categoría.</p>
              ) : (
                <div>
                  {projects.map((p) => (
                    <div key={p.id}>
                      <div className="text-xs uppercase tracking-wide opacity-70">{p.category}</div>
                      <div className="font-medium mt-1">{p.title}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="sr-only">
              <Link href="/projects" className="underline">Volver a proyectos</Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}


