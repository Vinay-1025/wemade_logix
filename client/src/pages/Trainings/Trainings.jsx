import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Users, BookOpen, Award, Monitor, Zap, Target, TrendingUp, ChevronDown, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/ui/SEO';
import './trainings.css';

import { coursesData } from '../../data/trainingsData';

const whyData = [
    {
        icon: Monitor,
        title: 'Live & Interactive',
        desc: 'Real-time sessions with industry experts. Ask questions, get instant feedback.',
    },
    {
        icon: Award,
        title: 'Certified Programs',
        desc: 'Earn industry-recognized certificates that boost your career credibility.',
    },
    {
        icon: Target,
        title: 'Project-Based Learning',
        desc: 'Build real-world projects that go directly into your portfolio.',
    },
    {
        icon: TrendingUp,
        title: 'Career Support',
        desc: 'Resume reviews, mock interviews, and job placement assistance included.',
    },
];

const pathSteps = [
    { num: '01', title: 'Foundations', desc: 'Core concepts, tools & environment setup' },
    { num: '02', title: 'Deep Dive', desc: 'Advanced techniques & hands-on projects' },
    { num: '03', title: 'Capstone', desc: 'Real-world project with mentor guidance' },
    { num: '04', title: 'Career Launch', desc: 'Portfolio, certification & placement' },
];

const toolsData = [
    'React', 'Node.js', 'Python', 'AWS', 'Docker', 'Kubernetes', 
    'TensorFlow', 'TypeScript', 'MongoDB', 'Firebase', 'Git', 'Figma'
];

const testimonialsData = [
    {
        name: 'Sarah Johnson',
        role: 'Full-Stack Developer at TechFlow',
        image: 'https://i.pravatar.cc/150?u=sarah',
        content: 'The Full-Stack program was life-changing. I went from zero coding knowledge to landing my dream job in 4 months.',
        rating: 5
    },
    {
        name: 'Michael Chen',
        role: 'AI Engineer at DataMinds',
        image: 'https://i.pravatar.cc/150?u=michael',
        content: 'Deeply technical and hands-on. The mentors are top-tier engineers who actually know how to teach complex AI concepts.',
        rating: 5
    },
    {
        name: 'Elena Rodriguez',
        role: 'Cloud Architect at SkyBridge',
        image: 'https://i.pravatar.cc/150?u=elena',
        content: 'The Cloud & DevOps bootcamp is intense but worth every minute. The real-world projects are what make the difference.',
        rating: 5
    }
];

const faqsData = [
    {
        question: 'Are the sessions live or recorded?',
        answer: 'Most of our sessions are live and interactive, led by industry experts. However, we provide recordings for all sessions so you can revisit them anytime.'
    },
    {
        question: 'Do I get a certificate after completion?',
        answer: 'Yes, every student who successfully completes the program and the capstone project receives an industry-recognized certificate from We Made Logix.'
    },
    {
        question: 'Is there any job placement assistance?',
        answer: 'Absolutely! We offer dedicated career support including resume reviews, personal branding, mock interviews, and direct referrals to our partner companies.'
    },
    {
        question: 'What are the prerequisites for these courses?',
        answer: 'Prerequisites vary by course. While beginner courses have no requirements, intermediate and advanced courses may require basic programming knowledge or specific tech experience.'
    }
];

