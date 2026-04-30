## Problem

When the "Очаквайте скоро" pop-up opens (clicking the Betwild card, or any card without a `url`), the whole page appears to get slightly wider, then snaps back when it closes.

### Root cause

Radix UI's Dialog (used by `src/components/ui/dialog.tsx`) locks body scroll while the dialog is open. To prevent the layout from jumping when the vertical scrollbar disappears, Radix adds inline styles to `<body>`:

- `overflow: hidden`
- `padding-right: <scrollbar-width>px` (typically ~15px on desktop, 0 on mobile where scrollbars overlay)

In our layout this padding is visible as a "widening" because:

1. The page background is `bg-fixed` on the root container (`CasinoLayout.tsx` line 43). The fixed background does not shift, but the content area gets the extra right padding — making the visible content area look offset/wider.
2. The nav is `sticky` and full-width; combined with the body padding it visually shifts.
3. On mobile (overlay scrollbars) the same Radix logic can still briefly toggle styles, producing a subtle reflow.

So this is not a Betwild-specific bug — it happens for any card that triggers `setComingSoonOpen(true)`. The user just notices it on Betwild because that's the card they click.

## Fix

Neutralize Radix's scrollbar compensation globally so the body width stays identical whether a dialog is open or not. This is a one-line CSS rule that overrides the inline styles Radix injects.

### Change

**`src/index.css`** — add a small global rule:

```css
/* Prevent layout shift when Radix Dialog/Sheet locks body scroll.
   Radix sets padding-right on <body> to compensate for the scrollbar;
   because our layout uses bg-fixed + sticky nav, that compensation
   reads as a visible "widening" of the page. We pin it to 0. */
body[data-scroll-locked] {
  margin-right: 0 !important;
  padding-right: 0 !important;
  overflow: hidden !important;
}
```

The `overflow: hidden` part keeps Radix's scroll-lock behavior (so the background page doesn't scroll while the dialog is open) — we only cancel the width-changing padding.

### Why this is safe

- Modern desktop browsers always show a scrollbar gutter on this page (content is taller than the viewport), so removing the compensation does NOT cause a separate "scrollbar disappears" jump — the gutter simply stays put.
- Mobile uses overlay scrollbars, so there's nothing to compensate for anyway.
- Applies only while a Radix overlay is open (`[data-scroll-locked]`), so normal page behavior is unaffected.
- The same fix automatically benefits the mobile `Sheet` menu (which uses the same Radix scroll-lock), if it ever exhibits a similar twitch.

### Files touched

- `src/index.css` — add the rule above (no other changes).

No changes to `CasinoLayout.tsx`, the dialog component, or any page.

## Verification

After the change:
1. Click a card without a URL (Betwild) on `/` and `/novi-kazina` at desktop width — page edges and nav must stay perfectly still on open and close.
2. Same on mobile viewport.
3. Open the mobile hamburger menu — should still lock background scroll correctly.