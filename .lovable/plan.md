## Goal
Make the AllBet logo at the top-left of every page (desktop and mobile) link to the landing page (`/`), but limit the clickable area to **only the visible "All Bet" artwork** — not the transparent space to its right.

## Why the current logo is "too wide" to click
The logo file `src/assets/all-bet-logo.png` is 500×60 pixels, but the visible artwork only occupies the left ~179px (about 36% of the width). The remaining ~64% is transparent padding baked into the PNG. The `<Link>` in `src/components/CasinoLayout.tsx` currently wraps the whole `<img>`, so clicks on that empty padded area still navigate to `/`.

It already links to `/` — that part works. The issue is purely the clickable surface area.

## Approach
Constrain the `<Link>` (and its inner `<img>`) to the width of the visible artwork by:
1. Setting a fixed aspect-ratio-based width on the link that matches the visible portion of the PNG.
2. Letting the image fill that constrained box via `object-contain` and `object-left`, so the visible logo stays the same size but no transparent area is included in the clickable region.

Visible artwork ratio: 179 / 60 ≈ **2.98**, so width ≈ height × 2.98.

```text
Before:                                 After:
┌──────────────────────────────────┐   ┌──────────┐
│ [AllBet]   <— all clickable —>   │   │ [AllBet] │  <— only this clickable
└──────────────────────────────────┘   └──────────┘
```

## Changes

### `src/components/CasinoLayout.tsx`
Update the logo `<Link>` (currently the only place the logo is rendered — it's used by every page via `CasinoLayout`):

- Add `inline-block` and `aspect-[179/60]` to the `<Link>` so its width is locked to the visible artwork's aspect ratio at each responsive height.
- Keep the existing responsive heights (`h-10 sm:h-12 md:h-14`) on the `<Link>` instead of the `<img>`, so the link element itself defines the click target size.
- On the `<img>`, use `h-full w-full object-contain object-left` so the logo renders identically to today (same visible size, same left alignment, same `-my-1 sm:-my-2` vertical nudge preserved on the link).

Result: clicking anywhere on the "All Bet" graphic navigates to `/`; clicking to the right of it does nothing (the area is no longer part of the link).

### No other files need changes
- `Index.tsx`, `NewCasinos.tsx`, `Top10.tsx`, `Winnings.tsx`, `NotFound.tsx` all render through `CasinoLayout`, so a single edit covers desktop and mobile across every page.
- The mobile hamburger menu and the rest of the nav are untouched.

## Verification
After the change, on `/`, `/novi-kazina`, `/top-10`, and `/pechalbi`, at both desktop and mobile widths:
- Clicking the visible "All Bet" logo navigates to `/`.
- Clicking in the empty space immediately to the right of the logo (but still left of the desktop nav buttons / mobile menu icon) does nothing.
