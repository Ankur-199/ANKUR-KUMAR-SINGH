import Reveal from "./Reveal";

export default function Section({ id, eyebrow, title, subtitle, children }) {
  return (
    <section id={id} className="relative section-pad">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal>
          <div className="mb-12 text-center">
            {eyebrow && (
              <span className="inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-foreground/70">
                {eyebrow}
              </span>
            )}
            <h2 className="mt-4 font-display text-3xl font-bold text-gradient sm:text-4xl lg:text-5xl">
              {title}
            </h2>
            {subtitle && (
              <p className="mx-auto mt-4 max-w-2xl text-foreground/70">{subtitle}</p>
            )}
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
