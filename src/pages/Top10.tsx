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
    subtitle="ТОП 10 онлайн казина в България."
    casinos={top10Casinos}
    variant="list"
  />
);

export default Top10;
