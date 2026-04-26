import React from "react";
import { motion } from "framer-motion";
import { useCaseStudies } from "../../hooks/useCaseStudies";
import "./case-studies.css";

const CaseStudies = () => {
  const { data: projects, isLoading } = useCaseStudies();

  if (isLoading) return null;

  return (
    <section className="case-studies-section section-padding">
      <div className="container">

        {/* Header */}
        <div className="case-studies-header">
          <span className="section-tag">Case Studies</span>

          <h2>
            AI & Software <span>Solutions in Action</span>
          </h2>

          <p>
            Explore how we design and deliver enterprise software,
            generative AI systems, and cloud-native platforms that
            solve complex business challenges.
          </p>
        </div>

        {/* Grid */}
        <div className="case-studies-grid">
          {projects.map((project, index) => (
            <motion.div
              className="case-studies-card"
              key={project.id || index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >

              {/* Image */}
              <div className="case-studies-image">
                <img
                  src={project.image?.url || project.image || "/placeholder.jpg"}
                  alt={project.title}
                  loading="lazy"
                />

                <div className="case-studies-overlay">
                  <button className="btn btn-primary">
                    View Case Study
                  </button>
                </div>
              </div>

              {/* Info */}
              <div className="case-studies-info">

                <span className="case-category">
                  {project.category}
                </span>

                <h3>{project.title}</h3>

              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CaseStudies;
