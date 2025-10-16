"use client"

import { useEffect } from "react"

export function useScrollReveal(selector = ".scroll-fade-in", deps: unknown[] = []) {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(selector))
    const onIntersect: IntersectionObserverCallback = (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible")
          obs.unobserve(entry.target)
        }
      })
    }

    const observer = new IntersectionObserver(onIntersect, {
      rootMargin: "0px 0px -10% 0px",
      threshold: 0.05,
    })

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [selector, ...deps])
}

export function ScrollRevealInit({ selector = ".scroll-fade-in" }: { selector?: string }) {
  useScrollReveal(selector)
  return null
}


