import CardGrid from "../../../../components/common/CardGrid";
import ContentBlock from "../../../../components/common/ContentBlock";
import CTASection from "../../../../components/common/CTASection";
import PageHero from "../../../../components/common/PageHero";

export const metadata = { title: "Exam Cell" };

const services = [
  {
    icon: "CalendarClock",
    title: "Examination Schedule",
    text: "Timely publication of internal and semester examination timetables.",
  },
  {
    icon: "ShieldCheck",
    title: "Fair Conduct",
    text: "Strict, transparent invigilation and malpractice-prevention procedures.",
  },
  {
    icon: "FileCheck2",
    title: "Results & Revaluation",
    text: "Prompt result declaration with a clear revaluation and grievance process.",
  },
  {
    icon: "ClipboardList",
    title: "Hall Ticket Issuance",
    text: "Streamlined registration and hall ticket distribution for every student.",
  },
];

export default function ExamCellPage() {
  return (
    <>
      <PageHero
        eyebrow="Academics"
        title="Exam Cell"
        subtitle="Ensuring fair, transparent and well-organised examinations across every programme."
        breadcrumbs={[
          { label: "Academics", href: "/academics" },
          { label: "Exam Cell" },
        ]}
      />
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <ContentBlock
            eyebrow="Examination Administration"
            title="A Fair and Structured Examination System"
            paragraphs={[
              "The Exam Cell coordinates internal assessments and semester-end examinations across all departments, working closely with the university and college administration.",
              "From timetable planning to result processing, the cell maintains strict confidentiality, accuracy and fairness at every stage of the examination cycle.",
            ]}
          />
          <div className="mt-14">
            <CardGrid items={services} columns={4} />
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
