import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";

const zasady = [
  "Prawdziwy problem, nie case sukcesu przygotowany do prezentacji.",
  "Telefony odkładamy - wyciszone i nie leżą na stole.",
  "Nie nagrywamy i nie fotografujemy - to, co trafia na stół, zostaje przy stole.",
  "Fakty przed opiniami - „produkcja nie dowozi” to opinia, „plan zmieniono 11 razy w trzy dni” to fakt.",
  "Pytamy, zanim zaczniemy doradzać - dobra odpowiedź może poczekać, dobre pytanie często nie.",
  "Atakujemy problem, nie człowieka - podważamy decyzje i procesy, nie oceniamy ludzi.",
  "Nie sprzedajemy - przy stole nie ma pitchingu ani polowania na kontakty.",
  "Poufność - wnioski na zewnątrz tylko po anonimizacji i za zgodą.",
  "Kończymy jednym ruchem - nie listą 27 pomysłów, tylko jednym do sprawdzenia w 30 dni.",
  "Sprawdzenie efektu po 30 dniach jest częścią formatu, nie dodatkiem.",
];

export function ZasadyNienaruszalne() {
  return (
    <section className="bg-surface px-6 py-28">
      <div className="mx-auto max-w-[1100px]">
        <Reveal>
          <h2 className="text-balance font-heading text-3xl font-semibold md:max-w-[24ch]">
            Stałe zasady formatu
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

        <Reveal delay={0.3}>
          <div className="relative mt-10 aspect-[3/2] w-full overflow-hidden">
            <Image
              src="/images/klinika-problemu-grupa.jpg"
              alt="Grupa uczestników POST-CI LAB analizuje ścianę Kliniki Problemu"
              fill
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
