import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  EffectCoverflow,
  Keyboard,
  Pagination,
} from "swiper/modules";
import {
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
  FaCode,
  FaLaptopCode,
  FaShoppingBag,
  FaTools,
  FaWordpress,
} from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./../../public/css/services.css";

const services = [
  {
    icon: <FaLaptopCode />,
    number: "01",
    title: "Website Design",
    description:
      "Modern UI/UX designs that reflect your brand and create a trustworthy first impression.",
    tags: ["Modern layouts", "Responsive UI", "Brand-focused design"],
  },
  {
    icon: <FaShoppingBag />,
    number: "02",
    title: "Website Development",
    description:
      "Responsive websites using HTML, CSS, JavaScript, React, and WordPress to support growth.",
    tags: ["Business websites", "Landing pages", "Responsive design"],
  },
  {
    icon: <FaWordpress />,
    number: "03",
    title: "Website Redesign",
    description:
      "Give your existing website a fresh, modern, and professional look that performs better.",
    tags: ["Refresh", "Modern branding", "Conversion-focused"],
  },
  {
    icon: <FaCode />,
    number: "04",
    title: "Website Maintenance",
    description:
      "Regular updates, backups, security checks, and ongoing support to keep your website healthy.",
    tags: ["Maintenance", "Security", "Support"],
  },
  {
    icon: <FaTools />,
    number: "05",
    title: "SEO Optimization",
    description:
      "Improve your website visibility on Google with technical and on-page SEO improvements.",
    tags: ["Technical SEO", "On-page SEO", "Search visibility"],
  },
];

const Services = () => {
  const [reducedMotion, setReducedMotion] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const [isInView, setIsInView] = useState(false);
  const [isDocumentVisible, setIsDocumentVisible] = useState(!document.hidden);
  const sectionRef = useRef(null);
  const swiperRef = useRef(null);
  const carouselId = "services-carousel";

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReducedMotion(preference.matches);
    preference.addEventListener("change", updatePreference);
    return () => preference.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    const updateVisibility = () => setIsDocumentVisible(!document.hidden);
    document.addEventListener("visibilitychange", updateVisibility);
    return () => document.removeEventListener("visibilitychange", updateVisibility);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || !("IntersectionObserver" in window)) {
      setIsInView(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.1 },
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const swiper = swiperRef.current;
    if (!swiper || swiper.destroyed || !swiper.autoplay) return;

    if (!reducedMotion && isInView && isDocumentVisible) {
      swiper.autoplay.start();
    } else {
      swiper.autoplay.stop();
    }
  }, [isDocumentVisible, isInView, reducedMotion]);

  return (
  <section className="services" id="services" ref={sectionRef}>
    <div className="container">
      <div className="section-title">
        <h5>OUR SERVICES</h5>
        <h2>Website Design &amp; Development Services</h2>
        <p>
          We help businesses create faster, more credible, and more conversion-friendly digital experiences.
        </p>
      </div>

      <div className="services-slider-toolbar">
        {/* <p className="services-slider-note">
          The center card is featured. Swipe or use the arrows to explore more services.
        </p> */}
        <div className="services-slider-controls" aria-label="Service carousel controls">
          <button
            type="button"
            aria-label="Previous service"
            aria-controls={carouselId}
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <FaChevronLeft aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Next service"
            aria-controls={carouselId}
            onClick={() => swiperRef.current?.slideNext()}
          >
            <FaChevronRight aria-hidden="true" />
          </button>
        </div>
      </div>

      <Swiper
        id={carouselId}
        className="services-slider"
        modules={[Pagination, Autoplay, Keyboard, EffectCoverflow]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          if (reducedMotion || !isInView || !isDocumentVisible) {
            swiper.autoplay.stop();
          }
        }}
        effect="coverflow"
        centeredSlides
        slidesPerView="auto"
        spaceBetween={0}
        grabCursor
        watchSlidesProgress
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 150,
          modifier: 1.15,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        keyboard={{ enabled: true, onlyInViewport: true }}
        loop
        speed={reducedMotion ? 0 : 750}
        autoplay={{ delay: 4200, disableOnInteraction: false, pauseOnMouseEnter: true }}
      >
        {services.map((service) => (
          <SwiperSlide key={service.number}>
            <article className="service-card">
              <div className="service-card-top">
                <span className="service-icon">{service.icon}</span>
                <span className="service-number">{service.number}</span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-tags">
                {service.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
              <a href="#contact" className="service-link">
                Discuss this service <FaArrowRight aria-hidden="true" />
              </a>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>
  );
};

export default Services;
