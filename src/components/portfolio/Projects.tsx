import { useMemo, useState } from "react";
import { Github, ExternalLink } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";
import { PROJECTS, PROJECT_CATEGORIES } from "./data";

export default function Projects() {
  const [cat, setCat] = useState("All");
  const filtered = useMemo(
    () => (cat === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === cat)),
    [cat]
  );

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected work"
      subtitle="A glimpse of what I've been building — from full stack apps to AI-powered tools."
    >
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {PROJECT_CATEGORIES.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={`rounded-full border px-4 py-2 text-sm transition ${
              cat === c
                ? "border-transparent neon-btn"
                : "border-white/10 bg-white/5 text-foreground/75 hover:bg-white/10"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p, i) => (
          <Reveal key={p.title} delay={i * 80}>
            <article className="group tilt-card relative h-full overflow-hidden rounded-2xl glass glow-border">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <span className="absolute top-3 left-3 rounded-full border border-white/15 bg-background/70 px-3 py-1 text-xs backdrop-blur">
                  {p.category}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-foreground/70">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span key={t} className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-foreground/70">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex gap-2">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium transition hover:bg-white/10"
                  >
                    <Github className="h-4 w-4" /> GitHub
                  </a>
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg neon-btn px-3 py-2 text-xs"
                  >
                    <ExternalLink className="h-4 w-4" /> Live
                  </a>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
