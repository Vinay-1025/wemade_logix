import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Calendar, User, Tag, Briefcase, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { projectsData } from '../../data/projectsData';
import SEO from '../../components/ui/SEO';
import './project-details.css';

const ProjectDetails = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const project = projectsData.find(p => p.slug === slug);

    // Simplified current index management
    const totalImages = project ? project.images.length : 0;

    // Redirect if project not found
    useEffect(() => {
        if (!project) {
            navigate('/projects');
        }
        window.scrollTo(0, 0);
    }, [project, navigate]);

    // Auto-scroll logic
    useEffect(() => {
        if (!project) return;
        const interval = setInterval(() => {
            handleNext();
        }, 5000);
        return () => clearInterval(interval);
    }, [project, currentIndex]);

    if (!project) return null;

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + totalImages) % totalImages);
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % totalImages);
    };

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    // Scale from stack variants
    const slideVariants = {
        initial: {
            scale: 0.2,
            opacity: 0,
            x: 200,
            y: 50,
            filter: "blur(20px)"
        },
        animate: {
            scale: 1,
            opacity: 1,
            x: 0,
            y: 0,
            filter: "blur(0px)",
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1]
            }
        },
        exit: {
            opacity: 0,
            scale: 1.1,
            filter: "blur(10px)",
            transition: { duration: 0.6 }
        }
    };

    return (
        <div className="project-details-page">
            <SEO
                title={`${project.title} | Case Study | We Made Logix`}
                description={project.description}
            />
            <div className="page-watermark">
                <img src="/fav_icon.png" alt="" />
            </div>

            {/* Cinematic Hero */}
            <section className="pd-hero" style={{ backgroundImage: `url(${project.images[0]})` }}>
                <div className="pd-hero-overlay"></div>
                <div className="container">
                    <motion.div
                        className="pd-hero-content"
                    >
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                            <Link to="/projects" className="pd-back-link">
                                <ArrowLeft size={18} /> Back to Portfolio
                            </Link>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                            <span className="pd-category-tag">{project.category}</span>
                        </motion.div>

                        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                            {project.title}
                        </motion.h1>

                        <motion.p className="pd-lead" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                            {project.description}
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Project Overview & Stats */}
            <section className="pd-overview-section">
                <div className="container">
                    <div className="pd-overview-grid">
                        <motion.div
                            className="pd-main-info"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >


                            <h2 className="section-subtitle">Project Overview</h2>
                            {Array.isArray(project.fullDescription) ? (
                                project.fullDescription.map((para, i) => (
                                    <p key={i} className='section-fulldesc'>{para}</p>
                                ))
                            ) : (
                                <p className='section-fulldesc'>{project.fullDescription}</p>
                            )}

                            <div className="pd-problem-solution">
                                <div className="pd-ps-card">
                                    <div className="pd-ps-icon red"><Tag size={24} /></div>
                                    <div className="pd-ps-text">
                                        <h3>The Challenge</h3>
                                        <p>{project.challenge}</p>
                                    </div>
                                </div>
                                <div className="pd-ps-card">
                                    <div className="pd-ps-icon green"><CheckCircle2 size={24} /></div>
                                    <div className="pd-ps-text">
                                        <h3>Our Solution</h3>
                                        <p>{project.solution}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.aside
                            className="pd-sidebar-stats"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="pd-stats-card">
                                <h3 className="pd-stats-title">Project Details</h3>
                                <div className="pd-stat-item">
                                    <div className="pd-stat-icon"><User size={20} /></div>
                                    <div className="pd-stat-label">Client</div>
                                    <div className="pd-stat-value">{project.stats.client}</div>
                                </div>
                                <div className="pd-stat-item">
                                    <div className="pd-stat-icon"><Calendar size={20} /></div>
                                    <div className="pd-stat-label">Timeline</div>
                                    <div className="pd-stat-value">{project.stats.timeline}</div>
                                </div>
                                <div className="pd-stat-item">
                                    <div className="pd-stat-icon"><Briefcase size={20} /></div>
                                    <div className="pd-stat-label">Industry</div>
                                    <div className="pd-stat-value">{project.stats.industry}</div>
                                </div>
                                <div className="pd-stat-item">
                                    <div className="pd-stat-icon"><Tag size={20} /></div>
                                    <div className="pd-stat-label">Service</div>
                                    <div className="pd-stat-value">{project.stats.service}</div>
                                </div>

                                <div className="pd-tech-stack">
                                    <h4 className='pd-stats-title'>Tech Stack</h4>
                                    <div className="pd-tech-tags">
                                        {project.techStack.map((tech, i) => (
                                            <span key={i} className="tech-tag">{tech}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.aside>
                    </div>
                </div>
            </section>

            {/* Premium Multi-Layered Morphing Carousel */}
            <section className="pd-gallery-section">
                <div className="container">
                    <h2 className="section-title text-center">Visual <span>Showcase</span></h2>

                    <div className="pd-carousel-wrapper">
                        {/* Caret Navigation */}
                        <button className="pd-carousel-nav prev" onClick={handlePrev} aria-label="Previous image">
                            <ChevronLeft size={32} />
                        </button>
                        <button className="pd-carousel-nav next" onClick={handleNext} aria-label="Next image">
                            <ChevronRight size={32} />
                        </button>

                        <div className="pd-carousel-viewport">
                            {/* Layer 1: Morphing Background Images */}
                            <div className="pd-carousel-backdrop">
                                <AnimatePresence mode="popLayout" initial={false}>
                                    <motion.div
                                        key={currentIndex}
                                        className="pd-carousel-img-wrap"
                                        variants={slideVariants}
                                        initial="initial"
                                        animate="animate"
                                        exit="exit"
                                        style={{ transformOrigin: '85% 80%' }}
                                    >
                                        <img src={project.images[currentIndex]} alt={`${project.title} background`} />
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            {/* Layer 2: Persistent UI Overlay */}
                            <div className="pd-slide-caption-strip">
                                <div className="pd-caption-strip-inner container">
                                    <div className="pd-caption-content">
                                        <AnimatePresence mode="wait">
                                            <motion.div
                                                key={currentIndex}
                                                initial={{ opacity: 0, x: -20, filter: "blur(10px)" }}
                                                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                                                exit={{ opacity: 0, x: 20, filter: "blur(10px)" }}
                                                transition={{ duration: 0.5 }}
                                            >
                                                <h3>{project.galleryCaptions?.[currentIndex]?.title}</h3>
                                                <p>{project.galleryCaptions?.[currentIndex]?.desc}</p>
                                            </motion.div>
                                        </AnimatePresence>
                                    </div>

                                    {/* Layer 3: Persistent "Up Next" Section with independent Thumbnail Swapping */}
                                    <div className="pd-next-stack" onClick={handleNext}>
                                        {/* <div className="pd-stack-label">Up Next</div> */}
                                        <div className="pd-stack-layers">
                                            <AnimatePresence mode="popLayout" initial={false}>
                                                {/* Second Layer: Slides Up to First Position */}
                                                <motion.div
                                                    key={(currentIndex + 2) % totalImages}
                                                    className="pd-stack-img layer-2"
                                                    initial={{ opacity: 0, y: 50, scale: 0.8 }}
                                                    animate={{ opacity: 0.7, y: 0, scale: 0.9 }}
                                                    exit={{ opacity: 0, y: -50, scale: 0.8 }}
                                                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                                >
                                                    <img src={project.images[(currentIndex + 2) % totalImages]} alt="Future preview" />
                                                </motion.div>

                                                {/* First Layer: Takes the Top position */}
                                                <motion.div
                                                    key={(currentIndex + 1) % totalImages}
                                                    className="pd-stack-img layer-1"
                                                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                                    exit={{ opacity: 0, y: -50, scale: 0.9 }}
                                                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                                >
                                                    <img src={project.images[(currentIndex + 1) % totalImages]} alt="Next preview" />
                                                </motion.div>
                                            </AnimatePresence>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Dot Indicators */}
                        <div className="pd-carousel-dots">
                            {project.images.map((_, i) => (
                                <button
                                    key={i}
                                    className={`pd-dot ${currentIndex === i ? 'active' : ''}`}
                                    onClick={() => handleDotClick(i)}
                                    aria-label={`Go to slide ${i + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Outcomes */}
            <section className="pd-results-section">
                <div className="container">
                    <div className="pd-results-card">
                        <div className="pd-results-header">
                            <h2>Key Outcomes & <span>Results</span></h2>
                            <p>How our solution transformed the client's operations and reached their business goals.</p>
                        </div>
                        <div className="pd-results-list">
                            {project.results.map((result, i) => (
                                <motion.div
                                    key={i}
                                    className="pd-result-item"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.15 }}
                                >
                                    <div className="pd-result-check"><CheckCircle2 size={24} /></div>
                                    <div className="pd-result-text">{result}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Navigation & CTA */}
            <section className="pd-navigation">
                <div className="container">
                    <div className="pd-nav-wrapper">
                        <Link to="/projects" className="pd-nav-btn prev">
                            <ArrowLeft size={20} /> View All Projects
                        </Link>
                        <div className="pd-cta-box">
                            <h3>Have a similar vision?</h3>
                            <Link to="/contact" className="btn btn-primary">
                                Let's Discuss Your Project <ArrowRight size={18} style={{ marginLeft: 8 }} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProjectDetails;
