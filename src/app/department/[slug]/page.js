import { notFound } from "next/navigation";
import * as Icons from "lucide-react";
import {
  CheckCircle2,
  GraduationCap,
  Users,
  FlaskConical,
  Sparkles,
  Briefcase,
} from "lucide-react";
import { departments, getDepartmentBySlug } from "../../../../data/departments";
import PageHero from "../../../../components/common/PageHero";
import ScrollReveal from "../../../../components/common/ScrollReveal";
import CTASection from "../../../../components/common/CTASection";

export function generateStaticParams() {
  return departments.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const dept = getDepartmentBySlug(slug);
  if (!dept) return {};
  return {
    title: dept.name,
    description: dept.short,
  };
}

export default async function DepartmentPage({ params }) {
  const { slug } = await params;
  const dept = getDepartmentBySlug(slug);
  if (!dept) notFound();

  const Icon = Icons[dept.icon] || Icons.BookOpen;

  return (
    <>
      <PageHero
        eyebrow="Department"
        title={dept.name}
        subtitle={dept.overview}
        breadcrumbs={[
          { label: "Academics", href: "/academics/departments" },
          { label: dept.name },
        ]}
      />

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-3">
          <div className="flex flex-col gap-16 lg:col-span-2">
            <ScrollReveal>
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy/5 text-navy">
                <Icon size={26} />
              </span>
              <h2 className="font-display mt-6 text-2xl sm:text-3xl font-semibold text-[var(--color-text)]">
                Overview
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-muted">
                {dept.overview}
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <ScrollReveal
                delay={0.05}
                className="rounded-3xl border border-hairline bg-bg-soft p-7"
              >
                <h3 className="font-display text-lg font-semibold text-[var(--color-text)]">
                  Vision
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {dept.vision}
                </p>
              </ScrollReveal>
              <ScrollReveal
                delay={0.1}
                className="rounded-3xl border border-hairline bg-bg-soft p-7"
              >
                <h3 className="font-display text-lg font-semibold text-[var(--color-text)]">
                  Mission
                </h3>
                <ul className="mt-3 flex flex-col gap-2.5">
                  {dept.mission.map((m) => (
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

            <ScrollReveal>
              <h3 className="font-display flex items-center gap-2.5 text-2xl font-semibold text-[var(--color-text)]">
                <GraduationCap size={22} className="text-gold" /> Programmes
                Offered
              </h3>
              <div className="mt-5 flex flex-wrap gap-3">
                {dept.programmes.map((p) => (
                  <span
                    key={p}
                    className="rounded-full border border-hairline bg-white px-5 py-2.5 text-sm font-medium text-navy"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <h3 className="font-display flex items-center gap-2.5 text-2xl font-semibold text-[var(--color-text)]">
                <Users size={22} className="text-gold" /> Faculty
              </h3>
              <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {dept.faculty.map((f) => (
                  <div
                    key={f.name}
                    className="rounded-2xl border border-hairline p-5"
                  >
                    <p className="font-display text-base font-semibold text-[var(--color-text)]">
                      {f.name}
                    </p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-gold">
                      {f.role}
                    </p>
                    <p className="mt-1.5 text-sm text-muted">
                      {f.qualification}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <ScrollReveal>
                <h3 className="font-display flex items-center gap-2.5 text-xl font-semibold text-[var(--color-text)]">
                  <FlaskConical size={20} className="text-gold" /> Facilities
                </h3>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {dept.facilities.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2.5 text-sm text-muted"
                    >
                      <CheckCircle2
                        size={15}
                        className="mt-0.5 shrink-0 text-navy"
                      />{" "}
                      {f}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
              <ScrollReveal delay={0.05}>
                <h3 className="font-display flex items-center gap-2.5 text-xl font-semibold text-[var(--color-text)]">
                  <Sparkles size={20} className="text-gold" /> Activities
                </h3>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {dept.activities.map((a) => (
                    <li
                      key={a}
                      className="flex items-start gap-2.5 text-sm text-muted"
                    >
                      <CheckCircle2
                        size={15}
                        className="mt-0.5 shrink-0 text-navy"
                      />{" "}
                      {a}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            </div>
          </div>

          <div className="lg:col-span-1">
            <ScrollReveal className="sticky top-28 flex flex-col gap-6 rounded-3xl border border-hairline bg-navy p-8 text-white">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/15 text-gold">
                <Briefcase size={22} />
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold">
                  Career Opportunities
                </h3>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {dept.careers.map((c) => (
                    <li
                      key={c}
                      className="flex items-start gap-2.5 text-sm text-white/75"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />{" "}
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href="/admission/enquiry"
                className="mt-2 flex items-center justify-center rounded-full bg-gold px-5 py-3 text-sm font-semibold text-navy-dark transition hover:bg-gold-light"
              >
                Enquire About This Programme
              </a>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Join This Department"
        title="Begin Your Academic Journey."
        text={`Take the next step toward a career built on strong fundamentals in ${dept.name.replace(
          /^(PG and Research |Department of )/,
          ""
        )}.`}
      />
    </>
  );
}
