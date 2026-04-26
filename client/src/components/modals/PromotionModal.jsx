import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Zap, Sparkles } from 'lucide-react';
import summerInternImg from '../../assets/Highlets/Summer_intern.jpg';
import './promotion-modal.css';

const PromotionModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Check if user has already seen the modal in this session
        const hasSeenModal = sessionStorage.getItem('hasSeenPromoModal');

        if (!hasSeenModal) {
            const timer = setTimeout(() => {
                setIsOpen(true);
            }, 500); // More immediate impact

            return () => clearTimeout(timer);
        }
    }, []);

    const handleClose = () => {
        setIsOpen(false);
        sessionStorage.setItem('hasSeenPromoModal', 'true');
    };

    const handleAction = () => {
        setIsOpen(false);
        sessionStorage.setItem('hasSeenPromoModal', 'true');
        navigate('/trainings/100');
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="promo-modal-overlay">
                    <motion.div
                        className="promo-modal-backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                    />

                    <motion.div
                        className="promo-modal-container"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <button className="promo-close-btn" onClick={handleClose}>
                            <X size={20} />
                        </button>

                        <div className="promo-modal-content">
                            <div className="promo-visual">
                                <img src={summerInternImg} alt="Summer Internship 2026" />
                                <div className="promo-badge">
                                    <Sparkles size={14} /> Limited Spots
                                </div>
                            </div>

                            <div className="promo-info">
                                <div className="promo-info-content">
                                    <span className="promo-tag">New Program</span>
                                    <h2>Summer <span>MERN STACK</span> Training 2026</h2>
                                    <p>Master Full-Stack Engineering with Industry experts. Don't miss out on the most intensive coding program of the year.</p>

                                    <div className="promo-perks">
                                        <div className="promo-perk">
                                            <Zap size={16} /> <span>Live Mentorship</span>
                                        </div>
                                        <div className="promo-perk">
                                            <Zap size={16} /> <span>Direct Placement</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="promo-actions">
                                    <button className="promo-main-btn" onClick={handleAction}>
                                        View Details <ArrowRight size={18} />
                                    </button>
                                    <button className="promo-skip-btn" onClick={handleClose}>
                                        Maybe Later
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default PromotionModal;
