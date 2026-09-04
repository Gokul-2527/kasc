import CardGrid from "../../../../components/common/CardGrid";
import ContentBlock from "../../../../components/common/ContentBlock";
import CTASection from "../../../../components/common/CTASection";
import PageHero from "../../../../components/common/PageHero";

export const metadata = { title: "Student Centric Methods" };

const methods = [
  {
    icon: "Presentation",
    title: "Interactive Learning",
    text: "Discussion-based classes, seminars and group activities over rote learning.",
  },
  {
    icon: "Laptop2",
    title: "ICT-Enabled Teaching",
    text: "Digital tools, e-content and smart classrooms supporting varied learning styles.",
  },
  {
    icon: "Handshake",
    title: "Mentor-Mentee System",
    text: "Every student paired with a faculty mentor for academic and personal guidance.",
  },
  {
    icon: "Puzzle",
    title: "Experiential Learning",
    text: "Projects, field visits and case studies that connect theory with practice.",
  },
];

export default function StudentCentricMethodsPage() {
  return (
    <>
      <PageHero
        eyebrow="Academics"
        title="Student Centric Methods"
        subtitle="Teaching approaches designed around how students actually learn best."
        breadcrumbs={[
          { label: "Academics", href: "/academics" },
          { label: "Student Centric Methods" },
        ]}
      />
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <ContentBlock
            eyebrow="Pedagogy"
            title="Placing the Student at the Centre of Learning"
            paragraphs={[
              "KASC adopts student-centric teaching methods that encourage participation, critical thinking and self-directed learning rather than passive instruction.",
              "Faculty design sessions around discussion, application and mentorship, ensuring every student's individual pace and interests are respected.",
            ]}
          />
          <div className="mt-14">
            <CardGrid items={methods} />
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
