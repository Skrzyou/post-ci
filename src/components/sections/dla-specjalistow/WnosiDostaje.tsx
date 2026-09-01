import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/button";

export function WnosiDostaje() {
  return (
    <section className="bg-surface px-6 py-28">
      <div className="mx-auto max-w-[1100px]">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Reveal>
            <div className="h-full bg-background p-8">
              <p className="font-heading text-xl font-semibold">Co wnosisz</p>
              <p className="mt-3 text-pretty text-muted-foreground">
                Wiedzę, czas i dojazd. W POST-CI LAB (format partnerski) udział jest bez wynagrodzenia. W
                POST-CI INSIDE (płatny, zamknięty format dla jednej firmy) przewidujemy honorarium dla
                zaangażowanych specjalistów.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="h-full bg-background p-8">
              <p className="font-heading text-xl font-semibold">Co dostajesz</p>
              <p className="mt-3 text-pretty text-muted-foreground">
                Pracę nad realnymi problemami firm, relacje z innymi specjalistami i praktykę w metodzie,
                której nie da się nauczyć z prezentacji.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.16}>
          <div className="mt-10 border border-dashed border-border p-8">
            <p className="text-sm text-muted-foreground">
              Chcesz dołączyć? Napisz do nas kilka zdań o swoim doświadczeniu i dostępności - odezwiemy
              się, gdy będzie pasujący problem do rozwiązania.
            </p>
            <Button
              render={<Link href="/kontakt?jestem=specjalista" />}
              nativeButton={false}
              size="lg"
              className="mt-6 transition-transform hover:-translate-y-0.5"
            >
              Dołącz do koalicji POST-CI
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
