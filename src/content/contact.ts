// Contact channels. Everything derives from `links` in site.ts — fill a value
// there and its row switches from pending to live. Nothing is invented here:
// pending channels stay visible but quiet until real destinations exist.

import { links, siteConfig } from "./site";

export interface ContactChannel {
  id: string;
  label: string;
  status: "active" | "pending";
  /** Destination for clickable channels (mailto:, https://, campus maps…). */
  href?: string;
  /** Plain display value for informational channels. */
  value?: string;
  /** Opens in a new tab. */
  external?: boolean;
}

export const contactChannels: ContactChannel[] = [
  {
    id: "campus",
    label: "On campus",
    status: "active",
    value: siteConfig.college,
  },
  {
    id: "platform",
    label: "μLearn platform",
    status: "active",
    value: "mulearn.org",
    href: links.mulearn,
    external: true,
  },
  links.email
    ? {
        id: "email",
        label: "Email",
        status: "active",
        value: links.email,
        href: `mailto:${links.email}`,
      }
    : { id: "email", label: "Email", status: "pending" },
  links.community
    ? {
        id: "community",
        label: "Community group",
        status: "active",
        href: links.community,
        external: true,
      }
    : { id: "community", label: "Community group", status: "pending" },
  links.instagram
    ? {
        id: "instagram",
        label: "Instagram",
        status: "active",
        href: links.instagram,
        external: true,
      }
    : { id: "instagram", label: "Instagram", status: "pending" },
  links.linkedin
    ? {
        id: "linkedin",
        label: "LinkedIn",
        status: "active",
        href: links.linkedin,
        external: true,
      }
    : { id: "linkedin", label: "LinkedIn", status: "pending" },
];
