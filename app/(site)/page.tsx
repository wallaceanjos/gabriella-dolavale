import type { Metadata } from 'next'
import Link from 'next/link'
import { ArticleCard } from '@/components/ArticleCard'
import { JsonLd } from '@/components/JsonLd'
import { getAllPosts } from '@/lib/posts'
import { absoluteUrl, SITE_DESCRIPTION, SITE_TITLE, siteUrl } from '@/lib/seo'
import { ADDRESS, DOCTOR, EMAIL, PHONE, WHATSAPP_BOOKING, YOUTUBE_URL } from '@/lib/site'
import { assetPath } from '@/lib/paths'

export const metadata: Metadata = {
  title: { absolute: SITE_TITLE },
  description: SITE_DESCRIPTION,
  alternates: { canonical: '/' },
}

const VALUES = ['Clareza', 'Tempo', 'Vínculo', 'Presença']

const PILLARS = [
  {
    title: 'Escuta sem pressa',
    text: 'Consultas com tempo para entender a criança, a rotina e as perguntas que realmente importam para a família.',
  },
  {
    title: 'Ciência que integra',
    text: 'Pediatria clássica e práticas integrativas se encontram em um plano de cuidado baseado em evidências.',
  },
  {
    title: 'Acompanhamento próximo',
    text: 'Uma relação contínua, com orientação clara e atenção aos detalhes de cada fase da infância.',
  },
]

const REVIEWS = [
  {
    quote: 'Pediatra maravilhosa! Atende meus três filhos. Muito atenciosa, cuidadosa e competente. Atendimento realmente diferenciado.',
    author: 'Priscilla Bahia',
  },
  {
    quote: 'Que experiência fantástica! Atenciosos, humanos e preocupados com o bem-estar do paciente e da mãe.',
    author: 'Rayane Almeida',
  },
  {
    quote: 'A consulta ainda no pré-natal fez toda diferença. Atendimento humanizado e um acolhimento incrível.',
    author: 'Naiane Santiago',
  },
  { quote: 'Ela olha nossos filhos nos detalhes, e isso faz toda diferença. Ela é completa!', author: 'Bianca Morais' },
]

const GALLERY = [
  { src: '/images/consultorio-sala.webp', alt: 'Consultório' },
  { src: '/images/consultorio-espaco-infantil.webp', alt: 'Espaço infantil do consultório pediátrico' },
  { src: '/images/consultorio-acolhedor.webp', alt: 'Consultório pediátrico acolhedor' },
]

const physicianJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Physician',
  name: DOCTOR.name,
  description: SITE_DESCRIPTION,
  url: `${siteUrl()}/`,
  image: absoluteUrl('/images/hero-gabriella.webp'),
  telephone: PHONE.e164,
  email: EMAIL,
  medicalSpecialty: 'Pediatric',
  address: {
    '@type': 'PostalAddress',
    streetAddress: `${ADDRESS.street}, ${ADDRESS.complement}`,
    addressLocality: ADDRESS.city,
    addressRegion: ADDRESS.region,
    postalCode: ADDRESS.postalCode,
    addressCountry: 'BR',
  },
  geo: { '@type': 'GeoCoordinates', ...ADDRESS.geo },
  sameAs: [YOUTUBE_URL],
}

function ArrowIcon() {
  return (
    <span aria-hidden="true" className="text-[17px] leading-none">
      ↗
    </span>
  )
}

