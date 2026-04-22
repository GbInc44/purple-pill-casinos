import CasinoLayout from "@/components/CasinoLayout";
import { allCasinos } from "@/data/casinos";

const Index = () => (
  <CasinoLayout
    showDivider={false}
    subtitle={
      <>
        Всички лицензирани онлайн казина в България на едно място.
        <span className="block mt-3 md:text-lg neon-text text-sm max-w-2xl mx-auto leading-relaxed [text-wrap:balance]" style={{ fontFamily: "'Orbitron', sans-serif", textShadow: "0 0 8px hsla(270,100%,65%,0.6), 0 0 30px hsla(270,100%,65%,0.3)" }}>
          Актуален списък с легални онлайн казина, лицензирани за българския пазар. Всичко необходимо, за да направите информиран избор.
        </span>
      </>
    }
    casinos={allCasinos}
  />
);

export default Index;
