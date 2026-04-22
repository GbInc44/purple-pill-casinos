

## Goal
Darken the casino cards across all pages (landing, /top-10, /novi-kazina) to a metallic glass-grey tone while preserving the glass blur effect and keeping all inner content (logos, text, bonus pills, CTAs, pros/cons) untouched.

## Changes

**`src/index.css`** — update the `.glass-card` utility only:
- Replace the current near-transparent white background (`rgba(255, 255, 255, 0.07)`) with a darker, neutral metallic-grey gradient, e.g.:
  - `background: linear-gradient(135deg, rgba(40, 42, 50, 0.72), rgba(22, 24, 30, 0.78));`
- Keep `backdrop-filter: blur(16px)` and `-webkit-backdrop-filter` so the glass blur effect is preserved.
- Slightly strengthen the border for a metallic edge: `border: 1px solid rgba(255, 255, 255, 0.10);`
- Keep the existing hover state (purple neon border + glow) unchanged.

No changes to:
- Card inner elements (logo wrapper `bg-black/40`, bonus pill gradient, text, CTA buttons, ranking badge).
- `.glass-panel` (footer panel).
- Layout, spacing, or any page files.

## Result
Cards take on a darker, brushed-metal glass look that increases contrast against inner content (white text, gradient bonus pills, gold ranking badge become more readable), while the overall glassmorphism aesthetic and hover behavior stay intact.

