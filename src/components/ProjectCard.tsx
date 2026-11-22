"use client";

import Image from "next/image";
import { ArrowUpRight, Maximize2, X } from "lucide-react";
import { useRef } from "react";
import type { Project } from "../app/projects";

function ProjectPreview({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  const dialog = useRef<HTMLDialogElement>(null);

  return (
    <figure>
      <button
        type="button"
        className="project-preview"
        aria-label={`Enlarge ${caption ?? alt}`}
        onClick={() => dialog.current?.showModal()}
      >
        <Image src={src} alt={alt} fill sizes="(min-width: 760px) 520px, 90vw" unoptimized />
        <span aria-hidden="true"><Maximize2 size={16} /></span>
      </button>
      {caption && <figcaption>{caption}</figcaption>}
      <dialog
        ref={dialog}
        className="image-dialog"
        aria-label={caption ?? alt}
        onClick={(event) => {
          if (event.target === event.currentTarget) event.currentTarget.close();
        }}
      >
        <form method="dialog">
          <button type="submit" aria-label="Close image"><X size={22} /></button>
        </form>
        <Image src={src} alt={alt} fill sizes="94vw" unoptimized />
      </dialog>
    </figure>
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  const { title, images, category, description, details, tech, links } = project;

  return (
    <article className="project-card">
      {images && (
        <div className={images.length > 1 ? "project-gallery" : undefined}>
          {images.map((image) => <ProjectPreview key={image.src} {...image} />)}
        </div>
      )}
      <div className="project-copy">
        <p className="eyebrow">{category}</p>
        <h3>{title}</h3>
        <p className="muted">{description}</p>
        <ul className="tags" aria-label="Technologies">
          {tech.map((technology) => <li key={technology}>{technology}</li>)}
        </ul>
        <details>
          <summary>Project details</summary>
          {details.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </details>
        {links.length > 0 && (
          <div className="link-row project-links">
            {links.map(({ label, href }) => (
              <a key={href} href={href} target="_blank" rel="noopener noreferrer">
                {label} <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
