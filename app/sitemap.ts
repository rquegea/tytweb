import type { MetadataRoute } from "next"
import { projectsData, slugify } from "../lib/projects"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://trucoytrufa.es"
  const now = new Date()

  const staticUrls: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/work`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
  ]

  const projectUrls: MetadataRoute.Sitemap = projectsData.map((p) => ({
    url: `${base}/work/${slugify(p.title)}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }))

  return [...staticUrls, ...projectUrls]
}


