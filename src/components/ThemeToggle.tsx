"use client";

import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  return (
    <button className="theme-toggle" type="button" aria-label="Toggle light or dark mode" onClick={() => {
      const root = document.documentElement;
      const theme = root.dataset.theme === "light" ? "dark" : "light";
      root.dataset.theme = theme;
      try { localStorage.setItem("portfolio-theme", theme); } catch {}
    }}>
      <Sun className="theme-sun" size={18} aria-hidden="true" />
      <Moon className="theme-moon" size={18} aria-hidden="true" />
    </button>
  );
}
