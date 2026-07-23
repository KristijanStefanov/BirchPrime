# DAYLIGHT_MOTION_MAP.md

**Reference (motion feel only):** https://godaylight.com
Each observed pattern below is described as *behavior*, followed by our **Birch Prime adaptation** — original in code, similar in feel.

Where a value is approximate, it is marked `~`. Values marked `CLIENT CONFIRMATION REQUIRED` are visual-quality decisions we will finalize after the first review pass.

---

## 1. Navigation entrance

| Field | Value |
|---|---|
| Initial state | opacity 0, y = -12 px |
| Trigger | Page load, after ~120 ms |
| Duration | ~600 ms |
| Easing | cubic-bezier(0.22, 1, 0.36, 1) |
| Final state | opacity 1, y = 0 |
| Desktop | Container `translateY(24px → 0)`, slight scale from 0.98 |
| Mobile | Same, shorter (~420 ms) |
| Reduced motion | Opacity only, no translate |

## 2. Hero background parallax

| Field | Value |
|---|---|
| Behavior | Background image translates upward slower than scroll — ~0.7× multiplier |
| Trigger | Scroll begins |
| Scroll distance | Full hero height |
| Desktop | `y: 0 → -80px` on `scroll: 0 → 100vh`, with `scale: 1.02 → 1.0` |
| Mobile | Reduced to ~0.85× multiplier, no scale |
| Reduced motion | Static |

## 3. Technical overlay panels

| Field | Value |
|---|---|
| Behavior | Small info panels drift upward at slightly *faster* rate than page scroll (~1.08×) — creates depth |
| Desktop | `y: 0 → +40px`, opacity 1 → 0.85 across hero |
| Mobile | Panels are stacked into the flow, no drift |
| Reduced motion | Static |

## 4. Hero text reveal (line-by-line)

| Field | Value |
|---|---|
| Behavior | Label appears first (fade + rise), then headline reveals line-by-line via clip-path mask, then supporting paragraph, then CTA |
| Sequence | Label 0 ms → Headline lines staggered 80 ms → Paragraph 480 ms → CTA 640 ms |
| Line reveal | `clip-path: inset(100% 0 0 0)` → `inset(0)` over 720 ms, easing cubic-bezier(0.16, 1, 0.3, 1) |
| Mobile | Same sequence, ~15% faster |
| Reduced motion | Fade only, no clip |

## 5. Grid hairline reveal (Birch Prime signature)

| Field | Value |
|---|---|
| Behavior | Vertical hairlines draw from top to bottom on section enter |
| Trigger | Section top hits 85% of viewport |
| Duration | ~1200 ms, staggered 60 ms across columns |
| Property | `transform: scaleY(0 → 1)`, `transform-origin: top` |
| Mobile | Only 2 hairlines visible (outer margins) |
| Reduced motion | Instant opacity fade |

## 6. Section headline mask reveal

| Field | Value |
|---|---|
| Behavior | Each line of a section H2 rises from below a clip mask |
| Duration | ~800 ms per line |
| Stagger | 90 ms between lines |
| Easing | cubic-bezier(0.22, 1, 0.36, 1) |
| Reduced motion | Fade only |

## 7. Image scale reveal

| Field | Value |
|---|---|
| Behavior | Image enters via clip-path from bottom + subtle scale from 1.06 to 1.0 |
| Trigger | Image top at 90% viewport |
| Duration | ~1000 ms |
| Reduced motion | Instant with fade |

## 8. Sticky text / scrolling image (desktop only)

| Field | Value |
|---|---|
| Behavior | Text column pins for ~1.5× viewport, image column scrolls past |
| ScrollTrigger | `start: "top top"`, `end: "+=150%"`, `pin: true` |
| Mobile | Not pinned — becomes stacked sequential blocks |
| Reduced motion | Not pinned — natural flow |

## 9. Product texture / material section

| Field | Value |
|---|---|
| Behavior | Full-bleed material photo expands from within a grid column; technical data cards fade in beside it in sequence |
| Duration | 900 ms image expand + 3× 400 ms card stagger |
| Mobile | Image full-width, cards stack below |

## 10. Industry cards

| Field | Value |
|---|---|
| Behavior | Cards rise on enter with 120 ms stagger |
| Property | y: 40 → 0, opacity 0 → 1 |
| Duration | 700 ms |
| Mobile | 80 ms stagger, y: 20 → 0 |

## 11. Product comparison table

| Field | Value |
|---|---|
| Behavior | Column-by-column reveal |
| Stagger | 140 ms per column |
| Mobile | Stacks to cards, single fade-in per card, 100 ms stagger |

## 12. CTA section

| Field | Value |
|---|---|
| Behavior | Background transitions from ivory to graphite via a mask-clip that scales from the section's top edge downward as it enters the viewport |
| Duration | Bound to scroll — ~60% of section height |
| Content | Headline reveals via clip mask 200 ms after background dark takeover completes |
| Reduced motion | Background is graphite from the start, no scroll binding |

## 13. Footer entrance

| Field | Value |
|---|---|
| Behavior | Oversized wordmark rises from below, opacity 0 → 1 while translating y: 60 → 0 |
| Duration | 900 ms |
| Contact info | Static — always accessible |
| Reduced motion | Static wordmark |

---

## Global motion tokens (final)

```ts
export const motion = {
  durations: {
    micro: 240,
    short: 480,
    base: 720,
    long: 1000,
    hero: 1200,
  },
  easings: {
    entrance: [0.22, 1, 0.36, 1],
    reveal:   [0.16, 1, 0.3, 1],
    exit:     [0.4, 0, 0.9, 0.4],
  },
  staggers: {
    tight: 60,
    base:  90,
    loose: 140,
  },
  parallax: {
    hero: 0.7,
    panel: 1.08,
    mobile: 0.85,
  },
};
```

## Reduced motion policy

If `prefers-reduced-motion: reduce`:
- No parallax, no pinning, no large scale
- No decorative scroll draws (grid lines)
- Reveal animations become 200 ms opacity fades
- All content immediately accessible (do not gate content on animation)
