import ScrollReveal from "../../../../components/common/ScrollReveal";
import CTASection from "../../../../components/common/CTASection";
import { CalendarDays } from "lucide-react";
import PageHero from "../../../../components/common/PageHero";

export const metadata = { title: "Academic Calendar" };

const calendar = [
  { period: "June – July", event: "Commencement of odd semester classes" },
  {
    period: "August",
    event: "Independence Day celebrations & induction programmes",
  },
  {
    period: "September – October",
    event: "Internal assessments (odd semester)",
  },
  { period: "November", event: "Odd semester end examinations" },
  {
    period: "December – January",
    event: "Commencement of even semester classes",
  },
  { period: "February – March", event: "Internal assessments (even semester)" },
  {
    period: "April – May",
    event: "Even semester end examinations & summer break",
  },
];

export default function CalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Academics"
        title="Academic Calendar"
        subtitle="Key academic milestones across the year at KASC."
        breadcrumbs={[
          { label: "Academics", href: "/academics" },
          { label: "Academic Calendar" },
        ]}
      />
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <div className="flex flex-col gap-4">
            {calendar.map((c, i) => (
              <ScrollReveal key={c.period} delay={i * 0.05}>
                <div className="flex items-center gap-5 rounded-2xl border border-hairline bg-bg-soft p-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy/5 text-navy">
                    <CalendarDays size={18} />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-gold">
                      {c.period}
                    </p>
                    <p className="mt-1 text-sm font-medium text-[var(--color-text)]">
                      {c.event}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
