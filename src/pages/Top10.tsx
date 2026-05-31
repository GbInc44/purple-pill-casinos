import CasinoLayout from "@/components/CasinoLayout";
import { allCasinos } from "@/data/casinos";
import { useCanonicalUrl } from "@/hooks/useCanonicalUrl";
import palmsbetBanner from "@/assets/palmsbet-banner-728x90.png";

const order = [
  "Bet365",
  "Efbet",
  "Palms Bet",
  "MrBit",
  "8888",
  "Winbet",
  "Inbet",
  "Betano",
  "Sesame",
  "Alphawin",
];

const affiliateUrl = "https://www.palmsbet.com/affiliate/?marketingCode=PB-0594&banID=&brand=ecasino&ns=&clickid=&pages=welcome-bonus-casino-affiliate";
const bannerUrl = "https://www.palmsbet.com/affiliate/?marketingCode=PB-0594&banID=&brand=ecasino&ns=&clickid=&pages=fs-bonus-lending";

const top10Casinos = order
  .map((name) => allCasinos.find((c) => c.name === name))
  .filter((c): c is NonNullable<typeof c> => Boolean(c))
  .map((c) => (c.name === "Palms Bet" ? { ...c, url: affiliateUrl } : c));

const Top10 = () => {
  useCanonicalUrl("/top-10");
  return (
  <CasinoLayout
    showDivider={false}
    cleanSubtitle
    subtitle={
      <>
        <h1
          className="font-extrabold tracking-tight text-white text-2xl md:text-4xl"
          style={{ textShadow: "0 3px 10px rgba(0,0,0,0.95), 0 2px 4px rgba(0,0,0,0.9), 0 0 24px hsla(270,100%,65%,0.55)" }}
        >
          ТОП 10 онлайн казина в България.
        </h1>
        <span
          className="block mt-3 max-w-2xl md:max-w-4xl mx-auto leading-snug [text-wrap:balance] text-center text-lg md:text-xl font-medium text-white"
          style={{ textShadow: "0 2px 8px rgba(0,0,0,0.9), 0 0 16px hsla(270,100%,65%,0.4)" }}
        >
          Сравнете най-добрите лицензирани казина, техните бонуси и предимства.
        </span>
      </>
    }
    casinos={top10Casinos}
    variant="list"
    showProsCons
    banner={
      <a
        href={bannerUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full max-w-[728px]"
        aria-label="Palms Bet — 5€ за спорт + 100 FS за казино без депозит"
      >
        <img
          src={palmsbetBanner}
          alt="Palms Bet — 5€ за спорт + 100 FS за казино без депозит"
          width={728}
          height={90}
          className="w-full h-auto block"
        />
      </a>
    }
  />
  );
};

export default Top10;
