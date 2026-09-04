import { Phone, Mail, Clock } from "lucide-react";
import PageHero from "../../../../components/common/PageHero";
import ContentBlock from "../../../../components/common/ContentBlock";
import CTASection from "../../../../components/common/CTASection";
import { contactInfo } from "../../../../data/navigation";

export const metadata = { title: "Student Help Desk" };

export default function HelpDeskPage() {
  return (
    <>
      <PageHero
        eyebrow="Students Support"
        title="Student Help Desk"
        subtitle="A single point of contact for admissions, academics and everyday campus queries."
        breadcrumbs={[
          { label: "Students Support", href: "/student-support" },
          { label: "Help Desk" },
        ]}
      />
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 lg:grid-cols-2">
          <ContentBlock
            eyebrow="Here to Help"
            title="Quick Answers, No Runaround"
            paragraphs={[
              "The Student Help Desk assists with everything from ID card issues and certificate requests to general guidance on college procedures.",
              "Students can walk in, call or email — the team aims to resolve most queries the same day.",
            ]}
          />
          <div className="flex flex-col gap-4">
            <a
              href={contactInfo.phoneHref}
              className="flex items-center gap-3 rounded-2xl border border-hairline bg-bg-soft px-5 py-4 text-sm font-medium text-[var(--color-text)] transition hover:border-navy"
            >
              <Phone size={18} className="text-navy" /> {contactInfo.phone}
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="flex items-center gap-3 rounded-2xl border border-hairline bg-bg-soft px-5 py-4 text-sm font-medium text-[var(--color-text)] transition hover:border-navy"
            >
              <Mail size={18} className="text-navy" /> {contactInfo.email}
            </a>
            <div className="flex items-center gap-3 rounded-2xl border border-hairline bg-bg-soft px-5 py-4 text-sm font-medium text-[var(--color-text)]">
              <Clock size={18} className="text-navy" /> Monday – Saturday, 9:00
              AM – 4:30 PM
            </div>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
