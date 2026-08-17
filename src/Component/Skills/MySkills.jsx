import { useState } from "react";
import "./MySkills.css";

import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaComments,
  FaUsers,
  FaBrain,
  FaClock,
  FaWordpress,
  FaShieldAlt,
  FaLayerGroup,
} from "react-icons/fa";
import { MdDevices } from "react-icons/md";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiMui,
  SiReactquery,
  SiAxios,
  SiStrapi,
  SiFirebase,
  SiAdobexd,
  SiFramer,
  SiSupabase,
  SiVite,
  SiJira,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

const skillsData = [
  // Frontend Core & Frameworks
  { name: "React.js", category: "frontend", level: "Advanced", icon: <FaReact /> },
  { name: "Next.js", category: "frontend", level: "Advanced", icon: <SiNextdotjs /> },
  { name: "TypeScript", category: "frontend", level: "Advanced", icon: <SiTypescript /> },
  { name: "JavaScript (ES6+)", category: "frontend", level: "Advanced", icon: <FaJs /> },
  { name: "HTML5", category: "frontend", level: "Advanced", icon: <FaHtml5 /> },
  { name: "CSS3", category: "frontend", level: "Advanced", icon: <FaCss3Alt /> },
  { name: "Vite", category: "frontend", level: "Advanced", icon: <SiVite /> },

  // State & Data
  { name: "Zustand", category: "state", level: "Advanced", icon: <FaLayerGroup /> },
  { name: "Context API", category: "state", level: "Advanced", icon: <FaReact /> },
  { name: "React Query", category: "state", level: "Intermediate", icon: <SiReactquery /> },
  { name: "RESTful APIs", category: "state", level: "Advanced", icon: <TbApi /> },
  { name: "Axios", category: "state", level: "Advanced", icon: <SiAxios /> },

  // UI & Styling
  { name: "Tailwind CSS", category: "ui", level: "Advanced", icon: <SiTailwindcss /> },
  { name: "Bootstrap", category: "ui", level: "Advanced", icon: <FaBootstrap /> },
  { name: "Material UI", category: "ui", level: "Intermediate", icon: <SiMui /> },
  { name: "Framer Motion", category: "ui", level: "Intermediate", icon: <SiFramer /> },
  { name: "Responsive UI", category: "ui", level: "Advanced", icon: <MdDevices /> },

  // Backend Integration & Cloud
  { name: "Supabase", category: "backend", level: "Intermediate", icon: <SiSupabase /> },
  { name: "Firebase", category: "backend", level: "Intermediate", icon: <SiFirebase /> },
  { name: "Strapi CMS", category: "backend", level: "Intermediate", icon: <SiStrapi /> },
  { name: "Auth & Security", category: "backend", level: "Intermediate", icon: <FaShieldAlt /> },

  // Tools & Workflow
  { name: "Git", category: "tools", level: "Advanced", icon: <FaGitAlt /> },
  { name: "GitHub", category: "tools", level: "Advanced", icon: <FaGithub /> },
  { name: "Jira", category: "tools", level: "Advanced", icon: <SiJira /> },
  { name: "Figma", category: "tools", level: "Intermediate", icon: <FaFigma /> },
  { name: "Adobe XD", category: "tools", level: "Intermediate", icon: <SiAdobexd /> },
  { name: "WordPress", category: "tools", level: "Intermediate", icon: <FaWordpress /> },

  // Soft Skills
  { name: "Problem Solving", category: "soft", level: "Advanced", icon: <FaBrain /> },
  { name: "Agile Communication", category: "soft", level: "Advanced", icon: <FaComments /> },
  { name: "Teamwork & Mentorship", category: "soft", level: "Advanced", icon: <FaUsers /> },
  { name: "Sprint Management", category: "soft", level: "Advanced", icon: <FaClock /> },
];

const categoryFilters = [
  { id: "all", label: "All Skills" },
  { id: "frontend", label: "Frontend Core" },
  { id: "state", label: "State & Data" },
  { id: "ui", label: "UI & Styling" },
  { id: "backend", label: "Backend Integration" },
  { id: "tools", label: "Tools & Agile" },
  { id: "soft", label: "Soft Skills" },
];

function MySkills() {
  const [filter, setFilter] = useState("all");

  const filteredSkills =
    filter === "all"
      ? skillsData
      : skillsData.filter((s) => s.category === filter);

  return (
    <section id="skills">
      <h2 className="section-title">Technical Expertise</h2>
      <p className="skills-subtitle">
        Curated modern technologies and tools I leverage daily to engineer robust, high-performance web solutions.
      </p>

      <div className="skill-filters">
        {categoryFilters.map((f) => (
          <button
            key={f.id}
            className={`filter-btn ${filter === f.id ? "active" : ""}`}
            onClick={() => setFilter(f.id)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="skills-grid">
        {filteredSkills.map((skill) => (
          <div className="skill-card" key={skill.name}>
            <div className="skill-icon">{skill.icon}</div>
            <span className="skill-name">{skill.name}</span>

            <span className={`skill-badge ${skill.level.toLowerCase()}`}>
              {skill.level}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MySkills;
