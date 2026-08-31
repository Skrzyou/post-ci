import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";

export function ONasHero() {
  return (
    <section className="border-b border-border px-6 py-28">
      <div className="mx-auto max-w-[1100px]">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[7fr_5fr] md:items-center">
          <Reveal>
            <p className="font-mono text-sm text-accent">O nas</p>
            <h1 className="mt-4 text-balance font-heading text-4xl font-semibold leading-tight sm:text-5xl md:max-w-[20ch]">
              Dwie osoby, jeden format
            </h1>
            <p className="mt-6 max-w-[60ch] text-pretty text-lg text-muted-foreground">
              POST-CI od początku budują wspólnie Krzysztof i Jakub - razem wspierają, organizują i
              współfinansują rozwój formatu.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src="/images/o-nas-hero-rozmowa.jpg"
                alt="Rozmowa uczestników przy filarze z cegły podczas POST-CI LAB"
                fill
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
