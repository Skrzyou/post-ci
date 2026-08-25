import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";

export function AktaPostCi() {
  return (
    <section className="border-b border-border bg-surface px-6 py-28">
      <div className="mx-auto max-w-[1100px]">
        <Reveal>
          <p className="font-mono text-sm text-accent">AKTA POST-CI</p>
          <h2 className="mt-3 text-balance font-heading text-3xl font-semibold md:max-w-[28ch]">
            Prawdziwe problemy. Bez lakierowania historii po fakcie.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 bg-background p-8 md:p-10">
            <p className="font-mono text-sm text-muted-foreground">AKTA 001</p>
            <p className="mt-1 text-lg font-medium">
              Firma rodzinna, branża odlewnicza (modele odlewnicze) - uczestnik LAB #1
            </p>

            <div className="relative mt-6 aspect-[16/9] w-full overflow-hidden">
              <Image
                src="/images/lab-1-sesja-detal.jpg"
                alt="Uczestnicy POST-CI LAB #1 w skupieniu podczas pracy nad problemem firmy"
                fill
                className="object-cover"
              />
            </div>

            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <p className="font-mono text-xs text-accent">Z CZYM PRZYSZEDŁ</p>
                <p className="mt-2 text-pretty text-muted-foreground">
                  Przejął rodzinny biznes z przekonaniem, że jako szef musi znać każdą śrubkę i poradzić
                  sobie ze wszystkim sam.
                </p>
              </div>
              <div>
                <p className="font-mono text-xs text-accent">CO WYGLĄDAŁO NA PRZYCZYNĘ</p>
                <p className="mt-2 text-pretty text-muted-foreground">
                  Brak jasnego kierunku rozwoju firmy - szukał idealnego rozwiązania, próbując wymyślić
                  je samodzielnie.
                </p>
              </div>
              <div>
                <p className="font-mono text-xs text-accent">CO ZNALEŹLIŚMY GŁĘBIEJ</p>
                <p className="mt-2 text-pretty text-muted-foreground">
                  Podświadomie odrzucał pomysły własnego zespołu. Rozwiązanie było cały czas wewnątrz
                  firmy - stał się wąskim gardłem, próbując znaleźć je sam.
                </p>
              </div>
              <div>
                <p className="font-mono text-xs text-accent">RUCH NA 30 DNI</p>
                <p className="mt-2 text-pretty text-muted-foreground">
                  Skończyć z szukaniem ideału w pojedynkę - zacząć wspólnie z zespołem budować mapę
                  działania na fundamentach firmy rodzinnej.
                </p>
              </div>
            </div>

            <div className="mt-6 border-t border-border pt-6">
              <p className="font-mono text-xs text-accent">MIESIĄC PÓŹNIEJ</p>
              <p className="mt-2 text-pretty text-foreground/90">
                &bdquo;Dziś, miesiąc po LAB-ie, kończę z etapem szukania ideału w pojedynkę. Nauczyłem się,
                że rola lidera w firmie rodzinnej to nie tylko pilnowanie warsztatu, ale przede wszystkim
                umiejętność słuchania i wspólnego tworzenia mapy działania. Było 11/10.&rdquo;
              </p>
              <p className="mt-3 text-sm text-muted-foreground">Uczestnik POST-CI LAB #1</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-6 border border-dashed border-border p-8 text-sm text-muted-foreground">
            AKTA 002 - w przygotowaniu. Miejsce na przypadek firmy spoza produkcji (np. tworzącej
            aplikacje IT), żeby pokazać, że mechanizm powtarza się niezależnie od branży.
          </div>
        </Reveal>
      </div>
    </section>
  );
}
