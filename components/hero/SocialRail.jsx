"use client";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";
import { socialLinks } from "../../data/navigation";

// Map navigation icon names to exact FontAwesome social icons
const iconMap = {
  Facebook: FaFacebookF,
  Instagram: FaInstagram,
  Linkedin: FaLinkedinIn,
  Youtube: FaYoutube,
};

export default function SocialRail() {
  return (
    <>
      {/* Desktop vertical rail */}
      <div className="absolute right-6 top-1/2 z-20 hidden -translate-y-1/2 lg:flex">
        <div className="flex flex-col items-center gap-1 rounded-full border border-white/20 bg-white/10 p-2 backdrop-blur-md">
          {socialLinks.map((s) => {
            const Icon = iconMap[s.icon] || FaFacebookF;
            return (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="group relative flex h-10 w-10 items-center justify-center rounded-full text-white transition hover:bg-gold hover:text-navy-dark"
              >
                <Icon size={16} />
                <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-md bg-navy-dark px-2.5 py-1 text-xs text-white opacity-0 shadow-lg transition group-hover:opacity-100">
                  {s.label}
                </span>
              </a>
            );
          })}
          <span className="mt-1 h-8 w-px bg-white/20" />
        </div>
      </div>

      {/* Mobile horizontal row */}
      <div className="relative z-20 mt-6 flex items-center gap-3 lg:hidden">
        {socialLinks.map((s) => {
          const Icon = iconMap[s.icon] || FaFacebookF;
          return (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-md transition hover:bg-gold hover:text-navy-dark"
            >
              <Icon size={15} />
            </a>
          );
        })}
      </div>
    </>
  );
}
