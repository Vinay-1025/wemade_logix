import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    CheckCircle2, ChevronLeft, ChevronRight, Send, User, Mail, Phone, 
    BookOpen, Github, Linkedin, Sparkles, GraduationCap, ArrowRight,
    Users, Zap, Award, MapPin, CreditCard, Monitor
} from 'lucide-react';
import SEO from '../../components/ui/SEO';
import '../Careers/apply-job.css'; 
import './internship-registration.css'; 

import { useDispatch, useSelector } from 'react-redux';
import { registerIntern } from '../../redux/slices/internSlice';

const InternshipRegistration = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.interns);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobileNumber: '',
        collegeName: '',
        department: '',
        yearOfStudy: '2024',
        address: '',
        laptopMandatory: false,
        paymentProcess: 'Awaiting Payment',
        github: '',
        linkedin: '',
        motivation: ''
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({ 
            ...formData, 
            [name]: type === 'checkbox' ? checked : value 
        });
    };

    const nextStep = () => setStep(s => s + 1);
    const prevStep = () => setStep(s => s - 1);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await dispatch(registerIntern(formData));
        if (registerIntern.fulfilled.match(result)) {
            setIsSubmitted(true);
            window.scrollTo(0, 0);
        }
    };

    const steps = [
        { id: 1, title: 'Personal', icon: <User size={18} /> },
        { id: 2, title: 'Academic', icon: <BookOpen size={18} /> },
        { id: 3, title: 'Process', icon: <Send size={18} /> },
    ];

    return (
        <div className="apply-page">
            <SEO title="Internship Registration | Wemade Logix" />

            <div className="apply-header">
                <div className="container">
                    <button className="back-btn" onClick={() => navigate('/')}>
                        <ChevronLeft size={20} /> Back to Home
                    </button>
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="job-context"
                    >
                        <div className="highlight-tag" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.2)', marginBottom: '15px' }}>
                            Summer Internship 2024
                        </div>
                        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>Unlock Your Potential</h1>
                        <p><Sparkles size={18} /> Elite Engineering Training & Industry Placement</p>
                    </motion.div>
                </div>
            </div>

            <div className="container internship-reg-container">
                <div className="apply-grid">
                    <div className="apply-main">
                        {!isSubmitted ? (
                            <motion.div 
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="internship-reg-card"
                            >
                                {/* Step Indicator */}
                                <div className="internship-steps-bar">
                                    {steps.map((s, idx) => (
                                        <React.Fragment key={s.id}>
                                            <div className={`step-item-premium ${step >= s.id ? 'active' : ''}`}>
                                                <div className="step-number">
                                                    {step > s.id ? <CheckCircle2 size={16} /> : s.icon}
                                                </div>
                                                <span>{s.title}</span>
                                            </div>
                                            {idx < steps.length - 1 && <div className={`step-connector ${step > s.id ? 'active' : ''}`} />}
                                        </React.Fragment>
                                    ))}
                                </div>

                                <form onSubmit={handleSubmit} className="internship-form-section">
                                    <AnimatePresence mode="wait">
                                        {step === 1 && (
                                            <motion.div 
                                                key="step1"
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -20 }}
                                                className="step-content"
                                            >
                                                <div className="classic-form-grid">
                                                    <div className="internship-input-group">
                                                        <label><User size={14} /> Full Name</label>
                                                        <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="John Doe" />
                                                    </div>
                                                    <div className="internship-input-group">
                                                        <label><Mail size={14} /> Email Address</label>
                                                        <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="john@example.com" />
                                                    </div>
                                                    <div className="internship-input-group">
                                                        <label><Phone size={14} /> Mobile Number</label>
                                                        <input type="tel" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} required placeholder="+91 XXXXX XXXXX" />
                                                    </div>
                                                    <div className="internship-input-group" style={{ gridColumn: 'span 2' }}>
                                                        <label><MapPin size={14} /> Permanent Address</label>
                                                        <textarea name="address" value={formData.address} onChange={handleChange} required placeholder="Enter your full address..." rows="2"></textarea>
                                                    </div>
                                                </div>
                                                <button type="button" onClick={nextStep} className="internship-submit-btn">
                                                    Continue to Academic <ChevronRight size={18} />
                                                </button>
                                            </motion.div>
                                        )}

                                        {step === 2 && (
                                            <motion.div 
                                                key="step2"
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -20 }}
                                                className="step-content"
                                            >
                                                <div className="classic-form-grid">
                                                    <div className="internship-input-group">
                                                        <label><BookOpen size={14} /> University / College</label>
                                                        <input type="text" name="collegeName" value={formData.collegeName} onChange={handleChange} required placeholder="Enter University" />
                                                    </div>
                                                    <div className="internship-input-group">
                                                        <label>Department / Stream</label>
                                                        <input type="text" name="department" value={formData.department} onChange={handleChange} required placeholder="e.g. Computer Science" />
                                                    </div>
                                                    <div className="internship-input-group">
                                                        <label>Year of Study</label>
                                                        <select name="yearOfStudy" value={formData.yearOfStudy} onChange={handleChange}>
                                                            <option value="1st Year">1st Year</option>
                                                            <option value="2nd Year">2nd Year</option>
                                                            <option value="3rd Year">3rd Year</option>
                                                            <option value="Final Year">Final Year</option>
                                                            <option value="Graduated">Graduated</option>
                                                        </select>
                                                    </div>
                                                    <div className="internship-input-group checkbox-group" style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '10px' }}>
                                                        <input type="checkbox" id="laptop" name="laptopMandatory" checked={formData.laptopMandatory} onChange={handleChange} style={{ width: 'auto' }} />
                                                        <label htmlFor="laptop" style={{ marginBottom: 0 }}><Monitor size={14} /> I have a Laptop (Mandatory)</label>
                                                    </div>
                                                </div>
                                                <div className="form-navigation">
                                                    <button type="button" onClick={prevStep} className="btn-back">Previous Step</button>
                                                    <button type="button" onClick={nextStep} className="internship-submit-btn">
                                                        Next: Final Details <ChevronRight size={18} />
                                                    </button>
                                                </div>
                                            </motion.div>
                                        )}

                                        {step === 3 && (
                                            <motion.div 
                                                key="step3"
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -20 }}
                                                className="step-content"
                                            >
                                                <div className="internship-input-group" style={{ marginBottom: '20px' }}>
                                                    <label><CreditCard size={14} /> Payment Process / Transaction ID</label>
                                                    <input type="text" name="paymentProcess" value={formData.paymentProcess} onChange={handleChange} placeholder="e.g. TXN123456789 or Awaiting" required />
                                                </div>
                                                <div className="classic-form-grid" style={{ marginBottom: '20px' }}>
                                                    <div className="internship-input-group">
                                                        <label><Github size={14} /> GitHub</label>
                                                        <input type="url" name="github" value={formData.github} onChange={handleChange} placeholder="https://github.com/..." />
                                                    </div>
                                                    <div className="internship-input-group">
                                                        <label><Linkedin size={14} /> LinkedIn</label>
                                                        <input type="url" name="linkedin" value={formData.linkedin} onChange={handleChange} placeholder="https://linkedin.com/in/..." />
                                                    </div>
                                                </div>
                                                <div className="internship-input-group">
                                                    <label>Brief Motivation (Joining Reason)</label>
                                                    <textarea rows="3" name="motivation" value={formData.motivation} onChange={handleChange} placeholder="Share your vision..." required></textarea>
                                                </div>
                                                {error && <div className="error-message" style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}
                                                <div className="form-navigation">
                                                    <button type="button" onClick={prevStep} className="btn-back">Previous Step</button>
                                                    <button type="submit" className="internship-submit-btn" disabled={loading}>
                                                        {loading ? 'Submitting...' : 'Submit Final Registration'} <ArrowRight size={18} />
                                                    </button>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </form>
                            </motion.div>
                        ) : (
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="success-container glassmorphism"
                                style={{ background: 'white', padding: '5rem' }}
                            >
                                <div className="success-icon-wrapper">
                                    <CheckCircle2 size={80} color="var(--primary-blue)" />
                                </div>
                                <h2 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>Application Successful!</h2>
                                <p style={{ fontSize: '1.1rem', color: '#64748b', marginBottom: '40px' }}>
                                    Your application for the Summer Internship Training 2024 has been successfully processed. 
                                    A confirmation email with the next steps has been sent to your primary address.
                                </p>
                                <div className="success-actions">
                                    <button className="btn btn-primary px-10" onClick={() => navigate('/')}>Home Portal</button>
                                    <button className="btn btn-outline px-10" onClick={() => navigate('/trainings/100')}>Curriculum</button>
                                </div>
                            </motion.div>
                        )}
                    </div>

                    <aside className="apply-sidebar">
                        <div className="info-card glassmorphism">
                            <h4 style={{ color: 'var(--primary-blue)', fontWeight: 800 }}><Sparkles size={18} /> Why Join Wemade?</h4>
                            <div className="perks-list">
                                <div className="perk-item">
                                    <Users size={20} />
                                    <div>
                                        <strong>Network</strong>
                                        <p>Direct exposure to senior leaders</p>
                                    </div>
                                </div>
                                <div className="perk-item">
                                    <Zap size={20} />
                                    <div>
                                        <strong>Agile Skills</strong>
                                        <p>Learn fast-paced production cycles</p>
                                    </div>
                                </div>
                                <div className="perk-item">
                                    <Award size={20} />
                                    <div>
                                        <strong>Pre-Placement</strong>
                                        <p>Potential for full-time career roles</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="info-card mt-6" style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}>
                           <h4 style={{ fontWeight: 800, marginBottom: '25px' }}>Program Timeline</h4>
                           <div className="timeline-timeline">
                               <div className="timeline-node active">
                                   <div className="node-marker"></div>
                                   <div className="node-content">
                                       <span className="node-date">May 15</span>
                                       <p>Apps Close</p>
                                   </div>
                               </div>
                               <div className="timeline-node">
                                   <div className="node-marker"></div>
                                   <div className="node-content">
                                       <span className="node-date">June 01</span>
                                       <p>Batch Start</p>
                                   </div>
                               </div>
                               <div className="timeline-node">
                                   <div className="node-marker"></div>
                                   <div className="node-content">
                                       <span className="node-date">July 31</span>
                                       <p>Graduation</p>
                                   </div>
                               </div>
                           </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default InternshipRegistration;
