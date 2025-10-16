import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CATEGORIES, getProjectsByCategory } from "@/lib/projects"
import { ScrollRevealInit } from "@/components/utils/scroll-reveal"

interface PageProps {
  params: { category: string }
}

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ category: c }))
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
              <h1 className="heading-2 text-[#0F0E0E]">Categoría: {decodeURIComponent(category)}</h1>
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


