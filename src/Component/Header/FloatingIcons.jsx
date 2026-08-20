import React, { useEffect, useState } from "react";
import {
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaSass,
  FaFigma,
  FaPython,
  FaJava,
  FaDocker,
  FaAws,
} from "react-icons/fa";
import {
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiNextdotjs,
  SiGraphql,
  SiRedux,
  SiFirebase,
} from "react-icons/si";
import "./FloatingIcons.css";

const iconsData = [
  { Icon: FaReact, color: "#61DAFB" },
  { Icon: FaJsSquare, color: "#F7DF1E" },
  { Icon: FaHtml5, color: "#E34F26" },
  { Icon: FaCss3Alt, color: "#1572B6" },
  { Icon: FaNodeJs, color: "#339933" },
  { Icon: FaGitAlt, color: "#F05032" },
  { Icon: FaSass, color: "#CC6699" },
  { Icon: SiTypescript, color: "#3178C6" },
  { Icon: SiMongodb, color: "#47A248" },
  { Icon: SiTailwindcss, color: "#06B6D4" },
  { Icon: SiNextdotjs, color: "#ffffff" },
  { Icon: FaFigma, color: "#F24E1E" },
  { Icon: SiGraphql, color: "#E10098" },
  { Icon: SiRedux, color: "#764ABC" },
  { Icon: SiFirebase, color: "#FFCA28" },
  { Icon: FaPython, color: "#3776AB" },
  { Icon: FaJava, color: "#007396" },
  { Icon: FaDocker, color: "#2496ED" },
  { Icon: FaAws, color: "#FF9900" },
  { Icon: SiPostgresql, color: "#336791" },
];

const FloatingIcons = () => {
  const [icons, setIcons] = useState([]);

  useEffect(() => {
    // Generate random positions and animation delays for icons
    const newIcons = iconsData.map((item, index) => ({
      ...item,
      id: index,
      style: {
        left: `${Math.random() * 90 + 5}%`,
        top: `${Math.random() * 90 + 5}%`,
        animationDuration: `${Math.random() * 10 + 15}s`,
        animationDelay: `${Math.random() * 5}s`,
        fontSize: `${Math.random() * 20 + 20}px`,
      },
    }));
    setIcons(newIcons);
  }, []);

  return (
    <div className="floating-icons-container">
      {icons.map((item) => {
        const IconComponent = item.Icon;
        return (
          <div key={item.id} className="floating-icon" style={{ ...item.style, color: item.color }}>
            <IconComponent />
          </div>
        );
      })}
    </div>
  );
};

export default FloatingIcons;
