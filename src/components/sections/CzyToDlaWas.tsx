import { Reveal } from "@/components/motion/Reveal";
import { StaggerList } from "@/components/motion/StaggerList";

const warunki = [
  "Problem wraca mimo wcześniejszych prób, a jego koszt jest widoczny.",
  "Osoba decyzyjna będzie przy stole i może po spotkaniu uruchomić zmianę.",
  "Firma jest gotowa sprawdzić jeden mały ruch w praktyce - nie musi mieć gotowej odpowiedzi ani szukać szkolenia.",
];

export function CzyToDlaWas() {
  return (
    <section className="border-b border-border bg-surface px-6 py-24">
      <div className="mx-auto max-w-[900px]">
        <Reveal>
          <h2 className="text-balance font-heading text-2xl font-semibold">Czy to dobry moment na POST-CI?</h2>
          <p className="mt-3 max-w-[64ch] text-pretty text-muted-foreground">
            Zgłoszenie ma sens, gdy spełnione są te trzy warunki:
          </p>
        </Reveal>
        <StaggerList className="mt-6 flex list-none flex-col gap-3 p-0">
          {warunki.map((t) => (
            <div key={t} className="flex gap-3 border-l-2 border-accent pl-4">
              <p className="text-pretty text-foreground/90">{t}</p>
            </div>
          ))}
        </StaggerList>
      </div>
    </section>
  );
}
