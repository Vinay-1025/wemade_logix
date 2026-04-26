import React from "react";
import { motion } from "framer-motion";
import "./stats-counter.css";

const stats = [
  {
    label: "AI Solutions Delivered",
    value: "120",
    suffix: "+"
  },
  {
    label: "Enterprise Clients",
    value: "45",
    suffix: "+"
  },
  {
    label: "AI Models Deployed",
    value: "300",
    suffix: "+"
  },
  {
    label: "Engineering Expertise",
    value: "10",
    suffix: "+"
  }
];

const StatsCounter = () => {
  return (
    <section className="stats-counter-section section-padding">
      <div className="container">

        <div className="stats-grid">

          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1
              }}
              viewport={{ once: true }}
            >

              <div className="stat-value">
                {stat.value}
                <span>{stat.suffix}</span>
              </div>

              <div className="stat-label">
                {stat.label}
              </div>

              <div className="stat-bar"></div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default StatsCounter;
