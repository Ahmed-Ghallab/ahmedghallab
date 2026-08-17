import React, { useState, useEffect } from "react";
import "./ScrollToTopButton.css";
import { FaArrowUp } from "react-icons/fa";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalHeight =
            document.documentElement.scrollHeight - window.innerHeight;
          const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
          setScrollProgress(progress);
          setIsVisible(window.scrollY > 350);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`scroll-to-top ${isVisible ? "visible" : ""}`}
      aria-label="Scroll to top of page"
      title="Back to top"
    >
      {/* Dynamic Circular Progress Ring */}
      <svg className="scroll-progress-ring" viewBox="0 0 44 44">
        <circle
          className="progress-ring-bg"
          cx="22"
          cy="22"
          r="19"
        />
        <circle
          className="progress-ring-fill"
          cx="22"
          cy="22"
          r="19"
          style={{
            strokeDasharray: 119.38,
            strokeDashoffset: 119.38 - (119.38 * scrollProgress) / 100,
          }}
        />
      </svg>

      <span className="scroll-btn-inner">
        <FaArrowUp className="scroll-icon" />
      </span>
    </button>
  );
}

export default ScrollToTopButton;
