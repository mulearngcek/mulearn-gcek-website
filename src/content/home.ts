// Home page content. All copy here is safe to edit without touching components.

export type IconName =
  | "users"
  | "compass"
  | "wrench"
  | "hammer"
  | "graduation-cap"
  | "sparkles";

export interface ValueProp {
  title: string;
  description: string;
}

export interface WhatWeDoItem {
  title: string;
  description: string;
  icon: IconName;
}

export interface Stat {
  value: string;
  label: string;
}

export const heroContent = {
  eyebrow: "Government College of Engineering, Kannur",
  // Primary headline — "together" words get gradient treatment in the Hero component.
  titleLines: ["Learn together.", "Build together."],
  description:
    "We are the campus chapter of μLearn at GCEK — a student community that learns by doing, shares what it knows, and builds things together.",
} as const;

export const valueProps: ValueProp[] = [
  {
    title: "Peer learning",
    description:
      "Learn alongside people at your own level — no gatekeeping, no waiting for permission to start.",
  },
  {
    title: "Learning by doing",
    description:
      "Skills stick when you use them. We build, break, fix, and ship — together.",
  },
  {
    title: "Community first",
    description:
      "Everyone has something to teach and something to learn. Knowledge moves in every direction.",
  },
];

export const whatWeDo: WhatWeDoItem[] = [
  {
    title: "Learning Circles",
    description:
      "Small groups that meet regularly to learn a skill together and keep each other accountable.",
    icon: "users",
  },
  {
    title: "Interest Groups",
    description:
      "Find your people — web, AI, design, cybersecurity, and more — inside μLearn's wider Interest Groups.",
    icon: "compass",
  },
  {
    title: "Hands-on Workshops",
    description:
      "Practical sessions run by students, for students — from first line of code to first deploy.",
    icon: "wrench",
  },
  {
    title: "Project Teams",
    description:
      "Team up on real projects, build a portfolio, and learn how real software gets made.",
    icon: "hammer",
  },
  {
    title: "Mentorship Access",
    description:
      "Connect with mentors ahead of you through the larger μLearn network.",
    icon: "graduation-cap",
  },
  {
    title: "Community Activities",
    description:
      "Sessions, challenges, and moments that make learning social instead of lonely.",
    icon: "sparkles",
  },
];

// PLACEHOLDER: add real numbers once verified (members, sessions held, projects shipped…).
// The Home page renders this strip only when entries exist.
export const stats: Stat[] = [];
