import { SkillsSlice } from "./types";

const SKILLS = [
  "Javascript / Typescript",
  "React",
  "Tailwind CSS",
  "CSS",
  "Java",
  "React Native",
  "Next.js",
  "Node.js",
  "SQL",
  "No-SQL",
  "Solidity (Basic)",
  "Python",
  "Vite",
  "Figma",
  "Wordpress",
];

export const skillsContent: { en: SkillsSlice; es: SkillsSlice } = {
  en: { skills: SKILLS },
  es: { skills: SKILLS },
};