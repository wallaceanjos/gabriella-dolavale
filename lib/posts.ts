import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import { postFrontmatterSchema, type PostFrontmatter } from './schemas'

const POSTS_DIR = path.join(process.cwd(), 'content', 'posts')

export type Post = PostFrontmatter & {
  slug: string
  body: string
  readingMinutes: number
}

const WORDS_PER_MINUTE = 200

export function readingMinutes(text: string): number {
  const words = text.trim().split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE))
}

export function parsePost(slug: string, source: string): Post {
  const { data, content } = matter(source)
  const parsed = postFrontmatterSchema.safeParse(data)
  if (!parsed.success) {
    throw new Error(`content/posts/${slug}.mdx has invalid frontmatter: ${parsed.error.message}`)
  }
  return { ...parsed.data, slug, body: content, readingMinutes: readingMinutes(content) }
}

/** All posts, newest first. Read at build time only (static export). */
export function getAllPosts(): Post[] {
  return fs
    .readdirSync(POSTS_DIR)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, '')
      return parsePost(slug, fs.readFileSync(path.join(POSTS_DIR, file), 'utf8'))
    })
    .sort((a, b) => b.date.localeCompare(a.date) || a.title.localeCompare(b.title))
}

export function getPost(slug: string): Post | undefined {
  return getAllPosts().find((post) => post.slug === slug)
}

export function formatPostDate(isoDate: string): string {
  // Noon UTC avoids the date shifting a day in negative-offset timezones.
  return new Intl.DateTimeFormat('pt-BR', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(
    new Date(`${isoDate}T12:00:00Z`),
  )
}
