import { Reveal } from "@/components/motion/Reveal";
import { StaggerList } from "@/components/motion/StaggerList";

const pytania = [
  "Problem wraca mimo wcześniejszych prób?",
  "Jego koszt jest widoczny w czasie, pieniądzach lub odpowiedzialności?",
  "Właściciel lub osoba decyzyjna będzie przy stole?",
  "Firma jest gotowa uruchomić jeden ruch w ciągu 30 dni?",
];

export function CzyToDobryMoment() {
  return (
    <section className="border-b border-border px-6 py-28">
      <div className="mx-auto max-w-[1100px]">
        <Reveal>
          <h2 className="text-balance font-heading text-3xl font-semibold md:max-w-[24ch]">
            Czy to jest dobry moment?
          </h2>
        </Reveal>

        <StaggerList className="mt-10 grid list-none grid-cols-1 gap-6 p-0 md:grid-cols-2">
          {pytania.map((pytanie) => (
            <div key={pytanie} className="flex gap-4 bg-surface p-6">
              <p className="font-mono text-sm font-semibold text-accent">TAK?</p>
              <p className="text-pretty text-foreground/90">{pytanie}</p>
            </div>
          ))}
        </StaggerList>
      </div>
    </section>
  );
}
