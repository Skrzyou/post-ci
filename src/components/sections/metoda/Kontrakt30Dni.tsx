import { Reveal } from "@/components/motion/Reveal";

export function Kontrakt30Dni() {
  return (
    <section className="border-b border-border px-6 py-24">
      <div className="mx-auto max-w-[1100px]">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <Reveal>
            <p className="font-mono text-sm text-accent">Krok 4</p>
            <h2 className="mt-3 text-balance font-heading text-3xl font-semibold md:max-w-[20ch]">
              Kontrakt 30 Dni
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Na końcu właściciel wybiera jeden ruch - nie najlepszy na świecie, nie największy, tylko
              taki, który naprawdę wykona w ciągu 30 dni. Kontrakt zostaje podpisany i sfotografowany, ze
              świadkiem z grupy.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-mono text-sm text-accent">Krok 5</p>
            <h2 className="mt-3 text-balance font-heading text-3xl font-semibold md:max-w-[20ch]">
              T+30
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Obowiązkowy follow-up, nie dodatek do formatu. Sprawdzamy, co dokładnie zrobi właściciel, po
              czym pozna, że działanie przynosi efekt, i czy ruch faktycznie ruszył.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
