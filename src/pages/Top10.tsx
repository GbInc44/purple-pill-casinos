import CasinoLayout from "@/components/CasinoLayout";
import { allCasinos } from "@/data/casinos";

const order = [
  "Bet365",
  "Efbet",
  "Winbet",
  "Betano",
  "8888",
  "Palms Bet",
  "Inbet",
  "MrBit",
  "Sesame",
  "Alphawin",
];

const top10Casinos = order
  .map((name) => allCasinos.find((c) => c.name === name))
  .filter((c): c is NonNullable<typeof c> => Boolean(c));

const Top10 = () => (
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
  />
);

export default Top10;
