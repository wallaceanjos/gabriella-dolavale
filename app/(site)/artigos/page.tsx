import type { Metadata } from 'next'
import { ArticleCard } from '@/components/ArticleCard'
import { getAllPosts } from '@/lib/posts'
import { DEFAULT_OG_IMAGE, SITE_NAME } from '@/lib/seo'

const DESCRIPTION =
  'Artigos da Dra. Gabriella Dolavale para pais, gestantes e redes de apoio: pré-natal, recém-nascido, suplementação e pediatria integrativa.'

export const metadata: Metadata = {
  title: 'Artigos',
  description: DESCRIPTION,
  alternates: { canonical: '/artigos/' },
  openGraph: { title: `Artigos | ${SITE_NAME}`, description: DESCRIPTION, url: '/artigos/', images: [DEFAULT_OG_IMAGE] },
}

export default function ArticlesPage() {
  const posts = getAllPosts()

  return (
    <section className="py-section-sm md:py-section">
      <div className="container-site">
        <div className="grid items-end gap-7 md:grid-cols-[1fr_.8fr] md:gap-20">
          <div>
            <p className="eyebrow">Artigos</p>
            <h1 className="mt-[14px] text-title">
              Para cuidar melhor, <span className="accent">informação também importa.</span>
            </h1>
          </div>
          <p className="max-w-[520px]">Textos para pais, gestantes e redes de apoio que desejam escolhas mais conscientes.</p>
        </div>

        <div className="mt-[55px] grid gap-[22px] md:grid-cols-3">
          {posts.map((post) => (
            <ArticleCard key={post.slug} {...post} headingLevel="h2" />
          ))}
        </div>
      </div>
    </section>
  )
}
