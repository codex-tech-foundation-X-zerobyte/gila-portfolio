import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@/types";
import { Badge } from "./Badge";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-lg border border-border bg-surface transition-colors duration-150 hover:border-accent/50">
      <div className="flex aspect-[16/10] items-center justify-center border-b border-border bg-bg">
        {project.image ? (
          <img
            src={project.image}
            alt={`Screenshot of ${project.name}`}
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="font-mono text-xs text-muted">[PROJECT IMAGE]</span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-text">{project.name}</h3>
          <span className="shrink-0 rounded-full border border-border px-2.5 py-1 text-xs font-medium text-muted">
            {project.status}
          </span>
        </div>

        <p className="text-sm leading-relaxed text-muted">{project.shortDescription}</p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        <p className="text-sm text-muted">
          <span className="text-text">Role:</span> {project.role}
        </p>

        <div className="mt-auto flex flex-wrap items-center gap-4 pt-2">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-strong"
            >
              Live demo <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          ) : (
            <span className="text-sm text-muted">Live demo coming soon</span>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-text hover:text-accent"
            >
              <Github className="h-3.5 w-3.5" aria-hidden="true" /> Source
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
