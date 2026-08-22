import { Hero } from "@/components/sections/Hero";
import { Sciezki } from "@/components/sections/Sciezki";
import { JakDziala } from "@/components/sections/JakDziala";
import { Dowody } from "@/components/sections/Dowody";
import { Prowadzacy } from "@/components/sections/Prowadzacy";
import { CtaKoncowe } from "@/components/sections/CtaKoncowe";

export default function Home() {
  return (
    <>
      <Hero />
      <Sciezki />
      <JakDziala />
      <Dowody />
      <Prowadzacy />
      <CtaKoncowe />
    </>
  );
}
