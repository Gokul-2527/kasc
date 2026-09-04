"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { ArrowRight } from "lucide-react";

export default function DepartmentCard({ department, index = 0 }) {
  const Icon = Icons[department.icon] || Icons.BookOpen;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        href={`/department/${department.slug}`}
        className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-hairline bg-white p-7 transition hover:-translate-y-1.5 hover:shadow-xl hover:shadow-navy/10"
      >
        <span className="absolute left-0 top-0 h-full w-1 origin-top scale-y-0 bg-gold transition-transform duration-500 group-hover:scale-y-100" />
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-bg-soft text-navy transition duration-300 group-hover:-rotate-6 group-hover:bg-navy group-hover:text-gold">
          <Icon size={22} />
        </span>
        <h3 className="font-display mt-5 text-lg font-semibold leading-snug text-[var(--color-text)]">
          {department.name}
        </h3>
        <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted">{department.short}</p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-navy">
          Explore
          <ArrowRight size={14} className="transition group-hover:translate-x-1" />
        </span>
      </Link>
    </motion.div>
  );
}
