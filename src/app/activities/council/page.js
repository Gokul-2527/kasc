import CardGrid from "../../../../components/common/CardGrid";
import ContentBlock from "../../../../components/common/ContentBlock";
import CTASection from "../../../../components/common/CTASection";
import PageHero from "../../../../components/common/PageHero";

export const metadata = { title: "Council" };

const roles = [
  {
    icon: "Crown",
    title: "Student Council President",
    text: "Represents the student body in institutional discussions and decisions.",
  },
  {
    icon: "Users",
    title: "Class Representatives",
    text: "Elected voices from every class ensuring department-level feedback reaches leadership.",
  },
  {
    icon: "Megaphone",
    title: "General Secretary",
    text: "Coordinates council activities and communication with the administration.",
  },
  {
    icon: "CalendarCheck",
    title: "Event Coordinators",
    text: "Lead the planning and execution of council-driven campus events.",
  },
];

export default function CouncilPage() {
  return (
    <>
      <PageHero
        eyebrow="Activities"
        title="Council"
        subtitle="The elected student body that represents student voice in campus governance."
        breadcrumbs={[
          { label: "Activities", href: "/activities" },
          { label: "Council" },
        ]}
      />
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <ContentBlock
            eyebrow="Student Governance"
            title="A Voice for Every Student"
            paragraphs={[
              "The KASC Student Council is elected annually by the student body and works closely with the administration to represent student interests, plan events and address concerns.",
            ]}
          />
          <div className="mt-14">
            <CardGrid items={roles} columns={4} />
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
