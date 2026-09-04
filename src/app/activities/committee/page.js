import CardGrid from "../../../../components/common/CardGrid";
import ContentBlock from "../../../../components/common/ContentBlock";
import CTASection from "../../../../components/common/CTASection";
import PageHero from "../../../../components/common/PageHero";

export const metadata = { title: "Committee" };

const committees = [
  {
    icon: "CalendarDays",
    title: "Cultural Committee",
    text: "Plans and executes annual day, fests and cultural celebrations.",
  },
  {
    icon: "Trophy",
    title: "Sports Committee",
    text: "Organises tournaments and manages sporting infrastructure and events.",
  },
  {
    icon: "Newspaper",
    title: "Magazine Committee",
    text: "Curates and publishes the college's annual magazine.",
  },
  {
    icon: "Megaphone",
    title: "Discipline Committee",
    text: "Upholds campus discipline and addresses conduct-related matters.",
  },
];

export default function CommitteePage() {
  return (
    <>
      <PageHero
        eyebrow="Activities"
        title="Committee"
        subtitle="Student and faculty committees that keep campus life organised and vibrant."
        breadcrumbs={[
          { label: "Activities", href: "/activities" },
          { label: "Committee" },
        ]}
      />
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <ContentBlock
            eyebrow="Campus Governance"
            title="Committees Behind Every Event"
            paragraphs={[
              "A network of student and faculty committees plans, organises and executes the events, celebrations and initiatives that define campus life at KASC.",
            ]}
          />
          <div className="mt-14">
            <CardGrid items={committees} columns={4} />
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
