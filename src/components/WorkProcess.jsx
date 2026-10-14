import {
  FaComments,
  FaDraftingCompass,
  FaLaptopCode,
  FaRocket,
} from "react-icons/fa";
import "./../../public/css/work.css";

const steps = [
  {
    icon: <FaComments />,
    number: "01",
    title: "Discover",
    description: "We discuss your audience, goals, requirements, and what success should look like.",
  },
  {
    icon: <FaDraftingCompass />,
    number: "02",
    title: "Plan & design",
    description: "I map the content and user journey, then shape a visual direction for your approval.",
  },
  {
    icon: <FaLaptopCode />,
    number: "03",
    title: "Build & refine",
    description: "Your website is developed responsively, reviewed, and refined with your feedback.",
  },
  {
    icon: <FaRocket />,
    number: "04",
    title: "Launch & support",
    description: "After final checks, your website goes live and is ready to grow with your business.",
  },
];

const WorkProcess = () => (
  <section className="work-process" id="process">
    <div className="container">
      <div className="section-title">
        <h5>A clear path from idea to launch</h5>
        <h2>How we’ll work together</h2>
        <p>A collaborative process keeps every step clear, focused, and moving forward.</p>
      </div>

      <div className="process-grid">
        {steps.map((step) => (
          <article className="process-card" key={step.number}>
            <div className="process-card-top">
              <span className="process-icon">{step.icon}</span>
              <span className="process-number">{step.number}</span>
            </div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default WorkProcess;
