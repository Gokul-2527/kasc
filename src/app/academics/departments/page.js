import DepartmentCard from "../../../../components/academics/DepartmentCard";
import CTASection from "../../../../components/common/CTASection";
import PageHero from "../../../../components/common/PageHero";
import { departments } from "../../../../data/departments";

export const metadata = { title: "Departments" };

export default function DepartmentsPage() {
  return (
    <>
      <PageHero
        eyebrow="Academics"
        title="Departments"
        subtitle="Explore our diverse range of departments, each dedicated to excellence in education and research."
        breadcrumbs={[
          { label: "Academics", href: "/academics" },
          { label: "Departments" },
        ]}
      />
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {departments.map((d, i) => (
              <DepartmentCard key={d.slug} department={d} index={i} />
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
