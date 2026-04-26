import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from 'lucide-react';
import SEO from '../../components/ui/SEO';
import './contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <SEO
        title="Contact Us | Wemade Logix"
        description="Get in touch with Wemade Logix for world-class AI, Cloud, and Enterprise Software solutions."
      />
      <div className="page-watermark">
        <img src="/fav_icon.png" alt="" />
      </div>

      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-overlay"></div>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="contact-hero-content text-center"
          >
            <span className="section-tag" style={{ color: 'var(--primary-color)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px' }}>Connect With Us</span>
            <h1 style={{ fontWeight: 800, fontSize: '4rem', marginTop: '1rem', color: '#ffffff' }}>
              Let's Engineer <span>The Future Together</span>
            </h1>
            <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '1.5rem auto', opacity: 0.9 }}>
              Have a visionary project or a technical inquiry? Our experts are ready to collaborate on your next breakthrough.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-body section-padding">
        <div className="container">
          <div className="contact-grid">

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="contact-info-column"
            >
              <div className="info-card-glass">
                <div className="info-item">
                  <div className="info-icon-wrapper">
                    <Mail className="info-icon" />
                  </div>
                  <div className="info-text">
                    <h3>Email Us</h3>
                    <p>wemadelogix@gmail.com</p>
                    <p className="sub-text">Inquiry response within 24 hours</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon-wrapper">
                    <Phone className="info-icon" />
                  </div>
                  <div className="info-text">
                    <h3>Call Us</h3>
                    <p>+91 6281577729</p>
                    <p className="sub-text">Mon-Fri, 9am - 6pm EST</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon-wrapper">
                    <MapPin className="info-icon" />
                  </div>
                  <div className="info-text">
                    <h3>Global Offices</h3>
                    <p><strong>Silicon Valley:</strong> Tech Hub, CA</p>
                    <p><strong>Hyderabad:</strong> Innovation Center, TS</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="contact-form-column"
            >
              <div className="contact-form-wrapper glassmorphism">
                <form className="vintech-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label>Full Name</label>
                      <input type="text" placeholder="John Doe" required />
                    </div>
                    <div className="form-group">
                      <label>Email Address</label>
                      <input type="email" placeholder="john@vintech.com" required />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Inquiry Type</label>
                    <select required>
                      <option value="">Select a service</option>
                      <option value="iot">IoT Solutions</option>
                      <option value="vlsi">VLSI Design</option>
                      <option value="software">Enterprise Software</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Your Message</label>
                    <textarea rows="5" placeholder="Tell us about your project..." required></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary w-full btn-glow">
                    Send Message <Send size={18} style={{ marginLeft: '10px' }} />
                  </button>
                </form>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
