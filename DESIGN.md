# Design System: Dra. Gabriella Dolavale

> Extraído do site aprovado pela cliente no Wix (HTML embutido em Início, Bem-vindo bebê e Links).
> **Fonte da verdade dos valores:** o bloco `@theme` em [app/globals.css](app/globals.css). Este documento explica o porquê e o uso.

## Identidade

Pediatria integrativa com tom **acolhedor, editorial e sem pressa**. A linguagem visual vem de revista impressa: serifa grande e leve, muito respiro, papel quente, rosé antigo e fotos com recortes orgânicos.

**Voz:** frases curtas e afirmativas, com um trecho em itálico rosé que carrega a emoção ("A infância *merece tempo* para ser compreendida."). Os valores da marca são **Clareza · Tempo · Vínculo · Presença**.

## Cores

| Token (Tailwind) | Hex | Uso |
|---|---|---|
| `paper` | `#f4ede3` | Fundo padrão do site |
| `paper-2` | `#eee3d7` | Fundo alternativo (depoimentos, artigos, mídia do curso) |
| `sand` | `#eadfce` | Fundo de seção de destaque (Sobre, Contato, card do curso) |
| `cream` | `#fffdf9` | Fundo claro (benefícios, FAQ do curso) e texto sobre escuro |
| `ink` | `#2f2724` | Texto principal, botão primário |
| `ink-deep` | `#1e1917` | Hover do botão |
| `espresso` | `#241e1c` | Rodapé legal do curso |
| `muted` | `#665853` | Texto secundário (5,9:1 sobre paper) |
| `rose-500` | `#a76f6d` | **Só decorativo**: estrelas, bolinhas e linhas. Não usar em texto pequeno (3,5:1) |
| `rose-600` | `#9a5f61` | Itálico de destaque (`.accent`) em tamanho de título (4,3:1, AA para texto grande) |
| `rose-700` | `#805556` | Eyebrows e labels pequenos (5,4:1, AA) |
| `blush` | `#d8b8ad` | Etiquetas sobre foto, itálico sobre fundo `ink` |
| `blush-light` | `#f1d5c3` | Itálico de destaque sobre caramelo |
| `caramel-500` | `#9d8168` | Cor do logotipo. Decorativo |
| `caramel-700` | `#866d57` | Fundo caramelo **com texto** (CTA, rodapé, programa do curso) |
| `sage` | `#5e6d5c` | Seção do consultório (texto branco, 5,5:1) |
| `sage-light` | `#dfe5d9` | Card de artigo |
| `line` / `line-strong` | `#cfc0b6` / `#bdaea5` | Divisórias e bordas |

### Decisão de contraste: caramelo

No Wix, o CTA, o rodapé e o programa do curso usavam `#9d8168` com texto branco (3,6:1, que reprova no AA) e o itálico `#f1d5c3` (2,6:1). Aqui, as superfícies caramelo **com texto** usam `caramel-700` (`#866d57`, 6% mais escuro): o texto branco fica em 4,8:1 e o itálico em 3,5:1. O `caramel-500` continua como a cor do logo. **Para voltar ao tom original**, troque `--color-caramel-700` em `app/globals.css`.

### Consolidação da paleta

O Wix tinha duas famílias de cor que se desviaram uma da outra:
- **Base:** Início/Bem-vindo bebê, que estava mais completa e já tinha as correções de contraste.
- **Ajustada a ela:** Links/Manutenção (`#f5efe7`, `#30292c`, `#a86169` etc.).
- **Unificados em `paper-2`:** os tons quase iguais `#eee1d4`, `#eee3d7` e `#efe6db`.

## Tipografia

| Família | Token | Pesos | Uso |
|---|---|---|---|
| **Cormorant Garamond** | `font-serif` | 400, 500, itálico 400 | Títulos, citações, números, marca |
| **Manrope** | `font-sans` | 300 (padrão do corpo), 400, 500, 600 | Corpo, labels, botões |

As duas são carregadas via `next/font` (self-hosted) em [app/layout.tsx](app/layout.tsx).

