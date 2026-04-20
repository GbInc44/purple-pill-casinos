

## Goal
Fix the nav bar on mobile so the hamburger button stays fully inside the viewport.

## Cause
The logo uses `h-12` with `-my-2` negative vertical margin to overflow the slim bar. On narrow screens the logo's intrinsic width still pushes the row wider than expected, and combined with `px-4` padding the hamburger icon ends up clipped at the right edge. The nav also has no max-width guard and the icon button has no dedicated tap target spacing.

## Changes (single file: `src/components/CasinoLayout.tsx`)

1. **Constrain the nav row width** — wrap the inner flex row so it cannot overflow the viewport: add `w-full max-w-full` and ensure horizontal padding is respected (use `px-3 sm:px-4` on the `<nav>` so mobile gets a touch more breathing room without enlarging desktop).
2. **Prevent logo from pushing the hamburger off-screen** — keep `shrink-0` on the logo link but cap the logo height on mobile (`h-10 sm:h-12 md:h-14`) so it stays crisp and the row stays compact. Negative margin reduced to `-my-1 sm:-my-2` to match.
3. **Give the hamburger a guaranteed tap target inside the bar** — add `shrink-0 -mr-1` (or just `mr-0`) and `p-2` to the toggle button so the icon sits comfortably inside the right padding instead of flush with the edge.
4. **Make the mobile menu container full-width** — ensure the dropdown panel uses `w-full` so buttons don't overflow on small widths.

No CSS file changes needed; everything stays within Tailwind utilities and the existing `nav-bar` class.

## Files touched
- `src/components/CasinoLayout.tsx`

