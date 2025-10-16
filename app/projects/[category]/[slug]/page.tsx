import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { findProjectBySlug, getAllProjectParams } from "@/lib/projects"
import { ScrollRevealInit } from "@/components/utils/scroll-reveal"

interface PageProps {
  params: { category: string; slug: string }
}

export function generateStaticParams() {
  return getAllProjectParams()
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { category: rawCategory, slug: rawSlug } = await params
  const category = decodeURIComponent(rawCategory)
  const slug = decodeURIComponent(rawSlug)
  const project = findProjectBySlug(category, slug)

  if (!project) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="pt-20">
          <div className="py-24">
            <div className="max-w-[1800px] mx-auto px-12 md:px-12">
              <p className="opacity-70">Proyecto no encontrado.</p>
              <div className="mt-6"><Link href="/projects" className="underline">Volver</Link></div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* inicializa intersection observer en el cliente sin marcar la página completa como client */}
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
            ) : project.id === "kelloggs-online-events" ? (
              <>
                {/* Kellogg's: no imágenes adicionales debajo del texto */}
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

            <div className="mt-16 scroll-fade-in">
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
  return `This project, ${title}, showcases a focused approach to brand and product experience, aligning design, storytelling and utility to create measurable impact.`
}

function defaultAction(cat: string): string {
  const base =
    "We defined the strategic narrative, simplified the interface language and produced key hero visuals to communicate value clearly across channels."
  return base + " Focus area: " + cat.toUpperCase() + "."
}


