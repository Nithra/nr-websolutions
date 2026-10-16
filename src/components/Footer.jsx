import "./../../public/css/footer.css";
import {
  FaArrowUp,
  FaEnvelope,
  FaLinkedinIn,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-content">
          <a href="#home" className="footer-brand" aria-label="NR WebSolutions home">
            <img
              src={`${import.meta.env.BASE_URL}images/logo.png`}
              alt="NR WebSolutions"
              className="footer-logo"
            />
            <span className="footer-text">
              Website Design, Development &amp; Digital Marketing
              <br />
              for Small Businesses | By NR
            </span>
          </a>

          <nav className="footer-nav" aria-label="Footer navigation">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#projects">Portfolio</a>
            <a href="#process">How I Work</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="footer-social" aria-label="Contact and social links">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn aria-hidden="true" />
            </a>
            <a href="mailto:hello.nrwebsolutions@gmail.com" aria-label="Email">
              <FaEnvelope aria-hidden="true" />
            </a>
            <a className="" href="tel:+919345046870">
              <FaPhone aria-hidden="true" />
            </a>
            <a
              href="https://wa.me/919345046870"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp aria-hidden="true" />
            </a>
            <a href="#home" className="back-top" aria-label="Back to top">
              <FaArrowUp aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 NR WebSolutions. All rights reserved. | Designed &amp; Developed by NR</p>
        </div>
      </div>

      <a
        className="footer-whatsapp-float"
        href="https://wa.me/919345046870"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with NR WebSolutions on WhatsApp"
      >
        <FaWhatsapp aria-hidden="true" />
      </a>
    </footer>
  );
};

export default Footer;