import React from 'react';
import { motion } from 'framer-motion';
import { useServices } from '../../hooks/useServices';
import { getIcon } from '../../utils/iconMap';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { servicesData } from '../../data/servicesData';
import './service-grid.css';

const ServiceGrid = () => {
  const { data: services = servicesData } = useServices();

  return (
    <section className="service-grid-section section-padding">
      <div className="container">

        {/* Header */}
        <div className="service-grid-header">
          <span className="section-tag">Our Solutions</span>

          <h2>
            Advanced <span>Software & AI Services</span>
          </h2>

          <p>
            Wemade Logix delivers intelligent software platforms, AI-driven
            solutions, and cloud-native systems that enable organizations
            to innovate faster and scale globally.
          </p>
        </div>

        {/* Grid */}
        <div className="service-grid-container">
          {services.map((service, index) => (
            <motion.div
              className="service-grid-card"
              key={service.id || index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -12 }}
            >


              {/* Icon */}
              <div
                className="service-grid-icon"
                style={{
                  background: `${service.color || '#2563EB'}15`,
                  color: service.color || '#2563EB'
                }}
              >
                {React.createElement(getIcon(service.icon), { size: 30 })}
              </div>

              {/* Title */}
              <h3>{service.title}</h3>

              {/* Description */}
              <p>{service.description}</p>

              {/* CTA */}
              <Link to={`/services/${service.slug}`} className="service-grid-link">
                Learn More <ArrowRight size={16} />
              </Link>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServiceGrid;
