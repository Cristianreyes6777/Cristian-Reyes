import { Linkedin, Github, ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { ContactForm } from "./ContactForm";
import { contact } from "@/lib/content";

const socials = [
  { label: "LinkedIn", href: contact.linkedin, Icon: Linkedin },
  { label: "GitHub", href: contact.github, Icon: Github },
];

export function ContactFooter() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden border-t border-hairline-soft pt-24 pb-12 md:pt-section md:pb-16"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 left-1/2 h-[680px] w-[680px] -translate-x-1/2 rounded-full opacity-25 animate-blob-drift"
        style={{
          background:
            "radial-gradient(closest-side, rgba(124, 92, 255, 0.4), rgba(124, 92, 255, 0))",
          filter: "blur(140px)",
        }}
      />

      <div className="relative mx-auto max-w-content px-6 md:px-12">
        <Reveal>
          <p className="font-mono text-eyebrow uppercase tracking-eyebrow text-fg-tertiary">
            Contact
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="mt-8 font-sans text-h1 text-fg-primary">
            Let&apos;s{" "}
            <span className="font-serif italic font-normal">talk</span>.
          </h2>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mt-6 max-w-[58ch] font-sans text-body leading-relaxed text-fg-secondary md:text-[18px]">
            Project inquiry, collaboration, advisory work, or just want to say
            hello. Drop a message and I&apos;ll get back to you.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-16 md:grid-cols-12">
          <div className="md:col-span-7">
            <Reveal delay={0.2}>
              <ContactForm />
            </Reveal>
          </div>

          <aside className="md:col-span-4 md:col-start-9">
            <Reveal delay={0.28}>
              <div className="rounded-card border border-hairline bg-surface/40 p-6 backdrop-blur-sm">
                <p className="font-mono text-eyebrow uppercase tracking-eyebrow text-fg-tertiary">
                  Or reach me directly
                </p>
                <a
                  href={`mailto:${contact.email}`}
                  className="group mt-5 inline-flex items-start gap-2 font-sans text-body text-fg-primary transition-colors hover:text-accent"
                >
                  <span className="border-b border-hairline transition-colors group-hover:border-accent">
                    {contact.email}
                  </span>
                  <ArrowUpRight
                    size={14}
                    aria-hidden="true"
                    className="mt-1 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>

                <ul className="mt-8 flex flex-wrap items-center gap-2">
                  {socials.map(({ label, href, Icon }) => (
                    <li key={label}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="group inline-flex items-center gap-2 rounded-pill border border-hairline px-3.5 py-1.5 text-fg-secondary transition-all duration-300 hover:border-hairline-hover hover:text-fg-primary"
                      >
                        <Icon size={14} aria-hidden="true" />
                        <span className="font-mono text-[11px] uppercase tracking-eyebrow">
                          {label}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>

                <p className="mt-8 font-mono text-[11px] uppercase tracking-eyebrow text-fg-tertiary">
                  Based in
                </p>
                <p className="mt-2 font-sans text-body-sm text-fg-primary">
                  New York, NY
                </p>
              </div>
            </Reveal>
          </aside>
        </div>

        <div className="mt-24 flex flex-col-reverse items-start justify-between gap-6 border-t border-hairline-soft pt-8 md:flex-row md:items-center">
          <p className="font-mono text-[11px] uppercase tracking-eyebrow text-fg-tertiary">
            © 2026 Cristian Reyes
          </p>
          <p className="font-mono text-[11px] uppercase tracking-eyebrow text-fg-tertiary">
            Built in NYC
          </p>
        </div>
      </div>
    </footer>
  );
}
