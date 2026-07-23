# IMPLEMENTATION_PLAN.md

Delivered in phases. Each phase is independently reviewable.

---

## Phase 1 — Foundation (this session)

1. Analysis documents (done above).
2. Next.js 15 App Router scaffold with strict TypeScript.
3. Tailwind CSS with our design tokens exposed as theme extensions.
4. Fonts (Cormorant Garamond, Manrope) loaded via `next/font/google` with Cyrillic subset.
5. Motion providers: Lenis smooth scroll + GSAP ScrollTrigger with reduced-motion guard.
6. Grid overlay component.
7. Floating navigation (desktop + mobile menu overlay).
8. Homepage: cinematic hero + benefits + industries + featured products + CTA + footer.
9. Product archive + dynamic product detail page.
10. Industry pages (3).
11. About, Blog list + article, Contact + form + API route.
12. Legal placeholder pages.
13. `sitemap.ts`, `robots.ts`, `not-found.tsx`, per-page metadata.
14. Local data files as CMS-ready content repository.
15. README with install / build / deploy instructions.

## Phase 2 — Post-review (out of scope this session)

1. Download authorized Birch Prime media once the client confirms authorization scope.
2. Populate `MEDIA_MANIFEST.json` with real assets.
3. Wire Sanity schemas + connect the content repository abstraction.
4. Configure Resend for the contact form.
5. Playwright + Vitest coverage.
6. Lighthouse audit + performance tuning pass.
7. Final visual audit at each viewport with screenshots.

## Component inventory

- `layout/RootLayout`
- `layout/PageContainer`
- `layout/GridOverlay`
- `layout/SectionDivider`
- `layout/SectionLabel`
- `navigation/DesktopNav`
- `navigation/MobileNav`
- `navigation/MobileMenu`
- `navigation/NavLink`
- `hero/HomeHero`
- `hero/HeroTechnicalPanel`
- `motion/SmoothScrollProvider`
- `motion/RevealText`
- `motion/RevealImage`
- `motion/ParallaxLayer`
- `sections/BenefitsSection`
- `sections/IndustriesSection`
- `sections/FeaturedProductsSection`
- `sections/CtaSection`
- `sections/AboutSection`
- `products/ProductCard`
- `products/ProductHero`
- `products/SpecificationTable`
- `products/ApplicationList`
- `products/RelatedProducts`
- `forms/ContactForm`
- `ui/Button`
- `ui/Chip`
- `ui/Container`
- `layout/Footer`

## Route map

| Route | Purpose |
|---|---|
| `/` | Home |
| `/proizvodi` | Product archive |
| `/proizvodi/[slug]` | Product detail |
| `/gradezhnishtvo` | Industry — construction |
| `/transport` | Industry — transport |
| `/mebel-i-enterier` | Industry — furniture + interior |
| `/za-nas` | About |
| `/blog` | Blog list |
| `/blog/[slug]` | Blog article |
| `/kontakt` | Contact + form |
| `/politika-na-privatnost` | Privacy |
| `/kolacinja` | Cookies |
| `/api/contact` | POST endpoint for contact form |

## Success criteria for Phase 1

- `npm install` succeeds, `npm run build` succeeds with no TypeScript errors.
- All routes render valid HTML with Macedonian Cyrillic.
- Nav is keyboard-accessible, Escape closes menu, focus trap is correct.
- Reduced-motion setting disables animation.
- No layout shift on hero.
- No horizontal scroll on any viewport 320 → 1920.
