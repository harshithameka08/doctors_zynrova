import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <div className="footer-logo" style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <img src="/logo_doctor.png" alt="CareFlow Logo" style={{ width: '32px', height: 'auto', filter: 'brightness(0) invert(1)' }} />
                            <h2 style={{ color: '#ffffff', fontSize: '20px', fontWeight: '800', margin: 0, letterSpacing: '-0.5px' }}>CareFlow AI</h2>
                        </div>
                        <p className="footer-tagline">
                            Revolutionizing healthcare access with AI-driven intelligence and instant specialist connectivity.
                        </p>
                        <div className="social-links">
                            <a href="#" className="social-link"><FaLinkedinIn /></a>
                            <a href="#" className="social-link"><FaFacebookF /></a>
                            <a href="#" className="social-link"><FaInstagram /></a>
                            <a href="#" className="social-link"><FaYoutube /></a>
                        </div>
                    </div>

                    <div className="footer-col">
                        <h3>SERVICES</h3>
                        <ul className="footer-links">
                            <li><Link to="/specialties">Cardiology</Link></li>
                            <li><Link to="/specialties">Dermatology</Link></li>
                            <li><Link to="/specialties">Pediatrics</Link></li>
                            <li><Link to="/specialties">Neurology</Link></li>
                            <li><Link to="/specialties">Orthopedics</Link></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h3>Quick Links</h3>
                        <ul className="footer-links">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/find-doctors">Find Doctors</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/contact">Contact Support</Link></li>
                            <li><Link to="/privacy">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h3>Get In Touch</h3>
                        <ul className="contact-info">
                            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                <FaMapMarkerAlt style={{ color: 'var(--primary-color)', marginTop: '4px', fontSize: '16px' }} />
                                <p>123 Medical Plaza, Wellness District, NY 10001</p>
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <FaPhoneAlt style={{ color: 'var(--primary-color)', fontSize: '16px' }} />
                                <p>+1 (800) 123-4567</p>
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <FaEnvelope style={{ color: 'var(--primary-color)', fontSize: '16px' }} />
                                <p>support@careflowai.com</p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} CareFlow AI Healthcare Solutions. All rights reserved.</p>
                    <div className="footer-bottom-links">
                        <Link to="/terms">Terms of Service</Link>
                        <Link to="/cookies">Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
