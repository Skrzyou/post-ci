import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

export function Sciezki() {
  return (
    <section id="sciezki" className="border-b border-border px-6 py-28">
      <div className="mx-auto max-w-[1100px]">
        <Reveal>
          <h2 className="text-balance font-heading text-3xl font-semibold md:max-w-[26ch]">
            Dwie drogi dla Twojej firmy
          </h2>
          <p className="mt-3 max-w-[64ch] text-pretty text-muted-foreground">
            Ten sam sposób pracy, inny poziom skupienia na Twojej firmie. Wnieś problem na bezpłatny
            POST-CI LAB albo przepracuj go w zamkniętym POST-CI INSIDE.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <Reveal delay={0.08}>
            <div className="flex h-full flex-col justify-between border border-border bg-surface p-8">
              <div>
                <p className="font-mono text-sm text-accent">POST-CI LAB</p>
                <h3 className="mt-3 text-balance font-heading text-xl font-semibold">
                  Otwarta edycja partnerska
                </h3>
                <p className="mt-3 text-pretty text-muted-foreground">
                  Dwie firmy. Interdyscyplinarni praktycy. Poufność. Bezpłatny udział zakwalifikowanej
                  firmy. Jeden Kontrakt 30 Dni.
                </p>
              </div>
              <Link
                href="/dla-firm"
                className="mt-6 inline-flex w-fit items-center gap-1 border border-foreground px-5 py-3 text-sm font-medium transition-transform hover:-translate-y-0.5"
              >
                Zgłoś problem
                <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="flex h-full flex-col justify-between border border-border p-8">
              <div>
                <p className="font-mono text-sm text-accent">POST-CI INSIDE</p>
                <h3 className="mt-3 text-balance font-heading text-xl font-semibold">
                  Zamknięta praca wewnątrz jednej firmy
                </h3>
                <p className="mt-3 text-pretty text-muted-foreground">
                  Właściciel, zarząd lub kilka funkcji. Zespół dobrany do problemu. Pełna poufność.
                  Płatna praca B2B.
                </p>
              </div>
              <Link
                href="/kontakt?jestem=firma-inside"
                className="mt-6 inline-flex w-fit items-center gap-1 border border-foreground px-5 py-3 text-sm font-medium transition-transform hover:-translate-y-0.5"
              >
                Umawiam rozmowę
                <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.24}>
          <p className="mt-6 text-sm text-muted-foreground">
            Szczegóły i zakres cenowy INSIDE - na stronie{" "}
            <Link href="/dla-firm" className="text-accent hover:underline">
              dla firm
            </Link>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
