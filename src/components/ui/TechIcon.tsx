import {
  Accessibility,
  Atom,
  Braces,
  Code2,
  GitBranch,
  Github,
  Monitor,
  Palette,
  Shield,
  Terminal,
  type LucideIcon,
} from "lucide-react";

/**
 * Maps a technology's `icon` key (see src/data/technologies.ts) to a
 * lucide-react icon component. Add a new mapping here when you add a new
 * technology with a new icon key.
 */
const iconMap: Record<string, LucideIcon> = {
  html5: Code2,
  css3: Palette,
  javascript: Braces,
  react: Atom,
  git: GitBranch,
  github: Github,
  vscode: Terminal,
  shield: Shield,
  monitor: Monitor,
  accessibility: Accessibility,
};

export function TechIcon({ icon, className = "" }: { icon: string; className?: string }) {
  const Icon = iconMap[icon] ?? Code2;
  return <Icon className={className} aria-hidden="true" />;
}
