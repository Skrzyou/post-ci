import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";

export function SpecjalistaHero() {
  return (
    <section className="border-b border-border px-6 py-28">
      <div className="mx-auto max-w-[1100px]">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[7fr_5fr] md:items-center">
          <Reveal>
            <p className="font-mono text-sm text-accent">Dla specjalistów</p>
            <h1 className="mt-4 text-balance font-heading text-4xl font-semibold leading-tight sm:text-5xl md:max-w-[22ch]">
              Praca nad realnym problemem, nie wymiana wizytówek
            </h1>
            <p className="mt-6 max-w-[60ch] text-pretty text-lg text-muted-foreground">
              Budujemy stałą pulę 20–30 zweryfikowanych osób, żeby nie opierać każdej edycji na tej samej
              grupie.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src="/images/specjalistka-master-mapa.jpg"
                alt="Specjalistka prowadzi grupę przy ścianie Master Mapy pokrytej karteczkami"
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
