import React from "react";
import "../../Component/Resume/MyResume.css";
import ResumeFile from "../../assets/pdf/AhmedGhallabResume.pdf";
import {
  FaDownload,
  FaEye,
  FaFileAlt,
  FaGraduationCap,
  FaBriefcase,
  FaCode,
} from "react-icons/fa";

function MyResume() {
  return (
    <section id="resume" className="resume-section">
      <div className="resume-container">
        <h2 className="section-title">Curriculum Vitae</h2>
        <p className="resume-subtitle">
          Download or view my updated, ATS-optimized professional resume.
        </p>

        <div className="holographic-card">
          <div className="holo-content">
            <div className="resume-icon-badge">
              <FaFileAlt />
            </div>

            <h3 className="holo-title">Ahmed Mohamed Ghallab</h3>
            <p className="holo-role-tag">Front-End Developer (React.js / Next.js)</p>

            {/* 3 Quick Highlight Cards in 1 Row */}
            <div className="resume-meta-grid">
              <div className="meta-card">
                <FaBriefcase className="meta-icon" />
                <div>
                  <strong>Experience</strong>
                  <span>2+ Years Hands-On</span>
                </div>
              </div>
              <div className="meta-card">
                <FaGraduationCap className="meta-icon" />
                <div>
                  <strong>Degree</strong>
                  <span>BSc CS & IT (2018–2022)</span>
                </div>
              </div>
              <div className="meta-card">
                <FaCode className="meta-icon" />
                <div>
                  <strong>Core Stack</strong>
                  <span>React, Next.js, TS, Tailwind</span>
                </div>
              </div>
            </div>

            <p className="holo-text">
              Targeting Junior & Mid-Level Front-End roles in Egypt, UAE, or Remote.
              Engineered with clean code, modern architectures, and real-world business impacts.
            </p>

            <div className="holo-actions">
              <a
                href={ResumeFile}
                download="Ahmed_Ghallab_FrontEnd_Resume.pdf"
                className="btn-holo glow-effect"
              >
                <FaDownload style={{ marginRight: "0.5rem" }} />
                <span>Download CV (PDF)</span>
              </a>
              <a
                href={ResumeFile}
                target="_blank"
                rel="noreferrer"
                className="btn-holo-outline"
              >
                <FaEye style={{ marginRight: "0.5rem" }} />
                View Full CV Online
              </a>
            </div>
          </div>

          <div className="holo-bg"></div>
        </div>
      </div>
    </section>
  );
}

export default MyResume;
