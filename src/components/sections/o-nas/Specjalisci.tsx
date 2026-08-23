import { Reveal } from "@/components/motion/Reveal";

export function Specjalisci() {
  return (
    <section className="border-b border-border px-6 py-24">
      <div className="mx-auto max-w-[1100px]">
        <Reveal>
          <h2 className="text-balance font-heading text-3xl font-semibold md:max-w-[26ch]">
            POST-CI nie istniałoby bez nich
          </h2>
          <p className="mt-4 max-w-[64ch] text-pretty text-muted-foreground">
            Przy każdej z 3 zrealizowanych edycji przy stole siadało 10-12 specjalistów - z operacji,
            finansów, sprzedaży, ludzi, IT, prawa, marketingu i strategii. Bez wynagrodzenia, wnosząc
            własny czas i doświadczenie, żeby pomóc realnym firmom zobaczyć problem szerzej. To oni, obok
            Krzysztofa i Jakuba, są drugim filarem formatu.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 border border-dashed border-border p-8 text-sm text-muted-foreground">
            Mini-bio specjalistów, którzy wyrażą zgodę na publikację - w przygotowaniu. Wracamy tu, gdy
            zbierzemy zgody i materiały.
          </div>
        </Reveal>
      </div>
    </section>
  );
}
