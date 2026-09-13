import { ExternalLink } from "lucide-react";
import { certifications } from "@/data/certifications";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

export function Certifications() {
  if (certifications.length === 0) return null;

  return (
    <Section id="certifications" eyebrow="Certifications" title="Certifications & achievements">
      <div className="grid gap-4 sm:grid-cols-2">
        {certifications.map((item) => (
          <Card key={item.title}>
            <p className="font-medium text-text">{item.title}</p>
            <p className="text-sm text-muted">
              {item.organization} · {item.date}
            </p>
            {item.description && (
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
            )}
            {item.credentialUrl && (
              <a
                href={item.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-strong"
              >
                View credential <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            )}
          </Card>
        ))}
      </div>
    </Section>
  );
}
