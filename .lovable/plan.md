## Plan: Deploy to GitHub Pages via GitHub Actions

Make your site build and deploy automatically to GitHub Pages on every push to `main`, so opening `www.allbetbg.com` shows your app instead of a blank page.

### Files to create

1. **`.github/workflows/deploy.yml`** — GitHub Actions workflow that:
   - Triggers on every push to `main` (and supports manual runs)
   - Installs dependencies with `npm ci`
   - Builds the Vite app with `npm run build`
   - Copies the existing `CNAME` file into `dist/` so the custom domain stays bound
   - Uploads `dist/` as a Pages artifact and deploys it to the `github-pages` environment
   - Uses official actions: `actions/checkout@v4`, `actions/setup-node@v4` (Node 20), `actions/configure-pages@v5`, `actions/upload-pages-artifact@v3`, `actions/deploy-pages@v4`
   - Has correct permissions (`pages: write`, `id-token: write`) and concurrency control

2. **`public/404.html`** — Copy of `index.html`. GitHub Pages does NOT auto-fallback to `index.html` for client-side routes, so without this, refreshing on `/novi-kazina`, `/top-10`, or `/pechalbi` would 404. With this file at `dist/404.html`, GitHub serves it for unmatched paths and React Router takes over.

### What stays the same

- `vite.config.ts` — default `base: '/'` is correct for a custom domain at root
- `CNAME` — already at repo root ✓
- `index.html`, `sitemap.xml`, `robots.txt` — already configured for `https://www.allbetbg.com`

### What you do in GitHub after this deploys

1. Repo → **Settings → Pages**
2. Change **Source** from "Deploy from a branch" to **"GitHub Actions"**
3. Save. The workflow runs automatically on the next push (or trigger manually from the Actions tab)
4. After ~1–2 min, your site is live at `www.allbetbg.com`
5. Once GitHub provisions SSL, tick **"Enforce HTTPS"** (currently greyed out in your screenshot)

### Notes

- Every Lovable edit auto-syncs to GitHub `main`, which auto-triggers a deploy — no manual steps per change.
- Build time ~1–2 min per deploy. Free for public repos.
