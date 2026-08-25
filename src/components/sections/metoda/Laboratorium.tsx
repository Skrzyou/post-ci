import { Reveal } from "@/components/motion/Reveal";

const tory = [
  { tytul: "Proces", opis: "Co można zmienić w procesie, organizacji pracy, przepływie albo sposobie podejmowania decyzji." },
  { tytul: "Ludzie", opis: "Co trzeba zmienić w rolach, komunikacji, odpowiedzialności albo zachowaniach." },
  { tytul: "Strategia", opis: "Jaką decyzję powinien podjąć właściciel - co przestać robić, na co się wreszcie zdecydować." },
];

export function Laboratorium() {
  return (
    <section className="border-b border-border bg-surface px-6 py-28">
      <div className="mx-auto max-w-[1100px]">
        <Reveal>
          <p className="font-mono text-sm text-accent">Krok 3</p>
          <h2 className="mt-3 text-balance font-heading text-3xl font-semibold md:max-w-[24ch]">
            Laboratorium rozwiązań
          </h2>
          <p className="mt-3 max-w-[60ch] text-pretty text-muted-foreground">
            Po pracy na Górze Lodowej wracamy do Master Mapy. Pomysły muszą wynikać z tego, co odkryliśmy -
            nie tworzymy listy przypadkowych rad.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {tory.map((tor, i) => (
            <Reveal key={tor.tytul} delay={i * 0.08}>
              <div className="h-full bg-background p-8">
                <p className="font-heading text-xl font-semibold">{tor.tytul}</p>
                <p className="mt-3 text-pretty text-muted-foreground">{tor.opis}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
