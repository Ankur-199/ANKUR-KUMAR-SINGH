import {
  SiReact, SiNodedotjs, SiMongodb, SiJavascript, SiTypescript, SiTailwindcss,
  SiExpress, SiNextdotjs, SiMysql, SiFirebase, SiGit, SiGithub, SiDocker,
  SiPython, SiHtml5, SiCss, SiC, SiPostman,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import kishore from "../images/Kishore.jpg";
import madhav from "../images/madhav.png";
import adarsh from "../images/adarsh.jpg";
import daksh from "../images/daksh.jpg";
import anant from "../images/anant.jpg";
import vishwesh from "../images/vishwesh.jpg";
import om from "../images/om.png";
import portfolio from "../images/portfolio.png";
import resume_builder from "../images/resume_builder.png";
import optiCrop from "../images/optiCrop.png";
import wanderlust from "../images/wanderlust.png";
import track from "../images/track.png";
import ospc from "../images/ospc.png";
import rcvitc from "../images/rcvitc.png";
import venue from "../images/venue.png";

export const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
];

export const ROLES = [
  "Full Stack Developer",
  "Problem Solver",
  "Web Developer",
  "Open Source Enthusiast",
];

export const STATS = [
  { value: 10, suffix: "+", label: "Projects Completed" },
  { value: 15, suffix: "+", label: "Technologies Learned" },
  { value: 0, suffix: "Fresher", label: "Years of Experience" },
  { value: 200, suffix: "+", label: "Problems Solved" },
];

export const PROJECTS = [
  {
    title: "AI Resume Builder",
    desc: "AI-powered resume builder with customizable templates and real-time feedback for job seekers.",
    tech: ["React", "Node", "MongoDB", "Express"],
    category: "Full Stack",
    image: resume_builder,
    github: "https://github.com/Ankur-199/AI-Resume-Builder",
    live: "#",
  },
  {
    title: "Wanderlust Travel",
    desc: "A travel planning app that helps users discover and book their dream destinations.",
    tech: ["HTML&CSS", "Node", "Express", "MongoDB"],
    category: "Full Stack",
    image: wanderlust,
    github: "https://github.com/Ankur-199/Wanderlust",
    live: "https://mywanderlust-g93a.onrender.com/",
  },
  {
    title: "Portfolio Website",
    desc: "This very portfolio — a futuristic premium developer site with motion design.",
    tech: ["TypeScript", "Tailwind", "JavaScript"],
    category: "Frontend",
    image: portfolio,
    github: "https://github.com/Ankur-199/Portfolio-Website",
    live: "#",
  },
  {
    title: "Track And Trail",
    desc: "Developed an AI–IoT Blockchain system for real-time tourist safety monitoring with anomaly detection.",
    tech: ["HTML&CSS", "Node", "MongoDB", "Express","AI/ML"],
    category: "Full Stack",
    image: track,
    github: "https://github.com/Ankur-199/Smart-Tourist-Safety-Platform",
    live: "#",
  },
  {
    title: "OSPC VIT Website",
    desc: "Modern website for the open source programming Club with event announcements and member profiles.",
    tech: ["TypeScript", "Node", "Tailwind"],
    category: "Frontend",
    image: ospc,
    github: "https://github.com/OSPC-VITC/ospc-website",
    live: "#",
  },
  {
    title: "Robotics Club Website",
    desc: "Modern website for the Robotics Club with event announcements and member profiles.",
    tech: ["React", "Next.js", "Tailwind"],
    category: "Frontend",
    image: rcvitc,
    github: "https://github.com/Ankur-199/Robotic-Club",
    live: "#",
  },
  {
    title: "OptiCrop - AI prediction System",
    desc: "AI-powered crop prediction system that analyzes soil and weather data to recommend optimal crops for farmers.",
    tech: ["Python", "Flask", "Scikit-learn"],
    category: "AI/ML",
    image: optiCrop,
    github: "https://github.com/Ankur-199/OptiCrop",
    live: "https://opticrop-ml-model.onrender.com/",
  },
  {
    title: "VenueTrack",
    desc: "A web application for managing event venues, allowing users to book, track, and review venues for various occasions.",
    tech: ["JavaScript", "Express", "Firebase", "Node.js"],
    category: "Backend",
    image: venue,
    github: "https://github.com/Ankur-199/Venue-Booking",
    live: "#",
  },
];

