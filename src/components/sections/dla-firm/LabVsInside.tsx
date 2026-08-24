import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/button";

export function LabVsInside() {
  return (
    <section className="border-b border-border px-6 py-24">
      <div className="mx-auto max-w-[1100px]">
        <Reveal>
          <h2 className="text-balance font-heading text-3xl font-semibold md:max-w-[24ch]">
            Dwie drogi, jeden efekt: Kontrakt 30 Dni
          </h2>
        </Reveal>

        <Reveal delay={0.04}>
          <div className="mt-8 grid grid-cols-1 gap-6 border border-border bg-surface p-8 md:grid-cols-2">
            <div>
              <p className="font-heading text-lg font-semibold">LAB czy INSIDE?</p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <p className="font-mono text-xs text-accent">LAB</p>
                <p className="mt-1 text-pretty text-sm text-foreground/90">
                  Chcesz wnieść swój problem do stołu z inną firmą i dobraną grupą praktyków.
                </p>
              </div>
              <div>
                <p className="font-mono text-xs text-accent">INSIDE</p>
                <p className="mt-1 text-pretty text-sm text-foreground/90">
                  Chcesz postawić taki stół wyłącznie dla swojej firmy i wejść głębiej w jej dane, ludzi
                  i kontekst.
                </p>
              </div>
            </div>
          </div>
          <p className="mt-3 text-pretty text-sm font-medium text-foreground">
            Metoda jest ta sama. Inny jest poziom skupienia na Twojej firmie.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <Reveal>
            <div className="flex h-full flex-col justify-between border border-border p-8">
              <div>
                <p className="font-mono text-xs text-muted-foreground">BEZPŁATNIE</p>
                <h3 className="mt-2 text-balance font-heading text-2xl font-semibold">POST-CI LAB</h3>
                <p className="mt-3 text-pretty text-muted-foreground">
                  Format grupowy: 2 firmy, 10–12 specjalistów. Koszt organizacji pokrywa partner albo
                  instytucja, z którą realizujemy edycję. Zero sprzedaży przy stole.
                </p>
                <ul className="mt-5 flex flex-col gap-2 text-sm text-foreground/80">
                  <li>- minimum pięciu specjalistów pracuje nad Twoją firmą</li>
                  <li>- 1 Kontrakt 30 Dni na koniec spotkania</li>
                  <li>- obowiązkowe sprawdzenie efektu po 30 dniach</li>
                </ul>
              </div>
              <Button
                render={<Link href="/kontakt?jestem=firma-lab" />}
                nativeButton={false}
                size="lg"
                className="mt-8 w-fit transition-transform hover:-translate-y-0.5"
              >
                Zgłoś firmę na LAB
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="flex h-full flex-col justify-between border border-border bg-surface p-8">
              <div>
                <p className="font-mono text-xs text-muted-foreground">15–20 TYS. ZŁ NETTO</p>
                <h3 className="mt-2 text-balance font-heading text-2xl font-semibold">POST-CI INSIDE</h3>
                <p className="mt-3 text-pretty text-muted-foreground">
                  Zamknięty format tylko dla Twojej firmy. Minimum pięciu specjalistów, praca u Ciebie
                  albo w neutralnym miejscu.
                </p>
                <ul className="mt-5 flex flex-col gap-2 text-sm text-foreground/80">
                  <li>- rozmowa wstępna i zebranie danych przed dniem pracy</li>
                  <li>- 1 Kontrakt 30 Dni dopasowany do Twojej firmy</li>
                  <li>- sprawdzenie efektu po 30 dniach w cenie</li>
                </ul>
              </div>
              <Button
                render={<Link href="/kontakt?jestem=firma-inside" />}
                nativeButton={false}
                size="lg"
                variant="outline"
                className="mt-8 w-fit transition-transform hover:-translate-y-0.5"
              >
                Umów rozmowę o INSIDE
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
