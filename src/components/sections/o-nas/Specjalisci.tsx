import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";

export function Specjalisci() {
  return (
    <section className="border-b border-border px-6 py-28">
      <div className="mx-auto grid max-w-[1100px] grid-cols-1 items-center gap-10 md:grid-cols-[5fr_7fr]">
        <Reveal>
          <div className="relative aspect-[4/3] w-full overflow-hidden md:order-2">
            <Image
              src="/images/lab-zespol-grupa.jpg"
              alt="Grupa specjalistów POST-CI LAB pozuje wspólnie po zakończonej edycji"
              fill
              className="object-cover"
            />
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="md:order-1">
            <h2 className="text-balance font-heading text-3xl font-semibold md:max-w-[26ch]">
              Drugi filar POST-CI: specjaliści
            </h2>
            <p className="mt-4 max-w-[64ch] text-pretty text-muted-foreground">
              Przy każdej z 3 zrealizowanych edycji przy stole siadało 10–12 specjalistów - z operacji,
              finansów, sprzedaży, ludzi, IT, prawa, marketingu i strategii. Bez wynagrodzenia, wnosząc
              własny czas i doświadczenie, żeby pomóc realnym firmom zobaczyć problem szerzej.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
