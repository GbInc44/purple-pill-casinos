import { useNavigate } from "react-router-dom";
import { ArrowLeft, Clock, Gift, Gamepad2, Wallet, Timer, Coins, Mail, Phone, Star } from "lucide-react";
import casinoBg from "@/assets/casino-bg.png";
import palmsbetLogo from "@/assets/palmsbet-logo-new.png";
import { useCanonicalUrl } from "@/hooks/useCanonicalUrl";

const affiliateUrl =
  "https://www.palmsbet.com/affiliate/?marketingCode=PB-0594&banID=&brand=ecasino&ns=&clickid=&pages=welcome-bonus-casino-affiliate";

type PaymentRow = { name: string; min: string; max: string; initials: string; color: string };

const depositMethods: PaymentRow[] = [
  { name: "A1 Wallet", min: "5€", max: "50€", initials: "A1", color: "hsl(0,80%,55%)" },
  { name: "Apple Pay", min: "5€", max: "5000€", initials: "AP", color: "hsl(0,0%,15%)" },
  { name: "Cashterminal", min: "5€", max: "2500€", initials: "CT", color: "hsl(150,60%,40%)" },
  { name: "Easy Pay", min: "5€", max: "5000€", initials: "EP", color: "hsl(30,90%,50%)" },
  { name: "ePay", min: "5€", max: "1500€", initials: "eP", color: "hsl(210,80%,50%)" },
  { name: "Fast Pay", min: "5€", max: "2500€", initials: "FP", color: "hsl(50,90%,50%)" },
  { name: "Google Pay", min: "5€", max: "5000€", initials: "G", color: "hsl(220,80%,55%)" },
  { name: "Mastercard", min: "5€", max: "5000€", initials: "MC", color: "hsl(15,80%,55%)" },
  { name: "Skrill", min: "5€", max: "25000€", initials: "Sk", color: "hsl(280,60%,50%)" },
  { name: "Visa", min: "5€", max: "5000€", initials: "V", color: "hsl(220,90%,40%)" },
  { name: "Банков превод", min: "5€", max: "5000€", initials: "БП", color: "hsl(200,30%,45%)" },
  { name: "Български пощи", min: "5€", max: "5000€", initials: "БГ", color: "hsl(45,90%,50%)" },
];

const withdrawMethods: PaymentRow[] = [
  { name: "Cashterminal", min: "15€", max: "2500€", initials: "CT", color: "hsl(150,60%,40%)" },
  { name: "Easy Pay", min: "15€", max: "2500€", initials: "EP", color: "hsl(30,90%,50%)" },
  { name: "ePay", min: "15€", max: "2500€", initials: "eP", color: "hsl(210,80%,50%)" },
  { name: "Fast Pay", min: "15€", max: "2500€", initials: "FP", color: "hsl(50,90%,50%)" },
  { name: "Mastercard", min: "15€", max: "5000€", initials: "MC", color: "hsl(15,80%,55%)" },
  { name: "Skrill", min: "15€", max: "2500€", initials: "Sk", color: "hsl(280,60%,50%)" },
  { name: "Visa", min: "15€", max: "5000€", initials: "V", color: "hsl(220,90%,40%)" },
  { name: "Банков превод", min: "15€", max: "5000€", initials: "БП", color: "hsl(200,30%,45%)" },
  { name: "Български пощи", min: "15€", max: "5000€", initials: "БГ", color: "hsl(45,90%,50%)" },
];

const InfoTile = ({
  icon: Icon,
  label,
  hue,
  children,
}: {
  icon: React.ElementType;
  label: string;
  hue: number;
  children: React.ReactNode;
}) => (
  <div
    className="relative rounded-2xl px-4 py-4 pt-5 border flex flex-col gap-2 backdrop-blur-md items-center text-center"
    style={{
      background: `linear-gradient(135deg, hsla(${hue},60%,18%,0.55), hsla(${hue},50%,8%,0.55))`,
      borderColor: `hsla(${hue},80%,55%,0.35)`,
    }}
  >
    <span
      className="absolute top-0 left-0 inline-flex h-6 w-6 items-center justify-center rounded-tl-2xl rounded-br-lg"
      style={{ background: `hsl(${hue},80%,50%)` }}
    >
      <Icon className="h-3 w-3 text-white" />
    </span>
    <span className="text-[11px] tracking-wider font-bold text-white/90 uppercase font-['Orbitron'] w-full text-center min-h-[2rem] flex items-center justify-center">
      {label}
    </span>
    <div className="text-white text-sm w-full flex flex-col items-center">{children}</div>
  </div>
);

