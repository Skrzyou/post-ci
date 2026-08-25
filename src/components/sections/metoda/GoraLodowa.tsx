import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerList } from "@/components/motion/StaggerList";

const warstwy = [
  {
    poziom: "Nad wodą",
    tytul: "Objawy",
    opis: "Co dokładnie się dzieje, gdzie problem występuje, jak często się powtarza i jakie fakty to potwierdzają.",
  },
  {
    poziom: "Pod wodą",
    tytul: "Struktura",
    opis: "Jakie zasady, KPI albo decyzje w systemie podtrzymują problem. Gdzie brakuje odpowiedzialności.",
  },
  {
    poziom: "Najgłębiej",
    tytul: "Modele mentalne (przekonania i założenia)",
    opis: "W co wierzy właściciel i zespół, czego się obawiają, co firma uznaje za normalne, choć już nie działa.",
  },
];

export function GoraLodowa() {
  return (
    <section className="border-b border-border px-6 py-28">
      <div className="mx-auto max-w-[1100px]">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[7fr_5fr] md:items-end">
          <Reveal>
            <p className="font-mono text-sm text-accent">Krok 2</p>
            <h2 className="mt-3 text-balance font-heading text-3xl font-semibold md:max-w-[26ch]">
              Mini-Klinika: Góra Lodowa
            </h2>
            <p className="mt-3 max-w-[60ch] text-pretty text-muted-foreground">
              Z Master Mapy właściciel wybiera jeden problem, który jest dziś najważniejszy. Nie
              analizujemy ponownie całej firmy - pracujemy tylko na nim.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <Image
                src="/images/gora-lodowa-sciana.jpg"
                alt="Krzysztof Skrzypczak przy ścianie Kliniki Procesowej z Górą Lodową: objawy, struktura, modele mentalne"
                fill
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>

        <StaggerList className="mt-10 flex list-none flex-col gap-0 p-0">
          {warstwy.map((w) => (
            <div key={w.tytul} className="grid grid-cols-1 gap-2 border-t border-border py-6 md:grid-cols-[1fr_2fr_3fr]">
              <p className="font-mono text-sm text-muted-foreground">{w.poziom}</p>
              <p className="font-heading text-lg font-semibold">{w.tytul}</p>
              <p className="text-pretty text-muted-foreground">{w.opis}</p>
            </div>
          ))}
        </StaggerList>
      </div>
    </section>
  );
}