| Estilo | Classe | Tamanho | Observação |
|---|---|---|---|
| Display (H1 do hero) | `text-display` | `clamp(59px, 7vw, 108px)` / 0,95 | Serifa 400 |
| Título de seção (H2) | `text-title` | `clamp(52px, 6vw, 84px)` / 0,95 | Serifa 400 |
| Heading de card (H3) | `text-heading` | 38px / 1 | Serifa 400 |
| Corpo | (padrão) | 16px / 1,65 | Manrope **300** |
| Eyebrow | `.eyebrow` | 11px, `tracking .2em`, maiúsculas, 500 | `rose-700` |
| Label/meta | utilitários | 10–12px, `tracking .1–.16em`, maiúsculas | |

**Padrão de título:** frase em serifa regular, com o final em `<span className="accent">` (itálico rosé). Sobre fundo escuro ou caramelo, o itálico usa `text-blush` ou `text-blush-light`.

## Layout

- **Container:** `container-site` = `min(1160px, 100% - 48px)`. No mobile, `min(100% - 34px, 620px)`.
- **Breakpoints:** `md` = 761px e `lg` = 901px, iguais aos dos embeds originais. Ainda existe `sm` (640px), usado na página Links.
- **Ritmo vertical:** as seções usam `py-section` (120px), `py-section-sm` (85px) no mobile, e 130px nas seções principais.
- **Grids assimétricas:** 1.05fr/.95fr, 1.15fr/.85fr, .9fr/1.1fr. Evitar 50/50 nos blocos de título + texto.

## Formas

| Utilitário | Valor | Uso |
|---|---|---|
| `shape-leaf` | `border-radius: 0 90px 0 90px` | Fotos de destaque (hero, sobre, capa do post) |
| `shape-corner` | `border-radius: 0 55px 0 0` | Galeria do consultório |
| `rounded-bl-[120px]` | | Mídia do hero do curso |

Botões e cards são **retos** (sem raio). Só a página Links usa cantos arredondados (20px nos links), porque imita um app.

## Componentes

| Componente | Onde | Notas |
|---|---|---|
| `.btn` / `.btn-light` | [globals.css](app/globals.css) | Retangular, 11px maiúsculo, seta `↗`. A versão escura é a padrão; a `light` é para fundos escuros |
| `.link-underline` | globals.css | Link de texto com sublinhado rosé: "Leia mais ↗" |
| `.eyebrow`, `.accent` | globals.css | Ver Tipografia |
| `SiteHeader` | [components/SiteHeader.tsx](components/SiteHeader.tsx) | Logo + navegação. No mobile vira menu em tela |
| `SiteFooter` | [components/SiteFooter.tsx](components/SiteFooter.tsx) | Marca, CRM/RQE, contato, endereço, aviso legal |
| `ArticleCard` | [components/ArticleCard.tsx](components/ArticleCard.tsx) | Capa, eyebrow da categoria, título em Manrope, "Leia mais". Usado na Início, em /artigos e nos relacionados |
| `JsonLd` | [components/JsonLd.tsx](components/JsonLd.tsx) | Dados estruturados (Physician, Course, FAQPage, BlogPosting) |

Padrões de página (sem componente próprio):
- **Card de pilar:** borda superior, fundo `white/25`, número rosé.
- **Depoimento:** fundo `paper-2`, estrelas `rose-500`, citação em serifa 30px.
- **Card de contato:** label `rose-700`, valor em serifa.

## Imagens

- Ficam em `public/images/` como **webp já dimensionado** (24–70KB). Não usamos `next/image`, porque o export estático não tem otimizador.
- O logo (`logo.png`, `logo-symbol.png`) foi extraído do PNG do Wix com fundo transparente. **Pendente:** trocar pelo SVG original da identidade.

## Acessibilidade

- Contraste AA em todo texto. Rosé claro e caramelo claro só como decoração.
- `prefers-reduced-motion` desliga transições.
- Foco visível em todos os links.
- Link "Pular para o conteúdo".
- Sem texto em imagem.
