import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring, useInView, AnimatePresence } from "framer-motion";
import { Target, Shield, Lightbulb, Rocket, Cpu, Globe, Users, Zap, CheckCircle, TrendingUp, ArrowUpRight } from "lucide-react";
import SEO from "../../components/ui/SEO";
import "./about.css";

const heroImg =
  "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop";

const missionImg =
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop";

const teamImg =
  "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop";

const storyImg =
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop";

const visionImg =
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2026&auto=format&fit=crop";

const AnimatedCounter = ({ value, label, icon: Icon }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const endValue = parseInt(value);
  const suffix = value.replace(/[0-9]/g, '');

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = endValue / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= endValue) {
          setCount(endValue);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, endValue]);

  return (
    <motion.div
      ref={ref}
      className="stat-card-lux"
      whileHover={{ y: -10 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="stat-lux-icon">
        <Icon size={20} />
      </div>
      <div className="stat-lux-content">
        <h3 className="stat-lux-value">{count}{suffix}</h3>
        <p className="stat-lux-label">{label}</p>
      </div>
    </motion.div>
  );
};

const ValueBentoCard = ({ v, i }) => {
  const isLarge = i === 0 || i === 3;
  return (
    <motion.div
      className={`bento-card ${isLarge ? 'bento-large' : 'bento-small'}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="bento-glow"></div>
      <div className="bento-icon">
        <v.icon size={28} />
      </div>
      <h3>{v.title}</h3>
      <p>{v.desc}</p>
    </motion.div>
  );
};

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const springScroll = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const values = [
    {
      title: "AI Innovation",
      desc: "Harnessing the power of Generative AI and LLMs to solve complex business challenges with intelligent automation.",
      icon: Cpu,
    },
    {
      title: "Engineering Excellence",
      desc: "Building robust, scalable, and secure enterprise software architectures designed for modern cloud environments.",
      icon: Shield,
    },
    {
      title: "Ethical Technology",
      desc: "Commitment to responsible AI development, ensuring privacy, security, and transparency in every solution we build.",
      icon: CheckCircle,
    },
    {
      title: "Global Scalability",
      desc: "Architecting systems that grow with your business, from local startups to global enterprise platforms.",
      icon: Globe,
    },
  ];

  const milestones = [
    {
      year: "2022",
      title: "Founding Vision",
      desc: "Wemade Logix was founded with the dream of making advanced AI accessible to enterprises worldwide.",
    },
    {
      year: "2023",
      title: "LMS Breakthrough",
      desc: "Launched our flagship Dental Lab Management System, revolutionizing digital dentistry workflows.",
    },
    {
      year: "2024",
      title: "AI Integration",
      desc: "Successfully integrated Generative AI into enterprise ERP systems, boosting productivity by 40%.",
    },
    {
      year: "2025",
      title: "Global Expansion",
      desc: "Expanded operations to 3 continents, providing high-end technology consulting and development.",
    },
  ];

  const stats = [
    { label: "Successful Projects", value: "150+", icon: Target },
    { label: "AI Models Deployed", value: "45+", icon: Zap },
    { label: "Expert Engineers", value: "80+", icon: Users },
    { label: "Global Clients", value: "30+", icon: TrendingUp },
  ];

  return (
    <div className="about-page-lux" ref={containerRef}>
      <SEO
        title="About Us"
        description="Learn about Wemade Logix — a technology company building enterprise software, AI platforms, and generative AI solutions."
      />

      {/* DYNAMIC BACKGROUND */}
      <div className="lux-bg-layers">
        <div className="lux-mesh-blob lux-blob-1"></div>
        <div className="lux-mesh-blob lux-blob-2"></div>
        <div className="lux-grid-pattern"></div>
      </div>

      <div className="page-watermark">
        <img src="/fav_icon.png" alt="" />
      </div>

      {/* CINEMATIC HERO */}
      <section className="about-hero-lux">
        <div className="hero-lux-media">
          <div className="hero-lux-overlay"></div>
          <img src={heroImg} alt="" className="hero-lux-img" />
        </div>

        <div className="container">
          <div className="hero-lux-content">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <span className="lux-badge">The Future of Intelligence</span>
              <h1 className="lux-hero-title">
                Engineering <br />
                <span>Impactful Logic</span>
              </h1>
              <p className="lux-hero-desc">
                Wemade Logix is a premier technology partner dedicated to building
                enterprise-grade software and AI systems that define the next era
                of digital industry.
              </p>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="lux-scroll-hint"
          style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]) }}
        >
          <div className="lux-scroll-line"></div>
          <span>Scroll to Explore</span>
        </motion.div>
      </section>

      {/* STORY SECTION - ASYMMETRIC */}
      <section className="about-story-lux">
        <div className="container">
          <div className="story-lux-grid">
            <div className="story-lux-text">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="lux-subtitle">Our Identity</span>
                <h2 className="lux-section-title">Crafting Excellence through <span>Code & Context</span></h2>
                <p>
                  Founded in 2022, Wemade Logix began with a simple yet ambitious goal:
                  to bridge the widening gap between advanced AI research and its
                  practical, scalable application in the enterprise world.
                </p>
                <p>
                  What started as a boutique engineering firm has evolved into a global
                  technology powerhouse. We don't just build software; we build the
                  digital foundations that allow businesses to thrive.
                </p>
                <div className="lux-quote-box">
                  <div className="lux-quote-bar"></div>
                  <p>"Our DNA is rooted in the belief that technology should be as empathetic as it is efficient."</p>
                </div>
              </motion.div>
            </div>

            <motion.div
              className="story-lux-visual"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="lux-img-wrapper">
                <img src={storyImg} alt="Collaborative Engineering" className="lux-parallax-img" />
                <div className="lux-img-badge">
                  <span>EST. 2022</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="about-stats-lux">
        <div className="container">
          <div className="stats-lux-grid">
            {stats.map((stat, i) => (
              <AnimatedCounter key={i} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* MISSION & VISION - NARRATIVE */}
      <section className="about-mv-lux">
        <div className="container">
          <div className="mv-lux-row">
            <motion.div
              className="mv-lux-content"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="lux-subtitle">Our Mission</span>
              <h2>Democratizing<br /><span>Intelligent Logic</span></h2>
              <p>Our mission is to empower organizations by converting complex data into actionable intelligence. We strive to deliver software that doesn't just process information but understands context, enabling our partners to make faster, smarter decisions.</p>
            </motion.div>
            <div className="mv-lux-visual">
              <img src={missionImg} alt="Mission" className="lux-masked-img" />
            </div>
          </div>

          <div className="mv-lux-row reverse">
            <motion.div
              className="mv-lux-content"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="lux-subtitle">Our Vision</span>
              <h2>Pioneering the<br /><span>Autonomous Future</span></h2>
              <p>We envision a future where technology acts as a seamless extension of human capability. Wemade Logix aims to be the heartbeat of this transformation, setting the global standard for how AI and human creativity collaborate.</p>
            </motion.div>
            <div className="mv-lux-visual">
              <img src={visionImg} alt="Vision" className="lux-masked-img" />
            </div>
          </div>
        </div>
      </section>

      {/* VALUES BENTO GRID */}
      <section className="about-values-lux">
        <div className="container">
          <div className="lux-center-header">
            <span className="lux-subtitle">Core Philosophy</span>
            <h2 className="lux-section-title">The <span>Principles</span> That Guide Us</h2>
          </div>

          <div className="bento-grid-lux">
            {values.map((v, i) => (
              <ValueBentoCard key={i} v={v} i={i} />
            ))}
          </div>
        </div>
      </section>

      {/* PRECISION TIMELINE */}
      <section className="about-journey-lux">
        <div className="container">
          <div className="lux-center-header">
            <span className="lux-subtitle">Our Evolution</span>
            <h2 className="lux-section-title">A Legacy in <span>The Making</span></h2>
          </div>

          <div className="precision-timeline">
            <div className="timeline-lux-line">
              <motion.div
                className="timeline-lux-progress"
                style={{ height: useTransform(springScroll, [0.7, 0.95], ["0%", "100%"]) }}
              />
            </div>

            <div className="timeline-lux-items">
              {milestones.map((m, i) => (
                <motion.div
                  key={i}
                  className="timeline-lux-item"
                  initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="timeline-lux-node"></div>
                  <div className="timeline-lux-content">
                    <span className="milestone-lux-year">{m.year}</span>
                    <h4>{m.title}</h4>
                    <p>{m.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
};

const LeadershipCardLux = ({ name, role }) => (
  <motion.div
    className="team-card-lux"
    whileHover={{ y: -10 }}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    <div className="team-card-lux-bg"></div>
    <div className="team-card-lux-content">
      <span className="member-lux-role">{role}</span>
      <h3>{name}</h3>
      <div className="member-lux-divider"></div>
      <p>Visionary leadership committed to technological excellence and sustainable innovation.</p>
      <div className="member-lux-link">
        <span>View Profile</span>
        <ArrowUpRight size={16} />
      </div>
    </div>
  </motion.div>
);

export default About;
