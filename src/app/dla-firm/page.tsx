import type { Metadata } from "next";
import { DlaFirmHero } from "@/components/sections/dla-firm/DlaFirmHero";
import { DlaKogo } from "@/components/sections/dla-firm/DlaKogo";
import { CzyToDobryMoment } from "@/components/sections/dla-firm/CzyToDobryMoment";
import { LabVsInside } from "@/components/sections/dla-firm/LabVsInside";
import { Wspolpraca } from "@/components/sections/dla-firm/Wspolpraca";
import { CzegoNieRobimy } from "@/components/sections/dla-firm/CzegoNieRobimy";
import { FaqDlaFirm } from "@/components/sections/dla-firm/FaqDlaFirm";
import { CtaKoncowe } from "@/components/sections/CtaKoncowe";

const title = "Dla firm - POST-CI LAB i POST-CI INSIDE";
const description =
  "Bezpłatny POST-CI LAB albo płatny POST-CI INSIDE - dwie drogi dla właścicieli MŚP, które kończą się jednym Kontraktem 30 Dni.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description },
};

export default function DlaFirmPage() {
  return (
    <>
      <DlaFirmHero />
      <DlaKogo />
      <CzyToDobryMoment />
      <LabVsInside />
      <Wspolpraca />
      <CzegoNieRobimy />
      <FaqDlaFirm />
      <CtaKoncowe />
    </>
  );
}
