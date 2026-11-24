import type { Metadata } from 'next'
import Link from 'next/link'
import { assetPath } from '@/lib/paths'

export const metadata: Metadata = {
  title: 'Página não encontrada',
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <main className="container-site flex min-h-screen max-w-2xl flex-col items-center justify-center gap-6 py-24 text-center">
      <img src={assetPath('/images/logo-symbol.png')} alt="" width={166} height={166} className="size-20" />
      <p className="eyebrow">Erro 404</p>
      <h1 className="text-[clamp(2.75rem,6vw,4rem)]">
        Esta página <span className="accent">não foi encontrada.</span>
      </h1>
      <p className="max-w-md">O endereço que você acessou não existe ou mudou de lugar.</p>
      <div className="flex flex-col gap-4 sm:flex-row">
        <Link className="btn justify-center" href="/">
          Ir para o início
        </Link>
        <Link className="btn btn-light justify-center" href="/artigos/">
          Ver artigos
        </Link>
      </div>
    </main>
  )
}
