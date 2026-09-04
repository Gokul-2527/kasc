import CardGrid from "../../../components/common/CardGrid";
import ContentBlock from "../../../components/common/ContentBlock";
import CTASection from "../../../components/common/CTASection";
import PageHero from "../../../components/common/PageHero";

export const metadata = { title: "Library" };

const services = [
  {
    icon: "Video",
    title: "E-Lectures",
    text: "Recorded lectures and digital learning content across departments.",
    href: "/library/e-lectures",
  },
  {
    icon: "BookMarked",
    title: "List Of Books",
    text: "A growing collection spanning literature, science, commerce and more.",
    href: "/library/books",
  },
  {
    icon: "Globe2",
    title: "Online Resources",
    text: "Access to e-journals, databases and open-access academic resources.",
    href: "/library/online-resources",
  },
  {
    icon: "Armchair",
    title: "Reading Environment",
    text: "A quiet, well-lit reading hall designed for focused study.",
  },
];

export default function LibraryPage() {
  return (
    <>
      <PageHero
        eyebrow="Library"
        title="Knowledge Beyond the Classroom"
        subtitle="A well-stocked, welcoming space that supports every student's academic journey."
        breadcrumbs={[{ label: "Library" }]}
      />
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <ContentBlock
            eyebrow="Library Overview"
            title="A Resource Hub for Every Discipline"
            paragraphs={[
              "The KASC library houses an extensive collection of books, journals and digital resources across all departments, supporting both curriculum needs and independent research.",
              "Alongside physical resources, students have access to e-lectures and online databases that extend learning well beyond classroom hours.",
            ]}
          />
          <div className="mt-14">
            <CardGrid items={services} />
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
