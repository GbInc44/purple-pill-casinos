import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "./App.tsx";

const SITE_ORIGIN = "https://www.allbetbg.com";

type SeoEntry = {
  title: string;
  description: string;
};

const SEO: Record<string, SeoEntry> = {
  "/": {
    title: "AllBet — Онлайн казина в България | Ревюта, бонуси и печалби",
    description:
      "AllBet — каталог на най-добрите онлайн казина в България. Сравни ревюта, бонуси, нови казина и реални печалби на едно място.",
  },
  "/novi-kazina": {
    title: "Нови онлайн казина в България | AllBet",
    description:
      "Най-новите лицензирани онлайн казина в България. Открий новите платформи, техните бонуси и предимства.",
  },
  "/top-10": {
    title: "ТОП 10 онлайн казина в България | AllBet",
    description:
      "Сравни ТОП 10 лицензирани онлайн казина в България — бонуси, предимства и реални ревюта.",
  },
  "/pechalbi": {
    title: "Обявени печалби от онлайн казина | AllBet",
    description:
      "Актуални печалби от различни видове игри, обявени от лицензираните казина в България.",
  },
  "/kazino/palms-bet": {
    title: "Ревю на Palms Bet казино | AllBet",
    description:
      "Подробно ревю на Palms Bet — лиценз, бонуси, платежни методи, контакти и оценка. Прочетете преди да играете.",
  },
};

function normalize(path: string) {
  let p = path.startsWith("/") ? path : `/${path}`;
  if (p.length > 1 && p.endsWith("/")) p = p.slice(0, -1);
  return p;
}

export async function prerender(data: { url: string }) {
  const path = normalize(new URL(data.url, SITE_ORIGIN).pathname);
  const seo = SEO[path] ?? SEO["/"];
  const canonical = `${SITE_ORIGIN}${path}`;

  const html = renderToString(
    <StaticRouter location={path}>
      <App />
    </StaticRouter>
  );

  const elements = new Set<{ type: string; props: Record<string, string> }>([
    { type: "title", props: { children: seo.title } },
    { type: "meta", props: { name: "description", content: seo.description } },
    { type: "link", props: { rel: "canonical", href: canonical } },
    { type: "meta", props: { property: "og:title", content: seo.title } },
    { type: "meta", props: { property: "og:description", content: seo.description } },
    { type: "meta", props: { property: "og:url", content: canonical } },
    { type: "meta", props: { property: "og:type", content: "website" } },
    { type: "meta", props: { property: "og:locale", content: "bg_BG" } },
    { type: "meta", props: { name: "twitter:title", content: seo.title } },
    { type: "meta", props: { name: "twitter:description", content: seo.description } },
  ]);

  return {
    html,
    head: {
      lang: "bg",
      title: seo.title,
      elements,
    },
  };
}
