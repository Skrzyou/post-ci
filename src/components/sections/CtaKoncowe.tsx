import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/button";

export function CtaKoncowe() {
  return (
    <section className="px-6 py-24">
      <Reveal>
        <div className="mx-auto flex max-w-[1100px] flex-col items-start gap-6 border border-border bg-surface p-10 md:flex-row md:items-center md:justify-between">
          <h2 className="text-balance font-heading text-2xl font-semibold md:max-w-[28ch]">
            Nie budujemy wydarzeń. Budujemy jeden ruch na 30 dni.
          </h2>
          <Button
            render={<Link href="/dla-firm" />}
            nativeButton={false}
            size="lg"
            className="shrink-0 transition-transform hover:-translate-y-0.5"
          >
            Zgłoś swój problem
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
