"use client";

import { Code2, Cpu, Layers3 } from "lucide-react";
import { useEffect, useRef } from "react";
import "./opening-sequence.css";

const visitKey = "nishtha-portfolio-intro";

export default function OpeningSequence() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const firstVisit = useRef<boolean | null>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    if (firstVisit.current === null) {
      firstVisit.current = true;
      try {
        firstVisit.current = sessionStorage.getItem(visitKey) === null;
        if (firstVisit.current) sessionStorage.setItem(visitKey, "seen");
      } catch {
        // The introduction can still play when browser storage is unavailable.
      }
    }
    if (!firstVisit.current) return;

    dialog.showModal();
    const timer = window.setTimeout(() => dialog.close(), 3650);

    return () => {
      window.clearTimeout(timer);
      dialog.close();
    };
  }, []);

  return (
    <dialog ref={dialogRef} className="opening-sequence" aria-label="Portfolio introduction">
      <div className="opening-content">
        <div className="opening-symbols" aria-hidden="true">
          <span><Code2 /></span><span><Cpu /></span><span><Layers3 /></span>
        </div>
        <p className="opening-name"><span>Welcome to</span><strong>Nishtha’s portfolio</strong></p>
        <p className="opening-role">Software engineering &amp; applied ML</p>
        <div className="opening-progress" aria-hidden="true" />
      </div>
      <form method="dialog">
        <button type="submit" autoFocus>Skip intro</button>
      </form>
    </dialog>
  );
}
