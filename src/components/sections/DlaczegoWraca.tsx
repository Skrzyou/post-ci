import { Reveal } from "@/components/motion/Reveal";

const przyklady = [
  {
    objaw: "„Ludzie nie biorą odpowiedzialności.”",
    mechanizm:
      "Być może problemem nie jest zaangażowanie. Być może bez zgody szefa podjęcie decyzji jest bardziej ryzykowne niż jej niepodjęcie.",
  },
  {
    objaw: "„Właściciel musi wszystkiego pilnować.”",
    mechanizm:
      "Być może nie chodzi o delegowanie. Firma mogła przez lata zbudować system, w którym wszystkie ważne decyzje naturalnie wracają do jednej osoby.",
  },
  {
    objaw: "„Plan ciągle się zmienia.”",
    mechanizm:
      "Być może nie zawodzi planowanie. Być może sprzedaż, operacje i zarządzający pracują na różnych priorytetach.",
  },
];

export function DlaczegoWraca() {
  return (
    <section className="border-b border-border px-6 py-28">
      <div className="mx-auto max-w-[1100px]">
        <Reveal>
          <div className="flex items-center gap-5">
            <svg viewBox="0 0 100 100" className="size-12 shrink-0 text-accent" role="img" aria-label="Ikona pętli - problem wraca w kółko">
              <circle
                cx="50"
                cy="50"
                r="38"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="185 60"
                strokeDashoffset="-15"
              />
              <polygon points="80,26 92,30 82,38" fill="currentColor" />
            </svg>
            <h2 className="text-balance font-heading text-3xl font-semibold md:max-w-[22ch]">
              Problem rzadko wraca bez powodu
            </h2>
          </div>
        </Reveal>

        <div className="mt-10 flex flex-col gap-0">
          {przyklady.map((p, i) => (
            <Reveal key={p.objaw} delay={i * 0.08}>
              <div className="grid grid-cols-1 gap-2 border-t border-border py-6 md:grid-cols-[7fr_12fr]">
                <p className="font-heading text-lg font-semibold">{p.objaw}</p>
                <p className="text-pretty text-muted-foreground">{p.mechanizm}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <p className="mt-10 max-w-[64ch] text-pretty text-lg font-medium text-foreground">
            Dlatego w POST-CI nie zaczynamy od rady. Najpierw pytamy: co w systemie firmy sprawia, że ten
            problem ciągle wraca?
          </p>
        </Reveal>

        <Reveal delay={0.36}>
          <p className="mt-6 max-w-[64ch] text-pretty text-muted-foreground">
            Czasem problem siedzi na hali. Czasem przy stole zarządu. A czasem nie siedzi w żadnym
            dziale - siedzi dokładnie pomiędzy nimi.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
