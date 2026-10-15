import { FaArrowRight, FaCheck } from "react-icons/fa";
import "./../../public/css/hero.css";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-ambient hero-ambient-left" aria-hidden="true" />
      <div className="hero-ambient hero-ambient-right" aria-hidden="true" />

      <div className="container hero-container">
        <div className="hero-content">
          <p className="hero-subtitle">Website Design &amp; Development</p>

          <h1>
            Web Solutions
            <span>That Grow Your Business</span>
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
            <a className="secondary-btn" href="#projects">View Portfolio</a>
          </div>

          <div className="hero-trustline" aria-label="Client trust indicators">
            <div className="hero-avatars" aria-hidden="true">
              <span>AK</span>
              <span>SR</span>
              <span>MN</span>
            </div>
            <div className="hero-trust-copy">
              <strong>100+</strong>
              <span>Happy Clients</span>
            </div>
            <div className="hero-trust-locale">Local &amp; International</div>
          </div>
        </div>

        <div className="hero-visual" aria-label="Website design preview">
          <div className="hero-plant hero-plant-left" aria-hidden="true" />
          <div className="hero-plant hero-plant-right" aria-hidden="true" />
          <div className="hero-callout hero-callout-left" aria-hidden="true">
            <span>Ideas</span>
            <span>Design</span>
            <span>Develop</span>
            <span>Grow</span>
          </div>

          <div className="hero-device-shell">
            <img src="/images/hero.png" alt="NR WebSolutions website preview" />
          </div>

          <div className="hero-badge" aria-label="NR WebSolutions logo badge">
            <img src="/images/logo.png" alt="NR WebSolutions logo" />
            <span>NR</span>
          </div>

          <div className="hero-mouse" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
};

export default Hero;