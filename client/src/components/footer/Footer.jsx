import React from "react";
import { NavLink } from "react-router-dom";
import { Linkedin, Twitter, Github, Mail, MapPin, Phone, ArrowUpRight, Globe } from "lucide-react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-info">
            <NavLink to="/" className="footer-logo">
              Wemade<span> Logix</span>
            </NavLink>
            <p className="footer-desc">
              Building the intelligence of tomorrow. We specialize in enterprise
              software platforms and Generative AI solutions that redefine what's
              possible in the digital era.
            </p>
            <div className="footer-social-row">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon">
                <Linkedin size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-icon">
                <Twitter size={18} />
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="social-icon">
                <Github size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links-group">
            <div className="footer-links">
              <h4 className="footer-title">Company</h4>
              <ul>
                <li><NavLink to="/about">About Us</NavLink></li>
                <li><NavLink to="/projects">Our Portfolio</NavLink></li>
                <li><NavLink to="/trainings">Expert Training</NavLink></li>
                <li><NavLink to="/contact">Get in Touch</NavLink></li>
              </ul>
            </div>

            <div className="footer-links">
              <h4 className="footer-title">Solutions</h4>
              <ul>
                <li><NavLink to="/services">Services Overview</NavLink></li>
                <li><NavLink to="/services/genai">Generative AI</NavLink></li>
                <li><NavLink to="/services/software">Enterprise Software</NavLink></li>
                <li><NavLink to="/services/cloud">Cloud Platforms</NavLink></li>
              </ul>
            </div>
          </div>

          {/* Contact Support */}
          <div className="footer-contact">
            <h4 className="footer-title">Global Presence</h4>
            <div className="contact-item">
              <Mail size={16} className="contact-icon" />
              <span>wemadelogix@gmail.com</span>
            </div>
            <div className="contact-item">
              <Phone size={16} className="contact-icon" />
              <span>+91 6281577729</span>
            </div>
            <div className="contact-item">
              <MapPin size={16} className="contact-icon" />
              <span>Hyderabad, India</span>
            </div>
            <div className="contact-item">
              <Globe size={16} className="contact-icon" />
              <span>Available Worldwide</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom-wrapper">
        <div className="container">
          <div className="footer-bottom-inner">
            <div className="footer-copyright">
              © {new Date().getFullYear()} Wemade Logix. All rights reserved.
            </div>
            <div className="footer-legal-links">
              <NavLink to="/privacy">Privacy Policy</NavLink>
              <div className="footer-dot"></div>
              <NavLink to="/terms">Terms of Service</NavLink>
              <div className="footer-dot"></div>
              <NavLink to="/cookies">Cookie Policy</NavLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