const PaymentTable = ({ title, rows, accentHue }: { title: string; rows: PaymentRow[]; accentHue: number }) => (
  <div
    className="rounded-2xl border backdrop-blur-md overflow-hidden"
    style={{
      background: "linear-gradient(135deg, rgba(40,42,50,0.5), rgba(22,24,30,0.55))",
      borderColor: `hsla(${accentHue},80%,60%,0.35)`,
    }}
  >
    <div
      className="px-4 py-3 text-center font-bold text-white text-sm tracking-wider uppercase font-['Orbitron']"
      style={{ background: `hsla(${accentHue},70%,25%,0.55)` }}
    >
      {title}
    </div>
    <div className="grid grid-cols-[1fr_auto_auto] gap-x-3 gap-y-0 px-3 py-2 text-[10px] sm:text-xs tracking-wider uppercase text-white/60 border-b border-white/10">
      <span>Метод</span>
      <span className="text-right">Мин.</span>
      <span className="text-right">Макс.</span>
    </div>
    <div className="flex flex-col">
      {rows.map((r, i) => (
        <div
          key={r.name}
          className="grid grid-cols-[1fr_auto_auto] gap-x-3 items-center px-3 py-2 text-sm text-white border-b border-white/5 last:border-b-0"
          style={{ background: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent" }}
        >
          <div className="flex items-center gap-2 min-w-0">
            <span
              className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white"
              style={{ background: r.color }}
            >
              {r.initials}
            </span>
            <span className="truncate">{r.name}</span>
          </div>
          <span className="text-right font-mono text-xs sm:text-sm">{r.min}</span>
          <span className="text-right font-mono text-xs sm:text-sm">{r.max}</span>
        </div>
      ))}
    </div>
  </div>
);

const PalmsBetReview = () => {
  useCanonicalUrl("/kazino/palms-bet");
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed bg-no-repeat relative"
      style={{ backgroundImage: `url(${casinoBg})` }}
    >
      <div className="fixed inset-0 animated-overlay pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-8">
        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold tracking-wider uppercase bg-transparent border transition-all"
          style={{
            color: "hsl(45, 100%, 55%)",
            borderColor: "hsl(45, 100%, 55%)",
            boxShadow: "0 0 6px hsla(45, 100%, 55%, 0.25)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = "0 0 14px hsla(45, 100%, 55%, 0.55)";
            e.currentTarget.style.filter = "brightness(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "0 0 6px hsla(45, 100%, 55%, 0.25)";
            e.currentTarget.style.filter = "none";
          }}
          onMouseDown={(e) => {
            e.currentTarget.style.transform = "translateY(1px)";
          }}
          onMouseUp={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
          }}
          aria-label="Назад към предишната страница"
        >
          <ArrowLeft className="h-4 w-4" />
          Назад
        </button>

        {/* Heading */}
        <header className="mt-8 mb-6 text-center">
          <h1
            className="font-extrabold tracking-tight text-white text-2xl md:text-4xl"
            style={{ textShadow: "0 3px 10px rgba(0,0,0,0.95), 0 2px 4px rgba(0,0,0,0.9), 0 0 24px hsla(270,100%,65%,0.55)" }}
          >
            Ревю на Palms Bet
          </h1>
          <span
            className="block mt-3 max-w-2xl md:max-w-4xl mx-auto leading-snug [text-wrap:balance] text-center text-lg md:text-xl font-medium text-white"
            style={{ textShadow: "0 2px 8px rgba(0,0,0,0.9), 0 0 16px hsla(270,100%,65%,0.4)" }}
          >
            Palms Bet предлага удобни и достатъчно на брой методи за депозит и теглене, щедри
            начални бонуси и отлично обслужване на ваше разположение 24/7. Престижната компания
            осигурява многобройни пазари, инструменти за залог и конкурентни коефициенти, в някои
            случаи по-добри от конкурентите си.
          </span>
        </header>

        {/* Summary section */}
        <section className="mt-8">


          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] gap-5">
            {/* Left: brand panel */}
            <div
              className="rounded-2xl p-6 flex flex-col items-center gap-5 backdrop-blur-md border"
              style={{
                background: "linear-gradient(135deg, rgba(20,22,28,0.85), rgba(10,12,18,0.9))",
                borderColor: "hsla(270,100%,65%,0.35)",
                boxShadow: "0 0 24px hsla(270,100%,65%,0.18) inset",
              }}
            >
              <div className="h-24 w-full rounded-xl bg-black/50 flex items-center justify-center overflow-hidden border border-white/10">
                <img src={palmsbetLogo} alt="Palms Bet — лого" className="h-full w-full object-contain p-2" />
              </div>

              <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95">
                <span className="font-bold text-black text-sm">4.8/5</span>
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[hsl(150,80%,45%)] text-[hsl(150,80%,45%)]" />
                  ))}
                </div>
              </div>

              <a
                href={affiliateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gradient w-full block text-center rounded-full px-6 py-3 text-sm font-bold text-white tracking-wider uppercase hover:shadow-[0_0_20px_hsla(270,100%,65%,0.55)] transition-all"
              >
                Вход в Palms Bet
              </a>




              <div className="text-white/60 text-xs flex items-center gap-2">
                <span>Съвместимост:</span>
                <span className="font-bold text-white/80">Windows · macOS · iOS · Android</span>
              </div>
            </div>

            {/* Right: tiles */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 content-start">
              <InfoTile icon={Clock} label="Ключова информация" hue={180}>
                <div className="space-y-1 text-sm">
                  <div>Основан: <span className="font-bold">2005</span></div>
                  <div>Лиценз: <span className="font-bold">ДКХ към НАП</span></div>
                </div>
              </InfoTile>

              <InfoTile icon={Gift} label="Начален бонус" hue={20}>
                <div className="space-y-1 text-sm">
                  <div className="font-bold">100% до 100 €</div>
                  <a href="#bonuses" className="text-xs underline text-white/70 hover:text-white">Още…</a>
                </div>
              </InfoTile>

              <InfoTile icon={Gamepad2} label="Игри" hue={170}>
                <div className="space-y-1 text-sm">
                  <div>Слотове, на живо, спорт</div>
                  <a
                    href={affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs underline text-white/70 hover:text-white"
                  >
                    Към игрите
                  </a>
                </div>
              </InfoTile>

              <InfoTile icon={Wallet} label="Плащания" hue={195}>
                <div className="flex flex-wrap gap-1.5 items-center">
                  <span className="px-2 py-0.5 rounded bg-[hsl(50,90%,50%)] text-[10px] font-bold text-black">Easy</span>
                  <span className="px-2 py-0.5 rounded bg-black text-[10px] font-bold text-white">Pay</span>
                  <span className="px-2 py-0.5 rounded bg-[hsl(280,60%,50%)] text-[10px] font-bold text-white">Skrill</span>
                  <a href="#payments" className="text-xs underline text-white/70 hover:text-white ml-1">Още…</a>
                </div>
              </InfoTile>

              <InfoTile icon={Timer} label="Най-бързо изплащане" hue={20}>
                <div className="font-bold">1–3 дни</div>
              </InfoTile>

              <InfoTile icon={Coins} label="Мин/Макс депозит" hue={195}>
                <div className="font-bold">€10 / €1000</div>
              </InfoTile>
            </div>
          </div>

          {/* Contact + providers */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div
              className="rounded-2xl px-5 py-4 backdrop-blur-md border space-y-2"
              style={{
                background: "linear-gradient(135deg, rgba(40,42,50,0.5), rgba(22,24,30,0.55))",
                borderColor: "hsla(270,100%,65%,0.25)",
              }}
            >


              <div className="flex items-center gap-3 text-white text-sm">
                <Mail className="h-4 w-4 text-[hsl(270,100%,65%)]" />
                <a href="mailto:support@palmsbet.com" className="hover:underline">support@palmsbet.com</a>
              </div>
              <div className="flex items-center gap-3 text-white text-sm">
                <Phone className="h-4 w-4 text-[hsl(270,100%,65%)]" />
                <a href="tel:070045700" className="hover:underline">0700 45 700</a>
              </div>
            </div>
            <div
              className="rounded-2xl px-5 py-4 backdrop-blur-md border"
              style={{
                background: "linear-gradient(135deg, rgba(40,42,50,0.5), rgba(22,24,30,0.55))",
                borderColor: "hsla(270,100%,65%,0.25)",
              }}
            >
              <h3 className="text-[11px] tracking-wider uppercase text-white/70 font-['Orbitron'] font-bold mb-2">
                Доставчици на софтуер
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Pragmatic Play", "Amusnet", "Playson", "Spinomenal", "Wazdan", "Endorphina"].map((p) => (
                  <span key={p} className="px-2.5 py-1 rounded-full text-xs text-white/85 border border-white/15 bg-white/5">
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-4 text-center">
            <span className="text-xs text-white/60 font-mono">Последен ъпдейт: 27.05.2026</span>
          </div>
        </section>

        {/* Payment methods section */}
        <section id="payments" className="mt-12">
          <h2
            className="text-2xl md:text-3xl font-bold text-white font-['Orbitron'] tracking-wide mb-4"
            style={{ textShadow: "0 0 10px hsla(270,100%,65%,0.6)" }}
          >
            Платежни методи
          </h2>
          <p
            className="text-white text-sm md:text-base leading-relaxed mb-6 max-w-4xl font-medium"
            style={{ textShadow: "0 2px 8px rgba(0,0,0,0.9), 0 0 16px hsla(270,100%,65%,0.4)" }}
          >
            Palms Bet предоставя широк избор от методи за депозит и теглене — Apple Pay, Google Pay,
            A1 Wallet, Fast Pay, Easy Pay и др. За депозиране можете да изберете между следните
            опции: Apple Pay, A1 Wallet, Fast Pay, Easy Pay, ePay, Cashterminal и др. Други методи
            са: Skrill, eP, кредитни карти от MasterCard, Visa, Visa Electron и Maestro. Можете
            също да депозирате в Български пощи. За теглене на печалбите ви на ваше разположение са
            горните дебитни и кредитни карти, Fast Pay, ePay, Easy Pay, Cashterminal и Skrill, както
            и онлайн чрез банков превод. Минималната сума за депозиране чрез трансфер от КЕШ-каса
            гранцира с останалите стотни левови опции. Само банков трансфер е стандартизиран.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <PaymentTable title="Начини за депозиране" rows={depositMethods} accentHue={0} />
            <PaymentTable title="Опции за теглене" rows={withdrawMethods} accentHue={150} />
          </div>
        </section>

        {/* Bottom CTA */}
        <section id="bonuses" className="mt-12 mb-8">
          <div
            className="rounded-2xl px-6 py-8 text-center backdrop-blur-md border"
            style={{
              background: "linear-gradient(135deg, hsla(270,80%,20%,0.6), hsla(320,80%,20%,0.6))",
              borderColor: "hsla(270,100%,65%,0.45)",
              boxShadow: "0 0 30px hsla(270,100%,65%,0.25)",
            }}
          >
            <h2
              className="text-2xl md:text-3xl font-bold text-white font-['Orbitron'] tracking-wide mb-2"
              style={{ textShadow: "0 0 12px hsla(270,100%,65%,0.7)" }}
            >
              Готови ли сте за Palms Bet?
            </h2>
            <p className="text-white/85 mb-5">
              Начален бонус 100% до 100 €. Регистрирайте се през нашия линк.
            </p>
            <a
              href={affiliateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gradient inline-block rounded-full px-8 py-3 text-sm font-bold text-white tracking-wider uppercase hover:shadow-[0_0_24px_hsla(270,100%,65%,0.6)] transition-all"
            >
              Вход в Palms Bet
            </a>
            <p className="mt-4 text-white/55 text-xs">
              Само за лица над 18 г. Играйте отговорно.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PalmsBetReview;
