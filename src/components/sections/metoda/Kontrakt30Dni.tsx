import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";

export function Kontrakt30Dni() {
  return (
    <section className="border-b border-border px-6 py-28">
      <div className="mx-auto max-w-[1100px]">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <Reveal>
            <p className="font-mono text-sm text-accent">Krok 4</p>
            <h2 className="mt-3 text-balance font-heading text-3xl font-semibold md:max-w-[20ch]">
              Kontrakt 30 Dni
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Na końcu właściciel wybiera jeden ruch - nie najlepszy na świecie, nie największy, tylko
              taki, który naprawdę wykona w ciągu 30 dni. Kontrakt jest podpisany, ze świadkiem z grupy -
              żeby zobowiązanie było konkretne, nie tylko słowne.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-mono text-sm text-accent">Krok 5</p>
            <h2 className="mt-3 text-balance font-heading text-3xl font-semibold md:max-w-[20ch]">
              Sprawdzenie po 30 dniach
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Obowiązkowe spotkanie, nie dodatek do formatu. Sprawdzamy, co właściciel faktycznie zrobił i
              czy to przyniosło efekt.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.18}>
          <div className="relative mt-10 aspect-[16/9] w-full overflow-hidden">
            <Image
              src="/images/kontrakt-30-dni-podpisany.jpg"
              alt="Grupa uczestników POST-CI LAB trzyma podpisany dokument Kontrakt 30 Dni"
              fill
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
