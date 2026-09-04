import ScrollReveal from "../../../../components/common/ScrollReveal";
import CTASection from "../../../../components/common/CTASection";
import { Eye, Target, CheckCircle2 } from "lucide-react";
import PageHero from "../../../../components/common/PageHero";

export const metadata = { title: "Vision & Mission" };

const missionPoints = [
  "Deliver quality, career-oriented education across the arts, sciences and commerce",
  "Build practical, industry-ready skills through modern laboratories and training",
  "Encourage research, critical thinking and lifelong learning",
  "Nurture discipline, values and holistic personal development",
  "Create pathways to meaningful careers through placement and mentorship",
];

export default function VisionMissionPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Vision & Mission"
        subtitle="The purpose and principles that guide every programme and decision at KASC."
        breadcrumbs={[
          { label: "About Us", href: "/about" },
          { label: "Vision & Mission" },
        ]}
      />
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 lg:grid-cols-2">
          <ScrollReveal className="rounded-3xl border border-hairline bg-navy p-9 text-white">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/15 text-gold">
              <Eye size={22} />
            </span>
            <h2 className="font-display mt-6 text-2xl font-semibold">
              Our Vision
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-white/75">
              To be a premier institution of arts, science and commerce
              education that empowers students to meet the challenges of a
              changing world through knowledge, skill and character.
            </p>
          </ScrollReveal>

          <ScrollReveal
            delay={0.1}
            className="rounded-3xl border border-hairline bg-bg-soft p-9"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy/5 text-navy">
              <Target size={22} />
            </span>
            <h2 className="font-display mt-6 text-2xl font-semibold text-[var(--color-text)]">
              Our Mission
            </h2>
            <ul className="mt-4 flex flex-col gap-3">
              {missionPoints.map((m) => (
                <li
                  key={m}
                  className="flex items-start gap-2.5 text-sm leading-relaxed text-muted"
                >
                  <CheckCircle2
                    size={16}
                    className="mt-0.5 shrink-0 text-gold"
                  />
                  {m}
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
