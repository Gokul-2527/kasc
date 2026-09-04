import CTASection from "../../../../components/common/CTASection";
import PageHero from "../../../../components/common/PageHero";
import ScrollReveal from "../../../../components/common/ScrollReveal";
import { departments } from "../../../../data/departments";

export const metadata = { title: "Programme Offered" };

export default function ProgrammesPage() {
  return (
    <>
      <PageHero
        eyebrow="Academics"
        title="Programme Offered"
        subtitle="Undergraduate, postgraduate and research programmes across arts, science and commerce."
        breadcrumbs={[
          { label: "Academics", href: "/academics" },
          { label: "Programme Offered" },
        ]}
      />
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <div className="flex flex-col divide-y divide-hairline overflow-hidden rounded-3xl border border-hairline">
            {departments.map((d, i) => (
              <ScrollReveal key={d.slug} delay={(i % 6) * 0.05}>
                <div className="flex flex-col gap-3 p-6 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="font-display text-base font-semibold text-[var(--color-text)]">
                      {d.name}
                    </p>
                    <p className="mt-1 text-sm text-muted">
                      {d.programmes.join(" · ")}
                    </p>
                  </div>
                  <a
                    href={`/department/${d.slug}`}
                    className="shrink-0 text-xs font-semibold uppercase tracking-wide text-navy hover:text-gold"
                  >
                    View Department →
                  </a>
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
