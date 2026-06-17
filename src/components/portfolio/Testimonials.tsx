import { Quote } from "lucide-react";
import Section from "./Section";
import { TESTIMONIALS } from "./data";

function Row({ items, reverse = false, speed = 40 }) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee-wrap relative overflow-hidden">
      <div
        className={`flex w-max gap-5 ${reverse ? "marquee-track-x-rev" : "marquee-track-x"}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {doubled.map((t, i) => (
          <article
            key={i}
            className="tilt-card w-[320px] shrink-0 rounded-2xl glass glow-border p-5 sm:w-[380px]"
          >
            <Quote className="h-6 w-6 text-[var(--neon)]" />
            <p className="mt-3 text-sm text-foreground/80">"{t.text}"</p>
            <div className="mt-5 flex items-center gap-3">
              <img src={t.avatar} alt={t.name} className="h-10 w-10 rounded-full object-cover" loading="lazy" />
              <div>
                <div className="text-sm font-semibold">{t.name}</div>
                <div className="text-xs text-foreground/60">{t.company}</div>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
    </div>
  );
}

export default function Testimonials() {
  const half = Math.ceil(TESTIMONIALS.length / 2);
  return (
    <Section
      id="testimonials"
      eyebrow="Testimonials"
      title="Kind words from collaborators"
      subtitle="A few notes from people I've had the pleasure of building with."
    >
      <div className="space-y-5">
        <Row items={TESTIMONIALS.slice(0, half)} speed={45} />
        <Row items={TESTIMONIALS.slice(half)} reverse speed={50} />
      </div>
    </Section>
  );
}
