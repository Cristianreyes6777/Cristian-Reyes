import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { projects, type Project } from "@/lib/content";

const sizeClasses: Record<Project["size"], string> = {
  lg: "md:col-span-2 md:row-span-2 md:min-h-[440px]",
  md: "md:col-span-2 md:row-span-1 md:min-h-[210px]",
  sm: "md:col-span-1 md:row-span-1 md:min-h-[210px]",
};

export function Projects() {
  return (
    <section id="work" className="relative py-24 md:py-section">
      <div className="mx-auto max-w-content px-6 md:px-12">
        <Reveal>
          <p className="font-mono text-eyebrow uppercase tracking-eyebrow text-fg-tertiary">
            Selected work
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-6 font-sans text-h2 text-fg-primary">
            What I&apos;ve{" "}
            <span className="font-serif italic font-normal">shipped</span>.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-4 md:grid-rows-[auto_auto] md:gap-5">
          {projects.map((project, i) => (
            <Reveal
              key={project.title}
              delay={i * 0.06}
              className={sizeClasses[project.size]}
            >
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const isLg = project.size === "lg";
  const Wrapper = project.href
    ? ({ children }: { children: React.ReactNode }) => (
        <a
          href={project.href}
          target={project.external ? "_blank" : undefined}
          rel={project.external ? "noopener noreferrer" : undefined}
          className="block h-full"
        >
          {children}
        </a>
      )
    : ({ children }: { children: React.ReactNode }) => (
        <div className="h-full">{children}</div>
      );

  return (
    <Wrapper>
      <article
        className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-card border border-hairline bg-surface p-6 transition-all duration-300 hover:border-hairline-hover hover:bg-surface/80 md:p-8 ${
          isLg ? "md:p-10" : ""
        }`}
      >
        {isLg ? (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full opacity-40 animate-blob-drift-alt"
            style={{
              background:
                "radial-gradient(closest-side, rgba(124, 92, 255, 0.45), rgba(124, 92, 255, 0))",
              filter: "blur(100px)",
            }}
          />
        ) : null}

        <header className="relative flex items-start justify-between gap-4">
          <p className="font-mono text-[11px] uppercase tracking-eyebrow tabular-nums text-fg-tertiary">
            {project.year}
          </p>
          {project.href ? (
            <span
              aria-hidden="true"
              className="flex h-8 w-8 items-center justify-center rounded-pill border border-hairline text-fg-tertiary transition-all duration-300 group-hover:border-accent group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            >
              <ArrowUpRight size={14} />
            </span>
          ) : null}
        </header>

        <div className="relative mt-auto">
          <h3
            className={`font-sans text-fg-primary ${
              isLg ? "text-h3 md:text-[40px] md:leading-tight" : "text-h3"
            }`}
            style={{ letterSpacing: "-0.02em" }}
          >
            {project.title}
          </h3>
          <p
            className={`mt-3 max-w-[40ch] font-sans leading-relaxed text-fg-secondary ${
              isLg ? "text-body md:text-[18px]" : "text-body-sm"
            }`}
          >
            {project.blurb}
          </p>
        </div>
      </article>
    </Wrapper>
  );
}
