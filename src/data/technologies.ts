import type { Technology } from "@/types";

/**
 * Technology stack shown as a compact grid. `icon` maps to a lucide-react
 * icon name in components/ui/TechIcon.tsx — add a mapping there if you
 * introduce a new icon key.
 */
export const technologies: Technology[] = [
  { name: "HTML5", level: "Intermediate", icon: "html5" },
  { name: "CSS3", level: "Intermediate", icon: "css3" },
  { name: "JavaScript", level: "Intermediate", icon: "javascript" },
  { name: "React", level: "Learning", icon: "react" },
  { name: "Git", level: "Intermediate", icon: "git" },
  { name: "GitHub", level: "Intermediate", icon: "github" },
  { name: "Visual Studio Code", level: "Intermediate", icon: "vscode" },
  { name: "Cybersecurity Fundamentals", level: "Learning", icon: "shield" },
  { name: "Responsive Web Design", level: "Intermediate", icon: "monitor" },
  { name: "Web Accessibility", level: "Learning", icon: "accessibility" },
];
