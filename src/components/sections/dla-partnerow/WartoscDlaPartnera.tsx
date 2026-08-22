import { Reveal } from "@/components/motion/Reveal";
import { StaggerList } from "@/components/motion/StaggerList";

const korzysci = [
  {
    tytul: "Wartość dla członków",
    opis: "Konkretna praca nad problemem, nie tylko inspiracja z kolejnej prelekcji.",
  },
  {
    tytul: "Wiarygodny wyróżnik",
    opis: "Instytucja jako pierwsza, która sprawdziła format w praktyce, nie tylko na papierze.",
  },
  {
    tytul: "Wiedza o MŚP",
    opis: "Anonimowe wnioski z prawdziwych case'ów, nie ankietowe deklaracje.",
  },
  {
    tytul: "Wejście do partnerstw",
    opis: "Naturalne wejście do DFR, WPT, Wrocławia i UMWD z konkretnym pilotażem w ręku.",
  },
];

export function WartoscDlaPartnera() {
  return (
    <section className="border-b border-border px-6 py-24">
      <div className="mx-auto max-w-[1100px]">
        <Reveal>
          <h2 className="text-balance font-heading text-3xl font-semibold md:max-w-[24ch]">
            Co zyskuje partner
          </h2>
        </Reveal>

        <StaggerList className="mt-10 grid list-none grid-cols-1 gap-8 p-0 md:grid-cols-2">
          {korzysci.map((k) => (
            <div key={k.tytul} className="border-l-2 border-accent pl-5">
              <p className="font-heading text-lg font-semibold">{k.tytul}</p>
              <p className="mt-1 text-pretty text-muted-foreground">{k.opis}</p>
            </div>
          ))}
        </StaggerList>
      </div>
    </section>
  );
}
