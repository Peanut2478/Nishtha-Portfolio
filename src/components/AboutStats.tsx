"use client";

import { Award, CalendarDays, FolderOpen } from "lucide-react";
import { animate, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

export default function AboutStats({
  projectCount,
  certificateCount,
  yearsOfExperience,
}: {
  projectCount: number;
  certificateCount: number;
  yearsOfExperience: number;
}) {
  const ref = useRef<HTMLUListElement>(null);
  const inView = useInView(ref, { once: true, amount: .25 });
  const [progress, setProgress] = useState(1);

  useEffect(() => {
    if (!inView || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const animation = animate(0, 1, { duration: .85, ease: "easeOut", onUpdate: setProgress });
    return () => animation.stop();
  }, [inView]);

  const stats = [
    { label: "Projects", value: projectCount, icon: FolderOpen },
    { label: "Certificates", value: certificateCount, icon: Award },
    { label: "Years of experience", value: yearsOfExperience, icon: CalendarDays, suffix: "+" },
  ];

  return (
    <ul className="about-stats" ref={ref} aria-label="Portfolio totals">
      {stats.map(({ label, value, icon: Icon, suffix }) => (
        <li key={label}>
          <div className="about-stat-top">
            <Icon size={22} aria-hidden="true" />
            <strong aria-hidden="true">{Math.round(value * progress)}{suffix}</strong>
            <span className="sr-only">{value}{suffix}</span>
          </div>
          <span>{label}</span>
        </li>
      ))}
    </ul>
  );
}
