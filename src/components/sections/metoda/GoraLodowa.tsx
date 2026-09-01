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

        <Reveal delay={0.14}>
          <svg
            viewBox="0 0 480 300"
            className="mx-auto mt-12 h-auto w-full max-w-[420px] text-foreground"
            role="img"
            aria-label="Diagram Góry Lodowej: objawy nad wodą, struktura i modele mentalne pod wodą"
          >
            <path
              d="M240 26 L272 118 L344 282 L136 282 L208 118 Z"
              fill="var(--background)"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M208 118 L272 118 L344 282 L136 282 Z"
              fill="currentColor"
              fillOpacity="0.07"
            />
            <line x1="30" y1="118" x2="450" y2="118" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="6 5" />
            <line x1="176" y1="204" x2="304" y2="204" stroke="currentColor" strokeOpacity="0.35" strokeWidth="1" strokeDasharray="4 4" />
            <text x="30" y="108" className="font-mono" fontSize="11" fill="var(--accent)">POZIOM WODY</text>
            <text x="360" y="78" className="font-heading" fontSize="15" fontWeight="600" fill="currentColor">Objawy</text>
            <text x="360" y="168" className="font-heading" fontSize="15" fontWeight="600" fill="currentColor">Struktura</text>
            <text x="360" y="248" className="font-heading" fontSize="14" fontWeight="600" fill="currentColor">
              <tspan x="360" dy="0">Modele</tspan>
              <tspan x="360" dy="18">mentalne</tspan>
            </text>
          </svg>
        </Reveal>

        <StaggerList className="mt-12 flex list-none flex-col gap-0 p-0">
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
