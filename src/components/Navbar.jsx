import { useEffect, useState } from "react";
import { FaEnvelope, FaLinkedinIn, FaBars, FaTimes } from "react-icons/fa";
import "./../../public/css/navbar.css"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return undefined;

    const sections = document.querySelectorAll(
      "#home, #about, #experience, #services, #skills, #projects, #process, #why-choose, #contact",
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-35% 0px -55% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className="navbar"
      onKeyDown={(event) => {
        if (event.key === "Escape") closeMenu();
      }}
    >
      <div className="container">

        <a href="#home" className="logo" onClick={closeMenu}>
          <span>N</span>ithya
        </a>

        <button
          type="button"
          className="nav-toggle"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <nav
          id="primary-navigation"
          className={menuOpen ? "is-open" : ""}
          aria-label="Primary navigation"
        >
          <ul className="nav-links">
            {[
              ["home", "Home"],
              ["about", "About"],
              ["experience", "Experience"],
              ["services", "Services"],
              ["skills", "Skills"],
              ["projects", "Work"],
              ["process", "Process"],
              ["why-choose", "Why me"],
              ["contact", "Contact"],
            ].map(([id, label]) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={closeMenu}
                  className={activeSection === id ? "is-active" : ""}
                  aria-current={activeSection === id ? "location" : undefined}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-right">
          <a href="mailto:nithyar.dev@gmail.com"><FaEnvelope /></a>
          <a href="https://www.linkedin.com/in/nithya-r-589b3943b/"><FaLinkedinIn /></a>

          <a className="hire-btn" href="#contact">
            Hire Me
          </a>
        </div>

      </div>
    </header>
  );
};

export default Navbar;