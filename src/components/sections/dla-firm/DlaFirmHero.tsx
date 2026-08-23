import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";

const przekonania = [
  "„Klient jest święty.”",
  "„Ludzi nie ma.”",
  "„Ja muszę wszystko sam.”",
  "„U nas inaczej się nie da.”",
];

export function DlaFirmHero() {
  return (
    <section className="border-b border-border px-6 py-24">
      <div className="mx-auto max-w-[1100px]">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[7fr_5fr] md:items-center">
          <Reveal>
            <p className="font-mono text-sm text-accent">Dla właścicieli MŚP</p>
            <h1 className="mt-4 text-balance font-heading text-4xl font-semibold leading-tight sm:text-5xl md:max-w-[20ch]">
              Wreszcie ktoś, kto rozumie Twoją ścianę
            </h1>
            <p className="mt-6 max-w-[60ch] text-pretty text-lg text-muted-foreground">
              Firma urosła na czymś, co dziś zaczyna być kosztem. Rozpoznajesz siebie w tych zdaniach?
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="relative aspect-[3/4] w-full overflow-hidden border border-border">
              <Image
                src="/images/rozmowa-hala.jpg"
                alt="Krzysztof Skrzypczak w rozmowie z właścicielem firmy w hali produkcyjnej"
                fill
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.16}>
          <div className="mt-8 flex flex-wrap gap-3">
            {przekonania.map((zdanie) => (
              <span
                key={zdanie}
                className="border border-border bg-surface px-4 py-2 text-sm text-foreground/80"
              >
                {zdanie}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
