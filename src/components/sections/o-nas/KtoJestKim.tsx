import { Reveal } from "@/components/motion/Reveal";

export function KtoJestKim() {
  return (
    <section className="border-b border-border bg-surface px-6 py-24">
      <div className="mx-auto max-w-[1100px]">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <Reveal>
            <div className="border border-border bg-background p-8">
              <p className="font-mono text-xs text-muted-foreground">PLACEHOLDER ZDJĘCIA</p>
              <div className="mt-3 aspect-[4/5] w-full border border-dashed border-border bg-surface" />
              <p className="mt-5 font-mono text-sm text-accent">Krzysztof Skrzypczak</p>
              <p className="mt-1 text-lg font-medium">&bdquo;Z hali, nie z folderu&rdquo;</p>
              <p className="mt-3 text-pretty text-muted-foreground">
                Lead merytoryczny formatu: kwalifikuje case'y, prowadzi Case A na LAB-ach, odpowiada za
                główne relacje instytucjonalne i głos #ZHaliNieZFolderu na LinkedIn.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="border border-border bg-background p-8">
              <p className="font-mono text-xs text-muted-foreground">PLACEHOLDER ZDJĘCIA</p>
              <div className="mt-3 aspect-[4/5] w-full border border-dashed border-border bg-surface" />
              <p className="mt-5 font-mono text-sm text-accent">Jakub Giełbaga</p>
              <p className="mt-1 text-lg font-medium">&bdquo;Odradzam chaos w procesach&rdquo;</p>
              <p className="mt-3 text-pretty text-muted-foreground">
                Współtworzy metodę od początku, prowadzi Case B, pilnuje powtarzalności formatu i wnosi
                perspektywę przepustowości, cashflow i decyzji zarządczych.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
