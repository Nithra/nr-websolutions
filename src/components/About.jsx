import "./../../public/css/about.css";
import aboutright from "./../assets/about.png";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container about-container">
        <div className="about-visual">
          <div className="about-visual-ring">
            <div className="about-visual-card">
              <img src={aboutright} alt="Business professional working on website development" />
            </div>
          </div>
          <div className="about-speech">Helping businesses grow online</div>
        </div>

        <div className="about-content">
          <h5>ABOUT US</h5>
          <h2>Helping Businesses Build a Strong Online Presence</h2>

          <p>
            At NR WebSolutions, we create modern, responsive, and high-performance websites that help
            businesses establish a professional online identity. Whether you&apos;re a startup, local
            business, educational institution, clinic, or e-commerce brand, we design websites that are
            visually appealing, mobile-friendly, SEO-ready, and built for growth.
          </p>

          <blockquote className="about-quote">
            Deliver websites that not only look great but also generate real business results.
          </blockquote>

          <div className="about-stats" aria-label="Business metrics">
            <div>
              <strong>10+</strong>
              <span>Years Experience</span>
            </div>
            <div>
              <strong>100+</strong>
              <span>Projects Completed</span>
            </div>
            <div>
              <strong>20+</strong>
              <span>Happy Clients</span>
            </div>
          </div>

          <div className="about-signoff">
            <div className="about-signature">NR WebSolutions</div>
            <span>Website Design &amp; Growth Partner</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;