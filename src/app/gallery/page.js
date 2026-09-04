import CTASection from "../../../components/common/CTASection";
import PageHero from "../../../components/common/PageHero";
import GalleryGrid from "../../../components/gallery/GalleryGrid";

export const metadata = { title: "Gallery" };

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Campus Moments"
        title="Gallery"
        subtitle="A visual record of life, learning and celebration at KASC."
        breadcrumbs={[{ label: "Gallery" }]}
      />
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <GalleryGrid showFilters limit={undefined} />
        </div>
      </section>
      <CTASection />
    </>
  );
}
