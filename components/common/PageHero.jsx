"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function PageHero({ eyebrow, title, subtitle, breadcrumbs = [] }) {
  return (
    <section className="relative overflow-hidden bg-navy pt-40 pb-20 sm:pt-44 sm:pb-24">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div
        aria-hidden
        className="absolute -top-32 right-[-10%] h-96 w-96 rounded-full bg-gold/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl px-6">
        {breadcrumbs.length > 0 && (
          <div className="mb-6 flex flex-wrap items-center gap-1.5 text-xs font-medium text-white/50">
            <Link href="/" className="hover:text-gold-light transition">
              Home
            </Link>
            {breadcrumbs.map((b, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <ChevronRight size={12} />
                {b.href ? (
                  <Link href={b.href} className="hover:text-gold-light transition">
                    {b.label}
                  </Link>
                ) : (
                  <span className="text-white/80">{b.label}</span>
                )}
              </span>
            ))}
          </div>
        )}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {eyebrow && (
            <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
              <span className="h-px w-8 bg-gold" />
              {eyebrow}
            </span>
          )}
          <h1 className="font-display max-w-3xl text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.05] text-white">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 max-w-2xl text-base sm:text-lg text-white/70">{subtitle}</p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
