import type { Metadata } from "next";
import { SpecjalistaHero } from "@/components/sections/dla-specjalistow/SpecjalistaHero";
import { Kryteria } from "@/components/sections/dla-specjalistow/Kryteria";
import { ObszaryPuli } from "@/components/sections/dla-specjalistow/ObszaryPuli";
import { WnosiDostaje } from "@/components/sections/dla-specjalistow/WnosiDostaje";

export const metadata: Metadata = {
  title: "Dla specjalistów - pula ekspertów POST-CI",
  description:
    "Dołącz do puli 20-30 specjalistów POST-CI - praca przy realnym stole nad prawdziwymi problemami MŚP, bez sprzedaży i bez targu wizytówek.",
};

export default function DlaSpecjalistowPage() {
  return (
    <>
      <SpecjalistaHero />
      <Kryteria />
      <ObszaryPuli />
      <WnosiDostaje />
    </>
  );
}
