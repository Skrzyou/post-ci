import { Reveal } from "@/components/motion/Reveal";
import { StaggerList } from "@/components/motion/StaggerList";

const punkty = [
  "Nie robimy publicznej spowiedzi z błędów.",
  "Nie publikujemy problemu bez zgody firmy.",
  "Nie wymagamy pełnych danych finansowych.",
  "Nie używamy nazw klientów, nazwisk pracowników ani wrażliwych szczegółów.",
];

export function BezpieczenstwoFirm() {
  return (
    <section className="border-b border-border px-6 py-24">
      <div className="mx-auto max-w-[900px]">
        <Reveal>
          <h2 className="text-balance font-heading text-2xl font-semibold md:max-w-[32ch]">
            Dlaczego firmy członkowskie mogą czuć się bezpiecznie
          </h2>
          <p className="mt-3 max-w-[64ch] text-pretty text-muted-foreground">
            Pracujemy na takim poziomie konkretu, który pozwala zrozumieć mechanizm, ale nie odsłania
            firmy bardziej, niż to potrzebne.
          </p>
        </Reveal>
        <StaggerList className="mt-6 flex list-none flex-col gap-3 p-0">
          {punkty.map((p) => (
            <p key={p} className="border-l-2 border-border pl-4 text-pretty text-foreground/90">
              {p}
            </p>
          ))}
        </StaggerList>
      </div>
    </section>
  );
}
