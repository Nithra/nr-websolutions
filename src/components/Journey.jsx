import "./../../public/css/journey.css";

const milestones = [
  {
    year: "2014",
    title: "Started Web Development",
    description: "Began building a strong foundation in web development.",
  },
  {
    year: "2016",
    title: "WordPress & Web Projects",
    description: "Created websites and expanded into WordPress development.",
  },
  {
    year: "2019",
    title: "Growing Expertise",
    description: "Delivered responsive websites for a wider range of clients.",
  },
  {
    year: "2022",
    title: "Advanced Development",
    description: "Built more complex projects and broadened front-end skills.",
  },
  {
    year: "2026",
    title: "NR WebSolutions",
    description: "Focused on helping businesses grow through better websites.",
  },
];

const Journey = () => (
  <section
    className="journey"
    id="journey"
    style={{
      "--journey-banner": `url("${import.meta.env.BASE_URL}images/journey-banner.png")`,
    }}
  >
    <div className="container">
      <div className="journey-heading">
        <p className="journey-eyebrow">MY JOURNEY</p>
        <h2>10+ Years of Professional Experience</h2>
        <p>A journey of continuous learning, building projects, and helping businesses grow online.</p>
      </div>

      <ol className="journey-timeline">
        {milestones.map((milestone) => (
          <li className="journey-milestone" key={milestone.year}>
            <span className="journey-marker" aria-hidden="true" />
            <article className="journey-card">
              <strong className="journey-year">{milestone.year}</strong>
              <h3>{milestone.title}</h3>
              <p>{milestone.description}</p>
            </article>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default Journey;
