import { useEffect, useRef, useState } from "react";
import { FaArrowRight, FaTimes } from "react-icons/fa";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaMobileAlt,
  FaGlobe,
  FaWordpress,
  FaShoppingCart,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaSearch,
  FaBug,
  FaTachometerAlt,
  FaTags,
  FaCode,
  FaBookOpen,
  FaPaintBrush,
  FaImage,
  FaPalette,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiElementor,
  SiWoocommerce,
  SiShopify,
} from "react-icons/si";
import "./../../public/css/skills.css";
const skillCategories = [
  {
    name: "Front-end Development",
    skills: [
      { icon: <FaHtml5 />, name: "HTML5" },
      { icon: <FaCss3Alt />, name: "CSS3" },
      { icon: <FaJs />, name: "JavaScript" },
      { icon: <FaReact />, name: "React.js" },
      { icon: <FaBootstrap />, name: "Bootstrap" },
      { icon: <FaMobileAlt />, name: "Responsive Web Design" },
      { icon: <FaGlobe />, name: "Cross-Browser Compatibility" },
    ],
  },
  {
    name: "CMS & E-commerce",
    skills: [
      { icon: <FaWordpress />, name: "WordPress" },
      { icon: <SiElementor />, name: "Elementor" },
      { icon: <FaPaintBrush />, name: "WPBakery Page Builder" },
      { icon: <FaPaintBrush />, name: "DIVI Builder" },
      { icon: <SiWoocommerce />, name: "WooCommerce" },
      { icon: <SiShopify />, name: "Shopify" },
      { icon: <FaShoppingCart />, name: "OpenCart" },
      { icon: <FaShoppingCart />, name: "CS-Cart" },
    ],
  },
  {
    name: "Design",
    skills: [
      { icon: <FaFigma />, name: "Figma" },
      { icon: <FaPaintBrush />, name: "Adobe XD" },
      { icon: <FaImage />, name: "Photoshop (PSD)" },
      { icon: <FaPalette />, name: "Canva" },
    ],
  },
  {
    name: "Version Control",
    skills: [
      { icon: <FaGitAlt />, name: "Git" },
      { icon: <FaGithub />, name: "GitHub" },
    ],
  },
  {
    name: "SEO & Website Optimization",
    skills: [
      { icon: <FaSearch />, name: "Google Search Console" },
      { icon: <FaTags />, name: "Basic On-Page SEO" },
      { icon: <FaBug />, name: "Crawl Error Fixing" },
      { icon: <FaTachometerAlt />, name: "Site Speed Optimization" },
      { icon: <FaCode />, name: "Meta Tag Management" },
      { icon: <FaBookOpen />, name: "Blog Publishing" },
    ],
  },
];

function Skills() {
  const [skillsOpen, setSkillsOpen] = useState(false);
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (skillsOpen && !dialog.open) dialog.showModal();
    if (!skillsOpen && dialog.open) dialog.close();
  }, [skillsOpen]);

  return (
    <section
      className="skills"
      id="skills"
      style={{
        "--skills-banner": `url("${import.meta.env.BASE_URL}images/skills-banner.png")`,
      }}
    >
      <div className="container">
        <div className="skills-intro">
          <div className="skills-intro-copy">
            <p className="skills-eyebrow">MY SKILLS</p>
            <h2>Technologies I Work With</h2>
            <p>Tools and technologies I use to build modern, responsive and high-performance websites.</p>
            <button
              className="skills-view-all"
              type="button"
              aria-haspopup="dialog"
              onClick={() => setSkillsOpen(true)}
            >
              View All Skills <FaArrowRight aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      <dialog
        className="skills-dialog"
        ref={dialogRef}
        aria-labelledby="skills-dialog-title"
        onClose={() => setSkillsOpen(false)}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialogRef.current?.close();
        }}
      >
        <div className="skills-dialog-content">
          <div className="skills-dialog-heading">
            <div>
              <p className="skills-eyebrow">MY TOOLKIT</p>
              <h2 id="skills-dialog-title">All Skills</h2>
            </div>
            <button
              type="button"
              className="skills-dialog-close"
              aria-label="Close all skills"
              onClick={() => dialogRef.current?.close()}
            >
              <FaTimes aria-hidden="true" />
            </button>
          </div>
          <div className="skills-dialog-categories">
            {skillCategories.map((category) => (
              <section className="skills-dialog-category" key={category.name}>
                <h3>{category.name}</h3>
                <div className="skills-dialog-grid">
                  {category.skills.map((skill) => (
                    <article className="skills-dialog-card" key={skill.name}>
                      <span className="skills-dialog-icon" aria-hidden="true">{skill.icon}</span>
                      <span className="skills-dialog-name">{skill.name}</span>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </dialog>
    </section>
  );
}

export default Skills;