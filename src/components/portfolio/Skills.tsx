import Section from "./Section";
import { SKILL_COLUMNS } from "./data";

function Column({ items, speed = 22, reverse = false }) {
  const doubled = [...items, ...items];
  return (
    <div className="relative h-[460px] overflow-hidden marquee-wrap">
      <div
        className={`flex flex-col gap-4 ${reverse ? "marquee-track-y-rev" : "marquee-track-y"}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {doubled.map((s, i) => {
          const Icon = s.Icon;
          return (
            <div
              key={i}
              className="tilt-card flex items-center gap-3 rounded-2xl glass glow-border px-5 py-4"
            >
              <div
                className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/5"
                style={{ boxShadow: `0 0 20px ${s.color}33` }}
              >
                <Icon className="h-6 w-6" style={{ color: s.color }} />
              </div>
              <span className="font-medium">{s.name}</span>
            </div>
          );
        })}
      </div>
      {/* Edge fade */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-background to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}

export default function Skills() {
  const speeds = [22, 28, 25];
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="The toolkit I build with"
      subtitle="A mix of languages, frameworks and platforms I use day to day."
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SKILL_COLUMNS.map((col, i) => (
          <Column key={i} items={col} speed={speeds[i]} reverse={i % 2 === 1} />
        ))}
      </div>
    </Section>
  );
}
