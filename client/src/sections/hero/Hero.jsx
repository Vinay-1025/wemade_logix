import React from 'react';
import { motion } from 'framer-motion';
import {
  SiReact,
  SiNodedotjs,
  SiPython,
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiDocker,
  SiFirebase,
  SiNextdotjs,
  SiFlutter,
  SiKubernetes,
  SiOpenai,
  SiGithub,
  SiHtml5,
  SiExpress,
  SiAngular
} from "react-icons/si";
import { BiLogoAws } from "react-icons/bi";

import './hero.css';
import { useNavigate } from 'react-router-dom';
import { FaCss3Alt } from 'react-icons/fa6';
import { TbBrandReactNative } from 'react-icons/tb';

const Hero = () => {
  const navigate = useNavigate();

  /* Core Software Stack - Inner Ring */
  const innerOrbitIcons = [
    { Icon: SiHtml5, color: "#fa8201ff", name: "HTML" },
    { Icon: FaCss3Alt, color: "#0192faff", name: "CSS" },
    { Icon: SiJavascript, color: "#F7DF1E", name: "JavaScript" },
    { Icon: SiTypescript, color: "#3178C6", name: "TypeScript" },
    { Icon: SiReact, color: "#61DAFB", name: "React" },
    { Icon: SiNodedotjs, color: "#339933", name: "Node.js" },
    { Icon: SiExpress, color: "#deed0aff", name: "Express.js" },
    { Icon: SiMongodb, color: "#47A248", name: "MongoDB" },
  ];

  /* Advanced Platforms - Outer Ring */
  const outerOrbitIcons = [
    { Icon: BiLogoAws, color: "#FF9900", name: "AWS" },
    { Icon: SiDocker, color: "#2496ED", name: "Docker" },
    { Icon: SiFirebase, color: "#FFCA28", name: "Firebase" },
    { Icon: SiNextdotjs, color: "#000000", name: "Next.js" },
    { Icon: TbBrandReactNative, color: "#02569B", name: "React Native" },
    { Icon: SiAngular, color: "#e53232ff", name: "Angular" },
    { Icon: SiOpenai, color: "#412991", name: "OpenAI" },
    { Icon: SiGithub, color: "#000000", name: "GitHub" },
  ];

  return (
    <section className="hero-section">
      <div className="container hero-container">

        {/* Left Content */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Accelerating Businesses with <br />
            <span>Intelligent Software & AI</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Wemade Logix delivers enterprise-grade software platforms,
            AI-powered applications, and cloud-native solutions that
            enable organizations to innovate faster. From scalable
            microservices architectures to Generative AI systems,
            we help businesses unlock the full potential of modern
            digital technologies.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <button className="btn btn-primary" onClick={() => navigate("/services")}>Explore Solutions</button>
            <button className="btn btn-accent" onClick={() => navigate("/about")}>Know About Us</button>
          </motion.div>

        </motion.div>

        {/* Right Visual */}
        <div className="hero-visual">

          <div className="hero-orbit-container">

            {/* Center Logo */}
            <div className="hero-orbit-center">
              <img src="/fav_icon.png" alt="Wemade Logix Logo" className="hero-logo-img" />
            </div>

            {/* Inner Orbit */}
            <div className="orbit-group inner-orbit-group">
              {innerOrbitIcons.map((item, index) => (
                <div
                  key={`inner-${index}`}
                  className="hero-orbit-icon inner-ring"
                  style={{
                    '--index': index,
                    '--count': innerOrbitIcons.length
                  }}
                >
                  <motion.div
                    className="hero-icon-wrapper"
                    style={{
                      '--icon-color': item.color,
                      boxShadow: `0 0 15px ${item.color.slice(0, 7)}33`,
                      borderColor: `${item.color.slice(0, 7)}44`,
                      color: item.color
                    }}
                    whileHover={{ scale: 1.2, zIndex: 50 }}
                  >
                    <item.Icon size={22} color={item.color} />
                    <span className="icon-label">{item.name}</span>
                  </motion.div>
                </div>
              ))}
            </div>

            {/* Outer Orbit */}
            <div className="orbit-group outer-orbit-group">
              {outerOrbitIcons.map((item, index) => (
                <div
                  key={`outer-${index}`}
                  className="hero-orbit-icon outer-ring"
                  style={{
                    '--index': index,
                    '--count': outerOrbitIcons.length
                  }}
                >
                  <motion.div
                    className="hero-icon-wrapper"
                    style={{
                      '--icon-color': item.color,
                      boxShadow: `0 0 15px ${item.color.slice(0, 7)}33`,
                      borderColor: `${item.color.slice(0, 7)}44`,
                      color: item.color
                    }}
                    whileHover={{ scale: 1.2, zIndex: 50 }}
                  >
                    <item.Icon size={20} color={item.color} />
                    <span className="icon-label">{item.name}</span>
                  </motion.div>
                </div>
              ))}
            </div>

            {/* Orbit Rings */}
            <div className="hero-orbit-ring hero-ring-1"></div>
            <div className="hero-orbit-ring hero-ring-2"></div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
