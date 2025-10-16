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
            <div className="max-w-4xl scroll-fade-in">
              <h1 className="heading-2 text-[#0F0E0E]">Categoría: {decodeURIComponent(category)}</h1>
            </div>

            {projects.length === 0 ? (
              <p className="opacity-70 mt-8 scroll-fade-in">No hay proyectos en esta categoría.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 scroll-fade-in">
                {projects.map((p) => (
                  <Link
                    key={p.id}
                    href={`/projects/${encodeURIComponent(p.category)}/${encodeURIComponent(p.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, ""))}`}
                    className="group border border-neutral-200 rounded-lg overflow-hidden"
                  >
                    <div className="relative h-48 bg-muted">
                      <img src={p.coverImage} alt={p.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-4">
                      <div className="text-xs uppercase tracking-wide opacity-70">{p.category}</div>
                      <div className="font-medium mt-1">{p.title}</div>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            <div className="mt-12">
              <Link href="/projects" className="underline">Volver a proyectos</Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}


