import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";
import { NAV_LINKS } from "./data";

export default function Footer() {
  const click = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <footer className="relative border-t border-white/10 pt-16 pb-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 md:grid-cols-3">
        <div>
          <div className="font-display text-xl font-bold">
            <span className="text-gradient">Ankur</span>
            <span className="text-foreground/80">.dev</span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-foreground/70">
            Full Stack Developer crafting fast, modern, beautiful web experiences.
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-foreground/60">Navigate</h4>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.id}>
                <button onClick={() => click(l.id)} className="text-foreground/75 hover:text-[var(--neon)]">
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-foreground/60">Connect</h4>
          <div className="mt-4 flex gap-3">
            {[
              { Icon: Github, href: "https://github.com/Ankur-199" },
              { Icon: Linkedin, href: "https://linkedin.com/in/ankur-kumar-singh-893a66287" },
              { Icon: Mail, href: "mailto:ankursingh91904@gmail.com" },
            ].map(({ Icon, href }, i) => (
              <a key={i} href={href} target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-xl glass hover:text-[var(--neon)]">
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center justify-between gap-3 border-t border-white/10 px-4 pt-6 text-xs text-foreground/60 sm:flex-row">
        <div>© {new Date().getFullYear()} Ankur Kumar Singh. All rights reserved.</div>
        <div className="flex items-center gap-1">
          Built with <Heart className="h-3.5 w-3.5 fill-current text-[var(--neon)]" /> by Ankur Kumar Singh
        </div>
      </div>
    </footer>
  );
}
