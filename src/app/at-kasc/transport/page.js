import CardGrid from "../../../../components/common/CardGrid";
import ContentBlock from "../../../../components/common/ContentBlock";
import CTASection from "../../../../components/common/CTASection";
import PageHero from "../../../../components/common/PageHero";

export const metadata = { title: "Transport" };

const routes = [
  {
    icon: "Bus",
    title: "Sathyamangalam Route",
    text: "Regular service connecting the town to campus.",
  },
  {
    icon: "Bus",
    title: "Erode Route",
    text: "Daily service for students commuting from Erode and nearby areas.",
  },
  {
    icon: "Bus",
    title: "Bhavani & Gobichettipalayam Route",
    text: "Convenient timings for students from surrounding towns.",
  },
  {
    icon: "MapPinned",
    title: "Wide Network Coverage",
    text: "Multiple pick-up points reducing travel time for students.",
  },
];

export default function TransportPage() {
  return (
    <>
      <PageHero
        eyebrow="@ KASC"
        title="Transport"
        subtitle="A wide bus network making the daily commute simple and reliable."
        breadcrumbs={[
          { label: "@ KASC", href: "/at-kasc" },
          { label: "Transport" },
        ]}
      />
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <ContentBlock
            eyebrow="Getting to Campus"
            title="Reliable Transport, Every Day"
            paragraphs={[
              "KASC operates a dedicated bus fleet connecting students from Sathyamangalam, Erode, Bhavani and surrounding towns to the campus, making daily commuting simple and safe.",
            ]}
          />
          <div className="mt-14">
            <CardGrid items={routes} />
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
