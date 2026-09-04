"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import EventCard from "./EventCard";
import { events } from "../../data/events";

export default function EventGrid({ limit }) {
  const list = limit ? events.slice(0, limit) : events;

  return (
    <section className="bg-bg-soft py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Campus Life"
            title="Campus Life & Events"
            subtitle="A glimpse into the seminars, workshops and celebrations that shape student life at KASC."
          />
          <Link
            href="/activities/events"
            className="group hidden shrink-0 items-center gap-2 rounded-full border border-navy px-6 py-3 text-sm font-semibold text-navy transition hover:bg-navy hover:text-white sm:inline-flex"
          >
            View All Events
            <ArrowRight
              size={15}
              className="transition group-hover:translate-x-1"
            />
          </Link>
        </div>

        <div className="mt-12 -mx-6 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-4 scrollbar-thin">
          {list.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        <Link
          href="/activities/events"
          className="mt-8 flex items-center justify-center gap-2 rounded-full border border-navy px-6 py-3 text-sm font-semibold text-navy sm:hidden"
        >
          View All Events <ArrowRight size={15} />
        </Link>
      </div>
    </section>
  );
}
