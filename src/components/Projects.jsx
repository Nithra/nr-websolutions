import { useEffect, useRef, useState } from "react";
import { FaArrowRight, FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import website01 from "./../assets/projects/website-01.png";
import website02 from "./../assets/projects/website-02.png";
import website03 from "./../assets/projects/website-03.png";
import website04 from "./../assets/projects/website-04.png";
import website05 from "./../assets/projects/website-05.png";
import website06 from "./../assets/projects/website-06.png";
import website07 from "./../assets/projects/website-07.png";
import website08 from "./../assets/projects/website-08.png";
import website09 from "./../assets/projects/website-09.png";
import website10 from "./../assets/projects/website-10.png";
import website11 from "./../assets/projects/website-11.png";
import "./../../public/css/projects.css";

const projects = [
  {
    title: "SPartner",
    client: "SPartner",
    category: "Business websites",
    image: website01,
    description:
      "A responsive business website created to present services clearly and help visitors connect with the company.",
    details:
      "The project focused on building a clear company presence with responsive layouts, accessible navigation, and a content structure that makes key business information easy to find.",
    tech: ["WordPress", "HTML", "CSS", "JavaScript"],
    live: "https://spartner.in",
  },
  {
    title: "SPartner Adventure",
    client: "SPartner",
    category: "Business websites",
    image: website02,
    description:
      "An adventure travel website with responsive layouts and engaging destination content.",
    details:
      "A travel-focused experience designed to make destinations and activities easy to explore across desktop and mobile screens.",
    tech: ["WordPress", "CSS", "JavaScript"],
    live: "https://adventure.spartner.in",
  },
  {
    title: "SVP Sarumanai",
    client: "SVP Sarumanai",
    category: "Education",
    image: website03,
    description:
      "An educational institution website presenting school information and resources.",
    details:
      "A school website built to organize information for families and visitors, with a responsive layout and easy-to-manage WordPress content.",
    tech: ["WordPress", "Elementor"],
    live: "https://svpsarumanai.edu.in/",
  },
  {
    title: "Pro Medical English",
    client: "Pro Medical English",
    category: "Healthcare",
    image: website04,
    description:
      "A healthcare education platform built to introduce professional learning resources.",
    details:
      "A content-led education website designed to introduce learning resources and make program information straightforward to navigate.",
    tech: ["WordPress", "Elementor"],
    live: "https://promedicalenglish.com/",
  },
  {
    title: "The Leap Indonesia",
    client: "The Leap Indonesia",
    category: "Business websites",
    image: website05,
    description:
      "A corporate website with a custom responsive interface and clear page structure.",
    details:
      "A custom web experience with responsive page layouts, consistent visual styling, and intuitive paths through company information.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "http://theleap.id/",
  },
  {
    title: "Dr Sara Cullen",
    client: "Dr Sara Cullen",
    category: "Business websites",
    image: website06,
    description:
      "A professional coaching website that makes services and expertise easy to discover.",
    details:
      "A professional online presence built to explain coaching services and guide visitors toward useful information.",
    tech: ["WordPress", "Elementor"],
    live: "https://drsaracullen.com/",
  },
  {
    title: "Nambikkai Malaysia",
    client: "Nambikkai Malaysia",
    category: "Community",
    image: website07,
    description:
      "A responsive community organization website for sharing initiatives and information.",
    details:
      "A community-focused website with responsive layouts and clear information about the organization and its work.",
    tech: ["WordPress", "Responsive Design"],
    live: "https://nambikkai.com.my/",
  },
  {
    title: "Onpack",
    client: "Onpack",
    category: "Business websites",
    image: website08,
    description:
      "A packaging services website showcasing custom label printing and packaging solutions for Australian brands.",
    details:
      "A product-focused WordPress website that presents Onpack's digital, flexographic, and can printing services, along with its packaging capabilities across industries.",
    tech: ["WordPress"],
    live: "https://onpack.com.au/",
  },
  {
    title: "CS Impex",
    client: "CS Impex",
    category: "Business websites",
    image: website09,
    description:
      "A Malaysian grocery website showcasing Indian food products, spices, and everyday essentials.",
    details:
      "A business website for CS Impex, presenting its grocery products and company information for customers in Malaysia.",
    tech: ["WordPress"],
    live: "https://csimpex.com.my/",
  },
  {
    title: "Indcham",
    client: "Indcham",
    category: "Business websites",
    image: website10,
    description:
      "A website for Indcham, presenting the organization and its services to visitors.",
    details:
      "An organizational website that helps visitors explore Indcham's information and connect with the organization.",
    tech: ["Website"],
    live: "https://indcham.com/",
  },
  {
    title: "Spectra",
    client: "Spectra",
    category: "Business websites",
    image: website11,
    description:
      "A business website introducing Spectra's Zoho-powered solutions and services.",
    details:
      "A service-focused website presenting Spectra's Zoho business solutions, services, and expertise.",
    tech: ["Website"],
    live: "https://spectra.com.my/",
  },
];

const categories = ["All work", ...new Set(projects.map((project) => project.category))];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All work");
  const [selectedProject, setSelectedProject] = useState(null);
  const dialogRef = useRef(null);
  const lastTriggerRef = useRef(null);

  const visibleProjects = projects.filter(
    (project) => activeCategory === "All work" || project.category === activeCategory,
  );

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (selectedProject && !dialog.open) dialog.showModal();
    if (!selectedProject && dialog.open) dialog.close();
  }, [selectedProject]);

  const closeDialog = () => setSelectedProject(null);

  const handleDialogClose = () => {
    setSelectedProject(null);
    lastTriggerRef.current?.focus();
  };

  return (
    <section className="project-section" id="projects">
      <div className="container">
        <div className="section-title">
          <h5>Selected work</h5>
          <h2>Recent client work</h2>
          <p>
            A selection of websites built for businesses, education, healthcare,
            and community organizations.
          </p>
        </div>

        <div className="project-filters" role="group" aria-label="Filter projects by category">
          {categories.map((category) => {
            const count = category === "All work"
              ? projects.length
              : projects.filter((project) => project.category === category).length;

            return (
              <button
                type="button"
                key={category}
                className={activeCategory === category ? "is-active" : ""}
                aria-pressed={activeCategory === category}
                onClick={() => setActiveCategory(category)}
              >
                {category}<span>{count}</span>
              </button>
            );
          })}
        </div>

        <div className="projects-grid">
          {visibleProjects.map((project, index) => (
            <article className="project-card" key={project.title}>
              <button
                type="button"
                className="project-open"
                aria-label={`View details for ${project.title}`}
                onClick={(event) => {
                  lastTriggerRef.current = event.currentTarget;
                  setSelectedProject(project);
                }}
              >
                <span className="project-image">
                  <img
                    src={project.image}
                    alt={`${project.title} website preview`}
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="project-image-overlay">View project <FaArrowRight /></span>
                  <span className="project-episode">WORK {String(index + 1).padStart(2, "0")}</span>
                </span>
                <span className="project-content">
                  <span className="project-meta">
                    <span>{project.category}</span>
                    <span>{project.tech[0]}</span>
                  </span>
                  <span className="project-title">{project.title}</span>
                  <span className="project-description">{project.description}</span>
                  <span className="project-card-cta">More details <FaArrowRight /></span>
                </span>
              </button>
            </article>
          ))}
        </div>
      </div>

      <dialog
        className="project-dialog"
        ref={dialogRef}
        aria-labelledby="project-dialog-title"
        onCancel={(event) => {
          event.preventDefault();
          closeDialog();
        }}
        onClose={handleDialogClose}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeDialog();
        }}
      >
        {selectedProject && (
          <div className="project-dialog-content">
            <button
              type="button"
              className="project-dialog-close"
              aria-label="Close project details"
              onClick={closeDialog}
            >
              <FaTimes />
            </button>
            <div
              className="project-dialog-preview"
              role="region"
              aria-label={`Scrollable full-page preview of ${selectedProject.title}`}
              tabIndex={0}
            >
              <img
                className="project-dialog-image"
                src={selectedProject.image}
                alt={`${selectedProject.title} full website preview`}
              />
            </div>
            <div className="project-dialog-copy">
              <p className="project-dialog-category">
                {selectedProject.category} <span aria-hidden="true">·</span> Client: {selectedProject.client}
              </p>
              <h2 id="project-dialog-title">{selectedProject.title}</h2>
              <p>{selectedProject.details}</p>
              <div className="tech-stack">
                {selectedProject.tech.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
              <div className="project-dialog-actions">
                <a href={selectedProject.live} target="_blank" rel="noreferrer">
                  Visit live website <FaExternalLinkAlt />
                </a>
                <button type="button" onClick={closeDialog}>Back to projects</button>
              </div>
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
};

export default Projects;
