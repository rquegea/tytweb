"use client"

import React, { useEffect, useRef, useState } from "react"

export type LazyVideoProps = React.VideoHTMLAttributes<HTMLVideoElement> & {
  src: string
  lazy?: boolean
  placeholderPoster?: string
}

export const LazyVideo = React.forwardRef<HTMLVideoElement, LazyVideoProps>(function LazyVideo(
  { src, lazy = true, placeholderPoster, preload, autoPlay = true, muted = true, loop = true, playsInline = true, poster, ...rest },
  ref
) {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [isInView, setIsInView] = useState(!lazy)

  useEffect(() => {
    if (!lazy) return
    const node = videoRef.current
    if (!node) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true)
            observer.disconnect()
          }
        })
      },
      { root: null, rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [lazy])

  return (
    <video
      ref={(el) => {
        videoRef.current = el
        if (typeof ref === "function") ref(el)
        else if (ref && typeof ref === "object") (ref as any).current = el
      }}
      src={isInView ? src : undefined}
      preload={isInView ? preload ?? "metadata" : "none"}
      autoPlay={autoPlay}
      muted={muted}
      loop={loop}
      playsInline={playsInline}
      poster={poster ?? placeholderPoster}
      {...rest}
    />
  )
})


