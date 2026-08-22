import { Reveal } from "@/components/motion/Reveal";

const etapy = [
  { numer: "1", tytul: "LAB 1", opis: "Własna organizacja, własne koszty." },
  { numer: "2", tytul: "LAB 2", opis: "Format sprawdzony, jeszcze bez instytucji." },
  { numer: "3", tytul: "LAB 3 z DIG", opis: "Pierwszy partner instytucjonalny." },
];

export function PunktWyjscia() {
  return (
    <section className="border-b border-border bg-surface px-6 py-24">
      <div className="mx-auto max-w-[1100px]">
        <Reveal>
          <h2 className="text-balance font-heading text-3xl font-semibold md:max-w-[24ch]">
            Mamy już coś więcej niż pomysł
          </h2>
          <p className="mt-3 max-w-[60ch] text-pretty text-muted-foreground">
            Dwa pierwsze LAB-y zrobiliśmy sami. Trzeci sprawdziła z nami Dolnośląska Izba Gospodarcza -
            jako jedyna z około 50 wcześniej kontaktowanych izb.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {etapy.map((etap, i) => (
            <Reveal key={etap.numer} delay={i * 0.08}>
              <div className="border-t-2 border-accent pt-4">
                <p className="font-mono text-sm text-muted-foreground">Krok {etap.numer}</p>
                <p className="mt-2 font-heading text-xl font-semibold">{etap.tytul}</p>
                <p className="mt-1 text-pretty text-muted-foreground">{etap.opis}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
