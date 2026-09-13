import { profile } from "@/data/profile";
import { socialLinks } from "@/data/socialLinks";
import { SocialIcons } from "@/components/ui/SocialIcons";

const FOOTER_LINKS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-content flex-col gap-8 px-6 py-12 sm:px-8 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <p className="font-display text-lg font-semibold text-text">
            {profile.name}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            {profile.title}
          </p>
          {profile.availability && (
            <p className="mt-4 inline-flex items-center gap-2 text-xs font-medium text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {profile.availability}
            </p>
          )}
        </div>

        <nav aria-label="Footer" className="flex gap-6">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="text-sm text-muted transition-colors duration-150 hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <SocialIcons links={socialLinks} />
      </div>

      <div className="border-t border-border">
        <p className="mx-auto max-w-content px-6 py-6 text-xs text-muted sm:px-8">
          © {year} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
