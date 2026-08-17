import React, { useEffect, useState } from "react";
import "../../Component/Navbar/MyNavbar.css";
import {
  FaUser,
  FaBriefcase,
  FaCode,
  FaProjectDiagram,
  FaFileAlt,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import LogoFull from "../../assets/images/logo/logo-optimized.webp";

function MyNavbar() {
  const [activeSection, setActiveSection] = useState("about");
  const [scrolled, setScrolled] = useState(false);
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  useEffect(() => {
    if (showOffcanvas) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [showOffcanvas]);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);

          const sections = document.querySelectorAll("main section");
          let current = "";

          sections.forEach((section) => {
            const sectionTop = section.offsetTop - 120;
            if (
              window.scrollY >= sectionTop &&
              window.scrollY < sectionTop + section.offsetHeight
            ) {
              current = section.getAttribute("id");
            }
          });

          if (current) setActiveSection(current);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const sections = [
    { id: "about", label: "About", icon: <FaUser /> },
    { id: "experience", label: "Experience", icon: <FaBriefcase /> },
    { id: "skills", label: "Skills", icon: <FaCode /> },
    { id: "projects", label: "Projects", icon: <FaProjectDiagram /> },
    { id: "resume", label: "Resume", icon: <FaFileAlt /> },
    { id: "contact", label: "Contact", icon: <FaEnvelope /> },
  ];

  const socialLinks = [
    {
      icon: <FaGithub />,
      url: "https://github.com/Ahmed-Ghallab",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin />,
      url: "https://linkedin.com/in/ahmedghallab22",
      label: "LinkedIn",
    },
    {
      icon: <IoMail />,
      url: "mailto:eng.ahmedghallab@gmail.com",
      label: "Email",
    },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav className={`my-nav desktop-nav ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-container">
          <div className="nav-logo-wrapper" onClick={() => window.scrollTo(0,0)}>
            <img src={LogoFull} alt="Ahmed Ghallab" className="nav-logo" />
          </div>

          <div className="nav-links">
            {sections.map(({ id, label, icon }) => (
              <button
                key={id}
                className={`nav-link ${activeSection === id ? "active" : ""}`}
                onClick={() => scrollToSection(id)}
              >
                <span className="icon">{icon}</span>
                {label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className={`my-nav mobile-nav ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-logo-wrapper-mobile">
           <img src={LogoFull} alt="Ahmed Ghallab" className="nav-logo-mobile" />
        </div>
        <button
          className="hamburger-btn"
          onClick={() => setShowOffcanvas(true)}
        >
          <div className="dots-icon">
            {Array.from({ length: 9 }).map((_, i) => (
              <span key={i} className="dot"></span>
            ))}
          </div>
        </button>
      </nav>

      {/* Offcanvas Menu */}
      <div className={`offcanvas-menu ${showOffcanvas ? "active" : ""}`}>
        <div
          className="offcanvas-overlay"
          onClick={() => setShowOffcanvas(false)}
        ></div>
        <div className="offcanvas-content">
          <button className="close-btn" onClick={() => setShowOffcanvas(false)}>
            &times;
          </button>

          <div className="offcanvas-links">
            {sections.map(({ id, label, icon }) => (
              <button
                key={id}
                className={`offcanvas-link ${
                  activeSection === id ? "active" : ""
                }`}
                onClick={() => {
                  scrollToSection(id);
                  setShowOffcanvas(false);
                }}
              >
                <span className="icon">{icon}</span>
                {label}
              </button>
            ))}
          </div>

          {/* Social Links in Mobile Menu */}
          <div className="offcanvas-social">
            <h4>Connect with me</h4>
            <div className="social-links-mobile">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-mobile"
                >
                  {social.icon}
                  <span>{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyNavbar;
