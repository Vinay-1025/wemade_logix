import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import ServiceDetails from './pages/Services/ServiceDetails';
import Projects from './pages/Projects/Projects';
import ProjectDetails from './pages/Projects/ProjectDetails';
import Trainings from './pages/Trainings/Trainings';
import CourseDetails from './pages/Trainings/CourseDetails';
import InternshipRegistration from './pages/Trainings/InternshipRegistration';
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact/Contact';
import Careers from './pages/Careers/Careers';
import ApplyJob from './pages/Careers/ApplyJob';
import NotFound from './pages/NotFound/NotFound';
import PrivacyPolicy from './pages/Legal/PrivacyPolicy';
import TermsOfService from './pages/Legal/TermsOfService';
import CookiePolicy from './pages/Legal/CookiePolicy';
import ScrollToTop from './utils/ScrollToTop';
import FloatingActions from './components/ui/FloatingActions/FloatingActions';
import PromotionModal from './components/modals/PromotionModal';

import LMSLayout from './layouts/LMSLayout';
import LMSDashboard from './pages/LMS/LMSDashboard';
import Courses from './pages/LMS/Courses';
import Jobs from './pages/LMS/Jobs';
import Assignments from './pages/LMS/Assignments';
import Quizzes from './pages/LMS/Quizzes';
import Profile from './pages/LMS/Profile';

import useSocket from './hooks/useSocket';

function App() {
  useSocket();
  return (
    <Router>
      <ScrollToTop />
      <FloatingActions />
      <PromotionModal />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:slug" element={<ProjectDetails />} />
          <Route path="trainings" element={<Trainings />} />
          <Route path="trainings/:id" element={<CourseDetails />} />
          <Route path="internship-registration" element={<InternshipRegistration />} />
          <Route path="careers" element={<Careers />} />
          <Route path="careers/apply/:id" element={<ApplyJob />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy" element={<PrivacyPolicy />} />
          <Route path="terms" element={<TermsOfService />} />
          <Route path="cookies" element={<CookiePolicy />} />

          {/* Dynamic Routes */}
          <Route path="services/:slug" element={<ServiceDetails />} />
          <Route path="blog/:slug" element={<Blog />} />

          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* LMS Routes */}
        <Route path="/lms" element={<LMSLayout />}>
          <Route index element={<LMSDashboard />} />
          <Route path="courses" element={<Courses />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="assignments" element={<Assignments />} />
          <Route path="quizzes" element={<Quizzes />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
