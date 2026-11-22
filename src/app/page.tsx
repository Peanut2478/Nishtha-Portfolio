import AboutStats from "../components/AboutStats";
import { projects } from "./projects";
import { certificates } from "./showcase-data";
import ContactForm from "../components/ContactForm";
import ThemeToggle from "../components/ThemeToggle";
import HeroMotion from "../components/HeroMotion";
import { Activity, Code2, Cpu, Layers3 } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
import ProjectShowcase from "../components/ProjectShowcase";
import { ArrowDown, ArrowUpRight, FileText, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const email = "nishtha_1278@tamu.edu";
const github = "https://github.com/Peanut2478";
const linkedin = "https://www.linkedin.com/in/nishtha-patel-mj2478/";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="shell site-header">
        <a className="wordmark" href="#" aria-label="Nishtha Patel home">
          Nishtha<span>.</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <ThemeToggle />
        </nav>
      </header>

      <main id="main">
        <ScrollReveal />
        <section className="shell hero" aria-labelledby="hero-title">
          <div className="hero-ambient" aria-hidden="true">
            <i />
            <i />
            <i />
          </div>
          <div className="hero-copy">
            <p className="eyebrow">Texas A&amp;M University</p>
            <h1 id="hero-title">
              Nishtha <span>Patel</span>
            </h1>
            <HeroMotion />
            <p className="hero-intro">
              I build full-stack applications and use data to study how
              biological and robotic systems behave.
            </p>
            <div className="link-row hero-actions">
              <a className="primary-button" href="#projects">
                Explore projects <ArrowDown size={17} aria-hidden="true" />
              </a>
              <a className="secondary-button" href="#resumes">
                <FileText size={17} aria-hidden="true" /> Résumés
              </a>
            </div>
            <div className="link-row socials">
              <a href={github} target="_blank" rel="noopener noreferrer">
                <FaGithub aria-hidden="true" /> GitHub
              </a>
              <a href={linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin aria-hidden="true" /> LinkedIn
              </a>
            </div>
          </div>
          <div className="hero-feature hero-illustration" aria-hidden="true">
            <div className="illustration-orbit" />
            <div className="illustration-window">
              <div className="illustration-bar">
                <i />
                <i />
                <i />
              </div>
              <Code2 size={56} />
              <div className="illustration-lines">
                <i />
                <i />
                <i />
                <i />
              </div>
            </div>
            <div className="illustration-tile tile-chip">
              <Cpu size={30} />
            </div>
            <div className="illustration-tile tile-wave">
              <Activity size={32} />
            </div>
            <div className="illustration-tile tile-stack">
              <Layers3 size={27} />
            </div>
          </div>
        </section>

        <section
          className="shell content-section"
          id="about"
          data-reveal="pending"
          aria-labelledby="about-title"
        >
          <h2 id="about-title">About me</h2>
          <div className="about-grid">
            <div className="about-copy">
              <p>
                I’m a Computer Science student at Texas A&M fascinated by how
                complex systems, both biological and mechanical,work under the
                hood. I like using software and data to decode messy real-world
                signals, figure out why things behave the way they do, and build
                tools that make sense of it all.
              </p>
            </div>
            <div className="resume-panel" id="resumes">
              <h3>Résumés</h3>
              <a
                href="/resume-swe.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Software engineering (PDF){" "}
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
              <a
                href="/resume-ai.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                AI / machine learning (PDF){" "}
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </div>
          </div>
          <AboutStats
            projectCount={projects.length}
            certificateCount={certificates.length}
            yearsOfExperience={5}
          />
        </section>

        <section
          className="shell content-section"
          id="projects"
          aria-labelledby="projects-title"
        >
          <h2 id="projects-title" data-reveal="pending">
            Portfolio showcase
          </h2>
          <ProjectShowcase />
        </section>

        <section
          className="shell content-section contact"
          id="contact"
          data-reveal="pending"
          aria-labelledby="contact-title"
        >
          <h2 id="contact-title">Get in touch</h2>
          <div className="contact-grid">
            <div className="resume-panel">
              <h3>Contact information</h3>
              <p>
                I’m interested in software engineering and AI/ML internships for
                Summer 2027.
              </p>
              <a href={`mailto:${email}`}>
                <Mail size={17} aria-hidden="true" /> {email}
              </a>
              <a href={linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn <ArrowUpRight size={17} aria-hidden="true" />
              </a>
              <a href={github} target="_blank" rel="noopener noreferrer">
                GitHub <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </div>
            <ContactForm email={email} />
          </div>
        </section>
      </main>
      <footer className="shell site-footer">
        <span>Nishtha Patel</span>
        <a href="#">Back to top ↑</a>
      </footer>
    </>
  );
}
