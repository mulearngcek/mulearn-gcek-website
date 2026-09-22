// Team content. Photos live in public/images/team/ (convention: first-last.jpg).
// Members render with initials blocks until photos/socials are added — no UI changes needed.
//
// Historical note: this file always describes the CURRENT Executive Committee.
// When a new committee takes over, move the outgoing roster to an archive module
// (e.g. src/content/team-2025-26.ts following this file's shape) rather than
// deleting it, so past committees stay on record.

export interface TeamGroup {
  id: string;
  label: string;
  description: string;
  /** Lower renders first on the page. */
  order: number;
}

export type SocialKey = "linkedin" | "github" | "instagram";

export interface TeamMember {
  name: string;
  role: string;
  /** Must match a TeamGroup id. */
  group: string;
  /**
   * Primary domain for catalog-style listings (used by interest-group leads,
   * whose official title reads "<domain> <role>").
   */
  domain?: string;
  /** Path under /images/team/, e.g. "first-last.jpg". Falls back to initials block. */
  photo?: string;
  socials?: Partial<Record<SocialKey, string>>;
}

export const teamGroups: TeamGroup[] = [
  {
    id: "core",
    label: "Core Team",
    description: "Leads and runs the chapter.",
    order: 1,
  },
  {
    id: "creative",
    label: "Creative & Media Team",
    description: "Makes the chapter look, read, and sound good.",
    order: 2,
  },
  {
    id: "ig",
    label: "Interest Group Leads",
    description: "Domain champions who run interest-group circles.",
    order: 3,
  },
];

export const teamMembers: TeamMember[] = [
  // — Core Team ———————————————————————————————
  { name: "Sajith B", role: "Lead Enabler", group: "core" },
  { name: "Mohamed Aagib", role: "Campus Lead", group: "core" },
  { name: "Karthik S", role: "Campus Co Lead", group: "core" },
  { name: "Hari Narayanan", role: "Tech Lead", group: "core" },

  // — Creative & Media Team ————————————————————
  { name: "Devika Krishnan KV", role: "Creative Lead", group: "creative" },
  { name: "Jeevan PS", role: "Media Lead", group: "creative" },
  { name: "Muhammed Safwan KP", role: "Social Media Coordinator", group: "creative" },
  { name: "Sooryadath P K", role: "Design Lead", group: "creative" },
  { name: "Sayana U V", role: "Design Co Lead", group: "creative" },
  { name: "Dyuthi K", role: "Content Lead", group: "creative" },
  { name: "Malavika Suresh", role: "Content Co Lead", group: "creative" },

  // — Interest Group Leads —————————————————————
  { name: "Anandhu O P", role: "IG Lead", domain: "Product Management", group: "ig" },
  { name: "Fathima Fidha K A", role: "IG Lead", domain: "Cybersecurity", group: "ig" },
  { name: "Abhinav C", role: "IG Lead", domain: "Flutter", group: "ig" },
  { name: "Aghila R Nair", role: "IG Lead", domain: "IoT", group: "ig" },
  { name: "Soorya Dev", role: "IG Lead", domain: "Blockchain", group: "ig" },
  { name: "Vishnujith A", role: "IG Lead", domain: "WebDev", group: "ig" },
];

export function initialsOf(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");
}
