import type { Metadata } from "next";
import { MetodaHero } from "@/components/sections/metoda/MetodaHero";
import { MasterMapa } from "@/components/sections/metoda/MasterMapa";
import { GoraLodowa } from "@/components/sections/metoda/GoraLodowa";
import { Laboratorium } from "@/components/sections/metoda/Laboratorium";
import { Kontrakt30Dni } from "@/components/sections/metoda/Kontrakt30Dni";
import { ZasadyNienaruszalne } from "@/components/sections/metoda/ZasadyNienaruszalne";
import { CtaKoncowe } from "@/components/sections/CtaKoncowe";

export const metadata: Metadata = {
  title: "Jak pracujemy - metoda POST-CI",
  description:
    "Master Mapa, Mini-Klinika (Góra Lodowa), Laboratorium rozwiązań i Kontrakt 30 Dni - metoda, nie improwizacja.",
  openGraph: {
    title: "Jak pracujemy - metoda POST-CI",
    description:
      "Master Mapa, Mini-Klinika (Góra Lodowa), Laboratorium rozwiązań i Kontrakt 30 Dni - metoda, nie improwizacja.",
  },
};

export default function MetodaPage() {
  return (
    <>
      <MetodaHero />
      <MasterMapa />
      <GoraLodowa />
      <Laboratorium />
      <Kontrakt30Dni />
      <ZasadyNienaruszalne />
      <CtaKoncowe />
    </>
  );
}
