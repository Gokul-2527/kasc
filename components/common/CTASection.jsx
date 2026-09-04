"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTASection({
  eyebrow = "Admissions 2026",
  title = "Your Future Starts Here.",
  text = "Take the first step toward a meaningful academic and professional journey.",
  primary = { label: "Apply Now", href: "/admission" },
  secondary = { label: "Make an Enquiry", href: "/admission/enquiry" },
}) {
  return (
    <section className="relative overflow-hidden bg-navy py-20 sm:py-28">
      <motion.div
        aria-hidden
        animate={{ x: [0, 40, 0], y: [0, 20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl"
      />
      <motion.div
        aria-hidden
        animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-white/5 blur-3xl"
      />
      <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
          {eyebrow}
        </span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight">
          {title}
        </h2>
        <p className="max-w-xl text-white/70 text-base sm:text-lg">{text}</p>
        <div className="mt-2 flex flex-col sm:flex-row gap-4">
          <Link
            href={primary.href}
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-navy-dark transition hover:bg-gold-light"
          >
            {primary.label}
            <ArrowRight size={16} className="transition group-hover:translate-x-1" />
          </Link>
          <Link
            href={secondary.href}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-8 py-3.5 text-sm font-semibold text-white transition hover:border-gold hover:text-gold-light"
          >
            {secondary.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
