import { useEffect, useState } from 'react';
import './App.css'
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Journey from './components/Journey';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';
import WorkProcess from './components/WorkProcess';
import WhyChooseMe from './components/WhyChooseMe';
import Contact from "./components/Contact";
import Footer from './components/Footer';
import PageLoader from './components/PageLoader';
import { FaArrowRight, FaWhatsapp } from 'react-icons/fa';
import './../public/css/cta.css';

function App() {
  const [quoteOpen, setQuoteOpen] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll(
      '.section-title, .about-content, .about-cards, .skill-card, .service-card, .project-card, .experience-card, .process-card, .reason-card',
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

  useEffect(() => {
    const handleQuoteLink = (event) => {
      if (!(event.target instanceof Element)) return;
      const link = event.target.closest('a[href="#contact"]');
      if (!link) return;

      event.preventDefault();
      setQuoteOpen(true);
    };

    document.addEventListener('click', handleQuoteLink);
    return () => document.removeEventListener('click', handleQuoteLink);
  }, []);

  return (
    <>
      <PageLoader />
      <Navbar />
      <main>
        <Hero />
        <About />

        <Services />
        <Journey />
        
        <Projects />
        <WorkProcess />
        <Skills />
        <WhyChooseMe />
        <Contact open={quoteOpen} onClose={() => setQuoteOpen(false)} />
      <section
        className="cta-band"
        id="cta-band"
        style={{
          "--cta-banner": `url("${import.meta.env.BASE_URL}images/build-next-website.png")`,
        }}
      >
        <div className="container cta-band-inner">
          <div>
            <h2>Let&apos;s Build Your Next Website</h2>
            <p>
              Have a project in mind? I&apos;d love to hear about it. Get a free consultation and a
              customized quote for your business.
            </p>
          </div>

          <div className="cta-actions">
            <a href="#contact" className="cta-primary">
              Get Free Quote <FaArrowRight aria-hidden="true" />
            </a>
            <a href="https://wa.me/919345046870" target="_blank" rel="noreferrer" className="cta-secondary">
              <FaWhatsapp aria-hidden="true" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </>
  );
}

export default App;