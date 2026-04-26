import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Upload, FileText, CheckCircle2, ChevronLeft, ChevronRight, Send,
    MapPin, Briefcase, Sparkles, Loader2, BrainCircuit
} from 'lucide-react';
import SEO from '../../components/ui/SEO';
import './apply-job.css';

const ApplyJob = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [isParsing, setIsParsing] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [resumeData, setResumeData] = useState(null);
    const [formStep, setFormStep] = useState(0);

    const jobs = [
        { id: 1, title: "Senior IoT Systems Engineer", department: "Engineering", location: "San Francisco / Remote" },
        { id: 2, title: "VLSI Design Engineer", department: "Hardware", location: "Bangalore" },
        { id: 3, title: "Full Stack Developer", department: "Product", location: "Remote" },
        { id: 4, title: "AI Research Scientist", department: "Engineering", location: "Silicon Valley" },
        { id: 5, title: "Technical Support Specialist", department: "Customer Success", location: "Hyderabad" }
    ];

    const job = jobs.find(j => j.id === parseInt(id)) || jobs[0];

    const handleResumeUpload = (e) => {
        setIsParsing(true);
        // Simulate AI Parsing
        setTimeout(() => {
            setIsParsing(false);
            setResumeData({
                name: "Alex Visionary",
                email: "alex@example.com",
                skills: ["React", "Project Management", "IoT Protocols"],
                suggestions: [
                    { id: 4, title: "AI Research Scientist" },
                    { id: 3, title: "Full Stack Developer" }
                ]
            });
            setFormStep(1);
        }, 3000);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    return (
        <div className="apply-page">
            <SEO title={`Apply for ${job.title} | Vintech Logix`} />

            <div className="apply-header">
                <div className="container">
                    <button className="back-btn" onClick={() => navigate('/careers')}>
                        <ChevronLeft size={20} /> Back to Careers
                    </button>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="job-context"
                    >
                        <span className="apply-tag">{job.department}</span>
                        <h1>{job.title}</h1>
                        <p><MapPin size={16} /> {job.location}</p>
                    </motion.div>
                </div>
            </div>

            <div className="container">
                <div className="apply-grid">
                    <div className="apply-main">
                        {!isSubmitted ? (
                            <div className="apply-card shadow-premium">
                                {/* Professional Roadmap */}
                                <div className="apply-roadmap">
                                    <div className={`roadmap-step ${formStep >= 0 ? 'completed' : ''} ${formStep === 0 ? 'current' : ''}`}>
                                        <div className="step-point">
                                            {formStep > 0 ? <CheckCircle2 size={16} /> : 1}
                                        </div>
                                        <span>Resume</span>
                                    </div>
                                    <div className="roadmap-line"></div>
                                    <div className={`roadmap-step ${formStep >= 1 ? 'completed' : ''} ${formStep === 1 ? 'current' : ''}`}>
                                        <div className="step-point">
                                            {formStep > 1 ? <CheckCircle2 size={16} /> : 2}
                                        </div>
                                        <span>Details</span>
                                    </div>
                                    <div className="roadmap-line"></div>
                                    <div className={`roadmap-step ${formStep >= 2 ? 'completed' : ''} ${formStep === 2 ? 'current' : ''}`}>
                                        <div className="step-point">
                                            {formStep > 2 ? <CheckCircle2 size={16} /> : 3}
                                        </div>
                                        <span>Motivation</span>
                                    </div>
                                </div>

                                <AnimatePresence mode='wait'>
                                    {formStep === 0 && (
                                        <motion.div
                                            key="step0"
                                            initial={{ opacity: 0, y: 30 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, scale: 0.95 }}
                                            className="upload-section"
                                        >
                                            <div className="parsing-banner">
                                                <div className="banner-icon-bg">
                                                    <BrainCircuit className="banner-icon" />
                                                </div>
                                                <div className="banner-text">
                                                    <h4>AI-Powered Extraction</h4>
                                                    <p>Vintech AI will parse your technical skills and experience segments to pre-fill your application.</p>
                                                </div>
                                            </div>

                                            <div className="drop-zone-premium">
                                                {isParsing ? (
                                                    <div className="parsing-status">
                                                        <div className="dna-loader">
                                                            <div className="dna-dot"></div>
                                                            <div className="dna-dot"></div>
                                                            <div className="dna-dot"></div>
                                                        </div>
                                                        <h3>Synchronizing Neural Data...</h3>
                                                        <p>Mapping your expertise into our talent matrix</p>
                                                    </div>
                                                ) : (
                                                    <label className="upload-label-classic">
                                                        <div className="upload-icon-circle">
                                                            <Upload size={32} />
                                                        </div>
                                                        <h3>Click or Drag Resume</h3>
                                                        <p>Supports .pdf, .docx (Max 10MB)</p>
                                                        <input type="file" onChange={handleResumeUpload} hidden />
                                                    </label>
                                                )}
                                            </div>
                                        </motion.div>
                                    )}

                                    {formStep === 1 && (
                                        <motion.div
                                            key="step1"
                                            initial={{ opacity: 0, x: 50 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -50 }}
                                            className="form-section-classic"
                                        >
                                            <div className="ai-success-strip">
                                                <Sparkles size={16} />
                                                <span>Profile Successfully Synchronized</span>
                                            </div>
                                            <form onSubmit={(e) => { e.preventDefault(); setFormStep(2); }}>
                                                <div className="classic-form-grid">
                                                    <div className="form-group-classic">
                                                        <label>Full Legal Name</label>
                                                        <input type="text" defaultValue={resumeData?.name} required placeholder="Enter your full name" />
                                                    </div>
                                                    <div className="form-group-classic">
                                                        <label>Professional Email</label>
                                                        <input type="email" defaultValue={resumeData?.email} required placeholder="email@example.com" />
                                                    </div>
                                                    <div className="form-group-classic">
                                                        <label>Contact Number</label>
                                                        <input type="tel" placeholder="+1 (000) 000-0000" required />
                                                    </div>
                                                    <div className="form-group-classic">
                                                        <label>Target Department</label>
                                                        <input type="text" defaultValue={job.department} readOnly disabled />
                                                    </div>
                                                </div>
                                                <div className="form-group-classic mt-8">
                                                    <label>Extracted Tech Stack</label>
                                                    <div className="expert-skills">
                                                        {resumeData?.skills.map((s, i) => (
                                                            <span key={i} className="skill-chip">{s}</span>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="actions-modern mt-10">
                                                    <button type="submit" className="btn btn-primary btn-classic-lg">
                                                        Proceed to Motivation <Send size={18} />
                                                    </button>
                                                </div>
                                            </form>
                                        </motion.div>
                                    )}

                                    {formStep === 2 && (
                                        <motion.div
                                            key="step2"
                                            initial={{ opacity: 0, x: 50 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, scale: 0.95 }}
                                            className="form-section-classic"
                                        >
                                            <form onSubmit={handleSubmit}>
                                                <div className="form-group-classic">
                                                    <label>Vision Alignment & Motivation</label>
                                                    <textarea rows="8" placeholder="How do your personal engineering goals align with Vintech Logix's mission?" required></textarea>
                                                </div>
                                                <div className="form-group-classic mt-6">
                                                    <label>Professional Portfolio / GitHub</label>
                                                    <input type="url" placeholder="https://..." />
                                                </div>
                                                <div className="form-footer-actions mt-10">
                                                    <button type="button" className="classic-back-link" onClick={() => setFormStep(1)}>
                                                        <ChevronLeft size={16} /> Edit Personal Details
                                                    </button>
                                                    <button type="submit" className="btn btn-primary btn-classic-lg btn-glow">
                                                        Finalize Application
                                                    </button>
                                                </div>
                                            </form>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="success-container glassmorphism"
                            >
                                <CheckCircle2 size={80} color="var(--primary-blue)" />
                                <h2>Transmission Complete!</h2>
                                <p>Your application has been successfuly synchronized with our talent database. Our team will reach out shortly.</p>
                                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                                    <button className="btn btn-primary px-8" onClick={() => navigate('/lms')}>Go to LMS Portal</button>
                                    <button className="btn btn-outline border border-primary text-primary px-8 rounded-xl hover:bg-primary/5 transition-all font-bold" onClick={() => navigate('/careers')}>Return to Careers</button>
                                </div>
                            </motion.div>
                        )}
                    </div>

                    <div className="apply-sidebar">
                        <div className="suggestion-card glassmorphism">
                            <h4><Sparkles size={18} /> AI Recommendations</h4>
                            <p>Based on our neural analysis, you might also be a fit for:</p>
                            <div className="suggestion-list">
                                {resumeData?.suggestions.map(s => (
                                    <div key={s.id} className="suggested-job" onClick={() => navigate(`/careers/apply/${s.id}`)}>
                                        <h5>{s.title}</h5>
                                        <ChevronRight size={16} />
                                    </div>
                                ))}
                                {!resumeData && <p className="placeholder-text">Upload resume to see suggestions</p>}
                            </div>
                        </div>

                        <div className="info-card glassmorphism mt-4">
                            <h4>Application Tips</h4>
                            <ul>
                                <li>Showcase your hardware projects.</li>
                                <li>Be specific about SoC/IoT protocols.</li>
                                <li>Precision counts more than volume.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApplyJob;
