// Global site config: identity, navigation, and every external link.
// All URLs live here so they can be swapped without touching components.

export const siteConfig = {
  name: "μLearn GCEK",
  college: "Government College of Engineering, Kannur",
  tagline: "Learn together. Build together.",
  description:
    "μLearn GCEK is the μLearn campus chapter at Government College of Engineering, Kannur — a student community that learns by doing and builds together.",
} as const;

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Events", href: "/events" },
  { label: "Gallery", href: "/gallery" },
  { label: "Our Team", href: "/team" },
  { label: "Contact", href: "/contact" },
] as const;

export const links = {
  // PLACEHOLDER: replace with the chapter's official join link when provided.
  joinUrl: "",
  mulearn: "https://mulearn.org",
  // PLACEHOLDER socials — fill in when real channels are provided.
  email: "",
  instagram: "",
  linkedin: "",
  community: "", // WhatsApp / Discord invite
};
