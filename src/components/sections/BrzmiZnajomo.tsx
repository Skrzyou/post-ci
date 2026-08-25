import { Reveal } from "@/components/motion/Reveal";
import { StaggerList } from "@/components/motion/StaggerList";

const zdania = [
  "Ja muszę wszystko sprawdzić.",
  "Klientowi już obiecaliśmy.",
  "Plan znowu się zmienił.",
  "Ludzi nie ma.",
  "System tego nie pokazuje.",
  "U nas inaczej się nie da.",
];

export function BrzmiZnajomo() {
  return (
    <section className="border-b border-border bg-surface px-6 py-28">
      <div className="mx-auto max-w-[1100px]">
        <Reveal>
          <h2 className="text-balance font-heading text-3xl font-semibold md:max-w-[24ch]">
            Brzmi znajomo?
          </h2>
        </Reveal>

        <StaggerList className="mt-10 grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2">
          {zdania.map((z) => (
            <p
              key={z}
              className="bg-background px-6 py-5 text-balance font-heading text-xl font-medium leading-snug"
            >
              &bdquo;{z}&rdquo;
            </p>
          ))}
        </StaggerList>

        <Reveal delay={0.2}>
          <p className="mt-10 max-w-[64ch] text-pretty text-muted-foreground">
            Każde z tych zdań może wyglądać jak inny problem. Czasem pod spodem działa jednak ten sam
            mechanizm: firma nauczyła się obchodzić problem, zamiast usuwać to, co go ciągle produkuje.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
