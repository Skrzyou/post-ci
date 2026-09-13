import { Reveal } from "@/components/motion/Reveal";

export function IleTrzebaPokazac() {
  return (
    <section className="border-b border-border px-6 py-20">
      <div className="mx-auto max-w-[900px]">
        <Reveal>
          <h2 className="text-balance font-heading text-2xl font-semibold">Ile trzeba pokazać?</h2>
          <p className="mt-3 max-w-[64ch] text-pretty text-muted-foreground">
            Tyle, żeby grupa mogła zrozumieć mechanizm problemu. Nie potrzebujemy pełnych danych
            finansowych, nazw klientów ani nazwisk pracowników. Możemy pracować na uproszczonym opisie
            sytuacji: co wraca, gdzie się zacina, jak często się powtarza i co było już próbowane.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
