import Hero from '../../sections/hero/Hero';
import InternshipHighlight from '../../sections/internship/InternshipHighlight';
import AboutPreview from '../../sections/hero/AboutPreview';
import ServiceGrid from '../../sections/services/ServiceGrid';
import Technologies from '../../sections/technologies/Technologies';
import ExpertPortfolios from '../../sections/portfolios/ExpertPortfolios';
import CaseStudies from '../../sections/testimonials/CaseStudies';
import Testimonials from '../../sections/testimonials/Testimonials';
import BlogPreview from '../../sections/blog-preview/BlogPreview';
import CTASection from '../../sections/hero/CTASection';
import SEO from '../../components/ui/SEO';
import './home.css';

const Home = () => {
  return (
    <div className="home-page-main">
      <SEO
        title="Home"
        description="Wemade Logix provides cutting-edge Gen AI, Cloud and Software Solutions for the modern enterprise."
      />
      <div className="page-watermark">
        <img src="/fav_icon.png" alt="" />
      </div>
      <Hero />
      <InternshipHighlight />
      <AboutPreview />
      <ServiceGrid />
      <Technologies />
      {/* <ExpertPortfolios /> */}
      {/* <CaseStudies /> */}
      {/* <Testimonials /> */}
      {/* <BlogPreview /> */}
      <CTASection />
    </div>
  );
};

export default Home;
