/** @type {import('next').NextConfig} */
const nextConfig = {
  // ⬇️ Exporta HTML estático en /out
  output: 'export',

  // ⬇️ Desactiva la optimización de imágenes en runtime (necesario en estático)
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 640, 768, 1024, 1280, 1536, 1920],
    imageSizes: [320, 640, 750, 828, 1080, 1200],
  },

  // (Opcional) Ignorar durante build si ya lo tenías así:
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
