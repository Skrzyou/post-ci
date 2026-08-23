import { Reveal } from "@/components/motion/Reveal";

export function Geneza() {
  return (
    <section className="border-b border-border px-6 py-24">
      <div className="mx-auto max-w-[1100px]">
        <Reveal>
          <h2 className="text-balance font-heading text-3xl font-semibold md:max-w-[24ch]">
            Geneza POST-CI
          </h2>
          <p className="mt-4 max-w-[64ch] text-pretty text-muted-foreground">
            Pierwsze dwa LAB-y Krzysztof i Jakub zorganizowali i pokryli koszty sami - żeby sprawdzić, czy
            format w ogóle działa. Trzecią edycję zorganizowali razem z Dolnośląską Izbą Gospodarczą, która
            zapewniła przestrzeń i pomoc w dotarciu do firm. Po tej edycji pojawił się pomysł, żeby robić
            POST-CI LAB cyklicznie, raz na kwartał.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
