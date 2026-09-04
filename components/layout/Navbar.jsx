"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight, Menu } from "lucide-react";
import MobileMenu from "./MobileMenu";
import { navigation } from "../../data/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-[0_4px_24px_rgba(20,40,131,0.08)]"
            : "bg-white/70 backdrop-blur-sm"
        }`}
      >
        <nav
          className={`w-full flex flex-row items-center justify-between px-6 transition-all duration-300 ${
            scrolled ? "py-2.5" : "py-3 sm:py-4"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/images/Clg_Logo2.png"
              alt="Kaamadhenu Arts and Science College"
              width={180}
              height={65}
              priority
              className={`w-auto object-contain transition-all duration-300 ${
                scrolled ? "h-12 sm:h-14" : "h-14 sm:h-16"
              }`}
            />
          </Link>

          {/* Desktop Navigation */}
          <div
            className="hidden items-center gap-1 xl:flex"
            onMouseLeave={() => setOpenIndex(null)}
          >
            {navigation.map((item, i) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenIndex(item.columns ? i : null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 rounded-full px-3.5 py-2 text-[13px] font-medium text-[var(--color-text)] transition hover:bg-bg-soft hover:text-navy"
                >
                  {item.label}

                  {item.columns && (
                    <ChevronDown
                      size={13}
                      className={`transition-transform duration-200 ${
                        openIndex === i ? "rotate-180 text-gold" : ""
                      }`}
                    />
                  )}
                </Link>

                {/* Dropdown Wrapper with Top Padding Bridge */}
                <AnimatePresence>
                  {item.columns && openIndex === i && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{
                        duration: 0.18,
                        ease: "easeOut",
                      }}
                      onMouseEnter={() => setOpenIndex(i)}
                      className="absolute left-1/2 top-full z-50 pt-2 w-[min(90vw,640px)] -translate-x-1/2 pointer-events-auto"
                    >
                      <div className="rounded-2xl border border-hairline bg-white p-6 shadow-2xl shadow-navy/10">
                        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
                          {item.columns.map((col) => (
                            <div key={col.heading}>
                              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.15em] text-gold">
                                {col.heading}
                              </p>

                              <ul className="flex flex-col gap-2.5">
                                {col.links.map((l) => (
                                  <li key={l.href}>
                                    <Link
                                      href={l.href}
                                      onClick={() => setOpenIndex(null)}
                                      className="group flex items-center justify-between text-[13px] text-[var(--color-text)] transition hover:text-navy hover:underline decoration-gold underline-offset-4"
                                    >
                                      <span>{l.label}</span>
                                      <ChevronRight
                                        size={13}
                                        className="shrink-0 text-gold opacity-60 transition-all duration-200 ease-in-out group-hover:translate-x-0.5 group-hover:scale-125 group-hover:opacity-100"
                                      />
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Link
              href="/admission"
              className="hidden sm:inline-flex items-center justify-center rounded-full bg-gold px-5 py-2.5 text-[13px] font-semibold text-navy-dark shadow-sm shadow-gold/30 transition hover:bg-gold-light"
            >
              Apply Now
            </Link>

            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-hairline text-navy transition hover:bg-bg-soft xl:hidden"
            >
              <Menu size={20} />
            </button>
          </div>
        </nav>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
