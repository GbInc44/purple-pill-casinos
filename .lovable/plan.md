

## Goal
On the landing page only: add breathing room between the secondary tagline and the casino cards (replacing the removed neon divider with invisible spacing), and make the secondary text more structured/aligned so it sits cleanly under the main header.

## Changes

**`src/components/CasinoLayout.tsx`**
- Currently when `showDivider={false}` (landing page), the header sits directly above the cards with only `mb-4` of space. Replace this gap with an invisible spacer of comparable height to the previous neon divider block (`mb-12`).
- Implementation: when `showDivider` is false, render an invisible spacer `<div className="max-w-md mx-auto mb-12" aria-hidden />` in place of the divider so the vertical rhythm matches the other pages.

**`src/pages/Index.tsx`** — improve secondary text structure
- Constrain the secondary tagline to a readable measure so it doesn't stretch full-width under the shorter main title.
- Apply: `max-w-2xl mx-auto`, `leading-relaxed`, slightly increased top margin (`mt-3`), and balanced text wrapping (`text-balance` / `[text-wrap:balance]`) so the two lines break evenly under the main header.
- Keep current Orbitron font, neon glow, and `text-sm md:text-lg` sizes (per the user's previous explicit class choice).

## Scope
- Landing page (`/`) only for the spacing + text alignment refinements.
- No changes to `/novi-kazina`, `/top-10`, casino cards, nav, or footer.

