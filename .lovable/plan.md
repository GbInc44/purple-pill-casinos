

## Goal
Redesign the casino cards on `/novi-kazina` into a full-width, horizontal layout — one card per row — while keeping the existing TOP 10 grid layout on `/` untouched.

## New card layout (novi-kazina only)

```text
┌─────────────────────────────────────────────────────────────────────────┐
│ [#]  ┌────────┐                                                         │
│      │  LOGO  │           ┌──────────────────┐         ┌──────────────┐ │
│      │        │           │   BONUS BANNER   │         │ ПОСЕТИ САЙТА │ │
│      └────────┘           └──────────────────┘         └──────────────┘ │
│       Casino Name                                                       │
└─────────────────────────────────────────────────────────────────────────┘
```

- **Left zone**: ranking badge (top-left of card), logo box, casino name directly under the logo.
- **Center zone**: bonus banner, horizontally centered within the card.
- **Right zone**: "Посети сайта" CTA button.
- One card per row, full width of the existing `max-w-6xl` container.
- Cards stacked vertically with the same spacing rhythm as today.

## Responsive behavior

- **Desktop / tablet (≥640px)**: horizontal 3-zone layout as drawn above using flexbox.
- **Mobile (<640px)**: zones stack vertically (logo + name on top, bonus in the middle, button at the bottom) so nothing gets squeezed. Card still spans full width.

## Implementation approach

1. **`CasinoLayout.tsx`** — add an optional `variant` prop (`"grid" | "list"`, default `"grid"`).
   - `grid` keeps the current `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` rendering (used by `/`).
   - `list` renders a single-column `flex flex-col gap-6` of full-width horizontal cards (used by `/novi-kazina`).
2. **`NewCasinos.tsx`** — pass `variant="list"`.
3. Preserve all existing styling: `glass-card`, hover neon border, ranking badge, gold badge gradient, button shimmer, entrance animation, referral link behavior (`href`, `target="_blank"`).
4. No changes to `Index.tsx`, `casinos.ts`, `App.tsx`, or `index.css` required (Tailwind utilities cover the new layout).

## Files touched
- `src/components/CasinoLayout.tsx` — add `variant` prop and the new horizontal card markup branch.
- `src/pages/NewCasinos.tsx` — pass `variant="list"`.

