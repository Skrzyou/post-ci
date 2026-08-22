import { Reveal } from "@/components/motion/Reveal";

export function MetodaHero() {
  return (
    <section className="border-b border-border px-6 py-24">
      <div className="mx-auto max-w-[1100px]">
        <Reveal>
          <p className="font-mono text-sm text-accent">Metoda POST-CI</p>
          <h1 className="mt-4 text-balance font-heading text-4xl font-semibold leading-tight sm:text-5xl md:max-w-[22ch]">
            Najpierw widzimy całą firmę. Potem pogłębiamy jeden problem.
          </h1>
          <p className="mt-6 max-w-[64ch] text-pretty text-lg text-muted-foreground">
            Następnie wracamy po rozwiązania. Na końcu właściciel podejmuje jedną decyzję na 30 dni. Cały
            format opiera się na jednej zasadzie: najpierw pytania, potem hipotezy.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
