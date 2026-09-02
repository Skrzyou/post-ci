import Image from "next/image";
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

        <svg
          viewBox="0 0 1000 20"
          preserveAspectRatio="none"
          className="mt-10 hidden h-4 w-full text-accent/50 md:block"
          aria-hidden="true"
        >
          <line x1="40" y1="10" x2="960" y2="10" stroke="currentColor" strokeWidth="1.5" strokeDasharray="7 6" />
          {[200, 360, 520, 680, 840].map((x) => (
            <polygon key={x} points={`${x - 6},4 ${x + 7},10 ${x - 6},16`} fill="currentColor" />
          ))}
        </svg>

        <StaggerList className="mt-4 grid list-none grid-cols-2 gap-8 p-0 sm:grid-cols-3 md:mt-2">
          {kroki.map((krok) => (
            <div key={krok.numer}>
              <p className="font-mono text-3xl text-accent">{krok.numer}</p>
              <h3 className="mt-3 text-balance font-heading text-lg font-semibold">{krok.tytul}</h3>
              <p className="mt-2 text-pretty text-sm text-muted-foreground">{krok.opis}</p>
            </div>
          ))}
        </StaggerList>

        <Reveal delay={0.2}>
          <p className="mt-10 text-balance font-heading text-xl font-medium leading-snug md:max-w-[48ch]">
            Po 30 dniach sprawdzamy rzeczywistość, nie nastrój po spotkaniu.
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="relative mt-10 aspect-[21/9] w-full overflow-hidden">
            <Image
              src="/images/graf-jeden-ruch.png"
              alt="Diagram - wiele splątanych linii zbiega się w jeden wyraźny ruch"
              fill
              className="object-cover"
            />
          </div>
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
