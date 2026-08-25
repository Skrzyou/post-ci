import { Reveal } from "@/components/motion/Reveal";

export function MetodaHero() {
  return (
    <section className="border-b border-border px-6 py-28">
      <div className="mx-auto max-w-[1100px]">
        <Reveal>
          <p className="font-mono text-sm text-accent">Metoda POST-CI</p>
          <h1 className="mt-4 text-balance font-heading text-4xl font-semibold leading-tight sm:text-5xl md:max-w-[22ch]">
            Najpierw budujemy szerszy obraz firmy. Potem pogłębiamy jeden problem.
          </h1>
          <p className="mt-6 max-w-[64ch] text-pretty text-lg text-muted-foreground">
            Nie zaczynamy od narzędzia. Zaczynamy od problemu i faktów, które pokazują, dlaczego ciągle
            wraca. Dopiero potem szukamy rozwiązań. Na końcu właściciel wybiera jedno działanie do
            sprawdzenia w ciągu 30 dni. Cały format opiera się na jednej zasadzie: najpierw pytania,
            potem hipotezy.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
