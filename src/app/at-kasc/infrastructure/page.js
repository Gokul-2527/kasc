import Image from "next/image";
import PageHero from "../../../../components/common/PageHero";
import ContentBlock from "../../../../components/common/ContentBlock";
import CardGrid from "../../../../components/common/CardGrid";
import CTASection from "../../../../components/common/CTASection";

export const metadata = { title: "Infrastructure" };

const facilities = [
  {
    icon: "Building2",
    title: "Academic Blocks",
    text: "Spacious, ventilated classrooms across dedicated department buildings.",
  },
  {
    icon: "Presentation",
    title: "Seminar Halls",
    text: "Well-equipped halls for lectures, seminars and events.",
  },
  {
    icon: "Wifi",
    title: "Campus-Wide Connectivity",
    text: "High-speed internet access supporting digital learning.",
  },
  {
    icon: "Utensils",
    title: "Cafeteria",
    text: "A hygienic, spacious cafeteria serving the campus community.",
  },
];

export default function InfrastructurePage() {
  return (
    <>
      <PageHero
        eyebrow="@ KASC"
        title="Infrastructure"
        subtitle="Purpose-built spaces that support focused, comfortable learning."
        breadcrumbs={[
          { label: "@ KASC", href: "/at-kasc" },
          { label: "Infrastructure" },
        ]}
      />
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <ContentBlock
              eyebrow="Campus Buildings"
              title="Spaces Built for Focused Learning"
              paragraphs={[
                "Set across a 25-acre campus, KASC's academic blocks offer bright, ventilated classrooms, well-equipped seminar halls and student-friendly common areas.",
                "Every facility is maintained to support both structured teaching and the informal, everyday moments of campus life.",
              ]}
            />
            <div className="relative aspect-[4/3] overflow-hidden rounded-[30px] shadow-2xl shadow-navy/15">
              <Image
                src="https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?q=80&w=1200&auto=format&fit=crop"
                alt="Campus infrastructure at KASC"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="mt-16">
            <CardGrid items={facilities} />
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
