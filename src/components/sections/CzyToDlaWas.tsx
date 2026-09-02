import { Reveal } from "@/components/motion/Reveal";
import { StaggerList } from "@/components/motion/StaggerList";

const dobryMoment = [
  "Problem wraca mimo wcześniejszych prób.",
  "Jego koszt jest widoczny.",
  "Osoba decyzyjna będzie przy stole.",
  "Firma jest gotowa wykonać jeden ruch w 30 dni.",
];

const nieDlaKazdego = [
  "Szukasz szkolenia.",
  "Oczekujesz gotowej recepty po 30 minutach.",
  "Nikt w firmie nie jest gotowy niczego zmienić.",
  "Właściciel lub osoba decyzyjna nie chce być przy stole.",
];

export function CzyToDlaWas() {
  return (
    <section className="border-b border-border bg-surface px-6 py-24">
      <div className="mx-auto max-w-[1100px]">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <Reveal>
            <h2 className="text-balance font-heading text-2xl font-semibold">Czy to dobry moment?</h2>
            <StaggerList className="mt-6 flex list-none flex-col gap-3 p-0">
              {dobryMoment.map((t) => (
                <div key={t} className="flex gap-3 border-l-2 border-accent pl-4">
                  <p className="font-mono text-sm font-semibold text-accent">TAK?</p>
                  <p className="text-pretty text-foreground/90">{t}</p>
                </div>
              ))}
            </StaggerList>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="text-balance font-heading text-2xl font-semibold">
              POST-CI nie jest dla każdego
            </h2>
            <StaggerList className="mt-6 flex list-none flex-col gap-3 p-0">
              {nieDlaKazdego.map((t) => (
                <p key={t} className="border-l-2 border-border pl-4 text-pretty text-muted-foreground">
                  Nie zgłaszaj problemu, jeśli {t.charAt(0).toLowerCase() + t.slice(1)}
                </p>
              ))}
            </StaggerList>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
