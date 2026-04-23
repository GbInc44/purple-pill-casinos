import CasinoLayout from "@/components/CasinoLayout";
import { allCasinos } from "@/data/casinos";

const Index = () => (
  <CasinoLayout
    showDivider={false}
    cleanSubtitle
    subtitle={
      <>
        <h1 className="md:text-5xl font-extrabold tracking-tight text-white text-2xl">
          Всички лицензирани онлайн казина в България на едно място.
        </h1>
        <span className="block mt-4 md:text-base max-w-2xl mx-auto leading-relaxed [text-wrap:balance] text-center text-base font-medium text-slate-200">
          Актуален списък с легални онлайн казина, лицензирани за българския пазар. Всичко необходимо, за да направите информиран избор.
        </span>
      </>
    }
    casinos={allCasinos}
  />
);

export default Index;
