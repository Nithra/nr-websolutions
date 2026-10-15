import { useEffect } from 'react';
import './App.css'
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Services from './components/Services';
import WorkProcess from './components/WorkProcess';
import WhyChooseMe from './components/WhyChooseMe';
import Contact from "./components/Contact";
import Footer from './components/Footer';
import PageLoader from './components/PageLoader';

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll(
      '.section-title, .about-content, .about-cards, .skill-card, .service-card, .project-card, .experience-card, .process-card, .reason-card, .contact-info, .contact-form',
    );

    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    elements.forEach((element) => {
      element.classList.add('reveal');
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <PageLoader />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Services />
        <Skills />
        <Projects />
        <WorkProcess />
        <WhyChooseMe />
        <Contact />
      <section className="cta-band" id="cta-band">
        <div className="container cta-band-inner">
          <div>
            <h2>Let&apos;s Build Your Next Website</h2>
            <p>
              Whether you need a brand-new website, redesign an existing one, or ongoing maintenance,
              we&apos;re here to help.
            </p>
          </div>

          <div className="cta-actions">
            <a href="#contact" className="primary-btn cta-primary">Start Your Project</a>
            <a href="https://wa.me/919345046870" target="_blank" rel="noreferrer" className="secondary-btn cta-secondary">Schedule a Free Consultation</a>
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </>
  );
}

export default App;