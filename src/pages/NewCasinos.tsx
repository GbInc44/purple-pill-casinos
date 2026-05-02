import CasinoLayout from "@/components/CasinoLayout";
import { newCasinos } from "@/data/casinos";
import { useCanonicalUrl } from "@/hooks/useCanonicalUrl";

const NewCasinos = () => {
  useCanonicalUrl("/novi-kazina");
  return (
  <CasinoLayout
    showDivider={false}
    cleanSubtitle
    subtitle={
      <>
        <h1
          className="font-extrabold tracking-tight text-white text-2xl md:text-4xl"
          style={{ textShadow: "0 3px 10px rgba(0,0,0,0.95), 0 2px 4px rgba(0,0,0,0.9), 0 0 24px hsla(270,100%,65%,0.55)" }}
        >
          Най-новите онлайн казина в България.
        </h1>
        <span
          className="block mt-3 max-w-2xl md:max-w-4xl mx-auto leading-snug [text-wrap:balance] text-center text-lg md:text-xl font-medium text-white"
          style={{ textShadow: "0 2px 8px rgba(0,0,0,0.9), 0 0 16px hsla(270,100%,65%,0.4)" }}
        >
          Бъдете сред първите, които откриват новите лицензирани платформи на българския пазар.
        </span>
      </>
    }
    casinos={newCasinos}
    variant="list"
    showProsCons
    compact
  />
  );
};

export default NewCasinos;
