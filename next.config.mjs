/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

export default {
  // generate a fully-static site (it will live in dist/)
  output: 'export',
  distDir: 'dist',
  ...(basePath && { basePath, assetPrefix: basePath }),

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}
