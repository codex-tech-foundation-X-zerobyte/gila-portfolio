import {
  Github,
  Linkedin,
  Twitter,
  Link2,
  type LucideIcon,
} from "lucide-react";
import type { SocialLinks } from "@/types";

const labels: Record<keyof SocialLinks, string> = {
  github: "GitHub",
  linkedin: "LinkedIn",
  twitter: "X (Twitter)",
  devto: "Dev.to",
  hashnode: "Hashnode",
  fiverr: "Fiverr",
  upwork: "Upwork",
  freelancer: "Freelancer",
  other: "Website",
};

const icons: Partial<Record<keyof SocialLinks, LucideIcon>> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
};

interface SocialIconsProps {
  links: SocialLinks;
  className?: string;
}

export function SocialIcons({ links, className = "" }: SocialIconsProps) {
  const entries = (Object.keys(labels) as (keyof SocialLinks)[]).filter(
    (key) => links[key]
  );

  if (entries.length === 0) return null;

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {entries.map((key) => {
        const Icon = icons[key] ?? Link2;
        return (
          <a
            key={key}
            href={links[key]}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={labels[key]}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-surface text-muted transition-colors duration-150 hover:border-accent hover:text-accent"
          >
            <Icon className="h-4 w-4" aria-hidden="true" />
          </a>
        );
      })}
    </div>
  );
}
