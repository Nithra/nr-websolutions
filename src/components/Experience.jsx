import "./../../public/css/experience.css";
import { FaBriefcase, FaCalendarAlt } from "react-icons/fa";

const experiences = [
  {
    designation: "Frontend Developer",
    company: "Benchmark IT Solutions Pvt Ltd",
    duration: "Mar 2023 - Present",
    technologies: [
      "React.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "WordPress",
      "Git",
      "GitHub",
    ],
    responsibilities: [
      "Develop responsive React.js applications.",
      "Build reusable UI components.",
      "Develop and maintain WordPress websites.",
      "Integrate APIs and dynamic features.",
      "Optimize website performance and responsiveness.",
      "Collaborate with designers and backend developers.",
    ],
  },
  {
    designation: "Web Developer",
    company: "Spectra Business Services",
    duration: "Nov 2021 - Mar 2023",
    technologies: [
      "WordPress",
      "Elementor",
      "HTML5",
      "CSS3",
      "JavaScript",
      "Bootstrap",
      "SEO",
    ],
    responsibilities: [
      "Developed responsive corporate websites.",
      "Customized WordPress themes and plugins.",
      "Built websites using Elementor.",
      "Performed website maintenance.",
      "Improved page speed and SEO.",
    ],
  },
  {
    designation: "Web Developer",
    company: "Eraffic Information Systems Pvt Ltd",
    duration: "Jul 2019 - Oct 2021",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Bootstrap",
      "jQuery",
    ],
    responsibilities: [
      "Developed responsive business websites.",
      "Converted PSD/Figma to HTML.",
      "Created Bootstrap layouts.",
      "Cross-browser compatibility fixes.",
      "Website maintenance.",
    ],
  },
  {
    designation: "Web Developer",
    company: "Great Innovus Solutions Pvt Ltd",
    duration: "Jan 2016 - Jun 2019",
    technologies: [
      "WordPress",
      "WooCommerce",
      "HTML5",
      "CSS3",
      "JavaScript",
    ],
    responsibilities: [
      "Developed WordPress websites.",
      "Customized themes and plugins.",
      "Built eCommerce websites.",
      "Created landing pages.",
      "Website maintenance.",
    ],
  },
  {
    designation: "Junior Web Developer",
    company: "Bugtreat Technologies Pvt Ltd",
    duration: "Jun 2014 - Dec 2015",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "jQuery",
      "Bootstrap",
    ],
    responsibilities: [
      "Developed responsive web pages.",
      "Converted UI designs into HTML.",
      "Fixed browser compatibility issues.",
      "Supported senior developers.",
    ],
  },
];

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <div className="container">

        <div className="section-title">
          <h5>WORK EXPERIENCE</h5>
          <h2>10+ Years Professional Journey</h2>
          <p>
            Throughout my career, I've worked with startups and international
            companies, delivering responsive websites, WordPress solutions, and
            modern front-end applications.
          </p>
        </div>

        <div className="experience-list">
          {experiences.map((exp, index) => (
            <div className="experience-card" key={index}>

              <div className="experience-header">
                <div>
                  <h3>{exp.designation}</h3>
                  <h4>{exp.company}</h4>
                </div>

                <div className="duration">
                  <FaCalendarAlt />
                  <span>{exp.duration}</span>
                </div>
              </div>

              <div className="responsibilities">
                <h5>
                  <FaBriefcase /> Key Responsibilities
                </h5>

                <ul>
                  {exp.responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="tech-stack">
                {exp.technologies.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;