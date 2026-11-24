import { afterEach, describe, expect, it, vi } from 'vitest'
import { absoluteUrl, serializeJsonLd, siteUrl } from './seo'

describe('serializeJsonLd', () => {
  const payload = 'Título </script><script>alert(1)</script>'

  it('does not let a "</script>" inside a string close the JSON-LD block', () => {
    const out = serializeJsonLd({ name: payload })
    expect(out).not.toContain('</script>')
    expect(out).not.toContain('<')
  })

  it('stays the same JSON for a reader (Google)', () => {
    const data = { '@type': 'BlogPosting', headline: payload, description: 'a < b' }
    expect(JSON.parse(serializeJsonLd(data))).toEqual(data)
  })
})

describe('siteUrl / absoluteUrl', () => {
  afterEach(() => vi.unstubAllEnvs())

  it('drops the trailing slash from NEXT_PUBLIC_SITE_URL', () => {
    vi.stubEnv('NEXT_PUBLIC_SITE_URL', 'https://preview.example.com/')
    expect(siteUrl()).toBe('https://preview.example.com')
  })

  it('prefixes site paths and keeps absolute URLs', () => {
    vi.stubEnv('NEXT_PUBLIC_SITE_URL', 'https://example.com')
    expect(absoluteUrl('/images/a.webp')).toBe('https://example.com/images/a.webp')
    expect(absoluteUrl('https://cdn.example.com/a.webp')).toBe('https://cdn.example.com/a.webp')
  })
})
