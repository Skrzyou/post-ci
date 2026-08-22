import { Reveal } from "@/components/motion/Reveal";

const liczby = [
  { wartosc: "3", opis: "zrealizowane edycje LAB-u, nie projekt na papierze" },
  { wartosc: "10-12", opis: "specjalistów przy stole na każdą edycję" },
  { wartosc: "70%", opis: "cel uruchomionych Kontraktów 30 Dni w 12 miesięcy" },
];

export function Dowody() {
  return (
    <section className="border-b border-border px-6 py-24">
      <div className="mx-auto max-w-[1100px]">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {liczby.map((pozycja, i) => (
            <Reveal key={pozycja.wartosc} delay={i * 0.08}>
              <p className="font-mono text-5xl font-semibold text-foreground">{pozycja.wartosc}</p>
              <p className="mt-2 max-w-[20ch] text-pretty text-muted-foreground">{pozycja.opis}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-16 border border-border bg-surface p-8 md:p-10">
            <p className="text-balance font-heading text-xl font-medium leading-snug md:max-w-[48ch]">
              &bdquo;DIG przestaje tylko zapraszać firmy na wydarzenia. Daje im miejsce, gdzie mogą
              przepracować realny problem.&rdquo;
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Dolnośląska Izba Gospodarcza - pierwszy partner instytucjonalny POST-CI, po 3. edycji LAB-u
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.28}>
          <div className="mt-10 border border-dashed border-border p-8 text-sm text-muted-foreground">
            Opinie uczestników LAB-ów - w przygotowaniu. Wracamy tu, gdy spłyną pisemne opinie po kolejnych
            edycjach.
          </div>
        </Reveal>
      </div>
    </section>
  );
}
