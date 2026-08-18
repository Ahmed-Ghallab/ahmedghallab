import React from "react";
import "../../Component/About/MyAbout.css";
import MyPicture from "../../assets/images/myPicture/profile-optimized.webp";
import {
  FaLightbulb,
  FaRocket,
  FaCheckCircle,
  FaLayerGroup,
  FaBriefcase,
  FaCode,
} from "react-icons/fa";

function MyAbout() {
  return (
    <section id="about" className="about-wrapper">
      <div className="about-image">
        <div className="image-frame">
          <img
            src={MyPicture}
            alt="Ahmed Mohamed Ali Ghallab - Front-End Developer"
            width="380"
            height="380"
            loading="lazy"
            decoding="async"
          />
        </div>
        <span className="glow-accent"></span>
      </div>

      <div id="about-text">
        <h2 className="section-title" style={{ textAlign: "left", margin: "0 0 1.2rem 0" }}>
          About Me
        </h2>

        <p className="about-lead">
          I'm <span className="highlight">Ahmed Mohamed Ali Ghallab</span>, a Front-End Developer with <strong>2+ years of hands-on experience</strong> engineering high-performance e-commerce platforms, SaaS applications, dynamic dashboards, and responsive business solutions using <strong>React.js, Next.js, TypeScript, and Tailwind CSS</strong>.
        </p>

        <p className="about-desc">
          With a strong Computer Science background, I specialize in building scalable component-driven architectures, resilient state management (Zustand / Context API), seamless REST API integrations, and translating complex Figma designs into pixel-perfect, accessible user interfaces.
        </p>

        {/* Professional Metrics Grid (Non-redundant, concise) */}
        <div className="about-quick-info">
          <div className="info-item">
            <FaBriefcase className="info-icon" />
            <div>
              <strong>Experience:</strong>
              <span>2+ Years Hands-On (E-Commerce & SaaS)</span>
            </div>
          </div>
          <div className="info-item">
            <FaCode className="info-icon" />
            <div>
              <strong>Primary Stack:</strong>
              <span>React.js, Next.js, TypeScript, Tailwind</span>
            </div>
          </div>
        </div>

        <div className="about-badges">
          <span>
            <FaLayerGroup /> Component Architecture
          </span>
          <span>
            <FaRocket /> Performance Driven
          </span>
          <span>
            <FaLightbulb /> Problem Solver
          </span>
          <span>
            <FaCheckCircle /> Clean & Maintainable Code
          </span>
        </div>
      </div>
    </section>
  );
}

export default MyAbout;
