

## Goal
Restyle the navigation buttons (Нови Казина, ТОП 10, Печалби) so they have a transparent inner fill (showing the nav bar behind them) with a yellow border and yellow text, instead of the current solid gold gradient fill.

## Changes

**`src/index.css`** — update `.nav-btn` and `.nav-btn-active` utility classes:

- `.nav-btn`:
  - Replace gold gradient `background` with `background: transparent;`
  - Change `color` from cream (`#F0EAD6`) to yellow (`hsl(45, 100%, 55%)`)
  - Add `border: 1px solid hsl(45, 100%, 55%);`
  - Remove the inset highlight/shadow layers (they assume a filled button); keep a subtle outer glow only
  - Hover: keep transparent background, intensify yellow glow (`box-shadow: 0 0 14px hsla(45, 100%, 55%, 0.55)`), slightly brighten border/text via `filter: brightness(1.1)`
  - Active (pressed): subtle inset shadow, no fill change

- `.nav-btn-active` (current page indicator):
  - Keep transparent background as well, but use a stronger/brighter yellow glow and a slightly thicker visual weight (e.g. `border-color` brighter + stronger `box-shadow`) so the active page is still distinguishable
  - Yellow text remains

**`src/components/CasinoLayout.tsx`** — no structural changes needed. The existing inline `border border-white` Tailwind classes on the nav buttons currently override the CSS border. Remove `border border-white` from the three nav button `className` strings (both desktop and mobile menu) so the new yellow border from `.nav-btn` is visible.

## Scope
- Affects nav buttons on all pages (landing, /top-10, /novi-kazina) since they share `CasinoLayout`.
- No changes to CTA buttons (`btn-gradient`), cards, or any other styling.

