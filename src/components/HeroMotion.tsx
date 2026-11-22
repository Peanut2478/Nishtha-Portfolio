"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";

const roles = ["Software engineering", "Applied machine learning", "Robotics research"];

export default function HeroMotion() {
  const reducedMotion = useReducedMotion();
  const [role, setRole] = useState(0);
  const [length, setLength] = useState(roles[0].length);
  const [deleting, setDeleting] = useState(false);
  const text = roles[role];

  useEffect(() => {
    if (reducedMotion !== false) return;

    const delay = deleting ? 32 : length === text.length ? 1750 : 65;
    const timer = window.setTimeout(() => {
      if (deleting && length === 0) {
        setRole((current) => (current + 1) % roles.length);
        setDeleting(false);
      } else if (!deleting && length === text.length) {
        setDeleting(true);
      } else {
        setLength((current) => current + (deleting ? -1 : 1));
      }
    }, delay);

    return () => window.clearTimeout(timer);
  }, [deleting, length, reducedMotion, text]);

  return (
    <p className="hero-subtitle">
      <span className="sr-only">Software engineering, applied machine learning, and robotics research</span>
      <span className="hero-role" aria-hidden="true">
        {reducedMotion === false ? text.slice(0, length) : roles[0]}
      </span>
    </p>
  );
}
