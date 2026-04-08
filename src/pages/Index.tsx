import casinoBg from "@/assets/casino-bg.png";
import efbetLogo from "@/assets/efbet-logo.png";
import winbetLogo from "@/assets/winbet-logo.png";
import logo8888 from "@/assets/logo-8888-v2.jpg";
import palmsbetLogo from "@/assets/palmsbet-logo-new.png";
import sesameLogo from "@/assets/sesame-logo.png";
import inbetLogo from "@/assets/inbet-logo.png";
import alphawinLogo from "@/assets/alphawin-logo.webp";
import alphawinLogo2 from "@/assets/alphawin-logo-2.webp";
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

const logos = [
  efbetLogo, winbetLogo, logo8888, palmsbetLogo, sesameLogo, inbetLogo,
  alphawinLogo, mrbitLogo, cbetLogo, betanoLogo, bet365Logo, bwinLogo,
  topwinLogo, elitbetLogo, bethubLogo, everbetLogo, magicbetLogo, slotinoLogo,
  admiralbetLogo, betvamLogo, betwildLogo, pokerstarsLogo,
];

const names = [
  "Efbet", "Winbet", "8888", "Palms Bet", "Sesame", "Inbet",
  "Alphawin", "MrBit", "BET.bg", "Betano", "Bet365", "Bwin",
  "Topwin", "Elitbet", "BetHub", "Everbet", "Magic Bet", "Slotino",
  "Admiral Bet", "BetVam", "Betwild", "PokerStars",
];

const bonuses: Record<string, string> = {
  "Efbet": "Бонус до 1500 €",
  "Winbet": "Бонус 200% до 100 €",
  "8888": "Бонус до 500 € + до 300 FS",
  "Palms Bet": "Бонус до 1000 € + до 300 FS",
  "Sesame": "Бонус до 1500 €",
  "Inbet": "Бонус 100 € без депозит",
  "Alphawin": "Бонус до 2000 €",
  "MrBit": "Бонус до 1000 € + до 100 FS",
  "BET.bg": "Бонус до 1500 €",
  "Betano": "Бонус до 1500 €",
  "Bet365": "Бонус 100% до 200 €",
  "Bwin": "Персонализиран бонус",
  "Topwin": "Бонус до 1000 € + до 50 FS",
  "Elitbet": "Бонус до 1500 €",
  "BetHub": "Бонус до 1280 €",
  "Everbet": "Бонус до 2000 FS или до 100 € без депозит",
  "Magic Bet": "Бонус до 2000 €",
  "Slotino": "Бонус до 1250 €",
  "Admiral Bet": "Бонус 200% до 100 € + 100 FS",
  "BetVam": "Бонус 500% до 1000 € + до 500 FS",
  "Betwild": "Очаквайте скоро",
  "PokerStars": "Осребряване на точки в пари",
};

const casinos = names.map((name, i) => ({
  id: i + 1,
  name,
  url: "#",
  logo: logos[i],
}));

const Index = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed bg-no-repeat relative"
      style={{ backgroundImage: `url(${casinoBg})` }}
    >
      {/* Animated gradient overlay */}
      <div className="fixed inset-0 animated-overlay pointer-events-none" />

      <div className="relative z-10 py-10 px-4">
        {/* Header */}
        <header className="text-center mb-4">
          <h1
            className="text-4xl md:text-6xl tracking-widest uppercase font-black neon-text"
            style={{ fontFamily: "'Orbitron', sans-serif", color: "#fff" }}
          >
            All Casinos BG
          </h1>
          <p
            className="mt-4 text-xl md:text-2xl font-bold tracking-wide text-[#fcfaff] neon-text"
            style={{ fontFamily: "'Orbitron', sans-serif", textShadow: '0 0 8px hsla(270,100%,65%,0.6), 0 0 30px hsla(270,100%,65%,0.3)' }}
          >
            Всички лицензирани онлайн казина в България на едно място.
          </p>
        </header>

        {/* Neon divider */}
        <div className="neon-divider max-w-md mx-auto mb-12 rounded-full" />

        {/* Casino grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {casinos.map((casino, index) => (
            <a
              key={casino.id}
              href={casino.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group glass-card card-animate rounded-2xl px-5 py-5 flex flex-col items-center gap-4 relative"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Ranking badge */}
              <div className="ranking-badge absolute top-3 left-3">
                {casino.id}
              </div>

              {/* Logo container */}
              <div className="h-24 w-full rounded-xl bg-black/40 flex items-center justify-center overflow-hidden border border-white/5">
                <img
                  src={casino.logo}
                  alt={casino.name}
                  className="h-full w-full object-cover opacity-50 group-hover:opacity-100 transition-opacity duration-400"
                />
              </div>

              {/* Bonus banner */}
              {bonuses[casino.name] && (
                <div className="w-full rounded-lg py-1.5 text-center font-bold tracking-wide text-white text-base"
                  style={{ background: 'linear-gradient(135deg, hsl(270,100%,55%), hsl(220,100%,55%))' }}>
                  {bonuses[casino.name]}
                </div>
              )}

              {/* Casino name */}
              <span className="text-base font-bold tracking-wide text-white/90 group-hover:text-white transition-colors">
                {casino.name}
              </span>

              {/* Visit button */}
              <span className="btn-gradient rounded-full px-6 py-2 text-xs font-bold text-white tracking-wider uppercase transition-all group-hover:shadow-[0_0_20px_hsla(270,100%,65%,0.5)]">
                Visit Site
              </span>
            </a>
          ))}
        </div>

        {/* Footer */}
        <footer className="max-w-6xl mx-auto mt-16 mb-8">
          <div className="neon-divider rounded-full mb-8" />
          <div className="glass-panel rounded-2xl px-6 py-6 text-center text-muted-foreground text-xs leading-relaxed">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="inline-flex items-center justify-center h-8 w-8 rounded-full border-2 border-destructive text-destructive font-bold text-sm">
                18+
              </span>
              <span className="font-semibold text-white/70">Отговорна игра</span>
            </div>
            <p className="text-white/50">
              Сайтът е предназначен само за лица над 18 години. Хазартът крие риск от зависимост. Играйте отговорно.
            </p>
            <p className="mt-1 text-white/50">
              Помощ:{" "}
              <a
                href="https://www.begambleaware.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline hover:text-accent transition-colors"
              >
                begambleaware.org
              </a>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
