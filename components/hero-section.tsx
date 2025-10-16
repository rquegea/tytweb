"use client"

import { useCallback, useMemo, useRef, useState } from "react"
import Image from "next/image"
import { projectsData } from "@/lib/projects"

interface Splash {
  id: number
  src: string
  x: number
  y: number
  size: number
  rot: number
}

export function HeroSection() {
  const containerRef = useRef<HTMLElement | null>(null)
  const [splashes, setSplashes] = useState<Splash[]>([])
  const lastSpawnMs = useRef<number>(0)
  const allImages = useMemo(() => {
    const imgs: string[] = []
    projectsData.forEach((p) => {
      if (p.coverImage) imgs.push(p.coverImage)
      if (p.images) imgs.push(...p.images)
    })
    return imgs
  }, [])

  const handleMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if (!containerRef.current || allImages.length === 0) return
    const now = Date.now()
    // throttling: una imagen cada ~180ms
    if (now - lastSpawnMs.current < 110) return
    lastSpawnMs.current = now
    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const id = Date.now() + Math.random()
    const src = allImages[Math.floor(Math.random() * allImages.length)]
    const size = 220 + Math.random() * 140 // 220-360 px (un poco más grande)
    const rot = -8 + Math.random() * 16 // -8 to 8 deg
    const splash: Splash = { id, src, x, y, size, rot }
    setSplashes((prev) => {
      const next = [...prev, splash]
      return next.slice(-12) // máximo 12 elementos simultáneos
    })
    // auto-remoción
    globalThis.setTimeout(() => {
      setSplashes((prev) => prev.filter((s) => s.id !== id))
    }, 600)
  }, [allImages])

  // (cursor personalizado eliminado)

  return (
    <section
      id="hero"
      ref={containerRef as any}
      onMouseMove={handleMove}
      className="relative overflow-hidden min-h-screen flex items-center justify-center bg-white"
    >
      <h1 className="sr-only">Agencia de marketing en Madrid para gran consumo — Truco y Trufa</h1>
      <Image
        src="/logotytweb.png"
        alt="Truco y Trufa, agencia de marketing en Madrid"
        width={480}
        height={200}
        priority
        className="w-[min(60vw,480px)] h-auto opacity-90 relative z-0"
      />
      <div className="pointer-events-none absolute inset-0 z-10">
        {splashes.map((s) => (
          <img
            key={s.id}
            src={s.src}
            alt=""
            className="hero-splash"
            style={{
              left: s.x,
              top: s.y,
              width: s.size,
              transform: `translate(-50%, -50%) rotate(${s.rot}deg)`,
            }}
          />
        ))}
      </div>
    </section>
  )
}
