import { Reveal } from "@/components/motion/Reveal";
import { StaggerList } from "@/components/motion/StaggerList";

const korzysci = [
  {
    tytul: "Wartość dla członków",
    opis: "Konkretna praca nad realnym problemem firmy członkowskiej, nie kolejna prelekcja.",
  },
  {
    tytul: "Wiarygodny wyróżnik",
    opis: "Format sprawdzony w praktyce, nie tylko opisany w materiałach.",
  },
  {
    tytul: "Wiedza o MŚP",
    opis: "Anonimowe wnioski z prawdziwych problemów firm członkowskich.",
  },
  {
    tytul: "Rozwój rozpoznawalnego formatu",
    opis: "Wasza instytucja jako część rosnącej sieci wspierającej dolnośląskie MŚP, budowanej krok po kroku z kolejnymi edycjami.",
  },
];

export function WartoscDlaPartnera() {
  return (
    <section className="border-b border-border px-6 py-28">
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
