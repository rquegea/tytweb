import type { MetadataRoute } from "next"
import { CATEGORIES, projectsData, slugify } from "@/lib/projects"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com"
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = ["", "/work", "/projects", "/about", "/contact"].map((p) => ({
    url: `${base}${p || "/"}`,
    lastModified: now,
  }))

  const categoryRoutes: MetadataRoute.Sitemap = CATEGORIES.map((c) => ({
    url: `${base}/projects/${encodeURIComponent(c)}`,
    lastModified: now,
  }))

  const projectRoutes: MetadataRoute.Sitemap = projectsData.map((p) => ({
    url: `${base}/projects/${encodeURIComponent(p.category)}/${slugify(p.title)}`,
    lastModified: now,
  }))

  return [...staticRoutes, ...categoryRoutes, ...projectRoutes]
}


