import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerList } from "@/components/motion/StaggerList";

const cechy = [
  "Słuchasz.",
  "Pytasz.",
  "Nie sprzedajesz.",
  "Potrafisz powiedzieć „nie wiem”.",
  "Nie bronisz swojej metody.",
  "Potrafisz pracować z innymi perspektywami.",
];

export function SpecjalistaHero() {
  return (
    <section className="border-b border-border px-6 py-28">
      <div className="mx-auto max-w-[1100px]">
        <Reveal>
          <p className="font-mono text-sm text-accent">Dla praktyków</p>
          <h1 className="mt-4 text-balance font-heading text-4xl font-semibold leading-tight sm:text-5xl md:max-w-[24ch]">
            Nie szukamy kolejnych ekspertów z gotową odpowiedzią
          </h1>
          <p className="mt-6 max-w-[60ch] text-pretty text-lg text-muted-foreground">
            Budujemy stałą koalicję POST-CI - 20–30 zweryfikowanych osób, żeby nie opierać każdej edycji
            na tej samej grupie.
          </p>
        </Reveal>

        <StaggerList className="mt-8 grid list-none grid-cols-1 gap-3 p-0 sm:grid-cols-2">
          {cechy.map((c) => (
            <p key={c} className="border-l-2 border-accent pl-4 text-pretty text-foreground/90">
              {c}
            </p>
          ))}
        </StaggerList>

        <Reveal delay={0.14}>
          <p className="mt-6 text-sm text-muted-foreground">
            Udział przy stole = zaproszenie do konkretnej edycji, nie członkostwo.
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="relative mt-10 aspect-[3/2] w-full overflow-hidden">
            <Image
              src="/images/specjalisci-grupa-sciana.jpg"
              alt="Praktyk tłumaczy grupie mechanizm problemu przy ścianie z karteczkami"
              fill
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
