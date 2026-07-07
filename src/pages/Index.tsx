import CasinoLayout from "@/components/CasinoLayout";
import ExternalScript from "@/components/ExternalScript";
import { allCasinos } from "@/data/casinos";
import { useCanonicalUrl } from "@/hooks/useCanonicalUrl";

const affiliateUrl = "https://www.palmsbet.com/affiliate/?marketingCode=PB-0594&banID=&brand=ecasino&ns=&clickid=&pages=welcome-bonus-casino-affiliate";

const reorderedCasinos = (() => {
  const list = [...allCasinos];
  const swap = (a: string, b: string) => {
    const i = list.findIndex((c) => c.name === a);
    const j = list.findIndex((c) => c.name === b);
    if (i !== -1 && j !== -1) [list[i], list[j]] = [list[j], list[i]];
  };
  swap("Winbet", "Palms Bet");
  swap("8888", "MrBit");
  return list;
})();

const casinos = reorderedCasinos.map((c) =>
  c.name === "Palms Bet" ? { ...c, url: affiliateUrl } : c
);

const Index = () => {
  useCanonicalUrl("/");
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
          Всички лицензирани онлайн казина в България на едно място.
        </h1>
        <span
          className="block mt-3 max-w-2xl md:max-w-4xl mx-auto leading-snug [text-wrap:balance] text-center text-lg md:text-xl font-medium text-white"
          style={{ textShadow: "0 2px 8px rgba(0,0,0,0.9), 0 0 16px hsla(270,100%,65%,0.4)" }}
        >
          Актуален списък с легални онлайн казина, лицензирани за българския пазар. Всичко необходимо, за да направите информиран избор.
        </span>
      </>
    }
    casinos={casinos}
    banner={
      <div className="relative inline-block">
        <ExternalScript src="https://js.efbet.com/javascript.php?prefix=Zahiu1R5LU7UOsjNOfgKeWNd7ZgqdRLk&media=43&campaign=1" width={728} height={90} />
        <a
          href="https://record.efbet.com/_Zahiu1R5LU7UOsjNOfgKeWNd7ZgqdRLk/1/"
          target="_blank"
          rel="noopener noreferrer sponsored"
          aria-label="Efbet"
          className="absolute inset-0 z-10"
        />
      </div>
    }
  />
  );
};

export default Index;
