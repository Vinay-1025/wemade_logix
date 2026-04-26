import React from "react";
import { motion } from "framer-motion";
import {
  SiPython,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiTensorflow,
  SiDocker,
  SiKubernetes,
  SiPostgresql,
  SiOpenai,
  SiTypescript
} from "react-icons/si";

import { FaAws } from "react-icons/fa";

import "./technologies.css";

const Technologies = () => {
  const techs = [
    { name: "Python", category: "AI / Backend", icon: SiPython, color: "#3776AB" },
    { name: "React", category: "Frontend", icon: SiReact, color: "#61DAFB" },
    { name: "Node.js", category: "Backend", icon: SiNodedotjs, color: "#339933" },
    { name: "TypeScript", category: "Frontend", icon: SiTypescript, color: "#3178C6" },
    { name: "AWS", category: "Cloud", icon: FaAws, color: "#FF9900" },
    { name: "MongoDB", category: "Database", icon: SiMongodb, color: "#47A248" },
    { name: "PostgreSQL", category: "Database", icon: SiPostgresql, color: "#336791" },
    { name: "TensorFlow", category: "AI / ML", icon: SiTensorflow, color: "#FF6F00" },
    { name: "Docker", category: "DevOps", icon: SiDocker, color: "#2496ED" },
    { name: "Kubernetes", category: "DevOps", icon: SiKubernetes, color: "#326CE5" },
    { name: "OpenAI", category: "Generative AI", icon: SiOpenai, color: "#10A37F" },
  ];

  return (
    <section className="technologies-section section-padding">
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >

        <div className="technologies-header">
          <span className="section-tag">Technology Stack</span>

          <h2>
            Built with <span>Modern Software & AI Technologies</span>
          </h2>

          <p>
            At Wemade Logix we leverage cutting-edge frameworks, AI platforms,
            and cloud technologies to deliver scalable and intelligent
            digital solutions.
          </p>
        </div>

        <div className="technologies-marquee">

          <motion.div className="technologies-track">

            {[...techs, ...techs].map((tech, index) => {
              const Icon = tech.icon;

              return (
                <div className="technologies-item" key={index}>

                  <div
                    className="tech-icon"
                    style={{ color: tech.color }}
                  >
                    <Icon size={30} />
                  </div>

                  <div className="tech-text">
                    <h4>{tech.name}</h4>
                    <span>{tech.category}</span>
                  </div>

                </div>
              );
            })}

          </motion.div>

        </div>

      </motion.div>
    </section>
  );
};

export default Technologies;
