import { Reveal } from "@/components/motion/Reveal";

export function SpecjalistaHero() {
  return (
    <section className="border-b border-border px-6 py-24">
      <div className="mx-auto max-w-[1100px]">
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
      </div>
    </section>
  );
}
