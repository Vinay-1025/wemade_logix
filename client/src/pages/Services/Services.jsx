import React from 'react';
import ServicesHeroSlider from '../../sections/services/ServicesHeroSlider';
import ServiceGrid from '../../sections/services/ServiceGrid';
import SupportModule from '../../sections/services/SupportModule';
import StatsCounter from '../../sections/services/StatsCounter';
import SEO from '../../components/ui/SEO';

const Services = () => {
  return (
    <div className="services-page">
      <SEO
        title="Services"
        description="Learn about Wemade Logix — a technology company building enterprise software, AI platforms, and generative AI solutions."
      />
      <div className="page-watermark">
        <img src="/fav_icon.png" alt="" />
      </div>
      <ServicesHeroSlider />
      <ServiceGrid />
      <SupportModule />
      <StatsCounter />
    </div>
  );
};

export default Services;
