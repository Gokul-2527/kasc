import CardGrid from "../../../../components/common/CardGrid";
import ContentBlock from "../../../../components/common/ContentBlock";
import CTASection from "../../../../components/common/CTASection";
import PageHero from "../../../../components/common/PageHero";

export const metadata = { title: "Placement Activities" };

const activities = [
  {
    icon: "Compass",
    title: "Career Guidance",
    text: "Sector-specific guidance sessions across banking, IT, commerce and management.",
  },
  {
    icon: "Building2",
    title: "On-Campus Drives",
    text: "Recruiters visiting campus for direct hiring across departments.",
  },
  {
    icon: "Cpu",
    title: "Technical Training",
    text: "Coding, aptitude and domain-specific technical preparation.",
  },
  {
    icon: "Mic2",
    title: "Communication Training",
    text: "Group discussions, mock interviews and soft-skills workshops.",
  },
  {
    icon: "Rocket",
    title: "Entrepreneurship",
    text: "Business plan sessions and start-up mentoring for aspiring entrepreneurs.",
  },
  {
    icon: "Handshake",
    title: "Industry Interaction",
    text: "Guest talks and interactions connecting students with working professionals.",
  },
];

export default function PlacementActivitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Placement"
        title="Placement Activities"
        subtitle="A year-round calendar of training, guidance and hiring programmes."
        breadcrumbs={[
          { label: "Placement", href: "/placement" },
          { label: "Placement Activities" },
        ]}
      />
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <ContentBlock
            eyebrow="Structured Preparation"
            title="Getting Students Interview-Ready"
            paragraphs={[
              "Beyond hiring drives, the Placement Cell runs a continuous calendar of training and guidance activities so every student walks into an interview prepared and confident.",
            ]}
          />
          <div className="mt-14">
            <CardGrid items={activities} />
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
