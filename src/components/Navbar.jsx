import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // Helper to determine active state
    const isActive = (path) => location.pathname === path ? 'active' : '';

    return (
        <nav className="navbar">
            <div className="nav-logo" style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', lineHeight: '1' }} onClick={(e) => { e.preventDefault(); navigate('/'); }}>
                <img src="/logo_doctor.png" alt="Healthcare Logo" style={{ width: '36px', height: '40px', objectFit: 'contain' }} />
            </div>
            <ul className="nav-links">
                <li><a className={isActive('/')} onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>Home</a></li>
                <li><a className={isActive('/find-doctors')} onClick={() => navigate('/find-doctors')} style={{ cursor: 'pointer' }}>Find Doctors</a></li>
                <li><a className={isActive('/specialties')} onClick={() => navigate('/specialties')} style={{ cursor: 'pointer' }}>Specialities</a></li>
                <li><a className={isActive('/symptoms')} onClick={() => navigate('/symptoms')} style={{ cursor: 'pointer' }}>Symptoms</a></li>
                <li><a className={isActive('/about')} onClick={() => navigate('/about')} style={{ cursor: 'pointer' }}>About Us</a></li>
                <li><a className={isActive('/contact')} onClick={() => navigate('/contact')} style={{ cursor: 'pointer' }}>Contact</a></li>
            </ul>
            <div className="nav-actions">
                <a className="login-link" onClick={() => navigate('/login')}>Login / Sign Up</a>
                {location.pathname === '/' && (
                    <button className="btn-primary" onClick={() => navigate('/booking')}>Book Appointment <FaArrowRight /></button>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
