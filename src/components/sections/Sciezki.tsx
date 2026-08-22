import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

export function Sciezki() {
  return (
    <section id="sciezki" className="border-b border-border px-6 py-24">
      <div className="mx-auto max-w-[1100px]">
        <Reveal>
          <h2 className="text-balance font-heading text-3xl font-semibold md:max-w-[24ch]">
            Trzy drogi do jednego stołu
          </h2>
          <p className="mt-3 max-w-[60ch] text-pretty text-muted-foreground">
            POST-CI to nie jedna oferta dla wszystkich. Wybierz, kim jesteś, a resztę pokażemy pod kątem
            Twojej sytuacji.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6">
          <Reveal>
            <div className="grid grid-cols-1 gap-0 border border-border bg-surface md:grid-cols-5">
              <div className="flex flex-col justify-between p-8 md:col-span-3">
                <div>
                  <p className="font-mono text-sm text-accent">01 - Właściciele firm</p>
                  <h3 className="mt-3 text-balance font-heading text-2xl font-semibold">
                    Masz w firmie problem, który sam już nie ustąpi
                  </h3>
                  <p className="mt-3 max-w-[52ch] text-pretty text-muted-foreground">
                    Bezpłatny LAB (case grupowy) albo zamknięty POST-CI INSIDE tylko dla Twojej firmy - jedno
                    i drugie kończy się Kontraktem 30 Dni.
                  </p>
                </div>
                <Link
                  href="/dla-firm"
                  className="mt-6 inline-flex w-fit items-center gap-1 border border-foreground px-5 py-3 text-sm font-medium transition-transform hover:-translate-y-0.5"
                >
                  Zgłoś swój problem
                  <ArrowUpRight className="size-4" />
                </Link>
              </div>
              <div className="flex flex-col justify-center gap-4 border-t border-border p-8 md:col-span-2 md:border-l md:border-t-0">
                <div>
                  <p className="font-mono text-xs text-muted-foreground">BEZPŁATNIE</p>
                  <p className="text-sm">POST-CI LAB - format grupowy, 2 firmy, 10-12 specjalistów</p>
                </div>
                <div>
                  <p className="font-mono text-xs text-muted-foreground">15-20 TYS. ZŁ NETTO</p>
                  <p className="text-sm">POST-CI INSIDE - zamknięty, tylko dla Twojej firmy</p>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Reveal delay={0.08}>
              <div className="flex h-full flex-col justify-between border border-border p-8">
                <div>
                  <p className="font-mono text-sm text-accent">02 - Partnerzy instytucjonalni</p>
                  <h3 className="mt-3 text-balance font-heading text-xl font-semibold">
                    Chcesz dać członkom coś więcej niż kolejne wydarzenie
                  </h3>
                  <p className="mt-3 text-pretty text-muted-foreground">
                    12-miesięczny pilotaż, 4 edycje rocznie - jak z Dolnośląską Izbą Gospodarczą.
                  </p>
                </div>
                <Link
                  href="/dla-partnerow"
                  className="mt-6 inline-flex w-fit items-center gap-1 border border-foreground px-5 py-3 text-sm font-medium transition-transform hover:-translate-y-0.5"
                >
                  Umów rozmowę o pilotażu
                  <ArrowUpRight className="size-4" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="flex h-full flex-col justify-between border border-border p-8">
                <div>
                  <p className="font-mono text-sm text-accent">03 - Specjaliści</p>
                  <h3 className="mt-3 text-balance font-heading text-xl font-semibold">
                    Chcesz pracować przy realnym stole, nie na targu wizytówek
                  </h3>
                  <p className="mt-3 text-pretty text-muted-foreground">
                    Pula 20-30 osób z operacji, finansów, sprzedaży, IT, prawa, HR i strategii.
                  </p>
                </div>
                <Link
                  href="/dla-specjalistow"
                  className="mt-6 inline-flex w-fit items-center gap-1 border border-foreground px-5 py-3 text-sm font-medium transition-transform hover:-translate-y-0.5"
                >
                  Dołącz do puli specjalistów
                  <ArrowUpRight className="size-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
