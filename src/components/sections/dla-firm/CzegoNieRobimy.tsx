import { Reveal } from "@/components/motion/Reveal";

const zasady = [
  "Płacisz za proces i decyzję, nie za wynajem sali czy czas ekspertów.",
  "Zero ofert, prezentacji handlowych i rozmów sprzedażowych podczas samego LAB-u.",
  "Poufność - wnioski na zewnątrz tylko po anonimizacji i za zgodą.",
  "Nie obiecujemy transformacji firmy po jednym spotkaniu - tylko jeden sprawdzalny ruch.",
];

export function CzegoNieRobimy() {
  return (
    <section className="border-b border-border px-6 py-24">
      <div className="mx-auto max-w-[1100px]">
        <Reveal>
          <h2 className="text-balance font-heading text-3xl font-semibold md:max-w-[24ch]">
            Czego nie robimy
          </h2>
        </Reveal>

        <div className="mt-10 flex flex-col gap-0">
          {zasady.map((zasada, i) => (
            <Reveal key={zasada} delay={i * 0.06}>
              <p className="border-b border-border py-5 text-balance font-heading text-xl font-medium leading-snug md:max-w-[56ch]">
                {zasada}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
