'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { assetPath } from '@/lib/paths'

const NAV = [
  { href: '/', label: 'Início' },
  { href: '/#sobre', label: 'Sobre mim' },
  { href: '/artigos/', label: 'Artigos' },
  { href: '/bem-vindo-bebe/', label: 'Curso' },
  { href: '/#contato', label: 'Contato' },
]

function isCurrent(pathname: string, href: string): boolean {
  if (href.includes('#')) return false
  return href === '/' ? pathname === '/' : pathname.startsWith(href)
}

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-30 border-b border-line/70 bg-paper/95 backdrop-blur">
      <div className="container-site flex h-20 items-center justify-between gap-6 md:h-[90px]">
        <Link href="/" aria-label="Dra. Gabriella Dolavale — início" onClick={() => setOpen(false)}>
          <img src={assetPath('/images/logo.png')} alt="Gabriella Dolavale Pediatra" width={659} height={166} className="h-11 w-auto md:h-14" />
        </Link>

        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm font-normal">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isCurrent(pathname, item.href) ? 'page' : undefined}
                  className="py-2 underline-offset-8 hover:underline aria-[current=page]:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="text-[11px] tracking-[0.12em] uppercase md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? 'Fechar' : 'Menu'}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Principal" className="border-t border-line md:hidden">
          <ul className="container-site py-4">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={isCurrent(pathname, item.href) ? 'page' : undefined}
                  className="block py-3 font-serif text-3xl aria-[current=page]:text-rose-600"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
