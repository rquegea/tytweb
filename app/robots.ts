// app/robots.ts
import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';
export const revalidate = 86400; // 1 día

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://tu-dominio.com';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: [`${BASE_URL}/sitemap.xml`],
    host: BASE_URL,
  };
}

