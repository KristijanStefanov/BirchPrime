# VISUAL_AUDIT.md — Phase 1 delivery

Run in a browser at each viewport listed below and confirm the checkpoints. Report any failing item back for iteration.

---

## Viewports to test

- 375 × 812 (iPhone)
- 430 × 932 (iPhone Pro Max)
- 768 × 1024 (iPad portrait)
- 1440 × 900 (desktop)
- 1920 × 1080 (large desktop)

## Golden path

- [ ] Home: hero renders with material background, technical panel on the right (desktop only), headline reveals line-by-line
- [ ] Home: navigation compacts + gains blur after 40 px scroll
- [ ] Home: benefits section renders 4 cards on desktop, stacked on mobile
- [ ] Home: featured products alternate left/right on desktop, stack on mobile
- [ ] Home: industries section renders visual + text pairs
- [ ] Home: CTA panel is graphite with orange primary CTA
- [ ] Home: footer wordmark stretches across the width, contact block on the right
- [ ] Product archive: 5 products render with the first spanning both columns on desktop
- [ ] Product detail: breadcrumb, hero + swatch, specs table, applications, related, CTA
- [ ] Industry pages: hero + visual + product grid + CTA
- [ ] Blog list: three cards with meta chip, category, date, reading time
- [ ] Blog article: breadcrumb + hero + article body
- [ ] Contact: form validates (name, email, message, consent)

## Mobile-specific

- [ ] Hamburger opens fullscreen graphite menu with circular clip-path reveal
- [ ] Escape and X close the menu, focus returns to hamburger
- [ ] All nav links are ≥ 44 px tall
- [ ] Hero shows chips row above headline, not the desktop technical panel
- [ ] No horizontal scroll at 320 px
- [ ] Spec table wraps to stacked rows

## Motion QA

- [ ] Set `prefers-reduced-motion: reduce` in DevTools → confirm all reveals become instant
- [ ] Scroll a full page — no jank, Lenis feels smooth
- [ ] Hero headline reveals line-by-line
- [ ] Section headings reveal on scroll enter
- [ ] Nav shrinks on scroll

## Accessibility

- [ ] Tab through nav, product cards, form — focus rings visible (orange outline)
- [ ] "Прескокни на содржината" skip link appears on first Tab
- [ ] Contact form errors read aloud with screen reader
- [ ] All images with meaning have Macedonian alt text
- [ ] Contrast: ivory background + `--soft-black` text ≥ 4.5:1

## Cyrillic rendering

Check these characters render correctly with the loaded fonts:

`Ѓ ѓ Ќ ќ Ѕ ѕ Љ љ Њ њ Џ џ`

Sample text on the CTA section:

> Да разговараме за материјалот што ви е потребен.

## Known limitations of this delivery

- Product / hero imagery is procedurally-generated SVG. Replace before public launch.
- Legal copy is placeholder — the client must supply the final privacy + cookie text.
- Blog article bodies are truncated summaries. Full articles need to be re-scraped from birchprime.rs once the client confirms permission scope.
- Phone / email / address currently reflect Serbian entities from birchprime.rs; the Macedonia-specific contact details must be provided by the client.
- No Sanity connection yet — content lives in `src/data/*.ts`. The interface shape is CMS-ready.
- GSAP is installed but not yet used; the reveal system uses lighter IntersectionObserver + CSS transitions to keep the initial JS bundle small.
