import "./../../public/css/about.css";

const About = () => {
  return (
    <section
      className="about"
      id="about"
      style={{
        "--about-banner": `url("${import.meta.env.BASE_URL}images/about-banner.png")`,
      }}
    >
      <div className="container about-container">
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