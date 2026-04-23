import CasinoLayout from "@/components/CasinoLayout";
import { allCasinos } from "@/data/casinos";

const Index = () => (
  <CasinoLayout
    showDivider={false}
    cleanSubtitle
    subtitle={
      <>
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
          Всички лицензирани онлайн казина в България на едно място.
        </h1>
        <span className="block mt-4 text-sm md:text-base font-normal text-white/70 max-w-2xl mx-auto leading-relaxed [text-wrap:balance] text-center">
          Актуален списък с легални онлайн казина, лицензирани за българския пазар. Всичко необходимо, за да направите информиран избор.
        </span>
      </>
    }
    casinos={allCasinos}
  />
);

export default Index;
