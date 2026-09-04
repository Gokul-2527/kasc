"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import SocialRail from "./SocialRail";
import AdmissionFloatingCard from "./AdmissionFloatingCard";

export default function HeroSection() {
  return (
    // 1. Removed overflow-hidden from section
    <section className="relative isolate flex min-h-[88vh] w-full flex-col justify-end bg-navy-dark sm:min-h-[92vh]">
      {/* 2. Added overflow-hidden specifically to the video wrapper */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1920&auto=format&fit=crop"
        >
          <source
            src="https://kascsathy.ac.in/assets/hero_kasc_3.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/60 to-navy-dark/30" />
        <div className="absolute inset-0 bg-navy-dark/25" />
      </div>

      {/* CONTENT */}
      <div className="relative z-20 mx-auto flex w-full max-w-7xl flex-col px-6 pb-24 pt-40 sm:pb-28">
        {/* College Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-5 w-fit rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-light backdrop-blur-md"
        >
          Kaamadhenu Arts and Science College
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="font-display relative z-20 max-w-3xl text-[2.6rem] font-semibold leading-[1.05] text-white sm:text-6xl md:text-7xl"
        >
          Empowering Minds.
          <br />
          Shaping Futures.
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-20 mt-6 max-w-xl text-base text-white/75 sm:text-lg"
        >
          An institution committed to nurturing knowledge seekers, developing
          talent and empowering students to meet the challenges of a changing
          world.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-20 mt-9 flex flex-wrap items-center gap-4"
        >
          <Link
            href="/about"
            className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-navy-dark transition hover:bg-gold-light"
          >
            Explore KASC
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>

          <Link
            href="/admission"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-gold hover:text-gold-light"
          >
            Admissions 2026
          </Link>
        </motion.div>
      </div>

      {/* Social Media */}
      <SocialRail />

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-24 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-1 text-white/60 sm:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <ChevronDown size={16} />
      </motion.div>

      {/* Admission Card placed above other sections */}
      <div className="relative z-30">
        <AdmissionFloatingCard />
      </div>
    </section>
  );
}
