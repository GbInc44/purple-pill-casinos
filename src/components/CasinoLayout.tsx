import { ReactNode, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import casinoBg from "@/assets/casino-bg.png";
import allBetLogo from "@/assets/all-bet-logo.png";
import { Casino } from "@/data/casinos";

interface Props {
  subtitle: ReactNode;
  casinos: Casino[];
  variant?: "grid" | "list";
}

const CasinoLayout = ({ subtitle, casinos, variant = "grid" }: Props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const go = (path: string) => {
    setMenuOpen(false);
    navigate(path);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed bg-no-repeat relative"
      style={{ backgroundImage: `url(${casinoBg})` }}
    >
      <div className="fixed inset-0 animated-overlay pointer-events-none" />

      <nav className="nav-bar sticky top-0 z-50 w-full max-w-full px-3 sm:px-4 py-2 overflow-visible">
        <div className="flex items-center justify-between w-full max-w-full gap-2">
          <Link to="/" className="shrink-0">
            <img src={allBetLogo} alt="All Bet" className="h-10 sm:h-12 md:h-14 w-auto -my-1 sm:-my-2" />
          </Link>

          <div className="hidden md:flex items-center gap-2">
            <button className="nav-btn" onClick={() => go("/novi-kazina")}>Нови Казина</button>
            <button className="nav-btn" onClick={() => go("/")}>ТОП 10</button>
            <button className="nav-btn">Печалби</button>
          </div>

          <button
            className="md:hidden text-white p-2 shrink-0"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden flex flex-col gap-2 mt-3 pb-1 w-full">
            <button className="nav-btn text-left" onClick={() => go("/novi-kazina")}>Нови Казина</button>
            <button className="nav-btn text-left" onClick={() => go("/")}>ТОП 10</button>
            <button className="nav-btn text-left">Печалби</button>
          </div>
        )}
      </nav>

      <div className="relative z-10 py-10 px-4">
        <header className="text-center mb-4">
          <p
            className="text-xl md:text-2xl font-bold tracking-wide text-[#fcfaff] neon-text"
            style={{
              fontFamily: "'Orbitron', sans-serif",
              textShadow: "0 0 8px hsla(270,100%,65%,0.6), 0 0 30px hsla(270,100%,65%,0.3)",
            }}
          >
            {subtitle}
          </p>
        </header>

        <div className="neon-divider max-w-md mx-auto mb-12 rounded-full" />

        {variant === "grid" ? (
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {casinos.map((casino, index) => (
              <a
                key={casino.name}
                href={casino.url ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="group glass-card card-animate rounded-2xl px-5 py-5 flex flex-col items-center gap-4 relative"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="ranking-badge absolute top-3 left-3">{index + 1}</div>

                <div className="h-24 w-full rounded-xl bg-black/40 flex items-center justify-center overflow-hidden border border-white/5">
                  <img src={casino.logo} alt={casino.name} className="h-full w-full object-cover opacity-100" />
                </div>

                {casino.bonus && (
                  <div
                    className="w-full rounded-lg py-1.5 text-center font-bold tracking-wide text-white text-base"
                    style={{ background: "linear-gradient(135deg, hsl(270,100%,55%), hsl(220,100%,55%))" }}
                  >
                    {casino.bonus}
                  </div>
                )}

                <span className="text-base font-bold tracking-wide text-white">{casino.name}</span>

                <span className="btn-gradient rounded-full px-6 py-2 text-xs font-bold text-white tracking-wider uppercase transition-all group-hover:shadow-[0_0_20px_hsla(270,100%,65%,0.5)]">
                  Посети сайта
                </span>
              </a>
            ))}
          </div>
        ) : (
          <div className="max-w-6xl mx-auto flex flex-col gap-6">
            {casinos.map((casino, index) => (
              <a
                key={casino.name}
                href={casino.url ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="group glass-card card-animate rounded-2xl px-5 py-5 sm:px-8 sm:py-6 flex flex-col sm:flex-row items-center gap-6 relative"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="ranking-badge absolute top-3 left-3">{index + 1}</div>

                {/* Left: logo + name */}
                <div className="flex flex-col items-center gap-2 sm:w-56 shrink-0">
                  <div className="h-24 w-full sm:w-48 rounded-xl bg-black/40 flex items-center justify-center overflow-hidden border border-white/5">
                    <img src={casino.logo} alt={casino.name} className="h-full w-full object-cover opacity-100" />
                  </div>
                  <span className="text-base font-bold tracking-wide text-white">{casino.name}</span>
                </div>

                {/* Center: bonus */}
                <div className="flex-1 flex justify-center w-full">
                  {casino.bonus && (
                    <div
                      className="w-full sm:max-w-sm rounded-lg py-2 px-4 text-center font-bold tracking-wide text-white text-base"
                      style={{ background: "linear-gradient(135deg, hsl(270,100%,55%), hsl(220,100%,55%))" }}
                    >
                      {casino.bonus}
                    </div>
                  )}
                </div>

                {/* Right: CTA */}
                <div className="shrink-0 sm:ml-auto">
                  <span className="btn-gradient inline-block rounded-full px-6 py-2 text-xs font-bold text-white tracking-wider uppercase transition-all group-hover:shadow-[0_0_20px_hsla(270,100%,65%,0.5)]">
                    Посети сайта
                  </span>
                </div>
              </a>
            ))}
          </div>
        )}

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

export default CasinoLayout;
