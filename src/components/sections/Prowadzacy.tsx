import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

export function Prowadzacy() {
  return (
    <section className="border-b border-border bg-surface px-6 py-24">
      <div className="mx-auto max-w-[1100px]">
        <Reveal>
          <h2 className="text-balance font-heading text-3xl font-semibold md:max-w-[24ch]">
            Za POST-CI LAB odpowiadamy osobiście
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
          <Reveal>
            <div className="border border-border bg-background p-8">
              <p className="font-mono text-sm text-accent">Krzysztof Skrzypczak - #ZHaliNieZFolderu</p>
              <p className="mt-2 text-lg font-medium">&bdquo;Z hali, nie z folderu&rdquo;</p>
              <p className="mt-3 text-pretty text-muted-foreground">
                Nie zna operacji wyłącznie z audytów. Przeszedł drogę od operatora do zarządzania firmą.
                Dziś pracuje z firmami nad problemami, które wracają mimo kolejnych prób naprawy. W
                POST-CI kwalifikuje problemy, dobiera ludzi do stołu i prowadzi pracę nad decyzją na 30
                dni.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="border border-border bg-background p-8">
              <p className="font-mono text-sm text-accent">Jakub Giełbaga</p>
              <p className="mt-2 text-lg font-medium">&bdquo;Odradzam chaos w procesach&rdquo;</p>
              <p className="mt-3 text-pretty text-muted-foreground">
                Współtwórca metody, dba o powtarzalność formatu, perspektywa przepływów pieniężnych,
                przepustowości i decyzji zarządczych.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.16}>
          <Link
            href="/o-nas"
            className="mt-8 inline-flex items-center gap-1 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
          >
            Więcej o nas
            <ArrowUpRight className="size-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
