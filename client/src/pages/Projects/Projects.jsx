import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ExternalLink, Layers, Globe, Cpu, Zap, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/ui/SEO';
import { projectsData } from '../../data/projectsData';
import './projects.css';

const categories = ['All', 'Web Apps', 'AI / ML', 'IoT', 'Enterprise', 'Cloud'];

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('All');

    const filteredProjects = activeFilter === 'All'
        ? projectsData
        : projectsData.filter(p => p.category === activeFilter);

    return (
        <div className="projects-page">
            <SEO
                title="Projects | We Made Logix"
                description="Explore our portfolio of cutting-edge projects spanning AI, IoT, Cloud, and Enterprise solutions."
            />
            <div className="page-watermark">
                <img src="/fav_icon.png" alt="" />
            </div>

            {/* Hero */}
            <section className="projects-hero">
                <div className="container">
                    <motion.div
                        className="projects-hero-content"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9 }}
                    >
                        <span className="section-tag">Our Portfolio</span>
                        <h1>Solutions That <span>Drive Impact</span></h1>
                        <p>
                            From intelligent automation to cloud-native platforms, explore how we engineer transformative digital experiences for global enterprises.
                        </p>

                        <div className="projects-stats-bar">
                            {[
                                { value: '50+', label: 'Projects Delivered' },
                                { value: '98%', label: 'Client Satisfaction' },
                                { value: '12+', label: 'Industries Served' },
                                { value: '3M+', label: 'Users Impacted' },
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    className="projects-stat-item"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 + i * 0.15 }}
                                >
                                    <div className="projects-stat-number">{stat.value}</div>
                                    <div className="projects-stat-label">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Filter Tabs */}
            <section className="projects-filter-section">
                <div className="container">
                    <div className="projects-filter-tabs">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                className={`filter-tab ${activeFilter === cat ? 'active' : ''}`}
                                onClick={() => setActiveFilter(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Project Showcase Rows */}
            <section className="projects-showcase-section">
                <div className="container">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                className={`project-showcase-row ${index % 2 !== 0 ? 'row-reversed' : ''}`}
                                layout
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <div className="project-info-side">
                                    <div className="project-sticky-content">
                                        <motion.span
                                            className="project-category-badge"
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.2 }}
                                        >
                                            {project.category}
                                        </motion.span>

                                        <motion.h2
                                            className='project-section-title'
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.3 }}
                                        >
                                            {project.title}
                                        </motion.h2>

                                        <motion.div
                                            className="project-tags-list"
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.4 }}
                                        >
                                            {project.tags.map((tag, idx) => (
                                                <span key={idx} className="tag-pill">{tag}</span>
                                            ))}
                                        </motion.div>

                                        <motion.p
                                            className='project-section-desc'
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.5 }}
                                        >
                                            {project.description}
                                        </motion.p>

                                        <motion.div
                                            className="project-action-links"
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.6 }}
                                        >
                                            <Link to={`/projects/${project.slug}`} className="btn btn-primary">
                                                Know More <Eye size={18} style={{ marginLeft: 8 }} />
                                            </Link>
                                        </motion.div>
                                    </div>
                                </div>

                                <div className="project-images-side">
                                    <div className="bento-image-grid">
                                        {project.images.slice(0, 3).map((img, i) => (
                                            <motion.div
                                                key={i}
                                                className={`bento-item bento-item-${i + 1}`}
                                                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.3 + (i * 0.2), duration: 0.7 }}
                                            >
                                                <img src={img} alt={`${project.title} screen ${i + 1}`} loading="lazy" />
                                                <div className="bento-overlay">
                                                    <div className="bento-info">
                                                        <span className="bento-info-icon"><ArrowRight size={20} /></span>
                                                        <span className="bento-info-text">
                                                            {project.galleryCaptions?.[i]?.title || (i === 0 ? 'Main Dashboard' : i === 1 ? 'Analytics View' : 'Settings Panel')}
                                                        </span>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </section>

            {/* Featured Project */}
            <section className="featured-project-section">
                <div className="container">
                    <motion.div
                        className="featured-project-card"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="featured-project-image">
                            <img
                                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
                                alt="Featured Project"
                            />
                        </div>
                        <div className="featured-project-info">
                            <span className="featured-badge">⭐ Featured Project</span>
                            <h2>Enterprise <span>AI Analytics</span> Platform</h2>
                            <p>
                                A comprehensive business intelligence platform powered by Generative AI,
                                enabling natural language data querying, automated report generation,
                                and predictive analytics for Fortune 500 enterprises.
                            </p>
                            <div className="featured-metrics">
                                <div className="featured-metric">
                                    <div className="metric-value">40%</div>
                                    <div className="metric-label">Faster Decisions</div>
                                </div>
                                <div className="featured-metric">
                                    <div className="metric-value">10x</div>
                                    <div className="metric-label">Data Processing</div>
                                </div>
                                <div className="featured-metric">
                                    <div className="metric-value">99.9%</div>
                                    <div className="metric-label">Uptime SLA</div>
                                </div>
                            </div>
                            <Link to="/contact" className="btn btn-primary">
                                Start Your Project <ArrowRight size={18} style={{ marginLeft: 8 }} />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className="projects-cta-section">
                <div className="container">
                    <motion.div
                        className="projects-cta-content"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2>Have an <span>Idea?</span> Let's Build It.</h2>
                        <p>
                            Transform your vision into a powerful digital product.
                            Our experts are ready to engineer your next breakthrough.
                        </p>
                        <Link to="/contact" className="btn btn-primary">
                            Get In Touch <ArrowRight size={18} style={{ marginLeft: 8 }} />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Projects;
