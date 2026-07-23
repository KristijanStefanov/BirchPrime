# DESIGN_SYSTEM.md

Complete tokenized system. All tokens are consumed by Tailwind and CSS variables. Never hard-code values in components.

---

## 1. Color tokens

```css
:root {
  --ivory:      #F3ECDD;
  --cream:     #FAF5EA;
  --birch:     #D9C6A3;
  --gold:      #C69A2D;
  --orange:    #F45A1B;
  --graphite:  #181816;
  --soft-black: #23231F;
  --muted:     #6E6B62;
  --divider:   rgba(24, 24, 22, 0.14);
  --hairline:  rgba(24, 24, 22, 0.08);
  --ivory-blur: rgba(243, 236, 221, 0.72);
  --graphite-blur: rgba(24, 24, 22, 0.72);
}
```

### Semantic roles

| Token | Role |
|---|---|
| `--ivory` | Primary page background |
| `--cream` | Elevated surface (cards, panels) |
| `--birch` | Material accent, chip backgrounds |
| `--gold` | Verified badge, hairline highlight |
| `--orange` | CTA only, sparingly |
| `--graphite` | Dark section background, primary text on light |
| `--soft-black` | Body text on ivory |
| `--muted` | Secondary text, labels, meta |
| `--divider` | Section dividers |
| `--hairline` | Grid lines (whisper) |

## 2. Type scale

```css
:root {
  --font-serif: "Cormorant Garamond", "Playfair Display", Georgia, serif;
  --font-sans:  "Manrope", "Inter", ui-sans-serif, system-ui, sans-serif;

  --step-hero:    clamp(3.8rem, 8.5vw, 9.5rem);
  --step-h1:      clamp(3rem, 6vw, 7rem);
  --step-h2:      clamp(2.4rem, 4.5vw, 5rem);
  --step-h3:      clamp(1.6rem, 2.6vw, 2.4rem);
  --step-lede:    clamp(1.25rem, 1.8vw, 2rem);
  --step-body:    clamp(1rem, 1.1vw, 1.25rem);
  --step-label:   clamp(0.72rem, 0.8vw, 0.9rem);

  --lead-tight:   0.94;
  --lead-heading: 1.02;
  --lead-body:    1.55;

  --track-label:  0.16em;
  --track-tight: -0.02em;
}
```

Cyrillic verification (both fonts checked against Ѓ ѓ Ќ ќ Ѕ ѕ Љ љ Њ њ Џ џ):
- **Cormorant Garamond** — supports Cyrillic Extended-A ✅
- **Manrope** — supports Cyrillic Extended-A ✅

## 3. Space scale

```css
:root {
  --space-1:  4px;
  --space-2:  8px;
  --space-3:  12px;
  --space-4:  16px;
  --space-5:  24px;
  --space-6:  32px;
  --space-7:  48px;
  --space-8:  64px;
  --space-9:  96px;
  --space-10: 128px;
  --space-11: 160px;
}
```

## 4. Radii

```css
:root {
  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 22px;
  --radius-xl: 32px;
  --radius-pill: 999px;
}
```

## 5. Grid

- **Desktop:** 12 columns, 24 px gutter, outer margin `clamp(24px, 4vw, 96px)`.
- **Tablet:** 8 columns, 20 px gutter, outer margin 32 px.
- **Mobile:** 4 columns, 16 px gutter, outer margin 20 px.
- Grid hairlines rendered by `<GridOverlay />` component with opacity 0.06 by default, animated to 0.14 on section enter.

## 6. Elevation

Elevation is intentionally restrained — no drop shadows on cards. Only navigation container gets a soft shadow when scrolled:

```css
--shadow-nav: 0 8px 32px -12px rgba(24, 24, 22, 0.18);
```

## 7. Focus ring

```css
:focus-visible {
  outline: 2px solid var(--orange);
  outline-offset: 3px;
  border-radius: 4px;
}
```

## 8. Component tokens

### 8.1 Button — primary
- Background `--orange`
- Text `--ivory`
- Padding `14px 28px` desktop / `16px 24px` mobile
- Radius `--radius-pill`
- Font: sans, 500, 15 px, tracking 0.02em
- Hover: background darkens 6%, subtle 1px lift
- Focus-visible: 2px orange outline offset 3px

### 8.2 Button — secondary
- Background transparent
- Border 1px `--soft-black`
- Text `--soft-black`
- Same padding + radius

### 8.3 Chip (spec chip)
- Background `--cream`
- Border 1px `--hairline`
- Radius 999px
- Padding `6px 12px`
- Font: sans, 500, 12 px, tracking 0.14em, uppercase

### 8.4 Nav container
- Background `--ivory`
- Border 1px `--hairline`
- Radius 22 px
- Height 76 px desktop / 68 px mobile
- Compact height 60 px after scroll
- Blur `backdrop-filter: blur(20px)` when scrolled

## 9. Iconography

- Stroke-based icons only (weight 1.5 px).
- Never filled illustrations.
- Icons for spec sheets: 20 × 20 px, `--muted` fill.

## 10. Photography direction

- Material-first: birch veneer edges, plywood stacks, formwork on-site.
- Warm natural light. No cold blue tones.
- Human presence is welcome but incidental (hands, workboots — no faces unless client provides authorized talent).
- Crops favor golden-ratio placement, never dead center.
- Aspect ratios in use: 21:9 (hero), 4:5 (portrait moments), 3:2 (industry cards), 1:1 (grid tiles).

## 11. Reduced motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

Additionally, all GSAP timelines check `matchMedia("(prefers-reduced-motion: reduce)")` before running and fall back to instant opacity fades.
