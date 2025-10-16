"use client"

import { useEffect, useState } from "react"

type Stage = "start" | "slide" | "scale" | "done"

export function Preloader() {
  const [stage, setStage] = useState<Stage>("start")

  useEffect(() => {
    const t1 = setTimeout(() => setStage("slide"), 400)
    const t2 = setTimeout(() => setStage("scale"), 1100)
    const t3 = setTimeout(() => setStage("done"), 1700)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
    }
  }, [])

  if (stage === "done") return null

  return (
    <div className="preloader visible">
      <div className={`preloader__panel ${stage}`} />
      <div className={`preloader__logo ${stage}`}>
        <img src="/logotytweb.png" alt="Truco y Trufa, agencia de marketing en Madrid" className="preloader__logo-img" />
      </div>
    </div>
  )
}


