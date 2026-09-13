import { useState } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "@/data/profile";
import { useActiveSection } from "@/hooks/useActiveSection";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const activeId = useActiveSection(NAV_LINKS.map((link) => link.id));

  const firstName = profile.name.split(" ")[0];

  const handleNavClick = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/90 backdrop-blur">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-content items-center justify-between px-6 py-4 sm:px-8"
      >
        <a
          href="#home"
          className="font-display text-lg font-semibold tracking-tight text-text"
        >
          {firstName}
          <span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                aria-current={activeId === link.id ? "true" : undefined}
                className={`text-sm font-medium transition-colors duration-150 ${
                  activeId === link.id ? "text-accent" : "text-muted hover:text-text"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-md bg-accent px-4 py-2 text-sm font-medium text-bg transition-colors duration-150 hover:bg-accent-strong"
          >
            Contact Me
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-text"
          >
            {open ? <X className="h-4 w-4" aria-hidden="true" /> : <Menu className="h-4 w-4" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-border bg-bg md:hidden">
          <ul className="mx-auto flex max-w-content flex-col gap-1 px-6 py-4 sm:px-8">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={handleNavClick}
                  aria-current={activeId === link.id ? "true" : undefined}
                  className={`block rounded-md px-3 py-2.5 text-sm font-medium ${
                    activeId === link.id ? "text-accent" : "text-muted"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contact"
                onClick={handleNavClick}
                className="block rounded-md bg-accent px-3 py-2.5 text-center text-sm font-medium text-bg"
              >
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