export const PROJECT_CATEGORIES = ["All", "Full Stack", "Frontend", "Backend", "AI/ML"];

export const SKILL_COLUMNS = [
  [
    { name: "React", Icon: SiReact, color: "#61DAFB" },
    { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
    { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
    { name: "Tailwind", Icon: SiTailwindcss, color: "#38BDF8" },
    { name: "HTML5", Icon: SiHtml5, color: "#E34F26" },
    { name: "CSS3", Icon: SiCss, color: "#1572B6" },
  ],
  [
    { name: "Node.js", Icon: SiNodedotjs, color: "#3C873A" },
    { name: "Express", Icon: SiExpress, color: "#ffffff" },
    { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
    { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
    { name: "Firebase", Icon: SiFirebase, color: "#FFCA28" },
    { name: "REST API", Icon: TbApi, color: "#a78bfa" },
  ],
  [
    { name: "Git", Icon: SiGit, color: "#F05032" },
    { name: "GitHub", Icon: SiGithub, color: "#ffffff" },
    { name: "Docker", Icon: SiDocker, color: "#2496ED" },
    { name: "Postman", Icon: SiPostman, color: "#FF6C37" },
    { name: "Python", Icon: SiPython, color: "#3776AB" },
    { name: "Java", Icon: FaJava, color: "#f89820" },
    { name: "C", Icon: SiC, color: "#A8B9CC" },
  ],
];

export const EXPERIENCE = [
  {
    role: "Web Developer",
    company: "OSPC VIT Chennai",
    duration: "2024 — 2026",
    desc: "Enhanced OSPC website features and improved UI/UX, boosting user engagement.",
    tech: ["MERN", "Tailwind"],
  },
  {
    role: "Full Stack Developer",
    company: "Freelance",
    duration: "2026 — Present",
    desc: "Building production-grade MERN apps for startups including dashboards, auth systems, and AI integrations.",
    tech: ["React", "Node", "MongoDB", "Tailwind"],
  },
];

export const EDUCATION = [
  {
    school: "B.Tech in Electronic and Computer Engineering",
    place: "Vellore Institute of Technology Chennai",
    duration: "2023 — 2027",
    desc: "Focused on data structures, algorithms, web technologies and software engineering.",
    grade: "CGPA: 8.5 / 10",
  },
  {
    school: "Senior Secondary (12th)",
    place: "Kendriya Vidyalaya No.2 Ambala (CBSE Board)",
    duration: "2020 — 2022",
    desc: "Science stream with Computer Science as a major elective.",
    grade: "87%",
  },
  {
    school: "Secondary (10th)",
    place: "Kendriya Vidyalaya No.2 Ambala (CBSE Board)",
    duration: "2019 — 2020",
    desc: "Strong foundation in mathematics and science fundamentals.",
    grade: "83%",
  },
];

export const TESTIMONIALS = [
  { name: "Kishore Shashvat", company: "AI Engineer", text: "Ankur delivered our MERN platform ahead of schedule. Super clean code and great communication.", avatar: kishore },
  { name: "Madhav Mittal", company: "Software Engineer", text: "Ankur's full-stack expertise, strong debugging skills, and commitment to excellence make him an outstanding developer to work with.", avatar: madhav },
  { name: "Adarsh Kumar", company: "Software Engineer", text: "From designing intuitive user interfaces to developing secure backend APIs, Ankur consistently delivers high-quality work. His professionalism and commitment to deadlines stand out.", avatar: adarsh },
  { name: "Daksh Arora", company: "Full Stack Developer", text: "Working with Ankur was a great experience. He quickly understood project requirements, built robust features, and ensured a smooth user experience from start to finish.", avatar: daksh },
  { name: "Anant Shukla", company: "AI Engineer", text: "Ankur demonstrates excellent problem-solving skills and a strong understanding of modern web technologies. His dedication to quality and attention to detail are truly impressive.", avatar: anant },
  { name: "Vishwesh Pal Saini", company: "AI Engineer", text: "An incredibly reliable developer. Handled both frontend and backend with confidence.", avatar: vishwesh },
  { name: "Om Mishra", company: "Security Content Writer", text: "Ankur combines technical expertise with creativity. He approaches challenges with a solution-oriented mindset and always strives to build products that create real impact.", avatar: om }
];
