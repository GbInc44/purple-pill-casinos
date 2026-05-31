## Problem

The header logo `<Link to="/">` in `src/components/CasinoLayout.tsx` uses `aspect-[500/60]` with an absolutely-positioned `<img>` filling it. The source PNG (`all-bet-logo.png`) contains the visible slot + "All Bet" mark on the left side with transparent padding, so the link's hit area is much wider than the visible logo. Clicking the empty space next to the logo still navigates home.

## Fix

In `src/components/CasinoLayout.tsx`, change the logo `<Link>` so it wraps only the intrinsic size of the image:

- Remove `aspect-[500/60]`, `relative`, and the fixed-height variants from the `<Link>`.
- Remove `absolute left-0 top-0 h-full w-full` from the `<img>`.
- Give the `<img>` the responsive height (`h-10 sm:h-12 md:h-14`) with `w-auto`, so the anchor shrinks to the image's actual rendered width.
- Keep `shrink-0`, the negative vertical margins, `object-contain`, and `pointer-events-none` removed from the img (the img itself should receive the click).

Result: the clickable area matches the visible logo bounds on mobile, tablet, and desktop. No other files change.

## Verification

Reload `/` at 390px, tablet, and desktop widths; clicking just to the right of "All Bet" should no longer navigate, while clicking the slot icon or text should still go to `/`.