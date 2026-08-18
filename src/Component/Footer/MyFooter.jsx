import React from "react";
import "./MyFooter.css";
import FootLogo from "../../assets/images/logo/logo-full1.webp";
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";

function MyFooter() {
  return (
    <footer className="my-footer">
      <div className="footer-bg-watermark">
        <img src={FootLogo} alt="" aria-hidden="true" />
      </div>

      <div className="footer-container">
        <div className="footer-brand-row">
          <a href="#home" className="footer-logo-link" title="Ahmed Ghallab Home">
            <img src={FootLogo} alt="Ahmed Ghallab" className="footer-logo-img" />
          </a>
          <div className="footer-brand-text">
            <span className="footer-dev-name">Ahmed Mohamed Ghallab</span>
            <span className="footer-dev-role">Front-End Developer (React.js / Next.js)</span>
          </div>
        </div>

        <div className="footer-social-links">
          <a
            href="https://github.com/Ahmed-Ghallab"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/ahmedghallab22"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://wa.me/201279547848"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
          <a
            href="mailto:eng.ahmedghallab@gmail.com"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>

        <div className="footer-bottom-copy">
          <p>
            &copy; {new Date().getFullYear()} Ahmed Ghallab. Built with <span>React.js</span> & <span>Clean Architecture</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default MyFooter;
