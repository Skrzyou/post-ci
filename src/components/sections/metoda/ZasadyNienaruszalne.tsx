import { Reveal } from "@/components/motion/Reveal";

const zasady = [
  "Prawdziwy problem, nie case sukcesu przygotowany do prezentacji.",
  "Mała grupa - docelowo 8-12 osób.",
  "Bez sprzedaży, pitchy i ofert w środku LAB-u.",
  "Poufność case'ów - wnioski na zewnątrz tylko po anonimizacji i za zgodą.",
  "Nie obiecujemy transformacji firmy po jednym spotkaniu.",
  "Follow-up po 30 dniach jest częścią formatu, nie dodatkiem.",
];

export function ZasadyNienaruszalne() {
  return (
    <section className="bg-surface px-6 py-24">
      <div className="mx-auto max-w-[1100px]">
        <Reveal>
          <h2 className="text-balance font-heading text-3xl font-semibold md:max-w-[24ch]">
            Czego nie wolno zepsuć
          </h2>
          <p className="mt-3 max-w-[60ch] text-pretty text-muted-foreground">
            To jest rdzeń formatu. Jak go rozwodnimy, zostanie kolejny event.
          </p>
        </Reveal>

        <div className="mt-10 flex flex-col gap-0">
          {zasady.map((zasada, i) => (
            <Reveal key={zasada} delay={i * 0.05}>
              <p className="border-b border-border py-5 text-pretty text-lg text-foreground/90">
                {zasada}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
