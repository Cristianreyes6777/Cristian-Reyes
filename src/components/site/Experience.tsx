import { Reveal } from "./Reveal";
import { experience } from "@/lib/content";

export function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-section">
      <div className="mx-auto max-w-content px-6 md:px-12">
        <Reveal>
          <p className="font-mono text-eyebrow uppercase tracking-eyebrow text-fg-tertiary">
            Experience
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-6 font-sans text-h2 text-fg-primary">
            Eight years,{" "}
            <span className="font-serif italic font-normal">
              two disciplines
            </span>
            .
          </h2>
        </Reveal>

        <ol className="mt-16 divide-y divide-hairline-soft">
          {experience.map((role, i) => (
            <Reveal key={role.company + role.start} delay={i * 0.04} as="li">
              <article className="group relative -mx-4 px-4 py-8 transition-all duration-300 hover:bg-row-hover md:-mx-6 md:px-6 md:py-10">
                <div className="md:transition-transform md:duration-300 md:group-hover:translate-x-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                    <h3 className="font-sans text-[26px] leading-tight tracking-tighter text-fg-primary md:text-[28px]">
                      {role.company}
                    </h3>
                    <p className="font-mono text-[11px] uppercase tracking-eyebrow tabular-nums text-fg-tertiary">
                      {role.start} {"–"} {role.end}
                    </p>
                  </div>
                  <p className="mt-2 font-sans text-body-sm text-fg-secondary">
                    {role.role}
                    {role.location ? (
                      <span className="text-fg-tertiary">
                        {" · "}
                        {role.location}
                      </span>
                    ) : null}
                  </p>
                  <p className="mt-4 max-w-[68ch] font-sans text-body leading-relaxed text-fg-secondary">
                    {role.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
