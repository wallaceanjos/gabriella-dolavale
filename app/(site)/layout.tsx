import { SiteFooter } from '@/components/SiteFooter'
import { SiteHeader } from '@/components/SiteHeader'

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a href="#conteudo" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-cream focus:p-3">
        Pular para o conteúdo
      </a>
      <SiteHeader />
      <main id="conteudo">{children}</main>
      <SiteFooter />
    </>
  )
}
