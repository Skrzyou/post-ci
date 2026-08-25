import { Reveal } from "@/components/motion/Reveal";

const kwartaly = [
  { q: "Q1", opis: "LAB #4 - 2 firmy, Kontrakt 30 Dni, T+30." },
  { q: "Q2", opis: "LAB #5 - kolejne problemy firm, pierwsza synteza wniosków." },
  { q: "Q3", opis: "LAB #6 - pierwsza edycja u innego partnera, porównanie efektów." },
  { q: "Q4", opis: "LAB #7 - podsumowanie roku, raport roboczy, decyzja co dalej." },
];

export function Pilotaz() {
  return (
    <section className="border-b border-border bg-surface px-6 py-28">
      <div className="mx-auto max-w-[1100px]">
        <Reveal>
          <h2 className="text-balance font-heading text-3xl font-semibold md:max-w-[26ch]">
            Propozycja: 12 miesięcy, 4 edycje
          </h2>
          <p className="mt-3 max-w-[60ch] text-pretty text-muted-foreground">
            Zamiast wielkiej deklaracji - roczny pilot, który pokaże, czy POST-CI LAB daje Waszym firmom
            realną wartość.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-4">
          {kwartaly.map((k, i) => (
            <Reveal key={k.q} delay={i * 0.06}>
              <p className="font-mono text-2xl text-accent">{k.q}</p>
              <p className="mt-2 text-pretty text-sm text-foreground/90">{k.opis}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.24}>
          <p className="mt-12 max-w-[64ch] text-pretty text-sm text-muted-foreground">
            Wolicie zacząć ostrożniej, zanim zdecydujecie o pełnym roku? Mamy pakiet startowy: pierwsze 3
            LAB-y, do wyboru w trzech wariantach finansowania.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-6 grid grid-cols-1 gap-6 bg-background p-8 md:grid-cols-3">
            <div>
              <p className="font-mono text-xs text-muted-foreground">WARIANT A</p>
              <p className="mt-2 text-sm text-foreground/90">
                Partner daje przestrzeń i firmy, koszt realizacji ustalamy wspólnie z dodatkowym
                partnerem finansującym.
              </p>
            </div>
            <div>
              <p className="font-mono text-xs text-muted-foreground">WARIANT B - PARTNER WNOSI MIEJSCE</p>
              <p className="mt-2 text-sm text-foreground/90">
                Budżet minimum 15 000 zł netto, jeśli miejsce i catering wnosi partner.
              </p>
            </div>
            <div>
              <p className="font-mono text-xs text-muted-foreground">WARIANT C - PEŁNA REALIZACJA</p>
              <p className="mt-2 text-sm text-foreground/90">
                Pełna organizacja po stronie POST-CI: 21–24 tys. zł netto za 3 LAB-y.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
