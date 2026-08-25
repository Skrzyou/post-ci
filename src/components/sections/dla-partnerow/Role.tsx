import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/button";

export function Role() {
  return (
    <section className="px-6 py-28">
      <div className="mx-auto max-w-[1100px]">
        <div className="grid grid-cols-1 items-end gap-8 md:grid-cols-[7fr_5fr]">
          <Reveal>
            <h2 className="text-balance font-heading text-3xl font-semibold md:max-w-[24ch]">
              Role: kto wnosi co
            </h2>
            <p className="mt-3 max-w-[60ch] text-pretty text-muted-foreground">
              Partnerstwo ma sens tylko wtedy, gdy każdy ma konkretną rolę. Samo logo nie wystarczy.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src="/images/lab-dig-magicinfo.jpg"
                alt="Uczestnicy POST-CI LAB w siedzibie Dolnośląskiej Izby Gospodarczej przy prezentacji MagicINFO"
                fill
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-0 border border-border md:grid-cols-3">
          <div className="border-b border-border p-8 md:border-b-0 md:border-r">
            <p className="font-heading text-lg font-semibold">Partner (np. izba)</p>
            <p className="mt-2 text-pretty text-sm text-muted-foreground">
              Członkowie i firmy, komunikacja, wiarygodność instytucjonalna.
            </p>
          </div>
          <div className="border-b border-border bg-surface p-8 md:border-b-0 md:border-r">
            <p className="font-heading text-lg font-semibold">POST-CI (Krzysztof + Jakub)</p>
            <p className="mt-2 text-pretty text-sm text-muted-foreground">
              Format i metoda, kwalifikacja problemów, prowadzenie, sprawdzenie efektu po 30 dniach.
            </p>
          </div>
          <div className="p-8">
            <p className="font-heading text-lg font-semibold">Partner finansujący</p>
            <p className="mt-2 text-pretty text-sm text-muted-foreground">
              Budżet albo infrastruktura, program wsparcia dla MŚP.
            </p>
          </div>
        </div>

        <Reveal delay={0.1}>
          <p className="mt-8 max-w-[64ch] text-pretty text-sm text-muted-foreground">
            Granice: poufność problemów firm, brak sprzedaży przy stole.
          </p>
        </Reveal>

        <Reveal delay={0.18}>
          <Button
            render={<Link href="/kontakt?jestem=partner" />}
            nativeButton={false}
            size="lg"
            className="mt-10 transition-transform hover:-translate-y-0.5"
          >
            Umów rozmowę o pilotażu
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
