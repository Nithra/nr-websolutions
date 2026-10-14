import { useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaWordpress,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaSearch,
  FaBullhorn,
  FaBrain,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiElementor,
  SiWoocommerce,
} from "react-icons/si";
import "./../../public/css/skills.css";
const skills = [
  { icon: <FaHtml5 />, name: "HTML5", level: 95 },
  { icon: <FaCss3Alt />, name: "CSS3", level: 95 },
  { icon: <FaJs />, name: "JavaScript", level: 85 },
  { icon: <FaReact />, name: "React", level: 75 },
  { icon: <FaBootstrap />, name: "Bootstrap", level: 95 },
  { icon: <SiTailwindcss />, name: "Tailwind", level: 80 },
  { icon: <FaWordpress />, name: "WordPress", level: 95 },
  { icon: <SiElementor />, name: "Elementor", level: 95 },
  { icon: <SiWoocommerce />, name: "WooCommerce", level: 90 },
  { icon: <FaGitAlt />, name: "Git", level: 80 },
  { icon: <FaGithub />, name: "GitHub", level: 80 },
  { icon: <FaFigma />, name: "Figma", level: 75 },
  { icon: <FaSearch />, name: "Basic SEO", level: 80 },
  { icon: <FaBullhorn />, name: "Social Media", level: 85 },
  { icon: <FaBrain />, name: "AI Tools", level: 90 },
  
];

function Skills() {
  const [pausedRows, setPausedRows] = useState({
    core: false,
    tools: false,
  });

  const renderSkillCards = (items, duplicate = false) =>
    items.map((skill) => (
      <div className="skill-card" key={`${duplicate ? "duplicate-" : ""}${skill.name}`}>
        <div className="skill-icon">{skill.icon}</div>
        <h4>{skill.name}</h4>
        <span>{skill.level}%</span>
        <div className="progress">
          <div className="fill" style={{ width: `${skill.level}%` }}></div>
        </div>
      </div>
    ));

  const renderSkillScroller = (id, label, items) => (
    <div className="skills-row" key={id}>
      <div className="skills-scroller-controls">
        <h3>{label}</h3>
        <button
          type="button"
          className="skills-pause"
          aria-pressed={pausedRows[id]}
          aria-controls={`skills-scroller-${id}`}
          onClick={() =>
            setPausedRows((current) => ({ ...current, [id]: !current[id] }))
          }
        >
          {pausedRows[id] ? "Resume scrolling" : "Pause scrolling"}
        </button>
      </div>
      <div
        id={`skills-scroller-${id}`}
        className={`skills-scroller${pausedRows[id] ? " is-paused" : ""}`}
        role="region"
        aria-label={`${label} skills`}
      >
        <div className={`skills-track skills-track-${id}`}>
          <div className="skills-group">{renderSkillCards(items)}</div>
          <div className="skills-group" aria-hidden="true">
            {renderSkillCards(items, true)}
          </div>
        </div>
      </div>
    </div>
  );

  const coreSkills = skills.slice(0, 9);
  const toolsSkills = skills.slice(9);

  return (
    <section className="skills" id="skills">
      <div className="container">

        <div className="section-title">
          <h5>MY SKILLS</h5>
          <h2>Technical Skills</h2>
          <p>
            Technologies, CMS platforms, tools and digital skills.
          </p>
        </div>

        <div className="skills-rows">
          {renderSkillScroller("core", "Core Skills", coreSkills)}
          {renderSkillScroller("tools", "Tools & Digital Skills", toolsSkills)}
        </div>
      </div>
    </section>
  );
}

export default Skills;