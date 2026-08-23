import Image from "next/image";
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
            Pierwsze dwa LAB-y Krzysztof i Jakub zorganizowali i sfinansowali sami - żeby sprawdzić, czy
            format w ogóle działa. Trzecią edycję sprawdziła z nimi Dolnośląska Izba Gospodarcza, jako
            jedyna z około 50 wcześniej kontaktowanych izb, która realnie weszła w format. Po 3. LAB-ie
            przedstawiciel DIG ocenił format bardzo pozytywnie i padła propozycja: robić POST-CI cyklicznie,
            raz na kwartał.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative mt-8 aspect-[4/3] w-full overflow-hidden border border-border md:aspect-[16/7]">
            <Image
              src="/images/duet-itm-scena.jpg"
              alt="Krzysztof Skrzypczak i Jakub Giełbaga na scenie podczas panelu na targach ITM Industry Europe"
              fill
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
