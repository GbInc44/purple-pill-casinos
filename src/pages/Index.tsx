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

const casinos = Array.from({ length: 17 }, (_, i) => ({
  id: i + 1,
  name: i === 0 ? "Efbet" : i === 1 ? "Winbet" : i === 2 ? "8888" : i === 3 ? "Palms Bet" : i === 4 ? "Sesame" : i === 5 ? "Inbet" : i === 6 ? "Alphawin" : i === 7 ? "MrBit" : i === 8 ? "CBET.bg" : i === 9 ? "Betano" : i === 10 ? "Bet365" : i === 11 ? "Bwin" : i === 12 ? "Topwin" : i === 13 ? "Elitbet" : i === 14 ? "BetHub" : `Casino ${i + 1}`,
  url: "#",
  logo: i === 0 ? efbetLogo : i === 1 ? winbetLogo : i === 2 ? logo8888 : i === 3 ? palmsbetLogo : i === 4 ? sesameLogo : i === 5 ? inbetLogo : i === 6 ? alphawinLogo : i === 7 ? mrbitLogo : i === 8 ? cbetLogo : i === 9 ? betanoLogo : i === 10 ? bet365Logo : i === 11 ? bwinLogo : i === 12 ? topwinLogo : i === 13 ? elitbetLogo : i === 14 ? bethubLogo : "/placeholder.svg",
}));

const Index = () => {
  return (
    <div className="min-h-screen py-10 px-4">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl tracking-widest uppercase font-bold text-destructive-foreground bg-inherit" style={{ fontFamily: "'Orbitron', sans-serif" }}>
          All Casinos BG
        </h1>
      </header>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {casinos.map((casino) => (
          <a
            key={casino.id}
            href={casino.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3 rounded-2xl px-4 py-4 transition-all duration-300 hover:scale-[1.03] hover:shadow-[var(--pill-glow)]"
            style={{
              background: "var(--pill-bg)",
              border: "1px solid var(--pill-border)",
            }}
          >
            <div className="h-20 w-full rounded-xl bg-muted flex items-center justify-center overflow-hidden">
              <img
                src={casino.logo}
                alt={casino.name}
                className="h-full w-full object-cover opacity-60 group-hover:opacity-100 transition-opacity"
              />
            </div>

            <span className="text-sm font-semibold text-primary">
              {casino.name}
            </span>

            <span className="rounded-full bg-primary px-4 py-1.5 text-xs font-bold text-primary-foreground transition-colors group-hover:bg-accent">
              Visit Site
            </span>
          </a>
        ))}
      </div>

      <footer className="max-w-6xl mx-auto mt-16 mb-8 text-center text-muted-foreground text-xs leading-relaxed">
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="inline-flex items-center justify-center h-8 w-8 rounded-full border-2 border-destructive text-destructive font-bold text-sm">
            18+
          </span>
          <span className="font-semibold">Отговорна игра</span>
        </div>
        <p>Сайтът е предназначен само за лица над 18 години. Хазартът крие риск от зависимост. Играйте отговорно.</p>
        <p className="mt-1">
          Помощ:{" "}
          <a
            href="https://www.begambleaware.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline hover:text-accent transition-colors"
          >
            https://www.begambleaware.org/
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Index;
