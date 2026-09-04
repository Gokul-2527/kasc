import ContentBlock from "../../../../components/common/ContentBlock";
import CTASection from "../../../../components/common/CTASection";
import PageHero from "../../../../components/common/PageHero";

export const metadata = { title: "Administration" };

const leadership = [
  {
    name: "Correspondent",
    role: "Overall institutional leadership and strategic direction",
  },
  {
    name: "Secretary",
    role: "Administrative governance and policy implementation",
  },
  {
    name: "Principal",
    role: "Academic leadership and day-to-day institutional management",
  },
  { name: "Vice Principal", role: "Academic coordination across departments" },
];

export default function AdministrationPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Administration"
        subtitle="The leadership team steering KASC's academic vision and institutional governance."
        breadcrumbs={[
          { label: "About Us", href: "/about" },
          { label: "Administration" },
        ]}
      />
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <ContentBlock
            eyebrow="Leadership"
            title="Guiding KASC Forward"
            paragraphs={[
              "The administration at Kaamadhenu Arts and Science College brings together academic and management leadership committed to maintaining high standards of teaching, discipline and student welfare.",
              "Together, the administrative team ensures that every decision — from curriculum planning to campus development — is aligned with the institution's founding mission of empowering students.",
            ]}
          />
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {leadership.map((l) => (
              <div
                key={l.name}
                className="rounded-2xl border border-hairline bg-bg-soft p-6"
              >
                <p className="font-display text-lg font-semibold text-[var(--color-text)]">
                  {l.name}
                </p>
                <p className="mt-1.5 text-sm text-muted">{l.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
