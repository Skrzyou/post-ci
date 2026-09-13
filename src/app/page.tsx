import { Hero } from "@/components/sections/Hero";
import { BrzmiZnajomo } from "@/components/sections/BrzmiZnajomo";
import { Sciezki } from "@/components/sections/Sciezki";
import { NieMusiszSieTlumaczyc } from "@/components/sections/NieMusiszSieTlumaczyc";
import { AktaPostCi } from "@/components/sections/AktaPostCi";
import { Dowody } from "@/components/sections/Dowody";
import { JakDziala } from "@/components/sections/JakDziala";
import { CzyToDlaWas } from "@/components/sections/CzyToDlaWas";
import { Poufnosc } from "@/components/sections/Poufnosc";
import { Prowadzacy } from "@/components/sections/Prowadzacy";
import { FaqHome } from "@/components/sections/FaqHome";
import { Ekosystem } from "@/components/sections/Ekosystem";
import { CtaKoncowe } from "@/components/sections/CtaKoncowe";

export default function Home() {
  return (
    <>
      <Hero />
      <BrzmiZnajomo />
      <Sciezki />
      <NieMusiszSieTlumaczyc />
      <AktaPostCi />
      <Dowody />
      <JakDziala />
      <CzyToDlaWas />
      <Poufnosc />
      <Prowadzacy />
      <FaqHome />
      <Ekosystem />
      <CtaKoncowe />
    </>
  );
}
