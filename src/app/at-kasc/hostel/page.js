import CardGrid from "../../../../components/common/CardGrid";
import ContentBlock from "../../../../components/common/ContentBlock";
import CTASection from "../../../../components/common/CTASection";
import PageHero from "../../../../components/common/PageHero";

export const metadata = { title: "Hostel" };

const amenities = [
  {
    icon: "BedDouble",
    title: "Comfortable Rooms",
    text: "Well-maintained shared rooms with essential furniture.",
  },
  {
    icon: "ShieldCheck",
    title: "Round-the-Clock Security",
    text: "Watch staff and secure premises for student safety.",
  },
  {
    icon: "Utensils",
    title: "Nutritious Meals",
    text: "Balanced daily meals prepared in a hygienic mess.",
  },
  {
    icon: "Wifi",
    title: "Study-Friendly Environment",
    text: "Quiet hours and internet access supporting academic focus.",
  },
];

export default function HostelPage() {
  return (
    <>
      <PageHero
        eyebrow="@ KASC"
        title="Hostel"
        subtitle="A safe, comfortable home away from home for outstation students."
        breadcrumbs={[
          { label: "@ KASC", href: "/at-kasc" },
          { label: "Hostel" },
        ]}
      />
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <ContentBlock
            eyebrow="Residential Life"
            title="A Home Away From Home"
            paragraphs={[
              "KASC's hostel facilities offer outstation students a safe, disciplined and comfortable place to stay, with all essential amenities close to the academic blocks.",
            ]}
          />
          <div className="mt-14">
            <CardGrid items={amenities} />
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
