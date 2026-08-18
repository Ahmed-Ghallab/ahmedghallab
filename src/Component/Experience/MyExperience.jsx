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
  FaGithub,
  FaLaptopCode,
  FaAward,
  FaUniversity,
} from "react-icons/fa";

const experiencesData = [
  {
    step: "01",
    id: "enaya",
    role: "Front-End Developer",
    company: "Enaya E-Commerce Platform",
    location: "Remote | Freelance / Project-Based",
    period: "Jan 2026 – Present",
    statusBadge: "Active Role",
    featured: true,
    tags: ["React.js", "Tailwind CSS", "Zustand", "Axios", "REST APIs", "AI Skin Analysis"],
    bullets: [
      "Developed a full-featured e-commerce platform using React.js, Tailwind CSS, Zustand, Axios, and REST APIs, covering product discovery, cart, checkout, authentication, and customer workflows.",
      "Developed a dynamic admin dashboard for managing products and website content, including dynamic homepage and hero sections.",
      "Integrated an AI-powered skin analysis feature for analyzing user-submitted images and generating personalized results.",
      "Implemented responsive layouts, dynamic data rendering, state management, and persistent application data.",
    ],
    liveLink: "https://www.enayak.com/",
    githubLink: "https://github.com/Ahmed-Ghallab/enaya",
  },
  {
    step: "02",
    id: "fassla",
    role: "Front-End Developer",
    company: "Fassla Software",
    location: "Cairo, Egypt",
    period: "Feb 2025 – Jan 2026",
    featured: false,
    tags: ["React.js", "JavaScript (ES6+)", "HTML5/CSS3", "UI/UX", "Git / GitHub"],
    bullets: [
      "Developed responsive web interfaces using HTML5, CSS3, JavaScript, and React.js.",
      "Translated UI/UX designs into reusable React components and responsive layouts.",
      "Collaborated with team members to implement features, improve existing workflows, and resolve front-end issues.",
      "Used Git/GitHub and component-based development practices to maintain clean and scalable code.",
    ],
  },
  {
    step: "03",
    id: "sprints",
    role: "Trainee Frontend Developer",
    company: "Sprints.ai (React & Next.js Track)",
    location: "Cairo, Egypt",
    period: "Oct 2024 – Jan 2025",
    featured: false,
    tags: ["React.js", "Next.js", "Tailwind CSS", "REST APIs", "State Management"],
    bullets: [
      "Built web applications using React.js, Next.js, Tailwind CSS, API integration, and state management.",
      "Applied responsive UI patterns, reusable components, and Git-based workflows.",
    ],
  },
  {
    step: "04",
    id: "refilex",
    role: "Front-End Developer",
    company: "Refilex Software",
    location: "Cairo, Egypt",
    period: "Jan 2024 – Sep 2024",
    featured: false,
    tags: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Responsive UI"],
    bullets: [
      "Built responsive web interfaces using React.js, JavaScript, HTML5, and CSS3.",
      "Developed reusable UI components and implemented responsive, user-focused designs.",
    ],
  },
];

const academicDegree = {
  degree: "Bachelor’s Degree in Computer Science & Information Technology",
  institution: "Modern Academy for Computer Science, Egypt",
  period: "2018 – 2022",
  location: "Cairo, Egypt",
  badge: "Accredited 4-Year University Degree",
  description:
    "Comprehensive Computer Science curriculum providing a strong theoretical and practical foundation in Software Engineering principles, computational problem solving, data modeling, algorithms, and modern web architectures.",
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
    title: "Front-End Diploma",
    issuer: "EraaSoft Academy",
    badge: "5 Months Immersion",
    period: "2025",
    skills: ["Advanced JavaScript (ES6+)", "React.js", "State Architecture", "REST APIs", "Clean Code"],
    description:
      "Deep dive into advanced JavaScript patterns, React component architecture, custom hooks, asynchronous state management, and industry-grade web development.",
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
    title: "Front-End Track",
    issuer: "Mahara-Tech / ITI (MCIT Egypt)",
    badge: "32 Hours Specialized Track",
    period: "2025",
    skills: ["React.js", "JavaScript & ES6+", "TypeScript", "HTML5 & CSS3"],
    description:
      "Rigorous technical training curriculum under Egypt's Information Technology Institute covering TypeScript, component scalability, and web standards.",
  },
  {
    id: "sprints-react",
    title: "Front-End Web Development with React Framework Course",
    issuer: "Sprints.ai",
    badge: "Advanced React Course",
    period: "2025",
    skills: ["React Lifecycle", "State Synchronization", "Performance Tuning", "Component Optimization"],
    description:
      "Specialized coursework focusing on state synchronization, memoization, lifecycle optimization, and scalable modular architecture.",
  },
  {
    id: "uiux-prog",
    title: "UI/UX Design Program",
    issuer: "Sprints.ai",
    badge: "In Progress",
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
      <h2 className="section-title">Professional Experience & Journey</h2>
      <p className="experience-subtitle">
        A step-by-step timeline of my professional roles, engineering milestones, and computer science background.
      </p>

      {/* Tab Controls */}
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
        {/* Step-by-Step Vertical Work Experience Timeline */}
        {(activeTab === "all" || activeTab === "work") && (
          <div className="timeline-group">
            <h3 className="group-heading">
              <FaBriefcase className="heading-icon" /> Work Experience Timeline
            </h3>

            <div className="stepped-timeline">
              {experiencesData.map((exp, index) => (
                <div
                  key={exp.id}
                  className={`timeline-step-item ${exp.featured ? "featured-step" : ""}`}
                >
                  {/* Step Node Marker */}
                  <div className="step-node-col">
                    <div className="step-badge-circle">
                      <span>{exp.step}</span>
                    </div>
                    {index !== experiencesData.length - 1 && <div className="step-line"></div>}
                  </div>

                  {/* Step Content Card */}
                  <div className="step-card">
                    <div className="card-top-row">
                      <div>
                        <div className="card-role-wrap">
                          <h4 className="card-role">{exp.role}</h4>
                          {exp.statusBadge && (
                            <span className="card-status-pill">{exp.statusBadge}</span>
                          )}
                        </div>

                        <h5 className="card-company">
                          {exp.company}
                          <div className="company-links">
                            {exp.liveLink && (
                              <a
                                href={exp.liveLink}
                                target="_blank"
                                rel="noreferrer"
                                className="company-icon-link live"
                                title="Visit Live Platform"
                              >
                                <FaExternalLinkAlt /> Live
                              </a>
                            )}
                            {exp.githubLink && (
                              <a
                                href={exp.githubLink}
                                target="_blank"
                                rel="noreferrer"
                                className="company-icon-link github"
                                title="View GitHub Code"
                              >
                                <FaGithub /> Code
                              </a>
                            )}
                          </div>
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
                <span className="competency-label">Core Computer Science Modules:</span>
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
                      <span className={`cert-badge-tag ${cert.badge === "In Progress" ? "in-progress" : ""}`}>
                        {cert.badge}
                      </span>
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
