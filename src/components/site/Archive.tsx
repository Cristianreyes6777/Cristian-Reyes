import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { archive } from "@/lib/content";

export function Archive() {
  return (
    <section id="archive" className="relative py-24 md:py-section">
      <div className="mx-auto max-w-content px-6 md:px-12">
        <Reveal>
          <p className="font-mono text-eyebrow uppercase tracking-eyebrow text-fg-tertiary">
            Archive
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-6 font-sans text-h2 text-fg-primary">
            Earlier{" "}
            <span className="font-serif italic font-normal">work</span>.
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-6 max-w-[60ch] font-sans text-body leading-relaxed text-fg-secondary">
            Bootcamp and group projects from 2023. Kept for context on where the
            software side of this started.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {archive.map((project, i) => (
            <Reveal key={project.title} delay={(i % 4) * 0.04}>
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full overflow-hidden rounded-card border border-hairline bg-surface transition-all duration-300 hover:-translate-y-0.5 hover:border-hairline-hover"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-bg">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(min-width: 1024px) 240px, (min-width: 640px) 45vw, 90vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent"
                  />
                  <span className="absolute left-3 top-3 inline-flex items-center rounded-pill border border-hairline bg-bg/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-eyebrow text-fg-secondary backdrop-blur-sm">
                    {project.tag}
                  </span>
                </div>
                <div className="flex flex-col gap-3 p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-sans text-[18px] font-medium leading-tight text-fg-primary">
                      {project.title}
                    </h3>
                    <ArrowUpRight
                      size={16}
                      aria-hidden="true"
                      className="mt-1 shrink-0 text-fg-tertiary transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                    />
                  </div>
                  <p className="line-clamp-3 font-sans text-body-sm leading-snug text-fg-secondary">
                    {project.blurb}
                  </p>
                  <p className="font-mono text-[11px] uppercase tracking-eyebrow tabular-nums text-fg-tertiary">
                    {project.year}
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
