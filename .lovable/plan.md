## Goal
Make the H1 ("Всички лицензирани онлайн казина...") and the subtitle line directly below it on the landing page (`/`) easier to read against the busy casino background — without changing the overall look.

## Approach
Apply a subtle dark text-shadow to both the H1 and the subtitle `<span>` in `src/pages/Index.tsx`. This lifts the white text off the background image so the letters read crisply, while staying minimal and not introducing any glow or panel.

## Changes

**File:** `src/pages/Index.tsx`

- Add an inline `style` with a layered dark text-shadow to the H1:
  - `textShadow: "0 2px 6px rgba(0,0,0,0.7), 0 1px 2px rgba(0,0,0,0.9)"`
- Add the same (slightly lighter) shadow to the subtitle `<span>`:
  - `textShadow: "0 1px 4px rgba(0,0,0,0.75)"`

Two stacked shadows (a tight one + a soft one) give clean edges plus a gentle halo, which is what makes white text legible over photographic backgrounds.

## Out of scope
- No changes to other pages (Top 10, New Casinos, Winnings).
- No changes to colors, fonts, sizes, or the background.
- No new CSS utilities — kept inline so it only affects the landing page header.