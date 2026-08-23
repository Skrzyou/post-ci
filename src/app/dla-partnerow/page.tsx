import type { Metadata } from "next";
import { PartnerHero } from "@/components/sections/dla-partnerow/PartnerHero";
import { PunktWyjscia } from "@/components/sections/dla-partnerow/PunktWyjscia";
import { WartoscDlaPartnera } from "@/components/sections/dla-partnerow/WartoscDlaPartnera";
import { Pilotaz } from "@/components/sections/dla-partnerow/Pilotaz";
import { Role } from "@/components/sections/dla-partnerow/Role";

const title = "Dla partnerów - POST-CI LAB";
const description =
  "12-miesięczny pilotaż POST-CI LAB dla partnerów instytucjonalnych - sprawdzony format, jasne role i finansowanie.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description },
};

export default function DlaPartnerowPage() {
  return (
    <>
      <PartnerHero />
      <PunktWyjscia />
      <WartoscDlaPartnera />
      <Pilotaz />
      <Role />
    </>
  );
}
