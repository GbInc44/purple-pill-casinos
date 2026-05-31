import { ReactNode, useState } from "react";
import { Menu, X, Check, Minus, Facebook } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import casinoBg from "@/assets/casino-bg.png";

import allBetLogo from "@/assets/all-bet-logo.png";
import { Casino } from "@/data/casinos";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface Props {
  subtitle: ReactNode;
  casinos: Casino[];
  variant?: "grid" | "list";
  showProsCons?: boolean;
  showDivider?: boolean;
  cleanSubtitle?: boolean;
  compact?: boolean;
  banner?: ReactNode;
}

const CasinoLayout = ({ subtitle, casinos, variant = "grid", showProsCons = false, showDivider = true, cleanSubtitle = false, compact = false, banner }: Props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [comingSoonOpen, setComingSoonOpen] = useState(false);
  const navigate = useNavigate();

  const handleCardClick = (e: React.MouseEvent, casino: Casino) => {
    if (!casino.url) {
      e.preventDefault();
      setComingSoonOpen(true);
    }
  };

  const handleReviewClick = (e: React.MouseEvent, reviewPath: string) => {
    e.preventDefault();
    e.stopPropagation();
    navigate(reviewPath);
  };
  const { pathname } = useLocation();

  const go = (path: string) => {
    setMenuOpen(false);
    navigate(path);
  };

  const navBtnClass = (path: string, extra = "") =>
    `nav-btn ${pathname === path ? "nav-btn-active" : ""} ${extra}`.trim();

  return (
    <div
      className="casino-page-bg min-h-screen bg-background relative overflow-x-hidden"
      style={{
        "--casino-bg-desktop": `url(${casinoBg})`,
      } as React.CSSProperties}

    >
      <div className="fixed inset-0 animated-overlay pointer-events-none" />



      <nav className="nav-bar sticky top-0 z-50 w-full max-w-full px-3 sm:px-4 py-2 overflow-visible">
        <div className="flex items-center justify-between w-full max-w-full gap-2">
          <Link
            to="/"
            className="shrink-0 inline-block -my-1 sm:-my-2 md:my-0 md:py-1"
            aria-label="All Bet — към началната страница"
          >
            <img
              src={allBetLogo}
              alt="All Bet"
              className="h-[22px] sm:h-[26px] md:h-[31px] w-auto object-contain"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-2">
            <button className={navBtnClass("/")} onClick={() => go("/")}>Начало</button>
            <button className={navBtnClass("/novi-kazina")} onClick={() => go("/novi-kazina")}>Нови Казина</button>
            <button className={navBtnClass("/top-10")} onClick={() => go("/top-10")}>ТОП 10</button>
            <button className={navBtnClass("/pechalbi")} onClick={() => go("/pechalbi")}>Печалби</button>
          </div>

          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <button
                className="lg:hidden text-white p-2 shrink-0"
                aria-label="Toggle menu"
              >
                <Menu size={24} />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-72 sm:w-80 border-l border-[hsla(270,100%,65%,0.35)] bg-[hsla(270,50%,6%,0.98)] backdrop-blur-xl p-6"
            >
              <div className="flex flex-col gap-3 mt-10">
                <button className={navBtnClass("/", "text-left")} onClick={() => go("/")}>Начало</button>
                <button className={navBtnClass("/novi-kazina", "text-left")} onClick={() => go("/novi-kazina")}>Нови Казина</button>
                <button className={navBtnClass("/top-10", "text-left")} onClick={() => go("/top-10")}>ТОП 10</button>
                <button className={navBtnClass("/pechalbi", "text-left")} onClick={() => go("/pechalbi")}>Печалби</button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>

      <div className="relative z-10 py-10 px-4 sm:px-6 md:px-14 lg:px-8">
        <header className="text-center mb-4">
          {cleanSubtitle ? (
            <div className="text-center">{subtitle}</div>
          ) : (
            <p
              className="text-xl md:text-2xl font-bold tracking-wide text-[#fcfaff] neon-text"
              style={{
                fontFamily: "'Orbitron', sans-serif",
                textShadow: "0 0 8px hsla(270,100%,65%,0.6), 0 0 30px hsla(270,100%,65%,0.3)",
              }}
            >
              {subtitle}
            </p>
          )}
        </header>

        {showDivider ? (
          <div className="neon-divider max-w-md mx-auto mb-12 rounded-full" />
        ) : (
          <div className="max-w-md mx-auto mb-12" aria-hidden />
        )}

        {banner && (
          <div className="max-w-6xl mx-auto mb-8 flex justify-center">
            {banner}
          </div>
        )}

        {variant === "grid" ? (
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {casinos.map((casino, index) => (
              <a
                key={casino.name}
                href={casino.url ?? "#"}
                onClick={(e) => handleCardClick(e, casino)}
                target="_blank"
                rel="noopener noreferrer"
                className="group glass-card card-animate rounded-2xl px-5 py-5 flex flex-col items-center gap-4 relative"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="ranking-badge absolute top-3 left-3">{index + 1}</div>

                <div className="h-24 w-full rounded-xl bg-black/40 flex items-center justify-center overflow-hidden border border-white/5">
                  <img src={casino.logo} alt={`${casino.name} онлайн казино — лого`} className="h-full w-full object-cover opacity-100" />
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

                <div className={`w-full flex flex-col sm:flex-row ${casino.reviewPath ? "gap-2" : ""} items-stretch`}>
                  <span className="btn-gradient flex-1 inline-flex items-center justify-center text-center rounded-full px-4 sm:px-6 py-2 text-xs font-bold text-white tracking-wider uppercase transition-all group-hover:shadow-[0_0_20px_hsla(270,100%,65%,0.5)]">
                    Посети сайта
                  </span>
                  {casino.reviewPath && (
                    <span
                      role="button"
                      tabIndex={0}
                      onClick={(e) => handleReviewClick(e, casino.reviewPath!)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") handleReviewClick(e as unknown as React.MouseEvent, casino.reviewPath!);
                      }}
                      className="flex-1 inline-flex items-center justify-center text-center rounded-full px-4 sm:px-6 py-2 text-xs font-bold text-white tracking-wider uppercase transition-all cursor-pointer border border-[hsl(45,100%,55%)] shadow-[0_0_6px_hsla(45,100%,55%,0.25)] hover:shadow-[0_0_14px_hsla(45,100%,55%,0.55)]"
                      style={{ background: "linear-gradient(135deg, hsl(270,100%,55%), hsl(220,100%,55%))" }}
                    >
                      Ревю
                    </span>
                  )}
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div className={`${compact ? "max-w-3xl" : "max-w-6xl"} mx-auto flex flex-col ${compact ? "gap-4" : "gap-6"}`}>
            {casinos.map((casino, index) => (
              <a
                key={casino.name}
                href={casino.url ?? "#"}
                onClick={(e) => handleCardClick(e, casino)}
                target="_blank"
                rel="noopener noreferrer"
                className={`group glass-card card-animate rounded-2xl ${compact ? "px-4 py-4 sm:px-5 sm:py-4 gap-4" : "px-5 py-5 sm:px-8 sm:py-6 gap-6"} flex flex-col lg:flex-row items-center relative`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="ranking-badge absolute top-3 left-3">{index + 1}</div>

                {/* Left: logo + name */}
                <div className={`flex flex-col items-center ${compact ? "gap-1.5 lg:w-40" : "gap-2 lg:w-56"} w-full shrink-0`}>
                  <div className={`${compact ? "h-20 lg:w-36" : "h-24 lg:w-48"} w-full sm:max-w-xs lg:max-w-none rounded-xl bg-black/40 flex items-center justify-center overflow-hidden border border-white/5`}>
                    <img src={casino.logo} alt={`${casino.name} онлайн казино — лого`} className="h-full w-full object-cover opacity-100" />
                  </div>
                  <span className="text-base font-bold tracking-wide text-white">{casino.name}</span>
                </div>

                {/* Center: pros/cons (top-10 only) or bonus (default) */}
                {showProsCons ? (
                  (casino.pros?.length || casino.cons?.length) ? (
                    <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-4">
                      {casino.pros?.length ? (
                        <div className="flex flex-col gap-2">
                          <h3 className="text-white font-bold text-sm tracking-wide font-['Orbitron'] border-b border-[hsla(270,100%,65%,0.4)] pb-1">
                            Плюсове
                          </h3>
                          <ul className="flex flex-col gap-1.5">
                            {casino.pros.map((p) => (
                              <li key={p} className="flex items-center gap-2 text-white text-sm">
                                <span className="h-5 w-5 rounded-full flex items-center justify-center shrink-0 bg-green-500/20 text-green-400">
                                  <Check className="h-4 w-4" strokeWidth={3} />
                                </span>
                                <span>{p}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : null}
                      {casino.cons?.length ? (
                        <div className="flex flex-col gap-2">
                          <h3 className="text-white font-bold text-sm tracking-wide font-['Orbitron'] border-b border-[hsla(270,100%,65%,0.4)] pb-1">
                            Минуси
                          </h3>
                          <ul className="flex flex-col gap-1.5">
                            {casino.cons.map((c) => (
                              <li key={c} className="flex items-center gap-2 text-white text-sm">
                                <span className="h-5 w-5 rounded-full flex items-center justify-center shrink-0 bg-red-500/20 text-red-400">
                                  <Minus className="h-4 w-4" strokeWidth={3} />
                                </span>
                                <span>{c}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : null}
                    </div>
                  ) : (
                    <div className="flex-1 w-full flex flex-col items-center justify-center gap-2">
                      {casino.centerImage && (
                        <div className="h-20 w-full max-w-[260px] rounded-xl overflow-hidden border border-white/5 bg-black/40 flex items-center justify-center">
                          <img
                            src={casino.centerImage}
                            alt={`${casino.name} промоционална оферта`}
                            className="h-full w-full object-cover"
                          />
                        </div>
                      )}
                      {casino.centerCaption && (
                        <div className="text-center font-bold tracking-wide text-white text-xs sm:text-sm">
                          {casino.centerCaption}
                        </div>
                      )}
                    </div>
                  )
                ) : (
                  <div className="flex-1 w-full flex items-center justify-center">
                    {casino.bonus && (
                      <div
                        className="w-full max-w-xs rounded-lg py-2 px-4 text-center font-bold tracking-wide text-white text-base"
                        style={{ background: "linear-gradient(135deg, hsl(270,100%,55%), hsl(220,100%,55%))" }}
                      >
                        {casino.bonus}
                      </div>
                    )}
                  </div>
                )}

                {/* Right: CTA (+ bonus stacked when showProsCons) */}
                {showProsCons ? (
                  <div className={`flex flex-col w-full items-stretch shrink-0 ${compact ? "gap-1.5 lg:w-40" : "gap-2 lg:w-44"}`}>
                    <span className={`btn-gradient block w-full text-center rounded-full ${compact ? "px-5 py-1.5" : "px-6 py-2"} text-xs font-bold text-white tracking-wider uppercase transition-all group-hover:shadow-[0_0_20px_hsla(270,100%,65%,0.5)]`}>
                      Посети сайта
                    </span>
                    {casino.reviewPath && (
                      <span
                        role="button"
                        tabIndex={0}
                        onClick={(e) => handleReviewClick(e, casino.reviewPath!)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") handleReviewClick(e as unknown as React.MouseEvent, casino.reviewPath!);
                        }}
                        className={`block w-full text-center rounded-full ${compact ? "px-5 py-1.5" : "px-6 py-2"} text-xs font-bold text-white tracking-wider uppercase transition-all border border-[hsl(45,100%,55%)] shadow-[0_0_6px_hsla(45,100%,55%,0.25)] hover:shadow-[0_0_14px_hsla(45,100%,55%,0.55)] cursor-pointer`}
                        style={{ background: "linear-gradient(135deg, hsl(270,100%,55%), hsl(220,100%,55%))" }}
                      >
                        Ревю
                      </span>
                    )}
                    {casino.bonus && (
                      <div
                        className={`w-full rounded-full text-center font-bold tracking-wide text-white ${compact ? "py-1 px-3 text-xs" : "py-1.5 px-3 text-sm"}`}
                        style={{ background: "linear-gradient(135deg, hsl(270,100%,55%), hsl(220,100%,55%))" }}
                      >
                        {casino.bonus}
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="flex flex-col items-center gap-2 shrink-0">
                    <span className="btn-gradient rounded-full px-6 py-2 text-xs font-bold text-white tracking-wider uppercase transition-all group-hover:shadow-[0_0_20px_hsla(270,100%,65%,0.5)]">
                      Посети сайта
                    </span>
                    {casino.reviewPath && (
                      <span
                        role="button"
                        tabIndex={0}
                        onClick={(e) => handleReviewClick(e, casino.reviewPath!)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") handleReviewClick(e as unknown as React.MouseEvent, casino.reviewPath!);
                        }}
                        className="rounded-full px-5 py-1.5 text-xs font-bold text-white tracking-wider uppercase transition-all border border-[hsla(270,100%,65%,0.55)] bg-[hsla(270,80%,10%,0.5)] hover:bg-[hsla(270,80%,18%,0.7)] hover:shadow-[0_0_16px_hsla(270,100%,65%,0.55)] cursor-pointer"
                      >
                        Ревю
                      </span>
                    )}
                  </div>
                )}
              </a>
            ))}
          </div>
        )}

        <footer className="max-w-6xl mx-auto mt-16 mb-8">
          <div className="mb-8" aria-hidden />
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
          <p className="mt-4 text-center text-white text-xs leading-relaxed">
            AllBet е независим източник на информация, свързана с онлайн казината в България. AllBet не се управлява от никой от хазартните оператори.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3 text-white text-sm">
            <span>Последвайте ни в:</span>
            <a
              href="https://www.facebook.com/allbetbg"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Последвайте ни във Facebook"
              className="inline-flex items-center justify-center h-9 w-9 rounded-full text-white transition-all hover:shadow-[0_0_20px_hsla(270,100%,65%,0.6)] hover:scale-110"
              style={{ background: "linear-gradient(135deg, hsl(270,100%,55%), hsl(220,100%,55%))" }}
            >
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </footer>
      </div>

      <Dialog open={comingSoonOpen} onOpenChange={setComingSoonOpen}>
        <DialogContent
          className="border border-[hsla(270,100%,65%,0.5)] bg-[hsla(270,50%,6%,0.98)] backdrop-blur-xl shadow-[0_0_40px_hsla(270,100%,65%,0.35)] rounded-2xl sm:max-w-md p-8 duration-300 ease-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-90 data-[state=open]:zoom-in-90 [&>button]:opacity-100 [&>button]:text-white [&>button]:hover:text-white [&>button]:focus:ring-[hsla(270,100%,65%,0.6)] [&>button>svg]:h-5 [&>button>svg]:w-5"
        >
          <div className="flex items-center justify-center py-6">
            <h2
              className="text-center text-2xl md:text-3xl font-bold tracking-wide text-white"
              style={{
                fontFamily: "'Orbitron', sans-serif",
                textShadow: "0 0 8px hsla(270,100%,65%,0.6), 0 0 30px hsla(270,100%,65%,0.3)",
              }}
            >
              Очаквайте скоро
            </h2>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CasinoLayout;
