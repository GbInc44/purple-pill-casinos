## Goal
When the user clicks the Betwild card on either the landing page (`/`) or the New Casinos page (`/novi-kazina`), show a styled popup with the text "Очаквайте скоро" and an X close button in the top-right corner. The popup should match the site's glassmorphism / neon aesthetic.

## Approach

Replace Betwild's current "do nothing" behavior with a click handler that opens a modal. We'll use the existing shadcn `Dialog` component (already in the project) and re-style its content panel to match the glass-card / neon style used across the site.

## Changes

### 1. `src/components/CasinoLayout.tsx`
- Add local state: `const [comingSoonOpen, setComingSoonOpen] = useState(false)`.
- Import `Dialog`, `DialogContent` from `@/components/ui/dialog` and the `X` icon from `lucide-react` (Menu and X are already imported).
- For both the grid and list `<a>` renderings of the casino cards, update the `onClick` handler:
  - If `casino.name === "Betwild"` (or, equivalently, no `url`): `e.preventDefault(); setComingSoonOpen(true);`
  - Existing behavior for cards with `url` is unchanged.
- Render a single `<Dialog open={comingSoonOpen} onOpenChange={setComingSoonOpen}>` near the end of the layout (inside the relative container).
  - Use a custom `DialogContent` className that mirrors the glass-card look:
    - `glass-panel` background, `rounded-2xl`, neon purple border (`border border-[hsla(270,100%,65%,0.5)]`), backdrop blur, purple glow shadow.
    - Centered content with the text "Очаквайте скоро" styled with the Orbitron font and neon purple text-shadow (matching headers used elsewhere in the layout).
  - The default shadcn `DialogContent` already includes a top-right X close button — we'll keep it but ensure its color contrasts against the dark panel (white/neon).

### 2. No changes to `src/data/casinos.ts`
- The Betwild entry stays without a `url`; the click handler distinguishes it.

## Style details
- Panel: `bg-[hsla(270,50%,6%,0.98)] backdrop-blur-xl border-[hsla(270,100%,65%,0.5)] shadow-[0_0_40px_hsla(270,100%,65%,0.35)]`
- Heading text: `font-['Orbitron'] text-2xl md:text-3xl font-bold text-white` with `textShadow: "0 0 8px hsla(270,100%,65%,0.6), 0 0 30px hsla(270,100%,65%,0.3)"`
- X button: inherits from `DialogContent` (top-right). Override classes to `text-white hover:text-[hsl(270,100%,75%)]` so it remains visible on the dark glass.

## Pages affected automatically
Both `/` (Index) and `/novi-kazina` (NewCasinos) render through `CasinoLayout`, so the single change covers both. The `/top-10` and `/pechalbi` pages don't include Betwild, so they're unaffected.