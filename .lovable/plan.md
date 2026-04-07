

## Modern Redesign for All Casinos BG

### What changes

A visual modernization of the existing page while keeping the same structure (header, subtitle, casino grid, footer). No new pages or routes.

### Design direction

**Glassmorphism + neon accents** -- a trendy, premium casino aesthetic:

1. **Header area**: Add a subtle animated gradient glow behind the title. Use the Orbitron font with a text-shadow neon effect. Add a decorative divider line below the subtitle.

2. **Casino cards -- glass effect**: Replace the current flat dark cards with glassmorphism cards (backdrop-blur, semi-transparent background, subtle border gradient). Each card gets:
   - Larger logo area with rounded corners and a dark inner container
   - Casino name in bolder, slightly larger text
   - A gradient "Visit Site" button (purple-to-pink or purple-to-blue)
   - On hover: card lifts with transform, border glows purple, button pulses, logo goes full opacity
   - Numbered ranking badge (gold circle, top-left corner) to add visual hierarchy

3. **Background**: Keep the existing background image but add a very subtle animated gradient overlay (slow-moving purple/dark gradient) using CSS keyframes for a "living" feel.

4. **Grid layout**: Keep 1/2/3 column responsive grid but increase card padding and gap for a more spacious, premium feel.

5. **Footer**: Style with a glass panel effect, add a horizontal rule separator, keep the 18+ badge and responsible gambling text.

6. **CSS animations**: Add `@keyframes` for a slow background gradient shift, card entrance fade-in on load, and a subtle button shimmer effect on hover.

### Technical details

- **Files modified**: `src/pages/Index.tsx`, `src/index.css`
- **No new dependencies** -- pure Tailwind + CSS custom properties
- **Index.tsx**: Restructure card JSX to include ranking badge, larger logo container, gradient button. Add Tailwind classes for glassmorphism (`backdrop-blur-md`, `bg-white/5`, `border border-white/10`).
- **index.css**: Add new CSS variables for glass effects, update `--pill-bg` and `--pill-border`, add keyframe animations for background movement and card entrance. Add a `.glass-card` utility class.
- **Fonts**: Keep Orbitron, add it properly via Google Fonts import in `index.html` if not already present.
- All existing data (22 casinos, logos, names, URLs) stays identical.

