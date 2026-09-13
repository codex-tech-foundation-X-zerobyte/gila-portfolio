import { experience } from "@/data/experience";
import { education } from "@/data/education";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Experience & education"
      description="Where I've studied, and how I've been putting what I learn into practice."
    >
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <h3 className="mb-4 text-sm font-medium uppercase tracking-wide text-muted">
            Professional experience
          </h3>

          {experience.length > 0 ? (
            <ol className="space-y-6 border-l border-border pl-6">
              {experience.map((job) => (
                <li key={`${job.company}-${job.startDate}`} className="relative">
                  <span className="absolute -left-[1.65rem] top-1.5 h-2.5 w-2.5 rounded-full bg-accent" />
                  <p className="font-medium text-text">{job.role}</p>
                  <p className="text-sm text-muted">
                    {job.company} · {job.startDate} – {job.endDate}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{job.description}</p>
                  {job.responsibilities.length > 0 && (
                    <ul className="mt-3 space-y-1.5 text-sm text-muted">
                      {job.responsibilities.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="text-accent">–</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ol>
          ) : (
            <Card>
              <p className="text-sm leading-relaxed text-muted">
                I'm early in my career and focused on building strong fundamentals through
                academic work and self-directed projects like the ones in the{" "}
                <a href="#projects" className="font-medium text-accent hover:text-accent-strong">
                  Projects
                </a>{" "}
                section. I'm actively looking for internship and freelance opportunities to
                apply what I've learned in a professional setting.
              </p>
            </Card>
          )}
        </div>

        <div>
          <h3 className="mb-4 text-sm font-medium uppercase tracking-wide text-muted">
            Education
          </h3>
          <div className="space-y-4">
            {education.map((entry) => (
              <Card key={entry.institution}>
                <p className="font-medium text-text">{entry.course}</p>
                <p className="text-sm text-muted">
                  {entry.institution} · {entry.startYear} – {entry.endYear}
                </p>
                {entry.description && (
                  <p className="mt-2 text-sm leading-relaxed text-muted">{entry.description}</p>
                )}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
