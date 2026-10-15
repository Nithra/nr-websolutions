import { FaArrowRight, FaCheck, FaQuoteLeft } from "react-icons/fa";
import "./../../public/css/work.css";

const pricingPlans = [
  {
    name: "Basic",
    price: "₹7,999",
    description: "Perfect for small businesses",
    features: [
      "5 Pages Website",
      "Responsive Design",
      "Contact Form",
      "Basic SEO Setup",
      "1 Month Support",
    ],
    featured: false,
  },
  {
    name: "Business",
    price: "₹14,999",
    description: "Best for growing businesses",
    features: [
      "10 Pages Website",
      "Custom Design",
      "Content + WhatsApp Setup",
      "Basic SEO Setup",
      "3 Months Support",
    ],
    featured: true,
  },
  {
    name: "Premium",
    price: "₹24,999",
    description: "For advanced business needs",
    features: [
      "Custom Pages (Up to 15)",
      "Advanced Features",
      "SEO + Performance Setup",
      "Social Media Integration",
      "6 Months Support",
    ],
    featured: false,
  },
];

const testimonials = [
  {
    quote: "Thank you for creating such a beautiful website for our clinic. Very professional and easy to work with.",
    name: "Dr. Kumar",
    role: "Dentist",
    rating: 5,
  },
  {
    quote: "Our school website looks amazing and is easy to manage now. Great support and quick turnaround.",
    name: "School Administrator",
    role: "Education",
    rating: 5,
  },
  {
    quote: "Reliable, responsive and genuinely invested in the business goals behind the website design.",
    name: "Business Owner",
    role: "Retail",
    rating: 5,
  },
];

const WhyChooseMe = () => (
  <section className="why-choose" id="why-choose">
    <div className="container">
      <div className="section-title">
        <h5>Our packages</h5>
        <h2>Simple &amp; Transparent Pricing</h2>
        <p>Flexible packages designed for businesses at every stage of growth.</p>
      </div>

      <div className="pricing-grid">
        {pricingPlans.map((plan) => (
          <article key={plan.name} className={plan.featured ? "pricing-card pricing-card-featured" : "pricing-card"}>
            <div className="pricing-header">
              <h3>{plan.name}</h3>
              {plan.featured && <span className="pricing-badge">Most Popular</span>}
            </div>
            <p className="pricing-description">{plan.description}</p>
            <div className="pricing-price">{plan.price}</div>
            <ul className="pricing-features">
              {plan.features.map((feature) => (
                <li key={feature}><FaCheck /> {feature}</li>
              ))}
            </ul>
            <button type="button" className="pricing-btn">Get Started <FaArrowRight /></button>
          </article>
        ))}
      </div>

      <div className="testimonials-wrap">
        <div className="section-title section-title-small">
          <h5>Client feedback</h5>
          <h2>What My Clients Say</h2>
          <p>Real feedback from businesses we’ve helped grow online.</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((item) => (
            <article key={item.name} className="testimonial-card">
              <FaQuoteLeft className="testimonial-icon" />
              <p className="testimonial-quote">“{item.quote}”</p>
              <div className="testimonial-stars" aria-label={`${item.rating} star review`}>
                {Array.from({ length: item.rating }).map((_, index) => <span key={index}>★</span>)}
              </div>
              <div className="testimonial-person">
                <h4>{item.name}</h4>
                <span>{item.role}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default WhyChooseMe;
