import { serializeJsonLd } from '@/lib/seo'

/**
 * Renders a schema.org JSON-LD block. dangerouslySetInnerHTML is the only way to
 * emit a raw <script> body in React; serializeJsonLd escapes "<" so data can't break out.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }} />
}
