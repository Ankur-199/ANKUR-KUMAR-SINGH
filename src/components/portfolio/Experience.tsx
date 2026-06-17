import { Briefcase } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";
import { EXPERIENCE } from "./data";

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Where I've worked"
      subtitle="Roles, internships and contributions that shaped my craft."
    >
      <div className="relative mx-auto max-w-4xl">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--neon)] via-[var(--neon-2)] to-transparent sm:left-1/2" />
        <div className="space-y-10">
          {EXPERIENCE.map((e, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="relative grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr]">
                <div className="absolute left-4 top-3 sm:static sm:col-start-2 sm:flex sm:justify-center">
                  <div
                    className="grid h-7 w-7 -translate-x-1/2 place-items-center rounded-full glass glow-border sm:translate-x-0"
                    style={{ boxShadow: "var(--shadow-glow)" }}
                  >
                    <Briefcase className="h-3.5 w-3.5 text-[var(--neon)]" />
                  </div>
                </div>
                <div className={`ml-10 sm:ml-0 ${i % 2 === 0 ? "sm:col-start-3 sm:pl-10" : "sm:col-start-1 sm:pr-10 sm:text-right"}`}>
                  <div className="inline-block tilt-card rounded-2xl glass glow-border p-5 text-left">
                    <div className="text-xs uppercase tracking-wider text-foreground/60">{e.duration}</div>
                    <h3 className="mt-1 font-display text-lg font-semibold">{e.role}</h3>
                    <div className="text-sm text-gradient font-medium">{e.company}</div>
                    <p className="mt-3 text-sm text-foreground/70">{e.desc}</p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {e.tech.map((t) => (
                        <span key={t} className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-foreground/70">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
