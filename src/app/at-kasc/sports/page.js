import CardGrid from "../../../../components/common/CardGrid";
import ContentBlock from "../../../../components/common/ContentBlock";
import CTASection from "../../../../components/common/CTASection";
import PageHero from "../../../../components/common/PageHero";

export const metadata = { title: "Sports" };

const sports = [
  {
    icon: "Trophy",
    title: "Cricket & Volleyball Grounds",
    text: "Expansive open grounds for cricket, volleyball and athletics.",
  },
  {
    icon: "Dumbbell",
    title: "Indoor Games",
    text: "Facilities for chess, carrom, table tennis and other indoor sports.",
  },
  {
    icon: "Medal",
    title: "Inter-Department Tournaments",
    text: "Regular competitions building team spirit across departments.",
  },
  {
    icon: "Users2",
    title: "State-Level Opportunities",
    text: "Support for students representing KASC at university and state events.",
  },
];

export default function SportsPage() {
  return (
    <>
      <PageHero
        eyebrow="@ KASC"
        title="Sports"
        subtitle="Open grounds and facilities that keep campus life active and competitive."
        breadcrumbs={[
          { label: "@ KASC", href: "/at-kasc" },
          { label: "Sports" },
        ]}
      />
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <ContentBlock
            eyebrow="Sports & Fitness"
            title="A Campus That Stays Active"
            paragraphs={[
              "From cricket and volleyball to indoor games, KASC's sports facilities give students a healthy outlet alongside academics — and a chance to represent the college competitively.",
            ]}
          />
          <div className="mt-14">
            <CardGrid items={sports} />
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
