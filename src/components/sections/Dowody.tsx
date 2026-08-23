import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";

const liczby = [
  { wartosc: "3", opis: "zrealizowane edycje LAB-u, nie projekt na papierze" },
  { wartosc: "10-12", opis: "specjalistów przy stole na każdą edycję" },
  { wartosc: "70%", opis: "cel uruchomionych Kontraktów 30 Dni w 12 miesięcy" },
];

const opinie = [
  {
    cytat:
      "Wspólna praca ekspertów z różnych branż nad moim przypadkiem dała mi to, czego nie kupi się na żadnym szkoleniu: brutalną szczerość i nową perspektywę.",
    autor: "Andrzej Frasek",
    rola: "właściciel firmy rodzinnej, uczestnik LAB #1",
  },
  {
    cytat:
      "Dla nas to było bardzo korzystne. Naprawdę doceniamy i już wprowadzamy zmiany organizacyjno-procesowe, żeby ulepszyć nasze wewnętrzne działanie i zwiększyć możliwości biznesowe.",
    autor: "Igor Zlatojev",
    rola: "Head of Exports and Sales, firma członkowska DIG",
  },
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

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-[7fr_5fr]">
          <Reveal delay={0.16}>
            <div className="relative aspect-[3/2] w-full overflow-hidden border border-border">
              <Image
                src="/images/lab-dig-sesja.jpg"
                alt="Sesja POST-CI LAB w siedzibie Dolnośląskiej Izby Gospodarczej, uczestnicy przy stole z widocznym banerem DIG"
                fill
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="flex h-full flex-col justify-center border border-border bg-surface p-8">
              <p className="text-balance font-heading text-xl font-medium leading-snug">
                &bdquo;DIG przestaje tylko zapraszać firmy na wydarzenia. Daje im miejsce, gdzie mogą
                przepracować realny problem.&rdquo;
              </p>
              <p className="mt-4 text-sm text-muted-foreground">
                Dolnośląska Izba Gospodarcza - pierwszy partner instytucjonalny POST-CI, po 3. edycji
                LAB-u
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {opinie.map((opinia, i) => (
            <Reveal key={opinia.autor} delay={0.32 + i * 0.08}>
              <div className="h-full border border-border p-8">
                <p className="text-pretty font-heading text-lg font-medium leading-snug">
                  &bdquo;{opinia.cytat}&rdquo;
                </p>
                <p className="mt-4 text-sm text-muted-foreground">
                  {opinia.autor} - {opinia.rola}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
