import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-grid">
                <div className="footer-col">
                    <div className="nav-logo" style={{ marginBottom: '24px', display: 'flex', flexDirection: 'column' }}>
                        <img src="/zynrova_logo.svg" alt="Zynrova Logo" style={{ height: '85px', objectFit: 'contain', marginBottom: '16px', alignSelf: 'center' }} />
                        <span className="nav-logo-text" style={{ color: '#ccc', fontSize: '13px', fontWeight: '500', letterSpacing: '0.5px', textTransform: 'lowercase', alignSelf: 'center', textAlign: 'center' }}>
                            powered by zynrova software solutions
                        </span>
                    </div>
                    <p style={{ marginTop: '0', color: '#999', lineHeight: '1.6' }}>Building reliable digital solutions for modern businesses.</p>
                </div>
                <div className="footer-col">
                    <h3>SERVICES</h3>
                    <ul className="footer-links">
                        <li><Link to="/specialties">Mobile Apps</Link></li>
                        <li><Link to="/specialties">Web development</Link></li>
                        <li><Link to="/specialties">UI/UX Design</Link></li>
                        <li><Link to="/specialties">Digital Marketing</Link></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h3>QUICK LINKS</h3>
                    <ul className="footer-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/specialties">Services</Link></li>
                        <li><Link to="/about">About us</Link></li>
                        <li><Link to="/contact">Contact us</Link></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h3>QUICK CONTACT</h3>
                    <div className="social-icons">
                        <a href="#" className="social-icon-link"><FaLinkedinIn /></a>
                        <a href="#" className="social-icon-link"><FaFacebookF /></a>
                        <a href="#" className="social-icon-link"><FaInstagram /></a>
                        <a href="#" className="social-icon-link"><FaYoutube /></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Zynrova. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
