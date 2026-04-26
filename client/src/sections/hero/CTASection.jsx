import React from 'react';
import { motion } from 'framer-motion';
import './cta.css';
import { useNavigate } from 'react-router-dom';

const CTASection = () => {
  const navigate = useNavigate();
  return (
    <section className="cta-container-section section-padding">
      <div className="container">

        <motion.div
          className="cta-card"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <h2>
            Ready to Build the Future with <span>AI & Software?</span>
          </h2>

          <p>
            Partner with Wemade Logix to develop intelligent software platforms,
            AI-powered applications, and scalable cloud solutions that drive
            digital transformation and business growth.
          </p>

          <div className="cta-buttons">
            <button className="btn btn-accent" onClick={() => navigate("/contact")}>
              Start Your Project
            </button>

            <button className="btn cta-btn-outline" onClick={() => navigate("/services")}>
              Explore Our Solutions
            </button>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default CTASection;
