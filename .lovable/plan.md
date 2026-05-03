## Add Favicon (Slot Machine 777 Icon)

### What we will do
Use the uploaded slot machine image as the browser tab favicon for all pages.

### Steps

1. **Copy the uploaded image** into the project's `public/` folder as `favicon.png`:
   - Source: `user-uploads://360_F_171658134_AMFQMPJTYAGiGjMNgJBIAtAylnFHRSrR.jpg`
   - Destination: `public/favicon.png`

2. **Delete the existing** `public/favicon.ico` so browsers don't fall back to it when requesting `/favicon.ico` by default.

3. **Update `index.html`** — add inside `<head>`:
   ```html
   <link rel="icon" href="/favicon.png" type="image/png">
   ```

### Notes
- The image is a JPG saved as PNG (acceptable for favicon use). Browsers will scale it down to ~16x16 / 32x32 in the tab.
- The icon will show in the browser tab on every page (Home, Нови Казина, ТОП 10, Печалби) since `index.html` is shared.
- If you'd later prefer a sharper, square-cropped version optimized for tiny sizes, we can generate a proper multi-size `.ico`.