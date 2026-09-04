"use client";

import { motion } from "framer-motion";
import { Newspaper } from "lucide-react";
import { pressMentions } from "../../data/recruiters";
import SectionHeading from "../common/SectionHeading";

export default function PressSection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="Media" title="In The News" align="center" />

        <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {pressMentions.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col items-center gap-3 rounded-2xl border border-hairline bg-bg-soft px-5 py-8 text-center transition hover:border-gold"
            >
              <Newspaper size={22} className="text-navy" />
              <span className="font-display text-base font-semibold text-[var(--color-text)]">
                {p.name}
              </span>
              <span className="text-[11px] uppercase tracking-wide text-muted">
                {p.type}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
