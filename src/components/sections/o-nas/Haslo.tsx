import { Reveal } from "@/components/motion/Reveal";

export function Haslo() {
  return (
    <section className="bg-surface px-6 py-24">
      <Reveal>
        <div className="mx-auto max-w-[1100px]">
          <p className="text-balance font-heading text-2xl font-semibold leading-snug md:max-w-[48ch] md:text-3xl">
            #ZHaliNieZFolderu to nie hasztag na potrzeby postów - to zasada pracy: fakty z hali i finansów,
            nie slajdy z folderu.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
