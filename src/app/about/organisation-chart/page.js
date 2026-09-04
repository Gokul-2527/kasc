import CTASection from "../../../../components/common/CTASection";
import PageHero from "../../../../components/common/PageHero";
import ScrollReveal from "../../../../components/common/ScrollReveal";

export const metadata = { title: "Organisation Chart" };

const tiers = [
  { level: "Governing Body", roles: ["Correspondent", "Secretary"] },
  { level: "Academic Leadership", roles: ["Principal", "Vice Principal"] },
  {
    level: "Department Heads",
    roles: ["Heads of Department across all disciplines"],
  },
  {
    level: "Faculty & Staff",
    roles: ["Teaching Faculty", "Administrative Staff", "Support Staff"],
  },
];

export default function OrganisationChartPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Organisation Chart"
        subtitle="How academic and administrative responsibilities are structured at KASC."
        breadcrumbs={[
          { label: "About Us", href: "/about" },
          { label: "Organisation Chart" },
        ]}
      />
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-6">
          {tiers.map((tier, i) => (
            <ScrollReveal key={tier.level} delay={i * 0.08} className="w-full">
              <div className="rounded-3xl border border-hairline bg-bg-soft p-6 text-center">
                <p className="font-display text-lg font-semibold text-[var(--color-text)]">
                  {tier.level}
                </p>
                <p className="mt-2 text-sm text-muted">
                  {tier.roles.join(" · ")}
                </p>
              </div>
              {i !== tiers.length - 1 && (
                <div className="mx-auto my-3 h-8 w-px bg-gold" />
              )}
            </ScrollReveal>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
