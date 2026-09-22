import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EventCard } from "@/components/events/EventCard";
import { events, type Event } from "@/content/events";

function previewEvents(): Event[] {
  // Show upcoming first, then most recent past events — max 3 total.
  const upcoming = events
    .filter((e) => e.status === "upcoming" || e.status === "ongoing")
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  if (upcoming.length >= 3) return upcoming.slice(0, 3);

  const past = events
    .filter((e) => e.status === "past")
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return [...upcoming, ...past].slice(0, 3);
}

export function EventsPreview() {
  const items = previewEvents();
  const hasEvents = items.length > 0;

  return (
    <section aria-label="Events preview" className="bg-paper-warm">
      <Container className="py-20 sm:py-28">
        <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-6">
          <Reveal>
            <SectionHeading
              kicker="Events"
              title="What's happening at μLearn GCEK"
              description="Workshops, hackathons, meetups, and learning sessions — see what's coming up."
            />
          </Reveal>
          <Reveal delay={120}>
            <Button variant="ghost" href="/events" className="shrink-0">
              All events
              <ArrowRight className="size-4" aria-hidden="true" />
            </Button>
          </Reveal>
        </div>

        {hasEvents ? (
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((event, i) => (
              <Reveal key={event.slug} delay={(i % 3) * 60} className="h-full">
                <EventCard event={event} />
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal delay={150}>
            <div className="relative mt-12 rounded-2xl border border-ink/5 bg-paper-soft px-6 py-14 text-center sm:py-20">
              <div className="flex flex-col items-center gap-5">
                <div
                  aria-hidden="true"
                  className="flex size-16 items-center justify-center rounded-2xl bg-brand-50 font-display text-2xl font-bold text-brand-600"
                >
                  μ
                </div>
                <h3 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                  Events coming soon
                </h3>
                <p className="max-w-sm text-sm leading-relaxed text-ink-soft">
                  Workshops, meetups, and learning sessions will appear here as
                  they are announced.
                </p>
                <Button variant="secondary" href="/events" size="sm" className="mt-1">
                  View events
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Button>
              </div>
            </div>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
