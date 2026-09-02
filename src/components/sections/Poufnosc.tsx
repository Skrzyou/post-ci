import { Reveal } from "@/components/motion/Reveal";

export function Poufnosc() {
  return (
    <section className="border-b border-border px-6 py-24">
      <Reveal>
        <div className="mx-auto flex max-w-[1100px] items-start gap-5">
          <svg viewBox="0 0 48 48" className="size-8 shrink-0 text-accent" role="img" aria-label="Ikona kłódki - poufność">
            <rect x="10" y="21" width="28" height="20" rx="2" fill="none" stroke="currentColor" strokeWidth="2.5" />
            <path d="M16 21 V14 a8 8 0 0 1 16 0 v7" fill="none" stroke="currentColor" strokeWidth="2.5" />
            <circle cx="24" cy="30" r="3" fill="currentColor" />
          </svg>
          <div>
            <p className="font-mono text-sm text-accent">Poufność</p>
            <p className="mt-2 max-w-[64ch] text-pretty text-lg font-medium text-foreground">
              Case firmy nie wychodzi z sali. Nie publikujemy problemu bez zgody. Przy stole nie ma
              zdjęć materiałów, nagrań ani późniejszego polowania na leady.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
