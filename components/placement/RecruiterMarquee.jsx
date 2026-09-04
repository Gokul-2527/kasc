"use client";

import Image from "next/image";
import { recruiters } from "../../data/recruiters";
import SectionHeading from "../common/SectionHeading";

function MarqueeRow({ items, direction = "left" }) {
  const doubled = [...items, ...items];

  return (
    <div className="group flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
      <div
        className={`flex w-max shrink-0 items-center gap-6 py-4 ${
          direction === "left"
            ? "animate-marquee-left group-hover:[animation-play-state:paused]"
            : "animate-marquee-right group-hover:[animation-play-state:paused]"
        }`}
      >
        {doubled.map((item, i) => (
          <div
            key={`${item.name}-${i}`}
            className="group/card relative flex h-24 w-48 shrink-0 items-center justify-center rounded-2xl border border-slate-200/60 bg-white/90 p-5 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-500/10"
          >
            <div className="relative flex h-full w-full items-center justify-center">
              <Image
                src={`/images/Recruiters/${item.logo}`}
                alt={`${item.name} logo`}
                fill
                sizes="192px"
                className="object-contain filter grayscale contrast-125 opacity-70 transition-all duration-300 group-hover/card:grayscale-0 group-hover/card:opacity-100 group-hover/card:scale-105"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function RecruiterMarquee() {
  const half = Math.ceil(recruiters.length / 2);
  const rowOne = recruiters.slice(0, half);
  const rowTwo = recruiters.slice(half);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Placement"
          title="Our Recruiters"
          subtitle="Building pathways from classroom learning to professional careers."
          align="center"
        />
      </div>

      <div className="mt-14 flex flex-col gap-4">
        <MarqueeRow items={rowOne} direction="left" />
        <MarqueeRow items={rowTwo} direction="right" />
      </div>
    </section>
  );
}
