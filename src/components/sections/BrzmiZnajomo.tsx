import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerList } from "@/components/motion/StaggerList";

const zdania = [
  "Plan zmienia się kilka razy dziennie.",
  "Decyzje wracają do właściciela.",
  "Każdy dział dowozi swoje, a klient dostaje chaos.",
  "Problem ma już sześć spotkań i nadal nie ma właściciela.",
  "Nowy sposób pracy działa do pierwszego odstępstwa.",
];

const przyklady = [
  {
    objaw: "„Ludzie nie biorą odpowiedzialności.”",
    mechanizm:
      "Być może problemem nie jest zaangażowanie. Być może bez zgody szefa podjęcie decyzji jest bardziej ryzykowne niż jej niepodjęcie.",
  },
  {
    objaw: "„Właściciel musi wszystkiego pilnować.”",
    mechanizm:
      "Być może nie chodzi o delegowanie. Firma mogła przez lata zbudować system, w którym wszystkie ważne decyzje naturalnie wracają do jednej osoby.",
  },
  {
    objaw: "„Plan ciągle się zmienia.”",
    mechanizm:
      "Być może nie zawodzi planowanie. Być może sprzedaż, operacje i zarządzający pracują na różnych priorytetach.",
  },
];

export function BrzmiZnajomo() {
  return (
    <section className="border-b border-border bg-surface px-6 py-28">
      <div className="mx-auto max-w-[1100px]">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[7fr_5fr] md:items-end">
          <Reveal>
            <h2 className="text-balance font-heading text-3xl font-semibold md:max-w-[24ch]">
              Brzmi znajomo?
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="relative aspect-[16/10] w-full overflow-hidden">
              <Image
                src="/images/tekstura-karteczki.jpg"
                alt="Karteczki z notatkami przypięte do papieru na ścianie"
                fill
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>

        <StaggerList className="mt-10 grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2">
          {zdania.map((z) => (
            <p
              key={z}
              className="bg-background px-6 py-5 text-balance font-heading text-xl font-medium leading-snug"
            >
              &bdquo;{z}&rdquo;
            </p>
          ))}
        </StaggerList>

        <Reveal delay={0.2}>
          <p className="mt-10 max-w-[64ch] text-pretty text-muted-foreground">
            Każde z tych zdań może wyglądać jak inny problem. Czasem pod spodem działa jednak ten sam
            mechanizm: firma nauczyła się obchodzić problem, zamiast usuwać to, co go ciągle produkuje.
          </p>
        </Reveal>

        <div className="mt-16 flex flex-col gap-0">
          {przyklady.map((p, i) => (
            <Reveal key={p.objaw} delay={i * 0.08}>
              <div className="grid grid-cols-1 gap-2 border-t border-border py-6 md:grid-cols-[7fr_12fr]">
                <p className="font-heading text-lg font-semibold">{p.objaw}</p>
                <p className="text-pretty text-muted-foreground">{p.mechanizm}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <p className="mt-10 max-w-[64ch] text-pretty text-lg font-medium text-foreground">
            Dlatego w POST-CI nie zaczynamy od rady. Najpierw pytamy: co w systemie firmy sprawia, że ten
            problem ciągle wraca?
          </p>
        </Reveal>

        <Reveal delay={0.36}>
          <p className="mt-6 max-w-[64ch] text-pretty text-muted-foreground">
            Czasem problem siedzi na hali. Czasem przy stole zarządu. A czasem nie siedzi w żadnym
            dziale - siedzi dokładnie pomiędzy nimi.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
