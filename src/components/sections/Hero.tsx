import { ArrowDown, Download } from "lucide-react";
import { profile } from "@/data/profile";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function Hero() {
  return (
    <section id="home" className="scroll-mt-24 border-b border-border">
      <div className="mx-auto grid max-w-content items-center gap-12 px-6 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          {profile.availability && (
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-medium text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {profile.availability}
            </p>
          )}

          <p className="font-mono text-sm text-accent">$ whoami</p>

          <h1 className="mt-3 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>

          <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">
            {profile.title}
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
            {profile.shortDescription}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-medium text-bg transition-colors duration-150 hover:bg-accent-strong"
            >
              View my work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-medium text-text transition-colors duration-150 hover:border-accent hover:text-accent"
            >
              Contact me
            </a>
            {profile.resumeUrl ? (
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-accent"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Download CV
              </a>
            ) : null}
          </div>
        </div>

        <div className="mx-auto w-full max-w-sm">
          <div className="aspect-square w-full overflow-hidden rounded-lg border border-border bg-surface">
            {profile.profileImage ? (
              <img
                src={profile.profileImage}
                alt={profile.name}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center">
                <span className="font-display text-6xl font-semibold text-accent">
                  {initials(profile.name)}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="mx-auto hidden max-w-content items-center justify-center pb-8 text-muted transition-colors duration-150 hover:text-accent sm:flex"
      >
        <ArrowDown className="h-5 w-5" aria-hidden="true" />
      </a>
    </section>
  );
}
