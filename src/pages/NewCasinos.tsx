import CasinoLayout from "@/components/CasinoLayout";
import { newCasinos } from "@/data/casinos";

const NewCasinos = () => (
  <CasinoLayout
    showDivider={false}
    cleanSubtitle
    subtitle={
      <>
        <h1 className="font-extrabold tracking-tight text-white text-2xl md:text-4xl">
          Най-новите онлайн казина в България.
        </h1>
        <span className="block mt-3 max-w-2xl md:max-w-4xl mx-auto leading-snug [text-wrap:balance] text-center text-lg md:text-xl font-medium text-white">
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

export default NewCasinos;
