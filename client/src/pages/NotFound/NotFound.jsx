import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Home, Rocket, ChevronLeft, AlertCircle } from 'lucide-react';
import SEO from '../../components/ui/SEO';
import './not-found.css';

const NotFound = () => {
    const navigate = useNavigate();
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        // Particle System for "Lost in Space" effect
        const particles = [];
        const particleCount = 150;

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 2 + 0.5,
                speedX: (Math.random() - 0.5) * 0.5,
                speedY: (Math.random() - 0.5) * 0.5,
                opacity: Math.random()
            });
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            ctx.fillStyle = 'rgba(45, 212, 191, 0.5)'; // Teal glow
            particles.forEach(p => {
                p.x += p.speedX;
                p.y += p.speedY;

                if (p.x < 0) p.x = canvas.width;
                if (p.x > canvas.width) p.x = 0;
                if (p.y < 0) p.y = canvas.height;
                if (p.y > canvas.height) p.y = 0;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="not-found-container">
            <SEO title="404 | Lost in Tech Space" description="The page you are looking for has drifted into deep space." />
            <div className="page-watermark">
                <img src="/fav_icon.png" alt="" />
            </div>
            
            <canvas ref={canvasRef} className="stars-canvas" />
            
            <div className="nf-content">
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="nf-visual"
                >
                    <div className="glow-circle"></div>
                    <h1 className="glitch-text" data-text="404">404</h1>
                    <div className="orbit-container">
                        <div className="planet"></div>
                        <div className="satellite"><Rocket size={24} /></div>
                    </div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="nf-text-box"
                >
                    <div className="error-tag">
                        <AlertCircle size={14} />
                        <span>NEURAL PATH DISCONNECTED</span>
                    </div>
                    <h2>Quantum Link Expired</h2>
                    <p>
                        The digital coordinates you provided lead to a void in our neural network. 
                        The page has likely been refactored or lost in the gradient descent.
                    </p>

                    <div className="nf-actions">
                        <button className="btn-v-glass" onClick={() => navigate('/')}>
                            <Home size={18} />
                            Back to Core
                        </button>
                        <button className="btn-v-outline" onClick={() => navigate(-1)}>
                            <ChevronLeft size={18} />
                            Undo Jump
                        </button>
                    </div>
                </motion.div>
            </div>

            <div className="nf-footer">
                <p>Lost? Try exploring our <span onClick={() => navigate('/careers')}>Careers</span> instead.</p>
            </div>
        </div>
    );
};

export default NotFound;
