"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

const lines = ["Problem, który wraca od miesięcy. ", "Jeden ruch do sprawdzenia w 30 dni."];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const line = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.17, 0.55, 0.55, 1] as const } },
};

export function Hero() {
  return (
    <section className="min-h-screen border-b border-border px-6 py-32">
      <div className="mx-auto w-full max-w-[1100px]">
        <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-[7fr_5fr]">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-mono text-sm tracking-normal text-accent"
            >
              POST-CI LAB #ZHaliNieZFolderu
            </motion.p>

            <motion.h1
              variants={container}
              initial="hidden"
              animate="show"
              className="mt-8 flex flex-col gap-2"
            >
              {lines.map((text) => (
                <motion.span
                  key={text}
                  variants={line}
                  className="block text-balance font-heading text-4xl font-semibold leading-tight sm:text-5xl md:text-[3.25rem] md:max-w-[16ch]"
                >
                  {text}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 max-w-[52ch] text-pretty text-lg text-muted-foreground"
            >
              Próbujecie kolejnych poprawek. Odbywacie następne spotkania. Problem na chwilę znika - i
              wraca. W POST-CI najpierw sprawdzamy, co naprawdę go podtrzymuje. Dopiero potem wybieramy
              jeden ruch do wykonania i sprawdzenia w ciągu 30 dni.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.62 }}
              className="mt-4 max-w-[52ch] text-pretty text-muted-foreground"
            >
              Trzy zrealizowane edycje. Różne firmy. Różne problemy. Ten sam standard pracy: fakty przed
              opiniami, pytania przed radami, decyzja zamiast listy pomysłów.
              <span className="mt-2 block text-sm">
                Trzecia edycja zrealizowana wspólnie z Dolnośląską Izbą Gospodarczą.
              </span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Button
                render={<Link href="/dla-firm" />}
                nativeButton={false}
                size="lg"
                className="transition-transform hover:-translate-y-0.5"
              >
                Zgłoś problem swojej firmy
              </Button>
              <Button
                render={<Link href="#jak-pracujemy" />}
                nativeButton={false}
                size="lg"
                variant="outline"
                className="transition-transform hover:-translate-y-0.5"
              >
                Zobacz, jak pracujemy
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mt-2 aspect-[3/2] w-full overflow-hidden"
          >
            <Image
              src="/images/hero-zamyslenie.jpg"
              alt="Uczestnik POST-CI LAB patrzy zamyślony na ścianę Master Mapy pokrytą karteczkami"
              fill
              priority
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
