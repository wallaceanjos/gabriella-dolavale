/**
 * Turns the exact-path rules of public/_redirects into redirect pages inside out/.
 *
 * Cloudflare reads _redirects natively; GitHub Pages doesn't, so each old Wix URL gets an
 * index.html with a meta refresh + canonical to the new route. Wildcard rules (/post/*) are
 * skipped: those URLs fall through to the 404 page, which links back to the site.
 */
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'

const OUT = 'out'
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

let rules
try {
  rules = await readFile(join(OUT, '_redirects'), 'utf8')
} catch {
  console.error(`[static-redirects] ${OUT}/_redirects not found — run the build first.`)
  process.exit(0)
}

const page = (target) => `<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<title>Redirecionando…</title>
<meta name="robots" content="noindex">
<link rel="canonical" href="${target}">
<meta http-equiv="refresh" content="0; url=${target}">
</head>
<body><a href="${target}">Continuar para a página</a></body>
</html>
`

const written = new Set()
for (const line of rules.split('\n')) {
  const [from, to] = line.trim().split(/\s+/)
  if (!from || from.startsWith('#') || from.includes('*') || !to) continue
  const dir = decodeURI(from).replace(/^\/+|\/+$/g, '')
  if (!dir || written.has(dir)) continue
  written.add(dir)
  await mkdir(join(OUT, dir), { recursive: true })
  await writeFile(join(OUT, dir, 'index.html'), page(`${BASE_PATH}${to}`))
}

console.log(`[static-redirects] ${written.size} redirect page(s) written to ${OUT}/`)
