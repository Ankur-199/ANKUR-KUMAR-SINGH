import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import Navbar from "../components/portfolio/Navbar";
import Hero from "../components/portfolio/Hero";
import About from "../components/portfolio/About";
import Projects from "../components/portfolio/Projects";
import Skills from "../components/portfolio/Skills";
import Experience from "../components/portfolio/Experience";
import Education from "../components/portfolio/Education";
import Testimonials from "../components/portfolio/Testimonials";
import Contact from "../components/portfolio/Contact";
import Footer from "../components/portfolio/Footer";
import BackgroundFX from "../components/portfolio/BackgroundFX";
import ScrollProgress from "../components/portfolio/ScrollProgress";
import Cursor from "../components/portfolio/Cursor";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ankur Kumar Singh — Full Stack Developer" },
      {
        name: "description",
        content:
          "Portfolio of Ankur Kumar Singh — Full Stack Developer building scalable, modern web applications with React, Node.js and MongoDB.",
      },
      { property: "og:title", content: "Ankur Kumar Singh — Full Stack Developer" },
      {
        property: "og:description",
        content:
          "Premium portfolio showcasing projects, skills and experience of Ankur Kumar Singh, a Full Stack MERN developer.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen text-foreground">
      <BackgroundFX />
      <ScrollProgress />
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Education />
        <Skills />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <Toaster theme="dark" position="top-right" richColors />
    </div>
  );
}
