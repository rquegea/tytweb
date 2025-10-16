import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CATEGORIES, getProjectsByCategory, projectsData } from "@/lib/projects"
import { ScrollRevealInit } from "@/components/utils/scroll-reveal"

export default function ProjectsIndexPage() {
  const TITLE_OVERRIDES: Record<string, string> = {
    "moet-goya-window": "Moët Chandon x El Corte ingles",
    "lotus-teambuilding": "Teambuilding",
    "roc-digital-campaigns": "Digital",
    "pancracio-chocolates": "Pop Up",
    "prime-welcome-pack": "Welcome Pack",
    "barcelo-nevalia-trade": "Festival Barcelo Nevalia",
    "barcelo-nevalia-events": "Festival Barcelo Nevalia",
    "ruinart-rooftop": "Roof Top Palacio de los Duques",
    "campofrio-snakin-cube": "Snakin",
  }
  return (
    <div className="min-h-screen bg-white">
      <ScrollRevealInit />
      <Header />
      <main className="pt-20">
        <div className="py-24">
          <div className="site-container">
            <div className="max-w-4xl scroll-fade-in">
              <h1 className="heading-2 text-[#0F0E0E]">Projects</h1>
              <p className="body-text text-[#0F0E0E] opacity-80 mt-4">
                Explora proyectos por categoría.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 scroll-fade-in">
              {CATEGORIES.map((cat) => (
                <div key={cat} className="border border-neutral-200 rounded-lg p-6">
                  <h2 className="text-xl font-semibold mb-2">{cat}</h2>
                  <p className="text-sm opacity-70 mb-4">{getProjectsByCategory(cat).length} proyectos</p>
                  <Link href={`/projects/${encodeURIComponent(cat)}`} className="underline">Ver categoría</Link>
                </div>
              ))}
            </div>

            <div className="mt-16 scroll-fade-in">
              <h2 className="text-lg font-semibold mb-4">Todos los proyectos</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {projectsData.map((p) => {
                  const displayTitle = TITLE_OVERRIDES[p.id] ?? p.title
                  const slug = encodeURIComponent(p.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, ""))
                  return (
                  <Link key={p.id} href={`/projects/${encodeURIComponent(p.category)}/${slug}`} className="group border border-neutral-200 rounded-lg overflow-hidden">
                    <div className="relative h-48 bg-muted">
                      <img src={p.coverImage} alt={p.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-4">
                      <div className="text-xs uppercase tracking-wide opacity-70">{p.category}</div>
                      <div className="font-medium mt-1">{displayTitle}</div>
                    </div>
                  </Link>
                )})}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}


