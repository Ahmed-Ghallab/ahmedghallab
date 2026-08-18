import React, { useEffect, useState, useCallback } from "react";
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
  FaWhatsapp,
  FaTimes,
} from "react-icons/fa";
import { IoMail, IoSparkles } from "react-icons/io5";
import LogoFull from "../../assets/images/logo/logo-optimized.webp";

function MyNavbar() {
  const [activeSection, setActiveSection] = useState("about");
  const [scrolled, setScrolled] = useState(false);
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  // Lock body scroll when offcanvas is open
  useEffect(() => {
    if (showOffcanvas) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showOffcanvas]);

  // Handle ESC key to close drawer
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && showOffcanvas) {
        setShowOffcanvas(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showOffcanvas]);

  // High-performance scroll spy with passive RAF
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isScrolled = window.scrollY > 25;
          setScrolled(isScrolled);

          const sections = document.querySelectorAll("main section");
          const scrollPos = window.scrollY + window.innerHeight * 0.35;
          let current = "";

          sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
              current = section.getAttribute("id");
            }
          });

          if (current) {
            setActiveSection(current);
          } else if (window.scrollY < 200) {
            setActiveSection("about");
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 70;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }, []);

  const handleNavClick = (id) => {
    setActiveSection(id);
    scrollToSection(id);
    setShowOffcanvas(false);
  };

  const sections = [
    { id: "about", num: "01", label: "About", icon: <FaUser /> },
    { id: "experience", num: "02", label: "Experience", icon: <FaBriefcase /> },
    { id: "skills", num: "03", label: "Skills", icon: <FaCode /> },
    { id: "projects", num: "04", label: "Projects", icon: <FaProjectDiagram /> },
    { id: "resume", num: "05", label: "Resume", icon: <FaFileAlt /> },
    { id: "contact", num: "06", label: "Contact", icon: <FaEnvelope /> },
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
      icon: <FaWhatsapp />,
      url: "https://wa.me/201279547848",
      label: "WhatsApp",
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
          <div
            className="nav-logo-wrapper"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img src={LogoFull} alt="Ahmed Ghallab Logo" className="nav-logo" width="140" height="38" decoding="async" />
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

          <button
            className="nav-hire-btn"
            onClick={() => scrollToSection("contact")}
          >
            <IoSparkles className="hire-btn-icon" /> Let's Talk
          </button>
        </div>
      </nav>

      {/* Top Mobile Bar (Logo & Menu Button) */}
      <nav className={`my-nav mobile-nav ${scrolled ? "scrolled" : ""}`}>
        <div
          className="nav-logo-wrapper-mobile"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img src={LogoFull} alt="Ahmed Ghallab Logo" className="nav-logo-mobile" width="110" height="30" decoding="async" />
        </div>

        <button
          className={`hamburger-btn ${showOffcanvas ? "open" : ""}`}
          onClick={() => setShowOffcanvas(!showOffcanvas)}
          aria-label={showOffcanvas ? "Close menu" : "Open menu"}
          aria-expanded={showOffcanvas}
        >
          <span className="hamburger-line line-1"></span>
          <span className="hamburger-line line-2"></span>
          <span className="hamburger-line line-3"></span>
        </button>
      </nav>

      {/* 2026 Apple Liquid Mirror Glass Bottom Floating Dock (Mobile Screen) */}
      <div className="mobile-mirror-dock" aria-label="Mobile Navigation Dock">
        <div className="mirror-dock-capsule">
          {sections.map(({ id, label, icon }) => {
            const isActive = activeSection === id;
            return (
              <button
                key={id}
                className={`mirror-dock-btn ${isActive ? "active" : ""}`}
                onClick={() => handleNavClick(id)}
                aria-label={label}
                title={label}
              >
                <span className="mirror-icon-box">{icon}</span>
                {isActive && <span className="mirror-active-dot"></span>}
              </button>
            );
          })}
        </div>
      </div>

      {/* Modern Offcanvas Mobile Drawer */}
      <div className={`offcanvas-menu ${showOffcanvas ? "active" : ""}`}>
        {/* Backdrop Overlay */}
        <div
          className="offcanvas-overlay"
          onClick={() => setShowOffcanvas(false)}
        ></div>

        {/* Compact Drawer Content */}
        <div className="offcanvas-content">
          {/* Drawer Header */}
          <div className="offcanvas-header">
            <div className="offcanvas-profile">
              <div className="offcanvas-brand-name">Ahmed Ghallab</div>
              <div className="offcanvas-status">
                <span className="status-ping"></span>
                <span>Available for hire</span>
              </div>
            </div>
            <button
              className="close-drawer-btn"
              onClick={() => setShowOffcanvas(false)}
              aria-label="Close menu"
            >
              <FaTimes />
            </button>
          </div>

          {/* Navigation Links with Numbering & Icons */}
          <div className="offcanvas-links">
            {sections.map(({ id, num, label, icon }) => (
              <button
                key={id}
                className={`offcanvas-link ${
                  activeSection === id ? "active" : ""
                }`}
                onClick={() => handleNavClick(id)}
              >
                <span className="offcanvas-num">{num}</span>
                <span className="offcanvas-link-icon">{icon}</span>
                <span className="offcanvas-label">{label}</span>
                {activeSection === id && (
                  <span className="offcanvas-arrow">→</span>
                )}
              </button>
            ))}
          </div>

          {/* Quick Action Button */}
          <div className="offcanvas-cta-wrap">
            <button
              className="offcanvas-talk-btn"
              onClick={() => handleNavClick("contact")}
            >
              <IoSparkles /> Let's Work Together
            </button>
          </div>

          {/* Social Links & Location in Mobile Menu */}
          <div className="offcanvas-footer">
            <div className="offcanvas-social-row">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="offcanvas-social-icon"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div className="offcanvas-location">
              Alexandria, Egypt 🇪🇬
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyNavbar;
