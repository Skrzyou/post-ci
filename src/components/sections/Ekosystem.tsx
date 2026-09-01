import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

export function Ekosystem() {
  return (
    <section className="border-b border-border bg-surface px-6 py-28">
      <div className="mx-auto max-w-[1100px]">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[7fr_5fr] md:items-center">
          <Reveal>
            <h2 className="text-balance font-heading text-3xl font-semibold md:max-w-[26ch]">
              Ekosystem POST-CI
            </h2>
            <p className="mt-3 max-w-[64ch] text-pretty text-muted-foreground">
              Partnerzy tworzą warunki do pracy, specjaliści wnoszą doświadczenie do stołu. Zobacz, gdzie
              jest Twoje miejsce.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <Image
              src="/images/graf-siec-praktykow.png"
              alt="Diagram sieci połączonych praktyków"
              width={600}
              height={600}
              className="mx-auto w-full max-w-[280px]"
            />
          </Reveal>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <Reveal delay={0.08}>
            <div className="flex h-full flex-col justify-between bg-background p-8">
              <div>
                <p className="font-mono text-sm text-accent">Partnerzy instytucjonalni</p>
                <h3 className="mt-3 text-balance font-heading text-xl font-semibold">
                  Chcesz dać swoim członkom coś więcej niż kolejne wydarzenie
                </h3>
                <p className="mt-3 text-pretty text-muted-foreground">
                  Model współpracy obejmuje 12-miesięczny pilotaż i cztery edycje POST-CI LAB. Każda
                  opiera się na realnych problemach firm i kończy się sprawdzeniem efektu po 30 dniach.
                  Pierwszym partnerem instytucjonalnym POST-CI LAB została Dolnośląska Izba Gospodarcza.
                </p>
              </div>
              <Link
                href="/dla-partnerow"
                className="mt-6 inline-flex w-fit items-center gap-1 border border-foreground px-5 py-3 text-sm font-medium transition-transform hover:-translate-y-0.5"
              >
                Porozmawiajmy o pilotażu
                <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="flex h-full flex-col justify-between bg-background p-8">
              <div>
                <p className="font-mono text-sm text-accent">Specjaliści</p>
                <h3 className="mt-3 text-balance font-heading text-xl font-semibold">
                  Chcesz wnieść doświadczenie, a nie kolejną wizytówkę
                </h3>
                <p className="mt-3 text-pretty text-muted-foreground">
                  Budujemy stałą pulę 20–30 praktyków z obszaru operacji, finansów, sprzedaży, IT, prawa,
                  HR i strategii. Do każdego problemu zapraszamy osoby, których doświadczenie rzeczywiście
                  może pomóc go ruszyć.
                </p>
              </div>
              <Link
                href="/dla-specjalistow"
                className="mt-6 inline-flex w-fit items-center gap-1 border border-foreground px-5 py-3 text-sm font-medium transition-transform hover:-translate-y-0.5"
              >
                Zgłaszam się do puli praktyków
                <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
