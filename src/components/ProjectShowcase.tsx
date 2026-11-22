"use client";

import { useState } from "react";
import { projects } from "../app/projects";
import ProjectCard from "./ProjectCard";

const filters = ["All projects", "AI / ML", "Full stack", "Robotics"] as const;
export default function ProjectShowcase() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All projects");

  return (
    <>
      <div className="project-filters" role="group" aria-label="Filter projects">
        {filters.map((option) => (
          <button type="button" key={option} aria-pressed={filter === option} onClick={() => setFilter(option)}>
            {option}
          </button>
        ))}
      </div>
      <div className="project-grid">
        {projects
          .filter((project) => filter === "All projects" || project.group === filter)
          .map((project) => <ProjectCard key={project.title} project={project} />)}
      </div>
    </>
  );
}
