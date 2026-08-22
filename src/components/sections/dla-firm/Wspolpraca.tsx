import { Reveal } from "@/components/motion/Reveal";
import { StaggerList } from "@/components/motion/StaggerList";

const kroki = [
  { etap: "T-21 do T-14", opis: "Kwalifikacja problemu i rozmowa przygotowawcza." },
  { etap: "T-10 do T-7", opis: "Dobór właściwych specjalistów do Twojego przypadku." },
  { etap: "T", opis: "Master Mapa, Mini-Klinika, Laboratorium rozwiązań, Kontrakt 30 Dni." },
  { etap: "T+30", opis: "Follow-up: czy ruch ruszył i co go zablokowało." },
];

export function Wspolpraca() {
  return (
    <section className="border-b border-border bg-surface px-6 py-24">
      <div className="mx-auto max-w-[1100px]">
        <Reveal>
          <h2 className="text-balance font-heading text-3xl font-semibold md:max-w-[24ch]">
            Jak wygląda współpraca krok po kroku
          </h2>
        </Reveal>

        <StaggerList className="mt-10 grid list-none grid-cols-1 gap-6 p-0 md:grid-cols-4">
          {kroki.map((krok) => (
            <div key={krok.etap} className="border-t-2 border-accent pt-4">
              <p className="font-mono text-sm text-accent">{krok.etap}</p>
              <p className="mt-2 text-pretty text-foreground/90">{krok.opis}</p>
            </div>
          ))}
        </StaggerList>
      </div>
    </section>
  );
}
