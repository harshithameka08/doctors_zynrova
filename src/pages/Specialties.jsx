import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    FaSearch, FaUserMd, FaTooth, FaHeartbeat, FaBone,
    FaStethoscope, FaBaby, FaFemale, FaRunning, FaBrain,
    FaEye, FaLungs, FaAllergies, FaPills, FaCheckCircle,
    FaArrowRight, FaCalendarCheck, FaFolderOpen, FaClock, FaShieldAlt,
    FaLinkedinIn, FaFacebookF, FaInstagram, FaYoutube
} from 'react-icons/fa';
import { FcSearch, FcFolder, FcAlarmClock } from "react-icons/fc";
import { FaHeartPulse, FaUserDoctor } from "react-icons/fa6"; // For more variety if needed
import './Specialties.css';
import Footer from '../components/Footer';
// Reusing standard layout components via copy/paste to ensure exact match without refactor risk
import { FaHeartbeat as LogoIcon } from 'react-icons/fa';
import Navbar from '../components/Navbar';

const Specialties = () => {
    const navigate = useNavigate();

    return (
        <div className="specialties-page">
            {/* Navbar */}
            <Navbar />

            {/* Hero Section */}
            <header className="spec-hero">
                <div className="spec-hero-content">
                    <h1>Explore Specialties<br />Designed <span style={{ color: '#27B992' }}>Around You</span></h1>
                    <p>From everyday wellness to advanced medical treatments, find the exact specialist your health deserves in seconds.</p>
                    <div className="spec-tags">
                        <span className="spec-tag-pill">20+ Specialties</span>
                        <span className="spec-tag-pill">Verified Doctors</span>
                        <span className="spec-tag-pill">Online & Clinic Care</span>
                    </div>
                </div>
                <div className="spec-hero-image">
                    {/* Updated image as per user request */}
                    <img src="/speclist_page_image.png" alt="Medical Specialists" />
                </div>
            </header>

            {/* Browse By Section */}
            <section className="browse-section">
                <h2 className="section-head">How Would You <span style={{ color: '#27B992' }}>Like To Browse?</span></h2>
                <div className="browse-grid">
                    <div className="browse-card">
                        <div className="browse-icon-box"><FcSearch size={45} /></div>
                        <h4>By Symptoms</h4>
                        <p>Let our AI guide you</p>
                        <span className="browse-link">Explore <FaArrowRight size={12} /></span>
                    </div>
                    <div className="browse-card">
                        <div className="browse-icon-box"><FcFolder size={45} /></div>
                        <h4>By Specialty</h4>
                        <p>Browse full directory</p>
                        <span className="browse-link">Explore <FaArrowRight size={12} /></span>
                    </div>
                    <div className="browse-card">
                        <div className="browse-icon-box"><FcAlarmClock size={45} /></div>
                        <h4>By Availability</h4>
                        <p>Find who is free today</p>
                        <span className="browse-link">Explore <FaArrowRight size={12} /></span>
                    </div>
                </div>
            </section>

            {/* Featured Excellence */}
            <section className="featured-section">
                <h2 className="section-head">Featured <span style={{ color: '#27B992' }}>Excellence</span></h2>
                <p style={{ marginTop: '-30px', marginBottom: '40px', color: '#777' }}>Our most requested departments, led by board-certified specialists.</p>

                <div className="featured-grid">
                    <div className="feature-card">
                        <div className="feature-icon-box" style={{ background: '#F0F8FF' }}>👨‍⚕️</div>
                        <div className="feature-content">
                            <h3>General Physician</h3>
                            <p>Expert primary care for everyday health concerns and preventive wellness.</p>
                        </div>
                        <div className="feature-footer">
                            <a href="#" className="feature-link">450+ Specialists</a>
                            <button className="btn-book-feature" onClick={() => navigate('/find-doctors', { state: { specialty: 'General Physician' } })}>Book Now</button>
                        </div>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon-box" style={{ background: '#FFF0F5' }}>🫀</div>
                        <div className="feature-content">
                            <h3>Cardiologist</h3>
                            <p>Comprehensive heart and vascular care using state-of-the-art diagnostics.</p>
                        </div>
                        <div className="feature-footer">
                            <a href="#" className="feature-link">150+ Specialists</a>
                            <button className="btn-book-feature" onClick={() => navigate('/find-doctors', { state: { specialty: 'Cardiologist' } })}>Book Now</button>
                        </div>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon-box" style={{ background: '#F5F5F5' }}>🦷</div>
                        <div className="feature-content">
                            <h3>Dentist</h3>
                            <p>Advanced oral health treatments from routine cleaning to complex surgery.</p>
                        </div>
                        <div className="feature-footer">
                            <a href="#" className="feature-link">280+ Specialists</a>
                            <button className="btn-book-feature" onClick={() => navigate('/find-doctors', { state: { specialty: 'Dentist' } })}>Book Now</button>
                        </div>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon-box" style={{ background: '#FFFACD' }}>🦴</div>
                        <div className="feature-content">
                            <h3>Orthopedic</h3>
                            <p>Specialized treatment for musculoskeletal injuries and bone health.</p>
                        </div>
                        <div className="feature-footer">
                            <a href="#" className="feature-link">190+ Specialists</a>
                            <button className="btn-book-feature" onClick={() => navigate('/find-doctors', { state: { specialty: 'Orthopedic' } })}>Book Now</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Care Stages */}
            <section className="stage-section">
                <div className="stages-container">
                    <h2 className="section-head" style={{ textAlign: 'center', marginBottom: '60px' }}>Care For Every <span style={{ color: '#27B992' }}>Stage</span></h2>

                    {/* For Children */}
                    <div className="stage-group">
                        <h4 className="stage-title">For Children</h4>
                        <div className="stage-scroll-container" style={{ overflow: 'hidden', width: '100%' }}>
                            <div className="stage-scroll">
                                {/* First Set */}
                                <div className="stage-card">
                                    <div style={{ marginBottom: '10px' }}><img src="/dentist.png" alt="Dentist" style={{ width: '40px', height: '40px', objectFit: 'contain' }} /></div>
                                    <h4>Dentist</h4>
                                    <p>Advanced oral health treatments from routine cleaning to complex surgery.</p>
                                    <span className="stage-link">Clinical Care</span>
                                </div>
                                <div className="stage-card">
                                    <div style={{ marginBottom: '10px' }}><img src="/orthopedic.png" alt="Orthopedic" style={{ width: '40px', height: '40px', objectFit: 'contain' }} /></div>
                                    <h4>Orthopedic</h4>
                                    <p>Specialized treatment for musculoskeletal injuries and bone health.</p>
                                    <span className="stage-link">Clinical Care</span>
                                </div>
                                <div className="stage-card">
                                    <div style={{ marginBottom: '10px' }}><img src="/pediatrician.png" alt="Pediatrician" style={{ width: '40px', height: '40px', objectFit: 'contain' }} /></div>
                                    <h4>Pediatrician</h4>
                                    <p>Gentle and expert medical care tailored specifically for growing children.</p>
                                    <span className="stage-link">Clinical Care</span>
                                </div>
                                <div className="stage-card">
                                    <div style={{ marginBottom: '10px' }}><img src="/deramatologist.png" alt="Dermatologist" style={{ width: '40px', height: '40px', objectFit: 'contain' }} /></div>
                                    <h4>Dermatologist</h4>
                                    <p>Expert clinical and cosmetic care for your skin, hair, and nail health.</p>
                                    <span className="stage-link">Clinical Care</span>
                                </div>
                                <div className="stage-card">
                                    <div style={{ marginBottom: '10px' }}><img src="/pyschiatrist.png" alt="Psychiatrist" style={{ width: '40px', height: '40px', objectFit: 'contain' }} /></div>
                                    <h4>Psychiatrist</h4>
                                    <p>Compassionate mental health support and medical therapeutic care.</p>
                                    <span className="stage-link">Clinical Care</span>
                                </div>
                                <div className="stage-card">
                                    <div style={{ marginBottom: '10px' }}><img src="/Ophthalmologist.png" alt="Ophthalmologist" style={{ width: '40px', height: '40px', objectFit: 'contain' }} /></div>
                                    <h4>Ophthalmologist</h4>
                                    <p>Precision eye care and surgical treatments to protect your vision.</p>
                                    <span className="stage-link">Clinical Care</span>
                                </div>
                                <div className="stage-card">
                                    <div style={{ marginBottom: '10px' }}><img src="/ENT specialist.png" alt="ENT Specialist" style={{ width: '40px', height: '40px', objectFit: 'contain' }} /></div>
                                    <h4>ENT Specialist</h4>
                                    <p>Comprehensive treatment for ear, nose, and throat related conditions.</p>
                                    <span className="stage-link">Clinical Care</span>
                                </div>

                                {/* Second Set For Infinite Loop */}
                                <div className="stage-card">
                                    <div style={{ marginBottom: '10px' }}><img src="/dentist.png" alt="Dentist" style={{ width: '40px', height: '40px', objectFit: 'contain' }} /></div>
                                    <h4>Dentist</h4>
                                    <p>Advanced oral health treatments from routine cleaning to complex surgery.</p>
                                    <span className="stage-link">Clinical Care</span>
                                </div>
                                <div className="stage-card">
                                    <div style={{ marginBottom: '10px' }}><img src="/orthopedic.png" alt="Orthopedic" style={{ width: '40px', height: '40px', objectFit: 'contain' }} /></div>
                                    <h4>Orthopedic</h4>
                                    <p>Specialized treatment for musculoskeletal injuries and bone health.</p>
                                    <span className="stage-link">Clinical Care</span>
                                </div>
                                <div className="stage-card">
                                    <div style={{ marginBottom: '10px' }}><img src="/pediatrician.png" alt="Pediatrician" style={{ width: '40px', height: '40px', objectFit: 'contain' }} /></div>
                                    <h4>Pediatrician</h4>
                                    <p>Gentle and expert medical care tailored specifically for growing children.</p>
                                    <span className="stage-link">Clinical Care</span>
                                </div>
                                <div className="stage-card">
                                    <div style={{ marginBottom: '10px' }}><img src="/deramatologist.png" alt="Dermatologist" style={{ width: '40px', height: '40px', objectFit: 'contain' }} /></div>
                                    <h4>Dermatologist</h4>
                                    <p>Expert clinical and cosmetic care for your skin, hair, and nail health.</p>
                                    <span className="stage-link">Clinical Care</span>
                                </div>
                                <div className="stage-card">
                                    <div style={{ marginBottom: '10px' }}><img src="/pyschiatrist.png" alt="Psychiatrist" style={{ width: '40px', height: '40px', objectFit: 'contain' }} /></div>
                                    <h4>Psychiatrist</h4>
                                    <p>Compassionate mental health support and medical therapeutic care.</p>
                                    <span className="stage-link">Clinical Care</span>
                                </div>
                                <div className="stage-card">
                                    <div style={{ marginBottom: '10px' }}><img src="/Ophthalmologist.png" alt="Ophthalmologist" style={{ width: '40px', height: '40px', objectFit: 'contain' }} /></div>
                                    <h4>Ophthalmologist</h4>
                                    <p>Precision eye care and surgical treatments to protect your vision.</p>
                                    <span className="stage-link">Clinical Care</span>
                                </div>
                                <div className="stage-card">
                                    <div style={{ marginBottom: '10px' }}><img src="/ENT specialist.png" alt="ENT Specialist" style={{ width: '40px', height: '40px', objectFit: 'contain' }} /></div>
                                    <h4>ENT Specialist</h4>
                                    <p>Comprehensive treatment for ear, nose, and throat related conditions.</p>
                                    <span className="stage-link">Clinical Care</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* For Women */}
                    <div className="stage-group">
                        <h4 className="stage-title">For Women</h4>
                        <div className="stage-scroll-container" style={{ overflow: 'hidden', width: '100%' }}>
                            <div className="stage-scroll">
                                {/* First Set */}
                                <div className="stage-card">
                                    <div style={{ marginBottom: '10px' }}><img src="/General physician.png" alt="General Physician" style={{ width: '40px', height: '40px', objectFit: 'contain' }} /></div>
                                    <h4>General Physician</h4>
                                    <p>Expert primary care for everyday health concerns and preventive wellness.</p>
                                    <span className="stage-link">Clinical Care</span>
                                </div>
                                <div className="stage-card">
                                    <div style={{ marginBottom: '10px' }}><img src="/cardiologist.png" alt="Cardiologist" style={{ width: '40px', height: '40px', objectFit: 'contain' }} /></div>
                                    <h4>Cardiologist</h4>
                                    <p>Comprehensive heart and vascular care using state-of-the-art diagnostics.</p>
                                    <span className="stage-link">Clinical Care</span>
                                </div>
                                <div className="stage-card">
                                    <div style={{ marginBottom: '10px' }}><img src="/neurologist.png" alt="Neurologist" style={{ width: '40px', height: '40px', objectFit: 'contain' }} /></div>
                                    <h4>Neurologist</h4>
                                    <p>Advanced care for brain, spine, and nervous system disorders.</p>
                                    <span className="stage-link">Clinical Care</span>
                                </div>
                                <div className="stage-card">
                                    <div style={{ marginBottom: '10px' }}><img src="/Endocrinologist.png" alt="Endocrinologist" style={{ width: '40px', height: '40px', objectFit: 'contain' }} /></div>
                                    <h4>Endocrinologist</h4>
                                    <p>Specialized care for hormonal imbalances and metabolic disorders.</p>
                                    <span className="stage-link">Clinical Care</span>
                                </div>

                                {/* Second Set For Infinite Loop */}
                                <div className="stage-card">
                                    <div style={{ marginBottom: '10px' }}><img src="/General physician.png" alt="General Physician" style={{ width: '40px', height: '40px', objectFit: 'contain' }} /></div>
                                    <h4>General Physician</h4>
                                    <p>Expert primary care for everyday health concerns and preventive wellness.</p>
                                    <span className="stage-link">Clinical Care</span>
                                </div>
                                <div className="stage-card">
                                    <div style={{ marginBottom: '10px' }}><img src="/cardiologist.png" alt="Cardiologist" style={{ width: '40px', height: '40px', objectFit: 'contain' }} /></div>
                                    <h4>Cardiologist</h4>
                                    <p>Comprehensive heart and vascular care using state-of-the-art diagnostics.</p>
                                    <span className="stage-link">Clinical Care</span>
                                </div>
                                <div className="stage-card">
                                    <div style={{ marginBottom: '10px' }}><img src="/neurologist.png" alt="Neurologist" style={{ width: '40px', height: '40px', objectFit: 'contain' }} /></div>
                                    <h4>Neurologist</h4>
                                    <p>Advanced care for brain, spine, and nervous system disorders.</p>
                                    <span className="stage-link">Clinical Care</span>
                                </div>
                                <div className="stage-card">
                                    <div style={{ marginBottom: '10px' }}><img src="/Endocrinologist.png" alt="Endocrinologist" style={{ width: '40px', height: '40px', objectFit: 'contain' }} /></div>
                                    <h4>Endocrinologist</h4>
                                    <p>Specialized care for hormonal imbalances and metabolic disorders.</p>
                                    <span className="stage-link">Clinical Care</span>
                                </div>
                                
                                {/* Third Set For Ensuring Width Loop Doesn't Gap */}
                                <div className="stage-card">
                                    <div style={{ marginBottom: '10px' }}><img src="/General physician.png" alt="General Physician" style={{ width: '40px', height: '40px', objectFit: 'contain' }} /></div>
                                    <h4>General Physician</h4>
                                    <p>Expert primary care for everyday health concerns and preventive wellness.</p>
                                    <span className="stage-link">Clinical Care</span>
                                </div>
                                <div className="stage-card">
                                    <div style={{ marginBottom: '10px' }}><img src="/cardiologist.png" alt="Cardiologist" style={{ width: '40px', height: '40px', objectFit: 'contain' }} /></div>
                                    <h4>Cardiologist</h4>
                                    <p>Comprehensive heart and vascular care using state-of-the-art diagnostics.</p>
                                    <span className="stage-link">Clinical Care</span>
                                </div>
                                <div className="stage-card">
                                    <div style={{ marginBottom: '10px' }}><img src="/neurologist.png" alt="Neurologist" style={{ width: '40px', height: '40px', objectFit: 'contain' }} /></div>
                                    <h4>Neurologist</h4>
                                    <p>Advanced care for brain, spine, and nervous system disorders.</p>
                                    <span className="stage-link">Clinical Care</span>
                                </div>
                                <div className="stage-card">
                                    <div style={{ marginBottom: '10px' }}><img src="/Endocrinologist.png" alt="Endocrinologist" style={{ width: '40px', height: '40px', objectFit: 'contain' }} /></div>
                                    <h4>Endocrinologist</h4>
                                    <p>Specialized care for hormonal imbalances and metabolic disorders.</p>
                                    <span className="stage-link">Clinical Care</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* For Adults */}
                    <div className="stage-group">
                        <h4 className="stage-title">For Adults</h4>
                        <div className="stage-scroll-container" style={{ overflow: 'hidden', width: '100%' }}>
                            <div className="stage-scroll">
                                {/* First Set */}
                                <div className="stage-card">
                                    <div style={{ marginBottom: '10px' }}><img src="/General physician.png" alt="General Physician" style={{ width: '40px', height: '40px', objectFit: 'contain' }} /></div>
                                    <h4>General Physician</h4>
                                    <p>Expert primary care for everyday health concerns and preventive wellness.</p>
                                    <span className="stage-link">Clinical Care</span>
                                </div>
                                <div className="stage-card">
                                    <div style={{ marginBottom: '10px' }}><img src="/dentist.png" alt="Dentist" style={{ width: '40px', height: '40px', objectFit: 'contain' }} /></div>
                                    <h4>Dentist</h4>
                                    <p>Advanced oral health treatments from routine cleaning.</p>
                                    <span className="stage-link">Clinical Care</span>
                                </div>
                                <div className="stage-card">
                                    <div style={{ marginBottom: '10px' }}><img src="/cardiologist.png" alt="Cardiologist" style={{ width: '40px', height: '40px', objectFit: 'contain' }} /></div>
                                    <h4>Cardiologist</h4>
                                    <p>Comprehensive heart and vascular care using state-of-the-art diagnostics.</p>
                                    <span className="stage-link">Clinical Care</span>
                                </div>

                                {/* Second Set For Infinite Loop */}
                                <div className="stage-card">
                                    <div style={{ marginBottom: '10px' }}><img src="/General physician.png" alt="General Physician" style={{ width: '40px', height: '40px', objectFit: 'contain' }} /></div>
                                    <h4>General Physician</h4>
                                    <p>Expert primary care for everyday health concerns and preventive wellness.</p>
                                    <span className="stage-link">Clinical Care</span>
                                </div>
                                <div className="stage-card">
                                    <div style={{ marginBottom: '10px' }}><img src="/dentist.png" alt="Dentist" style={{ width: '40px', height: '40px', objectFit: 'contain' }} /></div>
                                    <h4>Dentist</h4>
                                    <p>Advanced oral health treatments from routine cleaning.</p>
                                    <span className="stage-link">Clinical Care</span>
                                </div>
                                <div className="stage-card">
                                    <div style={{ marginBottom: '10px' }}><img src="/cardiologist.png" alt="Cardiologist" style={{ width: '40px', height: '40px', objectFit: 'contain' }} /></div>
                                    <h4>Cardiologist</h4>
                                    <p>Comprehensive heart and vascular care using state-of-the-art diagnostics.</p>
                                    <span className="stage-link">Clinical Care</span>
                                </div>

                                {/* Third Set For Ensuring Width Loop Doesn't Gap */}
                                <div className="stage-card">
                                    <div style={{ marginBottom: '10px' }}><img src="/General physician.png" alt="General Physician" style={{ width: '40px', height: '40px', objectFit: 'contain' }} /></div>
                                    <h4>General Physician</h4>
                                    <p>Expert primary care for everyday health concerns and preventive wellness.</p>
                                    <span className="stage-link">Clinical Care</span>
                                </div>
                                <div className="stage-card">
                                    <div style={{ marginBottom: '10px' }}><img src="/dentist.png" alt="Dentist" style={{ width: '40px', height: '40px', objectFit: 'contain' }} /></div>
                                    <h4>Dentist</h4>
                                    <p>Advanced oral health treatments from routine cleaning.</p>
                                    <span className="stage-link">Clinical Care</span>
                                </div>
                                <div className="stage-card">
                                    <div style={{ marginBottom: '10px' }}><img src="/cardiologist.png" alt="Cardiologist" style={{ width: '40px', height: '40px', objectFit: 'contain' }} /></div>
                                    <h4>Cardiologist</h4>
                                    <p>Comprehensive heart and vascular care using state-of-the-art diagnostics.</p>
                                    <span className="stage-link">Clinical Care</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* For Seniors */}
                    <div className="stage-group">
                        <h4 className="stage-title">For Seniors</h4>
                        <div className="stage-scroll-container" style={{ overflow: 'hidden', width: '100%' }}>
                            <div className="stage-scroll">
                                {/* First Set */}
                                <div className="stage-card">
                                    <div style={{ marginBottom: '10px' }}><img src="/General physician.png" alt="General Physician" style={{ width: '40px', height: '40px', objectFit: 'contain' }} /></div>
                                    <h4>General Physician</h4>
                                    <p>Expert primary care for everyday health concerns.</p>
                                    <span className="stage-link">Clinical Care</span>
                                </div>
                                <div className="stage-card">
                                    <div style={{ marginBottom: '10px' }}><img src="/dentist.png" alt="Dentist" style={{ width: '40px', height: '40px', objectFit: 'contain' }} /></div>
                                    <h4>Dentist</h4>
                                    <p>Advanced oral health treatments from routine cleaning.</p>
                                    <span className="stage-link">Clinical Care</span>
                                </div>
                                <div className="stage-card">
                                    <div style={{ marginBottom: '10px' }}><img src="/cardiologist.png" alt="Cardiologist" style={{ width: '40px', height: '40px', objectFit: 'contain' }} /></div>
                                    <h4>Cardiologist</h4>
                                    <p>Comprehensive heart and vascular care using state-of-the-art diagnostics.</p>
                                    <span className="stage-link">Clinical Care</span>
                                </div>

                                {/* Second Set For Infinite Loop */}
                                <div className="stage-card">
                                    <div style={{ marginBottom: '10px' }}><img src="/General physician.png" alt="General Physician" style={{ width: '40px', height: '40px', objectFit: 'contain' }} /></div>
                                    <h4>General Physician</h4>
                                    <p>Expert primary care for everyday health concerns.</p>
                                    <span className="stage-link">Clinical Care</span>
                                </div>
                                <div className="stage-card">
                                    <div style={{ marginBottom: '10px' }}><img src="/dentist.png" alt="Dentist" style={{ width: '40px', height: '40px', objectFit: 'contain' }} /></div>
                                    <h4>Dentist</h4>
                                    <p>Advanced oral health treatments from routine cleaning.</p>
                                    <span className="stage-link">Clinical Care</span>
                                </div>
                                <div className="stage-card">
                                    <div style={{ marginBottom: '10px' }}><img src="/cardiologist.png" alt="Cardiologist" style={{ width: '40px', height: '40px', objectFit: 'contain' }} /></div>
                                    <h4>Cardiologist</h4>
                                    <p>Comprehensive heart and vascular care using state-of-the-art diagnostics.</p>
                                    <span className="stage-link">Clinical Care</span>
                                </div>

                                {/* Third Set For Ensuring Width Loop Doesn't Gap */}
                                <div className="stage-card">
                                    <div style={{ marginBottom: '10px' }}><img src="/General physician.png" alt="General Physician" style={{ width: '40px', height: '40px', objectFit: 'contain' }} /></div>
                                    <h4>General Physician</h4>
                                    <p>Expert primary care for everyday health concerns.</p>
                                    <span className="stage-link">Clinical Care</span>
                                </div>
                                <div className="stage-card">
                                    <div style={{ marginBottom: '10px' }}><img src="/dentist.png" alt="Dentist" style={{ width: '40px', height: '40px', objectFit: 'contain' }} /></div>
                                    <h4>Dentist</h4>
                                    <p>Advanced oral health treatments from routine cleaning.</p>
                                    <span className="stage-link">Clinical Care</span>
                                </div>
                                <div className="stage-card">
                                    <div style={{ marginBottom: '10px' }}><img src="/cardiologist.png" alt="Cardiologist" style={{ width: '40px', height: '40px', objectFit: 'contain' }} /></div>
                                    <h4>Cardiologist</h4>
                                    <p>Comprehensive heart and vascular care using state-of-the-art diagnostics.</p>
                                    <span className="stage-link">Clinical Care</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Directory Section */}
            <section className="directory-section">
                <div className="directory-container">
                    <div className="directory-header-row">
                        <h2 className="section-head" style={{ textAlign: 'left', margin: 0 }}>Complete <span style={{ color: '#27B992' }}>Directory</span></h2>
                        <div className="directory-search">
                            <FaSearch className="search-icon" />
                            <input type="text" placeholder="Search specialty..." />
                        </div>
                    </div>

                    <div className="directory-list">
                        {[
                            { name: 'General Physician', icon: '👨‍⚕️' },
                            { name: 'Dentist', icon: '🦷' },
                            { name: 'Cardiologist', icon: '🫀' },
                            { name: 'Orthopedic', icon: '🦴' },
                            { name: 'Pediatrician', icon: '👶' },
                            { name: 'Dermatologist', icon: '🧴' },
                            { name: 'Gynecologist', icon: '♀️' },
                            { name: 'Neurologist', icon: '🧠' },
                            { name: 'Psychiatrist', icon: '🧩' },
                            { name: 'Endocrinologist', icon: '🧬' },
                            { name: 'Ophthalmologist', icon: '👁️' },
                            { name: 'ENT Specialist', icon: '👂' }
                        ].map((spec) => (
                            <div 
                                className="directory-item" 
                                key={spec.name}
                                onClick={() => navigate('/find-doctors', { state: { specialty: spec.name } })}
                            >
                                <div className="dir-item-left">
                                    <span className="dir-icon-img">{spec.icon}</span> {spec.name}
                                </div>
                                <span className="dir-view-link">View doctors <FaArrowRight size={10} style={{ marginLeft: '5px' }} /></span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trust Banner Reuse */}
            <div className="trust-banner" style={{ maxWidth: '950px', margin: '50px auto' }}>
                <div className="trust-item">
                    <div className="trust-icon-box"><img src="/heartbox.png" alt="Verified" style={{ width: '22px', height: '22px', objectFit: 'contain' }} /></div>
                    <h4>Verified Doctors Only</h4>
                    <p>Stringent background checks for your peace of mind.</p>
                </div>
                <div className="trust-item">
                    <div className="trust-icon-box"><img src="/heartbox.png" alt="Booking" style={{ width: '22px', height: '22px', objectFit: 'contain' }} /></div>
                    <h4>Instant Booking</h4>
                    <p>Book slots in real-time with zero waiting time.</p>
                </div>
                <div className="trust-item">
                    <div className="trust-icon-box"><img src="/heartbox.png" alt="Secure" style={{ width: '22px', height: '22px', objectFit: 'contain' }} /></div>
                    <h4>Secure Medical Data</h4>
                    <p>Your privacy is our priority with HIPAA compliance.</p>
                </div>
            </div>

            {/* Footer reused */}
            <Footer />
        </div>
    );
};

export default Specialties;
