import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { MagneticButton } from "./MagneticButton";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-[200px] pb-24 md:pt-[260px] md:pb-section"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 -top-40 h-[820px] w-[820px] rounded-full opacity-60 animate-blob-drift"
        style={{
          background:
            "radial-gradient(closest-side, rgba(124, 92, 255, 0.55), rgba(124, 92, 255, 0))",
          filter: "blur(140px)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-40 h-[620px] w-[620px] rounded-full opacity-30 animate-blob-drift-alt"
        style={{
          background:
            "radial-gradient(closest-side, rgba(96, 64, 220, 0.45), rgba(96, 64, 220, 0))",
          filter: "blur(140px)",
          animationDelay: "-12s",
        }}
      />

      <div className="relative mx-auto max-w-content px-6 md:px-12">
        <Reveal>
          <p className="font-mono text-eyebrow uppercase tracking-eyebrow text-fg-tertiary">
            New York · Founder · Scientist · Engineer
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <h1 className="mt-10 font-sans text-h1 text-fg-primary">
            Cristian Reyes,
            <br />
            <span className="font-serif italic font-normal">
              building Crypted.
            </span>
          </h1>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mt-10 max-w-[58ch] font-sans text-[18px] leading-relaxed text-fg-secondary md:text-[20px]">
            Founder, scientist, and engineer working where biology, AI, and
            software meet.
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-12 flex flex-wrap items-center gap-3 md:gap-4">
            <MagneticButton href="https://crypted.ai" external>
              See Crypted
              <ArrowUpRight size={16} aria-hidden="true" />
            </MagneticButton>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-pill border border-hairline px-6 py-3 text-body-sm font-medium text-fg-primary transition-colors duration-300 hover:border-hairline-hover"
            >
              Get in touch
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
