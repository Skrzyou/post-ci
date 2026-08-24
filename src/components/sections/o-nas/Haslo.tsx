import { Reveal } from "@/components/motion/Reveal";

export function Haslo() {
  return (
    <section className="bg-surface px-6 py-24">
      <Reveal>
        <div className="mx-auto max-w-[1100px]">
          <p className="text-balance font-heading text-2xl font-semibold leading-snug md:max-w-[52ch] md:text-3xl">
            #ZHaliNieZFolderu nie opisuje branży. Opisuje sposób pracy.
          </p>
          <div className="mt-6 flex flex-col gap-1 text-lg text-foreground/90 md:max-w-[48ch]">
            <p>Fakty zamiast deklaracji.</p>
            <p>Rzeczywisty proces zamiast procedury na slajdzie.</p>
            <p>Pytania zamiast szybkich rad.</p>
            <p>Decyzja zamiast kolejnej listy pomysłów.</p>
          </div>
          <p className="mt-6 max-w-[56ch] text-pretty text-muted-foreground">
            Hala była początkiem. Dziś chodzi o każde miejsce, w którym firma naprawdę wykonuje swoją
            pracę.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
