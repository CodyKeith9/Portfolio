export type ProjectLink = { label: "Live" | "GitHub" | "Case Study"; href: string };

export type Project = {
  slug: string;
  title: string;
  summary: string;
  stack: string[];
  highlights: string[];
  links: ProjectLink[];
  status?: "Live" | "In Progress" | "Prototype";
};

export const projects: Project[] = [
  {
    slug: "project-plato",
    title: "Project Plato",
    summary: "Modern web platform work with TypeScript-first implementation and production constraints.",
    stack: ["TypeScript", "React/Next.js", "APIs", "UI Engineering"],
    highlights: [
      "Implemented TypeScript-safe flows and component structure",
      "Focused on maintainability and readable UI patterns",
      "Built with real-world constraints and iterative delivery",
    ],
    links: [
      // Replace with real URLs
      { label: "GitHub", href: "https://github.com/CodyKeith9" },
    ],
    status: "In Progress",
  },
  {
    slug: "eonveil",
    title: "Eonveil",
    summary: "Real-time multiplayer web experience with rooms + chat and live deployment.",
    stack: ["React", "TypeScript", "Node.js", "Socket.IO", "Render"],
    highlights: [
      "Built real-time rooms and synced chat",
      "Validated multi-user behavior through external testing",
      "Deployed and iterated based on player feedback",
    ],
    links: [
      { label: "Live", href: "https://eonveil-frontend.onrender.com" },
      { label: "GitHub", href: "https://github.com/CodyKeith9" },
    ],
    status: "Live",
  },
  {
    slug: "mystyleimpact",
    title: "MyStyleImpact",
    summary: "Client-facing site build emphasizing layout craft, content structure, and fast iteration.",
    stack: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    highlights: [
      "Shipped clean sections and conversion-focused layout",
      "Implemented mobile-first responsive structure",
      "Optimized readability and visual hierarchy",
    ],
    links: [
      // Replace with real URLs when ready
      { label: "Live", href: "https://style-impact.onrender.com/index.html" },
    ],
    status: "In Progress",
  },
  {
    slug: "hollow-forge",
    title: "Hollow Forge",
    summary: "Personal brand site and deployment pipeline work with clean static build practices.",
    stack: ["Vite", "React", "Deploy Pipeline", "CSS"],
    highlights: [
      "Structured project for repeatable deploys",
      "Implemented build + publish workflow discipline",
      "Focused on brand presentation and clarity",
    ],
    links: [
      { label: "Live", href: "https://hollow-foundry-tn.onrender.com/" },
    ],
    status: "Prototype",
  },
  {
    slug: "communyti",
    title: "Communyti",
    summary: "Reciprocal currency platform work involving web UI and API-driven integration concepts.",
    stack: ["JavaScript", "APIs", "HTML", "CSS", "Systems Thinking"],
    highlights: [
      "Owned web-facing implementation work and integration planning",
      "Worked within a complex platform environment (Cyclos context)",
      "Applied systems thinking to real constraints and workflows",
    ],
    links: [
      { label: "Case Study", href: "https://communyti-1.onrender.com/" },
    ],
    status: "In Progress",
  },
  {
    slug: "giphy-search",
    title: "Giphy Search",
    summary: "API-driven search UI with responsive grid results and client-side rendering.",
    stack: ["JavaScript", "Fetch API", "HTML", "CSS Grid"],
    highlights: [
      "Implemented keyword search + results rendering",
      "Built responsive layout for desktop/mobile",
      "Practiced clean DOM updates and UX feedback",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/CodyKeith9" },
    ],
    status: "Prototype",
  },
];
