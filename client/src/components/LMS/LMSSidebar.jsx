import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiHome, 
  FiBookOpen, 
  FiBriefcase, 
  FiFileText, 
  FiUser, 
  FiHelpCircle,
  FiChevronLeft,
  FiChevronRight,
  FiLogOut
} from 'react-icons/fi';

const LMSSidebar = ({ isMini, toggleSidebar, mobileOpen, closeMobile }) => {
  const menuItems = [
    { path: '/lms', icon: <FiHome />, label: 'Dashboard' },
    { path: '/lms/courses', icon: <FiBookOpen />, label: 'Courses' },
    { path: '/lms/jobs', icon: <FiBriefcase />, label: 'Jobs' },
    { path: '/lms/assignments', icon: <FiFileText />, label: 'Assignments' },
    { path: '/lms/quizzes', icon: <FiHelpCircle />, label: 'Quizzes' },
    { path: '/lms/profile', icon: <FiUser />, label: 'Profile' },
  ];

  const sidebarVariants = {
    full: { width: 260 },
    mini: { width: 80 }
  };

  return (
    <>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[110] lg:hidden" 
            onClick={closeMobile}
          />
        )}
      </AnimatePresence>

      <motion.aside 
        variants={sidebarVariants}
        animate={window.innerWidth >= 1024 ? (isMini ? 'mini' : 'full') : undefined}
        className={`lms-sidebar ${isMini ? 'mini' : ''} ${mobileOpen ? 'open' : ''}`}
      >
        <div className="lms-sidebar-header">
          <NavLink to="/" className="lms-sidebar-logo">
            {isMini && window.innerWidth >= 1024 ? (
              <img src="/fav_icon.png" alt="V" className="h-8 w-8 object-contain" />
            ) : (
              <img src="/company_logo.png" alt="Vintech Logix" className="h-8 md:h-10 w-auto object-contain" />
            )}
          </NavLink>
        </div>

        <div className="lms-sidebar-scroll-container">
          <nav className="lms-sidebar-nav">
            {menuItems.map((item, index) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/lms'}
                className={({ isActive }) => `lms-nav-item ${isActive ? 'active' : ''}`}
                onClick={() => {
                  if (window.innerWidth < 1024) closeMobile();
                }}
              >
                <span className="lms-nav-icon">{item.icon}</span>
                <AnimatePresence mode="wait">
                  {(!isMini || window.innerWidth < 1024) && (
                    <motion.span 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      className="lms-nav-label"
                    >
                      {item.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="lms-sidebar-footer">
          <div className="lms-sidebar-user-section">
            <div className="lms-sidebar-avatar-wrapper">
              <div className="lms-sidebar-avatar">JD</div>
              {(!isMini || window.innerWidth < 1024) && (
                <div className="lms-sidebar-user-info">
                  <span className="user-name">John Doe</span>
                  <span className="user-role">Student</span>
                </div>
              )}
            </div>
            
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="lms-logout-btn"
              title="Logout"
            >
              <FiLogOut />
              {(!isMini || window.innerWidth < 1024) && <span className="ml-2">Logout</span>}
            </motion.button>
          </div>

          <div className="pt-2 hidden lg:block">
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={toggleSidebar}
              className="lms-toggle-btn w-full"
            >
              {isMini ? <FiChevronRight /> : <><FiChevronLeft className="mr-2" /> <span className="text-xs font-bold uppercase tracking-widest">Collapse</span></>}
            </motion.button>
          </div>
        </div>
      </motion.aside>
    </>
  );
};

export default LMSSidebar;
