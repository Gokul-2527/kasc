
import { CheckCircle2 } from "lucide-react";
import PageHero from "../../../../components/common/PageHero";
import ContentBlock from "../../../../components/common/ContentBlock";
import ScrollReveal from "../../../../components/common/ScrollReveal";
import CTASection from "../../../../components/common/CTASection";

export const metadata = { title: "IQAC" };

const functions = [
  "Development and application of quality benchmarks for academic and administrative activities",
  "Organising workshops and seminars on quality-related themes",
  "Documentation of institutional quality improvement initiatives",
  "Dissemination of information on quality parameters to stakeholders",
  "Preparation of the Annual Quality Assurance Report (AQAR)",
];

export default function IqacPage() {
  return (
    <>
      <PageHero
        eyebrow="Academics"
        title="Internal Quality Assurance Cell"
        subtitle="Driving continuous academic and administrative quality improvement across KASC."
        breadcrumbs={[{ label: "Academics", href: "/academics" }, { label: "IQAC" }]}
      />
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <ContentBlock
            eyebrow="About IQAC"
            title="Sustaining Quality Culture"
            paragraphs={[
              "The Internal Quality Assurance Cell (IQAC) works to build and channelise institutional efforts toward academic excellence, planning, implementation and continuous improvement of quality.",
            ]}
          />
          <ScrollReveal className="mt-10 rounded-3xl border border-hairline bg-bg-soft p-8">
            <h3 className="font-display text-lg font-semibold text-[var(--color-text)]">Key Functions</h3>
            <ul className="mt-4 flex flex-col gap-3">
              {functions.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-gold" /> {f}
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </section>
      <CTASection />
    </>
  );
}
