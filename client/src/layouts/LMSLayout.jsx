import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import LMSSidebar from '../components/LMS/LMSSidebar';
import LMSNavbar from '../components/LMS/LMSNavbar';
import '../styles/LMS.css';
import '../styles/lms-utilities.css';

const LMSLayout = () => {
  const [isMini, setIsMini] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleSidebar = () => setIsMini(!isMini);
  const toggleMobileSidebar = () => setMobileOpen(!mobileOpen);
  const closeMobile = () => setMobileOpen(false);

  return (
    <div className="lms-container">
      <LMSSidebar 
        isMini={isMini} 
        toggleSidebar={toggleSidebar} 
        mobileOpen={mobileOpen}
        closeMobile={closeMobile}
      />
      
      <main className="lms-main">
        <LMSNavbar toggleMobileSidebar={toggleMobileSidebar} />
        <div className="lms-content">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default LMSLayout;
