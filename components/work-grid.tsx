"use client"

import Link from "next/link"
import { useMemo, useState, useEffect } from "react"
import { projectsData, type ProjectCategory } from "@/lib/projects"
import { useScrollReveal } from "@/components/utils/scroll-reveal"

type Filter = "all" | ProjectCategory

export function WorkGrid() {
  const [selected, setSelected] = useState<Filter>("all")

  const ORDER: ProjectCategory[] = ["t&trade", "t&events", "t&team", "t&tailor", "t&tech"]

  const filtered = useMemo(() => {
    return selected === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === selected)
  }, [selected])

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

  const CLIENT_OVERRIDES: Record<string, string> = {
    "moet-gaga": "DOM PERIGNOM",
    "lotus-teambuilding": "Lotus Biscoff",
  }

  // Re-inicializa el reveal cuando cambia el filtro para que reaparezcan las cards
  useScrollReveal(".scroll-fade-in", [selected])

  // Evita que el scroll quede en medio después de cambiar filtros
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [selected])

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

  return (
    <section aria-labelledby="work-grid" className="mt-10">
      {/* Filtros (únicos) */}
      <nav aria-label="Project categories">
        <ul className="flex items-center justify-center gap-8 text-xs uppercase tracking-wide text-[#0F0E0E]">
          {ORDER.map((cat) => (
            <li key={cat}>
              <button
                type="button"
                onClick={() => setSelected(cat)}
                className={`transition-opacity ${
                  selected === cat
                    ? "underline underline-offset-4 decoration-2"
                    : "opacity-80 hover:opacity-60 no-underline"
                }`}
                aria-current={selected === cat ? "page" : undefined}
              >
                {cat.toUpperCase()}
              </button>
            </li>
          ))}
          <li>
            <button
              type="button"
              onClick={() => setSelected("all")}
              className={`transition-opacity ${
                selected === "all"
                  ? "underline underline-offset-4 decoration-2"
                  : "opacity-80 hover:opacity-60 no-underline"
              }`}
              aria-current={selected === "all" ? "page" : undefined}
            >
              ALL
            </button>
          </li>
        </ul>
      </nav>

      {/* Grid 3 columnas, cards 1:1 con overlay izquierda: cliente, derecha: categoría */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12 mt-12">
        {filtered.map((p, i) => {
          const href = `/work`
          const clientBase = guessClient(p.title)
          const client = CLIENT_OVERRIDES[p.id] ?? clientBase
          const displayTitle = TITLE_OVERRIDES[p.id] ?? p.title
          return (
            <Link
              key={p.id}
              href={href}
              className="group scroll-fade-in reveal-card rounded-lg overflow-hidden"
              style={{ ["--reveal-delay" as any]: `${i * 100}ms` }}
            >
              {/* Contenedor 1:1 */}
              <div className="relative w-full bg-white rounded-lg overflow-hidden" style={{ aspectRatio: "1 / 1" }}>
                {p.id === "lotus-teambuilding" ? (
                  <video
                    src="/videos/lotus-loop.mp4"
                    className="absolute inset-0 w-full h-full object-cover rounded-inherit"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                ) : (
                  <img
                    src={p.coverImage}
                    alt={p.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-95 rounded-inherit"
                  />
                )}
                {/* Overlay inferior con cliente (izquierda) y categoría (derecha) */}
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-4">
                  <span className="text-[11px] font-medium text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)]">
                    {client}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)]">
                    {p.category}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <div className="card-title-sm text-[#0F0E0E]">{displayTitle}</div>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}


