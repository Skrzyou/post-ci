import type { Metadata } from "next";
import { ONasHero } from "@/components/sections/o-nas/ONasHero";
import { KtoJestKim } from "@/components/sections/o-nas/KtoJestKim";
import { Geneza } from "@/components/sections/o-nas/Geneza";
import { Specjalisci } from "@/components/sections/o-nas/Specjalisci";
import { Haslo } from "@/components/sections/o-nas/Haslo";
import { CtaKoncowe } from "@/components/sections/CtaKoncowe";

const title = "O nas - Krzysztof Skrzypczak i Jakub Giełbaga";
const description =
  "POST-CI LAB od początku budują wspólnie Krzysztof Skrzypczak (\"z hali, nie z folderu\") i Jakub Giełbaga (\"odradzam chaos w procesach\").";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description },
};

export default function ONasPage() {
  return (
    <>
      <ONasHero />
      <KtoJestKim />
      <Geneza />
      <Specjalisci />
      <Haslo />
      <CtaKoncowe />
    </>
  );
}
