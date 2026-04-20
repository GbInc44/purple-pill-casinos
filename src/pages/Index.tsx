import CasinoLayout from "@/components/CasinoLayout";
import { allCasinos } from "@/data/casinos";

const Index = () => (
  <CasinoLayout
    subtitle="Всички лицензирани онлайн казина в България на едно място."
    casinos={allCasinos}
  />
);

export default Index;
