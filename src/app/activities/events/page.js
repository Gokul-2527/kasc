import Image from "next/image";
import PageHero from "../../../../components/common/PageHero";
import { events } from "../../../../data/events";
import CTASection from "../../../../components/common/CTASection";

export const metadata = { title: "Events" };

export default function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Activities"
        title="Campus Events"
        subtitle="A full record of the seminars, workshops and celebrations shaping student life."
        breadcrumbs={[
          { label: "Activities", href: "/activities" },
          { label: "Events" },
        ]}
      />
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex flex-col gap-6">
            {events.map((event) => (
              <div
                key={event.id}
                className="group flex flex-col gap-5 rounded-3xl border border-hairline bg-white p-5 transition hover:shadow-xl hover:shadow-navy/10 sm:flex-row sm:items-center"
              >
                <div className="relative h-48 w-full shrink-0 overflow-hidden rounded-2xl sm:h-32 sm:w-48">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    sizes="200px"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-bg-soft px-3 py-1 text-[11px] font-semibold text-navy">
                      {event.category}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wide text-gold">
                      {event.date}
                    </span>
                  </div>
                  <h3 className="font-display mt-2 text-lg font-semibold text-[var(--color-text)]">
                    {event.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
