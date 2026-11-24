import type { Metadata } from 'next'
import Link from 'next/link'
import { DEFAULT_OG_IMAGE, SITE_NAME } from '@/lib/seo'
import { DOCTOR, whatsappUrl, YOUTUBE_URL } from '@/lib/site'
import { assetPath } from '@/lib/paths'

const DESCRIPTION = 'Links oficiais da Dra. Gabriella Dolavale: agendamento pelo WhatsApp, curso Bem-vindo, bebê, site e YouTube.'

export const metadata: Metadata = {
  title: 'Links oficiais',
  description: DESCRIPTION,
  alternates: { canonical: '/links/' },
  openGraph: { title: `Links oficiais | ${SITE_NAME}`, description: DESCRIPTION, url: '/links/', images: [DEFAULT_OG_IMAGE] },
}

type LinkItem = {
  label: string
  detail: string
  href: string
  variant?: 'primary' | 'course'
  external?: boolean
}

// The WhatsApp messages say "vim pelo Instagram" so the team knows where the visitor came from.
const LINKS: LinkItem[] = [
  {
    label: 'Agende sua consulta',
    detail: 'Atendimento pelo WhatsApp',
    href: whatsappUrl('Olá, vim pelo Instagram e gostaria de agendar uma consulta com a Dra. Gabriella Dolavale.'),
    variant: 'primary',
    external: true,
  },
  { label: 'Curso Bem-vindo, bebê', detail: 'Do pré-natal à rotina em casa', href: '/bem-vindo-bebe/', variant: 'course' },
  {
    label: 'Dúvidas pelo WhatsApp',
    detail: 'Fale com nossa equipe',
    href: whatsappUrl('Olá, vim pelo Instagram e gostaria de tirar uma dúvida com a equipe da Dra. Gabriella.'),
    external: true,
  },
  { label: 'Conheça o site', detail: 'Pediatria integrativa e cuidados', href: '/' },
  { label: 'YouTube', detail: 'Informação para cuidar melhor', href: YOUTUBE_URL, external: true },
]

const VARIANT_CLASSES = {
  primary: 'border-ink bg-ink text-cream shadow-[0_14px_34px_rgba(47,39,36,.22)] hover:bg-ink-deep',
  course:
    'border-rose-500/40 bg-[linear-gradient(135deg,rgba(167,111,109,.13),rgba(255,253,249,.92))] shadow-[0_10px_28px_rgba(167,111,109,.11)] hover:border-rose-500',
  default: 'border-ink/15 bg-cream/75 shadow-[0_6px_25px_rgba(67,48,43,.055)] hover:border-rose-500/40',
}

const ICON_CLASSES = {
  primary: 'bg-white/10 text-blush-light',
  course: 'bg-rose-600 text-cream',
  default: 'bg-rose-500/10 text-rose-700',
}

export default function LinksPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_8%_8%,rgba(167,111,109,.13),transparent_27%),radial-gradient(circle_at_94%_28%,rgba(157,129,104,.19),transparent_28%),linear-gradient(180deg,#faf6f0_0%,var(--color-paper)_65%,var(--color-sand)_100%)] sm:py-7">
      <main className="relative mx-auto min-h-screen w-full max-w-[620px] px-5 pt-9 pb-7 sm:min-h-[calc(100vh-56px)] sm:rounded-[34px] sm:border sm:border-ink/10 sm:bg-cream/40 sm:px-[46px] sm:pt-[38px] sm:pb-[30px] sm:shadow-[0_28px_90px_rgba(71,52,46,.1)]">
        <header className="text-center">
          <p className="mx-auto mb-[22px] inline-flex items-center gap-[9px] rounded-full border border-ink/15 bg-cream/60 px-[13px] py-2 text-[9px] leading-none tracking-[0.2em] text-rose-700 uppercase">
            <span aria-hidden="true" className="size-[5px] rounded-full bg-rose-500" />
            {DOCTOR.specialty} · {DOCTOR.rqe}
          </p>
          <div className="relative mx-auto mb-5 size-[132px] sm:size-[142px]">
            <span
              aria-hidden="true"
              className="absolute -inset-2 -rotate-6 rounded-[45%_55%_52%_48%/49%_46%_54%_51%] border border-rose-500/40"
            />
            <img
              src={assetPath('/images/gabriella-perfil.webp')}
              alt={DOCTOR.name}
              width={600}
              height={899}
              className="relative size-full rounded-full border-4 border-cream object-cover object-[center_34%] shadow-[0_18px_60px_rgba(67,48,43,.13)]"
            />
            <span
              aria-hidden="true"
              className="absolute right-[-4px] bottom-2 size-[22px] rounded-full border-[5px] border-paper bg-rose-500"
            />
          </div>
          <h1 className="mb-[9px] text-[clamp(38px,11vw,52px)] leading-[0.96] font-medium tracking-[-0.035em]">{DOCTOR.name}</h1>
          <p className="mb-4 text-[10px] font-semibold tracking-[0.18em] text-rose-700 uppercase">
            Pediatra · Professora · Palestrante
          </p>
          <p className="mx-auto max-w-[470px] text-sm leading-[1.65] text-muted">
            Ciência, escuta e presença para acompanhar sua família com clareza, vínculo e cuidado em cada fase da infância.
          </p>
          <p aria-hidden="true" className="my-5 flex items-center justify-center gap-[10px] text-rose-500">
            <span className="h-px w-11 bg-rose-500/40" />
            <span className="font-serif text-lg">✦</span>
            <span className="h-px w-11 bg-rose-500/40" />
          </p>
        </header>

        <nav aria-label="Links oficiais">
          <ul className="grid gap-[11px] sm:gap-[13px]">
            {LINKS.map((item, index) => (
              <li key={item.label}>
                <LinkCard item={item} index={index} />
              </li>
            ))}
          </ul>
        </nav>

        <footer className="mt-[23px] border-t border-ink/15 pt-[19px] text-center text-[9px] tracking-[0.1em] text-muted uppercase">
          Clareza <span className="px-[5px] text-rose-500">·</span> Tempo <span className="px-[5px] text-rose-500">·</span> Vínculo{' '}
          <span className="px-[5px] text-rose-500">·</span> Presença
        </footer>
      </main>
    </div>
  )
}

function LinkCard({ item, index }: { item: LinkItem; index: number }) {
  const variant = item.variant ?? 'default'
  const className = `grid min-h-[76px] grid-cols-[46px_1fr_30px] items-center gap-[13px] rounded-[20px] border py-3 pr-[14px] pl-4 no-underline transition hover:-translate-y-0.5 sm:min-h-[79px] sm:pl-[18px] ${VARIANT_CLASSES[variant]}`
  const content = (
    <>
      <span className={`grid size-[46px] place-items-center rounded-[15px] font-serif text-xl ${ICON_CLASSES[variant]}`}>
        {String(index + 1).padStart(2, '0')}
      </span>
      <span>
        <span className="block font-serif text-[21px] leading-[1.05] font-medium tracking-[-0.015em]">{item.label}</span>
        <span className="mt-[5px] block text-[9px] leading-[1.25] tracking-[0.12em] uppercase opacity-75">{item.detail}</span>
      </span>
      <span aria-hidden="true" className="grid size-[29px] place-items-center rounded-full border border-current text-[13px] opacity-70">
        ↗
      </span>
    </>
  )

  if (item.external) {
    return (
      <a href={item.href} target="_blank" rel="noopener" className={className}>
        {content}
      </a>
    )
  }
  return (
    <Link href={item.href} className={className}>
      {content}
    </Link>
  )
}
