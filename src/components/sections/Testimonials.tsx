import { testimonials } from "@/data/testimonials";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

export function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <Section id="testimonials" eyebrow="Testimonials" title="What people say">
      <div className="grid gap-4 sm:grid-cols-2">
        {testimonials.map((item) => (
          <Card key={item.name}>
            <p className="text-sm leading-relaxed text-muted">"{item.testimonial}"</p>
            <p className="mt-4 text-sm font-medium text-text">{item.name}</p>
            <p className="text-xs text-muted">
              {item.role} · {item.company}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
