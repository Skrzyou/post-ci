"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

const lines = [
  "Realny problem MŚP trafia na stół.",
  "Kilku ludzi, którzy naprawdę się na tym znają, patrzy na niego z różnych stron.",
  "Wychodzisz z jednym ruchem do sprawdzenia w 30 dni.",
];

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
    <section className="flex min-h-screen flex-col justify-center border-b border-border px-6 py-24">
      <div className="mx-auto w-full max-w-[1100px]">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-sm tracking-normal text-accent"
        >
          POST-CI Lab #ZHaliNieZFolderu
        </motion.p>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mt-8 flex flex-col gap-2"
        >
          {lines.map((text) => (
            <motion.h1
              key={text}
              variants={line}
              className="text-balance font-heading text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl md:max-w-[22ch]"
            >
              {text}
            </motion.h1>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-8 max-w-[60ch] text-pretty text-lg text-muted-foreground"
        >
          Nie kolejna konferencja. Nie event pod logo partnera. Trzy zrealizowane edycje, jeden partner
          instytucjonalny (Dolnośląska Izba Gospodarcza) i zero sprzedaży przy stole.
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
            Zgłoś swój problem
          </Button>
          <Button
            render={<Link href="#sciezki" />}
            nativeButton={false}
            size="lg"
            variant="outline"
            className="transition-transform hover:-translate-y-0.5"
          >
            Zobacz wszystkie ścieżki
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