const Trainings = () => {
    const [activeFaq, setActiveFaq] = useState(null);

    return (
        <div className="trainings-page">
            <SEO
                title="Professional Training | We Made Logix"
                description="Elevate your technical skills with our industry-led corporate training programs in AI, Cloud, and Software Engineering."
            />
            <div className="page-watermark">
                <img src="/fav_icon.png" alt="" />
            </div>

            {/* Hero */}
            <section className="trainings-hero">
                <div className="container">
                    <motion.div
                        className="trainings-hero-content"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9 }}
                    >
                        <span className="section-tag">Training Programs</span>
                        <h1>Upskill with <span>Industry Experts</span></h1>
                        <p>
                            Hands-on, project-based training programs designed to fast-track your career in technology.
                            Learn from engineers who build real products.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Programs Grid */}
            <section className="trainings-programs-section">
                <div className="container">
                    <div className="trainings-section-header">
                        <h2>Explore Our <span>Programs</span></h2>
                        <p>
                            Industry-relevant curricula designed with real-world application in mind.
                            Each program includes hands-on projects and career support.
                        </p>
                    </div>

                    <div className="courses-grid">
                        {coursesData.map((course, i) => (
                            <motion.div
                                key={course.id}
                                className="course-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="course-card-header">
                                    <img src={course.image} alt={course.title} loading="lazy" />
                                    <span className={`course-level-badge ${course.level}`}>
                                        {course.level}
                                    </span>
                                    <span className="course-duration-badge">
                                        <Clock size={12} /> {course.duration}
                                    </span>
                                </div>
                                <div className="course-card-body">
                                    <span className="course-card-category">{course.category}</span>
                                    <h3>{course.title}</h3>
                                    <p>{course.description}</p>
                                    <div className="course-meta">
                                        <span className="course-meta-item">
                                            <Users size={16} /> {course.students} Students
                                        </span>
                                        <span className="course-meta-item">
                                            <BookOpen size={16} /> {course.modules_count} Modules
                                        </span>
                                    </div>
                                    <Link to={`/trainings/${course.id}`} className="course-enroll-btn">
                                        Enroll Now <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="trainings-why-section">
                <div className="container">
                    <div className="trainings-section-header">
                        <h2>Why Choose <span>Our Training?</span></h2>
                        <p>
                            We don't just teach — we prepare you for real engineering roles with industry-grade tools and mentorship.
                        </p>
                    </div>

                    <div className="why-grid">
                        {whyData.map((item, i) => (
                            <motion.div
                                key={i}
                                className="why-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.12 }}
                                viewport={{ once: true }}
                            >
                                <div className="why-icon-wrapper">
                                    <item.icon size={28} />
                                </div>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Learning Path */}
            <section className="learning-path-section">
                <div className="container">
                    <div className="learning-path-header">
                        <h2>Your <span>Learning Path</span></h2>
                        <p>
                            A structured, step-by-step journey from fundamentals to career-ready expertise.
                        </p>
                    </div>

                    <div className="learning-path-steps">
                        {pathSteps.map((step, i) => (
                            <motion.div
                                key={i}
                                className="path-step"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.15 }}
                                viewport={{ once: true }}
                            >
                                <div className="path-step-number">{step.num}</div>
                                <h4>{step.title}</h4>
                                <p>{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tools & Technologies */}
            <section className="trainings-tools-section">
                <div className="container">
                    <div className="trainings-section-header">
                        <h2>Tools & <span>Technologies</span></h2>
                        <p>Master the stack used by world-class engineering teams.</p>
                    </div>
                    <div className="tools-marquee">
                        <div className="tools-track">
                            {[...toolsData, ...toolsData].map((tool, i) => (
                                <div key={i} className="tool-tag">{tool}</div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="trainings-testimonials-section">
                <div className="container">
                    <div className="trainings-section-header">
                        <h2>Student <span>Success Stories</span></h2>
                        <p>Hear from our alumni who are now working at leading tech companies.</p>
                    </div>

                    <div className="testimonials-grid">
                        {testimonialsData.map((item, i) => (
                            <motion.div
                                key={i}
                                className="testimonial-card"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="testimonial-rating">
                                    {[...Array(item.rating)].map((_, i) => (
                                        <Award key={i} size={16} fill="var(--brand-primary)" color="var(--brand-primary)" />
                                    ))}
                                </div>
                                <p className="testimonial-content">"{item.content}"</p>
                                <div className="testimonial-user">
                                    <img src={item.image} alt={item.name} />
                                    <div className="user-info">
                                        <h4>{item.name}</h4>
                                        <span>{item.role}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="trainings-faq-section">
                <div className="container">
                    <div className="trainings-section-header">
                        <span className="section-tag-small">Help Center</span>
                        <h2>Frequently Asked <span>Questions</span></h2>
                        <p>Everything you need to know about our professional training programs and corporate enrollment.</p>
                    </div>

                    <div className="faq-container">
                        {faqsData.map((faq, i) => (
                            <motion.div
                                key={i}
                                className={`faq-item ${activeFaq === i ? 'active' : ''}`}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                            >
                                <div className="faq-question">
                                    <h3>{faq.question}</h3>
                                    <ChevronDown size={20} className="faq-arrow" />
                                </div>
                                <div className="faq-answer">
                                    <p>{faq.answer}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="trainings-cta">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2>Ready to <span>Level Up?</span></h2>
                        <p>
                            Join thousands of learners who have transformed their careers with our expert-led programs.
                        </p>
                        <Link to="/contact" className="btn btn-primary">
                            Get Started Today <ArrowRight size={18} style={{ marginLeft: 8 }} />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Trainings;
