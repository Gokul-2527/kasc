import CardGrid from "../../../../components/common/CardGrid";
import ContentBlock from "../../../../components/common/ContentBlock";
import CTASection from "../../../../components/common/CTASection";
import PageHero from "../../../../components/common/PageHero";

export const metadata = { title: "E-Lectures" };

const subjects = [
  {
    icon: "Cpu",
    title: "Computer Science",
    text: "Programming, data structures and emerging technology lectures.",
  },
  {
    icon: "Landmark",
    title: "Commerce & Accounting",
    text: "Recorded sessions on accounting principles, taxation and finance.",
  },
  {
    icon: "Languages",
    title: "English & Tamil Literature",
    text: "Literature analysis and language skill-building recordings.",
  },
  {
    icon: "Sigma",
    title: "Mathematics",
    text: "Concept walkthroughs across algebra, calculus and statistics.",
  },
];

export default function ELecturesPage() {
  return (
    <>
      <PageHero
        eyebrow="Library"
        title="E-Lectures"
        subtitle="Recorded lectures that let students revisit concepts at their own pace."
        breadcrumbs={[
          { label: "Library", href: "/library" },
          { label: "E-Lectures" },
        ]}
      />
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <ContentBlock
            eyebrow="Digital Learning"
            title="Learning That Doesn't Stop at the Classroom Door"
            paragraphs={[
              "Faculty-recorded e-lectures give students the flexibility to revisit difficult topics, catch up on missed classes, or prepare ahead of examinations.",
            ]}
          />
          <div className="mt-14">
            <CardGrid items={subjects} />
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
