

## Add Navigation Bar

### What changes

Add a fixed/sticky navigation bar at the top of the page with:
- Left side: Three buttons — "Нови Казина", "Печалби", "Бонуси"
- Center: The "ALL CASINOS BG" header text (moved from current position)
- Background: The same neon purple used for card hover borders (`hsl(270, 100%, 65%)`)

### Changes

**`src/pages/Index.tsx`**:
- Add a `<nav>` element at the top, before the current content
- Move the "ALL CASINOS BG" title into the nav bar, centered
- Add three navigation buttons on the left side with text: "Нови Казина", "Печалби", "Бонуси"
- Keep the subtitle paragraph below the nav bar in its current position
- Use flexbox: `justify-between` with left buttons group, centered title, and an empty right spacer for balance

**`src/index.css`**:
- Add a `.nav-bar` utility class with the purple background (`hsl(270, 100%, 65%)`) matching `--neon-purple`, slight transparency, backdrop blur, and a subtle bottom glow/shadow
- Style nav buttons with a semi-transparent hover state

### Visual result
- A purple navigation bar spans the full width at the top
- "Нови Казина | Печалби | Бонуси" buttons sit on the left
- "ALL CASINOS BG" is centered in the bar
- The bar color matches the purple glow used on card borders

