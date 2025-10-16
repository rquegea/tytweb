"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

interface PageTransitionProps {
  children: React.ReactNode
}

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Reinicia y activa la animación en cada cambio de ruta
    setVisible(false)
    const id = setTimeout(() => setVisible(true), 16)
    return () => clearTimeout(id)
  }, [pathname])

  return (
    <div
      className={`transform transition-all duration-700 ease-[cubic-bezier(0.22,0.61,0.36,1)] will-change-[opacity,transform] ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
      }`}
    >
      {children}
    </div>
  )
}


