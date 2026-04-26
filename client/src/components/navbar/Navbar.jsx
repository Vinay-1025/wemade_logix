import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import MobileMenu from './MobileMenu';
import './navbar.css';

const Navbar = ({ logoVariant }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Projects', path: '/projects' },
        { name: 'Trainings', path: '/trainings' },
    ];

    return (
        <>
            <nav className={`navbar-main ${scrolled ? 'navbar-scrolled' : ''} ${logoVariant ? `navbar-${logoVariant}` : ''}`}>
                <div className="container navbar-nav-container">
                    <NavLink to="/" className="navbar-logo">
                        <span className="navbar-logo-text">Wemade Logix</span>
                        <img src="/fav_icon.png" alt="We Made Logix" className="navbar-logo-img" />
                    </NavLink>

                    {/* Desktop Menu */}
                    <div className="navbar-nav-menu desktop-only">
                        <div className="navbar-nav-links-container">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.path}
                                    to={link.path}
                                    className={({ isActive }) => (isActive ? 'navbar-nav-link navbar-active' : 'navbar-nav-link')}
                                >
                                    {link.name}
                                </NavLink>
                            ))}
                        </div>
                        <NavLink
                            to="/contact"
                            className="navbar-nav-cta"
                        >
                            Contact Us
                        </NavLink>
                    </div>

                    <div className="navbar-nav-mobile-toggle" onClick={() => setIsOpen(true)}>
                        <Menu size={28} />
                    </div>
                </div>
            </nav>

            <MobileMenu
                isOpen={isOpen}
                toggleMenu={() => setIsOpen(false)}
                navLinks={navLinks}
            />
        </>
    );
};

export default Navbar;
