/**
 * Prefixes a file from public/ with the deploy's base path.
 *
 * On a GitHub Pages project URL (owner.github.io/<repo>/) the site lives under "/<repo>"; on a custom
 * domain the base path is empty. next/link and the _next assets get the prefix automatically, but a
 * plain <img src> does not, so every public/ path in markup goes through this.
 */
export function assetPath(path: string): string {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}${path}`
}
