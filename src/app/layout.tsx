import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nishtha Patel | Software Engineering & Applied ML",
  description: "Explore Nishtha Patel’s projects in full-stack software, applied machine learning, and robotics at Texas A&M University.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
