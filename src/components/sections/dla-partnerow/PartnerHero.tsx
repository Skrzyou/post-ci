import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/button";

export function PartnerHero() {
  return (
    <section className="border-b border-border px-6 py-20">
      <div className="mx-auto max-w-[1100px]">
        <Reveal>
          <p className="font-mono text-sm text-accent">Dla partnerów instytucjonalnych</p>
          <h1 className="mt-4 text-balance font-heading text-4xl font-semibold leading-tight sm:text-5xl md:max-w-[22ch]">
            Daj firmom członkowskim coś więcej niż kolejne wydarzenie
          </h1>
          <p className="mt-6 max-w-[60ch] text-pretty text-lg text-muted-foreground">
            Dwie firmy wnoszą problemy, z którymi naprawdę się mierzą. Dobieramy do nich właściwych
            praktyków. Każda firma wychodzi z jednym ruchem, a po 30 dniach sprawdzamy, co faktycznie się
            wydarzyło.
          </p>
          <p className="mt-4 text-balance font-heading text-lg font-medium">
            To nie jest kolejna prelekcja dla MŚP. To praca nad jednym z nich.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <Button
            render={<Link href="/kontakt?jestem=partner" />}
            nativeButton={false}
            size="lg"
            className="mt-8 transition-transform hover:-translate-y-0.5"
          >
            Umów rozmowę o pilotażu
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
