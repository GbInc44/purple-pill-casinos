

## Replace Title with Logo (Logo Left, Buttons Right)

### What changes

Replace the centered "ALL CASINOS BG" text with the uploaded "All Bet" logo. Logo goes on the **left**, buttons on the **right**. On mobile, the hamburger menu moves to the **right** side.

### Steps

1. **Save the logo**: Copy `user-uploads://All_Bet-removebg-preview_1.png` to `src/assets/all-bet-logo.png`.

2. **`src/pages/Index.tsx`** — restructure the nav layout:
   - Import the logo: `import allBetLogo from "@/assets/all-bet-logo.png";`
   - Remove the absolute-centered `<h1>` "All Casinos BG" and the `flex-1` spacer
   - Change the nav inner container from `flex items-center relative` to `flex items-center justify-between`
   - **Left side**: `<img src={allBetLogo} alt="All Bet" className="h-10 w-auto" />`
   - **Right side (desktop)**: the three buttons group (`hidden md:flex items-center gap-2`)
   - **Right side (mobile)**: the hamburger toggle button (`md:hidden`)
   - Mobile dropdown stays below as-is

### Recommended logo sizing

The nav bar is ~56–64px tall. The logo will display at:
- **Desktop**: 40px tall (`h-10`)
- **Mobile**: same 40px (looks good at this size given the horizontal aspect)

For best crispness on retina displays, the source PNG should be **at least 80px tall** (2x). The uploaded image is already a good horizontal aspect ratio (~4:3), so it will fit nicely without stretching the bar.

### Visual result

```text
Desktop:  [LOGO] ............... [Нови Казина] [Печалби] [Бонуси]
Mobile:   [LOGO] ............................................ [☰]
```

No CSS changes needed — existing `.nav-bar` and `.nav-btn` styles are reused.

