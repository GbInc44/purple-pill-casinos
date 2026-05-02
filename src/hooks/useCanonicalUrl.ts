import { useEffect } from "react";

const SITE_ORIGIN = "https://www.allbetbg.com";

/**
 * Updates (or creates) the <link rel="canonical"> tag in <head>
 * to point to SITE_ORIGIN + path for the current page.
 */
export function useCanonicalUrl(path: string) {
  useEffect(() => {
    // Normalize path: ensure leading slash, strip trailing slash (except root)
    let normalized = path.startsWith("/") ? path : `/${path}`;
    if (normalized.length > 1 && normalized.endsWith("/")) {
      normalized = normalized.slice(0, -1);
    }

    const href = `${SITE_ORIGIN}${normalized}`;

    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }, [path]);
}
