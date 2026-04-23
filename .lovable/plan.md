

## Goal
Make the landing page H1 (main title) and H2 (secondary tagline) look clean, minimal, and professional — matching the reference: a bold sans-serif H1 in solid white with no neon glow, and a calmer, lightweight, slightly muted body-style H2 also without the neon glow effect.

## Reference style (from screenshot)
- H1: large, very bold, tight tracking, pure white, no glow, no Orbitron — a modern geometric sans (Inter / system sans).
- H2: regular weight, soft white/grey (~80% opacity), normal line-height, no glow, left/center aligned cleanly under the title.

## Changes

**`src/pages/Index.tsx`** — replace the current `subtitle` prop content:
- H1 line ("Всички лицензирани онлайн казина в България на едно място.") — render with classes:
  - `text-3xl md:text-5xl font-extrabold tracking-tight text-white`
  - Font: Inter (already imported via Tailwind default sans) — drop Orbitron and remove the inline `textShadow` neon glow.
- H2 line ("Актуален списък с легални онлайн казина...") — render with:
  - `block mt-4 text-sm md:text-base font-normal text-white/70 max-w-2xl mx-auto leading-relaxed [text-wrap:balance] text-center`
  - No Orbitron, no neon glow, no `neon-text` class.

**`src/components/CasinoLayout.tsx`** — the wrapping `<p>` in the header currently forces Orbitron-like neon styling on whatever subtitle is passed in (`text-xl md:text-2xl font-bold neon-text` + Orbitron + textShadow). To keep `/top-10` and `/novi-kazina` unchanged, add an optional prop `cleanSubtitle?: boolean`:
- When `cleanSubtitle` is true (landing only), render the subtitle inside a plain wrapper with no Orbitron font, no `neon-text`, no inline textShadow — just `<div className="text-center">{subtitle}</div>` so the inner classes from `Index.tsx` fully control the look.
- When false/undefined (default), keep current behavior for the other two pages.

**`src/pages/Index.tsx`** — pass `cleanSubtitle` to `<CasinoLayout>`.

## Scope
- Landing page (`/`) only. `/top-10` and `/novi-kazina` keep their current Orbitron + neon styling.
- No changes to nav, cards, footer, or colors elsewhere.

## Result
Landing page header reads as a clean, professional hero: bold white H1 with a soft, readable H2 underneath — matching the reference screenshot's minimalistic typographic feel.

