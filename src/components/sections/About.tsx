import { MapPin } from "lucide-react";
import { profile } from "@/data/profile";
import { Section } from "@/components/ui/Section";

export function About() {
  const paragraphs = profile.personalStory.split("\n\n");

  return (
    <Section id="about" eyebrow="About" title="A bit about my path so far">
      <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-4 text-base leading-relaxed text-muted">
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className="space-y-4">
          <div className="rounded-lg border border-border bg-surface p-5">
            <p className="flex items-center gap-2 text-sm text-muted">
              <MapPin className="h-4 w-4 text-accent" aria-hidden="true" />
              {profile.location}
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
