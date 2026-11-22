import type { Metadata } from "next";
import "./globals.css";
import OpeningSequence from "../components/OpeningSequence";

export const metadata: Metadata = {
  title: "Nishtha Patel | Software Engineering & Applied ML",
  description: "Explore Nishtha Patel’s projects in full-stack software, applied machine learning, and robotics at Texas A&M University.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `try { if (localStorage.getItem("portfolio-theme") === "light") document.documentElement.dataset.theme = "light"; } catch {}` }} />
      </head>
      <body>
        <OpeningSequence />
        {children}
      </body>
    </html>
  );
}
