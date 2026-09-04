import ContentBlock from "../../../components/common/ContentBlock";
import CardGrid from "../../../components/common/CardGrid";
import CTASection from "../../../components/common/CTASection";
import PageHero from "../../../components/common/PageHero";

const links = [
  {
    icon: "Users",
    title: "Administration",
    text: "Meet the leadership guiding KASC's academic and institutional direction.",
    href: "/about/administration",
  },
  {
    icon: "Compass",
    title: "Vision & Mission",
    text: "The purpose and principles that shape every programme at KASC.",
    href: "/about/vision-mission",
  },
  {
    icon: "History",
    title: "Our History",
    text: "From a green 25-acre campus in 2001 to a growing institution today.",
    href: "/about/history",
  },
  {
    icon: "Network",
    title: "Organisation Chart",
    text: "How academic and administrative responsibilities are structured.",
    href: "/about/organisation-chart",
  },
  {
    icon: "ClipboardList",
    title: "Committee",
    text: "The statutory and academic committees that support governance.",
    href: "/about/committee",
  },
];

export const metadata = { title: "About Us" };

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About KASC"
        title="A Legacy of Learning"
        subtitle="Kaamadhenu Arts and Science College has been shaping knowledge seekers on a 25-acre green campus in Sathyamangalam since 2001."
        breadcrumbs={[{ label: "About Us" }]}
      />

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <ContentBlock
            eyebrow="About The Institution"
            title="An Institution of Repute"
            paragraphs={[
              "Kaamadhenu Arts and Science College is an institution of repute located on the outskirts of Sathyamangalam on the Erode-Sathyamangalam (Bungalowpudhur) stretch. Blessed with a salubrious climate and nestled in the luxuriance of greenery, the institution acts as a hive for all the knowledge seekers from different parts of the nation.",
              "It was an initiation that fructified into buildings in a year and was declared open to the world by Thavathiru Santhalinga Ramasamy Adigalar on 5th July 2001.",
              "The extensive 25-acre location is painted green with majestic trees and luscious shrubs, and the well-equipped laboratories, bright classrooms, rich libraries and expansive playground ignite the spark of learning and elevate students to greater heights.",
            ]}
          />

          <div className="mt-16">
            <CardGrid items={links} />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
