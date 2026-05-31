import CasinoLayout from "@/components/CasinoLayout";
import ExternalScript from "@/components/ExternalScript";
import { allCasinos } from "@/data/casinos";
import { useCanonicalUrl } from "@/hooks/useCanonicalUrl";

const affiliateUrl = "https://www.palmsbet.com/affiliate/?marketingCode=PB-0594&banID=&brand=ecasino&ns=&clickid=&pages=welcome-bonus-casino-affiliate";

const reorderedCasinos = (() => {
  const list = [...allCasinos];
  const winbetIdx = list.findIndex((c) => c.name === "Winbet");
  const palmsIdx = list.findIndex((c) => c.name === "Palms Bet");
  if (winbetIdx !== -1 && palmsIdx !== -1) {
    [list[winbetIdx], list[palmsIdx]] = [list[palmsIdx], list[winbetIdx]];
  }
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
      <ExternalScript src="https://js.efbet.com/javascript.php?prefix=Zahiu1R5LU7UOsjNOfgKeWNd7ZgqdRLk&media=19&campaign=1" />
    }
  />
  );
};

export default Index;
