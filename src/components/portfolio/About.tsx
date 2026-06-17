import { useEffect, useRef, useState } from "react";
import Section from "./Section";
import Reveal from "./Reveal";
import { STATS } from "./data";
import photo from "../images/about_photo.jpeg";

function Counter({ value, suffix = "" }) {
  const [n, setN] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        const dur = 1400;
        const start = performance.now();
        const tick = (t) => {
          const p = Math.min(1, (t - start) / dur);
          setN(Math.floor(p * value));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        io.disconnect();
      }
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [value]);
  return <span ref={ref}>{value === 0 ? suffix : `${n}${suffix}`}</span>;
}

export default function About() {
  return (
    <Section id="about" eyebrow="About Me" title="Crafting digital experiences" subtitle="A passionate full stack developer focused on building delightful, scalable web products.">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <Reveal>
          <div className="relative mx-auto h-[500px] w-[280px] sm:h-[560px] sm:w-[320px]">
            <div className="absolute -inset-2 rounded-3xl animate-glow-pulse" style={{ background: "var(--gradient-primary)", filter: "blur(20px)", opacity: 0.5 }} />
            <div className="relative h-full w-full overflow-hidden rounded-3xl glass glow-border">
              <img
                src={photo}
                alt="Working at desk"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div>
            <p className="text-foreground/80">
              I'm <span className="text-gradient font-semibold">Ankur Kumar Singh</span>, a
              full stack developer who loves turning complex problems into clean,
              elegant solutions. My journey started with curiosity — taking apart
              websites to learn how they work — and grew into a craft of shipping
              real-world MERN applications.
            </p>
            <p className="mt-4 text-foreground/70">
              I work across the entire stack: building accessible, animated
              frontends in React and JavaScript, and architecting scalable Node /
              Express APIs backed by MongoDB. I believe in writing clean code,
              learning every day and contributing to open source whenever I can.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="tilt-card rounded-2xl glass glow-border p-5"
                >
                  <div className="font-display text-3xl font-bold text-gradient">
                    <Counter value={s.value} suffix={s.suffix} />
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-foreground/60">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
