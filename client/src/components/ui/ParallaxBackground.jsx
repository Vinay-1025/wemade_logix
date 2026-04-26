import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Cpu, Zap, Code, Shield, Radio, Share2, Database, Terminal } from 'lucide-react';
import './parallax-bg.css';

const ParallaxBackground = () => {
    const { scrollY } = useScroll();

    const icons = [
        { Icon: Cpu, top: '10%', left: '5%', size: 40, speed: 0.1 },
        { Icon: Code, top: '25%', left: '85%', size: 30, speed: 0.15 },
        { Icon: Radio, top: '45%', left: '12%', size: 50, speed: 0.08 },
        { Icon: Shield, top: '65%', left: '88%', size: 45, speed: 0.12 },
        { Icon: Database, top: '80%', left: '15%', size: 35, speed: 0.18 },
        { Icon: Terminal, top: '15%', left: '75%', size: 55, speed: 0.05 },
        { Icon: Zap, top: '55%', left: '80%', size: 25, speed: 0.2 },
        { Icon: Share2, top: '90%', left: '70%', size: 40, speed: 0.1 },
    ];

    return (
        <div className="parallax-tech-bg">
            {icons.map((item, index) => (
                <ParallaxIcon key={index} {...item} scrollY={scrollY} />
            ))}
        </div>
    );
};

const ParallaxIcon = ({ Icon, top, left, size, speed, scrollY }) => {
    const y = useTransform(scrollY, [0, 5000], [0, speed * 2000]);
    const rotate = useTransform(scrollY, [0, 5000], [0, 360]);

    return (
        <motion.div
            className="floating-tech-icon"
            style={{
                top,
                left,
                fontSize: size,
                y,
                rotate,
                position: 'fixed',
                zIndex: -1,
                opacity: 0.04,
                color: 'var(--primary-color, #2563EB)',
                pointerEvents: 'none',
            }}
        >
            <Icon size={size} strokeWidth={1} />
        </motion.div>
    );
};

export default ParallaxBackground;
