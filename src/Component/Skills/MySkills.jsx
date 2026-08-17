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
  FaCode,
  FaTools,
  FaServer,
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

const skillCategories = [
  {
    id: "frontend",
    title: "Frontend Core & Architecture",
    icon: <FaCode />,
    accent: "emerald",
    skills: [
      { name: "React.js", level: "Advanced", icon: <FaReact /> },
      { name: "Next.js", level: "Advanced", icon: <SiNextdotjs /> },
      { name: "TypeScript", level: "Advanced", icon: <SiTypescript /> },
      { name: "JavaScript (ES6+)", level: "Advanced", icon: <FaJs /> },
      { name: "HTML5", level: "Advanced", icon: <FaHtml5 /> },
      { name: "CSS3", level: "Advanced", icon: <FaCss3Alt /> },
      { name: "Vite", level: "Advanced", icon: <SiVite /> },
    ],
  },
  {
    id: "state",
    title: "State & Data Layer",
    icon: <FaLayerGroup />,
    accent: "cyan",
    skills: [
      { name: "Zustand", level: "Advanced", icon: <FaLayerGroup /> },
      { name: "Context API", level: "Advanced", icon: <FaReact /> },
      { name: "React Query", level: "Intermediate", icon: <SiReactquery /> },
      { name: "RESTful APIs", level: "Advanced", icon: <TbApi /> },
      { name: "Axios", level: "Advanced", icon: <SiAxios /> },
    ],
  },
  {
    id: "ui",
    title: "UI Systems & Styling",
    icon: <MdDevices />,
    accent: "violet",
    skills: [
      { name: "Tailwind CSS", level: "Advanced", icon: <SiTailwindcss /> },
      { name: "Bootstrap", level: "Advanced", icon: <FaBootstrap /> },
      { name: "Material UI", level: "Intermediate", icon: <SiMui /> },
      { name: "Framer Motion", level: "Intermediate", icon: <SiFramer /> },
      { name: "Responsive UI", level: "Advanced", icon: <MdDevices /> },
    ],
  },
  {
    id: "backend",
    title: "Backend & Cloud Integration",
    icon: <FaServer />,
    accent: "rose",
    skills: [
      { name: "Supabase", level: "Intermediate", icon: <SiSupabase /> },
      { name: "Firebase", level: "Intermediate", icon: <SiFirebase /> },
      { name: "Strapi CMS", level: "Intermediate", icon: <SiStrapi /> },
      { name: "Auth & Security", level: "Intermediate", icon: <FaShieldAlt /> },
    ],
  },
  {
    id: "tools",
    title: "Tooling & Agile Workflow",
    icon: <FaTools />,
    accent: "amber",
    skills: [
      { name: "Git & GitHub", level: "Advanced", icon: <FaGithub /> },
      { name: "Jira (Agile/Scrum)", level: "Advanced", icon: <SiJira /> },
      { name: "Figma", level: "Intermediate", icon: <FaFigma /> },
      { name: "Adobe XD", level: "Intermediate", icon: <SiAdobexd /> },
      { name: "WordPress", level: "Intermediate", icon: <FaWordpress /> },
    ],
  },
  {
    id: "soft",
    title: "Engineering Strengths",
    icon: <FaBrain />,
    accent: "blue",
    skills: [
      { name: "Problem Solving", level: "Advanced", icon: <FaBrain /> },
      { name: "Agile Communication", level: "Advanced", icon: <FaComments /> },
      { name: "Teamwork & Mentorship", level: "Advanced", icon: <FaUsers /> },
      { name: "Sprint Delivery", level: "Advanced", icon: <FaClock /> },
    ],
  },
];

const categoryFilters = [
  { id: "all", label: "All Tech Stacks (29)" },
  { id: "frontend", label: "Frontend Core" },
  { id: "state", label: "State & Data" },
  { id: "ui", label: "UI & Styling" },
  { id: "backend", label: "Cloud & Backend" },
  { id: "tools", label: "Tools & Agile" },
  { id: "soft", label: "Soft Skills" },
];

function MySkills() {
  const [activeCategory, setActiveCategory] = useState("all");

  const displayedCategories =
    activeCategory === "all"
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeCategory);

  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">Technical Expertise</h2>
      <p className="skills-subtitle">
        Curated modern technologies, architectural patterns, and engineering workflows I utilize to deliver high-performance web applications.
      </p>

      {/* Filter Tabs */}
      <div className="skill-filters">
        {categoryFilters.map((f) => (
          <button
            key={f.id}
            className={`filter-btn ${activeCategory === f.id ? "active" : ""}`}
            onClick={() => setActiveCategory(f.id)}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Structured Category Domain Cards Grid */}
      <div className="skills-domain-grid">
        {displayedCategories.map((category) => (
          <div
            key={category.id}
            className={`domain-card ${category.accent}`}
          >
            <div className="domain-header">
              <div className="domain-icon-box">{category.icon}</div>
              <h3 className="domain-title">{category.title}</h3>
              <span className="domain-count">{category.skills.length} Skills</span>
            </div>

            <div className="domain-skills-wrap">
              {category.skills.map((skill) => (
                <div key={skill.name} className="skill-chip">
                  <span className="chip-icon">{skill.icon}</span>
                  <span className="chip-name">{skill.name}</span>
                  <span
                    className={`chip-badge ${
                      skill.level.toLowerCase() === "advanced" ? "adv" : "med"
                    }`}
                  >
                    {skill.level === "Advanced" ? "Adv" : "Mid"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MySkills;
