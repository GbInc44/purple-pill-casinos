## Goal

Add a centered "Последвайте ни в:" line followed by a clickable Facebook icon that opens https://www.facebook.com/allbetbg in a new tab. It should appear below the disclaimer paragraph "AllBet е независим източник..." on all pages (Home, Нови Казина, ТОП 10, Печалби).

## Where

The disclaimer paragraph lives in two places — both footers must be updated to keep all pages consistent:

1. `src/components/CasinoLayout.tsx` — used by `/`, `/novi-kazina`, `/top-10`
2. `src/pages/Winnings.tsx` — used by `/pechalbi`

## What to add

Directly below the existing `<p>AllBet е независим източник...</p>`, insert:

```tsx
<div className="mt-6 flex items-center justify-center gap-3 text-white text-sm">
  <span>Последвайте ни в:</span>
  <a
    href="https://www.facebook.com/allbetbg"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Последвайте ни във Facebook"
    className="inline-flex items-center justify-center h-9 w-9 rounded-full text-white transition-all hover:shadow-[0_0_20px_hsla(270,100%,65%,0.6)] hover:scale-110"
    style={{ background: "linear-gradient(135deg, hsl(270,100%,55%), hsl(220,100%,55%))" }}
  >
    <Facebook className="h-5 w-5" />
  </a>
</div>
```

The `Facebook` icon comes from `lucide-react` — add it to the existing `lucide-react` import at the top of each file.

## Styling notes

- Centered horizontally (flex + justify-center).
- Uses the existing brand purple→blue gradient already used by CTA buttons for visual consistency.
- Subtle hover: neon purple glow + slight scale, matching the site's neon aesthetic.
- Spacing: `mt-6` separates it from the disclaimer paragraph above.

## Out of scope

- No other social networks.
- No changes to the existing 18+ responsible-gambling block or the disclaimer text itself.
