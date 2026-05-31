## Problem

In `src/components/CasinoLayout.tsx`, the root wrapper uses `bg-fixed` (CSS `background-attachment: fixed`) together with `bg-cover`. On mobile browsers the URL/toolbar collapses and expands during scroll, which changes the viewport height. Since the fixed background is sized to the viewport, it gets re-scaled on every toolbar transition, producing the visible zoom-in/zoom-out effect.

Desktop is unaffected because the viewport height does not change during scroll.

## Fix

Replace the single `bg-fixed` class with a responsive variant so the fixed attachment only applies on larger screens:

- Mobile/tablet: use the default `background-attachment: scroll` — the background scrolls with the page and never re-scales.
- Desktop (`md:` and up): keep `bg-fixed` for the existing parallax-style look.

Concretely, in `CasinoLayout.tsx` change the wrapper class from:

```
bg-cover bg-center bg-fixed bg-no-repeat
```

to:

```
bg-cover bg-center bg-no-repeat md:bg-fixed
```

No other files need to change. This preserves the current desktop look while eliminating the mobile zoom artifact.

## Notes

- This is purely a CSS/presentation change in one file — no logic, data, or layout changes.
- An alternative (using `100svh` or a separately positioned fixed background layer) is more invasive and not needed to resolve the reported issue.
