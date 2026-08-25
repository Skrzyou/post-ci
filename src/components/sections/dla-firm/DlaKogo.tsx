import { Reveal } from "@/components/motion/Reveal";
import { StaggerList } from "@/components/motion/StaggerList";

const dlaKogo = [
  {
    glowne: "Właściciel lub osoba decyzyjna nadal blisko operacji",
  },
  {
    glowne:
      "Firma, w której osoba przy stole ma realny wpływ na decyzję i może po spotkaniu uruchomić zmianę",
    dodatkowe: "Najczęściej pracujemy z MŚP - skala firmy jest mniej ważna niż możliwość podjęcia realnej decyzji.",
  },
  {
    glowne: "Realny problem: organizacyjny, procesowy, sprzedażowy, finansowy, technologiczny lub ludzki",
  },
  {
    glowne: "Branża jest drugorzędna. Problem musi być realny, powtarzalny i możliwy do przepracowania na faktach.",
    dodatkowe:
      "Produkcja, technologia, logistyka, handel, usługi B2B - przy stole nie pracujemy nad etykietą branży. Pracujemy nad mechanizmem, który podtrzymuje problem.",
  },
];

const dlaKogoNie = [
  "Szukasz darmowej pełnej diagnozy albo gotowego projektu wdrożenia",
  "Nie chcesz ujawnić wystarczająco dużo, żeby grupa mogła realnie pracować",
  "Nie ma osoby, która mogłaby na miejscu podjąć decyzję",
  "Problem jest całkowicie poza wpływem Twojej firmy",
];

export function DlaKogo() {
  return (
    <section className="border-b border-border bg-surface px-6 py-28">
      <div className="mx-auto max-w-[1100px]">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <Reveal>
            <h2 className="text-balance font-heading text-2xl font-semibold">Dla kogo</h2>
            <StaggerList className="mt-6 flex list-none flex-col gap-3 p-0">
              {dlaKogo.map((t) => (
                <div key={t.glowne} className="border-l-2 border-accent pl-4">
                  <p className="text-pretty text-foreground/90">{t.glowne}</p>
                  {t.dodatkowe && (
                    <p className="mt-1 text-pretty text-sm text-muted-foreground">{t.dodatkowe}</p>
                  )}
                </div>
              ))}
            </StaggerList>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="text-balance font-heading text-2xl font-semibold">
              Kiedy POST-CI nie ma sensu
            </h2>
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
