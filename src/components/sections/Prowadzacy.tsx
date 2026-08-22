import { Reveal } from "@/components/motion/Reveal";

export function Prowadzacy() {
  return (
    <section className="border-b border-border bg-surface px-6 py-24">
      <div className="mx-auto max-w-[1100px]">
        <Reveal>
          <h2 className="text-balance font-heading text-3xl font-semibold md:max-w-[24ch]">
            Dwie osoby, nie marka bez twarzy
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
          <Reveal>
            <div className="border border-border bg-background p-8">
              <p className="font-mono text-sm text-accent">Krzysztof Skrzypczak</p>
              <p className="mt-2 text-lg font-medium">&bdquo;Z hali, nie z folderu&rdquo;</p>
              <p className="mt-3 text-pretty text-muted-foreground">
                Lead merytoryczny, prowadzi case'y i relacje instytucjonalne. Głos #ZHaliNieZFolderu na
                LinkedIn.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="border border-border bg-background p-8">
              <p className="font-mono text-sm text-accent">Jakub Giełbaga</p>
              <p className="mt-2 text-lg font-medium">&bdquo;Odradzam chaos w procesach&rdquo;</p>
              <p className="mt-3 text-pretty text-muted-foreground">
                Współtwórca metody, dba o powtarzalność formatu, perspektywa cashflow, przepustowości i
                decyzji zarządczych.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
