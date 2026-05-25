import Image from "next/image";
import { Reveal } from "./Reveal";

const facts: { label: string; values: string[] }[] = [
  { label: "Location", values: ["New York, NY"] },
  { label: "Languages", values: ["English, Spanish, Italian"] },
  {
    label: "Education",
    values: [
      "M.S. Software Engineering, Boston University",
      "B.S. Biology, Rutgers University",
    ],
  },
  {
    label: "Currently",
    values: ["Founder at Crypted", "Scientist at Pfizer"],
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-section">
      <div className="mx-auto max-w-content px-6 md:px-12">
        <Reveal>
          <p className="font-mono text-eyebrow uppercase tracking-eyebrow text-fg-tertiary">
            About
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-6 font-sans text-h2 text-fg-primary">
            The{" "}
            <span className="font-serif italic font-normal">intersection</span>.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-16 md:grid-cols-12">
          <div className="md:col-span-7 md:col-start-1">
            <Reveal delay={0.12}>
              <p className="font-sans text-body leading-relaxed text-fg-secondary md:text-[18px]">
                I started in biology. My early career ran through clinical and
                research labs at Sampled, One Health Labs, Biotrial, and now
                Pfizer, running PCR and immunoassays, managing teams, securing
                CLIA certification, and keeping FDA paperwork in order. The work
                taught me how regulated systems actually behave under pressure.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 font-sans text-body leading-relaxed text-fg-secondary md:text-[18px]">
                Somewhere in there I picked up software. A programming bootcamp
                at Rutgers, then a Master&apos;s in Software Engineering at
                Boston University. The deeper I got, the more obvious it became
                that the most interesting problems in life sciences are no
                longer purely biological. They are data problems, automation
                problems, and increasingly AI problems.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 font-sans text-body leading-relaxed text-fg-secondary md:text-[18px]">
                Now I sit at that intersection. By day I support automated
                vaccine research workflows at Pfizer, integrating LIMS and ELN
                systems with Hamilton and Tecan liquid handlers. After hours I
                run Crypted, a founder led studio building real software for
                small and mid sized businesses the big agencies overlook.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <p className="mt-6 font-sans text-body leading-relaxed text-fg-secondary md:text-[18px]">
                The combination is unusual on purpose. Most people in biology
                cannot ship software. Most people who ship software have never
                had to defend a CAPA or pass a 100% compliance inspection. I am
                building toward work that needs both.
              </p>
            </Reveal>
          </div>

          <aside className="md:col-span-4 md:col-start-9">
            <div className="space-y-4 md:sticky md:top-32">
              <Reveal delay={0.24}>
                <figure className="relative aspect-[4/5] overflow-hidden rounded-card border border-hairline bg-surface">
                  <Image
                    src="/people/profile.jpg"
                    alt="Portrait of Cristian Reyes"
                    fill
                    sizes="(min-width: 1024px) 360px, (min-width: 768px) 40vw, 90vw"
                    className="object-cover"
                    priority={false}
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-bg/70 via-bg/20 to-transparent"
                  />
                  <figcaption className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-eyebrow text-fg-primary/90">
                      Cristian Reyes
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-eyebrow text-fg-secondary">
                      NYC
                    </span>
                  </figcaption>
                </figure>
              </Reveal>

              <Reveal delay={0.32}>
                <div className="rounded-card border border-hairline bg-surface/40 p-6 backdrop-blur-sm">
                  <p className="font-mono text-eyebrow uppercase tracking-eyebrow text-fg-tertiary">
                    Quick facts
                  </p>
                <dl className="mt-6 space-y-6">
                  {facts.map((fact) => (
                    <div key={fact.label} className="flex flex-col gap-2">
                      <dt className="font-mono text-[11px] uppercase tracking-eyebrow text-fg-tertiary">
                        {fact.label}
                      </dt>
                      {fact.values.map((value, j) => (
                        <dd
                          key={j}
                          className="font-sans text-body-sm leading-relaxed text-fg-primary"
                        >
                          {value}
                        </dd>
                      ))}
                    </div>
                  ))}
                </dl>
                </div>
              </Reveal>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
