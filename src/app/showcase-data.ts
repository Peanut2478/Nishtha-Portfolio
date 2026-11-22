import { BrainCircuit, Database, Workflow } from "lucide-react";

export const skills = [
  {
    title: "Machine Learning & Scientific Computing",
    tools: [
      ["Python", "python"],
      ["PyTorch", "pytorch"],
      ["TensorFlow", "tensorflow"],
      ["scikit-learn", "scikitlearn"],
      ["NumPy", "numpy"],
      ["MATLAB", "matlab"],
      ["Data Processing", Workflow],
      ["Model Training", BrainCircuit],
    ],
  },
  {
    title: "Full-Stack & Mobile Development",
    tools: [
      ["TypeScript", "typescript"],
      ["JavaScript", "javascript"],
      ["Next.js", "nextjs"],
      ["Vue 3", "vuejs"],
      ["React Native", "react"],
      ["Expo", "expo"],
      ["Supabase", "supabase"],
      ["PostgreSQL", "postgresql"],
      ["SQL", Database],
    ],
  },
  {
    title: "Robotics & Computer Vision",
    tools: [
      ["ROS 2", "ros"],
      ["Gazebo", "gazebo"],
      ["OpenCV", "opencv"],
    ],
  },
  {
    title: "Software Engineering",
    tools: [
      ["Java", "java"],
      ["Git", "git"],
      ["GitHub", "github"],
      ["Linux", "linux"],
      ["Docker", "docker"],
    ],
  },
] as const;

export const certificates = [
  { slug: "computational-neuroscience", title: "Computational Neuroscience", issuer: "University of Washington · Coursera" },
  { slug: "matlab-onramp", title: "MATLAB Onramp", issuer: "MathWorks" },
  { slug: "pcep", title: "PCEP — Certified Entry-Level Python Programmer", issuer: "Python Institute" },
];
