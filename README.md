# Birch Prime — Macedonian website

Production-ready Next.js 15 website for **Birch Prime**, a distributor of birch plywood, formwork panels, and transport flooring panels. The entire public site is in Macedonian Cyrillic.

Design quality is inspired by editorial reference material; **no code, imagery, or copy from any reference site is included in this codebase.** All visual language, color, typography, and motion are original to Birch Prime.

---

## Stack

- **Framework:** Next.js 15 (App Router, React 19, RSC by default)
- **Language:** TypeScript, strict mode with `noUncheckedIndexedAccess`
- **Styling:** Tailwind CSS 3 + CSS variables for design tokens
- **Fonts:** Cormorant Garamond (display serif) + Manrope (sans), both loaded via `next/font/google` with Cyrillic subset
- **Motion:** Lenis for smooth scroll, custom IntersectionObserver reveal system, procedural parallax layer. GSAP is a dependency for future ScrollTrigger work (not yet imported in the current build).
- **Forms:** React Hook Form + Zod schema; server-side revalidation in the API route
- **Email:** Resend-compatible API route at `src/app/api/contact/route.ts`. Without `RESEND_API_KEY`, the route logs to console (dev mode).

---

## Getting started

```bash
npm install
npm run dev          # http://localhost:3000
npm run typecheck    # tsc --noEmit
npm run build        # next build
npm start            # serve production build
```

Node 18.18+ is required.

---

## Environment variables

Copy `.env.example` to `.env.local` and fill in:

```bash
RESEND_API_KEY=          # required for outbound contact emails
CONTACT_INBOX_EMAIL=     # where quote requests are delivered
CONTACT_FROM_EMAIL=      # verified Resend sender
NEXT_PUBLIC_SITE_URL=    # canonical / sitemap base
```

Without `RESEND_API_KEY`, the contact form still validates and returns success in dev — payloads are logged to the server console.

---

## Repository layout

```
src/
  app/                          Route entries (App Router)
    layout.tsx                  Root layout (fonts, header, footer, smooth scroll)
    page.tsx                    Home
    proizvodi/                  Products archive + [slug]
    gradezhnishtvo/             Industry — construction
    transport/                  Industry — transport
    mebel-i-enterier/           Industry — furniture + interior
    za-nas/                     About
    blog/                       Blog list + [slug]
    kontakt/                    Contact + form
    politika-na-privatnost/     Legal
    kolacinja/                  Cookies
    api/contact/route.ts        Contact form endpoint
    sitemap.ts, robots.ts       SEO plumbing
    not-found.tsx
  components/
    layout/                     Header, Footer, Container, GridOverlay, SectionLabel
    navigation/                 DesktopNav, MobileNav, MobileMenu
    brand/                      Wordmark
    hero/                       HomeHero, HeroMaterial, HeroTechnicalPanel
    sections/                   Statement, Benefits, FeaturedProducts, Industries, BlogTeaser, CTA
    products/                   ProductSwatch, SpecificationTable, RelatedProducts
    industries/                 IndustryPage (shared template)
    forms/                      ContactForm
    motion/                     SmoothScrollProvider, RevealText, RevealLines, ParallaxLayer
    ui/                         Button, Chip
  data/                         Local content repository (products, industries, articles, company)
  types/                        Content interfaces (CMS-ready shape)
  lib/                          utils
public/                         Static assets (media placeholders live in MEDIA_MANIFEST.json)
```

---

## Content architecture

The site loads content from `src/data/*.ts`. Each data file exports typed content that matches an interface in `src/types/content.ts`. This shape is CMS-ready: swap the data file for a Sanity-backed fetcher without touching UI components.

### Adding a product

Add an entry to `src/data/products.ts`:

```ts
{
  slug: "novi-proizvod",
  name: "Ново име на производ",
  category: "Оплата",
  classificationCodes: ["F/F"],
  lede: "...",
  description: "...",
  surface: "...",
  benefits: ["..."],
  specs: [{ label: "Дебелина", value: "6–40 mm" }],
  applications: [{ title: "...", description: "..." }],
  industries: ["gradezhnishtvo"],
  heroImageAlt: "...",
  swatchLabel: "...",
  seoTitle: "...",
  seoDescription: "...",
}
```

The archive and detail routes pick it up automatically via `generateStaticParams`.

### Adding a blog article

Add to `src/data/articles.ts`.

### Replacing images

Product placeholder SVGs live in `src/components/products/ProductSwatch.tsx`. Replace with `<Image>` calls once authorized Birch Prime photography is in place — see `MEDIA_MANIFEST.json` for the naming plan under `public/media/`.

### Configuring the contact inbox

Set `RESEND_API_KEY`, `CONTACT_INBOX_EMAIL`, and `CONTACT_FROM_EMAIL` in `.env.local`. The Resend sender must be verified on the account.

---

## Design system

All design tokens live in `src/app/globals.css` (`:root`) and are mirrored into `tailwind.config.ts` as theme extensions. Colors:

| Token | Value | Role |
|---|---|---|
| `--ivory` | `#F3ECDD` | Page background |
| `--cream` | `#FAF5EA` | Elevated surface |
| `--birch` | `#D9C6A3` | Material accent |
| `--gold` | `#C69A2D` | Verified badge |
| `--orange` | `#F45A1B` | CTA accent |
| `--graphite` | `#181816` | Dark section, primary text |
| `--soft-black` | `#23231F` | Body copy on ivory |
| `--muted` | `#6E6B62` | Secondary text |
| `--divider` | `rgba(24,24,22,0.14)` | Section dividers |
| `--hairline` | `rgba(24,24,22,0.08)` | Grid overlay lines |

Typography scale uses `clamp()`. See `DESIGN_SYSTEM.md` for the full spec.

---

## Motion

- Smooth scroll: Lenis, disabled when `prefers-reduced-motion: reduce`
- Reveal animations: IntersectionObserver-driven, using `clip-path` + `translateY` on entry
- Parallax: rAF-throttled scroll listener with configurable speed multiplier
- Reduced motion: all decorative animation collapses to a 200 ms opacity fade; the site remains fully readable

---

## Deployment

The project deploys as a standard Next.js app.

### Vercel

1. Import the repo in Vercel.
2. Set the environment variables (see `.env.example`).
3. Deploy. All product/industry/blog pages are prerendered statically; the contact API runs as a serverless function.

Custom domains: point `NEXT_PUBLIC_SITE_URL` at the production host so `sitemap.xml` and canonical tags are correct.

---

## SEO

- Per-page metadata via `generateMetadata` on dynamic routes
- Canonical URLs on every page
- Cyrillic OpenGraph strings
- `/sitemap.xml` and `/robots.txt` are Next.js metadata routes
- Ready for JSON-LD product / breadcrumb / article structured data — schemas can be added under `src/lib/structured-data.ts` in the next phase

---

## Testing (Phase 2)

Not included in this initial delivery. When adding, prefer:

- Vitest + React Testing Library for unit tests
- Playwright for e2e (contact form, keyboard navigation, mobile menu)
- Lighthouse CI as part of `npm run build` in CI

---

## Legal & authorization

- All product data is derived from birchprime.rs. It is assumed the client owns the source content and authorizes reuse.
- No copyrighted asset from any design reference is included. All imagery in the current build is procedurally generated SVG; real product photography must replace these placeholders before public launch.
- Legal text on `/politika-na-privatnost` and `/kolacinja` is a placeholder — the client must provide the final copy.

See `BIRCH_CONTENT_AUDIT.md` for items flagged `CLIENT CONFIRMATION REQUIRED`.
