import React from "react";
import { motion } from "framer-motion";
import { Shield, Headphones, Users, Zap } from "lucide-react";
import "./support-module.css";

const supportFeatures = [
  {
    icon: <Headphones size={24} />,
    title: "Dedicated Engineering Support",
    description:
      "Our engineering teams work closely with your organization to provide continuous technical guidance, product optimization, and AI system support."
  },
  {
    icon: <Users size={24} />,
    title: "Collaborative Innovation",
    description:
      "We partner with organizations to co-build intelligent software platforms, AI products, and scalable enterprise applications."
  },
  {
    icon: <Shield size={24} />,
    title: "Enterprise-Grade Reliability",
    description:
      "Security, scalability, and reliability are embedded into every AI and software solution we build for enterprise environments."
  },
  {
    icon: <Zap size={24} />,
    title: "Rapid Innovation Cycles",
    description:
      "Accelerate development with modern AI engineering practices, fast iterations, and continuous improvement of intelligent systems."
  }
];

const SupportModule = () => {
  return (
    <section className="support-module-section section-padding">
      <div className="container overflow-hidden">

        <div className="support-module-grid">

          {/* Left Content */}

          <motion.div
            className="support-content"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >

            <span className="section-tag">How We Work</span>

            <h2>
              Partnering With Businesses to Build
              <span> Intelligent Software</span>
            </h2>

            <div className="support-quote">
              <p>
                "At Wemade Logix, we collaborate with organizations to design,
                build, and scale AI-driven software systems that enable
                innovation, automation, and smarter decision-making."
              </p>
            </div>

            <button className="cta-button primary">
              Explore Our Solutions
            </button>

          </motion.div>

          {/* Feature Cards */}

          <div className="support-features-grid">

            {supportFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="support-feature-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1
                }}
                viewport={{ once: true }}
              >

                <div className="feature-icon">
                  {feature.icon}
                </div>

                <h4>
                  {feature.title}
                </h4>

                <p>
                  {feature.description}
                </p>

              </motion.div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default SupportModule;
