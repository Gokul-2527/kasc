"use client";

import Link from "next/link";
import { GraduationCap, Phone, Mail, MapPin } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";
import { footerLinks, contactInfo, socialLinks } from "../../data/navigation";
import Image from "next/image";

// Map navigation icon keys to react-icons brand components
const iconMap = {
  Facebook: FaFacebookF,
  Instagram: FaInstagram,
  Linkedin: FaLinkedinIn,
  Youtube: FaYoutube,
};

function FooterColumn({ title, links }) {
  return (
    <div>
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
        {title}
      </p>
      <ul className="flex flex-col gap-2.5">
        {links.map((l) => (
          <li key={l.label}>
            <Link
              href={l.href}
              className="text-sm text-white/70 transition hover:text-white"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="w-full px-6 pt-16 pb-10">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-full p-0.5 bg-white text-navy-dark">
                <Image
                  src="/images/Kaamadhenu-logo.jpeg"
                  alt="Kaamadhenu Logo"
                  width={130}
                  height={130}
                  className="object-cover rounded-full"
                />
              </span>
              <span className="font-display text-sm font-semibold">KASC</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              An institution of repute in Sathyamangalam, nurturing knowledge
              seekers since 2001.
            </p>
            <div className="mt-5 flex items-center gap-2.5">
              {socialLinks.map((s) => {
                const Icon = iconMap[s.icon] || FaFacebookF;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition hover:bg-gold hover:text-navy-dark"
                  >
                    <Icon size={14} />
                  </a>
                );
              })}
            </div>
          </div>

          <FooterColumn title="About" links={footerLinks.about} />
          <FooterColumn title="Academics" links={footerLinks.academics} />
          <FooterColumn title="Quick Links" links={footerLinks.quickLinks} />
          <FooterColumn title="Useful Links" links={footerLinks.usefulLinks} />
          <FooterColumn title="Web Links" links={footerLinks.webLinks} />
        </div>

        <div className="mt-12 grid gap-4 border-t border-white/10 pt-8 sm:grid-cols-3">
          <div className="flex items-start gap-3 text-sm text-white/70">
            <MapPin size={16} className="mt-0.5 shrink-0 text-gold" />
            {contactInfo.address}
          </div>
          <a
            href={contactInfo.phoneHref}
            className="flex items-center gap-3 text-sm text-white/70 hover:text-white"
          >
            <Phone size={16} className="shrink-0 text-gold" />
            {contactInfo.phone}
          </a>
          <a
            href={`mailto:${contactInfo.email}`}
            className="flex items-center gap-3 text-sm text-white/70 hover:text-white"
          >
            <Mail size={16} className="shrink-0 text-gold" />
            {contactInfo.email}
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 py-5">
        <p className="text-center text-xs text-white/50">
          © 2025 CampusStack. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
