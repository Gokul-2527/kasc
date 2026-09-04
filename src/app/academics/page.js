import CardGrid from "../../../components/common/CardGrid";
import CTASection from "../../../components/common/CTASection";
import PageHero from "../../../components/common/PageHero";

export const metadata = { title: "Academics" };

const links = [
  {
    icon: "LayoutGrid",
    title: "Departments",
    text: "Ten departments spanning arts, science, commerce and computer studies.",
    href: "/academics/departments",
  },
  {
    icon: "BookMarked",
    title: "Programme Offered",
    text: "Undergraduate and postgraduate programmes designed for career readiness.",
    href: "/academics/programmes",
  },
  {
    icon: "CalendarDays",
    title: "Academic Calendar",
    text: "Semester schedules, examination dates and holidays.",
    href: "/academics/calendar",
  },
  {
    icon: "Award",
    title: "NAAC",
    text: "Our commitment to quality benchmarks in higher education.",
    href: "/academics/naac",
  },
  {
    icon: "BadgeCheck",
    title: "IQAC",
    text: "Driving continuous academic and administrative quality improvement.",
    href: "/academics/iqac",
  },
  {
    icon: "FileCheck2",
    title: "Exam Cell",
    text: "Ensuring fair, transparent and well-organised examinations.",
    href: "/academics/exam-cell",
  },
  {
    icon: "ScrollText",
    title: "Code Of Conduct",
    text: "The values and discipline expected of every KASC student.",
    href: "/academics/code-of-conduct",
  },
  {
    icon: "Users2",
    title: "Student Centric Methods",
    text: "Teaching approaches designed around student needs and pace.",
    href: "/academics/student-centric-methods",
  },
  {
    icon: "GitBranch",
    title: "Cross Cutting Issues",
    text: "Gender, environment, ethics and human values across the curriculum.",
    href: "/academics/cross-cutting-issues",
  },
  {
    icon: "Workflow",
    title: "Effective Curriculum Delivery",
    text: "How KASC ensures consistent, high-quality classroom delivery.",
    href: "/academics/effective-curriculum-delivery",
  },
];

export default function AcademicsPage() {
  return (
    <>
      <PageHero
        eyebrow="Academics"
        title="Learning Beyond Boundaries"
        subtitle="A structured academic ecosystem built on strong departments, quality assurance and student-centred teaching."
        breadcrumbs={[{ label: "Academics" }]}
      />
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <CardGrid items={links} />
        </div>
      </section>
      <CTASection />
    </>
  );
}
