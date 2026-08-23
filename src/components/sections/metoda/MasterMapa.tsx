import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";

export function MasterMapa() {
  return (
    <section className="border-b border-border bg-surface px-6 py-24">
      <div className="mx-auto max-w-[1100px]">
        <Reveal>
          <p className="font-mono text-sm text-accent">Krok 1</p>
          <h2 className="mt-3 text-balance font-heading text-3xl font-semibold md:max-w-[24ch]">
            Master Mapa
          </h2>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="relative mt-8 aspect-[3/2] w-full overflow-hidden border border-border md:aspect-[16/7]">
            <Image
              src="/images/master-mapa-sciana.jpg"
              alt="Prawdziwa ściana Master Mapy z podziałem na Strefę 1 Geneza, Strefę 2 Ściana i Strefę 3 Laboratorium, pokryta karteczkami z LAB-u"
              fill
              className="object-cover"
            />
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <Reveal>
            <div className="h-full border border-border bg-background p-8">
              <p className="font-heading text-xl font-semibold">Geneza</p>
              <p className="mt-3 text-pretty text-muted-foreground">
                Właściciel opowiada, skąd przyszła firma, co było paliwem wzrostu, co wcześniej działało i
                kiedy pojawiły się pierwsze sygnały problemów. Na tym etapie nie oceniamy i nie szukamy
                rozwiązań - tylko zapisujemy fakty.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="h-full border border-border bg-background p-8">
              <p className="font-heading text-xl font-semibold">Ściana</p>
              <p className="mt-3 text-pretty text-muted-foreground">
                Najpierw objawy: co nie działa, co się powtarza, jakie są konkretne fakty i liczby. Potem
                szukamy ukrytych blokad pod powierzchnią - decyzji, KPI i przekonań, które podtrzymują
                problem.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
