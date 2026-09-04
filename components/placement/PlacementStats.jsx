"use client";

import { motion } from "framer-motion";
import SectionHeading from "../common/SectionHeading";
import { statistics } from "../../data/statistics";
import AnimatedCounter from "../common/AnimatedCounter";

export default function PlacementStats() {
  return (
    <section className="relative overflow-hidden bg-navy-dark py-20 sm:py-28">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent"
      />
      <div
        aria-hidden
        className="absolute -bottom-32 left-1/2 h-96 w-[36rem] -translate-x-1/2 rounded-full bg-navy/40 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Our Impact"
          title="Reason Behind Our Success"
          align="center"
          light
        />

        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-3">
          {statistics.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative flex flex-col items-center gap-3 border-white/10 text-center sm:border-l first:sm:border-l-0"
            >
              <span className="font-display text-5xl font-bold text-white sm:text-6xl">
                <AnimatedCounter value={s.value} suffix="+" />
              </span>
              <span className="h-px w-10 bg-gold" />
              <span className="text-sm font-medium uppercase tracking-[0.15em] text-white/60">
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
