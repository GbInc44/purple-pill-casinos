## Goal
Make the `<link rel="canonical">` URL reflect the current page URL on every route, instead of always pointing to `https://www.allbetbg.com/`.

## Approach
Create a small reusable hook `useCanonicalUrl(path)` that updates the existing `<link rel="canonical">` tag in the document head whenever a page mounts. Call it from each page component with that page's path.

No new dependencies (no react-helmet) — we just mutate the existing canonical `<link>` tag directly.

## Changes

### 1. New file: `src/hooks/useCanonicalUrl.ts`
A `useEffect`-based hook that:
- Locates `<link rel="canonical">` in `<head>` (creates it if missing).
- Sets its `href` to `https://www.allbetbg.com${path}`.
- Normalizes: ensures path starts with `/`, strips any trailing slash (except for root `/`).

### 2. Update each page to call the hook
- `src/pages/Index.tsx` → `useCanonicalUrl("/")`
- `src/pages/NewCasinos.tsx` → `useCanonicalUrl("/novi-kazina")`
- `src/pages/Top10.tsx` → `useCanonicalUrl("/top-10")`
- `src/pages/Winnings.tsx` → `useCanonicalUrl("/pechalbi")`
- `src/pages/NotFound.tsx` → no canonical (or set to current path); recommended: skip / leave default, since 404 pages shouldn't be canonicalized.

### 3. `index.html`
Leave the existing `<link rel="canonical" href="https://www.allbetbg.com/" />` as the default. The hook overwrites it on navigation, so it's correct for the landing page on first paint and gets updated for sub-pages once React hydrates.

## Resulting behavior
| Route | Canonical |
|---|---|
| `/` | `https://www.allbetbg.com/` |
| `/novi-kazina` | `https://www.allbetbg.com/novi-kazina` |
| `/top-10` | `https://www.allbetbg.com/top-10` |
| `/pechalbi` | `https://www.allbetbg.com/pechalbi` |

## Note on SEO
Search engine crawlers (Googlebot) execute JavaScript and will see the updated canonical. This is a standard SPA approach. If you later want the correct canonical present in the initial HTML response (no JS required), that would need pre-rendering / SSG, which is a larger change — happy to plan that separately if needed.