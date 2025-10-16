"use client"

import Link from "next/link"
import Image from "next/image"
import { LazyVideo } from "@/components/ui/lazy-video"
import { useEffect, useRef } from "react"
import { projectsData, slugify } from "@/lib/projects"
export function WorksSection() {
  const HOME_TITLE_OVERRIDES: Record<string, string> = {
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
  // Toma los proyectos reales y corta a 6 para la homepage
  const homepageProjects = projectsData.slice(0, 6)

  // Mapea a la cuadrícula original (50/25/25 + 25/25/50) manteniendo diseño
  const projects = homepageProjects.map((p, idx) => {
    const base = {
      id: idx + 1,
      label: p.title.split(" ")[0] || "Project",
      title: p.title,
      image: p.coverImage,
      row: idx < 3 ? 1 : idx < 6 ? 2 : 3,
      span: "lg:col-span-3",
    }
    if (idx === 0) return { ...base, span: "lg:col-span-6", row: 1 }
    if (idx === 5) return { ...base, span: "lg:col-span-6", row: 2 }
    return base
  })

  const row1 = projects.filter((p) => p.row === 1)
  const row2 = projects.filter((p) => p.row === 2)
  const row3 = projects.filter((p) => p.row === 3)
  const row4 = projects.filter((p) => p.row === 4)

  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const cards: NodeListOf<HTMLElement> = containerRef.current.querySelectorAll(".portfolio-card")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
            observer.unobserve(entry.target)
          }
        })
      },
      { root: null, rootMargin: "0px 0px -10% 0px", threshold: 0.2 }
    )

    cards.forEach((card, index) => {
      ;(card as HTMLElement).style.setProperty("--reveal-delay", `${index * 100}ms`)
      observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="works" className="py-24 bg-white">
      <div ref={containerRef} className="site-container">
        <h2 className="heading-2 mb-16">Proyectos destacados</h2>

        {/* First row - 50%, 25%, 25% */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 mb-6 lg:mb-12">
          {row1.map((project) => {
            const slug = slugify(project.title)
            const match = projectsData.find((p) => slugify(p.title) === slug)
            const href = "/work"
            const displayTitle = match ? (HOME_TITLE_OVERRIDES[match.id] ?? match.title) : project.title
            return (
              <Link key={project.id} href={href} className={`group cursor-pointer ${project.span}`}>
                <div className="portfolio-card reveal-card relative h-[500px] bg-white rounded-lg mb-4 overflow-hidden">
                  {(() => {
                    const isLotus = match && match.id === "lotus-teambuilding"
                    if (isLotus) {
                      return (
                        <LazyVideo
                          src="/videos/lotus-loop.mp4"
                          className="w-full h-full object-cover rounded-inherit"
                          placeholderPoster="/placeholder.jpg"
                          autoPlay
                          muted
                          loop
                          playsInline
                        />
                      )
                    }
                    const base = (match ? match.coverImage : project.image) || "/placeholder.svg"
                    const isPS = !!(match && match.id === "ps-days-of-play")
                    const src = isPS ? "/projects/t&trade/ps-days-of-play-01.1.jpg" : base
                    return (
                      <Image
                        src={src}
                        alt={project.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-95 rounded-inherit"
                      />
                    )
                  })()}
                </div>
                <p className="body-small text-[#0F0E0E] mb-2 uppercase tracking-wide">{project.label}</p>
                <h3 className="card-title-sm text-[#0F0E0E]">{displayTitle}</h3>
              </Link>
            )
          })}
        </div>

        {/* Second row - 25%, 25%, 50% */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 mb-6 lg:mb-12">
          {row2.map((project) => {
            const slug = slugify(project.title)
            const match = projectsData.find((p) => slugify(p.title) === slug)
            const href = "/work"
            const displayTitle = match ? (HOME_TITLE_OVERRIDES[match.id] ?? match.title) : project.title
            return (
              <Link key={project.id} href={href} className={`group cursor-pointer ${project.span}`}>
                <div className="portfolio-card reveal-card relative h-[500px] bg-white rounded-lg mb-4 overflow-hidden">
                  {(() => {
                    const base = (match ? match.coverImage : project.image) || "/placeholder.svg"
                    const isPS = !!(match && match.id === "ps-days-of-play")
                    const src = isPS ? "/projects/t&trade/ps-days-of-play-01.1.jpg" : base
                    return (
                      <Image
                        src={src}
                        alt={project.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-95 rounded-inherit"
                      />
                    )
                  })()}
                </div>
                <p className="body-small text-[#0F0E0E] mb-2 uppercase tracking-wide">{project.label}</p>
                <h3 className="card-title-sm text-[#0F0E0E]">{displayTitle}</h3>
              </Link>
            )
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 mb-6 lg:mb-12">
          {row3.map((project) => {
            const slug = slugify(project.title)
            const match = projectsData.find((p) => slugify(p.title) === slug)
            const href = "/work"
            const displayTitle = match ? (HOME_TITLE_OVERRIDES[match.id] ?? match.title) : project.title
            return (
              <Link key={project.id} href={href} className={`group cursor-pointer ${project.span}`}>
                <div className="portfolio-card reveal-card relative h-[500px] bg-white rounded-lg mb-4 overflow-hidden">
                  {(() => {
                    const base = (match ? match.coverImage : project.image) || "/placeholder.svg"
                    const isPS = !!(match && match.id === "ps-days-of-play")
                    const src = isPS ? "/projects/t&trade/ps-days-of-play-01.1.jpg" : base
                    return (
                      <Image
                        src={src}
                        alt={project.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-95 rounded-inherit"
                      />
                    )
                  })()}
                </div>
                <p className="body-small text-[#0F0E0E] mb-2 uppercase tracking-wide">{project.label}</p>
                <h3 className="card-title-sm text-[#0F0E0E]">{displayTitle}</h3>
              </Link>
            )
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12">
          {row4.map((project) => {
            const slug = slugify(project.title)
            const match = projectsData.find((p) => slugify(p.title) === slug)
            const href = "/work"
            const displayTitle = match ? (HOME_TITLE_OVERRIDES[match.id] ?? match.title) : project.title
            return (
              <Link key={project.id} href={href} className={`group cursor-pointer ${project.span}`}>
                <div className="portfolio-card reveal-card relative h-[500px] bg-white rounded-lg mb-4 overflow-hidden">
                  {(() => {
                    const base = (match ? match.coverImage : project.image) || "/placeholder.svg"
                    const isPS = !!(match && match.id === "ps-days-of-play")
                    const src = isPS ? "/projects/t&trade/ps-days-of-play-01.1.jpg" : base
                    return (
                      <Image
                        src={src}
                        alt={project.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-95 rounded-inherit"
                      />
                    )
                  })()}
                </div>
                <p className="body-small text-[#0F0E0E] mb-2 uppercase tracking-wide">{project.label}</p>
                <h3 className="card-title-sm text-[#0F0E0E]">{displayTitle}</h3>
              </Link>
            )
          })}
        </div>

        {/* CTA ver más */}
        <div className="mt-14 text-center">
          <Link href="/work" className="underline">
            Ver más proyectos
          </Link>
        </div>
      </div>
    </section>
  )
}
