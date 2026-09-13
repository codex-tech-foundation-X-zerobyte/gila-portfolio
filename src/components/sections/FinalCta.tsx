import { profile } from "@/data/profile";

export function FinalCta() {
  return (
    <section className="border-y border-border bg-surface">
      <div className="mx-auto max-w-content px-6 py-16 text-center sm:px-8">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Have a project in mind?
        </h2>
        <p className="mx-auto mt-3 max-w-md text-base text-muted">
          Let's build something useful together.
        </p>
        <a
          href="#contact"
          className="mt-8 inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-medium text-bg transition-colors duration-150 hover:bg-accent-strong"
        >
          {`Email ${profile.name.split(" ")[0]}`}
        </a>
      </div>
    </section>
  );
}
