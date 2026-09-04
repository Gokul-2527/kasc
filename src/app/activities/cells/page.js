import CardGrid from "../../../../components/common/CardGrid";
import ContentBlock from "../../../../components/common/ContentBlock";
import CTASection from "../../../../components/common/CTASection";
import PageHero from "../../../../components/common/PageHero";

export const metadata = { title: "Cells" };

const cells = [
  {
    icon: "ShieldAlert",
    title: "Anti-Ragging Cell",
    text: "Ensuring a safe, ragging-free campus for every student.",
  },
  {
    icon: "Scale",
    title: "Women Empowerment Cell",
    text: "Programmes and support systems promoting gender equity and safety.",
  },
  {
    icon: "Ear",
    title: "Grievance Redressal Cell",
    text: "A structured channel for students to raise and resolve concerns.",
  },
  {
    icon: "HeartHandshake",
    title: "Student Welfare Cell",
    text: "Coordinating scholarships, welfare schemes and student support.",
  },
  {
    icon: "Recycle",
    title: "Green Campus Cell",
    text: "Driving sustainability and eco-friendly practices across campus.",
  },
  {
    icon: "Briefcase",
    title: "Entrepreneurship Cell",
    text: "Encouraging start-up thinking and business plan development.",
  },
];

export default function CellsPage() {
  return (
    <>
      <PageHero
        eyebrow="Activities"
        title="Cells"
        subtitle="Specialised bodies that safeguard student welfare and drive institutional initiatives."
        breadcrumbs={[
          { label: "Activities", href: "/activities" },
          { label: "Cells" },
        ]}
      />
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <ContentBlock
            eyebrow="Student Welfare"
            title="Structures That Look After Every Student"
            paragraphs={[
              "KASC operates several dedicated cells that safeguard student welfare, address grievances and lead campus-wide initiatives on safety, sustainability and empowerment.",
            ]}
          />
          <div className="mt-14">
            <CardGrid items={cells} />
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
