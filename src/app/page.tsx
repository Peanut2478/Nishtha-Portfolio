import { ArrowDown, ArrowUpRight, FileText, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ProjectCard from "../components/ProjectCard";
import { projects } from "./projects";

const github = "https://github.com/Peanut2478";
const linkedin = "https://www.linkedin.com/in/nishtha-patel-mj2478/";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="shell site-header">
        <a className="wordmark" href="#" aria-label="Nishtha Patel home">NP<span>.</span></a>
        <nav aria-label="Main navigation">
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="main">
        <section className="shell hero" aria-labelledby="hero-title">
          <p className="eyebrow">Texas A&amp;M University</p>
          <h1 id="hero-title">Nishtha Patel<span>.</span></h1>
          <p className="hero-subtitle">Software engineering <span>&amp;</span> applied machine learning</p>
          <p className="hero-intro">I build full-stack applications and use data to study how biological and robotic systems behave.</p>
          <div className="link-row hero-actions">
            <a className="primary-button" href="#projects">Explore projects <ArrowDown size={17} aria-hidden="true" /></a>
            <a className="secondary-button" href="#resumes"><FileText size={17} aria-hidden="true" /> Résumés</a>
          </div>
          <div className="link-row socials">
            <a href={github} target="_blank" rel="noopener noreferrer"><FaGithub aria-hidden="true" /> GitHub</a>
            <a href={linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin aria-hidden="true" /> LinkedIn</a>
          </div>
        </section>

        <section className="shell content-section" id="projects" aria-labelledby="projects-title">
          <h2 id="projects-title">Selected projects</h2>
          <div className="project-grid">
            {projects.map((project) => <ProjectCard key={project.title} project={project} />)}
          </div>
        </section>

        <section className="shell content-section" id="about" aria-labelledby="about-title">
          <h2 id="about-title">About me</h2>
          <div className="about-grid">
            <div className="about-copy">
              <p>I’m a Texas A&amp;M student interested in the point where software engineering and research meet. I enjoy building the data pipelines and interfaces that help turn a prototype into something people can use.</p>
              <p>At Thrive, I lead research and development on personalized glucose forecasting. On the POBS team at Turtle Robotics, I work on state estimation and navigation in simulation. I’ve also built a handwritten-digit classifier and its web interface through Girls Who Code.</p>
            </div>
            <div className="resume-panel" id="resumes">
              <h3>Résumés</h3>
              <a href="/resume-swe.pdf" target="_blank" rel="noopener noreferrer">Software engineering (PDF) <ArrowUpRight size={17} aria-hidden="true" /></a>
              <a href="/resume-ai.pdf" target="_blank" rel="noopener noreferrer">AI / machine learning (PDF) <ArrowUpRight size={17} aria-hidden="true" /></a>
            </div>
          </div>
        </section>

        <section className="shell content-section contact" id="contact" aria-labelledby="contact-title">
          <h2 id="contact-title">Get in touch</h2>
          <p>I’m interested in software engineering and AI/ML internships for Summer 2027.</p>
          <div className="link-row">
            <a className="primary-button" href="mailto:nishtha_1278@tamu.edu"><Mail size={17} aria-hidden="true" /> Email me</a>
            <a className="secondary-button" href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={17} aria-hidden="true" /></a>
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
