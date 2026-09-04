import CardGrid from "../../../components/common/CardGrid";
import ContentBlock from "../../../components/common/ContentBlock";
import CTASection from "../../../components/common/CTASection";
import PageHero from "../../../components/common/PageHero";

export const metadata = { title: "Students Support" };

const support = [
  {
    icon: "Ear",
    title: "Student Grievance",
    text: "A transparent channel to raise and resolve concerns.",
    href: "/student-support/grievance",
  },
  {
    icon: "LifeBuoy",
    title: "Student Help Desk",
    text: "A single point of contact for day-to-day student queries.",
    href: "/student-support/help-desk",
  },
  {
    icon: "HeartPulse",
    title: "Student Health Center",
    text: "On-campus first-response health support for students.",
    href: "/student-support/health-center",
  },
  {
    icon: "HandCoins",
    title: "Student Welfare",
    text: "Scholarship guidance and welfare scheme assistance.",
  },
  {
    icon: "BookOpenCheck",
    title: "Academic Support",
    text: "Remedial classes and academic counselling for students who need it.",
  },
  {
    icon: "Briefcase",
    title: "Career Support",
    text: "Guidance connecting academic choices with long-term career goals.",
  },
];

export default function StudentSupportPage() {
  return (
    <>
      <PageHero
        eyebrow="Students Support"
        title="Supporting Every Student"
        subtitle="Because a good education depends on feeling seen, heard and supported."
        breadcrumbs={[{ label: "Students Support" }]}
      />
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <ContentBlock
            eyebrow="Student Wellbeing"
            title="A Support System Around Every Student"
            paragraphs={[
              "KASC believes student success depends on more than academics. Our support systems address grievances, health, welfare and everyday needs so students can focus on learning.",
            ]}
          />
          <div className="mt-14">
            <CardGrid items={support} />
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
