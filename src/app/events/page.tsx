import type { Metadata } from "next";
import { Calendar } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { MuLearn } from "@/components/brand/MuLearn";
import { Reveal } from "@/components/ui/Reveal";
import { EventCard } from "@/components/events/EventCard";
import { events, type Event } from "@/content/events";
import { JoinCTA } from "@/components/home/JoinCTA";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Workshops, hackathons, meetups, and learning sessions at μLearn GCEK — Government College of Engineering, Kannur.",
};

function upcomingEvents(): Event[] {
  return events
    .filter((e) => e.status === "upcoming" || e.status === "ongoing")
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}

function pastEvents(): Event[] {
  return events
    .filter((e) => e.status === "past")
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export default function EventsPage() {
  const upcoming = upcomingEvents();
  const past = pastEvents();
  const hasEvents = upcoming.length + past.length > 0;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-brand-50 opacity-60 blur-3xl"
        />

        <Container className="relative pt-16 sm:pt-24 lg:pt-32">
          <Reveal>
            <p className="mb-6 text-sm font-medium text-brand-600">
              <MuLearn /> GCEK
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="max-w-4xl font-display text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-tight text-ink">
              What&apos;s happening at{" "}
              <span className="text-brand-600">μLearn GCEK</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
              Workshops, hackathons, meetups, and learning sessions — the events
              that bring the chapter together.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Events content */}
      <Container className="pb-20 pt-10 sm:pb-28 sm:pt-14">
        {!hasEvents ? (
          /* Empty state */
          <Reveal delay={200}>
            <div className="flex flex-col items-center gap-6 rounded-2xl border border-ink/5 bg-paper-soft px-6 py-20 text-center sm:py-28">
              <div
                aria-hidden="true"
                className="flex size-16 items-center justify-center rounded-2xl bg-brand-50"
              >
                <Calendar className="size-7 text-brand-500" />
              </div>
              <div className="max-w-md">
                <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                  No events yet
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  Events, workshops, and sessions will be listed here as they
                  are announced. Check back soon or join the community to stay
                  updated.
                </p>
              </div>
            </div>
          </Reveal>
        ) : (
          <>
            {/* Upcoming events */}
            {upcoming.length > 0 && (
              <section aria-label="Upcoming events">
                <Reveal>
                  <div className="flex items-end justify-between gap-6">
                    <div>
                      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-brand-600">
                        Coming up
                      </p>
                      <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                        Upcoming events
                      </h2>
                    </div>
                  </div>
                </Reveal>

                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                  {upcoming.map((event, i) => (
                    <Reveal key={event.slug} delay={(i % 2) * 60}>
                      <EventCard event={event} />
                    </Reveal>
                  ))}
                </div>
              </section>
            )}

            {/* Past events */}
            {past.length > 0 && (
              <section aria-label="Past events" className="mt-16 sm:mt-24">
                <Reveal>
                  <div className="flex items-end justify-between gap-6">
                    <div>
                      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-ink-muted">
                        Archive
                      </p>
                      <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                        Past events
                      </h2>
                    </div>
                  </div>
                </Reveal>

                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                  {past.map((event, i) => (
                    <Reveal key={event.slug} delay={(i % 2) * 60}>
                      <EventCard event={event} />
                    </Reveal>
                  ))}
                </div>
              </section>
            )}
          </>
        )}
      </Container>

      <JoinCTA />
    </>
  );
}
