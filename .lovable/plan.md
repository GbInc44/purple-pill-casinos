

## Make Casino Cards Vibrant by Default, Purple Glow on Hover

### What changes

Swap the current visual states: cards will look "active" (bright, colorful) by default, and on hover only the border glows purple -- no lift, no scale, no background change.

### Changes

**`src/index.css`** -- Update `.glass-card` and `.glass-card:hover`:

- **Default state**: Use the current hover background (`rgba(255, 255, 255, 0.07)`), add subtle border visibility
- **Hover state**: Keep same background, only add purple border color and purple glow box-shadow. Remove `transform` (no lift/scale). Remove background change.

**`src/pages/Index.tsx`**:

- Change logo `opacity-50 group-hover:opacity-100` to just `opacity-100` (logos always visible)
- Change `text-white/90 group-hover:text-white` to just `text-white` (name always bright)

### Summary of visual behavior

- **Before hover**: Cards are bright, logos fully visible, text white
- **On hover**: Only a purple neon border glow appears around the card, button shimmer still plays

