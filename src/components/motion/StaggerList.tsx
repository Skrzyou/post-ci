"use client";
import { motion, type Variants } from "motion/react";

const list: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } } };
const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.17, 0.55, 0.55, 1] } },
};

export function StaggerList({ children, className }: { children: React.ReactNode[]; className?: string }) {
  return (
    <motion.ul className={className} variants={list} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
      {children.map((c, i) => (<motion.li key={i} variants={item}>{c}</motion.li>))}
    </motion.ul>
  );
}
