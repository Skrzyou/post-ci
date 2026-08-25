import { Reveal } from "@/components/motion/Reveal";

export function Haslo() {
  return (
    <section className="bg-surface px-6 py-28">
      <Reveal>
        <div className="mx-auto max-w-[1100px]">
          <p className="text-balance font-heading text-2xl font-semibold leading-snug md:max-w-[52ch] md:text-3xl">
            &bdquo;Hala&rdquo; nie oznacza branży. Oznacza miejsce, w którym naprawdę dzieje się praca.
          </p>
          <p className="mt-6 max-w-[56ch] text-pretty text-muted-foreground">
            Czasem jest to produkcja. Czasem software. Czasem sprzedaż, finanse albo realizacja.
            #ZHaliNieZFolderu oznacza: patrzymy na to, jak firma działa naprawdę - nie na to, jak proces
            wygląda w prezentacji.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
