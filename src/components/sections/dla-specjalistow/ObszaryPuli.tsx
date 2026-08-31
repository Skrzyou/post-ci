import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";

const obszary = [
  { obszar: "Operacje / produkcja", perspektywa: "przepływ, planowanie, UR, jakość, wydajność" },
  { obszar: "Finanse", perspektywa: "marża, cash flow, inwestycje, controlling" },
  { obszar: "Sprzedaż", perspektywa: "oferta, klient, pipeline, relacja sprzedaż-realizacja" },
  { obszar: "Ludzie / organizacja", perspektywa: "role, odpowiedzialność, liderzy, HR" },
  { obszar: "Technologia / IT", perspektywa: "ERP, dane, automatyzacja, cyberbezpieczeństwo" },
  { obszar: "Prawo / ryzyko", perspektywa: "umowy, odpowiedzialność, compliance" },
  { obszar: "Marketing / marka", perspektywa: "pozycjonowanie, komunikacja, popyt" },
  { obszar: "Strategia / skalowanie", perspektywa: "priorytety, model biznesowy, decyzje właścicielskie" },
];

export function ObszaryPuli() {
  return (
    <section className="border-b border-border px-6 py-28">
      <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-12 md:grid-cols-[7fr_5fr]">
        <div>
          <Reveal>
            <h2 className="text-balance font-heading text-3xl font-semibold md:max-w-[24ch]">
              Obszary puli
            </h2>
          </Reveal>

          <div className="mt-10 divide-y divide-border border-t border-border">
            {obszary.map((o, i) => (
              <Reveal key={o.obszar} delay={i * 0.03}>
                <div className="grid grid-cols-1 gap-1 py-4 md:grid-cols-[1fr_2fr]">
                  <p className="font-heading font-medium">{o.obszar}</p>
                  <p className="text-pretty text-sm text-muted-foreground">{o.perspektywa}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.1}>
          <div className="relative aspect-[3/4] w-full overflow-hidden">
            <Image
              src="/images/specjalistka-rozmowa.jpg"
              alt="Specjalistka rozmawia z uczestnikami podczas POST-CI LAB"
              fill
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
