import React from "react";
import "../../Component/About/MyAbout.css";
import MyPicture from "../../assets/images/myPicture/ProfileImage.webp";
import {
  FaUserAlt,
  FaLightbulb,
  FaRocket,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaLayerGroup,
} from "react-icons/fa";

function MyAbout() {
  return (
    <section id="about" className="about-wrapper">
      <div className="about-image">
        <div className="image-frame">
          <img src={MyPicture} alt="Ahmed Ghallab" />
        </div>
        <span className="glow-accent"></span>
      </div>

      <div id="about-text">
        <h2 className="section-title" style={{ textAlign: "left", margin: "0 0 1.5rem 0" }}>
          About Me
        </h2>
        
        <p>
          Hello! I'm <span className="highlight">Ahmed Mohamed Ghallab</span>, a Front-End Developer with <strong>2+ years of hands-on development experience</strong> across professional, freelance, and project-based work, backed by a <strong>BSc in Computer Science & Information Technology</strong> (Modern Academy, 2018 – 2022).
        </p>
        
        <p>
          I specialize in building production-grade web applications using <strong>React.js, Next.js, TypeScript, Tailwind CSS, and RESTful APIs</strong>. I have architected and deployed real-world e-commerce platforms with dynamic administration dashboards, SaaS invitation systems with real-time previews, and operations platforms integrated with Supabase.
        </p>

        <p>
          My focus is on <strong>clean code, reusable component architecture, performance optimization, and seamless UI/UX execution</strong>. I take pride in turning complex business workflows and Figma designs into intuitive, responsive, and accessible digital products.
        </p>

        {/* Key Quick Info Grid */}
        <div className="about-quick-info">
          <div className="info-item">
            <FaGraduationCap className="info-icon" />
            <div>
              <strong>Education:</strong>
              <span>BSc Computer Science & IT (2018–2022)</span>
            </div>
          </div>
          <div className="info-item">
            <FaMapMarkerAlt className="info-icon" />
            <div>
              <strong>Location:</strong>
              <span>Alexandria, Egypt (Open to Remote / UAE / On-site)</span>
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
            <FaCheckCircle /> Clean Code & Best Practices
          </span>
        </div>
      </div>
    </section>
  );
}

export default MyAbout;

