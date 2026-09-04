"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function EventCard({ event }) {
  return (
    <div className="group flex w-[300px] shrink-0 snap-start flex-col overflow-hidden rounded-3xl border border-hairline bg-white shadow-sm transition hover:shadow-xl hover:shadow-navy/10 sm:w-[360px]">
      <div className="relative h-44 w-full overflow-hidden">
        <Image
          src={event.image}
          alt={event.title}
          fill
          sizes="360px"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold text-navy">
          {event.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-6">
        <span className="text-xs font-semibold uppercase tracking-wide text-gold">{event.date}</span>
        <h3 className="font-display text-base font-semibold leading-snug text-[var(--color-text)]">
          {event.title}
        </h3>
        <p className="flex-1 text-sm leading-relaxed text-muted">{event.description}</p>
        <span className="mt-2 inline-flex w-fit items-center gap-1.5 text-xs font-semibold text-navy">
          Learn more <ArrowUpRight size={14} />
        </span>
      </div>
    </div>
  );
}
