import efbetLogo from "@/assets/efbet-logo.png";
import winbetLogo from "@/assets/winbet-logo.png";
import logo8888 from "@/assets/logo-8888-v2.jpg";
import palmsbetLogo from "@/assets/palmsbet-logo-new.png";
import sesameLogo from "@/assets/sesame-logo.png";
import inbetLogo from "@/assets/inbet-logo.png";
import alphawinLogo from "@/assets/alphawin-logo.webp";
import mrbitLogo from "@/assets/mrbit-logo.webp";
import cbetLogo from "@/assets/cbet-logo.jpg";
import betanoLogo from "@/assets/betano-logo.webp";
import bet365Logo from "@/assets/bet365-logo.png";
import bwinLogo from "@/assets/bwin-logo.webp";
import topwinLogo from "@/assets/topwin-logo.jpg";
import elitbetLogo from "@/assets/elitbet-logo.png";
import bethubLogo from "@/assets/bethub-logo.png";
import everbetLogo from "@/assets/everbet-logo.png";
import magicbetLogo from "@/assets/magicbet-logo.webp";
import slotinoLogo from "@/assets/slotino-logo.png";
import admiralbetLogo from "@/assets/admiralbet-logo.jpg";
import betvamLogo from "@/assets/betvam-logo.jpg";
import betwildLogo from "@/assets/betwild-logo.png";
import pokerstarsLogo from "@/assets/pokerstars-logo.png";

export type Casino = {
  name: string;
  logo: string;
  bonus?: string;
  url?: string;
  pros?: string[];
  cons?: string[];
};

export const allCasinos: Casino[] = [
  { name: "Efbet", logo: efbetLogo, bonus: "Бонус до 1500 €" },
  { name: "Winbet", logo: winbetLogo, bonus: "Бонус 200% до 100 €" },
  { name: "8888", logo: logo8888, bonus: "Бонус до 500 € + до 300 FS" },
  { name: "Palms Bet", logo: palmsbetLogo, bonus: "Бонус до 1000 € + до 300 FS" },
  { name: "Sesame", logo: sesameLogo, bonus: "Бонус до 1500 €" },
  { name: "Inbet", logo: inbetLogo, bonus: "Бонус 100 € без депозит" },
  { name: "Alphawin", logo: alphawinLogo, bonus: "Бонус до 2000 €" },
  { name: "MrBit", logo: mrbitLogo, bonus: "Бонус до 1000 € + до 100 FS" },
  { name: "BET.bg", logo: cbetLogo, bonus: "Бонус до 1500 €" },
  { name: "Betano", logo: betanoLogo, bonus: "Бонус до 1500 €" },
  {
    name: "Bet365",
    logo: bet365Logo,
    bonus: "Бонус 100% до 200 €",
    pros: ["Оферти за редовни играчи", "Големи Джакпоти", "Многогодишен опит на пазара"],
    cons: ["Не много висок начален бонус"],
  },
  { name: "Bwin", logo: bwinLogo, bonus: "Персонализиран бонус" },
  { name: "Topwin", logo: topwinLogo, bonus: "Бонус до 1000 € + до 50 FS" },
  { name: "Elitbet", logo: elitbetLogo, bonus: "Бонус до 1500 €" },
  { name: "BetHub", logo: bethubLogo, bonus: "Бонус до 1280 €" },
  { name: "Everbet", logo: everbetLogo, bonus: "Бонус до 2000 FS или до 100 € без депозит" },
  { name: "Magic Bet", logo: magicbetLogo, bonus: "Бонус до 2000 €" },
  { name: "Slotino", logo: slotinoLogo, bonus: "Бонус до 1250 €" },
  { name: "Admiral Bet", logo: admiralbetLogo, bonus: "Бонус 200% до 100 € + 100 FS" },
  { name: "BetVam", logo: betvamLogo, bonus: "Бонус 500% до 1000 € + до 500 FS" },
  { name: "Betwild", logo: betwildLogo, bonus: "Очаквайте скоро" },
  { name: "PokerStars", logo: pokerstarsLogo, bonus: "Осребряване на точки в пари" },
];

const byName = (name: string) => allCasinos.find((c) => c.name === name)!;

export const newCasinos: Casino[] = [
  byName("BetVam"),
  byName("Betwild"),
  byName("BetHub"),
  byName("Topwin"),
  byName("Everbet"),
  byName("Slotino"),
  byName("Admiral Bet"),
  byName("Magic Bet"),
];
