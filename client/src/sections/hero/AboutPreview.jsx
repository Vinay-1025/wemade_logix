import React from "react";
import { motion } from "framer-motion";
import "./about-preview.css";
import aboutPreview from "/about_preview.png";
import { useNavigate } from "react-router-dom";

const AboutPreview = () => {

  const navigate = useNavigate();

  return (
    <section className="about-preview section-padding">
      <div className="container about-preview-container">

        {/* Left Image Section */}
        <motion.div
          className="about-image"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="image-stack">

            <div className="img-box box-2"></div>

            {/* Main Image */}
            <img
              src={aboutPreview}
              alt="About Wemade Logix"
              className="about-main-image"
            />

            <div className="img-box box-1"></div>

            {/* Experience Badge */}
            <div className="experience-badge">
              <h3>10+</h3>
              <p>Years of Engineering Excellence</p>
            </div>

          </div>
        </motion.div>


        {/* Right Content Section */}
        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Brand Watermark */}
          <div className="about-watermark">
            <img src="/fav_icon.png" alt="watermark" />
          </div>

          <span className="section-tag">About Wemade Logix</span>

          <h2>
            Accelerating Innovation with <span>Software & AI</span>
          </h2>

          <p>
            Wemade Logix is a technology consulting and engineering company focused
            on building scalable enterprise software, AI-driven solutions, and
            cloud-native platforms. We help organizations modernize their
            digital infrastructure by combining advanced software engineering,
            data intelligence, and Generative AI technologies.
          </p>

          <div className="about-list">

            <div className="list-item">
              <h4>Our Vision</h4>
              <p>
                To empower global enterprises with intelligent software,
                advanced AI solutions, and scalable digital ecosystems.
              </p>
            </div>

            <div className="list-item">
              <h4>Our Mission</h4>
              <p>
                Deliver cutting-edge software platforms and AI-powered
                applications that accelerate digital transformation and
                drive measurable business impact.
              </p>
            </div>

          </div>

          <button className="btn btn-primary" onClick={() => navigate("/about")}>
            Know More About Wemade Logix
          </button>

        </motion.div>

      </div>
    </section>
  );
};

export default AboutPreview;
