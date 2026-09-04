import ContentBlock from "../../../../components/common/ContentBlock";
import CardGrid from "../../../../components/common/CardGrid";
import CTASection from "../../../../components/common/CTASection";
import PageHero from "../../../../components/common/PageHero";

export const metadata = { title: "Cross Cutting Issues" };

const issues = [
  {
    icon: "Leaf",
    title: "Environment & Sustainability",
    text: "Awareness programmes on sustainability woven into curriculum and campus practice.",
  },
  {
    icon: "Scale",
    title: "Gender Sensitisation",
    text: "Regular sessions promoting equality, respect and gender sensitivity.",
  },
  {
    icon: "Vote",
    title: "Human Values & Ethics",
    text: "Value-based education fostering ethics, empathy and civic responsibility.",
  },
  {
    icon: "Globe2",
    title: "ICT & Digital Literacy",
    text: "Cross-curricular integration of digital tools and information literacy.",
  },
];

export default function CrossCuttingIssuesPage() {
  return (
    <>
      <PageHero
        eyebrow="Academics"
        title="Cross Cutting Issues"
        subtitle="Themes woven across the curriculum that shape well-rounded graduates."
        breadcrumbs={[
          { label: "Academics", href: "/academics" },
          { label: "Cross Cutting Issues" },
        ]}
      />
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <ContentBlock
            eyebrow="Holistic Education"
            title="Beyond the Syllabus"
            paragraphs={[
              "KASC integrates cross-cutting themes — environment, gender sensitivity, ethics and digital literacy — into everyday teaching, rather than treating them as isolated topics.",
              "These themes are reinforced through guest lectures, workshops and campus initiatives that shape socially responsible graduates.",
            ]}
          />
          <div className="mt-14">
            <CardGrid items={issues} />
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
