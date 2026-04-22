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
    subtitle={
      <>
        ТОП 10 онлайн казина в България.
        <span className="block mt-3 md:text-lg neon-text md:max-w-4xl max-w-2xl mx-auto leading-relaxed [text-wrap:balance] text-xs text-center" style={{ fontFamily: "'Orbitron', sans-serif", textShadow: "0 0 8px hsla(270,100%,65%,0.6), 0 0 30px hsla(270,100%,65%,0.3)" }}>
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
