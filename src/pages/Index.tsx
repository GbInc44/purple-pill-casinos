import CasinoLayout from "@/components/CasinoLayout";
import { allCasinos } from "@/data/casinos";

const Index = () => (
  <CasinoLayout
    subtitle={
      <>
        Всички лицензирани онлайн казина в България на едно място.
        <span className="block mt-2 text-sm md:text-base font-normal text-white/80 tracking-normal" style={{ fontFamily: "'Inter', sans-serif", textShadow: "none" }}>
          Актуален списък с легални онлайн казина, лицензирани за българския пазар. Всичко необходимо, за да направите информиран избор.
        </span>
      </>
    }
    casinos={allCasinos}
  />
);

export default Index;
