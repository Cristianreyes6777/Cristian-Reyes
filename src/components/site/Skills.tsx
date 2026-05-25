import { Reveal } from "./Reveal";
import { skillGroups } from "@/lib/content";

export function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-section">
      <div className="mx-auto max-w-content px-6 md:px-12">
        <Reveal>
          <p className="font-mono text-eyebrow uppercase tracking-eyebrow text-fg-tertiary">
            Capabilities
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-6 font-sans text-h2 text-fg-primary">
            What I work{" "}
            <span className="font-serif italic font-normal">with</span>.
          </h2>
        </Reveal>

        <div className="mt-16 space-y-12 md:space-y-14">
          {skillGroups.map((group, i) => (
            <Reveal key={group.label} delay={i * 0.06}>
              <div className="grid gap-6 md:grid-cols-12 md:gap-10">
                <p className="font-mono text-eyebrow uppercase tracking-eyebrow text-fg-tertiary md:col-span-3 md:pt-2">
                  {group.label}
                </p>
                <ul className="flex flex-wrap gap-2 md:col-span-9">
                  {group.items.map((item) => (
                    <li key={item}>
                      <span className="inline-flex cursor-default items-center rounded-pill border border-hairline px-4 py-2 font-sans text-body-sm text-fg-secondary transition-all duration-200 hover:border-hairline-hover hover:text-fg-primary">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
