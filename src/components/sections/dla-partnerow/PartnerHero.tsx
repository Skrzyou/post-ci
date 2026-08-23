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
            Sprawdzony format pracy z realnymi problemami MŚP
          </h1>
          <p className="mt-6 max-w-[60ch] text-pretty text-lg text-muted-foreground">
            Miejsce, w którym firma przynosi realny problem i wychodzi z jednym ruchem do sprawdzenia po
            30 dniach - trzy razy zrealizowane w praktyce, nie tylko opisane na papierze.
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
