## Problem

`object-cover` fills the banner but crops the top/bottom of the "Palms Bet" wordmark. The logo image itself has a dark-blue background, so when we use `object-contain` it shows letterboxing against the card's black background.

## Proposed fix

In `src/pages/PalmsBetReview.tsx` (logo container around line 209-211):

1. Switch the `<img>` back to `object-contain` so no part of the logo is cut.
2. Make the container's background match the logo's blue (`#0d1b3d`-ish navy) so the contained image visually fills the banner with no visible empty space.
3. Increase the banner height (e.g. from `h-24` to `h-32 sm:h-36`) and remove inner padding so the wordmark reads larger and centered.
4. Keep `overflow-hidden` and the rounded corners intact.

Result: the full "Palms Bet" logo is visible, nothing is cropped, and the banner still looks like one solid filled block instead of a small logo on a black card.

## Alternative (if you'd rather keep the current height)

Crop a tighter version of the logo asset (trim the empty navy padding around the wordmark) and keep `object-cover` — this way cover doesn't cut letters because the source no longer has extra vertical space.

Let me know which direction you prefer and I'll implement it.