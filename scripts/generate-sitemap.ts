import { writeFileSync } from "fs"
import { projectsData, CATEGORIES, slugify } from "../lib/projects"

const BASE_URL = "https://trucoytrufa.es"

function generateSitemap() {
  const today = new Date().toISOString().split("T")[0]

  const staticPages = [
    { url: "", priority: "1.0", changefreq: "weekly" },
    { url: "/work", priority: "0.9", changefreq: "weekly" },
    { url: "/news", priority: "0.9", changefreq: "daily" },
    { url: "/about", priority: "0.8", changefreq: "monthly" },
    { url: "/contact", priority: "0.8", changefreq: "monthly" },
    { url: "/projects", priority: "0.9", changefreq: "weekly" },
  ]

  // Páginas de categorías de proyectos
  const categoryPages = CATEGORIES.map((category) => ({
    url: `/projects/${encodeURIComponent(category)}`,
    priority: "0.8",
    changefreq: "weekly",
  }))

  // Páginas individuales de proyectos
  const projectPages = projectsData.map((project) => {
    const lastmod = project.updatedAt || today
    return {
      url: `/projects/${encodeURIComponent(project.category)}/${encodeURIComponent(slugify(project.title))}`,
      priority: "0.7",
      changefreq: "monthly",
      lastmod,
    }
  })

  // Páginas individuales de work
  const workPages = projectsData.map((project) => {
    const lastmod = project.updatedAt || today
    return {
      url: `/work/${encodeURIComponent(slugify(project.title))}`,
      priority: "0.7",
      changefreq: "monthly",
      lastmod,
    }
  })

  const allPages = [...staticPages, ...categoryPages, ...projectPages, ...workPages]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (page) => `  <url>
    <loc>${BASE_URL}${page.url}</loc>
    <lastmod>${page.lastmod || today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`

  writeFileSync("public/sitemap.xml", sitemap, "utf-8")
  console.log(`✅ Sitemap generado con ${allPages.length} URLs`)
}

generateSitemap()

