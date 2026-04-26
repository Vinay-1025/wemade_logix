import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
    ChevronRight,
    Star,
    Users,
    Clock,
    Globe,
    Info,
    CheckCircle,
    PlayCircle,
    ChevronDown,
    ArrowLeft,
    Calendar,
    Award,
    Shield,
    FileText,
    Monitor,
    Share2,
    Heart,
    Zap,
    ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { coursesData } from '../../data/trainingsData';
import SEO from '../../components/ui/SEO';
import './course_details.css';
import { MdOutlineCurrencyRupee, MdPlayCircle } from 'react-icons/md';

const CourseDetails = () => {
    const { id } = useParams();
    const [course, setCourse] = useState(null);
    const [activeSection, setActiveSection] = useState(0);
    const [isWishlisted, setIsWishlisted] = useState(false);

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: "easeOut" }
    };

    const staggerContainer = {
        animate: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    useEffect(() => {
        const foundCourse = coursesData.find(c => c.id === parseInt(id));
        setCourse(foundCourse);

        const handleScroll = () => {
            const stickyHeader = document.querySelector('.course-sticky-header');
            if (stickyHeader) {
                if (window.scrollY > 400) {
                    stickyHeader.classList.add('show');
                } else {
                    stickyHeader.classList.remove('show');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [id]);

    if (!course) {
        return (
            <div className="course-not-found">
                <h2>Course not found</h2>
                <Link to="/trainings" className="btn btn-primary">Back to Trainings</Link>
            </div>
        );
    }

    return (
        <div className="course-details-page">
            <SEO
                title={`${course.title} | Wemade Logix Training`}
                description={course.description}
            />

            {/* Global Watermark */}
            <div className="page-watermark">
                <img src="/fav_icon.png" alt="" />
            </div>

            {/* Scroll-to-top and Sticky Header Logic */}
            <div className="course-sticky-header">
                <motion.div
                    className="scroll-progress-bar"
                    style={{ scaleX }}
                />
                <div className="container">
                    <div className="sticky-content">
                        <div className="sticky-left">
                            <h3 className="sticky-title">{course.title}</h3>
                            <div className="sticky-meta">
                                <span className="rating"><Star size={14} fill="currentColor" /> {course.rating}</span>
                                <span className="dot"></span>
                                <span className="students">{course.students} students</span>
                            </div>
                        </div>
                        <div className="sticky-actions">
                            <button className="icon-btn" onClick={() => setIsWishlisted(!isWishlisted)}>
                                <Heart size={20} fill={isWishlisted ? "currentColor" : "none"} />
                            </button>
                            <Link
                                to={course.id === 100 ? "/internship-registration" : "/contact"}
                                className="btn btn-primary sticky-cta"
                            >
                                {course.id === 100 ? "Register Now" : "Enroll Now"}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Top Banner section */}
            <section className="course-hero">
                <div className="hero-blobs">
                    <div className="blob blob-1"></div>
                    <div className="blob blob-2"></div>
                    <div className="blob blob-3"></div>
                </div>
                <div className="container">
                    <div className="course-hero-grid">

                        {/* LEFT CONTENT */}
                        <motion.div
                            className="course-hero-main"
                            initial="initial"
                            animate="animate"
                            variants={staggerContainer}
                        >
                            <motion.div className="breadcrumb" variants={fadeInUp}>
                                <Link to="/trainings">Trainings</Link>
                                <ChevronRight size={14} />
                                <span>{course.category}</span>
                            </motion.div>

                            <motion.h1 variants={fadeInUp}>{course.title}</motion.h1>

                            <motion.p className="course-short-desc" variants={fadeInUp}>
                                {course.description}
                            </motion.p>

                            {/* Rating Row */}
                            <motion.div className="rating-row" variants={fadeInUp}>
                                <span className="rating-value">{course.rating}</span>
                                <div className="stars-row">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            size={16}
                                            fill={i < Math.floor(course.rating) ? "#facc15" : "none"}
                                            stroke={i < Math.floor(course.rating) ? "#facc15" : "#64748b"}
                                        />
                                    ))}
                                </div>
                                <span className="reviews-count">
                                    ({course.reviews_count} premium ratings)
                                </span>
                                <span className="students-count">
                                    • {course.students} industry professionals
                                </span>
                            </motion.div>

                            {/* Meta */}
                            <motion.div className="course-meta-footer" variants={fadeInUp}>
                                <span>
                                    Led by <strong>{course.instructor.name}</strong>
                                </span>
                                <span><Calendar size={14} /> Updated {course.last_updated}</span>
                                <span><Globe size={14} /> {course.language} (English)</span>
                                <span><Award size={14} /> Verified Certificate</span>
                            </motion.div>

                        </motion.div>

                        {/* RIGHT SIDEBAR */}
                        <aside className="course-sidebar-container">
                            <motion.div
                                className="sidebar-card"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                {/* Video Preview */}
                                <div className="video-preview">
                                    <img src={course.image} alt={course.title} />
                                    <div className="play-overlay">
                                        <div className="play-btn">
                                            <MdPlayCircle size={54} />
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="sidebar-content">
                                    {/* <div className="price-box">
                                        <span className="price">{course.price}</span>
                                    </div> */}

                                    <div className="includes">
                                        <p>This program includes:</p>
                                        <ul>
                                            {course.inclusions.map((item, i) => (
                                                <li key={i}>
                                                    <CheckCircle size={14} />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <Link
                                        to={course.id === 100 ? "/internship-registration" : "/contact"}
                                        className="enroll-btn btn"
                                    >
                                        {course.id === 100 ? "Secure My Spot" : "Enroll in Program"}
                                    </Link>
                                </div>
                            </motion.div>
                        </aside>

                    </div>
                </div>
            </section>

            {/* Core Program Content: Side-by-Side Curriculum & Highlights */}
            <section className="course-core-section">
                <div className="container">
                    <div className="curriculum-highlights-grid">
                        {/* Left: Curriculum (Syllabus) */}
                        <div className="syllabus-column">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <span className="section-tag-small">Curriculum</span>
                                <h2>Comprehensive Syllabus</h2>
                                <div className="curriculum-meta">
                                    <div className="meta-info">
                                        <span><Monitor size={18} /> {course.curriculum.length} Core Modules</span>
                                        <span><Clock size={18} /> {course.duration} Duration</span>
                                    </div>
                                    <button className="text-link" onClick={() => setActiveSection(activeSection === -1 ? 0 : -1)}>
                                        {activeSection === -1 ? 'Expand All' : 'Collapse All'}
                                    </button>
                                </div>

                                <div className="accordion-container">
                                    {course.curriculum.map((section, idx) => (
                                        <div key={idx} className={`accordion-item ${activeSection === idx ? 'expanded' : ''}`}>
                                            <div
                                                className="accordion-header"
                                                onClick={() => setActiveSection(activeSection === idx ? -1 : idx)}
                                            >
                                                <ChevronDown size={20} className="arrow" />
                                                <div className="header-info">
                                                    <div className="section-index">Module 0{idx + 1}</div>
                                                    <div className="section-title">{section.section_title}</div>
                                                </div>
                                                <span className="lecture-count">{section.lessons.length} Learning Units</span>
                                            </div>
                                            <AnimatePresence>
                                                {activeSection === idx && (
                                                    <motion.div
                                                        className="accordion-content"
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.3 }}
                                                    >
                                                        <div className="lesson-list">
                                                            {section.lessons.map((lesson, lidx) => (
                                                                <div key={lidx} className="lesson-item">
                                                                    <div className="lesson-left">
                                                                        <PlayCircle size={16} />
                                                                        <span>{lesson}</span>
                                                                    </div>
                                                                    <span className="tag-premium">Expert Session</span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* Right: Highlights (What you'll learn) */}
                        <div className="highlights-column">
                            <motion.div
                                className="sticky-side-card"
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="side-card-header">
                                    <span className="section-tag-small">Outcomes</span>
                                    <h2>What You Will Master</h2>
                                </div>
                                <div className="outcomes-list">
                                    {course.what_you_will_learn.map((outcome, i) => (
                                        <div key={i} className="outcome-item">
                                            <div className="check-wrapper">
                                                <CheckCircle size={20} />
                                            </div>
                                            <span>{outcome}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="highlights-footer">
                                    <Shield size={22} className="text-primary" />
                                    <span>Globally Recognized Professional Certificate</span>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Program Insights (Bento Style) */}
            <section className="course-insights-section">
                <div className="container">
                    <motion.div
                        className="insights-card"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="insights-grid">
                            <div className="insights-main">
                                <span className="section-tag-small">Overview</span>
                                <h2>Logic-Driven Learning</h2>
                                <p className="description-p">{course.description}</p>
                                <p className="description-p">Our elite training methodology bridges the gap between theoretical knowledge and real-world implementation, preparing you for global tech leadership.</p>

                                <div className="instructor-minimal">
                                    <img src={course.instructor.image} alt={course.instructor.name} />
                                    <div>
                                        <strong>{course.instructor.name}</strong>
                                        <p>{course.instructor.role}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="insights-readiness">
                                <div className="readiness-box">
                                    <span className="section-tag-small">Readiness</span>
                                    <h3>Entry Requirements</h3>
                                    <div className="req-list">
                                        {course.prerequisites.map((req, i) => (
                                            <div key={i} className="req-item">
                                                <Zap size={18} />
                                                <span>{req}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="support-box">
                                        <Award size={24} />
                                        <div>
                                            <h4>Skill Validation</h4>
                                            <p>Complimentary pre-assessment session included with every corporate enrollment.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* <section className="course-instructor-section">
                <div className="container">
                    <motion.div
                        className="instructor-full-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="instructor-bio-header">
                            <img src={course.instructor.image} alt={course.instructor.name} />
                            <div className="instructor-info-text">
                                <span className="section-tag-small">Program Director</span>
                                <h2>Meet Your Instructor</h2>
                                <div className="instructor-badges-row">
                                    <span className="badge"><Users size={16} /> 10k+ Global Alumni</span>
                                    <span className="badge"><Award size={16} /> Industry Lead</span>
                                    <span className="badge"><Star size={16} /> 4.9 Program Rating</span>
                                </div>
                            </div>
                        </div>
                        <p className="instructor-bio-p">{course.instructor.bio}</p>
                    </motion.div>
                </div>
            </section> */}

            {/* Mobile Bottom CTA */}
            <div className="mobile-cta-bar">
                <div className="price-info">
                    <span className="total-label">Course Access:</span>
                    <span className="total-price"> <MdOutlineCurrencyRupee />{course.price} </span>
                </div>
                <Link
                    to={course.id === 100 ? "/internship-registration" : "/contact"}
                    className="btn btn-primary cta-btn"
                >
                    {course.id === 100 ? "Register " : "Enroll Now"} <ArrowRight size={16} className="rotate-180" />
                </Link>
            </div>
        </div>
    );
};

export default CourseDetails;
