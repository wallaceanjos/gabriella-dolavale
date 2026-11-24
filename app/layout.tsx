import type { Metadata } from 'next'
import { Cormorant_Garamond, Manrope } from 'next/font/google'
import { DEFAULT_OG_IMAGE, SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, siteUrl } from '@/lib/seo'
import './globals.css'

// Self-hosted at build time: no render-blocking request to fonts.googleapis.com.
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    locale: 'pt_BR',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: { card: 'summary_large_image' },
  // Preview deploys must not be indexed: whatever Google indexes there becomes
  // an abandoned URL once the real domain goes live.
  ...(process.env.NEXT_PUBLIC_NOINDEX ? { robots: { index: false, follow: false } } : {}),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" data-scroll-behavior="smooth" className={`${cormorant.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  )
}
