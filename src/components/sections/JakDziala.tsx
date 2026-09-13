import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerList } from "@/components/motion/StaggerList";

const kroki = [
  { numer: "01", tytul: "Problem", opis: "Realny problem, nie temat do burzy mózgów." },
  { numer: "02", tytul: "Fakty", opis: "Co się dzieje, gdzie i jak często." },
  { numer: "03", tytul: "Mechanizm", opis: "Co naprawdę podtrzymuje problem." },
  { numer: "04", tytul: "Ruch", opis: "Jeden ruch zamiast dwudziestu pomysłów." },
  { numer: "05", tytul: "30 dni", opis: "Czas na wykonanie i obserwację." },
  { numer: "06", tytul: "Sprawdzenie", opis: "T+30 - co wydarzyło się naprawdę." },
];

export function JakDziala() {
  return (
    <section id="jak-pracujemy" className="border-b border-border bg-surface px-6 py-28">
      <div className="mx-auto max-w-[1100px]">
        <Reveal>
          <h2 className="text-balance font-heading text-3xl font-semibold md:max-w-[24ch]">
            Jak pracujemy
          </h2>
        </Reveal>

        <StaggerList className="mt-10 flex list-none flex-col gap-0 p-0">
          {kroki.map((krok) => (
            <div
              key={krok.numer}
              className="grid grid-cols-[auto_1fr] items-baseline gap-x-4 gap-y-1 border-t border-border py-4 sm:grid-cols-[auto_auto_1fr]"
            >
              <p className="font-mono text-2xl font-semibold text-accent-text">{krok.numer} /</p>
              <h3 className="font-heading text-xl font-bold uppercase tracking-wide">{krok.tytul}</h3>
              <p className="col-span-2 text-pretty text-sm text-muted-foreground sm:col-span-1">
                {krok.opis}
              </p>
            </div>
          ))}
        </StaggerList>

        <Reveal delay={0.2}>
          <p className="mt-10 text-balance font-heading text-xl font-medium leading-snug md:max-w-[48ch]">
            Po 30 dniach sprawdzamy rzeczywistość, nie nastrój po spotkaniu.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <Link
            href="/metoda"
            className="mt-10 inline-flex items-center gap-1 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
          >
            Zobacz metodę POST-CI
            <ArrowUpRight className="size-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
