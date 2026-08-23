import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";

export function KtoJestKim() {
  return (
    <section className="border-b border-border bg-surface px-6 py-24">
      <div className="mx-auto max-w-[1100px]">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[5fr_7fr]">
          <Reveal>
            <div className="relative aspect-[3/4] w-full overflow-hidden border border-border">
              <Image
                src="/images/duet-radio-afera.jpg"
                alt="Krzysztof Skrzypczak i Jakub Giełbaga razem w studiu Radia Afera, w koszulkach z hasztagami ZHaliNieZFolderu i ODRADZAM"
                fill
                className="object-cover"
              />
            </div>
          </Reveal>

          <div className="flex flex-col gap-8">
            <Reveal delay={0.06}>
              <div className="border border-border bg-background p-8">
                <p className="font-mono text-sm text-accent">Krzysztof Skrzypczak</p>
                <p className="mt-1 text-lg font-medium">&bdquo;Z hali, nie z folderu&rdquo;</p>
                <p className="mt-3 text-pretty text-muted-foreground">
                  Na co dzień pracuje z firmami produkcyjnymi nad ich procesami operacyjnymi. W POST-CI
                  prowadzi rozmowy z firmami i partnerami, dobiera skład stołu do problemu i prowadzi
                  spotkania. Głos #ZHaliNieZFolderu na LinkedIn.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="border border-border bg-background p-8">
                <p className="font-mono text-sm text-accent">Jakub Giełbaga</p>
                <p className="mt-1 text-lg font-medium">&bdquo;Odradzam chaos w procesach&rdquo;</p>
                <p className="mt-3 text-pretty text-muted-foreground">
                  Współtworzy metodę od początku i pilnuje, żeby dało się ją powtarzać za każdym razem tak
                  samo. Patrzy na problem firmy od strony liczb - przepływów pieniężnych, przepustowości i
                  decyzji zarządczych.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
