"use client";

import { motion } from "framer-motion";
import { FlaskConical, Briefcase, Trophy } from "lucide-react";
import SectionHeading from "../common/SectionHeading";

const cards = [
  {
    icon: FlaskConical,
    title: "Modern Labs and Skill Development",
    text:
      "Offering programs and learning opportunities designed to build practical knowledge, technical confidence and industry-ready skills.",
  },
  {
    icon: Briefcase,
    title: "Placement",
    text:
      "Focused on career development, professional readiness and opportunities across finance, management, technology and entrepreneurship.",
  },
  {
    icon: Trophy,
    title: "Extracurricular Activities",
    text:
      "Students discover opportunities beyond classrooms through clubs, associations, sports, cultural activities and leadership experiences.",
  },
];

export default function WhySection() {
  return (
    <section className="bg-bg-soft py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Why KASC"
          title="Why Kaamadhenu?"
          subtitle="An environment designed to transform curiosity into capability."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative overflow-hidden rounded-3xl border border-hairline bg-white p-8 shadow-sm transition hover:-translate-y-1.5 hover:shadow-xl hover:shadow-navy/10"
            >
              <span className="absolute left-0 top-0 h-1 w-0 bg-gold transition-all duration-500 group-hover:w-full" />
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy/5 text-navy transition group-hover:bg-navy group-hover:text-gold">
                <c.icon size={26} />
              </span>
              <h3 className="font-display mt-6 text-xl font-semibold text-[var(--color-text)]">
                {c.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {c.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
