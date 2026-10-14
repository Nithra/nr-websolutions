import "./../../public/css/footer.css";
import { FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer" id="footer">

      <div className="container">

        <div className="footer-content">

          <h2 className="footer-logo">Nithya Raja</h2>

          <p className="footer-text">
            UI Developer • Frontend Developer • React Developer
          </p>

          <div className="footer-social">
         

            <a
              href="https://www.linkedin.com/in/nithya-r-589b3943b/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

            <a href="mailto:nithyar.dev@gmail.com">
              <FaEnvelope />
            </a>
          </div>

          <a href="#home" className="back-top">
            <FaArrowUp />
          </a>

        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Nithya Raja. All Rights Reserved. |
            Designed & Developed with React.js
          </p>
        </div>

      </div>

    </footer>
  );
};

export default Footer;