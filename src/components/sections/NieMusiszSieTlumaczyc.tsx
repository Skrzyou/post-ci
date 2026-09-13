import { Reveal } from "@/components/motion/Reveal";

const zasady = [
  "Ty wybierasz problem, nad którym pracujemy.",
  "Ty decydujesz, ile szczegółów pokazujesz - nie potrzebujemy nazw klientów, nazwisk ludzi ani pełnych danych finansowych.",
  "Ty wybierasz ruch na 30 dni. Praktycy pytają i pokazują ślepe punkty, ale nie decydują za Ciebie.",
];

export function NieMusiszSieTlumaczyc() {
  return (
    <section className="border-b border-border px-6 py-24">
      <div className="mx-auto max-w-[900px]">
        <Reveal>
          <p className="font-mono text-sm text-accent-text">Zanim zgłosisz problem</p>
          <h2 className="mt-3 text-balance font-heading text-2xl font-semibold md:max-w-[28ch]">
            Nie przychodzisz się tłumaczyć
          </h2>
          <p className="mt-4 max-w-[64ch] text-pretty text-muted-foreground">
            Nie musisz pokazywać całej firmy. Wystarczy jeden problem, który da się bezpiecznie opisać i
            przepracować - nie potrzebujemy nazw klientów, nazwisk ludzi ani pełnych danych finansowych,
            tylko konkretu: co wraca, gdzie się zacina i jaki ma koszt.
          </p>
          <p className="mt-4 max-w-[64ch] text-pretty text-muted-foreground">
            Dla praktyka udział to kilka godzin i ciekawy problem. Dla Ciebie to Twoja firma na stole -
            wiemy, że to nierówna wymiana. POST-CI LAB nie jest audytem całej firmy.
          </p>
        </Reveal>

        <div className="mt-8 flex flex-col gap-0">
          {zasady.map((z, i) => (
            <Reveal key={z} delay={i * 0.06}>
              <p className="border-t border-border py-4 text-pretty text-foreground/90">{z}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
