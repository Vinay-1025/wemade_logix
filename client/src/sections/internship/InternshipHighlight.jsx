import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Code, Users, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import viteLogo from '../../assets/Highlets/Summer_intern.jpg';
import './internship-highlight.css';

const InternshipHighlight = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Code size={24} />,
      title: "Real-world Projects",
      desc: "Work on live enterprise-grade AI and Cloud solutions."
    },
    {
      icon: <Briefcase size={24} />,
      title: "Industry Mentorship",
      desc: "Direct guidance from senior architects and leads."
    },
    {
      icon: <GraduationCap size={24} />,
      title: "Certified Excellence",
      desc: "Industry-recognized certification upon completion."
    },
    {
      icon: <Users size={24} />,
      title: "Career Path",
      desc: "Pre-placement offers for top performing interns."
    },
  ];

  return (
    <section className="internship-highlight section-padding">
      <div className="container internship-container">

        {/* Left Visualized Poster */}
        <motion.div
          className="internship-visual"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <motion.div
            className="internship-poster-wrapper"
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="internship-badge">Training + Certification</div>
            <img src={viteLogo} alt="Internship Poster" className="internship-poster-img" />
          </motion.div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="internship-content"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="highlight-tag">
            Next Gen Careers
          </div>

          <h2>
            Summer Internship <br />
            <span>Training 2024</span>
          </h2>

          <p>
            Elevate your skills with Wemade Logix. Our elite internship program
            offers high-impact training in AI and Enterprise Cloud systems,
            crafted for the next generation of software architects.
          </p>

          <div className="internship-features">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
                viewport={{ once: true }}
              >
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <div className="feature-text-group">
                  <h4 className="feature-title">{feature.title}</h4>
                  <p className="feature-desc">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="internship-actions"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            viewport={{ once: true }}
          >
            <button
              className="btn btn-premium btn-primary"
              onClick={() => navigate('/internship-registration')}
            >
              Secure My Spot <ArrowRight size={20} style={{ marginLeft: '12px' }} />
            </button>
            <button
              className="btn btn-premium btn-outline"
              onClick={() => navigate('/trainings/100')}
            >
              Curriculum Overview
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default InternshipHighlight;
