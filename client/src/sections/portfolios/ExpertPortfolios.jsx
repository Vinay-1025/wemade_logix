import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import './portfolios.css';

const experts = [
  {
    id: 1,
    name: "Alex Rivera",
    role: "Chief Technology Officer",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop",
    portfolio: "/projects/alex-rivera"
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Cloud Architect",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
    portfolio: "/projects/sarah-chen"
  },
  {
    id: 3,
    name: "Jordan Smith",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
    portfolio: "/projects/jordan-smith"
  },
  {
    id: 4,
    name: "Emma Davis",
    role: "AI Research Lead",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
    portfolio: "/projects/emma-davis"
  },
  {
    id: 5,
    name: "Liam Wilson",
    role: "Lead UI/UX Designer",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop",
    portfolio: "/projects/liam-wilson"
  }
];

const ExpertPortfolios = () => {
  const navigate = useNavigate();

  return (
    <section className="expert-portfolios-section">
      <div className="container">
        <div className="section-header text-center">
          <motion.span 
            className="section-tag"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Meet Our Team
          </motion.span>
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Elite Experts <span>Driving Innovation</span>
          </motion.h2>
          <motion.p 
            className="section-description"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our leadership team brings decades of combined experience in building 
            enterprise-grade software and scaling AI-driven solutions globally.
          </motion.p>
        </div>

        <div className="experts-grid">
          {experts.map((expert, index) => (
            <motion.div 
              key={expert.id}
              className="expert-card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => navigate(expert.portfolio)}
            >
              <div className="expert-image-container">
                <img src={expert.image} alt={expert.name} className="expert-img" />
                <div className="expert-overlay">
                  <ExternalLink size={24} color="#fff" />
                  <span>View Portfolio</span>
                </div>
              </div>
              <div className="expert-info">
                <h3>{expert.name}</h3>
                <p>{expert.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertPortfolios;
