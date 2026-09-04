import ContentBlock from "../../../../components/common/ContentBlock";
import CTASection from "../../../../components/common/CTASection";
import PageHero from "../../../../components/common/PageHero";

export const metadata = { title: "List Of Books" };

const collection = [
  { category: "Arts & Literature", count: "3,200+ titles" },
  { category: "Computer Science & IT", count: "2,800+ titles" },
  { category: "Commerce & Management", count: "3,600+ titles" },
  { category: "Mathematics & Sciences", count: "2,100+ titles" },
  { category: "Reference & Journals", count: "1,500+ titles" },
  { category: "Competitive Exam Preparation", count: "900+ titles" },
];

export default function BooksPage() {
  return (
    <>
      <PageHero
        eyebrow="Library"
        title="List Of Books"
        subtitle="A well-rounded collection curated to support every department."
        breadcrumbs={[
          { label: "Library", href: "/library" },
          { label: "List Of Books" },
        ]}
      />
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <ContentBlock
            eyebrow="Collection"
            title="Titles Across Every Discipline"
            paragraphs={[
              "The library catalogue spans literature, science, commerce and reference material, regularly updated based on department recommendations and student demand.",
            ]}
          />
          <div className="mt-12 divide-y divide-hairline overflow-hidden rounded-3xl border border-hairline bg-white">
            {collection.map((c) => (
              <div
                key={c.category}
                className="flex items-center justify-between px-6 py-4"
              >
                <span className="text-sm font-medium text-[var(--color-text)]">
                  {c.category}
                </span>
                <span className="text-sm font-semibold text-navy">
                  {c.count}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
