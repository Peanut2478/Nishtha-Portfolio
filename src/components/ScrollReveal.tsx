"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;

        entry.target.setAttribute("data-reveal", "entered");
        observer.unobserve(entry.target);
      }
    }, { rootMargin: "0px 0px -32px 0px" });

    const observePending = () => {
      document.querySelectorAll('[data-reveal="pending"]').forEach((section) => observer.observe(section));
    };

    observePending();
    const changes = new MutationObserver(observePending);
    const gallery = document.getElementById("projects");
    if (gallery) changes.observe(gallery, { childList: true, subtree: true });

    return () => {
      changes.disconnect();
      observer.disconnect();
    };
  }, []);

  return null;
}
