import CardGrid from "../../../../components/common/CardGrid";
import ContentBlock from "../../../../components/common/ContentBlock";
import CTASection from "../../../../components/common/CTASection";
import PageHero from "../../../../components/common/PageHero";

export const metadata = { title: "Student Health Center" };

const services = [
  {
    icon: "HeartPulse",
    title: "First Response Care",
    text: "On-campus first-aid and basic medical support during college hours.",
  },
  {
    icon: "Stethoscope",
    title: "Referral Support",
    text: "Guidance and referral to nearby hospitals for further treatment when needed.",
  },
  {
    icon: "ShieldCheck",
    title: "Health Awareness",
    text: "Periodic health check-up camps and awareness sessions.",
  },
  {
    icon: "Siren",
    title: "Emergency Support",
    text: "Quick coordination in case of on-campus medical emergencies.",
  },
];

export default function HealthCenterPage() {
  return (
    <>
      <PageHero
        eyebrow="Students Support"
        title="Student Health Center"
        subtitle="Basic on-campus health support to keep students safe through the academic day."
        breadcrumbs={[
          { label: "Students Support", href: "/student-support" },
          { label: "Health Center" },
        ]}
      />
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <ContentBlock
            eyebrow="Campus Wellbeing"
            title="Looking After Student Health"
            paragraphs={[
              "The Student Health Center provides first-response care and coordinates referrals for students who need further medical attention, helping ensure a safe campus environment.",
            ]}
          />
          <div className="mt-14">
            <CardGrid items={services} />
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
