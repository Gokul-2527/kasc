import Link from "next/link";

import CTASection from "../../../components/common/CTASection";
import EventGrid from "../../../components/activities/EventGrid";
import CardGrid from "../../../components/common/CardGrid";
import ContentBlock from "../../../components/common/ContentBlock";
import PageHero from "../../../components/common/PageHero";

export const metadata = { title: "Activities" };

const activityAreas = [
  {
    icon: "Calculator",
    title: "CA Academy",
    text: "Dedicated coaching support for students pursuing professional accounting courses.",
    href: "/activities/ca-academy",
  },
  {
    icon: "Sparkles",
    title: "Clubs",
    text: "Interest-based clubs spanning literature, technology, arts and culture.",
    href: "/activities/clubs",
  },
  {
    icon: "Layers",
    title: "Cells",
    text: "Specialised cells addressing grievances, gender sensitisation and student welfare.",
    href: "/activities/cells",
  },
  {
    icon: "Users",
    title: "Committees",
    text: "Departmental and institutional committees guiding student initiatives.",
    href: "/activities/committee",
  },
  {
    icon: "Handshake",
    title: "Associations",
    text: "Department associations organising academic and cultural events.",
    href: "/activities/association",
  },
  {
    icon: "Vote",
    title: "Student Council",
    text: "An elected body representing student voice in campus governance.",
    href: "/activities/council",
  },
  {
    icon: "Trophy",
    title: "Sports",
    text: "Inter-department tournaments and state-level sporting opportunities.",
  },
  {
    icon: "Music",
    title: "Cultural Activities",
    text: "Annual day, fests and performances celebrating student talent.",
  },
  {
    icon: "Flag",
    title: "NSS",
    text: "National Service Scheme volunteering and community service initiatives.",
  },
  {
    icon: "Shield",
    title: "NCC",
    text: "National Cadet Corps training building discipline and leadership.",
  },
  {
    icon: "Wrench",
    title: "Workshops",
    text: "Hands-on technical and creative workshops throughout the year.",
  },
  {
    icon: "Medal",
    title: "Competitions",
    text: "Inter-collegiate quizzes, debates and technical competitions.",
  },
];

export default function ActivitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Student Life"
        title="Beyond the Classroom"
        subtitle="A campus alive with clubs, competitions, service and celebration."
        breadcrumbs={[{ label: "Activities" }]}
      />
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <ContentBlock
            eyebrow="Student Life"
            title="Where Students Discover More Than Academics"
            paragraphs={[
              "KASC believes learning extends far beyond the classroom. Clubs, cells, associations and the student council give every student a place to lead, create and contribute.",
            ]}
          />
          <div className="mt-14">
            <CardGrid items={activityAreas} />
          </div>
        </div>
      </section>
      <EventGrid limit={6} />
      <CTASection />
    </>
  );
}
