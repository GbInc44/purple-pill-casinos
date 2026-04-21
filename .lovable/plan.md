

## Goal
Add a "Плюсове / Минуси" (pros/cons) section to the center of each TOP-10 casino card, and move the bonus banner under the "Посети сайта" CTA on the right column — matched to the CTA's width. Start with **one example card (Bet365)** so you can review the design before rolling out to all 10.

## Visual layout (list variant, desktop)

```text
┌────────────────────────────────────────────────────────────────┐
│ [logo box]      Плюсове              Минуси        [Посети..]  │
│  Bet365         ✓ Бърз кешаут        ⊖ Ограничен..  [bonus  ]  │
│                 ✓ Голям избор слотове ⊖ Няма крипто            │
│                 ✓ 24/7 поддръжка                               │
└────────────────────────────────────────────────────────────────┘
```

On mobile (stacked): logo → pros/cons block (two columns side-by-side) → CTA → bonus banner under CTA.

## Data model

Extend `Casino` in `src/data/casinos.ts` with optional fields:
```ts
pros?: string[];
cons?: string[];
```
Populate them only for **Bet365** in this first pass (example). Other cards remain unchanged and simply won't render the section when arrays are absent.

## Component changes — `src/components/CasinoLayout.tsx` (list variant only)

Restructure the list card into 3 columns:

1. **Left** — unchanged: logo box + casino name (existing `w-full sm:w-56` block).
2. **Center (NEW)** — `flex-1` two-column grid:
   - Column header "Плюсове" in white, bold, Orbitron, small neon-purple underline.
   - Each pro: small green check tick (`lucide-react` `Check` icon, ~14px) inside a soft green circle (`bg-green-500/20`, `text-green-400`) + short white text.
   - Column header "Минуси" in white, bold, Orbitron.
   - Each con: small red circle (`bg-red-500`, `text-white`) containing a `Minus` icon (~14px) + short white text.
   - Stacks to 2 columns on `sm:` and above; single column on mobile (pros first, then cons).
   - Renders only if `pros?.length || cons?.length`.
3. **Right** — CTA on top, bonus banner directly below at the same width:
   - Wrap the existing CTA in a `flex flex-col gap-2 w-full sm:w-44 items-stretch` container.
   - Move the bonus banner (currently in the center column) into this container, below the CTA. Set its width to `w-full` so it matches the CTA pill width exactly. Keep the existing purple→blue gradient styling but reduce padding slightly (`py-1.5 px-3 text-sm`) so it visually balances the CTA pill.

The center "bonus" block in the existing list variant will be removed (bonus moves to the right column).

## Styling notes
- Pros/cons text: `text-white text-sm`, icons `h-4 w-4`, icon containers `h-5 w-5 rounded-full flex items-center justify-center shrink-0`.
- Section headers: `text-white font-bold text-sm tracking-wide` with `font-['Orbitron']`.
- Keep all existing glass-card, ranking badge, and animations untouched.

## Scope of this first pass
- Only **Bet365** gets sample pros/cons content so you can preview the design.
- Layout changes apply to **all list-variant cards**; cards without pros/cons just show an empty center area (still balanced because logo and CTA columns retain fixed widths).
- After approval of the look, we'll fill in pros/cons for the other 9 casinos in a follow-up.

## Files touched
- `src/data/casinos.ts` — add optional `pros` / `cons` fields; populate Bet365.
- `src/components/CasinoLayout.tsx` — restructure list-variant card (center pros/cons, right CTA + bonus stack).

