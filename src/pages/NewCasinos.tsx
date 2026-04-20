import CasinoLayout from "@/components/CasinoLayout";
import { newCasinos } from "@/data/casinos";

const NewCasinos = () => (
  <CasinoLayout
    subtitle="Най-новите онлайн казина в България."
    casinos={newCasinos}
    variant="list"
  />
);

export default NewCasinos;
