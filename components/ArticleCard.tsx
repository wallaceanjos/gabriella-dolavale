import Link from 'next/link'
import type { Post } from '@/lib/posts'
import { assetPath } from '@/lib/paths'

type ArticleCardProps = Pick<Post, 'slug' | 'title' | 'category' | 'cover' | 'coverAlt' | 'coverPosition'> & {
  headingLevel?: 'h2' | 'h3'
}

export function ArticleCard({ slug, title, category, cover, coverAlt, coverPosition, headingLevel = 'h3' }: ArticleCardProps) {
  const Heading = headingLevel
  return (
    <article className="flex flex-col bg-sage-light pb-[30px]">
      <img
        src={assetPath(cover)}
        alt={coverAlt}
        loading="lazy"
        className="h-[250px] w-full object-cover"
        style={{ objectPosition: coverPosition }}
      />
      <div className="flex flex-1 flex-col items-start p-[30px]">
        <span className="eyebrow text-[#704c4b]">{category}</span>
        <Heading className="my-3 flex-1 font-sans text-[28px] leading-[1.1] font-light">{title}</Heading>
        <Link href={`/artigos/${slug}/`} className="link-underline">
          Leia mais <span aria-hidden="true">↗</span>
          <span className="sr-only">: {title}</span>
        </Link>
      </div>
    </article>
  )
}
