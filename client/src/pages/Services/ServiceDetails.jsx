import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Zap, Target, Star, ArrowRight } from 'lucide-react';
import { servicesData } from '../../data/servicesData';
import { getIcon } from '../../utils/iconMap';
import SEO from '../../components/ui/SEO';
import './service-details.css';

const ServiceDetails = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const service = servicesData.find(s => s.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [service, slug]);

    if (!service) {
        return (
            <div className="service-error-page section-padding text-center">
                <div className="container">
                    <h2>Service Not Found</h2>
                    <p>The service you are looking for does not exist or has been moved.</p>
                    <Link to="/services" className="btn btn-primary">Back to Services</Link>
                </div>
            </div>
        );
    }

    const IconComponent = getIcon(service.icon);

    return (
        <div className="service-details-page">
            <SEO
                title={`${service.title} | Wemade Logix Services`}
                description={service.description}
            />

            <div className="page-watermark">
                <img src="/fav_icon.png" alt="" />
            </div>

            {/* Cinematic Hero */}
            <section className="sd-hero" style={{ backgroundImage: `url(${service.image})` }}>
                <div className="sd-hero-overlay"></div>

                <Link to="/services" className="sd-back-btn">
                    <ArrowLeft size={18} /> Back to Services
                </Link>

                <div className="container">
                    <motion.div
                        className="sd-hero-content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* <motion.div 
                            className="sd-icon-wrapper" 
                            style={{ color: service.color }}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            <IconComponent size={60} />
                        </motion.div> */}

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            {service.title}
                        </motion.h1>

                        <motion.p
                            className="sd-lead"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            {service.description}
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <section className="sd-content-section">
                <div className="container">
                    <div className="sd-grid">
                        {/* Process & Details */}
                        <motion.div
                            className="sd-main"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2>Transforming Ideas into <span>Reality</span></h2>
                            {service.fullDescription.map((para, index) => (
                                <p key={index} className="sd-description-p">{para}</p>
                            ))}

                            <div className="sd-features-grid">
                                <h3>Key Capabilities</h3>
                                <div className="features-list">
                                    {service.features.map((feature, index) => (
                                        <motion.div
                                            key={index}
                                            className="sd-feature-item"
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                        >
                                            <CheckCircle2 className="check-icon" size={24} />
                                            <span>{feature}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Sidebar Stats & CTA */}
                        <motion.aside
                            className="sd-sidebar"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="sd-stats-card">
                                <h3 className="sidebar-title">Service Impact</h3>
                                <div className="sd-stats-list">
                                    {Object.entries(service.stats).map(([key, value], index) => (
                                        <div key={key} className="sd-stat-box">
                                            <div className="stat-value" style={{ color: service.color }}>{value}</div>
                                            <div className="stat-label">{key.charAt(0).toUpperCase() + key.slice(1)}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="sd-cta-card">
                                <h3>Start Your Journey</h3>
                                <p>Ready to leverage {service.title} for your business growth?</p>
                                <Link to="/contact" className="btn btn-primary sd-cta-btn">
                                    Discuss My Project <ArrowRight size={18} style={{ marginLeft: 8 }} />
                                </Link>
                            </div>
                        </motion.aside>
                    </div>
                </div>
            </section>

            {/* Why Us Section */}
            <section className="sd-why-us">
                <div className="container">
                    <div className="why-us-grid">
                        <div className="why-us-item">
                            <Zap className="why-icon" size={32} />
                            <h4>High Performance</h4>
                            <p>Optimized for speed and efficiency at every layer.</p>
                        </div>
                        <div className="why-us-item">
                            <Target className="why-icon" size={32} />
                            <h4>Enterprise Grade</h4>
                            <p>Built with security and scalability as core priorities.</p>
                        </div>
                        <div className="why-us-item">
                            <Star className="why-icon" size={32} />
                            <h4>Proven Results</h4>
                            <p>Delivering measurable impact for global clients.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServiceDetails;
