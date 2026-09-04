"use client";

import ScrollReveal from "./ScrollReveal";

export default function ContentBlock({ title, paragraphs = [], eyebrow }) {
  return (
    <ScrollReveal className="max-w-3xl">
      {eyebrow && (
        <span className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-navy">
          <span className="h-px w-8 bg-gold" />
          {eyebrow}
        </span>
      )}
      {title && (
        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[var(--color-text)]">
          {title}
        </h2>
      )}
      <div className="mt-4 flex flex-col gap-4">
        {paragraphs.map((p, i) => (
          <p key={i} className="text-[15px] leading-relaxed text-muted">
            {p}
          </p>
        ))}
      </div>
    </ScrollReveal>
  );
}
