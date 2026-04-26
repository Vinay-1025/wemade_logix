import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useTestimonials } from "../../hooks/useTestimonials";
import "./testimonials.css";

const Testimonials = () => {
  const { data: reviews, isLoading } = useTestimonials();

  if (isLoading) return null;

  return (
    <section className="testimonials-section section-padding">
      <div className="container">

        {/* Header */}
        <div className="testimonials-header">
          <span className="section-tag">Client Feedback</span>

          <h2>
            Trusted by <span>Innovative Teams</span>
          </h2>

          <p>
            Organizations rely on our expertise in Generative AI,
            enterprise software engineering, and cloud platforms
            to accelerate digital transformation.
          </p>
        </div>

        {/* Grid */}
        <div className="testimonials-grid">
          {reviews.map((review, index) => (
            <motion.div
              className="testimonials-card"
              key={review.id || index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >

              {/* Quote Icon */}
              <Quote className="testimonials-quote-icon" size={36} />

              {/* Text */}
              <p className="testimonial-text">
                "{review.content || review.text}"
              </p>

              {/* Reviewer */}
              <div className="testimonials-reviewer">
                <div className="reviewer-avatar">
                  {review.name?.charAt(0)}
                </div>

                <div className="testimonials-reviewer-info">
                  <h4>{review.name}</h4>
                  <span>{review.role}</span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
