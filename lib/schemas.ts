import { z } from 'zod'

/** Frontmatter of content/posts/*.mdx. A post that doesn't match fails the build. */
export const postFrontmatterSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(50).max(200),
  date: z.iso.date(),
  category: z.enum(['Pediatria', 'Gestação', 'Maternidade']),
  cover: z.string().startsWith('/images/'),
  coverAlt: z.string().min(1),
  coverPosition: z.string().default('center'),
  /** Slug on the old Wix site, kept to generate the /post/<slug> redirect. */
  wixSlug: z.string().optional(),
})

export type PostFrontmatter = z.infer<typeof postFrontmatterSchema>
