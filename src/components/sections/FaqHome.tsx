import { Reveal } from "@/components/motion/Reveal";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqs = [
  {
    pytanie: "Czy muszę ujawniać poufne dane?",
    odpowiedz:
      "Nie więcej, niż potrzeba do pracy nad problemem. Case firmy nie wychodzi z sali, a publikacja czegokolwiek na zewnątrz odbywa się tylko po anonimizacji i za Twoją zgodą.",
  },
  {
    pytanie: "Ile to zajmuje czasu?",
    odpowiedz:
      "Jedno spotkanie LAB trwa 5-6 godzin, jeden dzień. Kolejne zaangażowanie to wykonanie uzgodnionego ruchu w ciągu 30 dni i krótka rozmowa podsumowująca.",
  },
  {
    pytanie: "Ile to kosztuje?",
    odpowiedz:
      "Udział zakwalifikowanej firmy w POST-CI LAB jest bezpłatny - koszt organizacji pokrywa partner edycji. POST-CI INSIDE to płatna praca B2B, zakres i cenę znajdziesz na stronie dla firm.",
  },
  {
    pytanie: "Czy musi być przy stole osoba decyzyjna?",
    odpowiedz:
      "Tak. Bez właściciela lub osoby uprawnionej do podjęcia decyzji trudno wybrać ruch, który firma naprawdę wykona w 30 dni.",
  },
  {
    pytanie: "Co jeśli wybrany ruch nie zadziała?",
    odpowiedz:
      "Spotykamy się po 30 dniach i rozmawiamy wprost, co się nie udało i dlaczego. To sygnał do kolejnego kroku, nie koniec współpracy.",
  },
  {
    pytanie: "Czy grupa będzie mi mówić, co mam zrobić?",
    odpowiedz:
      "Nie. Praktycy pytają i pomagają zobaczyć problem z kilku stron, ale decyzja o ruchu na 30 dni należy do Ciebie.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.pytanie,
    acceptedAnswer: { "@type": "Answer", text: f.odpowiedz },
  })),
};

export function FaqHome() {
  return (
    <section className="px-6 py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="mx-auto max-w-[900px]">
        <Reveal>
          <h2 className="text-balance font-heading text-2xl font-semibold md:max-w-[24ch]">
            Co jeszcze warto wiedzieć
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <Accordion className="mt-8">
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
