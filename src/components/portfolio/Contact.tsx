import { useState } from "react";
import { Mail, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";
import { toast } from "sonner";
import Section from "./Section";
import Reveal from "./Reveal";

export default function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Message sent! I'll get back to you soon.");
      e.target.reset();
    }, 1100);
  };

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something great"
      subtitle="Got a project in mind, or just want to say hi? My inbox is always open."
    >
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
        <Reveal className="lg:col-span-2">
          <div className="h-full rounded-2xl glass glow-border p-6">
            <h3 className="font-display text-xl font-semibold">Get in touch</h3>
            <p className="mt-2 text-sm text-foreground/70">
              Open to freelance, full-time roles and open-source collaboration.
            </p>
            <div className="mt-6 space-y-4">
              <a href="mailto:ankur@example.com" className="flex items-start gap-3 text-sm hover:text-[var(--neon)]">
                <Mail className="mt-0.5 h-5 w-5 text-[var(--neon)]" />
                <div>
                  <div className="font-medium">Email</div>
                  <div className="text-foreground/70">ankursingh91904@gmail.com</div>
                </div>
              </a>
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="mt-0.5 h-5 w-5 text-[var(--neon-2)]" />
                <div>
                  <div className="font-medium">Location</div>
                  <div className="text-foreground/70">India · Open to Remote</div>
                </div>
              </div>
            </div>
            <div className="mt-8 flex gap-3">
              {[
                { Icon: Github, href: "https://github.com/Ankur-199" },
                { Icon: Linkedin, href: "https://linkedin.com/in/ankur-kumar-singh-893a66287" },
              ].map(({ Icon, href }, i) => (
                <a key={i} href={href} target="_blank" rel="noreferrer" className="grid h-11 w-11 place-items-center rounded-xl glass transition hover:scale-110 hover:text-[var(--neon)]">
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={150} className="lg:col-span-3">
          <form onSubmit={onSubmit} className="rounded-2xl glass glow-border p-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1 block text-xs uppercase tracking-wider text-foreground/60">Name</span>
                <input required type="text" name="name" placeholder="Your name"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-[var(--neon)] focus:ring-2 focus:ring-[var(--neon)]/40" />
              </label>
              <label className="block">
                <span className="mb-1 block text-xs uppercase tracking-wider text-foreground/60">Email</span>
                <input required type="email" name="email" placeholder="you@example.com"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-[var(--neon)] focus:ring-2 focus:ring-[var(--neon)]/40" />
              </label>
            </div>
            <label className="mt-4 block">
              <span className="mb-1 block text-xs uppercase tracking-wider text-foreground/60">Message</span>
              <textarea required name="message" rows={6} placeholder="Tell me about your project…"
                className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-[var(--neon)] focus:ring-2 focus:ring-[var(--neon)]/40" />
            </label>
            <button
              type="submit"
              disabled={sending}
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl neon-btn px-5 py-3 text-sm disabled:opacity-70"
            >
              <Send className={`h-4 w-4 ${sending ? "animate-pulse" : ""}`} />
              {sending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
