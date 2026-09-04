import CardGrid from "../../../../components/common/CardGrid";
import ContentBlock from "../../../../components/common/ContentBlock";
import CTASection from "../../../../components/common/CTASection";
import PageHero from "../../../../components/common/PageHero";

export const metadata = { title: "Clubs" };

const clubs = [
  {
    icon: "Code2",
    title: "Coding Club",
    text: "Programming challenges, hackathons and peer-led tech sessions.",
  },
  {
    icon: "PenTool",
    title: "Literary Club",
    text: "Debate, elocution, creative writing and Tamil and English literary events.",
  },
  {
    icon: "Palette",
    title: "Fine Arts Club",
    text: "Painting, design and visual arts exhibitions across the year.",
  },
  {
    icon: "Camera",
    title: "Photography Club",
    text: "Campus photo-walks, exhibitions and visual storytelling.",
  },
  {
    icon: "Mic2",
    title: "Toastmasters & Debate Club",
    text: "Public speaking and structured debate practice.",
  },
  {
    icon: "Leaf",
    title: "Nature & Eco Club",
    text: "Campus greening drives and environmental awareness initiatives.",
  },
];

export default function ClubsPage() {
  return (
    <>
      <PageHero
        eyebrow="Activities"
        title="Clubs"
        subtitle="Interest-based communities where students pursue passions beyond the syllabus."
        breadcrumbs={[
          { label: "Activities", href: "/activities" },
          { label: "Clubs" },
        ]}
      />
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <ContentBlock
            eyebrow="Student Communities"
            title="A Club for Every Interest"
            paragraphs={[
              "From coding to creative writing, KASC's student-run clubs offer regular activities, competitions and events that build skills alongside friendships.",
            ]}
          />
          <div className="mt-14">
            <CardGrid items={clubs} />
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
