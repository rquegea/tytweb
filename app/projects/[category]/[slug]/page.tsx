import Link from "next/link"
import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { findProjectBySlug, getAllProjectParams } from "@/lib/projects"
import { ScrollRevealInit } from "@/components/utils/scroll-reveal"

interface PageProps {
  params: Promise<{ category: string; slug: string }>
}

const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://trucoytrufa.es"

export const dynamic = 'force-static'
export const dynamicParams = false

export async function generateStaticParams() {
  return getAllProjectParams()
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params
  const category = decodeURIComponent(resolvedParams.category)
  const slug = decodeURIComponent(resolvedParams.slug)
  const project = findProjectBySlug(category, slug)

  if (!project) {
    return {
      title: "Proyecto no encontrado",
      robots: { index: false, follow: false },
    }
  }

  const description = project.subtitle 
    ? project.subtitle.substring(0, 160) 
    : `Proyecto de ${project.category} para ${guessClient(project.title)}`
  
  const ogImage = `${base}${project.coverImage}`

  return {
    title: `${project.title} · Proyecto`,
    description,
    alternates: { 
      canonical: `${base}/projects/${encodeURIComponent(project.category)}/${encodeURIComponent(slug)}` 
    },
    openGraph: {
      type: "article",
      url: `${base}/projects/${encodeURIComponent(project.category)}/${encodeURIComponent(slug)}`,
      title: `${project.title} · Truco y Trufa`,
      description,
      images: [{ 
        url: ogImage, 
        width: 1200, 
        height: 630,
        alt: project.title 
      }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} · Truco y Trufa`,
      description,
      images: [ogImage],
    },
  }
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const resolvedParams = await params
  const category = decodeURIComponent(resolvedParams.category)
  const slug = decodeURIComponent(resolvedParams.slug)
  const project = findProjectBySlug(category, slug)

  if (!project) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="pt-20">
          <div className="py-24">
            <div className="max-w-[1800px] mx-auto px-12 md:px-12">
              <p className="opacity-70">Proyecto no encontrado.</p>
              <div className="mt-6"><Link href="/work" className="underline">Volver</Link></div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* @ts-expect-error Server Component wrapping a client component for side-effect */}
      <ScrollRevealInit />
      <Header />
      <main className="pt-20">
        <div className="py-24">
          <div className="site-container">
            {/* Hero title */}
            <div className="scroll-fade-in">
              <h1 className="heading-1 text-[#0F0E0E] text-balance">{project.title}</h1>
            </div>

            {/* Meta row: client / services / industry */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 scroll-fade-in">
              <div>
                <div className="text-body-small uppercase tracking-wider opacity-60">Client</div>
                <div className="text-sm mt-2">
                  {guessClient(project.title) ?? "—"}
                </div>
              </div>
              <div>
                <div className="text-body-small uppercase tracking-wider opacity-60">Services</div>
                <div className="text-sm mt-2 uppercase tracking-wide">{project.category}</div>
              </div>
              <div>
                <div className="text-body-small uppercase tracking-wider opacity-60">Industry</div>
                <div className="text-sm mt-2 uppercase tracking-wide">{mapIndustry(project.category)}</div>
              </div>
            </div>

            {/* Imagen principal limitada (usar la #2: images[0]) */}
            <div className="mt-16 scroll-fade-in">
              <div className="w-full" style={{ aspectRatio: "2 / 1" }}>
                <img
                  src={project.images?.[0] ?? project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Two columns: overview and action */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 scroll-fade-in">
              <div>
                <div className="text-body-small uppercase tracking-wider opacity-60">Overview</div>
                <div className="text-[15px] leading-relaxed mt-4 opacity-90">
                  {project.subtitle ?? defaultOverview(project.title)}
                </div>
              </div>
              <div>
                <div className="text-body-small uppercase tracking-wider opacity-60">Action</div>
                <div className="text-[15px] leading-relaxed mt-4 opacity-90">
                  {project.action ?? defaultAction(project.category)}
                </div>
              </div>
            </div>

            {project.id === "pancracio-chocolates" ? (
              <>
                {/* Pancracio: dos imágenes al 50% (images[1] y images[2]) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 scroll-fade-in">
                  <div className="relative w-full" style={{ aspectRatio: "1 / 1" }}>
                    <img
                      src={project.images?.[1] ?? project.images?.[0] ?? project.coverImage}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="relative w-full" style={{ aspectRatio: "1 / 1" }}>
                    <img
                      src={project.images?.[2] ?? project.images?.[1] ?? project.coverImage}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>

                {/* Pancracio: dos imágenes al 50% (images[3] y images[4]) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 scroll-fade-in">
                  <div className="relative w-full" style={{ aspectRatio: "1 / 1" }}>
                    <img
                      src={project.images?.[3] ?? project.images?.[1] ?? project.coverImage}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="relative w-full" style={{ aspectRatio: "1 / 1" }}>
                    <img
                      src={project.images?.[4] ?? project.images?.[2] ?? project.coverImage}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>
              </>
            ) : project.id === "ruinart-rooftop" ? (
              <>
                {/* Ruinart: dos imágenes a 100% (images[1] y images[2]) */}
                <div className="mt-16 scroll-fade-in">
                  <div className="w-full" style={{ aspectRatio: "2 / 1" }}>
                    <img
                      src={project.images?.[1] ?? project.coverImage}
                      alt={project.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>
                <div className="mt-16 scroll-fade-in">
                  <div className="w-full" style={{ aspectRatio: "2 / 1" }}>
                    <img
                      src={project.images?.[2] ?? project.coverImage}
                      alt={project.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>
                {/* No más imágenes debajo */}
              </>
            ) : (
              <>
                {/* Resto: Segunda imagen a 100% (images[1]) */}
                <div className="mt-16 scroll-fade-in">
                  <div className="w-full" style={{ aspectRatio: "2 / 1" }}>
                    <img
                      src={project.images?.[1] ?? project.coverImage}
                      alt={project.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>

                {/* Resto: dos imágenes al 50% (images[2] y images[3]) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 scroll-fade-in">
                  <div className="relative w-full" style={{ aspectRatio: "1 / 1" }}>
                    <img
                      src={project.images?.[2] ?? project.images?.[0] ?? project.coverImage}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="relative w-full" style={{ aspectRatio: "1 / 1" }}>
                    <img
                      src={project.images?.[3] ?? project.images?.[1] ?? project.coverImage}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>
              </>
            )}

            <div className="sr-only">
              <Link href={`/projects/${encodeURIComponent(project.category)}`} className="underline">Más en esta categoría</Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

function guessClient(title: string): string | undefined {
  const known = [
    "AKQA",
    "Nike",
    "Dior",
    "Netflix",
    "SKIMS",
    "Porsche",
    "UPS",
    "Delta",
    "Pancracio",
    "Dom Pérignon",
    "Prime",
    "Ron Barceló",
    "PlayStation",
    "Ruinart",
    "Kellogg’s",
    "Moët & Chandon",
    "Campofrío",
  ]
  const hit = known.find((b) => title.toLowerCase().includes(b.toLowerCase()))
  if (hit) return hit
  if (title.includes(" x ")) return title.split(" x ")[0]
  if (title.includes(" — ")) return title.split(" — ")[0]
  if (title.includes(" - ")) return title.split(" - ")[0]
  if (title.includes(":")) return title.split(":")[0]
  const words = title.trim().split(/\s+/)
  return words.length > 0 ? words[0] : undefined
}

function mapIndustry(cat: string): string {
  switch (cat) {
    case "t&tech":
      return "Technology"
    case "t&trade":
      return "Commerce"
    case "t&events":
      return "Entertainment"
    case "t&team":
      return "People"
    case "t&tailor":
      return "Fashion"
    default:
      return cat
  }
}

function defaultOverview(title: string): string {
  return `Este proyecto, ${title}, muestra un enfoque centrado en la experiencia de marca y producto, alineando diseño, narrativa y utilidad para crear un impacto medible.`
}

function defaultAction(cat: string): string {
  const base =
    "Definimos la narrativa estratégica, simplificamos el lenguaje de la interfaz y produjimos visuales clave para comunicar el valor de manera clara a través de todos los canales."
  return base + " Área de enfoque: " + cat.toUpperCase() + "."
}


