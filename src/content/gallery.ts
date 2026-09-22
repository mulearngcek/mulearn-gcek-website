// Gallery content. Photos live in public/images/gallery/<category>/.
// Keep alt text descriptive — it's read aloud by screen readers and shown in the lightbox.

export const galleryCategories = [
  { id: "workshops", label: "Workshops" },
  { id: "sessions", label: "Sessions" },
  { id: "activities", label: "Activities" },
  { id: "posters", label: "Posters & Designs" },
  { id: "achievements", label: "Achievements" },
] as const;

export type GalleryCategoryId = (typeof galleryCategories)[number]["id"];

export interface GalleryItem {
  /** Path under /images/gallery/, e.g. "workshops/git-basics-01.jpg". */
  src: string;
  alt: string;
  category: GalleryCategoryId;
  /** Optional display date, e.g. "Jan 2026". */
  date?: string;
  caption?: string;
}

// PLACEHOLDER: add real μLearn GCEK photos when provided.
//
// Example entry:
// {
//   src: "workshops/git-basics-01.jpg",
//   alt: "Students pairing on Git exercises during the Git Basics workshop",
//   category: "workshops",
//   date: "Feb 2026",
//   caption: "Git Basics workshop",
// },
export const galleryItems: GalleryItem[] = [];
