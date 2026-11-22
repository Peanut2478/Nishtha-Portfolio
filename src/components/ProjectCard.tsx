"use client";

import Image from "next/image";
import { ArrowUpRight, ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { useRef, useState } from "react";
import type { Project } from "../app/projects";

function ProjectPreview({ images }: { images: readonly { src: string; alt: string; caption?: string }[] }) {
  const [index, setIndex] = useState(0);
  const { src, alt, caption } = images[index];
  const controls = images.length > 1 && (
    <div className="gallery-controls">
      <button type="button" aria-label="Previous image" disabled={index === 0} onClick={() => setIndex(index - 1)}><ChevronLeft size={18} /></button>
      <span aria-live="polite">{index + 1} / {images.length}{caption ? ` · ${caption}` : ""}</span>
      <button type="button" aria-label="Next image" disabled={index === images.length - 1} onClick={() => setIndex(index + 1)}><ChevronRight size={18} /></button>
    </div>
  );
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
      {controls || (caption && <figcaption>{caption}</figcaption>)}
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
        <div className="gallery-modal-image"><Image src={src} alt={alt} fill sizes="94vw" unoptimized /></div>
        {controls}
      </dialog>
    </figure>
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  const detailsDialog = useRef<HTMLDialogElement>(null);
  const { title, images, category, description, details, tech, links } = project;

  return (
    <article className="project-card" data-reveal="pending">
      {images && <ProjectPreview images={images} />}
      <div className="project-copy">
        <p className="eyebrow">{category}</p>
        <h3>{title}</h3>
        <p className="muted">{description}</p>
        <ul className="tags" aria-label="Technologies">
          {tech.map((technology) => <li key={technology}>{technology}</li>)}
        </ul>
        <button className="project-detail-button" type="button" onClick={() => detailsDialog.current?.showModal()}>
          Project details <ArrowUpRight size={15} aria-hidden="true" />
        </button>
        <dialog className="project-detail-dialog" ref={detailsDialog} aria-label={title}>
          <form method="dialog">
            <button type="submit" aria-label="Close project details"><X size={22} /></button>
          </form>
          <p className="eyebrow">{category}</p>
          <h3>{title}</h3>
          <p>{description}</p>
          {details.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </dialog>
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
