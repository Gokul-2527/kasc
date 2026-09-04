"use client";

import { departments } from "../../data/departments";
import SectionHeading from "../common/SectionHeading";
import DepartmentCard from "./DepartmentCard";

export default function DepartmentGrid({ limit }) {
  const list = limit ? departments.slice(0, limit) : departments;

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Academics"
          title="Departments"
          subtitle="Explore our diverse range of departments, each dedicated to excellence in education and research. From the sciences to the arts, our departments offer a variety of programs designed to foster knowledge, innovation, and critical thinking."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((d, i) => (
            <DepartmentCard key={d.slug} department={d} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
