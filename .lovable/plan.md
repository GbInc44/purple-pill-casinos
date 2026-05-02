## Goal
Make AllBet discoverable in search engines (Google, Bing, etc.) by adding a proper sitemap, a smarter robots.txt, and real SEO meta tags. Canonical domain: `https://www.allbetbg.com`.

## What will change

### 1. New file: `public/sitemap.xml`
Lists all 4 public routes so search engines can crawl them in one go.

URLs included:
- `https://www.allbetbg.com/` (priority 1.0)
- `https://www.allbetbg.com/novi-kazina` (priority 0.8)
- `https://www.allbetbg.com/top-10` (priority 0.8)
- `https://www.allbetbg.com/pechalbi` (priority 0.7)

Each entry will have `<lastmod>` set to today and `<changefreq>weekly</changefreq>`.

### 2. Update `public/robots.txt`
Keep the existing "allow all" rules and add a `Sitemap:` line so crawlers find the sitemap automatically:
```
Sitemap: https://www.allbetbg.com/sitemap.xml
```

### 3. Update `index.html` (SEO meta tags)
Replace the "Lovable App" placeholders with real values for AllBet (Bulgarian casino directory):
- `<title>` → `AllBet — Онлайн казина в България | Ревюта, бонуси и печалби`
- `<meta name="description">` → short Bulgarian description (~155 chars) about the casino directory, reviews and bonuses
- `<meta name="author">` → `AllBet`
- `<html lang="en">` → `<html lang="bg">` (the site content is Bulgarian)
- Add `<link rel="canonical" href="https://www.allbetbg.com/" />`
- Update `og:title`, `og:description`, `og:url`, `og:image` (use a site asset instead of the lovable.dev placeholder) and matching `twitter:` tags

## Other recommendations (so SEO actually works)

These are things outside the code that you should know about:

1. **Connect the custom domain in Lovable** (Project Settings → Domains) and publish the project. Search engines can only index a live domain — `*.lovable.app` preview URLs won't help your ranking.
2. **Submit the sitemap** to:
   - Google Search Console → add `www.allbetbg.com` as a property → Sitemaps → submit `https://www.allbetbg.com/sitemap.xml`
   - Bing Webmaster Tools → same flow
3. **Verify domain ownership** in Google Search Console (usually a TXT DNS record or an HTML meta tag — if needed I can add the verification meta tag to `index.html`).
4. **Pick one canonical host** (`www.allbetbg.com` vs `allbetbg.com`) and make the other 301-redirect to it. In Lovable Domains, mark `www.allbetbg.com` as Primary so the bare domain redirects to it.
5. **Per-page meta tags (optional, future improvement)**: Right now `index.html` has site-wide tags. For better ranking on individual pages we can later add `react-helmet-async` so `/top-10`, `/novi-kazina`, `/pechalbi` get their own titles and descriptions. Not part of this task — say the word and I'll add it.
6. **Backlinks & content** still matter most for ranking — no code change can replace those.

## Files touched
- `public/sitemap.xml` (new)
- `public/robots.txt` (edit)
- `index.html` (edit)
