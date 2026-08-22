import { Reveal } from "@/components/motion/Reveal";
import { StaggerList } from "@/components/motion/StaggerList";

const dlaKogo = [
  "Właściciel lub osoba decyzyjna nadal blisko operacji",
  "Firma orientacyjnie 20-250 pracowników z Dolnego Śląska",
  "Realny problem: organizacyjny, procesowy, sprzedażowy, finansowy, technologiczny lub ludzki",
  "Szczególnie firmy operacyjne: produkcja, logistyka, usługi B2B, handel z rozbudowaną realizacją, technologia",
];

const dlaKogoNie = [
  "Szukasz darmowej pełnej diagnozy albo gotowego projektu wdrożenia",
  "Nie chcesz ujawnić wystarczająco dużo, żeby grupa mogła realnie pracować",
  "Nie ma nikogo, kto może na miejscu podjąć decyzję",
  "Problem jest całkowicie poza wpływem Twojej firmy",
];

export function DlaKogo() {
  return (
    <section className="border-b border-border bg-surface px-6 py-24">
      <div className="mx-auto max-w-[1100px]">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <Reveal>
            <h2 className="text-balance font-heading text-2xl font-semibold">Dla kogo</h2>
            <StaggerList className="mt-6 flex list-none flex-col gap-3 p-0">
              {dlaKogo.map((t) => (
                <p key={t} className="border-l-2 border-accent pl-4 text-pretty text-foreground/90">
                  {t}
                </p>
              ))}
            </StaggerList>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="text-balance font-heading text-2xl font-semibold">Dla kogo nie</h2>
            <StaggerList className="mt-6 flex list-none flex-col gap-3 p-0">
              {dlaKogoNie.map((t) => (
                <p key={t} className="border-l-2 border-border pl-4 text-pretty text-muted-foreground">
                  {t}
                </p>
              ))}
            </StaggerList>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
