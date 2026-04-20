

## Goal
Modernize the top navigation bar with a darker purple, glassy look and a subtle neon glow that matches the site's glassmorphism aesthetic — while keeping the gold nav button colors intact, just refined.

## Visual direction

**Bar**
- Swap the bright purple (`hsla(270,100%,65%,0.85)`) for a deep, glassy dark purple consistent with the rest of the site's glass panels.
- Add a soft neon-purple outer glow (bottom shadow) and a thin neon-purple bottom border so the bar feels like it belongs to the same neon family as the dividers and cards.
- Stronger backdrop blur for a more premium frosted-glass feel.
- Subtle inner top highlight (1px translucent white) for depth.

```text
┌──────────────────────────────────────────────────────────┐
│  [logo]                          [btn] [btn] [btn]   ☰   │   ← deep purple glass + blur
└──────────────────────────────────────────────────────────┘   ← thin neon-purple line + soft glow
```

**Buttons (keep gold, modernize)**
- Same gold base color, but:
  - Slightly tighter pill with a soft inner gradient (gold → gold-dark) instead of flat fill, giving a 3D/metallic feel.
  - Crisper typography (slightly increased letter-spacing already in place).
  - Hover: brighter sheen + warm gold glow ring (already partially present, refined).
  - Active/pressed: subtle inset shadow.
- Mobile menu items inherit the same refined style.

## Changes

**`src/index.css`** — `.nav-bar` and `.nav-btn` utilities:
- `.nav-bar`: replace background with a dark purple glass gradient (e.g. `linear-gradient(180deg, hsla(270,40%,10%,0.85), hsla(270,50%,6%,0.9))`), increase `backdrop-filter` blur, add `border-bottom: 1px solid hsla(270,100%,65%,0.35)`, replace box-shadow with a soft neon glow `0 4px 24px hsla(270,100%,55%,0.25)`, and add a 1px top inset highlight.
- `.nav-btn`: switch flat gold to a subtle gradient `linear-gradient(135deg, hsl(45,100%,55%), hsl(45,90%,42%))`, add a soft inner shadow for depth, refine hover (stronger gold glow, slight brightness lift), and add an active state.

**No changes** to `CasinoLayout.tsx` (utility classes already applied) or to the button color tokens.

## Files touched
- `src/index.css`

