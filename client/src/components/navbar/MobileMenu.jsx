import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';
import './mobile-menu.css';

const MobileMenu = ({ isOpen, toggleMenu, navLinks }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const menuVariants = {
    closed: {
      x: '100%',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40,
        when: 'afterChildren',
      },
    },
    open: {
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40,
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="mobile-menu-overlay"
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
        >
          {/* Background Branding Watermark */}
          <div className="menu-watermark">
            <img src="/fav_icon.png" alt="watermark" />
          </div>

          <div className="mobile-menu-header">
            <div className="menu-logo">
              <img src="/fav_icon.png" alt="Wemade Logix" />
            </div>
            <button className="menu-close-btn" onClick={toggleMenu}>
              <X size={32} />
            </button>
          </div>

          <div className="mobile-menu-body">
            <nav className="mobile-nav-links">
              {navLinks.map((link) => (
                <motion.div key={link.path} variants={itemVariants}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      isActive ? 'mobile-nav-link active' : 'mobile-nav-link'
                    }
                    onClick={toggleMenu}
                  >
                    <span className="link-number">
                      {navLinks.indexOf(link) + 1 < 10 ? `0${navLinks.indexOf(link) + 1}` : navLinks.indexOf(link) + 1}
                    </span>
                    <span className="link-text">{link.name}</span>
                    <ArrowRight className="link-arrow" size={20} />
                  </NavLink>
                </motion.div>
              ))}
            </nav>
          </div>

          <div className="mobile-menu-footer">
            <motion.div variants={itemVariants} className="menu-cta-container">
              <NavLink to="/contact" className="menu-cta-btn" onClick={toggleMenu}>
                Let's Talk
              </NavLink>
            </motion.div>

            {/* Experts Profile Row */}
            <motion.div variants={itemVariants} className="menu-profiles-section">
              <p className="menu-profiles-header">Meet Our Experts</p>
              <div className="menu-profiles-row">
                {[
                  { id: 1, img: "/expert_face_1.png", link: "/projects/alex-rivera" },
                  { id: 2, img: "/expert_face_2.png", link: "/projects/sarah-chen" },
                  { id: 3, img: "/expert_face_3.png", link: "/projects/jordan-smith" },
                  { id: 4, img: "/expert_face_4.png", link: "/projects/emma-davis" },
                  { id: 5, img: "/expert_face_5.png", link: "/projects/liam-wilson" }
                ].map(expert => (
                  <NavLink 
                    key={expert.id} 
                    to={expert.link} 
                    className="menu-profile-item"
                    onClick={toggleMenu}
                  >
                    <img src={expert.img} alt="expert" />
                  </NavLink>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="menu-socials">
              <a href="#" className="social-link"><Instagram size={20} /></a>
              <a href="#" className="social-link"><Twitter size={20} /></a>
              <a href="#" className="social-link"><Linkedin size={20} /></a>
              <a href="#" className="social-link"><Facebook size={20} /></a>
            </motion.div>

            <motion.div variants={itemVariants} className="menu-copyright">
              © {new Date().getFullYear()} Wemade Logix. All rights reserved.
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
