# BIRCH_CONTENT_AUDIT.md

**Source:** https://birchprime.rs/ (Serbian Latin, WordPress + Drile theme)
**Audited:** 2026-07-23
**Purpose:** Catalogue everything the Macedonian site must carry over. Anything marked `CLIENT CONFIRMATION REQUIRED` must be verified with the client before publishing.

---

## 1. Discovered pages

| URL | Purpose | Notes |
|---|---|---|
| `/` | Home / naslovna | Hero, product pillars, industry cards, CTA |
| `/index.php/proizvodi/` | Product archive | 5+ product tiles, filtered by category |
| `/index.php/product/viseslojna-laminirana-glatka-oplata/` | Product 001 — F/F | |
| `/index.php/product/laminirana-hrapava-oplata/` | Product 002 — FWD1 | |
| `/index.php/product/neoblozena-sperploca-od-bele-breze/` | Product 003 — S/BB/WG/CP/CC | |
| `/index.php/product/zuta-premium-oplata-aa-bb/` | Product 004 — AA/BB Yellow | |
| `/index.php/product/premium-oplata-od-topole/` | Product 005 — Poplar | |
| `/index.php/kontakt/` | Contact | |
| `/index.php/moj-nalog/` | Sign in — B2B portal | Not required for Macedonian public site — hide until client confirms scope |
| Blog | 3 articles referenced from home | URLs `CLIENT CONFIRMATION REQUIRED` — theme article routes not consistently linked |

## 2. Products (verbatim + verified)

### 2.1 VIŠESLOJNA LAMINIRANA GLATKA OPLATA — F/F
- **Category:** Оплата (Formwork) — Popular
- **Slug (MK):** `viseslojna-laminirana-glatka-oplata`
- **Description (SR):** "Zlatni standard u primeni betonske oplate."
- **Classification code:** F/F (Film / Film) — do not translate
- **Surface:** Multi-layer laminated smooth phenol film on both faces
- **Application:** Concrete casting, professional formwork, high-reuse cycles
- **Thickness / dimensions:** `CLIENT CONFIRMATION REQUIRED` (typical BB birch F/F is 6.5–40 mm, 1220×2440 / 1250×2500 mm)
- **Reuse cycles:** `CLIENT CONFIRMATION REQUIRED`

### 2.2 LAMINIRANA HRAPAVA OPLATA — FWD1
- **Slug:** `laminirana-hrapava-oplata`
- **Description (SR):** "Jedna strana glatka, dok je druga strana rapava (mrežasta) — protivklizna."
- **Classification code:** FWD1
- **Surface:** One phenol film face, one wire-mesh anti-slip face
- **Applications:** Transport flooring, trailer floors, industrial platforms
- **Thickness / dimensions:** `CLIENT CONFIRMATION REQUIRED`

### 2.3 NEOBLOŽENA ŠPERPLOČA OD BELE BREZE — Premium, S(B), BB, WG(CP), CC
- **Slug:** `neoblozena-sperploca-od-bele-breze`
- **Description (SR):** "Čista, visokokvalitetna drvena ploča bez filmske obloge."
- **Classification codes:** Premium, S(B), BB, WG(CP), CC — do not translate
- **Surface:** Uncoated white birch, sanded
- **Applications:** Furniture, interior, laser-cut components, cabinetry
- **Thickness / dimensions:** `CLIENT CONFIRMATION REQUIRED`

### 2.4 ŽUTA PREMIUM OPLATA — AA, BB
- **Slug:** `zuta-premium-oplata`
- **Description (SR):** "Visokokvalitetna drvena ploča zaštićena melaminskim smolnim premazom."
- **Surface:** Melamine resin coating, yellow finish
- **Applications:** Formwork, cabinetry, general construction
- **Thickness / dimensions:** `CLIENT CONFIRMATION REQUIRED`

### 2.5 PREMIUM OPLATA OD TOPOLE — AA, BB/BB, BB/CC, CC/DD
- **Slug:** `premium-oplata-od-topole`
- **Description (SR):** "Ekonomično i pouzdano rešenje" od topole.
- **Surface:** Poplar veneer, film-faced
- **Applications:** Economy formwork, lightweight construction
- **Thickness / dimensions:** `CLIENT CONFIRMATION REQUIRED`

## 3. Industries / applications

Three declared pillars on home:
1. **Građevinarstvo** (Construction) — formwork, concrete casting, reusable panels
2. **Transport** (Transport) — trailer floors, container flooring, anti-slip surfaces
3. **Nameštaj i enterijer** (Furniture & Interior) — cabinetry, aesthetic paneling, interior finishing

## 4. Company / tagline claims

- "Kvalitet bez kompromisa" → **Квалитет без компромис**
- "Tehnička superiornost za zahtevne industrije" → **Техничка супериорност за барни индустрии**
- "40% veća otpornost na vlagu i habanje" (phenol film claim) → **`CLIENT CONFIRMATION REQUIRED`** — quantitative claim, must be verified before publishing

## 5. Contact (verbatim)

- **Email:** kontakt@birchprime.rs
- **Phone 1:** +381 69 600 165
- **Phone 2:** +381 69 187 5424
- **Address:** Cara Konstantina 10, Beograd, Srbija
- **Working hours:** `CLIENT CONFIRMATION REQUIRED`
- **Company registration:** `CLIENT CONFIRMATION REQUIRED`
- **Social:** none found on public site — `CLIENT CONFIRMATION REQUIRED`
- **MK address:** `CLIENT CONFIRMATION REQUIRED` — public site targets Macedonia; local address may or may not exist

## 6. Media discovered

- `wp-content/uploads/2026/02/bglogomaindark-scaled.png` — main dark logo
- `wp-content/themes/drile/images/prod_loading.gif` — theme placeholder, do NOT reuse
- Product feature imagery: served via WordPress uploads — download only what the client authorizes

## 7. Blog

Three teaser cards on home reference:
1. Guide to plywood categories & applications
2. Birch wood benefits in formwork
3. How to identify high-quality plywood

**Full article bodies:** `CLIENT CONFIRMATION REQUIRED` — headline text confirmed, but the full article text was not surfaced in the initial fetch and must be re-scraped with the client's permission before we ship blog pages.

## 8. Content gaps requiring client input

- Exact thickness / dimension ranges per product
- Load capacity / reuse-cycle claims
- Certifications (EN 13986? CE? FSC?)
- Working hours & Macedonia-specific contact details
- Warehouse locations
- Any pricing / MOQ information
- Full blog article bodies
- Social media handles
- Team photos / company photography
- Downloadable technical PDFs / catalogues

## 9. Translation risk register

| Term | Risk | Mitigation |
|---|---|---|
| Classification codes (F/F, FWD1, S, BB, WG, CP, CC, AA, DD) | High — must never be translated | Keep verbatim in Latin |
| "Šperploča" | Medium — literal Macedonian equivalent is `шперплоча`, but the plural pattern differs | Use `шперплоча / шперплочи` |
| "Oplata" | Medium — `оплата` reads correctly in MK | Verified |
| "Nameštaj" | Low — MK uses `мебел` | Verified |
| "Enterijer" | Low — MK uses `ентериер` | Verified |
| "40% veća otpornost" quantitative claim | High — legal/marketing risk | Do not publish until client confirms with test data |
