import CasinoLayout from "@/components/CasinoLayout";
import { allCasinos } from "@/data/casinos";

const Index = () => (
  <CasinoLayout
    showDivider={false}
    cleanSubtitle
    subtitle={
      <>
        <h1 className="font-extrabold tracking-tight text-white text-2xl md:text-4xl">
          Всички лицензирани онлайн казина в България на едно място.
        </h1>
        <span className="block mt-3 max-w-2xl mx-auto leading-snug [text-wrap:balance] text-center text-lg md:text-xl font-medium text-white">
          Актуален списък с легални онлайн казина, лицензирани за българския пазар. Всичко необходимо, за да направите информиран избор.
        </span>
      </>
    }
    casinos={allCasinos}
  />
);

export default Index;
