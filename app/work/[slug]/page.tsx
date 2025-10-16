import Image from "next/image"
import type { Metadata } from "next"
import { projectsData, slugify } from "@/lib/projects"

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return projectsData.map((p) => ({ slug: slugify(p.title) }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://trucoytrufa.es"
  const project = projectsData.find((p) => slugify(p.title) === params.slug)
  if (!project) {
    return {
      title: "Proyecto no encontrado",
      alternates: { canonical: `${base}/work/${params.slug}` },
      robots: { index: false, follow: false },
    }
  }
  const ogImage = `${base}${project.coverImage}`
  return {
    title: `${project.title} · Proyecto`,
    description: project.subtitle ?? project.action ?? "Proyecto de Truco y Trufa",
    alternates: { canonical: `${base}/work/${slugify(project.title)}` },
    openGraph: {
      type: "article",
      url: `${base}/work/${slugify(project.title)}`,
      title: `${project.title} · Proyecto`,
      description: project.subtitle ?? project.action ?? "Proyecto de Truco y Trufa",
      images: [{ url: ogImage, width: 1200, height: 630, alt: project.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} · Proyecto`,
      description: project.subtitle ?? project.action ?? "Proyecto de Truco y Trufa",
      images: [ogImage],
    },
  }
}

export default function ProjectPage({ params }: Props) {
  const project = projectsData.find((p) => slugify(p.title) === params.slug)
  if (!project) return null

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-5xl font-bold">{project.title}</h1>
      {project.subtitle ? (
        <p className="mt-2 text-lg text-muted-foreground">{project.subtitle}</p>
      ) : null}

      <div className="mt-6">
        <Image src={project.coverImage} alt={project.title} width={1200} height={630} priority={false} />
      </div>

      {project.action ? (
        <p className="mt-6 text-base md:text-lg text-muted-foreground">{project.action}</p>
      ) : null}

      {project.images?.length ? (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {project.images.map((src) => (
            <Image key={src} src={src} alt={`${project.title} - detalle`} width={1200} height={800} loading="lazy" />
          ))}
        </div>
      ) : null}
    </main>
  )
}


