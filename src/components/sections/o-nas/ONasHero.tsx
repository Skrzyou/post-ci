import { Reveal } from "@/components/motion/Reveal";

export function ONasHero() {
  return (
    <section className="border-b border-border px-6 py-28">
      <div className="mx-auto max-w-[1100px]">
        <Reveal>
          <p className="font-mono text-sm text-accent-text">O nas</p>
          <h1 className="mt-4 text-balance font-heading text-4xl font-semibold leading-tight sm:text-5xl md:max-w-[20ch]">
            Dwie osoby, jeden format
          </h1>
          <p className="mt-6 max-w-[60ch] text-pretty text-lg text-muted-foreground">
            POST-CI od początku budują wspólnie Krzysztof i Jakub - razem wspierają, organizują i
            współfinansują rozwój formatu.
          </p>
          <p className="mt-4 max-w-[60ch] text-pretty font-medium text-foreground">
            Nie interesuje nas złapanie właściciela na błędzie. Interesuje nas moment, w którym firma może
            zobaczyć mechanizm bez udawania i bez utraty twarzy.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
