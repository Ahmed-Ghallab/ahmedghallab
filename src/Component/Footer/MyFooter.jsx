import "../../Component/Footer/MyFooter.css";
import FootLogo from "../../assets/images/logo/logo-optimized.webp";

function MyFooter() {
  return (
    <footer className="my-footer">
      <img src={FootLogo} alt="Ahmed Ghallab Logo" className="footer-logo" />
      <p>
        &copy; {new Date().getFullYear()} — Designed & Engineered by{" "}
        <span>Ahmed Ghallab</span> • Front-End Developer
      </p>
    </footer>
  );
}

export default MyFooter;
