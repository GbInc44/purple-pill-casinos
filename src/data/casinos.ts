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
import bethubFs from "@/assets/bethub-fs.png";
import betvamSport from "@/assets/betvam-sport.png";
import topwinFs from "@/assets/topwin-fs.png";

export type Casino = {
  name: string;
  logo: string;
  bonus?: string;
  url?: string;
  pros?: string[];
  cons?: string[];
  centerImage?: string;
  centerCaption?: string;
};

export const allCasinos: Casino[] = [
  {
    name: "Efbet",
    logo: efbetLogo,
    bonus: "Бонус до 1500 €",
    pros: ["Обновен уебсайт и приложение", "Високи коефициенти и редовни бонуси", "Опит в пазари в чужбина"],
    cons: ["Липса на покер на живо"],
  },
  {
    name: "Winbet",
    logo: winbetLogo,
    bonus: "Бонус 200% до 100 €",
    pros: ["Бърз депозит и теглене", "Разнообразие от над 300 ротативки", "Игри с крупиета на живо и видео покер"],
    cons: ["Не много висок начален бонус"],
  },
  {
    name: "8888",
    logo: logo8888,
    bonus: "Бонус до 500 € + до 300 FS",
    pros: ["Залози на конни състезания, надбягвания с хрътки", "Мобилен сайт и приложение"],
    cons: ["По-малко бонуси, в сравнение с други букмейкъри"],
  },
  {
    name: "Palms Bet",
    logo: palmsbetLogo,
    bonus: "Бонус до 1000 € + до 300 FS",
    pros: ["Персонализирани промоции за лоялни клиенти", "Богат набор от спортове", "Лоялна програма с атрактивни награди", "Мобилно приложение за Android и iPhone"],
    cons: ["Малко опции за видео излъчване на живо"],
  },
  {
    name: "Sesame",
    logo: sesameLogo,
    bonus: "Бонус до 1500 €",
    pros: ["Виртуални и фентъзи спортове", "Много добро приложение за смартфони"],
    cons: ["Не много големи бонуси"],
  },
  {
    name: "Inbet",
    logo: inbetLogo,
    bonus: "Бонус 100 € без депозит",
    pros: ["Повишени коефициенти", "Статистика и хронология на срещите", "Безплатни залози и бонуси без депозит", "Свара и Табла на живо"],
    cons: ["Няма \"Кеш аут\" опция за залози с Bet Builder"],
  },
  {
    name: "Alphawin",
    logo: alphawinLogo,
    bonus: "Бонус до 2000 €",
    pros: ["Много промоции и индивидуални оферти", "Разнообразие от ротативки, игри с крупиета и видео покер"],
    cons: ["Няма мобилно приложение"],
  },
  {
    name: "MrBit",
    logo: mrbitLogo,
    bonus: "Бонус до 1000 € + до 100 FS",
    pros: ["Разнообразие от начални бонуси", "Над 1000 казино игри", "Най-популярните доставчици"],
    cons: ["Кратък срок за превъртане на бонусите"],
  },
  { name: "BET.bg", logo: cbetLogo, bonus: "Бонус до 1500 €" },
  {
    name: "Betano",
    logo: betanoLogo,
    bonus: "Бонус до 1500 €",
    pros: ["Различни промоционални оферти", "Пряко предаване на срещи и залагане на живо", "Едни от най-високите коефициенти в България"],
    cons: ["Рядко има бонуси без депозит"],
  },
  {
    name: "Bet365",
    logo: bet365Logo,
    bonus: "Бонус 100% до 200 €",
    pros: ["Оферти за редовни играчи", "Големи Джакпоти", "Многогодишен опит на пазара"],
    cons: ["Не много висок начален бонус"],
  },
  { name: "Bwin", logo: bwinLogo, bonus: "Персонализиран бонус" },
  {
    name: "Topwin",
    logo: topwinLogo,
    bonus: "Бонус до 1000 € + до 50 FS",
    centerImage: topwinFs,
    centerCaption: "20 FS при регистрация",
  },
  { name: "Elitbet", logo: elitbetLogo, bonus: "Бонус до 1500 €" },
  {
    name: "BetHub",
    logo: bethubLogo,
    bonus: "Бонус до 1280 €",
    centerImage: bethubFs,
    centerCaption: "До 1000 FS БЕЗ ДЕПОЗИТ",
  },
  { name: "Everbet", logo: everbetLogo, bonus: "Бонус до 2000 FS или до 100 € без депозит" },
  { name: "Magic Bet", logo: magicbetLogo, bonus: "Бонус до 2000 €" },
  { name: "Slotino", logo: slotinoLogo, bonus: "Бонус до 1250 €" },
  { name: "Admiral Bet", logo: admiralbetLogo, bonus: "Бонус 200% до 100 € + 100 FS" },
  {
    name: "BetVam",
    logo: betvamLogo,
    bonus: "Бонус 500% до 1000 € + до 500 FS",
    centerImage: betvamSport,
    centerCaption: "Начален бонус СПОРТ",
  },
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
