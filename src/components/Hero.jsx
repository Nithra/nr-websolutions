import { FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import "./../../public/css/hero.css";
import aboutright from "./../assets/about.png";
const Hero = () => {
  const handleCardPointerMove = (event) => {
    if (event.pointerType === "touch") return;

    const card = event.currentTarget;
    const bounds = card.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;

    card.style.setProperty("--tilt-x", `${(0.5 - y) * 8}deg`);
    card.style.setProperty("--tilt-y", `${(x - 0.5) * 8}deg`);
    card.style.setProperty("--shine-x", `${x * 100}%`);
    card.style.setProperty("--shine-y", `${y * 100}%`);
  };

  const resetCardPointer = (event) => {
    const card = event.currentTarget;
    card.style.setProperty("--tilt-x", "0deg");
    card.style.setProperty("--tilt-y", "0deg");
    card.style.setProperty("--shine-x", "50%");
    card.style.setProperty("--shine-y", "50%");
  };

  return (
    <section className="hero" id="home">
      <div className="hero-marquee" aria-hidden="true">
        <div className="hero-marquee-track">
          <span>FRONTEND DEVELOPMENT&nbsp;•&nbsp; REACT &amp; JAVASCRIPT&nbsp;•&nbsp; RESPONSIVE WEB DESIGN&nbsp;•&nbsp; WORDPRESS &amp; ELEMENTOR&nbsp;•&nbsp; UI DEVELOPMENT&nbsp;•&nbsp;</span>
          <span>FRONTEND DEVELOPMENT&nbsp;•&nbsp; REACT &amp; JAVASCRIPT&nbsp;•&nbsp; RESPONSIVE WEB DESIGN&nbsp;•&nbsp; WORDPRESS &amp; ELEMENTOR&nbsp;•&nbsp; UI DEVELOPMENT&nbsp;•&nbsp;</span>
        </div>
      </div>
      <div className="container hero-container">

        <div className="hero-content">

          <p className="hero-subtitle">Hello, I'm Nithya Raja</p>

          <h1>
            Nithya <span>Raja</span>
          </h1>

          <h2>Frontend / Web Developer</h2>

          <p className="hero-description">
            UI developer with 10+ years of experience creating responsive,
            user-friendly websites and digital experiences with React,
            WordPress, and modern front-end technologies.
          </p>

          <div className="hero-buttons">
            <a className="primary-btn" href="#contact">Let's work together</a>
            <a className="secondary-btn" href="#projects">Explore my work</a>
          </div>

          <div className="social-icons">
            <a href="mailto:nithyar.dev@gmail.com" aria-label="Email Nithya"><FaEnvelope /></a>
            <a href="https://www.linkedin.com/in/nithya-r-589b3943b/" target="_blank" rel="noreferrer" aria-label="Nithya on LinkedIn"><FaLinkedinIn /></a>
          </div>
        </div>

        <div className="hero-image">
          <div
            className="hero-profile-card"
            onPointerMove={handleCardPointerMove}
            onPointerLeave={resetCardPointer}
          >
            <div className="profile-circle">
              <span className="profile-badge">FEATURED DEVELOPER</span>
              <img src={aboutright} alt="Illustration of Nithya Raja working as a web developer" />
              <div className="hero-image-label">
                <div>
                  <span className="profile-name">Nithya Raja</span>
                  <span className="profile-role">Frontend &amp; UI Developer</span>
                </div>
                <span className="profile-location">Madurai, India</span>
              </div>
            </div>
            <div className="hero-stats" aria-label="Career highlights">
              <div className="hero-stat"><strong>10+</strong><span>Years experience</span></div>
              <div className="hero-stat"><strong>100+</strong><span>Projects completed</span></div>
              <div className="hero-stat"><strong>20+</strong><span>Happy clients</span></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;