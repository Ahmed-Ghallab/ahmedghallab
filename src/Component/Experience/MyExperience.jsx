import React, { useState } from "react";
import "./MyExperience.css";
import {
  FaBriefcase,
  FaGraduationCap,
  FaCertificate,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaExternalLinkAlt,
  FaLaptopCode,
} from "react-icons/fa";
import { SiReact, SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";

const experiencesData = [
  {
    id: "enaya",
    role: "Front-End Developer",
    company: "Enaya E-Commerce Platform",
    location: "Remote | Freelance / Project-Based",
    period: "Dec 2025 – Present",
    type: "work",
    featured: true,
    tags: ["React.js", "Tailwind CSS", "Zustand", "Axios", "REST APIs", "AI Skin Analysis"],
    bullets: [
      "Developed and maintained a full-featured e-commerce platform and dynamic administrative dashboard for managing products, categories, and content.",
      "Engineered dynamic homepage sections and hero carousel configurations controlled through the administration system.",
      "Integrated an AI-powered skin analysis module providing instant tailored skin-care recommendations based on user inputs.",
      "Built resilient client-side state management with Zustand, handling persistent carts, filters, and checkout flows.",
    ],
    link: "https://www.enayak.com/",
  },
  {
    id: "fassla",
    role: "Front-End Developer",
    company: "Fassla Software",
    location: "Cairo, Egypt",
    period: "Feb 2025 – Dec 2025",
    type: "work",
    featured: false,
    tags: ["React.js", "JavaScript (ES6+)", "HTML5/CSS3", "UI/UX", "Git"],
    bullets: [
      "Translated Figma/Adobe XD designs into pixel-perfect, reusable, and maintainable React front-end components.",
      "Implemented responsive layouts and ensured cross-browser compatibility across desktop, tablet, and mobile viewports.",
      "Collaborated within cross-functional agile teams to deliver features, optimize loading speeds, and resolve UI bottlenecks.",
    ],
  },
  {
    id: "sprints",
    role: "Trainee Front-End Developer",
    company: "Sprints.ai",
    location: "Cairo, Egypt",
    period: "Apr 2025 – Oct 2025",
    type: "work",
    featured: false,
    tags: ["React.js", "Next.js", "Tailwind CSS", "Vite", "REST APIs", "Figma"],
    bullets: [
      "Completed intensive hands-on frontend track focusing on modern React.js and Next.js production patterns.",
      "Engineered end-to-end web applications with API integrations, asynchronous state management, and responsive styling.",
      "Collaborated in sprint reviews and code audits using Git, GitHub, and agile project management tools.",
    ],
  },
  {
    id: "teleperformance",
    role: "Chat Support Specialist / SME",
    company: "Teleperformance (Talabat)",
    location: "Alexandria, Egypt",
    period: "Dec 2023 – Feb 2025",
    type: "work",
    featured: false,
    tags: ["Salesforce", "Odoo ERP", "Jira", "CRM Platforms", "SME Escalations"],
    bullets: [
      "Delivered real-time operational and technical customer resolution for Talabat across Egypt & GCC regions.",
      "Acted as a Subject Matter Expert (SME) mentoring team members, managing complex escalations, and analyzing system bottlenecks with enterprise tools.",
    ],
  },
];

const educationAndCertificates = [
  {
    id: "bsc",
    title: "Bachelor of Computer Science & Information Technology",
    issuer: "Modern Academy for Computer Science, Egypt",
    period: "2018 – 2022",
    type: "education",
    details:
      "Comprehensive Computer Science degree with focus on Software Engineering, Object-Oriented Programming (OOP), Data Structures, Algorithms, Database Systems, and Web Technologies.",
  },
  {
    id: "eraasoft",
    title: "Front-End Developer Diploma (5 Months)",
    issuer: "EraaSoft Academy",
    period: "2025",
    type: "cert",
    details:
      "Deep dive into advanced JavaScript (ES6+), React.js, component architecture, state management, API integration, and clean code practices.",
  },
  {
    id: "sprints-ms",
    title: "Web Development Summer Camp (40 Hours)",
    issuer: "Sprints × Microsoft",
    period: "2025",
    type: "cert",
    details:
      "Practical project-based program building scalable web solutions with modern front-end frameworks and developer toolchains.",
  },
  {
    id: "mahara-tech",
    title: "Front-End Developer Track (32 Hours)",
    issuer: "Mahara-Tech / ITI (Information Technology Institute)",
    period: "2025",
    type: "cert",
    details:
      "Comprehensive training covering React.js, TypeScript, JavaScript (ES6+), HTML5 semantic architecture, and advanced CSS3.",
  },
  {
    id: "sprints-react",
    title: "Front-End Web Development with React Framework",
    issuer: "Sprints.ai",
    period: "2025",
    type: "cert",
    details:
      "Specialized coursework on state synchronization, custom hooks, component life cycles, and performance optimization.",
  },
  {
    id: "uiux-prog",
    title: "UI/UX Design Program (In Progress)",
    issuer: "Sprints.ai",
    period: "2025 – Present",
    type: "cert",
    details:
      "Mastering user research, wireframing, interactive prototyping, and design system creation in Figma and Adobe XD.",
  },
];

function MyExperience() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <section id="experience" className="experience-section">
      <h2 className="section-title">Experience & Journey</h2>
      <p className="experience-subtitle">
        A timeline of my professional roles, engineering milestones, and computer science background.
      </p>

      {/* Tab Buttons */}
      <div className="experience-tabs">
        <button
          className={`exp-tab-btn ${activeTab === "all" ? "active" : ""}`}
          onClick={() => setActiveTab("all")}
        >
          <FaLaptopCode /> All Milestones
        </button>
        <button
          className={`exp-tab-btn ${activeTab === "work" ? "active" : ""}`}
          onClick={() => setActiveTab("work")}
        >
          <FaBriefcase /> Work Experience
        </button>
        <button
          className={`exp-tab-btn ${activeTab === "education" ? "active" : ""}`}
          onClick={() => setActiveTab("education")}
        >
          <FaGraduationCap /> Education & Diplomas
        </button>
      </div>

      <div className="experience-content-wrapper">
        {/* Work Experience Timeline */}
        {(activeTab === "all" || activeTab === "work") && (
          <div className="timeline-group">
            <h3 className="group-heading">
              <FaBriefcase className="heading-icon" /> Professional Experience
            </h3>

            <div className="timeline-items">
              {experiencesData.map((exp) => (
                <div
                  key={exp.id}
                  className={`timeline-card ${exp.featured ? "featured-card" : ""}`}
                >
                  <div className="card-top-row">
                    <div>
                      <h4 className="card-role">{exp.role}</h4>
                      <h5 className="card-company">
                        {exp.company}
                        {exp.link && (
                          <a
                            href={exp.link}
                            target="_blank"
                            rel="noreferrer"
                            className="company-live-link"
                            title="Visit Live Site"
                          >
                            <FaExternalLinkAlt />
                          </a>
                        )}
                      </h5>
                    </div>
                    <div className="card-period-badge">
                      <FaCalendarAlt /> {exp.period}
                    </div>
                  </div>

                  <p className="card-location">
                    <FaMapMarkerAlt /> {exp.location}
                  </p>

                  <ul className="card-bullets">
                    {exp.bullets.map((b, i) => (
                      <li key={i}>
                        <FaCheckCircle className="bullet-icon" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="card-tags">
                    {exp.tags.map((t, i) => (
                      <span key={i} className="tech-pill">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education & Certifications Timeline */}
        {(activeTab === "all" || activeTab === "education") && (
          <div className="timeline-group">
            <h3 className="group-heading">
              <FaGraduationCap className="heading-icon" /> Education & Certifications
            </h3>

            <div className="timeline-items education-grid">
              {educationAndCertificates.map((item) => (
                <div key={item.id} className="education-card">
                  <div className="edu-header">
                    <span className="edu-badge-icon">
                      {item.type === "education" ? <FaGraduationCap /> : <FaCertificate />}
                    </span>
                    <span className="edu-period">{item.period}</span>
                  </div>

                  <h4 className="edu-title">{item.title}</h4>
                  <h5 className="edu-issuer">{item.issuer}</h5>
                  <p className="edu-details">{item.details}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default MyExperience;
