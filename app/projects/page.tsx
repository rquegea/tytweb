import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CATEGORIES, getProjectsByCategory, projectsData } from "@/lib/projects"

const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://trucoytrufa.es"

export const metadata: Metadata = {
  title: "Proyectos · Portfolio de Marketing y Eventos",
  description:
    "Explora nuestro portfolio de proyectos: trade marketing, eventos corporativos, campañas digitales y activaciones para marcas de gran consumo. Casos de éxito en Madrid y España.",
  alternates: { canonical: `${base}/projects` },
  openGraph: {
    type: "website",
    url: `${base}/projects`,
    title: "Proyectos · Truco y Trufa",
    description:
      "Portfolio de proyectos de trade marketing, eventos y campañas digitales para marcas de gran consumo.",
    images: [
      { url: `${base}/logotytweb.png`, width: 1200, height: 630, alt: "Truco y Trufa - Proyectos" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Proyectos · Truco y Trufa",
    description:
      "Portfolio de proyectos de trade marketing, eventos y campañas digitales.",
    images: [`${base}/logotytweb.png`],
  },
}

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
      <Header />
      <main className="pt-20">
        <div className="py-24">
          <div className="site-container">
            <div className="sr-only">
              <h1 className="heading-2 text-[#0F0E0E]">Projects</h1>
              <p className="body-text text-[#0F0E0E] opacity-80 mt-4">
                Explora proyectos por categoría.
              </p>
            </div>

            <div className="sr-only">
              {CATEGORIES.map((cat) => (
                <div key={cat}>
                  <h2 className="text-xl font-semibold mb-2">{cat}</h2>
                  <p className="text-sm opacity-70 mb-4">{getProjectsByCategory(cat).length} proyectos</p>
                </div>
              ))}
            </div>

            <div className="sr-only">
              <h2 className="text-lg font-semibold mb-4">Todos los proyectos</h2>
              <div>
                {projectsData.map((p) => {
                  const displayTitle = TITLE_OVERRIDES[p.id] ?? p.title
                  return (
                    <div key={p.id}>
                      <div className="text-xs uppercase tracking-wide opacity-70">{p.category}</div>
                      <div className="font-medium mt-1">{displayTitle}</div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}


