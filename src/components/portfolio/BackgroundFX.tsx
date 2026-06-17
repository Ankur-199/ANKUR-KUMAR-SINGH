export default function BackgroundFX() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient blobs */}
      <div className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-[oklch(0.55_0.25_295/0.35)] blur-[120px] animate-blob" />
      <div className="absolute top-1/3 -right-40 h-[600px] w-[600px] rounded-full bg-[oklch(0.6_0.2_220/0.3)] blur-[140px] animate-blob" style={{ animationDelay: "4s" }} />
      <div className="absolute bottom-0 left-1/3 h-[500px] w-[500px] rounded-full bg-[oklch(0.5_0.22_300/0.25)] blur-[140px] animate-blob" style={{ animationDelay: "8s" }} />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
        }}
      />

      {/* Floating particles */}
      {Array.from({ length: 30 }).map((_, i) => (
        <span
          key={i}
          className="absolute block h-1 w-1 rounded-full bg-white/70 animate-floaty"
          style={{
            top: `${(i * 37) % 100}%`,
            left: `${(i * 53) % 100}%`,
            animationDelay: `${(i % 10) * 0.6}s`,
            animationDuration: `${6 + (i % 6)}s`,
            opacity: 0.3 + ((i % 5) / 10),
          }}
        />
      ))}
    </div>
  );
}
