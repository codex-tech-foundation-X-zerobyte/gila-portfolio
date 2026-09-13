import { services } from "@/data/services";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

export function Services() {
  if (services.length === 0) return null;

  return (
    <Section id="services" eyebrow="Services" title="How I can help">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Card key={service.name}>
            <p className="font-medium text-text">{service.name}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">{service.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
