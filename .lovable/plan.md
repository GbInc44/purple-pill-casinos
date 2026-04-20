

## Make the Logo Larger in the Nav Bar

### What changes

Your 500x500 source PNG has plenty of resolution — the limit is the CSS height we apply. Currently it's `h-14 md:h-16` (56px / 64px). I'll increase it so the logo reads clearly without overpowering the bar.

### Recommended sizes

Since the logo is square (500x500), height = width on screen. To keep the nav bar balanced:

- **Mobile**: `h-16` (64px) — leaves room next to the hamburger
- **Desktop**: `h-20` (80px) — prominent but not dominant

The nav bar will grow slightly to accommodate the taller logo (it auto-sizes from `py-3` padding + content height). This is fine — it stays compact.

### Change

**`src/pages/Index.tsx`** — single line update:

```tsx
<img src={allBetLogo} alt="All Bet" className="h-16 md:h-20 w-auto" />
```

(was `h-14 md:h-16`)

### If you want it even bigger

Quick reference for alternatives:
- `h-20 md:h-24` → 80px / 96px (large)
- `h-24 md:h-28` → 96px / 112px (very large, nav bar becomes a banner)

I'll go with **`h-16 md:h-20`** as the balanced default. Tell me after you see it if you want to bump it up further.

