import { Reveal } from "@/components/motion/Reveal";

export function PartnerHero() {
  return (
    <section className="border-b border-border px-6 py-24">
      <div className="mx-auto max-w-[1100px]">
        <Reveal>
          <p className="font-mono text-sm text-accent">Dla partnerów instytucjonalnych</p>
          <h1 className="mt-4 text-balance font-heading text-4xl font-semibold leading-tight sm:text-5xl md:max-w-[22ch]">
            Sprawdzony format, nie kolejny event pod logo
          </h1>
          <p className="mt-6 max-w-[60ch] text-pretty text-lg text-muted-foreground">
            Nie budujemy kolejnego wydarzenia. Budujemy miejsce, w którym firma przynosi realny problem i
            wychodzi z jednym ruchem do sprawdzenia po 30 dniach.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
