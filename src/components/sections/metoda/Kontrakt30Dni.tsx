import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";

export function Kontrakt30Dni() {
  return (
    <section className="border-b border-border px-6 py-28">
      <div className="mx-auto max-w-[1100px]">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <Reveal>
            <p className="font-mono text-sm text-accent">Krok 4</p>
            <h2 className="mt-3 text-balance font-heading text-3xl font-semibold md:max-w-[20ch]">
              Kontrakt 30 Dni
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Na końcu właściciel wybiera jeden ruch - nie najlepszy na świecie, nie największy, tylko
              taki, który naprawdę wykona w ciągu 30 dni. Kontrakt jest podpisany, ze świadkiem z grupy -
              żeby zobowiązanie było konkretne, nie tylko słowne.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-mono text-sm text-accent">Krok 5</p>
            <h2 className="mt-3 text-balance font-heading text-3xl font-semibold md:max-w-[20ch]">
              Sprawdzenie po 30 dniach
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Obowiązkowe spotkanie, nie dodatek do formatu. Sprawdzamy, co właściciel faktycznie zrobił i
              czy to przyniosło efekt.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.18}>
          <div className="relative mt-10 aspect-[16/9] w-full overflow-hidden">
            <Image
              src="/images/kontrakt-30-dni-podpisany.jpg"
              alt="Grupa uczestników POST-CI LAB trzyma podpisany dokument Kontrakt 30 Dni"
              fill
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={0.26}>
          <svg viewBox="0 0 600 90" className="mx-auto mt-12 h-auto w-full max-w-[560px] text-foreground" role="img" aria-label="Oś czasu: dzień LAB-u, 30 dni, sprawdzenie">
            <line x1="30" y1="30" x2="570" y2="30" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1.5" strokeDasharray="5 5" />
            <circle cx="30" cy="30" r="7" fill="var(--accent)" />
            <circle cx="570" cy="30" r="7" fill="var(--accent)" />
            <text x="300" y="16" textAnchor="middle" className="font-mono" fontSize="11" fill="var(--accent)">30 DNI</text>
            <text x="30" y="58" textAnchor="start" className="font-heading" fontSize="14" fontWeight="600" fill="currentColor">Dzień LAB-u</text>
            <text x="30" y="76" textAnchor="start" fontSize="12" fill="var(--muted-foreground)">Kontrakt podpisany</text>
            <text x="570" y="58" textAnchor="end" className="font-heading" fontSize="14" fontWeight="600" fill="currentColor">T+30</text>
            <text x="570" y="76" textAnchor="end" fontSize="12" fill="var(--muted-foreground)">Sprawdzenie efektu</text>
          </svg>
        </Reveal>
      </div>
    </section>
  );
}
