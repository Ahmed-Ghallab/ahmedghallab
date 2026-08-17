import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import "./SocialBar.css";

function SocialBar() {
  return (
    <div className="socialBarContainer">
      <div className="socialBar">
        <a
          href="https://github.com/Ahmed-Ghallab"
          data-label="GitHub"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/ahmedghallab22"
          data-label="LinkedIn"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://wa.me/201279547848"
          data-label="WhatsApp"
          target="_blank"
          rel="noreferrer"
        >
          <FaWhatsapp />
        </a>
        <a href="mailto:eng.ahmedghallab@gmail.com" data-label="Email">
          <IoMail />
        </a>
      </div>
    </div>
  );
}

export default SocialBar;
