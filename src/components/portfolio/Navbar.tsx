import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { NAV_LINKS } from "./data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const click = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <nav
          className={`flex items-center justify-between rounded-2xl border border-white/10 px-5 py-3 transition-all duration-500 ${
            scrolled
              ? "bg-background/70 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
              : "bg-background/30 backdrop-blur-md"
          }`}
        >
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); click("hero"); }}
            className="font-display text-lg font-bold tracking-tight"
          >
            <span className="text-gradient">Ankur</span>
            <span className="text-foreground/80">.dev</span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((l) => (
              <li key={l.id}>
                <button
                  onClick={() => click(l.id)}
                  className="rounded-lg px-3 py-2 text-sm text-foreground/75 transition hover:bg-white/5 hover:text-foreground"
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href="https://drive.google.com/file/d/1DHFPtZSKgAaMoVdy7fpb0J96Kgk2XQPN/view?usp=drive_link"
              download
              className="hidden items-center gap-2 rounded-lg neon-btn px-4 py-2 text-sm sm:inline-flex"
            >
              <Download className="h-4 w-4" /> Resume
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/5 lg:hidden"
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile */}
        <div
          className={`mt-2 overflow-hidden rounded-2xl border border-white/10 bg-background/80 backdrop-blur-xl transition-all duration-300 lg:hidden ${
            open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col p-2">
            {NAV_LINKS.map((l) => (
              <li key={l.id}>
                <button
                  onClick={() => click(l.id)}
                  className="w-full rounded-lg px-3 py-3 text-left text-sm text-foreground/80 hover:bg-white/5"
                >
                  {l.label}
                </button>
              </li>
            ))}
            <li>
              <a
                href="/resume.pdf"
                download
                className="mt-2 flex items-center justify-center gap-2 rounded-lg neon-btn px-4 py-3 text-sm"
              >
                <Download className="h-4 w-4" /> Download Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
