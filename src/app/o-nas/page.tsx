import type { Metadata } from "next";
import { ONasHero } from "@/components/sections/o-nas/ONasHero";
import { KtoJestKim } from "@/components/sections/o-nas/KtoJestKim";
import { Geneza } from "@/components/sections/o-nas/Geneza";
import { Haslo } from "@/components/sections/o-nas/Haslo";
import { CtaKoncowe } from "@/components/sections/CtaKoncowe";

export const metadata: Metadata = {
  title: "O nas - Krzysztof Skrzypczak i Jakub Giełbaga",
  description:
    "POST-CI od początku budują wspólnie Krzysztof Skrzypczak (\"z hali, nie z folderu\") i Jakub Giełbaga (\"odradzam chaos w procesach\").",
};

export default function ONasPage() {
  return (
    <>
      <ONasHero />
      <KtoJestKim />
      <Geneza />
      <Haslo />
      <CtaKoncowe />
    </>
  );
}
