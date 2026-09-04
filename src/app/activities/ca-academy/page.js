import CardGrid from "../../../../components/common/CardGrid";
import ContentBlock from "../../../../components/common/ContentBlock";
import CTASection from "../../../../components/common/CTASection";
import PageHero from "../../../../components/common/PageHero";

export const metadata = { title: "CA Academy" };

const features = [
  {
    icon: "BookOpen",
    title: "Foundation Coaching",
    text: "Guided preparation support for CA Foundation aspirants alongside regular academics.",
  },
  {
    icon: "Users2",
    title: "Peer Study Groups",
    text: "Structured study circles helping students stay consistent and motivated.",
  },
  {
    icon: "FileText",
    title: "Mock Tests",
    text: "Periodic mock assessments modelled on the professional examination pattern.",
  },
  {
    icon: "UserCheck",
    title: "Mentor Guidance",
    text: "Faculty and alumni mentors guiding students through the CA pathway.",
  },
];

export default function CaAcademyPage() {
  return (
    <>
      <PageHero
        eyebrow="Activities"
        title="CA Academy"
        subtitle="Supporting students who aspire to a career in Chartered Accountancy."
        breadcrumbs={[
          { label: "Activities", href: "/activities" },
          { label: "CA Academy" },
        ]}
      />
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <ContentBlock
            eyebrow="Professional Pathway"
            title="Bridging College and Chartered Accountancy"
            paragraphs={[
              "The CA Academy at KASC supports commerce students preparing for professional accounting examinations, offering structured guidance alongside their regular coursework.",
              "Regular interaction with practising Chartered Accountants and alumni gives students a realistic view of the profession and the discipline it demands.",
            ]}
          />
          <div className="mt-14">
            <CardGrid items={features} />
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
