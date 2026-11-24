import { afterEach, describe, expect, it, vi } from 'vitest'
import { assetPath } from './paths'

describe('assetPath', () => {
  afterEach(() => vi.unstubAllEnvs())

  it('keeps the path as is on a custom domain (no base path)', () => {
    vi.stubEnv('NEXT_PUBLIC_BASE_PATH', '')
    expect(assetPath('/images/logo.png')).toBe('/images/logo.png')
  })

  it('prefixes the GitHub Pages project base path', () => {
    vi.stubEnv('NEXT_PUBLIC_BASE_PATH', '/gabriela-dolavale')
    expect(assetPath('/images/logo.png')).toBe('/gabriela-dolavale/images/logo.png')
  })
})
