# HERO_GAP_ANALYSIS.md

Side-by-side audit of the current Birch Prime hero implementation vs. the Daylight reference at 1440 × 900. Every gap below is corrected in the rebuild.

---

## A. Headline

| # | Current | Reference (Daylight structure) | Fix |
|---|---|---|---|
| A1 | Three-line Cyrillic headline "Материјал на кој / можете да / се потпрете" | Exactly 2 lines ("Power your home / for less") | Replace with `"Создадено" / "да трае"` — explicit `<span>` line breaks, no auto-wrap |
| A2 | Font-size max 8rem = 128 px | Reference ≈ 128 px but shorter Cyrillic phrase | Keep max ~132 px; new copy fits 2 lines in 55vw |
| A3 | Cormorant Garamond — too decorative, overly calligraphic in Cyrillic | Modern editorial serif with restrained forms | Switch to **Source Serif 4** (verified Cyrillic incl. Ѓ ѓ Ќ ќ Ѕ ѕ Љ љ Њ њ Џ џ) |
| A4 | `font-weight: 500`, `letter-spacing: -0.025em`, `line-height: 0.96` | Tighter, less spaced | `font-weight: 400`, `letter-spacing: -0.045em`, `line-height: 0.93` |
| A5 | Positioned via `clamp(220px, 36vh, 400px)` — floats between vh anchors | Reference anchored to grid, ~34vh from top | `top: 34vh`, `left: 5vw` |

## B. Navigation

| # | Current | Reference | Fix |
|---|---|---|---|
| B1 | Full-width pill spanning most of viewport up to ~1100 px wide | ~740 px wide, centred, compact | Container **max-width 720 px**, height 60 px |
| B2 | Logo + vertical divider + 5 links + CTA — over-populated | Logo + 4 links + 1 CTA | Reduce to 5 links (currently already 5), tighten padding |
| B3 | Link font-size 14 px, padding 3.5 × 2 | Ref ~14–16 px, compact | Font 14 px, tighter horizontal padding |
| B4 | "Побарајте понуда" CTA has orange but too wide (`px-5`) | Ref ~155 px wide | Fixed height 44 px, padding-x 18 px, target ~155 px |
| B5 | Wordmark uses `Birch` + `Prime` — but sizing feels amateur | Ref has tight custom lockup | Refine: `Birch` in serif 22 px, `Prime` in sans 10 px small caps, tight optical baseline |

## C. Background image + overlay

| # | Current | Reference | Fix |
|---|---|---|---|
| C1 | `hero-birch.jpg` shows stacked plywood + **prominent birch logs on left**, competes with headline | Reference: clean architectural photo with large uninterrupted negative space | Switch background to `construction-formwork.jpg` — cleaner, better negative space |
| C2 | Overlay too heavy: 42% top → 78% bottom | Reference: warm gray, moderate opacity, gradient from left | Left-weighted gradient: 58% → 30% → 22% right |
| C3 | Everything reads dark and muddy | Product visible + text legible | Reduce middle/right overlay to ~30% so material shows |

## D. Right-side composition

| # | Current | Reference | Fix |
|---|---|---|---|
| D1 | Animated beige-to-birch gradient block occupies 26vw × ~500 px | Reference orange block ≈ 18vw × 42vh, **strong pattern, saturated** | Replace gradient div with **real close-up material photograph** — `uncoated-2.png` (visible plywood layers, warm golden tone) |
| D2 | Panel edges are too soft, rounded 2 px | Reference has clean straight edges | `border-radius: 0` (no rounding on the panel) |
| D3 | "На залиха" progress bar too small, unclear alignment | Reference progress bar aligned with panel bottom | Anchor progress bar 4 px below texture panel, right-aligned to panel |
| D4 | "Потекло / Европа" — unverified claim about origin | Reference shows only verified live data | Remove "Потекло / Европа". Only show verified label `"Бреза"` |
| D5 | Right column starts at ~74vw with 340 px wide block — too wide | Reference right composition starts at 72vw, width ~17-21vw | `left: 72vw`, width 17vw, height 42vh — precise grid alignment |

## E. Supporting copy

| # | Current | Reference | Fix |
|---|---|---|---|
| E1 | "Плочи од бела бреза. $0 претплата, брза испорака..." — **contains unverified "$0 претплата" claim** | Reference has clean, honest claim | Replace with "Шперплоча од бреза за градежништво, транспорт и производство." |
| E2 | Positioned via `bottom: clamp(120px, 18vh, 200px)` — floats | Reference anchored near bottom | Fix `bottom: 22vh`, width ~420 px |
| E3 | Text style: 15 px, 1.55 line-height | Reference: 18-22 px, tighter leading | Font 20 px, line-height 1.3 |

