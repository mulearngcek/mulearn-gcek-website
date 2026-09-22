// About page content. Structured as small sections so the page stays scannable.

export interface StorySection {
  heading: string;
  /** Paragraphs, in order. Keep each short — walls of text kill momentum. */
  paragraphs: string[];
}

export interface ExplainerStep {
  title: string;
  description: string;
}

export interface EcosystemTerm {
  term: string;
  definition: string;
}

export interface Credit {
  role: string;
  name: string;
}

export const storySections: StorySection[] = [
  {
    heading: "What is μLearn?",
    paragraphs: [
      "μLearn is an open, community-driven learning movement that began in Kerala and has grown into a network of thousands of students, mentors, and makers. Its premise is simple: people learn best together, in circles rather than in silos.",
      "Instead of passive courses, μLearn runs on learning circles, interest groups, structured roadmaps, and karma — a points system that turns effort into visible proof of work.",
    ],
  },
  {
    heading: "What is μLearn GCEK?",
    paragraphs: [
      "μLearn GCEK is the μLearn campus chapter at Government College of Engineering, Kannur. We exist to bring that peer-learning culture to our own campus — connecting students who want to learn, build, and grow beyond the classroom.",
      "The chapter is student-run. Sessions are hands-on, help is normal, and nobody learns alone unless they want to.",
    ],
  },
  {
    heading: "Why we exist",
    paragraphs: [
      "College gives you a syllabus; it doesn't always give you direction, feedback, or company on the road. The chapter fills that gap — a place to find study partners, get unstuck, showcase your work, and build the habits that make engineers employable.",
    ],
  },
];

// The μLearn vocabulary students actually use day-to-day.
export const ecosystemTerms: EcosystemTerm[] = [
  {
    term: "Learning Circle",
    definition:
      "A small peer group that meets regularly to learn one skill together — questions welcome, egos optional.",
  },
  {
    term: "Interest Group",
    definition:
      "μLearn's domain-wide communities — web, AI, design, cybersecurity and more — that connect campuses across Kerala.",
  },
  {
    term: "Karma Points",
    definition:
      "Earned by completing tasks and helping others. Visible proof that you show up and do the work.",
  },
  {
    term: "Proof of Work",
    definition:
      "Repos, demos, portfolios — growth you can show an interviewer instead of just claiming it.",
  },
];

// How peer-to-peer learning works here — shown as a numbered visual flow.
export const explainerSteps: ExplainerStep[] = [
  {
    title: "Pick a circle",
    description:
      "Join a small learning circle around a skill you care about — or start one yourself.",
  },
  {
    title: "Learn by doing",
    description:
      "Follow shared goals and roadmaps, build real things, and show your work to the circle.",
  },
  {
    title: "Share it forward",
    description:
      "Teach what you just learned. Explaining it cements it — and pulls the next person up.",
  },
  {
    title: "Grow together",
    description:
      "Earn karma for real contributions and carry a portfolio of proof beyond campus.",
  },
];

export const whyJoin: ExplainerStep[] = [
  {
    title: "You won't learn alone",
    description:
      "Stuck at 11pm before a deadline? Someone in the community has been there and will help you through it.",
  },
  {
    title: "You'll build proof, not just notes",
    description:
      "Projects, sessions, and challenges give you a portfolio that says more than marks ever could.",
  },
  {
    title: "You'll find your direction",
    description:
      "Mentors, interest groups, and peers help you figure out what you actually enjoy doing.",
  },
  {
    title: "It costs nothing but effort",
    description:
      "μLearn is free and open. Show up curious and the rest follows.",
  },
];

// PLACEHOLDER: add real names/roles when provided (e.g., Campus Lead, Faculty Enabler).
// Rendered only when non-empty.
export const credits: Credit[] = [];

// PLACEHOLDER: set the chapter's founding year when confirmed. Rendered only when set.
export const foundedYear: number | null = null;
