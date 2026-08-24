import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/button";

export function CtaKoncowe() {
  return (
    <section className="px-6 py-24">
      <Reveal>
        <div className="mx-auto flex max-w-[1100px] flex-col items-start gap-6 border border-border bg-surface p-10 md:flex-row md:items-center md:justify-between">
          <h2 className="text-balance font-heading text-2xl font-semibold md:max-w-[28ch]">
            Co w Twojej firmie ciągle wraca?
          </h2>
          <div className="flex shrink-0 flex-col items-start gap-2">
            <Button
              render={<Link href="/kontakt?jestem=firma-lab" />}
              nativeButton={false}
              size="lg"
              className="transition-transform hover:-translate-y-0.5"
            >
              Zgłoś problem
            </Button>
            <p className="text-xs text-muted-foreground">
              Najpierw sprawdzimy, czy POST-CI jest właściwym miejscem do pracy nad nim.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
