import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaArrowRight, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Helper to determine active state
    const isActive = (path) => location.pathname === path ? 'active' : '';

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    const handleNavigate = (path) => {
        navigate(path);
        closeMenu();
    };

    return (
        <nav className={`navbar ${isMenuOpen ? 'mobile-menu-open' : ''}`}>
            <div className="nav-logo" style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', lineHeight: '1' }} onClick={(e) => { e.preventDefault(); handleNavigate('/'); }}>
                <img src="/zyn_care-removebg-preview.png" alt="Zyn Care Logo" style={{ width: '150px', height: 'auto', objectFit: 'contain' }} />
            </div>

            <div className="mobile-toggle" onClick={toggleMenu}>
                {isMenuOpen ? <FaTimes /> : <FaBars />}
            </div>

            <ul className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
                <li><a className={isActive('/')} onClick={() => handleNavigate('/')} style={{ cursor: 'pointer' }}>Home</a></li>
                <li><a className={isActive('/find-doctors')} onClick={() => handleNavigate('/find-doctors')} style={{ cursor: 'pointer' }}>Find Doctors</a></li>
                <li><a className={isActive('/specialties')} onClick={() => handleNavigate('/specialties')} style={{ cursor: 'pointer' }}>Specialities</a></li>
                <li><a className={isActive('/symptoms')} onClick={() => handleNavigate('/symptoms')} style={{ cursor: 'pointer' }}>Symptoms</a></li>
                <li><a className={isActive('/about')} onClick={() => handleNavigate('/about')} style={{ cursor: 'pointer' }}>About Us</a></li>
                <li><a className={isActive('/contact')} onClick={() => handleNavigate('/contact')} style={{ cursor: 'pointer' }}>Contact</a></li>
                <li className="mobile-only-login"><a className="login-link" onClick={() => handleNavigate('/login')}>Login / Sign Up</a></li>
            </ul>

            <div className="nav-actions">
                <a className="login-link" onClick={() => handleNavigate('/login')}>Login / Sign Up</a>
                {location.pathname === '/' && (
                    <button className="btn-primary" onClick={() => handleNavigate('/booking')}>Book Appointment <FaArrowRight /></button>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
