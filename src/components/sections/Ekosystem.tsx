import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

export function Ekosystem() {
  return (
    <section className="border-b border-border px-6 py-16">
      <div className="mx-auto max-w-[1100px]">
        <Reveal>
          <p className="max-w-[64ch] text-pretty text-muted-foreground">
            Nie jesteś firmą ze zgłoszeniem, ale chcesz być częścią POST-CI?
          </p>
          <div className="mt-4 flex flex-wrap gap-4">
            <Link
              href="/dla-partnerow"
              className="inline-flex items-center gap-1 text-sm font-medium text-accent-text hover:underline"
            >
              Jestem partnerem instytucjonalnym
              <ArrowUpRight className="size-4" />
            </Link>
            <Link
              href="/dla-specjalistow"
              className="inline-flex items-center gap-1 text-sm font-medium text-accent-text hover:underline"
            >
              Chcę dołączyć jako praktyk
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
