import CardGrid from "../../../components/common/CardGrid";
import ContentBlock from "../../../components/common/ContentBlock";
import CTASection from "../../../components/common/CTASection";
import PageHero from "../../../components/common/PageHero";
import PlacementStats from "../../../components/placement/PlacementStats";
import RecruiterMarquee from "../../../components/placement/RecruiterMarquee";
import TestimonialCarousel from "../../../components/testimonials/TestimonialCarousel";

export const metadata = { title: "Placement" };

const pillars = [
  {
    icon: "Compass",
    title: "Career Development",
    text: "Structured career counselling helping students identify the right path early.",
  },
  {
    icon: "GraduationCap",
    title: "Training & Skill Development",
    text: "Aptitude, communication and technical training aligned with recruiter expectations.",
  },
  {
    icon: "Users2",
    title: "Industry Interaction",
    text: "Regular interaction with recruiters through talks, panels and campus visits.",
  },
  {
    icon: "Award",
    title: "Alumni Success",
    text: "A growing alumni network across leading companies mentoring current students.",
  },
];

export default function PlacementPage() {
  return (
    <>
      <PageHero
        eyebrow="Placement"
        title="From Potential to Profession"
        subtitle="Preparing every student for a confident, career-ready transition beyond the classroom."
        breadcrumbs={[{ label: "Placement" }]}
      />
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <ContentBlock
            eyebrow="Placement Overview"
            title="A Dedicated Pathway to Employment"
            paragraphs={[
              "The Placement Cell at KASC works closely with departments and recruiters to prepare students for the professional world — from resume building to final interview rounds.",
              "Our approach blends skill training, mock interviews, aptitude preparation and consistent industry interaction throughout the academic journey.",
            ]}
          />
          <div className="mt-14">
            <CardGrid items={pillars} />
          </div>
        </div>
      </section>
      <PlacementStats />
      <RecruiterMarquee />
      <TestimonialCarousel />
      <CTASection />
    </>
  );
}
