import CardGrid from "../../../../components/common/CardGrid";
import ContentBlock from "../../../../components/common/ContentBlock";
import CTASection from "../../../../components/common/CTASection";
import PageHero from "../../../../components/common/PageHero";

export const metadata = { title: "Laboratories" };

const labs = [
  {
    icon: "Cpu",
    title: "Computer Labs",
    text: "Modern systems supporting programming, design and research work.",
  },
  {
    icon: "Network",
    title: "Networking Lab",
    text: "Dedicated infrastructure for networking and systems coursework.",
  },
  {
    icon: "Scissors",
    title: "Garment & Textile Lab",
    text: "Equipped for pattern-making, draping and garment construction.",
  },
  {
    icon: "Calculator",
    title: "Accounting & Finance Lab",
    text: "Software-enabled lab for computerised accounting practice.",
  },
];

export default function LaboratoriesPage() {
  return (
    <>
      <PageHero
        eyebrow="@ KASC"
        title="Laboratories"
        subtitle="Hands-on facilities that turn theory into practical, applied skill."
        breadcrumbs={[
          { label: "@ KASC", href: "/at-kasc" },
          { label: "Laboratories" },
        ]}
      />
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <ContentBlock
            eyebrow="Practical Learning"
            title="Where Theory Becomes Practice"
            paragraphs={[
              "KASC's laboratories are equipped to support the practical requirements of Computer Science, IT, Commerce and Costume Design departments alike.",
            ]}
          />
          <div className="mt-14">
            <CardGrid items={labs} />
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
