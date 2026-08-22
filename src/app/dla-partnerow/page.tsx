import type { Metadata } from "next";
import { PartnerHero } from "@/components/sections/dla-partnerow/PartnerHero";
import { PunktWyjscia } from "@/components/sections/dla-partnerow/PunktWyjscia";
import { WartoscDlaPartnera } from "@/components/sections/dla-partnerow/WartoscDlaPartnera";
import { Pilotaz } from "@/components/sections/dla-partnerow/Pilotaz";
import { Role } from "@/components/sections/dla-partnerow/Role";

export const metadata: Metadata = {
  title: "Dla partnerów - POST-CI Lab",
  description:
    "12-miesięczny pilotaż POST-CI dla partnerów instytucjonalnych - 4 edycje LAB-u rocznie, sprawdzony format, jasne role i finansowanie.",
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
