# Plan: Add Efbet Affiliate Banner to Landing Page

## Goal
Place the provided affiliate JavaScript banner between the H1/H2 text and the casino cards grid on the landing page (`/`).

## How It Works
The affiliate script (`<script src="https://js.efbet.com/javascript.php?..." />`) loads external JavaScript that renders a banner. Since React does not execute scripts injected via JSX, we will mount the script into the real DOM inside a container `<div>`.

## Steps

1. **Create an `ExternalScript` component** (`src/components/ExternalScript.tsx`)
   - Accepts `src: string` and `containerId?: string`.
   - Uses a `useEffect` to create a `<script>` element, set its `src` and `type`, append it to a container `div` ref, and clean it up on unmount.
   - Renders an empty `<div>` that serves as the mount point for whatever HTML the script injects.

2. **Extend `CasinoLayout` with an optional `banner` prop**
   - Add `banner?: ReactNode` to the `Props` interface.
   - Render `{banner}` between the header section (subtitle / divider) and the casino cards grid/list.

3. **Wire it into `Index.tsx`**
   - Import `ExternalScript`.
   - Pass it as the new `banner` prop to `CasinoLayout` with the provided `src` URL.

## Result
- The banner will appear on `https://www.allbetbg.com/` only.
- No impact on other pages (`/top-10`, `/novi-kazina`, `/pechalbi`).
- The script is loaded and removed cleanly when the component unmounts.

## Technical Note
React intentionally ignores `<script>` tags rendered in JSX for security. Appending the script to the DOM via `useEffect` is the standard, safe way to load third-party scripts that need to execute inside a React app.