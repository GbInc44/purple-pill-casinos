## Goal

Generate static HTML files at build time for `/`, `/novi-kazina`, `/top-10`, and `/pechalbi` so that:
- Each page's HTML response contains its own `<link rel="canonical">` (no JS needed).
- Each page can have its own `<title>`, `<meta description>`, and Open Graph tags in the initial HTML.
- The site stays a SPA after hydration (no behavior change for users).

## Approach

Use **`vite-prerender-plugin`** (actively maintained, Vite 5 compatible, used by the Preact team). It runs after `vite build`, spins up the bundled app in a sandboxed Node environment, renders each configured route to static HTML, and writes `dist/<route>/index.html`. No Puppeteer, no extra browser download in CI.

Why not the originally-named `vite-plugin-prerender`: it targets older Vite/Webpack and is unmaintained. `vite-prerender-plugin` is the current equivalent and works cleanly with our existing Vite 5 + React 18 + react-router setup.

## Changes

### 1. Add dependency
- Add `vite-prerender-plugin` as a dev dependency.

### 2. `vite.config.ts`
- Import and register the prerender plugin with:
  - `renderTarget: '#root'`
  - `prerenderScript: 'src/prerender.tsx'` (entry that exports an async `prerender(url)` function)
  - `additionalPrerenderRoutes: ['/', '/novi-kazina', '/top-10', '/pechalbi']`

### 3. New file: `src/prerender.tsx`
Exports an async `prerender(url)` that:
- Imports `App` and renders it inside a `StaticRouter` (from `react-router-dom/server`) with the requested `url`.
- Uses `renderToString` from `react-dom/server` to produce HTML.
- Computes per-route SEO data (title, description, canonical, og:url) from a small map keyed by path:
  ```
  '/'             → AllBet — Онлайн казина в България
  '/novi-kazina'  → Нови онлайн казина в България
  '/top-10'       → ТОП 10 онлайн казина в България
  '/pechalbi'     → Обявени печалби от онлайн казина
  ```
- Returns `{ html, head: { title, elements: Set<{ type, props }> } }` so the plugin injects the right `<title>`, `<meta name="description">`, `<link rel="canonical">`, and OG tags into `<head>` per route.

### 4. `src/App.tsx`
- Detect whether we are in the prerender (Node) environment vs browser. If running in Node (no `window`), render with `StaticRouter` (provided by the prerender entry), otherwise keep `BrowserRouter`. Cleanest pattern: keep `App` router-agnostic by moving `BrowserRouter` into `main.tsx` and having `prerender.tsx` wrap with `StaticRouter`.
- Refactor:
  - `App.tsx` exports just the `<Routes>` tree + providers (no Router).
  - `main.tsx` wraps `<App />` in `<BrowserRouter>`.
  - `prerender.tsx` wraps `<App />` in `<StaticRouter location={url}>`.

### 5. `src/hooks/useCanonicalUrl.ts`
- Keep as-is. It still runs after hydration and is harmless (it sets href to the same value the static HTML already has). It also keeps client-side navigation correct for any future routes that aren't pre-rendered.

### 6. `index.html`
- Remove the hardcoded `<link rel="canonical">`, `<title>`, `<meta description>`, and OG tags — the prerender plugin will inject the correct per-route values. Keep generic fallbacks only for any non-pre-rendered URL.
- Actually keep them as sensible defaults for the dev server (so local `vite dev` still has reasonable meta), but the prerender output overrides them in the built files.

### 7. `.github/workflows/deploy.yml`
- No changes needed — `bun run build` already triggers the plugin. The existing "Create SPA 404 fallback" step (`cp dist/index.html dist/404.html`) keeps client-side routing working for unknown URLs.
- Optional small improvement: verify pre-rendered files exist after build:
  ```
  test -f dist/novi-kazina/index.html
  test -f dist/top-10/index.html
  test -f dist/pechalbi/index.html
  ```

## Resulting build output

```text
dist/
  index.html              ← canonical https://www.allbetbg.com/
  novi-kazina/index.html  ← canonical https://www.allbetbg.com/novi-kazina
  top-10/index.html       ← canonical https://www.allbetbg.com/top-10
  pechalbi/index.html     ← canonical https://www.allbetbg.com/pechalbi
  404.html                ← copy of root for SPA fallback
  assets/...
```

GitHub Pages serves `/<route>/index.html` for `/<route>` requests automatically, so URLs stay clean (no `.html` suffix, no redirects).

## Verification (after implementation)

1. `bun run build` locally.
2. `cat dist/novi-kazina/index.html | grep canonical` → shows `https://www.allbetbg.com/novi-kazina`.
3. `bun run preview` and load `/novi-kazina` directly — page works, "View Source" shows the correct canonical without JS.
4. Confirm hydration is clean (no React mismatch warnings in console).

## Risks / notes

- **Hydration mismatches**: any code that reads `window`, `localStorage`, or `Date.now()` during render will diverge between server and client. The current pages don't appear to do this at render time (the `Sheet` open state in `Winnings.tsx` uses `useState(false)` which is fine). If a mismatch surfaces, we wrap the offending bit in `useEffect` or a `typeof window !== 'undefined'` guard.
- **Asset imports**: image imports (`@/assets/...`) work normally because the prerender plugin runs against the already-built bundle.
- **Bundle size**: unchanged. Prerendering only produces additional HTML files.
