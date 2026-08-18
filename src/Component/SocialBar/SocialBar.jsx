import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import "./SocialBar.css";

function SocialBar() {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Ahmed-Ghallab",
      icon: <FaGithub />,
      color: "emerald",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/ahmedghallab22",
      icon: <FaLinkedin />,
      color: "cyan",
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/201279547848",
      icon: <FaWhatsapp />,
      color: "whatsapp",
    },
    {
      name: "Email",
      url: "mailto:eng.ahmedghallab@gmail.com",
      icon: <IoMail />,
      color: "emerald",
    },
  ];

  return (
    <div className="socialBarContainer" aria-label="Social links sidebar">
      <div className="socialBar">
        <div className="social-dock">
          {socialLinks.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target={item.url.startsWith("mailto:") ? "_self" : "_blank"}
              rel="noreferrer"
              className={`social-dock-item ${item.color}`}
              aria-label={item.name}
            >
              <span className="social-icon">{item.icon}</span>
              <span className="social-tooltip">{item.name}</span>
            </a>
          ))}
        </div>
        <div className="social-stem-line"></div>
      </div>
    </div>
  );
}

export default SocialBar;
