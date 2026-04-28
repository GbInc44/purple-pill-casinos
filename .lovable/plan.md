## Pagination on /pechalbi

In `src/pages/Winnings.tsx`:

1. Add state: `const [visibleCount, setVisibleCount] = useState(6);`
2. Render `winnings.slice(0, visibleCount).map(...)` instead of the full array.
3. Below the grid, when `visibleCount < winnings.length`, render a centered button:
   - Label: `ПОКАЖИ ОЩЕ`
   - Style: rounded-full, px-8 py-3, bold uppercase, white text, gradient `linear-gradient(135deg, hsl(270,100%,55%), hsl(220,100%,55%))`, hover glow `0 0 24px hsla(270,100%,65%,0.6)`
   - On click: `setVisibleCount((c) => c + 6)`
4. Button auto-hides once all cards are visible.