import { useState } from "react";
import { Menu, Facebook } from "lucide-react";
import { useCanonicalUrl } from "@/hooks/useCanonicalUrl";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import casinoBg from "@/assets/casino-bg.png";
import allBetLogo from "@/assets/all-bet-logo.png";
import bigJoker from "@/assets/big-joker.png";
import burningHot from "@/assets/40-burning-hot.png";
import keshShans from "@/assets/kesh-shans.webp";
import olympusGlory from "@/assets/olympus-glory.png";
import megaSlotDiamondTree from "@/assets/20-mega-slot-diamond-tree.png";
import superHot20 from "@/assets/20-super-hot.webp";
import keshShans2 from "@/assets/kesh-shans-2.webp";
import burningHot2 from "@/assets/40-burning-hot-2.png";
import regalSpins10 from "@/assets/regal-spins-10.png";

interface Winning {
  casino: string;
  date: string;
  win: string;
  bet: string;
  game: string;
  image: string;
  url?: string;
}

const winnings: Winning[] = [
  {
    casino: "Palmsbet",
    date: "05/05/26",
    win: "56 126.94 €",
    bet: "10 €",
    game: "Regal Spins 10",
    image: regalSpins10,
    url: "https://news.palmsbet.com/jackpot-regal-win/",
  },
  {
    casino: "Palms Bet",
    date: "25/04/26",
    win: "50 300.00 €",
    bet: "100 €",
    game: "20 Super Hot",
    image: superHot20,
    url: "https://news.palmsbet.com/20-super-hot-pechalba/",
  },
  {
    casino: "Palms Bet",
    date: "24/04/26",
    win: "22 085.79 €",
    bet: "0.60 €",
    game: "20 Mega Slot Diamond Tree JP",
    image: megaSlotDiamondTree,
    url: "https://news.palmsbet.com/20-mega-slot-diamond-tree/",
  },
  {
    casino: "Winbet",
    date: "18/04/26",
    win: "3 139 280 €",
    bet: "10 €",
    game: "40 Burning Hot",
    image: burningHot,
    url: "https://news.winbet.bg/articles/breaking-news-nov-rekord-za-dzhakpot-pechalba-na-sayta-na-winbet/",
  },
  {
    casino: "Palms Bet",
    date: "17/04/26",
    win: "34 850.81 €",
    bet: "0.10 €",
    game: "Big Joker",
    image: bigJoker,
    url: "https://news.palmsbet.com/hot-luck-major-big-joker/",
  },
  {
    casino: "Palms Bet",
    date: "03/04/26",
    win: "15 187.50 €",
    bet: "15 €",
    game: "Olympus glory",
    image: olympusGlory,
    url: "https://news.palmsbet.com/olympus-glory-win/",
  },
  {
    casino: "Winbet",
    date: "30/03/26",
    win: "50 000 €",
    bet: "",
    game: "КЕШ ШАНС",
    image: keshShans,
    url: "https://news.winbet.bg/articles/breaking-news-otnovo-golyama-nagrada-za-50-000-evro-v-kesh-shans-na-winbet/",
  },
  {
    casino: "Palms Bet",
    date: "27/03/26",
    win: "18 000.00 €",
    bet: "6 €",
    game: "40 Burning Hot",
    image: burningHot2,
    url: "https://news.palmsbet.com/40-burning-hot-win-3/",
  },
  {
    casino: "Winbet",
    date: "02/03/26",
    win: "50 000 €",
    bet: "",
    game: "КЕШ ШАНС",
    image: keshShans2,
    url: "https://news.winbet.bg/articles/breaking-news-spechelena-nagrada-za-50-000-evro-v-kesh-shans-na-winbet/",
  },
];

