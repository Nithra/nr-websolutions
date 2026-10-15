import "./../../public/css/footer.css";
import { FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer" id="footer">

      <div className="container">

        <div className="footer-content">

          <h2 className="footer-logo">NR WebSolutions</h2>

          <p className="footer-text">
            Website Design • Web Development • Website Maintenance • React Development • WordPress • SEO
          </p>

          <div className="footer-social">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

            <a href="mailto:hello.nrwebsolutions@gmail.com">
              <FaEnvelope />
            </a>
          </div>

          <a href="#home" className="back-top">
            <FaArrowUp />
          </a>

        </div>

        <div className="footer-bottom">
          <p>
            © 2026 NR WebSolutions. All Rights Reserved.
          </p>
        </div>

      </div>

    </footer>
  );
};

export default Footer;