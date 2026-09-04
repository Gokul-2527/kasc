import CardGrid from "../../../../components/common/CardGrid";
import CTASection from "../../../../components/common/CTASection";
import PageHero from "../../../../components/common/PageHero";

export const metadata = { title: "Committee" };

const committees = [
  {
    icon: "ShieldCheck",
    title: "Internal Complaints Committee (ICC)",
    text: "Addresses grievances relating to harassment and ensures a safe campus environment.",
  },
  {
    icon: "ScrollText",
    title: "Anti-Ragging Committee",
    text: "Enforces a strict zero-tolerance policy against ragging in any form.",
  },
  {
    icon: "Gavel",
    title: "Grievance Redressal Committee",
    text: "Provides a fair and confidential channel for students to raise concerns.",
  },
  {
    icon: "BadgeCheck",
    title: "IQAC",
    text: "Drives continuous academic quality improvement across departments.",
  },
  {
    icon: "ClipboardCheck",
    title: "Examination Committee",
    text: "Oversees the conduct and integrity of internal and external examinations.",
  },
  {
    icon: "HeartHandshake",
    title: "Student Welfare Committee",
    text: "Coordinates support services and student wellbeing initiatives.",
  },
];

export default function CommitteePage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Committees"
        subtitle="Statutory and academic committees that support fair, transparent governance at KASC."
        breadcrumbs={[
          { label: "About Us", href: "/about" },
          { label: "Committee" },
        ]}
      />
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <CardGrid items={committees} />
        </div>
      </section>
      <CTASection />
    </>
  );
}
