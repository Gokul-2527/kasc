"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Sparkles, X } from "lucide-react";

export default function AdmissionFloatingCard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-20 right-6 z-40 sm:bottom-24">
      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.button
            key="badge"
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2.5 rounded-full border border-white/20 bg-navy px-4 py-2.5 text-xs font-semibold text-white shadow-2xl backdrop-blur-md hover:bg-navy-dark sm:px-5 sm:py-3 sm:text-sm"
          >
            <span className="flex h-2.5 w-2.5 rounded-full bg-gold animate-pulse" />
            <span>Admissions Open 2026</span>
            <Sparkles size={16} className="text-gold" />
          </motion.button>
        ) : (
          <motion.div
            key="card"
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-xs sm:max-w-sm"
          >
            <div className="relative flex flex-col gap-4 rounded-3xl border border-hairline bg-white p-5 sm:p-6 shadow-2xl shadow-navy/20">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute right-4 top-4 rounded-full p-1.5 text-muted transition hover:bg-gray-100 hover:text-navy"
                aria-label="Close card"
              >
                <X size={18} />
              </button>

              <div className="flex items-start gap-3.5 pr-6">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gold/15 text-gold">
                  <Sparkles size={20} />
                </span>
                <div className="flex-1">
                  <p className="font-display text-base font-semibold text-[var(--color-text)]">
                    Admissions Open 2026
                  </p>
                  <p className="mt-1 text-xs text-muted sm:text-sm">
                    Begin your journey at Kaamadhenu Arts and Science College.
                  </p>
                </div>
              </div>

              <Link
                href="/admission/enquiry"
                className="group flex items-center justify-center gap-2 rounded-2xl bg-navy px-5 py-3 text-sm font-semibold text-white transition hover:bg-navy-dark"
              >
                Enquire Now
                <ArrowUpRight
                  size={15}
                  className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
