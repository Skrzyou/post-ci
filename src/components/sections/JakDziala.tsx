import { Reveal } from "@/components/motion/Reveal";
import { StaggerList } from "@/components/motion/StaggerList";

const kroki = [
  {
    numer: "01",
    tytul: "Problem na stole",
    opis: "Master Mapa: geneza firmy, paliwo wzrostu i ściana, na którą dziś trafia.",
  },
  {
    numer: "02",
    tytul: "Góra lodowa",
    opis: "Objawy, struktura i modele mentalne - oddzielamy to, co widać, od tego, co problem podtrzymuje.",
  },
  {
    numer: "03",
    tytul: "Kontrakt 30 Dni",
    opis: "Jeden ruch, właściciel działania, termin i miernik. Nie lista 20 pomysłów.",
  },
  {
    numer: "04",
    tytul: "T+30",
    opis: "Obowiązkowy follow-up - sprawdzamy, czy ruch faktycznie ruszył i co go zablokowało.",
  },
];

export function JakDziala() {
  return (
    <section className="border-b border-border bg-surface px-6 py-24">
      <div className="mx-auto max-w-[1100px]">
        <Reveal>
          <h2 className="text-balance font-heading text-3xl font-semibold md:max-w-[24ch]">
            Jak wygląda jeden LAB
          </h2>
        </Reveal>

        <StaggerList className="mt-10 grid list-none grid-cols-1 gap-8 p-0 md:grid-cols-4">
          {kroki.map((krok) => (
            <div key={krok.numer}>
              <p className="font-mono text-3xl text-accent">{krok.numer}</p>
              <h3 className="mt-3 text-balance font-heading text-lg font-semibold">{krok.tytul}</h3>
              <p className="mt-2 text-pretty text-sm text-muted-foreground">{krok.opis}</p>
            </div>
          ))}
        </StaggerList>
      </div>
    </section>
  );
}
