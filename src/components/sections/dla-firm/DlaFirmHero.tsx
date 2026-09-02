import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerList } from "@/components/motion/StaggerList";

const przekonania = [
  "Klient jest święty.",
  "Ludzi nie ma.",
  "Ja muszę wszystko sam.",
  "U nas inaczej się nie da.",
  "Zawsze tak robiliśmy.",
  "To nie mój dział.",
];

export function DlaFirmHero() {
  return (
    <section className="border-b border-border px-6 py-28">
      <div className="mx-auto max-w-[1100px]">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[7fr_5fr] md:items-center">
          <Reveal>
            <p className="font-mono text-sm text-accent">Dla właścicieli MŚP</p>
            <h1 className="mt-4 text-balance font-heading text-4xl font-semibold leading-tight sm:text-5xl md:max-w-[20ch]">
              Macie problem, który był już rozwiązany kilka razy?
            </h1>
            <p className="mt-6 max-w-[60ch] text-pretty text-lg text-muted-foreground">
              To może być dobry temat na POST-CI.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src="/images/lab-zespol-whiteboard.jpg"
                alt="Zespół specjalistów POST-CI LAB pracuje wspólnie przy tablicy z Master Mapą"
                fill
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>

      </div>

      <Reveal delay={0.16}>
        <div className="mt-16 bg-foreground px-6 py-16">
          <StaggerList className="mx-auto grid max-w-[1100px] list-none grid-cols-1 gap-x-10 gap-y-8 p-0 sm:grid-cols-2">
            {przekonania.map((zdanie) => (
              <p
                key={zdanie}
                className="text-balance font-heading text-3xl font-semibold leading-[1.15] text-background sm:text-4xl"
              >
                <span className="text-accent">&bdquo;</span>
                {zdanie}
                <span className="text-accent">&rdquo;</span>
              </p>
            ))}
          </StaggerList>
        </div>
      </Reveal>
    </section>
  );
}
