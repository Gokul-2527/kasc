"use client";

import { Phone, Mail } from "lucide-react";
import { contactInfo } from "../../data/navigation";

export default function AnnouncementBar() {
  return (
    <>
      <div className="relative z-[60] flex sm:hidden items-center justify-between gap-3 bg-navy-dark px-4 py-2 bg-amber-300 text-white text-xs">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="pulse-dot absolute inline-flex h-2 w-2 rounded-full bg-gold" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
          </span>
          <span className="font-medium">Admissions Open 2026</span>
        </div>
        <a
          href={contactInfo.phoneHref}
          className="flex shrink-0 items-center gap-1 rounded-full bg-gold px-2.5 py-1 font-semibold text-navy-dark"
        >
          <Phone size={11} /> Call
        </a>
      </div>
      <div className="relative z-[60] hidden sm:block bg-navy-dark text-white">
        <div className="w-full flex  items-center justify-between gap-6 px-6 py-2 text-xs">
          <div className="flex shrink-0 items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="pulse-dot absolute inline-flex h-2 w-2 rounded-full bg-gold" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
            </span>
            <span className="font-medium tracking-wide">
              Admissions Open 2026
            </span>
          </div>

          <div className="flex-1 overflow-hidden">
            <div className="flex animate-marquee-left marquee-track whitespace-nowrap gap-16 text-white/70">
              <span>Admissions Open — Enquire Now</span>
              <span>
                Explore Our Undergraduate &amp; Postgraduate Programmes
              </span>
              <span>Building Careers. Inspiring Futures.</span>
              <span>Admissions Open — Enquire Now</span>
              <span>
                Explore Our Undergraduate &amp; Postgraduate Programmes
              </span>
              <span>Building Careers. Inspiring Futures.</span>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-5">
            <a
              href={contactInfo.phoneHref}
              className="flex items-center gap-1.5 text-white/80 transition hover:text-gold-light"
            >
              <Phone size={12} />
              {contactInfo.phone}
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="flex items-center gap-1.5 text-white/80 transition hover:text-gold-light"
            >
              <Mail size={12} />
              {contactInfo.email}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
