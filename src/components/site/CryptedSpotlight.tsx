import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

export function CryptedSpotlight() {
  return (
    <section
      id="crypted"
      className="relative border-y border-hairline-soft bg-bg py-24 md:py-section"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 animate-blob-drift-alt"
        style={{
          background:
            "radial-gradient(closest-side, rgba(124, 92, 255, 0.35), rgba(124, 92, 255, 0))",
          filter: "blur(140px)",
        }}
      />

      <div className="relative mx-auto max-w-content px-6 md:px-12">
        <Reveal>
          <p className="font-mono text-eyebrow uppercase tracking-eyebrow text-fg-tertiary">
            Currently
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <p
            className="mt-8 font-serif italic font-normal text-fg-primary"
            style={{
              fontSize: "clamp(96px, 16vw, 200px)",
              lineHeight: 0.9,
              letterSpacing: "-0.04em",
            }}
          >
            Crypted
          </p>
        </Reveal>

        <div className="mt-16 grid gap-12 md:grid-cols-12">
          <Reveal delay={0.16} className="md:col-span-7 md:col-start-1">
            <p className="font-sans text-body leading-relaxed text-fg-primary md:text-[19px]">
              A small, founder led studio building modern websites, AI tools,
              automation, and data dashboards for small and mid sized businesses.
              Real software.
            </p>
          </Reveal>
          <Reveal delay={0.24} className="md:col-span-4 md:col-start-9 md:self-end">
            <a
              href="https://crypted.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 font-mono text-eyebrow uppercase tracking-eyebrow text-fg-secondary transition-colors hover:text-accent"
            >
              <span className="border-b border-hairline pb-1 transition-colors group-hover:border-accent">
                Visit crypted.ai
              </span>
              <ArrowUpRight
                size={14}
                aria-hidden="true"
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
