import type { Metadata } from "next";
import { SpecjalistaHero } from "@/components/sections/dla-specjalistow/SpecjalistaHero";
import { Kryteria } from "@/components/sections/dla-specjalistow/Kryteria";
import { ObszaryPuli } from "@/components/sections/dla-specjalistow/ObszaryPuli";
import { WnosiDostaje } from "@/components/sections/dla-specjalistow/WnosiDostaje";

const title = "Dla specjalistów - pula ekspertów POST-CI LAB";
const description =
  "Dołącz do puli 20–30 specjalistów POST-CI LAB - praca nad realnymi problemami MŚP, bez sprzedaży i bez wymiany wizytówek.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description },
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
