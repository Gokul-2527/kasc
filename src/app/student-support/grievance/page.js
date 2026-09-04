import CardGrid from "../../../../components/common/CardGrid";
import ContentBlock from "../../../../components/common/ContentBlock";
import CTASection from "../../../../components/common/CTASection";
import PageHero from "../../../../components/common/PageHero";

export const metadata = { title: "Student Grievance" };

const process = [
  {
    icon: "FileEdit",
    title: "Submit Your Concern",
    text: "Raise a grievance through the designated committee or help desk.",
  },
  {
    icon: "Clock3",
    title: "Acknowledgement",
    text: "Every grievance is acknowledged and reviewed within a defined timeline.",
  },
  {
    icon: "Search",
    title: "Fair Investigation",
    text: "The grievance committee investigates matters impartially and confidentially.",
  },
  {
    icon: "CheckCircle2",
    title: "Resolution",
    text: "Students are informed of the outcome and any corrective action taken.",
  },
];

export default function GrievancePage() {
  return (
    <>
      <PageHero
        eyebrow="Students Support"
        title="Student Grievance"
        subtitle="A confidential, structured process for raising and resolving concerns."
        breadcrumbs={[
          { label: "Students Support", href: "/student-support" },
          { label: "Grievance" },
        ]}
      />
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <ContentBlock
            eyebrow="Grievance Redressal"
            title="Every Concern Deserves a Fair Hearing"
            paragraphs={[
              "The Student Grievance Redressal Committee ensures every student has a safe, confidential channel to raise academic, administrative or personal concerns.",
              "All grievances are handled with sensitivity, fairness and a commitment to timely resolution.",
            ]}
          />
          <div className="mt-14">
            <CardGrid items={process} columns={4} />
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
