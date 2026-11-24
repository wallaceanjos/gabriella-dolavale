import type { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/posts'
import { siteUrl } from '@/lib/seo'

export const dynamic = 'force-static'

// URLs end with a slash, like the canonicals (trailingSlash in next.config):
// without it every sitemap entry redirects and Search Console flags it.
export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl()
  const posts = getAllPosts()

  return [
    { url: `${base}/`, changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/bem-vindo-bebe/`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/artigos/`, changeFrequency: 'weekly', priority: 0.8 },
    ...posts.map((post) => ({
      url: `${base}/artigos/${post.slug}/`,
      lastModified: post.date,
      changeFrequency: 'yearly' as const,
      priority: 0.7,
    })),
    { url: `${base}/links/`, changeFrequency: 'yearly', priority: 0.3 },
  ]
}
