import { Reveal } from "@/components/motion/Reveal";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqs = [
  {
    pytanie: "Czy LAB naprawdę jest bezpłatny?",
    odpowiedz:
      "Tak, dla firmy. Koszt edycji pokrywa partner lub instytucja (np. Dolnośląska Izba Gospodarcza), nie Twoja firma.",
  },
  {
    pytanie: "Co jeśli nie chcemy ujawniać wrażliwych szczegółów?",
    odpowiedz:
      "Case'y i dane firm zostają w grupie. Publikacja czegokolwiek na zewnątrz - tylko po anonimizacji i za Twoją zgodą.",
  },
  {
    pytanie: "Ile trwa jedno spotkanie?",
    odpowiedz:
      "Jeden LAB to kilka godzin roboty tego samego dnia - od Master Mapy, przez Mini-Klinikę, po podpisany Kontrakt 30 Dni.",
  },
  {
    pytanie: "Co jeśli wybrany ruch nie zadziała w 30 dni?",
    odpowiedz:
      "Follow-up T+30 jest obowiązkową częścią formatu, nie dodatkiem. Sprawdzamy, co realnie ruszyło, a co zablokowało - to dowód, nie formalność.",
  },
  {
    pytanie: "Czym INSIDE różni się od zwykłego konsultingu?",
    odpowiedz:
      "Nie dostajesz raportu na 50 stron. Min. 5 osób eksperckich pracuje jeden dzień nad Twoim konkretnym problemem, a na koniec masz jeden Kontrakt 30 Dni do wykonania.",
  },
];

export function FaqDlaFirm() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-[1100px]">
        <Reveal>
          <h2 className="text-balance font-heading text-3xl font-semibold md:max-w-[24ch]">
            Pytania, które padają najczęściej
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <Accordion className="mt-10 max-w-[70ch]">
            {faqs.map((f) => (
              <AccordionItem key={f.pytanie} value={f.pytanie}>
                <AccordionTrigger className="text-base">{f.pytanie}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.odpowiedz}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
