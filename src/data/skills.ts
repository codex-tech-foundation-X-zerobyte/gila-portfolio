import type { Skill } from "@/types";

/**
 * Add or edit skills here. `proficiency` drives the progress bar (0-100).
 */
export const skills: Skill[] = [
  {
    name: "HTML5",
    category: "Frontend",
    proficiency: 75,
    level: "Intermediate",
    description: "Building structured and accessible web pages.",
  },
  {
    name: "CSS3",
    category: "Frontend",
    proficiency: 70,
    level: "Intermediate",
    description: "Creating responsive and modern user interfaces.",
  },
  {
    name: "JavaScript",
    category: "Frontend",
    proficiency: 65,
    level: "Intermediate",
    description: "Developing interactive web experiences and functionality.",
  },
  {
    name: "React",
    category: "Frontend",
    proficiency: 55,
    level: "Beginner-Intermediate",
    description: "Building reusable and component-based user interfaces.",
  },
  {
    name: "Git & GitHub",
    category: "Tools",
    proficiency: 60,
    level: "Intermediate",
    description: "Version control and collaborative development.",
  },
  {
    name: "Cybersecurity Fundamentals",
    category: "Cybersecurity",
    proficiency: 60,
    level: "Beginner-Intermediate",
    description: "Understanding security concepts, threats, and best practices.",
  },
  {
    name: "VS Code",
    category: "Tools",
    proficiency: 75,
    level: "Intermediate",
    description: "Development environment and workflow management.",
  },
];
