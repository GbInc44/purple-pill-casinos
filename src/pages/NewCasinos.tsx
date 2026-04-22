import CasinoLayout from "@/components/CasinoLayout";
import { newCasinos } from "@/data/casinos";

const NewCasinos = () => (
  <CasinoLayout
    showDivider={false}
    subtitle={
      <>
        Най-новите онлайн казина в България.
        <span className="block mt-3 md:text-lg neon-text md:max-w-4xl max-w-2xl mx-auto leading-relaxed [text-wrap:balance] text-xs text-center" style={{ fontFamily: "'Orbitron', sans-serif", textShadow: "0 0 8px hsla(270,100%,65%,0.6), 0 0 30px hsla(270,100%,65%,0.3)" }}>
          Бъдете сред първите, които откриват новите лицензирани платформи на българския пазар.
        </span>
      </>
    }
    casinos={newCasinos}
    variant="list"
  />
);

export default NewCasinos;
