import { Reveal } from "@/components/motion/Reveal";

export function NieJednaBranza() {
  return (
    <section className="border-b border-border px-6 py-24">
      <div className="mx-auto max-w-[1100px]">
        <Reveal>
          <h2 className="text-balance font-heading text-3xl font-semibold md:max-w-[24ch]">
            &bdquo;Z hali&rdquo; nie oznacza jednej branży
          </h2>
          <p className="mt-4 max-w-[64ch] text-pretty text-muted-foreground">
            Hala była miejscem, od którego zaczęliśmy. Dziś #ZHaliNieZFolderu oznacza coś szerszego:
            idziemy tam, gdzie naprawdę dzieje się praca.
          </p>
          <div className="mt-6 flex flex-col gap-1 text-lg font-medium text-foreground md:max-w-[40ch]">
            <p>Do procesu.</p>
            <p>Do danych.</p>
            <p>Do decyzji.</p>
            <p>Do zachowań ludzi.</p>
          </div>
          <p className="mt-6 max-w-[64ch] text-pretty text-muted-foreground">
            Do tego, co firma robi naprawdę - nie do slajdu pokazującego, jak powinno być. Dlatego
            POST-CI działa również wtedy, gdy zamiast maszyn są developerzy, handlowcy, analitycy albo
            zespół realizacji.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
