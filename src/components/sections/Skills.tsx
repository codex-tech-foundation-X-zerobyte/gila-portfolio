import { skills } from "@/data/skills";
import { technologies } from "@/data/technologies";
import { Section } from "@/components/ui/Section";
import { SkillBar } from "@/components/ui/SkillBar";
import { TechIcon } from "@/components/ui/TechIcon";

export function Skills() {
  const categories = Array.from(new Set(skills.map((skill) => skill.category)));

  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="What I work with"
      description="A snapshot of where my skills stand today — I update this as I learn."
    >
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-8">
          {categories.map((category) => (
            <div key={category}>
              <h3 className="mb-4 text-sm font-medium uppercase tracking-wide text-muted">
                {category}
              </h3>
              <div className="space-y-6">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <SkillBar key={skill.name} skill={skill} />
                  ))}
              </div>
            </div>
          ))}
        </div>

        <div>
          <h3 className="mb-4 text-sm font-medium uppercase tracking-wide text-muted">
            Technology stack
          </h3>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="flex flex-col items-start gap-3 rounded-lg border border-border bg-surface p-4"
              >
                <TechIcon icon={tech.icon} className="h-5 w-5 text-accent" />
                <div>
                  <p className="text-sm font-medium text-text">{tech.name}</p>
                  <p className="text-xs text-muted">{tech.level}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
