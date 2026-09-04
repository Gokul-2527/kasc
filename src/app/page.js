import HeroSection from "../../components/hero/HeroSection";
import WhySection from "../../components/about/WhySection";
import PlacementStats from "../../components/placement/PlacementStats";
import DepartmentGrid from "../../components/academics/DepartmentGrid";
import EventGrid from "../../components/activities/EventGrid";
import GalleryGrid from "../../components/gallery/GalleryGrid";
import RecruiterMarquee from "../../components/placement/RecruiterMarquee";
import TestimonialCarousel from "../../components/testimonials/TestimonialCarousel";
import PressSection from "../../components/placement/PressSection";
import CTASection from "../../components/common/CTASection";
import SectionHeading from "../../components/common/SectionHeading";
import AdmissionFloatingCard from "../../components/hero/AdmissionFloatingCard";
import AboutSection from "../../components/about/AboutSection";
import "./globals.css";
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <WhySection />
      <PlacementStats />
      <DepartmentGrid limit={9} />
      <EventGrid limit={6} />

      <section className="bg-bg-soft py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Campus Moments"
            title="Picture Ledge"
            subtitle="Moments that make campus life memorable."
            align="center"
          />
          <div className="mt-14">
            <GalleryGrid showFilters={false} limit={9} />
          </div>
        </div>
      </section>

      <RecruiterMarquee />
      <TestimonialCarousel />
      <PressSection />
      <CTASection />

      {/* Floating trigger button / card overlay */}
      <AdmissionFloatingCard />
    </>
  );
}
