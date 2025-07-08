/** @type {import('next').NextConfig} */
export default {
  // generate a fully-static site (it will live in dist/)
  output: 'export',
  distDir: 'dist',

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
