import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import ParallaxBackground from '../components/ui/ParallaxBackground';

const MainLayout = () => {
  const location = useLocation();

  // Pages that should have a stable, non-transparent navbar from the start
  const stickyPages = ['/', '/blog', '/privacy', '/terms', '/cookies'];

  // Check if current path matches a sticky page exactly
  const isSticky = stickyPages.includes(location.pathname);

  // About, Services, Projects, Trainings, Careers, Contact, etc. are transparent initially
  const isTransparentPage = !isSticky;

  return (
    <div className="main-layout">
      <ParallaxBackground />
      <Navbar logoVariant={isTransparentPage ? 'services' : undefined} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
