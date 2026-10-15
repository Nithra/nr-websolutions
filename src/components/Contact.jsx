import "./../../public/css/contact.css";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">

        <div className="section-title">
          <h5>CONTACT US</h5>
          <h2>Tell Us About Your Project</h2>

          <p>
            Have an idea? Let&apos;s discuss your requirements and create a website that helps your business grow.
          </p>
        </div>

        <div className="contact-wrapper">

          <div className="contact-info">
            <div className="contact-prompt">
              <span className="contact-prompt-label">START A CONVERSATION</span>
              <h3>Need a website that works for your business?</h3>
              <p>
                Whether you are launching a new brand, refreshing an old website,
                or building a more effective digital presence, we’d love to hear about it.
              </p>
            </div>

            <div className="info-card">
              <span className="info-icon" aria-hidden="true">
                <FaEnvelope />
              </span>
              <div>
                <h4>Email</h4>
                <a href="mailto:hello.nrwebsolutions@gmail.com">
                  hello.nrwebsolutions@gmail.com
                </a>
              </div>
            </div>

            <div className="info-card">
              <span className="info-icon" aria-hidden="true">
                <FaPhoneAlt />
              </span>
              <div>
                <h4>Phone</h4>
                <p>Available on request</p>
              </div>
            </div>

            <div className="info-card">
              <span className="info-icon" aria-hidden="true">
                <FaMapMarkerAlt />
              </span>
              <div>
                <h4>Location</h4>
                <p>Remote • Serving clients worldwide</p>
              </div>
            </div>

            <a
              className="info-card info-card-link"
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
            >
              <span className="info-icon" aria-hidden="true">
                <FaLinkedin />
              </span>
              <span>
                <span className="info-card-title">LinkedIn</span>
                <span className="info-card-description">Connect with me</span>
              </span>
            </a>

          </div>

          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="contact-form"
          >
            <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY" />
            <input type="hidden" name="subject" value="NR WebSolutions Project Inquiry" />
            <input type="hidden" name="from_name" value="NR WebSolutions" />

            <div className="contact-form-heading">
              <h3>Project brief</h3>
              <p>Fields marked with * are required.</p>
            </div>

            <div className="contact-form-grid">
              <div className="form-group">
                <label htmlFor="contact-name">Your name *</label>
                <input id="contact-name" type="text" name="name" placeholder="Jane Smith" autoComplete="name" required />
              </div>

              <div className="form-group">
                <label htmlFor="contact-email">Email address *</label>
                <input id="contact-email" type="email" name="email" placeholder="jane@company.com" autoComplete="email" required />
              </div>

              <div className="form-group">
                <label htmlFor="contact-service">What do you need? *</label>
                <select id="contact-service" name="service" defaultValue="" required>
                  <option value="" disabled>Select a service</option>
                  <option>Business website</option>
                  <option>E-commerce store</option>
                  <option>WordPress / Elementor website</option>
                  <option>React frontend development</option>
                  <option>Website redesign</option>
                  <option>Website maintenance or improvements</option>
                  <option>Not sure yet / other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="contact-budget">Estimated budget</label>
                <select id="contact-budget" name="budget" defaultValue="">
                  <option value="" disabled>Select a range (optional)</option>
                  <option>Under ₹25,000</option>
                  <option>₹25,000 – ₹50,000</option>
                  <option>₹50,000 – ₹1,00,000</option>
                  <option>₹1,00,000+</option>
                  <option>Let’s discuss</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="contact-timeline">When would you like to start?</label>
                <select id="contact-timeline" name="timeline" defaultValue="">
                  <option value="" disabled>Select a timeline (optional)</option>
                  <option>As soon as possible</option>
                  <option>Within a month</option>
                  <option>In 1–3 months</option>
                  <option>Just planning ahead</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="contact-company">Company or website</label>
                <input id="contact-company" type="text" name="company" placeholder="Company name or current URL" />
              </div>

              <div className="form-group form-group-full">
                <label htmlFor="contact-message">Tell me a little about the project *</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="5"
                  placeholder="What are you looking to build or improve?"
                  required
                />
              </div>
            </div>

            <button type="submit">
              <FaPaperPlane />
              Send project inquiry
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;