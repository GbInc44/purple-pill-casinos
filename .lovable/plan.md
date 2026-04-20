

## Goal
Display the All Bet logo at its full size in the nav bar without increasing the nav bar's height.

## Approach
The logo is currently constrained by the nav bar's vertical padding (`py-2`), which clips/shrinks it. We'll let the logo overflow the bar vertically while keeping the bar itself slim.

## Changes

**`src/components/CasinoLayout.tsx`** — nav bar element:
- Allow the logo to render larger than the bar's content box without expanding the bar.
- Add `overflow-visible` to the `<nav>` so the logo isn't clipped.
- Increase the logo's height (e.g. `h-14 md:h-16`) and add a small negative vertical margin (`-my-3`) so it visually overflows the bar symmetrically while the bar's layout height stays the same.
- Keep `w-auto` so aspect ratio is preserved.

No other files need changes. Nav button sizes, spacing, and mobile menu behavior remain identical.

## Files touched
- `src/components/CasinoLayout.tsx`

