# μLearn GCEK

Official website of **μLearn GCEK** — the μLearn campus chapter at **Government College of Engineering, Kannur (GCEK)**.

A student-driven technology community built around **learning, building, sharing, and collaboration**.

The website serves as the digital home of the μLearn GCEK community, showcasing its people, events, activities, projects, interest groups, and opportunities to get involved.

---

## ✦ What is μLearn GCEK?

μLearn GCEK is a student community where students learn by doing and grow together.

We bring students together through:

* **Interest Groups** — Learn and explore areas of technology
* **Workshops** — Hands-on technical learning
* **μBuild** — Build projects and turn ideas into reality
* **Hackathons & Competitions** — Learn through challenges
* **Community Events** — Connect, collaborate, and share
* **Open Source** — Contribute and learn in public

> **Learn something. Build something. Share it.**

---

## ✦ Website

The website is designed as a **Campus Technical Journal** — combining the feel of a modern technology publication with the energy of a student community.

It focuses on:

* Editorial-style layouts
* Strong typography
* Visual storytelling
* Real community photography
* Minimal and intentional UI
* Generous whitespace
* Responsive experiences
* Simple, meaningful interactions

Rather than functioning as a conventional college-club website, the site aims to tell the story of **students learning, building, and creating together**.

---

## 🛠 Tech Stack

| Technology          | Usage                        |
| ------------------- | ---------------------------- |
| **Next.js**         | React framework · App Router |
| **TypeScript**      | Type-safe development        |
| **Tailwind CSS v4** | Styling and design system    |
| **next/font**       | Font optimization            |
| **ESLint**          | Code quality and linting     |

### Fonts

* **Archivo** — Display / headings / body
* **JetBrains Mono** — Technical / metadata elements

---

## 📁 Project Structure

```text
src/
├── app/                    # Routes and pages
│   ├── page.tsx            # Home
│   ├── about/              # About μLearn GCEK
│   ├── events/             # Events
│   ├── gallery/            # Community gallery
│   ├── team/               # Team
│   └── contact/            # Contact
│
├── components/
│   ├── ui/                 # Reusable UI primitives
│   ├── layout/             # Header, footer, navigation
│   ├── brand/              # μLearn wordmark and logo
│   ├── home/               # Home page sections
│   ├── about/              # About page sections
│   ├── team/               # Team cards
│   ├── events/             # Event cards and previews
│   ├── gallery/            # Gallery archive and lightbox
│   └── contact/            # Contact sections
│
├── content/                # Content and site data
│   ├── site.ts             # Identity, navigation, links
│   ├── home.ts             # Home page copy
│   ├── about.ts            # About page copy
│   ├── team.ts             # Team members and groups
│   ├── events.ts           # Events
│   ├── gallery.ts          # Gallery items
│   └── contact.ts          # Contact channels
│
└── lib/                    # Shared utilities
```

### Content-first architecture

Content and presentation are intentionally separated.

Site information such as:

* Navigation
* Team members
* Gallery items
* Social links
* Events
* Page content

should live inside `src/content/` rather than being hardcoded directly into UI components.

This makes the website easier to maintain and update.

See [`src/content/README.md`](src/content/README.md) for the content editing guide.

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd mulearn-gcek-website
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## 📜 Available Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start development server |
| `npm run build` | Create production build  |
| `npm run start` | Start production server  |
| `npm run lint`  | Run ESLint               |

---

## 🎨 Design Principles

The website follows a few core principles:

### 01 — Content first

Content should drive the design, not the other way around.

### 02 — Less, but better

Avoid unnecessary UI, excessive cards, and visual clutter.

### 03 — Strong typography

Typography should establish hierarchy and personality.

### 04 — Real community

Prefer real students, events, projects, and campus moments over generic stock imagery.

### 05 — Build for the scroll

Pages should feel like a story rather than a collection of disconnected sections.

### 06 — Accessible by default

Maintain readable typography, sufficient contrast, keyboard accessibility, semantic HTML, and reduced-motion support.

### 07 — Responsive by design

The mobile experience should be intentionally designed rather than being a compressed desktop layout.

---

## 🤝 Contributing

This is a student-led community project.

Contributions, improvements, ideas, and feedback are welcome.

When contributing:

1. Keep components reusable.
2. Keep content inside `src/content/`.
3. Follow the existing design system.
4. Avoid unnecessary dependencies.
5. Test responsive layouts.
6. Run lint and production build before submitting changes.

```bash
npm run lint
npm run build
```

See [`AGENTS.md`](AGENTS.md) for the full contributor and AI-agent guide.

---

## 🌐 μLearn GCEK

**μLearn GCEK**
Government College of Engineering, Kannur

**Learn · Build · Share**

---
