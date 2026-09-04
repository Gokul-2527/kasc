"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Trees, CalendarCheck } from "lucide-react";
import ScrollReveal from "../common/ScrollReveal";

export default function AboutSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.96, 1, 1.02]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-white py-20 sm:py-28"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-2 lg:items-center lg:gap-16">
        <ScrollReveal>
          <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-navy">
            <span className="h-px w-8 bg-gold" />
            About The College
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-semibold leading-[1.1] text-[var(--color-text)]">
            A Good Start...
          </h2>
          <div className="mt-6 flex flex-col gap-4 text-[15px] leading-relaxed text-muted">
            <p>
              Kaamadhenu Arts and Science College is an institution of repute
              located on the outskirts of Sathyamangalam on the
              Erode-Sathyamangalam (Bungalowpudhur) stretch. Blessed with a
              salubrious climate and nestled in the luxuriance of greenery, the
              institution acts as a hive for all the knowledge seekers from
              different parts of the nation.
            </p>
            <p>
              It was an initiation that fructified into buildings in a year and
              was declared open to the world by Thavathiru Santhalinga Ramasamy
              Adigalar on 5th July 2001.
            </p>
            <p>
              The extensive 25-acre location is painted green with majestic
              trees and luscious shrubs. The rustling leaves resonate with the
              sweet music of the mountainous breeze and infuse the much-needed
              energy into young minds.
            </p>
            <p>
              The well-equipped laboratories, bright and ventilated classrooms,
              rich libraries, expansive playground, and a fertile atmosphere
              ignite the spark of learning and elevate students to greater
              heights.
            </p>
          </div>
          <Link
            href="/about"
            className="group mt-8 inline-flex items-center gap-2 rounded-full border border-navy px-6 py-3 text-sm font-semibold text-navy transition hover:bg-navy hover:text-white"
          >
            Read More
            <ArrowRight
              size={15}
              className="transition group-hover:translate-x-1"
            />
          </Link>
        </ScrollReveal>

        <ScrollReveal delay={0.15} className="relative">
          <motion.div
            style={{ y, scale }}
            className="relative overflow-hidden rounded-[30px] shadow-2xl shadow-navy/15"
          >
            <div className="relative aspect-7/5 w-full">
              <Image
                src="/images/img1.jpg"
                alt="Kaamadhenu Arts and Science College campus"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </motion.div>

          <div
            aria-hidden
            className="absolute -top-6 -right-6 -z-10 h-32 w-32 rounded-3xl bg-gold/20 sm:h-40 sm:w-40"
          />

          <div className="absolute -bottom-6 left-4 flex items-center gap-3 rounded-2xl border border-hairline bg-white px-5 py-3.5 shadow-xl shadow-navy/10 sm:left-8">
            <Trees size={18} className="text-navy" />
            <span className="text-xs font-semibold text-[var(--color-text)]">
              25 Acres of Green Campus
            </span>
          </div>

          <div className="absolute -top-5 right-4 flex items-center gap-3 rounded-2xl border border-hairline bg-white px-5 py-3.5 shadow-xl shadow-navy/10 sm:right-8">
            <CalendarCheck size={18} className="text-gold" />
            <span className="text-xs font-semibold text-[var(--color-text)]">
              Established 2001
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
