# DAYLIGHT_DESIGN_ANALYSIS.md

**Reference (design quality only):** https://godaylight.com
**Purpose:** Extract design *principles* to reinterpret for Birch Prime. **Never copy** Daylight's brand, layout, HTML, CSS, imagery, or exact typography.

---

## 1. Art direction — the transferable signal

Daylight reads as *editorial* rather than *SaaS*. What makes it feel premium:
- Full-viewport hero image dominates the first fold, not a screenshot.
- Small uppercase labels sit above every major section — magazine-style semantic markers.
- Serif display headings for the emotional moments, sans-serif for utility.
- Overlaid technical data panels (live kWh, thermostat 68°F) sit on top of imagery *without competing with it* — small type, monospaced feel, high transparency.
- Whitespace is oversized: every section has room to breathe.
- Numbered process steps ("01. Solar makes energy") — treats content like a spread.

**Birch Prime reinterpretation:** replace solar/energy metaphors with **material and structure**. Instead of live kWh overlays, use technical spec chips (thickness, dimensions, load class). Instead of "01. Solar makes energy," use "01. Bреза • 02. Слоеви • 03. Ламинат." The editorial rhythm carries over — the imagery and copy do not.

## 2. Grid & structure

- **Desktop:** implicit 12-column grid. Divider treatment relies on whitespace + alignment more than on visible rules.
- **Content widths:** approximately 1280–1440 px max content column with generous 80–120 px outer margins on wide screens.
- **Sections:** alternate between (a) full-bleed image, (b) text-heavy split screens, (c) narrow centered text moments.
- **Vertical rhythm:** ~120–160 px block spacing on desktop, ~64–96 px on mobile.

**Birch Prime reinterpretation:** we will make grid lines *slightly visible* (opacity ~10%) as a signature — Birch Prime's brand is architectural/technical, and hairlines suggest measurement. Daylight hides the grid; we surface a whisper of it.

## 3. Typography scale (inferred, do not copy weights or families)

| Role | Daylight (inferred) | Birch Prime plan |
|---|---|---|
| Display H1 | Serif, ~104–128 px, tight leading | Editorial serif with Macedonian Cyrillic (Cormorant Garamond / Fraunces) |
| Section H2 | Serif, ~64–88 px | Same serif, tighter cap |
| Body / lede | Sans-serif, 18–22 px | Manrope 18–20 px |
| Label | Uppercase sans, 11–13 px, letter-spacing ~0.14em | Manrope 500, 12 px, tracking 0.16em |
| Numeric / tabular | Monospaced-feeling sans, tabular figures | Manrope with `font-variant-numeric: tabular-nums` |

## 4. Color

Daylight: warm neutrals + sunlight metaphors + one deep accent for CTAs.
Birch Prime: **warm ivory, birch beige, graphite, and one controlled orange accent** — closer to raw material than to solar tech.

| Token | Value | Role |
|---|---|---|
| `--ivory` | `#F3ECDD` | Primary background |
| `--cream` | `#FAF5EA` | Secondary surface |
| `--birch` | `#D9C6A3` | Panel / texture accent |
| `--gold` | `#C69A2D` | Verified badge / hairline highlight |
| `--orange` | `#F45A1B` | CTA accent, sparingly |
| `--graphite` | `#181816` | Primary text, dark sections |
| `--soft-black` | `#23231F` | Body text on ivory |
| `--muted` | `#6E6B62` | Secondary text, labels |
| `--divider` | `rgba(24,24,22,0.14)` | Grid hairlines |

## 5. Navigation container

**Daylight:** clean sticky header, dark logo left, links center, single CTA right.
**Birch Prime plan:** a **floating rounded ivory container** that sits ~24 px below the top edge on desktop, with the logo left, links center, "Побарајте понуда" CTA right. Shrinks on scroll. Backdrop-blur when passing over imagery. On mobile: same rounded container with logo left, hamburger right; full-screen overlay menu on open.

## 6. Hero composition

**Daylight:** background image, overlaid headline, floating live-data widget top-right.
**Birch Prime plan:**
- Background: authorized Birch Prime material photograph (plywood edge, formwork stack, warehouse) with a subtle graphite gradient overlay for text contrast.
- Headline lower-left, ~clamp(3.8rem, 8.5vw, 9.5rem), controlled `<br>` breaks.
- Small ivory technical panel in upper-right with 2–3 spec chips: **Дебелина**, **Димензии**, **Класа** — verified values only.
- Grid hairlines visible over the image, reinforcing the "measured" identity.

## 7. Image treatment

- Daylight uses bright, naturally lit editorial imagery. No stock feel.
- Cropping is intentional — subjects are placed on the golden ratio, not centered.
- Images reveal on scroll with slight scale (1.05 → 1.0) and clip-path mask.

**Birch Prime:** same principles applied to material photography — birch veneer edges, formwork stacks, industrial floors. **Never centered by default.** Portrait or square crops in mid-page moments; full-bleed only in hero and CTA reveal.

## 8. Section transition rhythm

Daylight alternates: bright bright dark bright bright dark. The dark section is the CTA.
Birch Prime will mirror this rhythm: hero → ivory content → material spotlight → ivory content → **graphite CTA panel** → footer.

## 9. Footer

- Multi-column, large brand mark at top, links below, legal at the bottom.
- Sans-serif throughout, no serif.

**Birch Prime:** larger wordmark ("BIRCH PRIME") in oversized letter-spacing across the footer top, four columns of links, contact block, legal row at the bottom.

## 10. Do-not-copy list

- Solar/energy imagery
- The word "Daylight" or any variant
- The exact rounded-corner value of Daylight's nav container (we use our own)
- Daylight's typeface (unlicensed for us)
- Daylight's exact CSS variables or class names
- Daylight's exact scroll pin values
- Daylight's photography, video, illustration, or icon assets

Anything from Daylight is a **reference for feel**, not a source of pixels.
