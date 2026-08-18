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
  FaAward,
  FaUniversity,
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

const academicDegree = {
  degree: "Bachelor of Computer Science & Information Technology",
  institution: "Modern Academy for Computer Science & Management Technology",
  period: "2018 – 2022",
  location: "Cairo, Egypt",
  badge: "Accredited 4-Year University Degree",
  description:
    "Comprehensive Computer Science curriculum providing a strong theoretical foundation in Software Engineering principles, computational problem solving, data modeling, and modern web architectures.",
  coreCompetencies: [
    "Object-Oriented Programming (OOP)",
    "Data Structures & Algorithms",
    "Database Management (SQL)",
    "Software Engineering & System Analysis",
    "Web Development Fundamentals",
    "Operating Systems & Networking",
  ],
};

const professionalCertifications = [
  {
    id: "eraasoft",
    title: "Front-End Developer Diploma",
    issuer: "EraaSoft Academy",
    badge: "5 Months Immersion",
    period: "2025",
    skills: ["Advanced JavaScript (ES6+)", "React.js", "State Architecture", "REST APIs", "Clean Code"],
    description:
      "Deep dive into advanced JavaScript patterns, React component architecture, custom hooks, asynchronous state management, API integrations, and industry best practices.",
  },
  {
    id: "sprints-ms",
    title: "Web Development Summer Camp",
    issuer: "Sprints.ai × Microsoft",
    badge: "40 Hours Project Lab",
    period: "2025",
    skills: ["React.js", "Modern Toolchains", "Agile Sprints", "Cloud Deployment"],
    description:
      "Practical project-based engineering camp delivering production-ready web solutions with modern front-end frameworks and developer toolchains.",
  },
  {
    id: "mahara-tech",
    title: "Front-End Specialist Track",
    issuer: "Mahara-Tech / ITI (MCIT Egypt)",
    badge: "Ministry of Communications & IT",
    period: "2025",
    skills: ["React.js", "TypeScript", "HTML5 Semantics", "Modern CSS3", "Responsive UI"],
    description:
      "Rigorous technical training curriculum under Egypt's Information Technology Institute covering TypeScript, component scalability, and web standards.",
  },
  {
    id: "sprints-react",
    title: "Front-End Web Development with React",
    issuer: "Sprints.ai",
    badge: "Advanced React Track",
    period: "2025",
    skills: ["React Lifecycle", "State Synchronization", "Performance Tuning", "Component Optimization"],
    description:
      "Specialized coursework focusing on state synchronization, memoization, lifecycle optimization, and scalable modular architecture.",
  },
  {
    id: "uiux-prog",
    title: "UI/UX Design & Prototyping",
    issuer: "Sprints.ai",
    badge: "Design Track",
    period: "2025 – Present",
    skills: ["User Research", "Wireframing", "Interactive Prototyping", "Figma Design Systems"],
    description:
      "Mastering user-centered design, usability testing, wireframing, high-fidelity design systems, and developer-to-designer handoff in Figma.",
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

        {/* High-End Education & Certifications */}
        {(activeTab === "all" || activeTab === "education") && (
          <div className="timeline-group">
            <h3 className="group-heading">
              <FaGraduationCap className="heading-icon" /> Academic Degree & Professional Diplomas
            </h3>

            {/* Featured Academic Degree Card */}
            <div className="degree-showcase-card">
              <div className="degree-header">
                <div className="degree-icon-badge">
                  <FaUniversity />
                </div>
                <div className="degree-title-wrap">
                  <div className="degree-badge-pill">{academicDegree.badge}</div>
                  <h4 className="degree-title">{academicDegree.degree}</h4>
                  <h5 className="degree-institution">{academicDegree.institution}</h5>
                </div>
                <div className="degree-meta">
                  <span className="degree-period"><FaCalendarAlt /> {academicDegree.period}</span>
                  <span className="degree-loc"><FaMapMarkerAlt /> {academicDegree.location}</span>
                </div>
              </div>

              <p className="degree-desc">{academicDegree.description}</p>

              <div className="degree-competencies">
                <span className="competency-label">Key Core CS Modules:</span>
                <div className="competency-tags">
                  {academicDegree.coreCompetencies.map((comp, idx) => (
                    <span key={idx} className="competency-pill">
                      ✓ {comp}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Diplomas & Certifications Grid */}
            <h4 className="subgroup-heading">
              <FaAward className="subheading-icon" /> Professional Certifications & Diplomas
            </h4>

            <div className="certifications-grid">
              {professionalCertifications.map((cert) => (
                <div key={cert.id} className="cert-card">
                  <div className="cert-card-header">
                    <div className="cert-badge-wrapper">
                      <span className="cert-badge-tag">{cert.badge}</span>
                      <span className="cert-year">{cert.period}</span>
                    </div>
                  </div>

                  <h5 className="cert-title">{cert.title}</h5>
                  <div className="cert-issuer">
                    <FaCertificate className="cert-issuer-icon" />
                    <span>{cert.issuer}</span>
                  </div>

                  <p className="cert-desc">{cert.description}</p>

                  <div className="cert-skills-wrap">
                    {cert.skills.map((s, i) => (
                      <span key={i} className="cert-skill-pill">
                        {s}
                      </span>
                    ))}
                  </div>
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
