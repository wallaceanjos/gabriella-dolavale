import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { ArticleCard } from '@/components/ArticleCard'
import { JsonLd } from '@/components/JsonLd'
import { formatPostDate, getAllPosts, getPost } from '@/lib/posts'
import { absoluteUrl, SITE_NAME, siteUrl } from '@/lib/seo'
import { DOCTOR, WHATSAPP_BOOKING } from '@/lib/site'
import { assetPath } from '@/lib/paths'

// Static export: only the slugs that exist at build time.
export const dynamicParams = false

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost((await params).slug)
  if (!post) return {}
  const url = `/artigos/${post.slug}/`
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      url,
      publishedTime: post.date,
      authors: [DOCTOR.name],
      images: [{ url: post.cover, alt: post.coverAlt }],
    },
  }
}

export default async function PostPage({ params }: Props) {
  const post = getPost((await params).slug)
  if (!post) notFound()

  const related = getAllPosts()
    .filter((other) => other.slug !== post.slug)
    .slice(0, 2)

  const postJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: absoluteUrl(post.cover),
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: 'pt-BR',
    mainEntityOfPage: `${siteUrl()}/artigos/${post.slug}/`,
    articleSection: post.category,
    author: { '@type': 'Person', name: DOCTOR.name, url: `${siteUrl()}/#sobre` },
    publisher: { '@type': 'Organization', name: SITE_NAME, logo: absoluteUrl('/images/logo.png') },
  }

  return (
    <>
      <JsonLd data={postJsonLd} />

      <article>
        <header className="container-site grid items-end gap-[35px] pt-[60px] pb-[50px] md:grid-cols-[1.1fr_.9fr] md:gap-[70px] md:pt-[90px] md:pb-[70px]">
          <div>
            <p className="eyebrow">
              <Link href="/artigos/" className="no-underline hover:underline">
                Artigos
              </Link>{' '}
              · {post.category}
            </p>
            <h1 className="mt-[18px] mb-7 text-[clamp(3rem,5.5vw,4.75rem)] leading-[0.98]">{post.title}</h1>
            <p className="text-[11px] tracking-[0.12em] text-muted uppercase">
              {DOCTOR.name} · <time dateTime={post.date}>{formatPostDate(post.date)}</time> · {post.readingMinutes} min de
              leitura
            </p>
          </div>
          <img
            src={assetPath(post.cover)}
            alt={post.coverAlt}
            fetchPriority="high"
            className="shape-leaf h-[380px] w-full object-cover md:h-[520px]"
            style={{ objectPosition: post.coverPosition }}
          />
        </header>

        <div className="border-t border-line">
          <div className="container-site py-[60px] md:py-[90px]">
            <div className="prose-post mx-auto max-w-[680px] text-[17px] leading-[1.8]">
              <MDXRemote source={post.body} />
            </div>
          </div>
        </div>
      </article>

      <section className="bg-caramel-700 py-20 text-white">
        <div className="container-site grid items-center gap-[35px] md:grid-cols-[1.15fr_.85fr] md:gap-[90px]">
          <p className="font-serif text-[clamp(2.5rem,4.5vw,3.75rem)] leading-[0.98]">
            Cada criança é única. <span className="italic text-blush-light">O cuidado também.</span>
          </p>
          <div>
            <p className="mb-8 max-w-[460px]">
              Este texto tem caráter educativo. Para orientações individualizadas, fale com a equipe da Dra. Gabriella.
            </p>
            <a className="btn btn-light" href={WHATSAPP_BOOKING} target="_blank" rel="noopener">
              Agendar uma consulta <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-paper-2 py-section-sm md:py-section">
          <div className="container-site">
            <h2 className="text-[clamp(2.75rem,5vw,4rem)]">
              Continue <span className="accent">lendo.</span>
            </h2>
            <div className="mt-[45px] grid gap-[22px] md:grid-cols-3">
              {related.map((other) => (
                <ArticleCard key={other.slug} {...other} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
