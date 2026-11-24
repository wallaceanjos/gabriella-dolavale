import { describe, expect, it } from 'vitest'
import { formatPostDate, getAllPosts, parsePost, readingMinutes } from './posts'

const valid = `---
title: "Título"
description: "Uma descrição longa o bastante para passar na validação do frontmatter."
date: "2026-08-24"
category: "Pediatria"
cover: "/images/capa.webp"
coverAlt: "Capa"
---
Primeiro parágrafo.`

describe('parsePost', () => {
  it('parses frontmatter and body', () => {
    const post = parsePost('titulo', valid)
    expect(post).toMatchObject({ slug: 'titulo', title: 'Título', category: 'Pediatria', coverPosition: 'center' })
    expect(post.body.trim()).toBe('Primeiro parágrafo.')
  })

  it('names the file when the frontmatter is invalid', () => {
    expect(() => parsePost('quebrado', valid.replace('Pediatria', 'Outra'))).toThrow(/content\/posts\/quebrado\.mdx/)
  })
})

describe('readingMinutes', () => {
  it('never returns less than one minute', () => {
    expect(readingMinutes('poucas palavras')).toBe(1)
  })

  it('rounds at 200 words per minute', () => {
    expect(readingMinutes('palavra '.repeat(500))).toBe(3)
  })
})

describe('formatPostDate', () => {
  it('formats in pt-BR without shifting the day', () => {
    expect(formatPostDate('2026-08-24')).toBe('24 de agosto de 2026')
  })
})

describe('content/posts', () => {
  it('every post in the repo has valid frontmatter and a unique slug', () => {
    const posts = getAllPosts()
    expect(posts.length).toBeGreaterThan(0)
    expect(new Set(posts.map((p) => p.slug)).size).toBe(posts.length)
  })
})
