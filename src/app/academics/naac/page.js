import CardGrid from "../../../../components/common/CardGrid";
import ContentBlock from "../../../../components/common/ContentBlock";
import CTASection from "../../../../components/common/CTASection";
import PageHero from "../../../../components/common/PageHero";

export const metadata = { title: "NAAC" };

const criteria = [
  {
    icon: "BookOpenCheck",
    title: "Curricular Aspects",
    text: "Curriculum design aligned with academic flexibility and employability.",
  },
  {
    icon: "Presentation",
    title: "Teaching-Learning & Evaluation",
    text: "Student-centric pedagogy and transparent evaluation processes.",
  },
  {
    icon: "FlaskConical",
    title: "Research & Innovation",
    text: "Encouraging research culture, projects and extension activities.",
  },
  {
    icon: "Building2",
    title: "Infrastructure & Resources",
    text: "Well-maintained academic, physical and digital infrastructure.",
  },
  {
    icon: "HeartHandshake",
    title: "Student Support & Progression",
    text: "Scholarships, mentoring and progression support for every student.",
  },
  {
    icon: "Landmark",
    title: "Governance & Leadership",
    text: "Transparent, participative institutional management.",
  },
];

export default function NaacPage() {
  return (
    <>
      <PageHero
        eyebrow="Academics"
        title="NAAC"
        subtitle="Our commitment to nationally benchmarked quality standards in higher education."
        breadcrumbs={[
          { label: "Academics", href: "/academics" },
          { label: "NAAC" },
        ]}
      />
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <ContentBlock
            eyebrow="Quality Assurance"
            title="Committed to National Quality Benchmarks"
            paragraphs={[
              "The National Assessment and Accreditation Council (NAAC) framework guides KASC's continuous efforts to strengthen curriculum, teaching, research, infrastructure and governance.",
              "Every department at KASC works toward the seven NAAC criteria, ensuring that quality improvement remains an ongoing institutional priority rather than a one-time exercise.",
            ]}
          />
          <div className="mt-14">
            <CardGrid items={criteria} />
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
