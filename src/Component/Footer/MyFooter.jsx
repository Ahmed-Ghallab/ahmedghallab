import React from "react";
import "./MyFooter.css";
import FootLogo from "../../assets/images/logo/logo-full1.webp";

function MyFooter() {
  return (
    <footer className="my-footer">
      <div className="footer-bg-watermark">
        <img src={FootLogo} alt="" aria-hidden="true" loading="lazy" decoding="async" width="500" height="200" />
      </div>

      <div className="footer-container">
        <div className="footer-brand-row">
          <a href="#home" className="footer-logo-link" title="Ahmed Ghallab Home">
            <img src={FootLogo} alt="Ahmed Ghallab Logo" className="footer-logo-img" loading="lazy" decoding="async" width="160" height="42" />
          </a>
          <div className="footer-brand-text">
            <a
              href="https://ahmed-ghallab.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-dev-name"
              title="View Portfolio"
            >
              Ahmed Mohamed Ghallab
            </a>
            <span className="footer-dev-role">Front-End Developer</span>
          </div>
        </div>

        <div className="footer-bottom-copy">
          <p>
            &copy; {new Date().getFullYear()}{" "}
            <a
              href="https://ahmed-ghallab.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-author-link"
              title="View Portfolio"
            >
              Ahmed Ghallab
            </a>
            . Built with <span>React.js</span> & <span>Clean Architecture</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default MyFooter;