## F. CTA control

| # | Current | Reference | Fix |
|---|---|---|---|
| F1 | Fully rounded 999 px pill with two links of equal weight | Reference has **rectangular rounded-corner (16 px)** control with input-style left + solid dark right button | Rebuild as: `rounded-[16px]`, 420 × 64 px, semi-transparent dark bg, left text (secondary), right dark button (dominant) |
| F2 | Both buttons equally styled → weak hierarchy | Reference: left = ghost input, right = solid dark, clear dominance | Left `Разгледајте производи` = ghost text; right `Побарајте понуда` = solid graphite pill |
| F3 | Positioned via bottom clamp — inconsistent | Reference anchored ~8vh from bottom | Fix `bottom: 8vh`, `left: 5vw` |

## G. Grid system

| # | Current | Reference | Fix |
|---|---|---|---|
| G1 | 5 evenly spaced vertical lines at 0/25/50/75/100% | Reference has irregular editorial grid | Use grid boundaries at **5%, 27%, 50%, 72%, 89%, 97% viewport width** (per spec) |
| G2 | 3 horizontal lines at 22/50/78% | Reference has ~3 subtle horizontals aligned to content | Horizontals at 18%, 72%, 90% — aligned with nav bottom, headline bottom, and CTA row |
| G3 | Lines rendered as `rgba(255,255,255,0.34)` — too bright | Reference: subtle 15-25% opacity | Lower to `rgba(255,255,255,0.18)` |

## H. Motion

| # | Current | Reference | Fix |
|---|---|---|---|
| H1 | All content simply fades up on load | Reference has stepped sequence: bg → grid → nav → label → headline lines → supporting → CTA | Implement stepped sequence with delays: bg-zoom 0ms, grid 300ms, label 400ms, headline line-1 500ms, line-2 640ms, support 780ms, CTA 900ms, right column 1000+ms |
| H2 | No headline mask reveal — plain fade + translate | Reference (industry-standard): line-by-line clip mask reveal | Each headline line inside `overflow: hidden`, inner span translates from `translateY(100%)` to `0` |
| H3 | No initial background zoom | Reference: subtle 1.04 → 1.0 scale on load | Add `@keyframes hero-bg-zoom-kf` |
| H4 | Grid lines pop in instantly | Reference: fade in sequentially | Stagger grid line fade-in |

## I. Mobile

| # | Current | Reference | Fix |
|---|---|---|---|
| I1 | Mobile nav 68 px tall | Reference mobile: ~90 px tall floating pill | Increase to 90 px, radius 24 px |
| I2 | Mobile hero re-uses long 3-line desktop headline | Reference mobile: same 2-line concept | Use shorter "Создадено / да трае", clamp(54px, 15vw, 76px) |
| I3 | Mobile has bloated tech data (Дебелина, Димензии AND На залиха AND Потекло) | Reference: 1-2 tech values on mobile | Keep only Дебелина + Димензии; remove "На залиха" progress bar and "Потекло" from mobile |
| I4 | Mobile CTA is a dark pill with 2 equal buttons | Reference mobile: combined input-style control (like desktop but smaller) | Rebuild as rounded-[14px] combined control, 100% wide minus margins |

## J. Files to modify

1. `src/app/layout.tsx` — swap Cormorant Garamond → Source Serif 4
2. `src/components/navigation/DesktopNav.tsx` — compact 720 px width
3. `src/components/navigation/MobileNav.tsx` — 90 px tall, 24 px radius
4. `src/components/hero/HomeHero.tsx` — full rewrite per this spec
5. `src/app/globals.css` — new hero motion keyframes, tighter tokens
6. `src/components/hero/HeroFeatureBlock.tsx` — **delete** (replaced by real photograph)
7. `src/components/hero/HeroTechnicalPanel.tsx` — **delete** (unused after rewrite)

## K. Success criteria (must all pass)

- [ ] Desktop headline is exactly 2 lines at 1280, 1440, 1600, 1920 px
- [ ] Navigation width ≤ 760 px on desktop
- [ ] No horizontal overflow at 320 px
- [ ] `Source Serif 4` renders all target Cyrillic glyphs (Ѓ ѓ Ќ ќ Ѕ ѕ Љ љ Њ њ Џ џ)
- [ ] Right texture panel is a real photograph, not a fake beige block
- [ ] CTA is a rounded rectangle (14–18 px radius), **not** a full pill
- [ ] Supporting copy no longer mentions "$0 претплата"
- [ ] No "Потекло / Европа" (unverified) displayed
- [ ] Grid lines visible but subtle (15–25 % opacity)
- [ ] Mobile headline is "Создадено / да трае" (2 lines)
- [ ] Mobile nav is ~90 px tall
