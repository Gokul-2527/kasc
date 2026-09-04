import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "../../../components/common/PageHero";
import ContentBlock from "../../../components/common/ContentBlock";
import CardGrid from "../../../components/common/CardGrid";
import CTASection from "../../../components/common/CTASection";

export const metadata = { title: "Admission" };

const whyChoose = [
  {
    icon: "GraduationCap",
    title: "10 Undergraduate & Postgraduate Programmes",
    text: "A wide spread of Arts, Science and Commerce programmes to choose from.",
  },
  {
    icon: "Trees",
    title: "25-Acre Green Campus",
    text: "A spacious, well-maintained campus built for focused learning.",
  },
  {
    icon: "Briefcase",
    title: "Strong Placement Support",
    text: "Dedicated training and recruiter relationships across sectors.",
  },
  {
    icon: "HeartHandshake",
    title: "Personal Mentorship",
    text: "Small-group mentoring that keeps every student on track.",
  },
];

const process = [
  {
    icon: "FileEdit",
    title: "1. Submit Enquiry",
    text: "Share your interest and preferred programme through our enquiry form.",
  },
  {
    icon: "PhoneCall",
    title: "2. Counselling Call",
    text: "Our admission team calls to guide you on programme fit and eligibility.",
  },
  {
    icon: "FileCheck2",
    title: "3. Document Verification",
    text: "Submit required academic and identity documents for verification.",
  },
  {
    icon: "BadgeCheck",
    title: "4. Confirm Admission",
    text: "Complete fee payment and confirm your seat for the academic year.",
  },
];

const documents = [
  "10th & 12th Mark Sheets",
  "Transfer Certificate",
  "Community Certificate",
  "Passport-size Photographs",
  "Aadhaar Card Copy",
  "Migration Certificate (if applicable)",
];

const faqs = [
  {
    q: "When do admissions open for 2026?",
    a: "Admissions for the 2026 academic year are open now. We recommend enquiring early as seats are limited per programme.",
  },
  {
    q: "What programmes does KASC offer?",
    a: "KASC offers 10 undergraduate and postgraduate programmes across Arts, Science, Commerce and Computer Applications.",
  },
  {
    q: "Is hostel accommodation available?",
    a: "Yes, hostel facilities are available for students. Visit the @ KASC section for more details.",
  },
  {
    q: "How do I apply?",
    a: "Fill out the enquiry form on our Admission Enquiry page, and our team will guide you through the rest of the process.",
  },
];

export default function AdmissionPage() {
  return (
    <>
      <PageHero
        eyebrow="Admission 2026"
        title="Start Your Journey at KASC"
        subtitle="Everything you need to know about joining Kaamadhenu Arts and Science College."
        breadcrumbs={[{ label: "Admission" }]}
      />

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <ContentBlock
            eyebrow="Why Choose KASC"
            title="Reasons Students Choose Us"
          />
          <div className="mt-14">
            <CardGrid items={whyChoose} />
          </div>
        </div>
      </section>

      <section className="bg-bg-soft py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <ContentBlock eyebrow="How It Works" title="Admission Process" />
          <div className="mt-14">
            <CardGrid items={process} columns={4} />
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-2">
          <div>
            <ContentBlock
              eyebrow="Eligibility & Documents"
              title="Documents Required"
              paragraphs={[
                "Keep the following documents ready when you visit campus or submit your application.",
              ]}
            />
            <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {documents.map((d) => (
                <li
                  key={d}
                  className="rounded-xl border border-hairline bg-bg-soft px-4 py-3 text-sm text-[var(--color-text)]"
                >
                  {d}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <ContentBlock eyebrow="Admission FAQ" title="Common Questions" />
            <div className="mt-6 flex flex-col gap-4">
              {faqs.map((f) => (
                <div
                  key={f.q}
                  className="rounded-2xl border border-hairline bg-white p-5"
                >
                  <p className="font-display text-base font-semibold text-[var(--color-text)]">
                    {f.q}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {f.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bg-soft py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Link
            href="/admission/enquiry"
            className="group inline-flex items-center gap-2 rounded-full bg-navy px-8 py-4 text-sm font-semibold text-white transition hover:bg-navy-dark"
          >
            Go to Enquiry Form
            <ArrowRight
              size={16}
              className="transition group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>

      <CTASection />
    </>
  );
}
