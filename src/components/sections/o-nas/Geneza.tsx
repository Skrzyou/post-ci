import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";

export function Geneza() {
  return (
    <section className="border-b border-border px-6 py-28">
      <div className="mx-auto grid max-w-[1100px] grid-cols-1 items-center gap-10 md:grid-cols-[5fr_7fr]">
        <Reveal>
          <div>
            <h2 className="text-balance font-heading text-3xl font-semibold md:max-w-[24ch]">
              Geneza POST-CI
            </h2>
            <p className="mt-4 max-w-[64ch] text-pretty text-muted-foreground">
              Pierwsze dwa LAB-y Krzysztof i Jakub zorganizowali i pokryli koszty sami - żeby sprawdzić,
              czy format w ogóle działa. Trzecią edycję zorganizowali razem z Dolnośląską Izbą
              Gospodarczą, która zapewniła przestrzeń i pomoc w dotarciu do firm. Po tej edycji pojawił
              się pomysł, żeby robić POST-CI LAB cyklicznie, raz na kwartał.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src="/images/gora-lodowa-detal.jpg"
              alt="Prowadzący POST-CI LAB analizuje ścianę Góry Lodowej ze strefami Geneza, Ściana i Laboratorium"
              fill
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
