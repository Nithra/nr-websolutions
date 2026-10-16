import { FaArrowRight, FaCheck } from "react-icons/fa";
import "./../../public/css/hero.css";

const Hero = () => {
  return (
    <section
      className="hero"
      id="home"
      style={{
        "--hero-banner": `url("${import.meta.env.BASE_URL}images/hero-banner.png")`,
      }}
    >
      <div className="container hero-container">
        <div className="hero-content">
          <p className="hero-subtitle">Website Design &amp; Development</p>

          <h1>
            <span className="hero-heading-line">Web Solutions</span>
            <span className="hero-heading-line">That <em>Grow Your</em></span>
            <span className="hero-heading-line">Business</span>
          </h1>

          <p className="hero-description">
            I help small businesses, startups and entrepreneurs build modern,
            responsive websites with WordPress, React and digital marketing support.
          </p>

          <ul className="hero-checklist" aria-label="Key services">
            <li><span><FaCheck /></span> Modern &amp; Responsive Design</li>
            <li><span><FaCheck /></span> Fast &amp; Secure</li>
            <li><span><FaCheck /></span> SEO Friendly</li>
            <li><span><FaCheck /></span> Ongoing Support</li>
          </ul>

          <div className="hero-buttons">
            <a className="primary-btn" href="#contact">
              Get Free Quote
              <FaArrowRight />
            </a>
            <a className="secondary-btn" href="#projects">View Projects</a>
          </div>

          <div className="hero-trustline" aria-label="Client trust indicators">
            <div className="hero-avatars" aria-hidden="true">
              <span>AK</span>
              <span>SR</span>
              <span>MN</span>
              <span>NR</span>
            </div>
            <div className="hero-trust-copy">
              <strong>20+ Happy Clients</strong>
              <span>Local &amp; International</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;