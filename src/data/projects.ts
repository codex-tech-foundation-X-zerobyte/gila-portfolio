import type { Project } from "@/types";

/**
 * Add new projects by pushing another object into this array — the
 * ProjectCard component and detail view render automatically from it.
 */
export const projects: Project[] = [
  {
    name: "Codex Dev Platform",
    shortDescription:
      "A developer-focused platform providing tools, APIs, project management, API key management, usage monitoring, and documentation through a centralized workspace.",
    detailedDescription:
      "Codex Developer Platform is a centralized developer ecosystem designed to provide developers with the tools, services, and infrastructure they need to build, manage, test, and integrate modern software applications and APIs.\n\nThe platform brings essential developer functionality into one workspace, including account management, project management, API key generation and management, developer tools, API exploration, usage monitoring, activity tracking, documentation, and access to Codex-powered services, instead of requiring developers to work across multiple disconnected systems.\n\nDevelopers can create and manage projects, generate API credentials, explore available APIs, monitor usage and activity, and access technical documentation to understand how different services can be integrated into their applications.\n\nThe system also includes administrative functionality for managing users, monitoring platform activity, overseeing developer services, and maintaining the overall platform ecosystem, with authentication, authorization, API key management, and controlled access to administrative functionality built into the architecture.\n\nThe platform is built using modern web technologies with a scalable backend architecture, making it suitable for continued expansion as additional APIs, developer services, tools, and integrations are introduced.",
    type: "Web App",
    technologies: ["React", "TypeScript", "Supabase"],
    role: "Frontend Developer",
    features: [
      {
        title: "API Management & Developer Tools",
        description:
          "Create and manage API keys, explore APIs, test endpoints, and integrate Codex services into applications.",
      },
      {
        title: "Projects & Developer Workspace",
        description:
          "Create and manage projects from a centralized dashboard while keeping development resources and configurations organized.",
      },
      {
        title: "Usage & Activity Monitoring",
        description:
          "Track API usage, platform activity, and service consumption through centralized dashboards and analytics.",
      },
    ],
    liveUrl: "", // [LIVE URL]
    githubUrl: "https://github.com/abanggila1004-tech",
    image: "codex.jpeg", // [PROJECT IMAGE] — add a screenshot to /public and reference it here
    status: "In Progress",
  },
  // Add your next project here, following the same shape.
];
