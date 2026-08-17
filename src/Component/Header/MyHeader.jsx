import "../../Component/Header/MyHeader.css";
import Container from "react-bootstrap/esm/Container";
import { useEffect, useState } from "react";
import FloatingIcons from "./FloatingIcons";
import { FaCode, FaRocket, FaBriefcase, FaGraduationCap } from "react-icons/fa";

function MyHeader() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(120);

  const toRotate = [
    "Front-End Developer",
    "React.js & Next.js Specialist",
    "TypeScript & UI/UX Engineer",
    "SaaS & E-Commerce Builder",
  ];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % toRotate.length;
      const fullText = toRotate[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 40 : 100);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2200);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <header className="hero-section" id="home">
      <FloatingIcons />
      <div className="hero-bg-overlay"></div>

      <Container className="hero-content">
        <div className="hero-badge-pill">
          <span className="pulse-dot"></span>
          <span>Available for Junior / Mid Front-End Opportunities</span>
        </div>

        <p className="hero-greeting">Hi, my name is</p>
        <h1 className="hero-name">Ahmed Ghallab.</h1>
        <h2 className="hero-role">
          I craft <span className="highlight-text">scalable web experiences.</span>
        </h2>

        <p className="hero-desc">
          I am a specialized{" "}
          <span className="code-font">{text}</span>
          <span className="cursor-blink">|</span>
          <br />
          with <strong>2+ years of hands-on experience</strong> building high-performance e-commerce platforms, SaaS products, dynamic dashboards, and pixel-perfect UIs.
        </p>

        {/* Hero Quick Highlights / Stats */}
        <div className="hero-stats-row">
          <div className="hero-stat-card">
            <span className="hero-stat-icon"><FaBriefcase /></span>
            <div>
              <strong>2+ Years</strong>
              <span>Hands-on Dev Experience</span>
            </div>
          </div>
          <div className="hero-stat-card">
            <span className="hero-stat-icon"><FaRocket /></span>
            <div>
              <strong>10+ Projects</strong>
              <span>Flagship, SaaS & E-Commerce</span>
            </div>
          </div>
          <div className="hero-stat-card">
            <span className="hero-stat-icon"><FaGraduationCap /></span>
            <div>
              <strong>BSc CS & IT</strong>
              <span>Modern Academy (2018–2022)</span>
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="hero-cta-group">
          <a href="#projects" className="btn-primary hero-cta">
            View Flagship Projects
          </a>
          <a href="#experience" className="btn-secondary-glow">
            Experience & Journey
          </a>
          <a href="#resume" className="btn-outline-glow">
            CV & Resume
          </a>
        </div>
      </Container>
    </header>
  );
}

export default MyHeader;

