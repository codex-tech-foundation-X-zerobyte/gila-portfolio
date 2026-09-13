import type { PropsWithChildren } from "react";

interface SectionProps {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}

export function Section({
  id,
  eyebrow,
  title,
  description,
  className = "",
  children,
}: PropsWithChildren<SectionProps>) {
  return (
    <section id={id} className={`scroll-mt-24 py-20 sm:py-28 ${className}`}>
      <div className="mx-auto max-w-content px-6 sm:px-8">
        <div className="mb-12 max-w-2xl">
          {eyebrow && (
            <p className="mb-3 font-mono text-sm text-accent">{eyebrow}</p>
          )}
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-base leading-relaxed text-muted">
              {description}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
