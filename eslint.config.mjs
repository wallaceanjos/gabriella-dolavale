import coreWebVitals from 'eslint-config-next/core-web-vitals'
import typescript from 'eslint-config-next/typescript'

// Next 16 removed `next lint`; eslint-config-next ships native flat config,
// so the eslint binary reads this file directly ("lint" script).
const config = [
  {
    ignores: ['.next/**', 'out/**', '.wrangler/**', 'node_modules/**', 'next-env.d.ts', 'docs/**'],
  },
  ...coreWebVitals,
  ...typescript,
  {
    rules: {
      // Architecture decision: images are stored pre-sized as webp in public/images,
      // and static export has no image optimizer, so next/image would add nothing.
      '@next/next/no-img-element': 'off',
    },
  },
]

export default config
