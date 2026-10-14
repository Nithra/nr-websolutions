import {
  FaBullseye,
  FaComments,
  FaMobileAlt,
  FaRegLightbulb,
  FaShieldAlt,
  FaUserCheck,
} from "react-icons/fa";
import "./../../public/css/work.css";

const reasons = [
  {
    icon: <FaUserCheck />,
    title: "10+ years of experience",
    description: "Practical experience across web development, WordPress, and responsive UI.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Responsive by default",
    description: "Layouts and interactions are considered for mobile, tablet, and desktop.",
  },
  {
    icon: <FaComments />,
    title: "Clear communication",
    description: "You know what’s happening, what’s next, and where your feedback fits.",
  },
  {
    icon: <FaBullseye />,
    title: "Focused on your goals",
    description: "Design and development choices support your business and your visitors.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Care after launch",
    description: "Get help with refinements, updates, and the next stage of your website.",
  },
  {
    icon: <FaRegLightbulb />,
    title: "Thoughtful problem solving",
    description: "A dependable partner for turning requirements into useful web experiences.",
  },
];

const WhyChooseMe = () => (
  <section className="why-choose" id="why-choose">
    <div className="container">
      <div className="section-title">
        <h5>Why work with me</h5>
        <h2>More than just a website</h2>
        <p>
          Thoughtful collaboration and experienced development help make your
          next digital project a confident step forward.
        </p>
      </div>

      <div className="reasons-grid">
        {reasons.map((reason) => (
          <article className="reason-card" key={reason.title}>
            <span className="reason-icon">{reason.icon}</span>
            <div>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseMe;
