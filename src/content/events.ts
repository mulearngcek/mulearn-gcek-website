// Events content. Photos live in public/images/events/ (convention: event-slug.jpg).
// Add new events by appending to the `events` array — no UI changes needed.
//
// Important: Do NOT invent event data. Only add events with real information.
// Leave fields empty or omit them rather than making up placeholder data.

export type EventStatus = "upcoming" | "ongoing" | "past";

export type EventCategory =
  | "workshop"
  | "hackathon"
  | "meetup"
  | "learning-circle"
  | "competition"
  | "session"
  | "campus-activity"
  | "community";

export interface Event {
  /** URL-safe slug, e.g. "git-basics-workshop". */
  slug: string;
  title: string;
  description: string;
  /** ISO date string, e.g. "2026-03-15". */
  date: string;
  /** Display time, e.g. "2:00 PM – 4:30 PM". */
  time?: string;
  /** Physical or online venue. */
  venue?: string;
  category: EventCategory;
  status: EventStatus;
  /** Path under /images/events/, e.g. "git-basics.jpg". Falls back to a tasteful placeholder. */
  image?: string;
  alt?: string;
  /** External link for registration, details, etc. */
  link?: string;
  /** Label for the link button, e.g. "Register", "View details". */
  linkLabel?: string;
}

// ---------------------------------------------------------------------------
// Events data
// ---------------------------------------------------------------------------
// PLACEHOLDER: add real μLearn GCEK events when information is provided.
//
// Example entry:
// {
//   slug: "git-basics-workshop",
//   title: "Git Basics Workshop",
//   description: "A hands-on session covering Git fundamentals — branching, merging, and collaborative workflows.",
//   date: "2026-03-15",
//   time: "2:00 PM – 4:30 PM",
//   venue: "Seminar Hall, GCEK",
//   category: "workshop",
//   status: "past",
//   image: "git-basics.jpg",
//   alt: "Students working on laptops during the Git Basics workshop",
// },
export const events: Event[] = [];
