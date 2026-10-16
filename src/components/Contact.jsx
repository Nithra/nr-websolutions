import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaPaperPlane, FaTimes } from "react-icons/fa";
import "./../../public/css/contact.css";

const Contact = ({ open, onClose }) => {
  const dialogRef = useRef(null);
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  const sendEmail = async (event) => {
    event.preventDefault();
    const form = formRef.current;
    if (!form) {
      console.error("Unable to submit quote form: form element is unavailable.");
      alert("❌ Something went wrong. Please try again.");
      return;
    }

    setIsSubmitting(true);
    try {
      await emailjs.sendForm(
        "service_dz52i27",
        "template_zzktr5h",
        form,
        "VaX_XAElEwYRYRZ5C",
      );
      alert("✅ Thank you! Your project inquiry has been sent.");
      form.reset();
    } catch (error) {
      console.error("Failed to send project inquiry with EmailJS.", error);
      alert("❌ Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <dialog
      className="contact-quote-dialog"
      ref={dialogRef}
      aria-labelledby="contact-dialog-title"
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) dialogRef.current?.close();
      }}
    >
      <div className="contact-quote-content">
        <button
          type="button"
          className="contact-dialog-close"
          aria-label="Close quote form"
          onClick={() => dialogRef.current?.close()}
        >
          <FaTimes aria-hidden="true" />
        </button>

        <form ref={formRef} onSubmit={sendEmail} className="contact-form">
          <div className="contact-form-heading">
            <div>
              <p className="contact-quote-eyebrow">GET A QUOTE</p>
              <h2 id="contact-dialog-title">Get a Quote</h2>
            </div>
            <p>Fields marked with * are required.</p>
          </div>

          <div className="contact-form-grid">
            <div className="form-group">
              <label htmlFor="contact-name">Your name *</label>
              <input id="contact-name" type="text" name="from_name" placeholder="Jane Smith" autoComplete="name" required />
            </div>

            <div className="form-group">
              <label htmlFor="contact-email">Email address *</label>
              <input id="contact-email" type="email" name="from_email" placeholder="jane@company.com" autoComplete="email" required />
            </div>

            <div className="form-group">
              <label htmlFor="contact-phone">Phone number</label>
              <input id="contact-phone" type="tel" name="phone" placeholder="+91 98765 43210" autoComplete="tel" />
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
                <option>Let&apos;s discuss</option>
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
              <input id="contact-company" type="text" name="company" placeholder="Company name or current URL" autoComplete="organization" />
            </div>

            <div className="form-group form-group-full">
              <label htmlFor="contact-message">Tell me a little about the project *</label>
              <textarea
                id="contact-message"
                name="message"
                rows="4"
                placeholder="What are you looking to build or improve?"
                required
              />
            </div>
          </div>

          <button type="submit" disabled={isSubmitting}>
            <FaPaperPlane aria-hidden="true" />
            {isSubmitting ? "Sending inquiry..." : "Send project inquiry"}
          </button>
        </form>
      </div>
    </dialog>
  );
};

export default Contact;
