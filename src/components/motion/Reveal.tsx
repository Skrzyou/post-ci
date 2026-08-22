"use client";
import { motion } from "motion/react";

type Props = { children: React.ReactNode; delay?: number; className?: string };

export function Reveal({ children, delay = 0, className }: Props) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.17, 0.55, 0.55, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
