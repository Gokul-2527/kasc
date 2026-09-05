"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronDown, Phone, Mail } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";
import { navigation, contactInfo, socialLinks } from "../../data/navigation";

// Map icon names from navigation data to React Icons components
const iconMap = {
  Facebook: FaFacebookF,
  Instagram: FaInstagram,
  Linkedin: FaLinkedinIn,
  Youtube: FaYoutube,
};

export default function MobileMenu({ open, onClose }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[70] bg-navy-dark/60 backdrop-blur-sm xl:hidden"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed right-0 top-0 z-[80] flex h-full w-[88%] max-w-sm flex-col bg-white xl:hidden"
          >
            <div className="flex items-center justify-between border-b border-hairline px-5 py-4">
              <span className="font-display text-base font-semibold text-navy">
                Menu
              </span>
              <button
                onClick={onClose}
                aria-label="Close menu"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-hairline text-navy"
              >
                <X size={18} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-4">
              <ul className="flex flex-col divide-y divide-hairline">
                {navigation.map((item, i) => (
                  <li key={item.label} className="py-1.5">
                    <div className="flex items-center justify-between">
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className="py-2.5 text-[15px] font-medium text-[var(--color-text)]"
                      >
                        {item.label}
                      </Link>
                      {item.columns && (
                        <button
                          onClick={() =>
                            setOpenIndex(openIndex === i ? null : i)
                          }
                          aria-label={`Toggle ${item.label} submenu`}
                          className="flex h-9 w-9 items-center justify-center text-navy"
                        >
                          <ChevronDown
                            size={16}
                            className={`transition-transform ${
                              openIndex === i ? "rotate-180 text-gold" : ""
                            }`}
                          />
                        </button>
                      )}
                    </div>
                    <AnimatePresence>
                      {item.columns && openIndex === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <div className="flex flex-col gap-4 pb-3 pl-3">
                            {item.columns.map((col) => (
                              <div key={col.heading}>
                                <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-gold">
                                  {col.heading}
                                </p>
                                <ul className="flex flex-col gap-2">
                                  {col.links.map((l) => (
                                    <li key={l.href}>
                                      <Link
                                        href={l.href}
                                        onClick={onClose}
                                        className="text-sm text-muted transition hover:text-navy"
                                      >
                                        {l.label}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-hairline px-5 py-5">
              <Link
                href="/admission"
                onClick={onClose}
                className="mb-4 flex w-full items-center justify-center rounded-full bg-gold px-5 py-3 text-sm font-semibold text-navy-dark"
              >
                Apply Now
              </Link>
              <div className="flex flex-col gap-2 text-sm text-muted">
                <a
                  href={contactInfo.phoneHref}
                  className="flex items-center gap-2"
                >
                  <Phone size={14} className="text-navy" /> {contactInfo.phone}
                </a>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-2"
                >
                  <Mail size={14} className="text-navy" /> {contactInfo.email}
                </a>
              </div>
              <div className="mt-4 flex items-center gap-3">
                {socialLinks.map((s) => {
                  const Icon = iconMap[s.icon];
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-bg-soft text-navy transition hover:bg-gold hover:text-navy-dark"
                    >
                      {Icon && <Icon size={14} />}
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
