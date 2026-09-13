import { Reveal } from "@/components/motion/Reveal";
import { StaggerList } from "@/components/motion/StaggerList";

const punkty = [
  "Nie robimy publicznego audytu firmy.",
  "Nie oceniamy właściciela ani zespołu.",
  "Nie wyciągamy poufnych danych.",
  "Nie nagrywamy treści problemu.",
  "Nie sprzedajemy usług.",
  "Nie dociskamy do decyzji, której właściciel nie rozumie albo nie chce wziąć na siebie.",
];

export function CzegoNieRobimyPrzyStole() {
  return (
    <section className="border-b border-border bg-surface px-6 py-24">
      <div className="mx-auto max-w-[900px]">
        <Reveal>
          <h2 className="text-balance font-heading text-2xl font-semibold">Czego nie robimy przy stole</h2>
          <p className="mt-3 max-w-[64ch] text-pretty text-muted-foreground">
            Atakujemy problem, nie człowieka - podważamy decyzje i procesy, nie oceniamy ludzi.
          </p>
        </Reveal>
        <StaggerList className="mt-6 grid list-none grid-cols-1 gap-3 p-0 sm:grid-cols-2">
          {punkty.map((p) => (
            <p key={p} className="border-l-2 border-border pl-4 text-pretty text-foreground/90">
              {p}
            </p>
          ))}
        </StaggerList>
      </div>
    </section>
  );
}
