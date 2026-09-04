import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";
import PageHero from "../../../components/common/PageHero";
import ContentBlock from "../../../components/common/ContentBlock";
import CTASection from "../../../components/common/CTASection";
import { contactInfo, socialLinks } from "../../../data/navigation";

// Map navigation icon keys to react-icons brand components
const iconMap = {
  Facebook: FaFacebookF,
  Instagram: FaInstagram,
  Linkedin: FaLinkedinIn,
  Youtube: FaYoutube,
};

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="Contact Us"
        subtitle="Reach out with questions about admissions, academics or campus life."
        breadcrumbs={[{ label: "Contact" }]}
      />
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="flex flex-col gap-3 rounded-3xl border border-hairline bg-bg-soft p-7">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-navy shadow-sm">
                <FiMapPin size={20} />
              </span>
              <p className="font-display text-lg font-semibold text-[var(--color-text)]">
                Kaamadhenu Arts and Science College
              </p>
              <p className="text-sm leading-relaxed text-muted">
                {contactInfo.address}
              </p>
            </div>
            <a
              href={contactInfo.phoneHref}
              className="flex flex-col gap-3 rounded-3xl border border-hairline bg-bg-soft p-7 transition hover:border-navy"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-navy shadow-sm">
                <FiPhone size={20} />
              </span>
              <p className="font-display text-lg font-semibold text-[var(--color-text)]">
                Call Us
              </p>
              <p className="text-sm leading-relaxed text-muted">
                {contactInfo.phone}
              </p>
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="flex flex-col gap-3 rounded-3xl border border-hairline bg-bg-soft p-7 transition hover:border-navy"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-navy shadow-sm">
                <FiMail size={20} />
              </span>
              <p className="font-display text-lg font-semibold text-[var(--color-text)]">
                Email Us
              </p>
              <p className="text-sm leading-relaxed text-muted">
                {contactInfo.email}
              </p>
            </a>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-start">
            <div className="relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden rounded-[30px] border border-hairline bg-bg-soft">
              <div className="flex flex-col items-center gap-2 text-center text-muted">
                <FiMapPin size={28} className="text-navy" />
                <span className="text-sm font-medium">
                  Erode–Sathyamangalam (Bungalowpudhur) stretch, Tamil Nadu
                </span>
                <span className="text-xs">Map preview</span>
              </div>
            </div>

            <div>
              <ContentBlock
                eyebrow="Office Information"
                title="Admission Office Hours"
                paragraphs={[
                  "Monday – Saturday: 9:00 AM – 4:30 PM",
                  "Our team is happy to assist with programme details, eligibility and the enquiry process.",
                ]}
              />
              <div className="mt-6 flex items-center gap-3">
                {socialLinks.map((s) => {
                  const Icon = iconMap[s.icon] || FaFacebookF;
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-bg-soft text-navy transition hover:bg-navy hover:text-gold"
                    >
                      <Icon size={16} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <CTASection
        eyebrow="Admission Enquiry"
        title="Have More Questions?"
        text="Our admission team is one message away."
      />
    </>
  );
}