const Winnings = () => {
  useCanonicalUrl("/pechalbi");
  const [menuOpen, setMenuOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(6);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const go = (path: string) => {
    setMenuOpen(false);
    navigate(path);
  };

  const navBtnClass = (path: string, extra = "") =>
    `nav-btn ${pathname === path ? "nav-btn-active" : ""} ${extra}`.trim();

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed bg-no-repeat relative"
      style={{ backgroundImage: `url(${casinoBg})` }}
    >
      <div className="fixed inset-0 animated-overlay pointer-events-none" />

      <nav className="nav-bar sticky top-0 z-50 w-full max-w-full px-3 sm:px-4 py-2 overflow-visible">
        <div className="flex items-center justify-between w-full max-w-full gap-2">
          <Link
            to="/"
            className="shrink-0 inline-block relative aspect-[179/60] h-10 sm:h-12 md:h-14 -my-1 sm:-my-2 overflow-visible"
            aria-label="All Bet — към началната страница"
          >
            <img
              src={allBetLogo}
              alt="All Bet"
              className="absolute left-0 top-0 h-full w-auto max-w-none pointer-events-none"
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
              <SheetTitle className="sr-only">Навигация</SheetTitle>
              <SheetDescription className="sr-only">Меню за навигация</SheetDescription>
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

      <div className="relative z-10 py-10 px-4">
        <header className="text-center mb-4">
          <div className="text-center">
            <h1
              className="font-extrabold tracking-tight text-white text-2xl md:text-4xl"
              style={{ textShadow: "0 3px 10px rgba(0,0,0,0.95), 0 2px 4px rgba(0,0,0,0.9), 0 0 24px hsla(270,100%,65%,0.55)" }}
            >
              Обявени печалби
            </h1>
            <span
              className="block mt-3 max-w-2xl md:max-w-4xl mx-auto leading-snug [text-wrap:balance] text-center text-lg md:text-xl font-medium text-white"
              style={{ textShadow: "0 2px 8px rgba(0,0,0,0.9), 0 0 16px hsla(270,100%,65%,0.4)" }}
            >
              Актуални печалби от различни видове игри, обявени от казината в техните информационни портали.
            </span>
          </div>
        </header>

        <div className="max-w-md mx-auto mb-12" aria-hidden />

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {winnings.slice(0, visibleCount).map((w, index) => {
            const Tag: any = w.url ? "a" : "div";
            const linkProps = w.url
              ? { href: w.url, target: "_blank", rel: "noopener noreferrer" }
              : {};
            return (
              <Tag
                key={index}
                {...linkProps}
                className={`group glass-card card-animate rounded-2xl px-5 py-5 flex flex-col items-center gap-4 h-full ${w.url ? "cursor-pointer" : ""}`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="w-full text-center font-bold text-white text-base tracking-wide">
                  {w.casino} {w.date}
                </div>

                <div className="w-full aspect-video rounded-xl overflow-hidden border border-white/5 bg-black/40 flex items-center justify-center">
                  <img src={w.image} alt={w.game} className="w-full h-full object-cover" />
                </div>

                <div className="w-full text-center text-white text-sm md:text-base font-semibold">
                  {w.bet ? `Печалба ${w.win} / Залог ${w.bet} | ${w.game}` : `Печалба ${w.win} | ${w.game}`}
                </div>

                {w.url && (
                  <span
                    className="mt-auto inline-block rounded-full px-6 py-2 text-xs font-bold text-white tracking-wider uppercase transition-all group-hover:shadow-[0_0_20px_hsla(270,100%,65%,0.5)]"
                    style={{ background: "linear-gradient(135deg, hsl(270,100%,55%), hsl(220,100%,55%))" }}
                  >
                    Виж повече
                  </span>
                )}
              </Tag>
            );
          })}
        </div>

        {visibleCount < winnings.length && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setVisibleCount((c) => c + 6)}
              className="rounded-full px-8 py-3 text-sm font-bold text-white tracking-wider uppercase transition-all hover:shadow-[0_0_24px_hsla(270,100%,65%,0.6)]"
              style={{ background: "linear-gradient(135deg, hsl(270,100%,55%), hsl(220,100%,55%))" }}
            >
              ПОКАЖИ ОЩЕ
            </button>
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
    </div>
  );
};

export default Winnings;
