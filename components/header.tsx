"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export function Header() {
  const [isVisible, setIsVisible] = useState(true)
  const lastYRef = useRef(0)
  const hideTimer = useRef<number | null>(null)
  const HOLD_MS = 400 // mantener visible unos instantes antes de ocultar
  const ticking = useRef(false)

  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return
      ticking.current = true
      requestAnimationFrame(() => {
        const y = window.scrollY || 0
        const prev = lastYRef.current
        const scrollingUp = y < prev

        if (scrollingUp || y < 10) {
          if (hideTimer.current) {
            clearTimeout(hideTimer.current)
            hideTimer.current = null
          }
          setIsVisible(true)
        } else if (y > prev && y > 100) {
          if (!hideTimer.current) {
            hideTimer.current = window.setTimeout(() => {
              setIsVisible(false)
              hideTimer.current = null
            }, HOLD_MS)
          }
        }

        lastYRef.current = y
        ticking.current = false
      })
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
      if (hideTimer.current) clearTimeout(hideTimer.current)
    }
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left: Logo */}
          <div className="flex-1">
            <Link href="/" className="text-base font-semibold text-[#0F0E0E] hover:opacity-70 transition-opacity">
              T&T
            </Link>
          </div>

          {/* Center: Navigation */}
          <nav className="flex-1 flex items-center justify-center">
            <ul className="flex items-center gap-8">
              <li>
                <Link
                  href="/work"
                  className="text-xs font-medium text-[#0F0E0E] hover:opacity-70 transition-opacity uppercase tracking-wide"
                >
                  WORK
                </Link>
              </li>
              {/* Projects eliminado */}
              <li>
                <Link
                  href="/about"
                  className="text-xs font-medium text-[#0F0E0E] hover:opacity-70 transition-opacity uppercase tracking-wide"
                >
                  ABOUT
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-xs font-medium text-[#0F0E0E] hover:opacity-70 transition-opacity uppercase tracking-wide"
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </nav>

          {/* Right: Copyright */}
          <div className="flex-1 flex justify-end">
            <span className="text-xs text-[#0F0E0E] opacity-60">© 2025</span>
          </div>
        </div>
      </div>
    </header>
  )
}
