import CardGrid from "../../../components/common/CardGrid";
import ContentBlock from "../../../components/common/ContentBlock";
import CTASection from "../../../components/common/CTASection";
import PageHero from "../../../components/common/PageHero";

export const metadata = { title: "@ KASC" };

const areas = [
  {
    icon: "Building2",
    title: "Infrastructure",
    text: "Modern academic blocks, seminar halls and student amenities.",
    href: "/at-kasc/infrastructure",
  },
  {
    icon: "FlaskConical",
    title: "Laboratories",
    text: "Well-equipped labs supporting science, commerce and IT departments.",
    href: "/at-kasc/laboratories",
  },
  {
    icon: "BedDouble",
    title: "Hostel",
    text: "Safe, comfortable residential facilities for outstation students.",
    href: "/at-kasc/hostel",
  },
  {
    icon: "Bus",
    title: "Transport",
    text: "Wide-reaching bus routes connecting campus to surrounding towns.",
    href: "/at-kasc/transport",
  },
  {
    icon: "Trophy",
    title: "Sports",
    text: "Expansive playgrounds and facilities for a range of sports.",
    href: "/at-kasc/sports",
  },
];

export default function AtKascPage() {
  return (
    <>
      <PageHero
        eyebrow="Campus Life"
        title="Experience Life at KASC"
        subtitle="A 25-acre campus built for learning, living and growing."
        breadcrumbs={[{ label: "@ KASC" }]}
      />
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <ContentBlock
            eyebrow="Campus Facilities"
            title="A Campus Designed for Student Life"
            paragraphs={[
              "Beyond academics, KASC offers infrastructure, facilities and amenities that make campus life comfortable, safe and enriching for every student.",
            ]}
          />
          <div className="mt-14">
            <CardGrid items={areas} />
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
