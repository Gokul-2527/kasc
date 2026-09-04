import CardGrid from "../../../../components/common/CardGrid";
import ContentBlock from "../../../../components/common/ContentBlock";
import CTASection from "../../../../components/common/CTASection";
import PageHero from "../../../../components/common/PageHero";

export const metadata = { title: "Online Resources" };

const resources = [
  { icon: "Database", title: "E-Journals & Databases", text: "Curated access to academic databases across disciplines." },
  { icon: "Globe2", title: "Open Access Repositories", text: "Links to reputed open-access research and reference platforms." },
  { icon: "FileSearch", title: "Research Support", text: "Guidance for students and faculty pursuing research and publications." },
  { icon: "Laptop2", title: "Remote Access", text: "Off-campus access to select digital resources for registered students." },
];

export default function OnlineResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Library"
        title="Online Resources"
        subtitle="Digital databases and repositories that extend the library beyond its walls."
        breadcrumbs={[{ label: "Library", href: "/library" }, { label: "Online Resources" }]}
      />
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <ContentBlock
            eyebrow="Digital Access"
            title="Research Support at Your Fingertips"
            paragraphs={[
              "The library provides access to a range of digital resources, helping students and faculty go beyond the printed collection for research and reference.",
            ]}
          />
          <div className="mt-14">
            <CardGrid items={resources} />
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
