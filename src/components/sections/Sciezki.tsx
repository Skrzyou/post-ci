import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

export function Sciezki() {
  return (
    <section id="sciezki" className="border-b border-border px-6 py-24">
      <div className="mx-auto max-w-[1100px]">
        <Reveal>
          <h2 className="text-balance font-heading text-3xl font-semibold md:max-w-[26ch]">
            Tak pracujemy z problemem
          </h2>
          <p className="mt-3 max-w-[64ch] text-pretty text-muted-foreground">
            POST-CI łączy firmy wnoszące realny problem, partnerów tworzących warunki do pracy i
            specjalistów, którzy pomagają znaleźć ruch na 30 dni. Zobacz, gdzie jest Twoje miejsce.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6">
          <Reveal>
            <div className="grid grid-cols-1 gap-0 border border-border bg-surface md:grid-cols-5">
              <div className="flex flex-col justify-between p-8 md:col-span-3">
                <div>
                  <p className="font-mono text-sm text-accent">01 - Firmy z realnym problemem</p>
                  <h3 className="mt-3 text-balance font-heading text-2xl font-semibold">
                    Próbowaliście już kilku rzeczy. Problem nadal wraca.
                  </h3>
                  <p className="mt-3 max-w-[52ch] text-pretty text-muted-foreground">
                    Możesz wnieść go na bezpłatny POST-CI LAB albo przepracować w zamkniętym POST-CI
                    INSIDE. Nie diagnozujemy firmy dla sportu - szukamy jednego ruchu, który można
                    wykonać i sprawdzić w ciągu 30 dni.
                  </p>
                </div>
                <Link
                  href="/dla-firm"
                  className="mt-6 inline-flex w-fit items-center gap-1 border border-foreground px-5 py-3 text-sm font-medium transition-transform hover:-translate-y-0.5"
                >
                  Zgłoś problem swojej firmy
                  <ArrowUpRight className="size-4" />
                </Link>
              </div>
              <div className="flex flex-col justify-center gap-4 border-t border-border p-8 md:col-span-2 md:border-l md:border-t-0">
                <div>
                  <p className="font-mono text-xs text-muted-foreground">BEZPŁATNY UDZIAŁ</p>
                  <p className="text-sm">POST-CI LAB - dwie firmy i 10–12 specjalistów przy jednym stole.</p>
                </div>
                <div>
                  <p className="font-mono text-xs text-muted-foreground">15–20 TYS. ZŁ NETTO</p>
                  <p className="text-sm">POST-CI INSIDE - zamknięta praca nad problemem jednej firmy.</p>
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
                    Chcesz dać swoim członkom coś więcej niż kolejne wydarzenie
                  </h3>
                  <p className="mt-3 text-pretty text-muted-foreground">
                    Model współpracy obejmuje 12-miesięczny pilotaż i cztery edycje POST-CI LAB. Każda
                    opiera się na realnych problemach firm i kończy się sprawdzeniem efektu po 30 dniach.
                    Pierwszym partnerem instytucjonalnym POST-CI LAB została Dolnośląska Izba
                    Gospodarcza.
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
                    Chcesz wnieść doświadczenie, a nie kolejną wizytówkę
                  </h3>
                  <p className="mt-3 text-pretty text-muted-foreground">
                    Budujemy stałą pulę 20–30 praktyków z obszaru operacji, finansów, sprzedaży, IT,
                    prawa, HR i strategii. Do każdego problemu zapraszamy osoby, których doświadczenie
                    rzeczywiście może pomóc go ruszyć.
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
