## Goal

Tighten the casino cards on the **Нови Казина** page so they're narrower (don't stretch full page width) and have less empty space between the logo, banner image, caption, bonus pill, and CTA button — both on desktop and mobile.

## Changes

All changes happen in `src/components/CasinoLayout.tsx`, in the `variant === "list"` branch (used by NewCasinos via `showProsCons`). NewCasinos.tsx and the data file stay unchanged.

### 1. Narrower container

- Change the list wrapper from `max-w-6xl` → `max-w-3xl` so cards no longer span the full width.
- Reduce vertical gap between cards from `gap-6` → `gap-4`.

### 2. Tighter card padding

- Card padding: `px-5 py-5 sm:px-8 sm:py-6` → `px-4 py-4 sm:px-5 sm:py-4`.
- Inner flex gap: `gap-6` → `gap-4`.

### 3. Smaller left column (logo + name)

- Width: `lg:w-56` → `lg:w-40`.
- Logo box height: `h-24` → `h-20`, and `lg:w-48` → `lg:w-36`.
- Reduce stack spacing `gap-2` → `gap-1.5`.

### 4. Tighter center column (image + caption)

In the `centerImage` / `centerCaption` block (the one used by Everbet, Slotino, Admiral Bet, Magic Bet, Betwild):
- Outer wrapper: `gap-3 py-2` → `gap-2 py-0`.
- Image box: `h-24` → `h-20`, `max-w-xs` → `max-w-[260px]`.
- Caption text size: `text-sm sm:text-base` → `text-xs sm:text-sm` and reduce its top spacing implicitly via the smaller gap.

### 5. Tighter right column (CTA + bonus pill)

- Width: `lg:w-44` → `lg:w-40`.
- Stack gap: `gap-2` → `gap-1.5`.
- CTA padding: `px-6 py-2` → `px-5 py-1.5`.
- Bonus pill: `py-1.5 px-3 text-sm` → `py-1 px-3 text-xs`.

### 6. Ranking badge

Keep position but nudge inside the new tighter padding (no class change needed; `top-3 left-3` still works).

## Result

- Cards become a centered, narrower column (~768px max) instead of full 1152px.
- Logo, banner image, caption, bonus, and CTA sit closer together vertically and horizontally.
- Mobile stacking remains, but with reduced row gaps so each card feels more compact.

## Out of scope

- No changes to the `/top-10` page layout (it uses pros/cons branch, untouched).
- No changes to card content or imagery.
