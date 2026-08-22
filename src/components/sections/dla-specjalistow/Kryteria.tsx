import { Reveal } from "@/components/motion/Reveal";
import { StaggerList } from "@/components/motion/StaggerList";

const kryteria = [
  "Realne doświadczenie biznesowe, nie tylko wiedza prezentacyjna.",
  "Umiejętność zadawania pytań i słuchania.",
  "Gotowość pracy poza własną specjalizacją, bez udawania, że zna się na wszystkim.",
  "Brak sprzedaży przy stole.",
  "Akceptacja poufności i zasad POST-CI.",
  "Gotowość przyjęcia feedbacku po LAB-ie.",
];

export function Kryteria() {
  return (
    <section className="border-b border-border bg-surface px-6 py-24">
      <div className="mx-auto max-w-[1100px]">
        <Reveal>
          <h2 className="text-balance font-heading text-3xl font-semibold md:max-w-[24ch]">
            Kryteria wejścia do puli
          </h2>
        </Reveal>

        <StaggerList className="mt-10 grid list-none grid-cols-1 gap-4 p-0 md:grid-cols-2">
          {kryteria.map((k) => (
            <p key={k} className="border-l-2 border-accent pl-4 text-pretty text-foreground/90">
              {k}
            </p>
          ))}
        </StaggerList>
      </div>
    </section>
  );
}
