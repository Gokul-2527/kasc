import ContentBlock from "../../../../components/common/ContentBlock";
import CardGrid from "../../../../components/common/CardGrid";
import CTASection from "../../../../components/common/CTASection";
import PageHero from "../../../../components/common/PageHero";

export const metadata = { title: "Code Of Conduct" };

const conduct = [
  {
    icon: "Users",
    title: "Respect & Discipline",
    text: "Courteous, respectful behaviour toward peers, faculty and staff at all times.",
  },
  {
    icon: "BookOpen",
    title: "Academic Integrity",
    text: "Zero tolerance for plagiarism, malpractice or academic dishonesty.",
  },
  {
    icon: "ShieldAlert",
    title: "Anti-Ragging Policy",
    text: "A strict, actively enforced anti-ragging and anti-harassment policy.",
  },
  {
    icon: "Clock",
    title: "Punctuality & Attendance",
    text: "Consistent attendance and punctuality expected in classes and activities.",
  },
];

export default function CodeOfConductPage() {
  return (
    <>
      <PageHero
        eyebrow="Academics"
        title="Code Of Conduct"
        subtitle="The values and expectations that guide every member of the KASC community."
        breadcrumbs={[
          { label: "Academics", href: "/academics" },
          { label: "Code Of Conduct" },
        ]}
      />
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <ContentBlock
            eyebrow="Institutional Values"
            title="Building a Disciplined, Respectful Campus"
            paragraphs={[
              "KASC upholds a code of conduct that promotes discipline, mutual respect and academic honesty across the campus community.",
              "Students, faculty and staff are expected to conduct themselves with integrity, contributing to a safe and productive learning environment.",
            ]}
          />
          <div className="mt-14">
            <CardGrid items={conduct} />
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
