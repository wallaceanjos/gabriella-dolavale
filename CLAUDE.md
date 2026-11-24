# Dra. Gabriella Dolavale — site

Static marketing site + blog for a pediatrician (Barra da Tijuca, RJ). Rebuilt from a frozen Wix Studio
site; the audit of what existed there is in `docs/audit/inventory.md` (local only, git-ignored: the repo is
public and the audit holds internal notes). Design system: `DESIGN.md`.

## Stack

- Next.js 16 App Router, **`output: 'export'`** (pure static HTML in `out/`), `trailingSlash: true`.
- Hosting: **GitHub Pages**, published by `.github/workflows/deploy-pages.yml` on push to `main`. Until the
  custom domain exists it is served at `<owner>.github.io/<repo>/` (base path + noindex); setting the repo
  variable `CUSTOM_DOMAIN` switches the next deploy to the domain. `wrangler.jsonc` is kept for
  `npm run preview` (local server close to production) and as a ready alternative host.
- Tailwind 4, CSS-first: tokens live in the `@theme` block of `app/globals.css`. Never hard-code a hex
  that has a token; add a token instead (and document it in DESIGN.md).
- Posts: `content/posts/*.mdx`, frontmatter validated by Zod (`lib/schemas.ts`), loaded at build time by
  `lib/posts.ts`, rendered with `next-mdx-remote/rsc`.

## Architecture rules

- Static export only: no Server Actions, no dynamic Route Handlers, no `revalidate`. Anything that needs
  a server (e.g. a contact form) is a separate decision — talk to the user first.
- Practice data (phone, address, CRM, links) comes from `lib/site.ts`. Never repeat it inline.
- Plain `<img>` with pre-sized webp in `public/images/` (`@next/next/no-img-element` is off on purpose).
  **Every `src` goes through `assetPath()`** (`lib/paths.ts`), or the image breaks under the base path.
- Every route that sets its own `openGraph` must repeat an image (Next replaces the whole object).
- Internal links end with `/` to match canonicals and the sitemap.
- Old Wix URLs: `public/_redirects` is the single source (Cloudflare syntax); `scripts/static-redirects.mjs`
  turns its exact-path rules into meta-refresh pages at build time, since GitHub Pages has no redirects.
- Route groups: `app/(site)` has header + footer; `app/(landing)` pages (course, links) have their own chrome.

## Content

- Copy is the client's, ported verbatim from the approved Wix site. Don't rewrite or add visible copy
  without asking — post `description` fields are SEO-only and were written by us, so they are NOT shown
  in the page body.
- New post: add `content/posts/<ascii-slug>.mdx` with the frontmatter in `lib/schemas.ts`, cover in
  `public/images/` as webp. `npm test` validates every post.

## Commands

```bash
npm run dev        # local dev
npm test           # vitest (lib/**/*.test.ts)
npm run typecheck && npm run lint
npm run build      # -> out/ (postbuild flattens RSC prefetch payloads, see scripts/)
npm run preview    # build + wrangler dev on :8787 (tests _redirects and 404 like production)
```

## Gotchas (Windows)

- **Run tools from `C:\…` (uppercase drive).** From a `c:\…` cwd (VS Code's default) Node loads two
  copies of the same module and vitest fails with "failed to find the current suite".
- **npm 10 crashes resolving vitest's peer set** (`reading 'edgesOut'`). Use `npx npm@11 install` when
  adding/updating dev deps. `npm ci` from the lockfile is fine.
- `compatibility_date` in `wrangler.jsonc` must not be newer than what the installed workerd supports.
