import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/button";

export function WnosiDostaje() {
  return (
    <section className="bg-surface px-6 py-24">
      <div className="mx-auto max-w-[1100px]">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Reveal>
            <div className="h-full border border-border bg-background p-8">
              <p className="font-heading text-xl font-semibold">Co wnosisz</p>
              <p className="mt-3 text-pretty text-muted-foreground">
                Wiedzę, czas, dojazd, pracę przy case'ach - w formacie partnerskim bez wynagrodzenia,
                jeśli edycja nie przewiduje inaczej.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="h-full border border-border bg-background p-8">
              <p className="font-heading text-xl font-semibold">Co dostajesz</p>
              <p className="mt-3 text-pretty text-muted-foreground">
                Realne case'y, relacje, uczenie się od innych specjalistów i możliwość późniejszego biznesu
                - zawsze zaczętego po LAB-ie, nie przy stole.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.16}>
          <div className="mt-10 border border-dashed border-border p-8">
            <p className="text-sm text-muted-foreground">
              Chcesz dołączyć? Napisz do nas kilka zdań o swoim doświadczeniu i dostępności - odezwiemy się,
              gdy będzie pasujący case.
            </p>
            <Button
              render={<Link href="/kontakt?jestem=specjalista" />}
              nativeButton={false}
              size="lg"
              className="mt-6 transition-transform hover:-translate-y-0.5"
            >
              Dołącz do puli specjalistów
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
