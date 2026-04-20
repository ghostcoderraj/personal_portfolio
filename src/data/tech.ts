import { Tech } from "@/types";
import {
    SiJavascript,
    SiReact,
    SiTailwindcss,
    SiHtml5,
    SiCss3,
    SiNextdotjs,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiPostgresql,
    SiPrisma,
    SiPostman,
    SiGit,
    SiGithub,
    SiVercel,
    SiTypescript
} from "react-icons/si";
import React from "react";

export const techStack: Tech[] = [
    { name: "HTML5", category: "Frontend", level: "Advanced", icon: React.createElement(SiHtml5, { color: "#E34F26" }) },

    { name: "CSS3", category: "Frontend", level: "Advanced", icon: React.createElement(SiCss3, { color: "#1572B6" }) },
    { name: "JavaScript", category: "Frontend", level: "Advanced", icon: React.createElement(SiJavascript, { color: "#F7DF1E" }) },
    { name: "TypeScript", category: "Frontend", level: "Advanced", icon: React.createElement(SiTypescript, { color: "#3178C6" }) },
    { name: "React", category: "Frontend", level: "Advanced", icon: React.createElement(SiReact, { color: "#61DAFB" }) },
    { name: "Tailwind CSS", category: "Frontend", level: "Advanced", icon: React.createElement(SiTailwindcss, { color: "#06B6D4" }) },
   

    { name: "Next.js", category: "Backend", level: "Advanced", icon: React.createElement(SiNextdotjs, { color: "#ffffff" }) },
    { name: "Node.js", category: "Backend", level: "Advanced", icon: React.createElement(SiNodedotjs, { color: "#68A063" }) },
    { name: "Express", category: "Backend", level: "Advanced", icon: React.createElement(SiExpress, { color: "#ffffff" }) },

    { name: "MongoDB", category: "Database", level: "Advanced", icon: React.createElement(SiMongodb, { color: "#47A248" }) },
    { name: "PostgreSQL", category: "Database", level: "Advanced", icon: React.createElement(SiPostgresql, { color: "#336791" }) },
    { name: "Prisma", category: "Database", level: "Intermediate", icon: React.createElement(SiPrisma, { color: "#ffffff" }) },

    { name: "Postman", category: "Tools", level: "Advanced", icon: React.createElement(SiPostman, { color: "#FF6C37" }) },
    { name: "Git", category: "Tools", level: "Advanced", icon: React.createElement(SiGit, { color: "#F05032" }) },
    { name: "GitHub", category: "Tools", level: "Advanced", icon: React.createElement(SiGithub, { color: "#ffffff" }) },
    { name: "Vercel", category: "Tools", level: "Advanced", icon: React.createElement(SiVercel, { color: "#ffffff" }) },
];

export const categories = ["All", "Frontend", "Backend", "Database", "Tools"];
