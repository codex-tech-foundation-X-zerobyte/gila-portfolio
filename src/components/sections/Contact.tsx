import { useState, type FormEvent } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { profile } from "@/data/profile";
import { socialLinks } from "@/data/socialLinks";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { SocialIcons } from "@/components/ui/SocialIcons";

/**
 * No form backend is configured yet. To make this form actually send
 * messages, connect it to a legitimate provider such as Formspree, Resend,
 * EmailJS, or a Supabase Edge Function, then set FORM_ENDPOINT below to
 * that provider's public endpoint. Never place a private/service-role API
 * key in this file — only a public form endpoint or public client key
 * belongs in frontend code.
 */
const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT ?? "";

type Status = "idle" | "submitting" | "success" | "error" | "not-configured";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!FORM_ENDPOINT) {
      setStatus("not-configured");
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);
    setStatus("submitting");

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's talk"
      description="Have a project in mind, or a question about my work? I'd like to hear from you."
    >
      <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <div className="space-y-6">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-3 text-sm text-text transition-colors duration-150 hover:text-accent"
          >
            <Mail className="h-4 w-4 text-accent" aria-hidden="true" />
            {profile.email}
          </a>
          {profile.phone && (
            <a
              href={`tel:${profile.phone.replace(/\s+/g, "")}`}
              className="flex items-center gap-3 text-sm text-text transition-colors duration-150 hover:text-accent"
            >
              <Phone className="h-4 w-4 text-accent" aria-hidden="true" />
              {profile.phone}
            </a>
          )}
          <p className="flex items-center gap-3 text-sm text-muted">
            <MapPin className="h-4 w-4 text-accent" aria-hidden="true" />
            {profile.location}
          </p>

          <SocialIcons links={socialLinks} className="pt-2" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-text">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                className="w-full rounded-md border border-border bg-surface px-4 py-2.5 text-sm text-text placeholder:text-muted focus:border-accent"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-text">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="w-full rounded-md border border-border bg-surface px-4 py-2.5 text-sm text-text placeholder:text-muted focus:border-accent"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="mb-2 block text-sm font-medium text-text">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              required
              className="w-full rounded-md border border-border bg-surface px-4 py-2.5 text-sm text-text placeholder:text-muted focus:border-accent"
              placeholder="What's this about?"
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium text-text">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full resize-none rounded-md border border-border bg-surface px-4 py-2.5 text-sm text-text placeholder:text-muted focus:border-accent"
              placeholder="Tell me a bit about what you need."
            />
          </div>

          <Button type="submit" disabled={status === "submitting"}>
            {status === "submitting" ? "Sending…" : "Send message"}
          </Button>

          <div role="status" aria-live="polite">
            {status === "success" && (
              <p className="text-sm text-accent">
                Thanks — your message has been sent. I'll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-400">
                Something went wrong sending that. Please email me directly at{" "}
                <a href={`mailto:${profile.email}`} className="underline">
                  {profile.email}
                </a>
                .
              </p>
            )}
            {status === "not-configured" && (
              <p className="text-sm text-muted">
                This form isn't connected to an email service yet — please reach out directly
                at{" "}
                <a href={`mailto:${profile.email}`} className="text-accent underline">
                  {profile.email}
                </a>{" "}
                in the meantime.
              </p>
            )}
          </div>
        </form>
      </div>
    </Section>
  );
}
