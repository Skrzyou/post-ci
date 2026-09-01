import { Reveal } from "@/components/motion/Reveal";
import { StaggerList } from "@/components/motion/StaggerList";

const kryteria = [
  "Realne doświadczenie biznesowe, nie tylko wiedza prezentacyjna.",
  "Umiejętność zadawania pytań i słuchania.",
  "Otwartość na spojrzenie z innej strony niż własna specjalizacja, bez udawania eksperta od wszystkiego.",
  "Brak sprzedaży przy stole.",
  "Akceptacja poufności i zasad POST-CI.",
  "Gotowość przyjęcia informacji zwrotnej po LAB-ie.",
];

export function Kryteria() {
  return (
    <section className="border-b border-border bg-surface px-6 py-28">
      <div className="mx-auto max-w-[1100px]">
        <Reveal>
          <h2 className="text-balance font-heading text-3xl font-semibold md:max-w-[24ch]">
            Kryteria wejścia do koalicji POST-CI
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
