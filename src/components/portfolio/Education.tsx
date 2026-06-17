import { GraduationCap } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";
import { EDUCATION } from "./data";

export default function Education() {
  return (
    <Section
      id="education"
      eyebrow="Education"
      title="My learning journey"
      subtitle="The academic foundation behind my engineering mindset."
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {EDUCATION.map((e, i) => (
          <Reveal key={i} delay={i * 100}>
            <div className="tilt-card group h-full rounded-2xl glass glow-border p-6 animate-floaty" style={{ animationDelay: `${i * 1.2}s` }}>
              <div
                className="grid h-12 w-12 place-items-center rounded-xl"
                style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}
              >
                <GraduationCap className="h-6 w-6 text-background" />
              </div>
              <div className="mt-4 text-xs uppercase tracking-wider text-foreground/60">{e.duration}</div>
              <h3 className="mt-1 font-display text-lg font-semibold">{e.school}</h3>
              <div className="text-sm text-gradient font-medium">{e.place}</div>
              <p className="mt-3 text-sm text-foreground/70">{e.desc}</p>
              <div className="mt-4 inline-block rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs">
                {e.grade}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
