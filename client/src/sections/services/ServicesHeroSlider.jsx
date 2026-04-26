import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./services-hero.css";

const sliderData = [
  {
    id: 1,
    title: "Full-Stack Web Architecture",
    description:
      "Engineering scalable web platforms using MERN, MEAN, and modern microservices architecture designed for global reach.",
    helpText:
      "Builds high-performance enterprise systems and professional portfolios that scale seamlessly with your business growth.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Gen AI & Machine Learning",
    description:
      "Deploying intelligent systems powered by LLMs, custom AI models, and automated orchestration for smarter decision making.",
    helpText:
      "Enables organizations to predict trends, automate complex logic, and deliver intelligent, personalized user experiences.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Advanced Mobile Solutions",
    description:
      "Crafting high-fidelity native and cross-platform mobile applications that provide a premium experience on iOS and Android.",
    helpText:
      "Ensures your business is accessible on every device with smooth, high-performance interactions and modern mobile features.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "UI/UX Product Design",
    description:
      "User-first design philosophy focused on visual excellence, emotional engagement, and intuitive digital workflows.",
    helpText:
      "Maximizes user retention and brand value through premium, high-converting digital interfaces and robust user research.",
    image:
      "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Professional Mentorship",
    description:
      "Guiding the next generation of software architects through structured career paths, industry guidance, and real-world project experience.",
    helpText:
      "Accelerates professional growth by providing direct access to industry leaders and a proven roadmap for career success in technology.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
  },
];

const ServicesHeroSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % sliderData.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const activeSlide = sliderData[activeIndex];

  return (
    <div className="services-hero-slider">
      <AnimatePresence initial={false}>
        <motion.div
          key={activeIndex}
          className="slider-background"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          style={{
            backgroundImage: `linear-gradient(rgba(10,15,30,0.75), rgba(10,15,30,0.9)), url(${activeSlide.image})`,
          }}
        />
      </AnimatePresence>

      <div className="container slider-content-container">

        {/* Left Side: Company Info */}

        <div className="brand-info">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            <h1 className="brand-name">
              Wemade <span>Logix</span>
            </h1>

            <p className="brand-tagline">
              Building the Future with AI-Driven Software
            </p>

            <p className="brand-description">
              Wemade Logix specializes in building intelligent software systems
              powered by Artificial Intelligence and Generative AI. We create
              scalable enterprise platforms, AI copilots, and data-driven
              applications that help organizations innovate faster and operate
              smarter in a rapidly evolving digital landscape.
            </p>

          </motion.div>
        </div>

        {/* Right Side: Service Content */}

        <div className="service-content-area">

          <AnimatePresence mode="wait">

            <motion.div
              key={`content-${activeIndex}`}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5 }}
              className="active-service-info"
            >

              <h2 className="service-title">
                {activeSlide.title}
              </h2>

              <p className="service-description">
                {activeSlide.description}
              </p>

              <div className="how-it-helps-box">
                <span className="help-label">
                  How It Helps
                </span>

                <p className="help-text">
                  {activeSlide.helpText}
                </p>
              </div>

            </motion.div>

          </AnimatePresence>

          {/* Navigation Thumbnails */}

          <div className="slider-nav-thumbnails">

            {Array.from({ length: sliderData.length - 1 }).map((_, i) => {

              const nextIndex = (activeIndex + 1 + i) % sliderData.length;
              const slide = sliderData[nextIndex];

              return (
                <motion.div
                  key={slide.id}
                  layout
                  className="nav-thumb"
                  onClick={() => setActiveIndex(nextIndex)}
                >

                  <div
                    className="thumb-img"
                    style={{ backgroundImage: `url(${slide.image})` }}
                  />

                </motion.div>
              );

            })}

          </div>

        </div>
      </div>
    </div>
  );
};

export default ServicesHeroSlider;
