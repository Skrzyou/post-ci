import { Reveal } from "@/components/motion/Reveal";

export function CzymJestPostCi() {
  return (
    <section className="border-b border-border px-6 py-24">
      <Reveal>
        <div className="mx-auto max-w-[1100px]">
          <p className="font-mono text-sm text-accent">Czym jest POST-CI</p>
          <p className="mt-4 text-balance font-heading text-2xl font-semibold leading-snug md:max-w-[56ch] md:text-3xl">
            POST-CI bierze jeden realny problem firmy, oddziela fakty od firmowej wersji wydarzeń,
            szuka mechanizmu i kończy jednym ruchem do sprawdzenia w rzeczywistości.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
