import { Reveal } from "@/components/motion/Reveal";

const kroki = [
  {
    sytuacja: "Nie wiemy, gdzie naprawdę jest problem.",
    odpowiedz: "Audyt 4xC",
  },
  {
    sytuacja: "Wiemy, który temat wraca, ale krążymy wokół niego.",
    odpowiedz: "POST-CI",
    aktywny: true,
  },
  {
    sytuacja: "Wiemy, co zmienić, ale firma wraca do starego.",
    odpowiedz: "Projekt Wdrożeniowy 4xC",
  },
];

export function GdzieJestProblem() {
  return (
    <section className="border-b border-border bg-surface px-6 py-24">
      <div className="mx-auto max-w-[1100px]">
        <Reveal>
          <p className="font-mono text-sm text-accent">Nie zawsze to POST-CI</p>
          <h2 className="mt-3 text-balance font-heading text-3xl font-semibold md:max-w-[32ch]">
            Gdzie dziś jest Twój problem?
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {kroki.map((krok, i) => (
            <Reveal key={krok.odpowiedz} delay={i * 0.08}>
              <div
                className={`flex h-full flex-col justify-between border p-6 ${
                  krok.aktywny ? "border-accent bg-background" : "border-border"
                }`}
              >
                <p className="text-pretty text-muted-foreground">{krok.sytuacja}</p>
                <p className="mt-6 font-heading text-lg font-semibold">{krok.odpowiedz}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.24}>
          <p className="mt-6 max-w-[64ch] text-sm text-muted-foreground">
            Audyt 4xC i Projekt Wdrożeniowy 4xC to osobne formaty pracy w ramach #ZHaliNieZFolderu.
            Jeśli nie masz pewności, który pasuje do Twojej sytuacji, napisz do nas - podpowiemy.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
