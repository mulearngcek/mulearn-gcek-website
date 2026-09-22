import Image from "next/image";
import { Calendar, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";
import type { Event } from "@/content/events";

function formatDate(iso: string): { day: string; month: string; year: string } {
  const d = new Date(iso + "T00:00:00");
  return {
    day: d.toLocaleDateString("en-IN", { day: "numeric" }),
    month: d.toLocaleDateString("en-IN", { month: "short" }),
    year: d.toLocaleDateString("en-IN", { year: "numeric" }),
  };
}

function statusLabel(status: Event["status"]): {
  label: string;
  variant: "brand" | "neutral" | "hi";
} {
  switch (status) {
    case "upcoming":
      return { label: "Upcoming", variant: "brand" };
    case "ongoing":
      return { label: "Happening now", variant: "hi" };
    case "past":
      return { label: "Past", variant: "neutral" };
  }
}

function categoryLabel(cat: Event["category"]): string {
  const map: Record<Event["category"], string> = {
    workshop: "Workshop",
    hackathon: "Hackathon",
    meetup: "Meetup",
    "learning-circle": "Learning Circle",
    competition: "Competition",
    session: "Session",
    "campus-activity": "Campus Activity",
    community: "Community",
  };
  return map[cat];
}

type EventCardProps = {
  event: Event;
};

export function EventCard({ event }: EventCardProps) {
  const { day, month, year } = formatDate(event.date);
  const status = statusLabel(event.status);
  const isPast = event.status === "past";
  const hasImage = Boolean(event.image);

  return (
    <div
      className={cn(
        "group relative flex h-full overflow-hidden rounded-2xl border border-ink/5 bg-white transition-all duration-200 ease-out-soft",
        hasImage ? "flex-col" : "flex-row",
        !isPast && "hover:shadow-lift hover:-translate-y-0.5",
        isPast && "opacity-80 hover:opacity-100",
      )}
    >
      {/* Image / Fallback */}
      {hasImage ? (
        <div className="relative aspect-[16/10] w-full overflow-hidden sm:aspect-[16/9]">
          <Image
            src={`/images/events/${event.image!}`}
            alt={event.alt || event.title}
            fill
            sizes="(min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-300 ease-out-soft group-hover:scale-[1.02] motion-reduce:transition-none"
          />
          {/* Status badge overlay */}
          <div className="absolute left-4 top-4">
            <Badge variant={status.variant}>{status.label}</Badge>
          </div>
        </div>
      ) : (
        <div className="relative flex w-full items-center gap-5 p-5 sm:p-6">
          {/* Date block */}
          <div className="flex shrink-0 flex-col items-center justify-center rounded-xl bg-brand-50 px-3 py-2.5 text-center leading-none">
            <span className="text-2xl font-bold text-brand-600">{day}</span>
            <span className="mt-0.5 text-xs font-semibold uppercase text-brand-500">
              {month}
            </span>
            <span className="text-[10px] text-brand-400">{year}</span>
          </div>
          <div className="flex-1 min-w-0">
            <Badge variant={status.variant} className="mb-2">
              {status.label}
            </Badge>
            <h3 className="font-display text-lg font-bold leading-snug tracking-tight text-ink line-clamp-2">
              {event.title}
            </h3>
            <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-ink-soft">
              {event.description}
            </p>
          </div>
          {/* Arrow */}
          {!isPast && event.link && (
            <div className="hidden shrink-0 sm:flex size-9 items-center justify-center rounded-full bg-brand-50 text-brand-500 transition-colors group-hover:bg-brand-600 group-hover:text-white">
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </div>
          )}
        </div>
      )}

      {/* Text content below image (image variant) */}
      {hasImage && (
        <div className="flex w-full flex-col gap-2 p-5 sm:p-6">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="neutral">{categoryLabel(event.category)}</Badge>
          </div>

          <h3 className="font-display text-lg font-bold leading-snug tracking-tight text-ink line-clamp-2">
            {event.title}
          </h3>

          <p className="line-clamp-2 text-sm leading-relaxed text-ink-soft">
            {event.description}
          </p>

          {/* Meta */}
          <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-1.5 pt-2 text-xs text-ink-muted">
            <span className="inline-flex items-center gap-1">
              <Calendar className="size-3.5" aria-hidden="true" />
              {month} {day}, {year}
            </span>
            {event.time && (
              <span className="inline-flex items-center gap-1">
                <Clock className="size-3.5" aria-hidden="true" />
                {event.time}
              </span>
            )}
            {event.venue && (
              <span className="inline-flex items-center gap-1">
                <MapPin className="size-3.5" aria-hidden="true" />
                {event.venue}
              </span>
            )}
          </div>

          {/* Link */}
          {event.link && (
            <a
              href={event.link}
              target="_blank"
              rel="noreferrer"
              className={cn(
                "mt-3 inline-flex items-center gap-1.5 self-start rounded-full px-4 py-1.5 text-xs font-medium transition-all duration-200 outline-offset-2 outline-brand-600 focus-visible:outline-2",
                isPast
                  ? "border border-ink/10 bg-white text-ink-soft hover:text-ink"
                  : "bg-brand-600 text-white hover:bg-brand-700",
              )}
            >
              {event.linkLabel || "View details"}
              <ArrowUpRight className="size-3" aria-hidden="true" />
            </a>
          )}
        </div>
      )}
    </div>
  );
}
