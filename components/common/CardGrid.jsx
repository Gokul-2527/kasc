"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { ArrowRight } from "lucide-react";

export default function CardGrid({ items, columns = 3 }) {
  const colClass =
    columns === 2
      ? "sm:grid-cols-2"
      : columns === 4
      ? "sm:grid-cols-2 lg:grid-cols-4"
      : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <div className={`grid grid-cols-1 gap-6 ${colClass}`}>
      {items.map((item, i) => {
        const Icon = Icons[item.icon] || Icons.Sparkles;
        const Wrapper = item.href ? Link : "div";
        const wrapperProps = item.href ? { href: item.href } : {};

        return (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: (i % 6) * 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <Wrapper
              {...wrapperProps}
              className="group flex h-full flex-col rounded-3xl border border-hairline bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/10"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-bg-soft text-navy transition group-hover:bg-navy group-hover:text-gold">
                <Icon size={22} />
              </span>
              <h3 className="font-display mt-5 text-lg font-semibold leading-snug text-[var(--color-text)]">
                {item.title}
              </h3>
              {item.text && (
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted">{item.text}</p>
              )}
              {item.href && (
                <span className="mt-5 inline-flex w-fit items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-navy">
                  Learn more
                  <ArrowRight size={14} className="transition group-hover:translate-x-1" />
                </span>
              )}
            </Wrapper>
          </motion.div>
        );
      })}
    </div>
  );
}
