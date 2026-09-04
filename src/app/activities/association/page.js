import CardGrid from "../../../../components/common/CardGrid";
import ContentBlock from "../../../../components/common/ContentBlock";
import CTASection from "../../../../components/common/CTASection";
import PageHero from "../../../../components/common/PageHero";

export const metadata = { title: "Association" };

const associations = [
  {
    icon: "Sigma",
    title: "Mathematics Association",
    text: "Quizzes, puzzles and guest sessions on applied mathematics.",
  },
  {
    icon: "Cpu",
    title: "Computer Science Association",
    text: "Tech talks, hackathons and coding competitions.",
  },
  {
    icon: "Landmark",
    title: "Commerce Association",
    text: "Budget analysis, industry visits and finance-focused events.",
  },
  {
    icon: "Languages",
    title: "English Literary Association",
    text: "Debates, elocution and creative writing initiatives.",
  },
  {
    icon: "BookOpen",
    title: "Tamil Literary Association",
    text: "Poetry, literature discussions and cultural celebrations.",
  },
  {
    icon: "Briefcase",
    title: "Management Association",
    text: "Business plan events and leadership development sessions.",
  },
];

export default function AssociationPage() {
  return (
    <>
      <PageHero
        eyebrow="Activities"
        title="Association"
        subtitle="Department-led associations that bring academic communities together."
        breadcrumbs={[
          { label: "Activities", href: "/activities" },
          { label: "Association" },
        ]}
      />
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <ContentBlock
            eyebrow="Departmental Life"
            title="Where Every Department Comes Alive"
            paragraphs={[
              "Each department at KASC runs its own student association, organising subject-focused events, competitions and guest sessions throughout the academic year.",
            ]}
          />
          <div className="mt-14">
            <CardGrid items={associations} />
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
