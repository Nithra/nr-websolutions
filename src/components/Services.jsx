import { FaArrowRight, FaCalendarAlt, FaHeart, FaStar, FaUsers } from "react-icons/fa";
import "./../../public/css/services.css";

const services = [
  {
    image: "service-img1.png",
    title: "Website Design",
    description: "Modern, responsive designs for all businesses.",
  },
  {
    image: "service-img2.png",
    title: "WordPress Development",
    description: "Custom themes, plugins and easy-to-manage websites.",
  },
  {
    image: "service-img3.png",
    title: "React Development",
    description: "Fast and interactive web applications.",
  },
  {
    image: "service-img4.png",
    title: "Website Redesign",
    description: "Give your website a fresh, modern look.",
  },
  {
    image: "service-img5.png",
    title: "SEO Optimization",
    description: "Get found on Google and grow your business.",
  },
  {
    image: "service-img6.png",
    title: "Website Maintenance",
    description: "Updates, backups, security and speed.",
  },
  {
    image: "service-img7.png",
    title: "UI/UX Design",
    description: "User-friendly and modern interfaces.",
  },
  {
    image: "service-img8.png",
    title: "Speed Optimization",
    description: "Faster websites for better performance.",
  },
];

const metrics = [
  { icon: <FaCalendarAlt aria-hidden="true" />, value: "10+", label: "Years Experience" },
  { icon: <FaUsers aria-hidden="true" />, value: "100+", label: "Projects Completed" },
  { icon: <FaHeart aria-hidden="true" />, value: "20+", label: "Happy Clients" },
  { icon: <FaStar aria-hidden="true" />, value: "99%", label: "Client Satisfaction" },
];

const Services = () => (
  <section className="services" id="services">
    <div className="container">
      <div className="services-heading">
        <div className="services-heading-copy">
          <p className="services-eyebrow">OUR SERVICES</p>
          <h2>Our Services</h2>
          <p>Everything you need to build and grow your online presence.</p>
        </div>
        <a className="services-all-link" href="#projects">
          View All Projects <FaArrowRight aria-hidden="true" />
        </a>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <article className="service-card" key={service.image}>
            <img
              className="service-image"
              src={`${import.meta.env.BASE_URL}images/${service.image}`}
              alt=""
              loading={index > 3 ? "lazy" : "eager"}
            />
            <div className="service-card-copy">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="#contact" className="service-link">
                Learn More <FaArrowRight aria-hidden="true" />
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="services-metrics" aria-label="Business metrics">
        {metrics.map((metric) => (
          <div className="services-metric" key={metric.label}>
            <span className="services-metric-icon">{metric.icon}</span>
            <div>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
