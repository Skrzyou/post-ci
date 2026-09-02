import { Hero } from "@/components/sections/Hero";
import { BrzmiZnajomo } from "@/components/sections/BrzmiZnajomo";
import { CzymJestPostCi } from "@/components/sections/CzymJestPostCi";
import { JakDziala } from "@/components/sections/JakDziala";
import { DlaczegoWraca } from "@/components/sections/DlaczegoWraca";
import { AktaPostCi } from "@/components/sections/AktaPostCi";
import { Dowody } from "@/components/sections/Dowody";
import { Sciezki } from "@/components/sections/Sciezki";
import { CzyToDlaWas } from "@/components/sections/CzyToDlaWas";
import { Poufnosc } from "@/components/sections/Poufnosc";
import { Prowadzacy } from "@/components/sections/Prowadzacy";
import { Ekosystem } from "@/components/sections/Ekosystem";
import { CtaKoncowe } from "@/components/sections/CtaKoncowe";

export default function Home() {
  return (
    <>
      <Hero />
      <BrzmiZnajomo />
      <CzymJestPostCi />
      <JakDziala />
      <DlaczegoWraca />
      <AktaPostCi />
      <Dowody />
      <Sciezki />
      <CzyToDlaWas />
      <Poufnosc />
      <Prowadzacy />
      <Ekosystem />
      <CtaKoncowe />
    </>
  );
}
