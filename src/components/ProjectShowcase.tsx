"use client";

import Image from "next/image";
import { Award, Code2, FolderOpen } from "lucide-react";
import { useState } from "react";
import { certificates, skills } from "../app/showcase-data";
import { projects } from "../app/projects";
import ProjectCard from "./ProjectCard";

const filters = ["All projects", "AI / ML", "Full stack", "Robotics"] as const;
const views = [
  { label: "Projects", icon: FolderOpen },
  { label: "Certificates", icon: Award },
  { label: "Tech stack", icon: Code2 },
] as const;

export default function ProjectShowcase() {
  const [selection, setSelection] = useState<{ index: number; direction: "next" | "previous" | null }>({
    index: 0,
    direction: null,
  });
  const view = views[selection.index].label;
  const [filter, setFilter] = useState<(typeof filters)[number]>("All projects");

  return (
    <>
      <div className="showcase-views" role="group" aria-label="Portfolio showcase">
        {views.map(({ label, icon: Icon }, index) => (
          <button type="button" key={label} aria-pressed={view === label} onClick={() => { if (index !== selection.index) setSelection({ index, direction: index > selection.index ? "next" : "previous" }); }}>
            <Icon size={20} aria-hidden="true" />{label}
          </button>
        ))}
      </div>
      <div className="showcase-panel" key={view} data-view-transition={selection.direction !== null} data-direction={selection.direction ?? undefined}>
        {view === "Projects" && <>
          <div className="project-filters" role="group" aria-label="Filter projects">
            {filters.map((option) => (
              <button type="button" key={option} aria-pressed={filter === option} onClick={() => setFilter(option)}>
                {option}
              </button>
            ))}
          </div>
          <div className="project-grid" key={filter}>
            {projects
              .filter((project) => filter === "All projects" || project.group === filter)
              .map((project) => <ProjectCard key={project.title} project={project} />)}
          </div>
        </>}
        {view === "Certificates" && (
          <div className="skills-grid">
            {certificates.map(({ slug, title, issuer }) => (
              <article className="resume-panel certificate-card" key={slug}>
                <a className="certificate-image" href={`/certificates/${slug}.pdf`} target="_blank" rel="noopener noreferrer" aria-label={`Open ${title} certificate PDF`}>
                  <Image src={`/certificates/${slug}.jpg`} alt="" fill sizes="(min-width: 800px) 360px, 90vw" unoptimized />
                </a>
                <h3>{title}</h3>
                <p className="muted">{issuer}</p>
                <a href={`/certificates/${slug}.pdf`} target="_blank" rel="noopener noreferrer">View certificate PDF ↗</a>
              </article>
            ))}
          </div>
        )}
        {view === "Tech stack" && (
          <ul className="tech-categories">
            {skills.map(({ title, tools }) => (
              <li key={title}>
                <h3>{title}</h3>
                <ul className="skill-icons">
                  {tools.map(([tool, Logo]) => (
                    <li key={tool}>
                      <span className="skill-logo">
                        {typeof Logo === "string" ? (
                          <Image src={`/tech/${Logo}.svg`} alt="" width={60} height={60} unoptimized />
                        ) : (
                          <Logo size={42} color="#944a24" aria-hidden="true" />
                        )}
                      </span>
                      <span>{tool}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
