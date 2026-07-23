# MOBILE_DESIGN_SPEC.md

Mobile is **not a shrunken desktop**. Every mobile layout below is art-directed independently.

**Target viewports:** 320×568, 360×800, 375×812, 390×844, 412×915, 430×932.

---

## 1. Global mobile rules

- Outer page margin: **20 px** (24 px from 390 up).
- Grid hairlines: only the two outer verticals + horizontal section dividers.
- Section vertical padding: **64 px** top / bottom (72 px from 390 up).
- Body text minimum: **17 px**.
- Touch targets: **≥ 44 × 44 px**.
- No hover-only states.
- No parallax on background images.
- No pinned scroll on mobile (all sections flow naturally).
- No custom cursor.
- Reduced motion is respected globally.

## 2. Floating navigation container

- Position: `fixed`, `top: 16px`, `left: 20px`, `right: 20px` (page margins).
- Container: ivory `#F3ECDD`, `border-radius: 22px`, `border: 1px solid rgba(24,24,22,0.08)`.
- Height: **68 px**.
- Contents: Birch Prime wordmark left, hamburger icon right.
- Hamburger is 44 × 44 hit area with a 20 px stroke icon centered.
- After 40 px scroll: container height compacts to **60 px**, background gains `backdrop-blur(20px)` and a very soft shadow.
- Container is never full-width edge to edge — the visible page margins are part of the identity.

## 3. Mobile menu (overlay)

- Full-screen overlay in graphite `#181816`.
- Enters via a masked reveal from the top-right corner (clip-path circle expanding).
- Scroll lock while open.
- Focus trap active; Escape closes.
- Contents:
  1. Close (44 × 44) top-right
  2. Wordmark top-left
  3. Nav links stacked (48 px type, tight leading)
  4. Divider hairline
  5. Product categories, small caps
  6. Industries, small caps
  7. Contact block (email + phone)
  8. CTA `Побарајте понуда` — full-width pill button in orange
  9. Legal row at the bottom
- Animation: links stagger in from y: 24 → 0 with 60 ms delay each.

## 4. Mobile hero

**Section order (top to bottom):**

1. Nav (floating, above content)
2. **Technical panel** — small ivory card with 2 chips ("ДЕБЕЛИНА · 6–40 mm", "ДИМЕНЗИИ · 1220×2440"). This is the "editorial spec floater" moved from desktop upper-right into the flow above the headline.
3. **Material image** — 3:4 portrait crop of birch veneer / plywood edge, 90% width, centered.
4. **Overline label** — `ШПЕРПЛОЧА ОД БРЕЗА`, 12 px, tracking 0.16em.
5. **Headline** — serif display, `clamp(2.6rem, 10vw, 3.8rem)`, tight leading, controlled line breaks:
   ```
   Материјал на кој
   можете да
   се потпрете
   ```
6. **Lede** — 17 px Manrope, 3 lines max.
7. **Primary CTA** — full-width pill, orange, `Побарајте понуда`.
8. **Secondary CTA** — outline pill, `Истражете ги производите`.
9. **Scroll cue** — thin hairline + small caps `ПРЕЛИСТАЈТЕ` label.

**Vertical rhythm:** 24 px between blocks, 40 px above headline, 32 px between CTA and scroll cue.

## 5. Mobile benefit sections

Desktop uses asymmetric grid. Mobile stacks:

1. Small overline label
2. Centered serif headline (2 lines)
3. Body paragraph (17 px)
4. Image (16:10 crop, full-width within page margins)
5. Optional product link (small caps + hairline arrow)

Sequential, one benefit per screen height on mobile.

## 6. Mobile industries

Card carousel becomes a vertical stack:
- Each industry is a full-width block
- Image on top (aspect 3:2)
- Overline + headline
- 2-sentence body
- "Дознај повеќе →" link
- Hairline divider between industries

## 7. Mobile product overview

- **No 3-column grid.** Products are displayed as full-width editorial cards.
- Card structure:
  - Category chip top-left
  - Product image (4:3)
  - Product name in serif
  - 1-line description
  - Technical spec chips row (scroll horizontally if needed)
  - "Прикажи производ →" link

## 8. Mobile product detail

- Hero image at top, full-width, 4:5 crop.
- Product name in serif display, 2 line max.
- Category + classification code chips.
- Sticky "Побарајте понуда" button at bottom of screen after scrolling 50% (hidden on hero).
- Specification table becomes **stacked rows** — one label per line, one value per line, hairline separators.
- Applications become a bulleted list, not a grid.
- Related products at the bottom: horizontal-scroll card row.

## 9. Mobile CTA section

- Graphite background inherits from full section.
- Overline `СЛЕДЕН ПРОЕКТ` top-left small caps.
- Headline serif, 2–3 lines.
- Body 17 px, muted ivory.
- CTA full-width orange pill.

## 10. Mobile footer

- Vertical stack, no columns.
- Oversized wordmark `BIRCH PRIME` letter-spaced across width.
- Nav sections stacked (Products, Industries, Company, Legal), each as accordion or plain list.
- Contact block: email, phone, address.
- Small caps legal row at bottom.

## 11. Mobile-specific motion (reduced from desktop)

| Behavior | Desktop | Mobile |
|---|---|---|
| Hero parallax | 0.7× | none |
| Overlay panel drift | 1.08× | none |
| Section heading mask reveal | 800 ms per line | 500 ms per line |
| Image scale reveal | 1.06 → 1.0 | 1.03 → 1.0 |
| Sticky pinned sections | ~150% pin | none — natural flow |
| CTA background mask | scroll-bound | fade over 400 ms |
| Grid line draw | vertical draw stagger | instant fade |

## 12. Mobile performance rules

- Only the hero image gets `priority` (`fetchpriority=high`).
- All other images lazy-load with blur placeholder.
- No autoplay video on mobile — poster + tap to play.
- Fonts: subset to Latin + Cyrillic only; `font-display: swap`.
- No animation runs off-screen; observers pause when tab inactive.
- Bundle: mobile-first CSS, dynamic import for GSAP ScrollTrigger only after first user scroll on mobile.

## 13. Mobile QA checklist

- [ ] No horizontal scroll at 320 px
- [ ] Cyrillic characters render correctly (Ѓ, Ќ, Ѕ, Љ, Њ, Џ)
- [ ] Every CTA is ≥ 44 px tall and reachable one-handed
- [ ] Nav overlay traps focus and returns focus to hamburger on close
- [ ] Form inputs never overflow at 320 px
- [ ] Spec tables are readable without horizontal scroll
- [ ] Hero renders within 2.5 s on Slow 4G
- [ ] Reduced motion disables all decorative animation