export default function HomePage() {
  const posts = getAllPosts().slice(0, 3)

  return (
    <>
      <JsonLd data={physicianJsonLd} />

      {/* Hero */}
      <section className="grid items-center gap-[35px] py-[55px] md:min-h-[820px] md:grid-cols-[1.05fr_.95fr] md:gap-[60px] md:py-20">
        <div className="px-[17px] md:pr-8 md:pl-[42px]">
          <p className="eyebrow">
            {DOCTOR.specialty} · {DOCTOR.rqe}
          </p>
          <h1 className="mt-[22px] mb-7 text-display">
            A infância <span className="accent">merece tempo</span> para ser compreendida.
          </h1>
          <p className="mb-8 max-w-[570px]">
            Um cuidado pediátrico que combina ciência, escuta e presença para acompanhar cada família com profundidade.
          </p>
          <a className="btn" href={WHATSAPP_BOOKING} target="_blank" rel="noopener">
            Conhecer o atendimento <ArrowIcon />
          </a>
        </div>
        <figure className="relative m-0">
          <img
            src={assetPath('/images/hero-gabriella.webp')}
            alt="Dra. Gabriella Dolavale"
            width={900}
            height={1350}
            fetchPriority="high"
            className="shape-leaf h-[500px] w-full object-cover md:h-[650px]"
          />
          <span className="absolute top-20 left-2 bg-blush px-4 py-3 text-[10px] font-semibold tracking-[0.12em] uppercase md:left-[18px]">
            Amor em cada detalhe
          </span>
          <span className="absolute right-2 bottom-[90px] bg-blush px-4 py-3 text-[10px] font-semibold tracking-[0.12em] uppercase md:right-[18px]">
            Atendimento individualizado
          </span>
        </figure>
      </section>

      {/* Values */}
      <div className="border-y border-line py-[22px]">
        <ul className="container-site flex flex-col gap-[7px] text-[11px] tracking-[0.15em] uppercase md:flex-row md:justify-between md:gap-[25px]">
          {VALUES.map((value) => (
            <li key={value}>{value}</li>
          ))}
        </ul>
      </div>

      {/* Intro */}
      <section className="container-site grid gap-[35px] pt-[90px] pb-[60px] md:grid-cols-2 md:gap-[100px] md:pt-[130px] md:pb-[100px]">
        <div>
          <p className="eyebrow">01 · O que orienta o cuidado</p>
          <h2 className="text-title">
            Mais do que acompanhar sintomas, <span className="accent">acompanhar uma infância.</span>
          </h2>
        </div>
        <div className="md:pt-[22px]">
          <p className="mb-5">
            Na pediatria integrativa, cada consulta é uma oportunidade de olhar para a criança por inteiro — sua saúde, seu
            desenvolvimento, sua rotina e o contexto que a cerca.
          </p>
          <p className="mb-5">
            O propósito é construir, junto à família, um caminho de cuidado possível, informado e profundamente individual.
          </p>
          <Link className="link-underline" href="#sobre">
            Conheça o olhar da Dra. Gabriella <ArrowIcon />
          </Link>
        </div>
      </section>

      {/* Method */}
      <section className="container-site pt-5 pb-[85px] md:pb-[130px]">
        <div className="mb-11">
          <p className="eyebrow">Método de acompanhamento</p>
          <h2 className="text-[58px]">Observar. Orientar. Acompanhar.</h2>
        </div>
        <ol className="grid gap-[22px] md:grid-cols-3">
          {PILLARS.map((pillar, index) => (
            <li key={pillar.title} className="min-h-[255px] border-t border-line-strong bg-white/25 px-[30px] py-[38px]">
              <span className="text-xs text-rose-700">{String(index + 1).padStart(2, '0')}</span>
              <h3 className="mt-[30px] mb-[18px] text-heading">{pillar.title}</h3>
              <p>{pillar.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* About */}
      <section id="sobre" className="scroll-mt-24 bg-sand py-section-sm md:py-section">
        <div className="container-site grid items-center gap-[35px] md:grid-cols-[.9fr_1.1fr] md:gap-[90px]">
          <img
            src={assetPath('/images/gabriella-consultorio.webp')}
            alt="Dra. Gabriella no consultório"
            width={1080}
            height={720}
            loading="lazy"
            className="shape-leaf h-[500px] w-full object-cover object-[48%_33%] md:h-[650px]"
          />
          <div>
            <p className="eyebrow">02 · A médica por trás do cuidado</p>
            <p className="mb-[30px] font-serif text-[51px] leading-[0.95] md:text-[66px]">
              “A família precisa sentir que encontrou <span className="accent">um lugar seguro</span> para perguntar.”
            </p>
            <p className="mb-4 max-w-[610px]">
              Com 14 anos dedicados à pediatria, a Dra. Gabriella alia formação clínica, atualização constante e um olhar
              sensível para as particularidades de cada criança.
            </p>
            <p className="max-w-[610px]">
              Graduada pela Faculdade de Medicina Souza Marques, com residência em Pediatria pelo Hospital Municipal Jesus e
              pós-graduação em Pediatria Integrativa, também atua como professora e palestrante.
            </p>
          </div>
        </div>
      </section>

      {/* Office */}
      <section className="bg-sage py-section-sm text-white md:py-section">
        <div className="container-site">
          <div className="grid gap-[35px] md:grid-cols-[1.2fr_.8fr] md:gap-20">
            <div>
              <p className="eyebrow text-white">03 · O espaço de cuidado</p>
              <h2 className="text-title">Um consultório que faz parte do tratamento.</h2>
            </div>
            <div>
              <p>
                Entre luz natural, materiais acolhedores e pequenos gestos pensados para a infância, cada elemento foi
                escolhido para que a família desacelere e se sinta amparada.
              </p>
              <dl className="mt-[35px] grid grid-cols-2 gap-[25px] text-xs">
                <div>
                  <dt className="font-bold">ONDE</dt>
                  <dd>
                    {ADDRESS.neighborhood}
                    <br />
                    {ADDRESS.city} · {ADDRESS.region}
                  </dd>
                </div>
                <div>
                  <dt className="font-bold">TEMPO DE CONSULTA</dt>
                  <dd>
                    Em média
                    <br />1 hora, sem pressa
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="mt-[60px] grid gap-[14px] md:grid-cols-[1.4fr_.8fr_.8fr]">
            {GALLERY.map((photo) => (
              <img
                key={photo.src}
                src={assetPath(photo.src)}
                alt={photo.alt}
                width={1080}
                height={720}
                loading="lazy"
                className="shape-corner h-[260px] w-full object-cover md:h-[330px]"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-section-sm md:py-[130px]">
        <div className="container-site">
          <div className="mb-[55px] max-w-[730px]">
            <p className="eyebrow">04 · Palavras de quem confia</p>
            <h2 className="text-title">
              O cuidado que fica <span className="accent">na memória da família.</span>
            </h2>
            <p className="mt-4">A autoridade de uma prática também se constrói na experiência de quem foi acolhido.</p>
          </div>
          <ul className="grid gap-5 md:grid-cols-2">
            {REVIEWS.map((review) => (
              <li key={review.author} className="min-h-[290px] bg-paper-2 p-10">
                <figure className="m-0">
                  <p className="tracking-[0.2em] text-rose-500" aria-label="5 de 5 estrelas">
                    ★★★★★
                  </p>
                  <blockquote className="my-[26px] font-serif text-[30px] leading-[1.15]">“{review.quote}”</blockquote>
                  <figcaption className="text-[13px] tracking-[0.12em] uppercase">{review.author}</figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-caramel-700 py-20 text-white md:py-[110px]">
        <div className="container-site grid items-center gap-[35px] md:grid-cols-[1.15fr_.85fr] md:gap-[90px]">
          <h2 className="text-title">
            Um cuidado pensado <span className="italic text-blush-light">para a sua família.</span>
          </h2>
          <div>
            <p className="mb-8 max-w-[460px]">
              Fale com nossa equipe de acolhimento para entender o melhor formato de acompanhamento para vocês.
            </p>
            <a className="btn btn-light" href={WHATSAPP_BOOKING} target="_blank" rel="noopener">
              Agendar uma conversa <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      {/* Course */}
      <section className="py-section-sm md:py-[130px]">
        <div className="container-site">
          <div className="mb-[55px] grid items-end gap-[35px] md:grid-cols-[1fr_.9fr] md:gap-[70px]">
            <h2 className="text-title">
              Conhecimento para <span className="accent">cuidar com mais presença.</span>
            </h2>
            <p>
              Uma esteira de produtos para acompanhar famílias e redes de apoio com informação clara, olhar integrativo e
              tranquilidade.
            </p>
          </div>
          <div className="grid bg-sand md:grid-cols-2">
            <img
              src={assetPath('/images/curso-bem-vindo-bebe.webp')}
              alt="Curso Bem-vindo, bebê"
              width={900}
              height={1350}
              loading="lazy"
              className="h-[430px] w-full object-cover md:h-[570px]"
            />
            <div className="p-[35px] md:p-[60px]">
              <p className="eyebrow">Disponível agora</p>
              <h3 className="mb-[22px] text-[50px] md:text-[60px]">Bem-vindo, bebê</h3>
              <p>
                Um guia prático e acolhedor para os primeiros dias: os principais aspectos que aguardam uma família e sua rede
                de apoio quando um recém-nascido chega.
              </p>
              <ul className="my-[30px] flex flex-wrap gap-[22px] text-[10px] font-medium tracking-[0.12em] text-[#795351] uppercase">
                <li>365 dias de acesso</li>
                <li>Certificado</li>
                <li>Suporte a dúvidas</li>
              </ul>
              <Link className="btn" href="/bem-vindo-bebe/">
                Conhecer o curso <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="bg-paper-2 py-section-sm md:py-section">
        <div className="container-site">
          <h2 className="text-title">
            Para cuidar melhor, <span className="accent">informação também importa.</span>
          </h2>
          <p className="mt-4">Textos para pais, gestantes e redes de apoio que desejam escolhas mais conscientes.</p>
          <div className="mt-[55px] grid gap-[22px] md:grid-cols-3">
            {posts.map((post) => (
              <ArticleCard key={post.slug} {...post} />
            ))}
          </div>
          <p className="mt-10">
            <Link className="link-underline" href="/artigos/">
              Ver todos os artigos <ArrowIcon />
            </Link>
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contato" className="scroll-mt-24 bg-sand py-[82px] md:py-section">
        <div className="container-site">
          <div className="grid items-end gap-7 md:grid-cols-[1.15fr_.85fr] md:gap-20">
            <div>
              <p className="eyebrow">Contato</p>
              <h2 className="mt-[14px] text-title">
                Vamos cuidar dessa história <span className="accent">juntos.</span>
              </h2>
            </div>
            <div>
              <p className="max-w-[520px]">
                Para agendamentos, informações sobre consultas ou dúvidas sobre o acompanhamento, fale diretamente com nossa
                equipe.
              </p>
              <div className="mt-[34px] flex flex-col items-start gap-6 md:flex-row md:flex-wrap md:items-center">
                <a className="btn" href={WHATSAPP_BOOKING} target="_blank" rel="noopener">
                  Agendar pelo WhatsApp <ArrowIcon />
                </a>
                <a className="link-underline" href={`mailto:${EMAIL}`}>
                  Enviar e-mail <ArrowIcon />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-11 grid gap-px border border-line bg-line md:mt-16 md:grid-cols-3">
            <ContactCard label="WhatsApp" href={`tel:${PHONE.e164}`}>
              {PHONE.display}
            </ContactCard>
            <ContactCard label="E-mail" href={`mailto:${EMAIL}`}>
              <span className="[overflow-wrap:anywhere] md:[overflow-wrap:normal]">{EMAIL}</span>
            </ContactCard>
            <ContactCard label="Consultório" href={ADDRESS.mapsUrl} external>
              {ADDRESS.street}
              <br />
              {ADDRESS.complement}
              <br />
              {ADDRESS.neighborhood} · {ADDRESS.city}
            </ContactCard>
          </div>
          <p className="mt-4 text-[11px] font-medium tracking-[0.08em] text-[#795351] uppercase md:mt-7">
            Fale com a equipe para consultar horários e formato de atendimento.
          </p>
        </div>
      </section>
    </>
  )
}

function ContactCard({
  label,
  href,
  external = false,
  children,
}: {
  label: string
  href: string
  external?: boolean
  children: React.ReactNode
}) {
  return (
    <div className="bg-paper p-9 md:min-h-[190px]">
      <p className="mb-[22px] text-[10px] font-medium tracking-[0.16em] text-rose-700 uppercase">{label}</p>
      <a
        href={href}
        className="font-serif text-[22px] leading-[1.15] no-underline md:text-[28px]"
        {...(external ? { target: '_blank', rel: 'noopener' } : {})}
      >
        {children}
      </a>
    </div>
  )
}
