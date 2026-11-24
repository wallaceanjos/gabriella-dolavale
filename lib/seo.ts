export const SITE_NAME = 'Dra. Gabriella Dolavale'
export const SITE_TITLE = 'Pediatra na Barra da Tijuca | Dra. Gabriella Dolavale'
export const SITE_DESCRIPTION =
  'Pediatria integrativa na Barra da Tijuca, Rio de Janeiro. Consultas sem pressa, que combinam ciência, escuta e presença para acompanhar cada família.'

export function siteUrl(): string {
  const url = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.dragabrielladolavale.com'
  return url.replace(/\/$/, '')
}

/** Images come as a site path (/images/...) or as an absolute URL. */
export function absoluteUrl(pathOrUrl: string): string {
  return /^https?:\/\//.test(pathOrUrl) ? pathOrUrl : `${siteUrl()}${pathOrUrl}`
}

/**
 * Default share image.
 *
 * Must be repeated on every route that declares its own `openGraph`: Next replaces
 * the layout's whole `openGraph` object instead of merging it field by field.
 */
export const DEFAULT_OG_IMAGE = {
  url: '/images/og-default.jpg',
  width: 1200,
  height: 630,
  alt: SITE_NAME,
}

/**
 * JSON for <script type="application/ld+json">. JSON.stringify doesn't escape "<",
 * so a "</script>" inside any string would close the block. < is the same
 * character for a JSON reader, so the structured data stays identical for Google.
 */
export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, '\\u003c')
}
