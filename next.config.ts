import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Fully pre-rendered: `next build` emits plain HTML into ./out, served as static files
  // (GitHub Pages today; any static host works). No Server Actions, dynamic Route Handlers or ISR.
  output: 'export',
  // "/<repo>" on a GitHub Pages project URL (owner.github.io/<repo>/), empty on a custom domain.
  // Comes from the environment so the same code builds both. Plain <img> paths use lib/paths.ts.
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? '',
  // Every route is a directory (/artigos/ -> /artigos/index.html), so canonical
  // URLs, the sitemap and internal links all end with a slash.
  trailingSlash: true,
}

export default nextConfig
