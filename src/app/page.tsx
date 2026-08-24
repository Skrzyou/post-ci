import { Hero } from "@/components/sections/Hero";
import { BrzmiZnajomo } from "@/components/sections/BrzmiZnajomo";
import { DlaczegoWraca } from "@/components/sections/DlaczegoWraca";
import { AktaPostCi } from "@/components/sections/AktaPostCi";
import { JakDziala } from "@/components/sections/JakDziala";
import { Sciezki } from "@/components/sections/Sciezki";
import { Dowody } from "@/components/sections/Dowody";
import { Prowadzacy } from "@/components/sections/Prowadzacy";
import { CtaKoncowe } from "@/components/sections/CtaKoncowe";

export default function Home() {
  return (
    <>
      <Hero />
      <BrzmiZnajomo />
      <DlaczegoWraca />
      <AktaPostCi />
      <JakDziala />
      <Sciezki />
      <Dowody />
      <Prowadzacy />
      <CtaKoncowe />
    </>
  );
}
