import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com"
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = ["", "/work", "/about", "/contact"].map((p) => ({
    url: `${base}${p || "/"}`,
    lastModified: now,
  }))

  return staticRoutes
}


