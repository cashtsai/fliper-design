# Fliper Design

Build **FLiPER Design System** — a multi-page design-spec documentation site (like Apple HIG / Material / a Brand Atlas) that codifies FLiPER's existing design language so future app AND web redesigns reference one canonical source. zh-TW primary (English for section labels / token names). Destined for design.flipermag.com. The site itself must BE in the FLiPER design language (eat its own dog food).

Attached: `fliper-logo.png` — the official FLiPER logotype (black on transparent). Use it as the masthead logo (invert to near-white in dark mode via CSS filter). The brand wordmark always has a **lowercase i**: "FLiPER".

## The design language (this is authoritative — from the shipped iOS app FLiPERDesign package + FLiPER 4.0 brand)
FLiPER = **ink-and-paper monochrome surfaces + a single Shan House "dawn orange" accent**, editorial/magazine feel, "the cover is the design system."
Brand line: 「從渺小的自己出發,成為翻轉世界的人」. Tagline: Keep Exploring.

### Color tokens (light / dark) — document each with swatch, hex, and usage
- `ink` #1A1A1A / #F2F0EB — primary text
- `inkSoft` #333333 / #D4D1CC — secondary text / body
- `paper` #FAF8F3 / #161513 — page background
- `paperDeep` #EFEBE2 / #26261F — recessed background
- `card` #FFFFFF / #282826 — cards/surfaces
- `muted` #6E6A62 / #A39E96 — captions, metadata
- `faint` #B3AEA4 / #676460 — hairline-ish text, placeholders
- `border` rgba(0,0,0,.10) / rgba(255,255,255,.14) — hairlines/rules
- `accent` (dawn orange) **#A94700 / #E59B5B** — the single accent: links, editor's voice, small marks. Use SPARINGLY. (light = burnt action orange 5.85:1 on paper; dark = bright decorative orange)
- `tan` #B49A7C — warm neutral detail
- `success` #2BAB9F — status only (not an accent)
Show light+dark side by side. Note the rule: monochrome base, dawn orange is the ONLY accent, never fill large areas with it.

### Typography
- Display / headings: a slab-serif stack — **"Roboto Slab", "Noto Serif TC", Georgia, serif** (matches flipermag.com + the app's heading face). Big, confident.
- Serif title (covers/pull-quotes): **"Noto Serif TC", "Songti TC", serif**.
- Body: **"Noto Sans TC", system-ui, sans-serif**.
- Labels / kickers / the six-digit code: **monospaced** (ui-monospace), uppercase, letter-spaced, tabular-nums.
- Document a type scale (display/title/heading/body/caption/label) with sizes + weights + line-height. Show the "FLiPER" wordmark treatment (lowercase i) at display size.

### Spacing & Radius (from the app)
- Space scale: xxs 4 · xs 8 · sm 12 · md 16 · lg 20 · xl 24 · xxl 32 (px).
- Radius: sm 4 · md 6 · lg 8 · xl 12.

### Signature motifs (give each its own card + live example)
- **Hairline rule** — 1px border-color line, structural separator.
- **Diamond ornament ◆** — a tiny centered diamond flanked by hairlines, used to close/section (from the magazine cover).
- **Strong rule** — black .85 / white .80, heavy section break.
- **Masthead** — centered FLiPER logotype + hairline + tracked kicker; makes a screen feel like an issue.

### Components (the editorial system — each with description + live rendered example + the "why")
- **Byline** — `name ｜ column` (full-width ideographic bar separator); name in serif, column in muted sans.
- **Editor's Note** — a 4px dawn-orange vertical rule + serif body text + a tracked mono attribution line ("WHY WE PICKED IT ── FLiPER 編輯室"). This is "FLiPER speaking to the reader" — the ONE place the accent voice appears.
- **Edition code mark** — the six-digit code (post id), mono, letter-spaced 4, muted.
- **Cover card** — the daily-pick card: cover image, serif title, byline, category kicker, six-digit code.
- **Category kicker** — small tracked uppercase label (藝術 Creator / 設計 Idea / 品牌 Brand / 城市 City / 觀點 Opinion).
- **App Store download badge**, buttons (primary = ink, accent used only for the editorial voice / links).

### "The cover is the design system" — a dedicated page
Explain the FED cover system (serif title in Noto Serif TC, hairline rules, the diamond, the `name ｜ column` byline, category kicker, six-digit edition mark) and show a faithful recreated cover as the hero example — because the app + web both derive from it.

### Platforms page (so redesigns can map to it)
Two columns: **iOS** (the `FLiPERDesign` Swift package: FLiPERColor / FLiPERFont / FLiPERSpace / FLiPERRadius / FLiPEREditorial components) and **Web** (the flipermag.com theme: Roboto Slab headings, dawn-orange links, hairlines). State that both are generated from THIS spec.

## Structure (left sidebar nav, like a real design-system site)
Overview（品牌主張）· Foundations（Color / Typography / Spacing & Radius / Motifs）· Components（Byline / Editor's Note / Code Mark / Cover Card / Kicker / Buttons & Badge）· The Cover System · Patterns（Daily Pick / Editor's Voice / Become Tomorrow's Storyteller CTA）· Platforms（iOS / Web）.

## Treatment
Editorial, calm, premium — paper surfaces, generous whitespace, hairlines, the ◆ ornament, slab-serif display, dawn orange used only as the editorial accent. Light/dark themed (prefers-color-scheme + a manual toggle), responsive, each token/component copy-pastable (show the hex / the Swift token name / the CSS). Favicon from the FLiPER mark. Title: "FLiPER Design System". No backend.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://fliper-design.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/6d2d8866-b1c5-4490-948e-d478df871144).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
