import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../../components/ui/SEO';
import './legal.css';

const LegalLayout = ({ title, lastUpdated, children }) => {
    return (
        <div className="legal-page">
            <SEO title={title} description={`Official ${title} for We Made Logix.`} />

            {/* Cinematic Background */}
            <div className="legal-bg-layers">
                <div className="legal-mesh-blob legal-blob-1"></div>
                <div className="legal-mesh-blob legal-blob-2"></div>
                <div className="legal-grid-pattern"></div>
            </div>

            {/* Watermark */}
            <div className="page-watermark">
                <img src="/fav_icon.png" alt="" />
            </div>

            <div className="container">
                <motion.main
                    className="legal-container"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <header className="legal-header">
                        <span className="last-updated">Last Updated: {lastUpdated}</span>
                        <h1>{title.split(' ')[0]} <span>{title.split(' ').slice(1).join(' ')}</span></h1>
                    </header>
                    <div className="legal-content">
                        {children}
                    </div>
                </motion.main>
            </div>
        </div>
    );
};

export default LegalLayout;
