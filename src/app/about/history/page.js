import ScrollReveal from "../../../../components/common/ScrollReveal";
import CTASection from "../../../../components/common/CTASection";
import PageHero from "../../../../components/common/PageHero";

export const metadata = { title: "Our History" };

const milestones = [
  {
    year: "2000",
    text: "Foundation laid on a 25-acre stretch outside Sathyamangalam, envisioned as a hive for knowledge seekers.",
  },
  {
    year: "5 Jul 2001",
    text: "Formally declared open to the world by Thavathiru Santhalinga Ramasamy Adigalar.",
  },
  {
    year: "2001 – 2010",
    text: "Core Arts and Science programmes established; academic blocks and laboratories built.",
  },
  {
    year: "2010 – 2018",
    text: "Expansion into Computer Science, Commerce and Business Administration programmes.",
  },
  {
    year: "2018 – Present",
    text: "Growth of PG and Research departments, stronger industry partnerships and placement outcomes.",
  },
];

export default function HistoryPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Our History"
        subtitle="A journey from a green 25-acre campus to a growing centre of academic excellence."
        breadcrumbs={[
          { label: "About Us", href: "/about" },
          { label: "Our History" },
        ]}
      />
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <ScrollReveal className="flex flex-col gap-4 text-[15px] leading-relaxed text-muted">
            <p>
              Kaamadhenu Arts and Science College is an institution of repute
              located on the outskirts of Sathyamangalam on the
              Erode-Sathyamangalam (Bungalowpudhur) stretch. Blessed with a
              salubrious climate and nestled in the luxuriance of greenery, the
              institution acts as a hive for all the knowledge seekers from
              different parts of the nation.
            </p>
            <p>
              It was an initiation that fructified into buildings in a year and
              was declared open to the world by Thavathiru Santhalinga Ramasamy
              Adigalar on 5th July 2001.
            </p>
          </ScrollReveal>

          <div className="mt-14 flex flex-col">
            {milestones.map((m, i) => (
              <ScrollReveal
                key={m.year}
                delay={i * 0.06}
                className="relative flex gap-6 pb-10 last:pb-0"
              >
                <div className="flex flex-col items-center">
                  <span className="flex h-3 w-3 shrink-0 rounded-full bg-gold" />
                  {i !== milestones.length - 1 && (
                    <span className="mt-1 w-px flex-1 bg-hairline" />
                  )}
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-navy">
                    {m.year}
                  </p>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">
                    {m.text}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
