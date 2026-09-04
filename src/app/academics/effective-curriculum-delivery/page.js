import CardGrid from "../../../../components/common/CardGrid";
import ContentBlock from "../../../../components/common/ContentBlock";
import CTASection from "../../../../components/common/CTASection";
import PageHero from "../../../../components/common/PageHero";

export const metadata = { title: "Effective Curriculum Delivery" };

const delivery = [
  {
    icon: "CalendarDays",
    title: "Structured Academic Planning",
    text: "Detailed lesson plans and academic calendars shared at the start of each term.",
  },
  {
    icon: "Video",
    title: "Blended Learning",
    text: "A mix of classroom instruction, e-content and recorded lectures.",
  },
  {
    icon: "MessageSquare",
    title: "Continuous Feedback",
    text: "Regular feedback loops between students and faculty to refine delivery.",
  },
  {
    icon: "Target",
    title: "Outcome-Based Education",
    text: "Curriculum mapped to clear learning outcomes for every course.",
  },
];

export default function EffectiveCurriculumDeliveryPage() {
  return (
    <>
      <PageHero
        eyebrow="Academics"
        title="Effective Curriculum Delivery"
        subtitle="How KASC ensures every syllabus translates into real, applicable learning."
        breadcrumbs={[
          { label: "Academics", href: "/academics" },
          { label: "Effective Curriculum Delivery" },
        ]}
      />
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <ContentBlock
            eyebrow="Delivery Framework"
            title="From Syllabus to Skill"
            paragraphs={[
              "Curriculum delivery at KASC follows a structured, outcome-based approach that combines classroom teaching, digital resources and continuous assessment.",
              "Departments regularly review teaching plans to ensure pace, depth and relevance stay aligned with both university requirements and industry expectations.",
            ]}
          />
          <div className="mt-14">
            <CardGrid items={delivery} />
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
