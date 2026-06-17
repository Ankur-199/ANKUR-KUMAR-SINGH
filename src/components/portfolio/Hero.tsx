import { useEffect, useState } from "react";
import { Github, Linkedin, Twitter, Mail, ArrowRight, MessageSquare } from "lucide-react";
import { SiReact, SiNodedotjs, SiMongodb, SiJavascript, SiTailwindcss, SiExpress } from "react-icons/si";
import { ROLES } from "./data";
import image from "../images/main.jpg";

function useTyping(words, speed = 90, pause = 1400) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    const cur = words[i % words.length];
    let t;
    if (!del && text === cur) {
      t = setTimeout(() => setDel(true), pause);
    } else if (del && text === "") {
      setDel(false);
      setI((v) => v + 1);
    } else {
      t = setTimeout(() => {
        setText((prev) =>
          del ? cur.slice(0, prev.length - 1) : cur.slice(0, prev.length + 1)
        );
      }, del ? speed / 2 : speed);
    }
    return () => clearTimeout(t);
  }, [text, del, i, words, speed, pause]);
  return text;
}

const FloatIcon = ({ Icon, className, color }) => (
  <div
    className={`absolute grid place-items-center rounded-2xl glass animate-floaty ${className}`}
    style={{ boxShadow: "0 0 30px color-mix(in oklab, #E1DCC9 25%, transparent)" }}
  >
    <Icon className="h-6 w-6 sm:h-7 sm:w-7" style={{ color }} />
  </div>
);

export default function Hero() {
  const role = useTyping(ROLES);

  return (
    <section id="hero" className="relative flex min-h-screen items-center pt-28">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-4 lg:grid-cols-2">
        {/* Left */}
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-foreground/80 backdrop-blur">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Available for new projects
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Hi, I'm <span className="text-gradient">Ankur Kumar</span>{" "}<span className="text-gradient">Singh</span>
          </h1>
          <p className="mt-4 text-lg font-medium text-foreground/80 sm:text-xl">
            <span className="text-gradient">{role}</span>
            <span className="ml-1 inline-block w-[2px] h-5 align-middle bg-foreground animate-blink" />
          </p>
          <p className="mt-5 max-w-xl text-foreground/70">
            I build scalable, modern web applications with the MERN stack — blending
            clean architecture, fast performance and delightful UI to ship products
            people love.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              onClick={(e) => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }}
              className="inline-flex items-center gap-2 rounded-xl neon-btn px-5 py-3 text-sm"
            >
              View Projects <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
              className="inline-flex items-center gap-2 rounded-xl glass px-5 py-3 text-sm font-medium hover:bg-white/10"
            >
              <MessageSquare className="h-4 w-4" /> Contact Me
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            {[
              { Icon: Github, href: "https://github.com/Ankur-199" },
              { Icon: Linkedin, href: "https://linkedin.com/in/ankur-kumar-singh-893a66287" },
              { Icon: Mail, href: "mailto:ankursingh91904@gmail.com" },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="grid h-11 w-11 place-items-center rounded-xl glass transition hover:scale-110 hover:text-[var(--neon)]"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="relative mx-auto h-[420px] w-full max-w-md sm:h-[480px]">
          <div
            className="absolute inset-10 rounded-full animate-glow-pulse"
            style={{ background: "var(--gradient-glow)" }}
          />
          <div className="absolute inset-12 rounded-full border border-white/10 animate-spin-slow"
               style={{ background: "conic-gradient(from 0deg, transparent, color-mix(in oklab, #E1DCC9 30%, transparent), transparent)" }}
          />
          <div className="absolute inset-16 overflow-hidden rounded-full glass glow-border">
            <img
              src={image}
              alt="Ankur Kumar Singh portrait"
              className="h-full w-full object-center"
              loading="lazy"
            />
          </div>

          {/* Floating tech icons */}
          <FloatIcon Icon={SiReact} color="#61DAFB" className="top-2 left-6 h-12 w-12" />
          <FloatIcon Icon={SiNodedotjs} color="#3C873A" className="top-12 right-2 h-12 w-12" />
          <FloatIcon Icon={SiMongodb} color="#47A248" className="bottom-16 -left-2 h-12 w-12" />
          <FloatIcon Icon={SiTailwindcss} color="#38BDF8" className="bottom-2 right-12 h-12 w-12" />
          <FloatIcon Icon={SiJavascript} color="#F7DF1E" className="top-1/2 -right-3 h-11 w-11" />
          <FloatIcon Icon={SiExpress} color="#ffffff" className="top-1/3 -left-3 h-11 w-11" />
        </div>
      </div>
    </section>
  );
}
