import { projects } from "@/data/projects";
import { Section } from "@/components/ui/Section";
import { ProjectCard } from "@/components/ui/ProjectCard";

export function Projects() {
  if (projects.length === 0) return null;

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Things I've built"
      description="A closer look at what each project solves, how it was built, and where you can see it."
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </Section>
  );
}
