import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    FaSearch, FaUserMd, FaTooth, FaHeartbeat, FaBone,
    FaStethoscope, FaBaby, FaFemale, FaRunning, FaBrain,
    FaEye, FaLungs, FaAllergies, FaPills, FaCheckCircle,
    FaArrowRight, FaCalendarCheck, FaFolderOpen, FaClock, FaShieldAlt,
    FaLinkedinIn, FaFacebookF, FaInstagram, FaYoutube,
    FaUserCheck, FaLock
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
    const [searchQuery, setSearchQuery] = useState('');

    const directorySpecialties = [
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
    ];

    const filteredSpecialties = directorySpecialties.filter(spec => 
        spec.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

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
                    {/* Updated to the provided specialties page image */}
                    <img src="/Specialties_page.jpg" alt="Medical Specialists" />
                </div>
            </header>

            {/* Browse By Section */}
            <section className="browse-section">
                <h2 className="section-head">How Would You <span style={{ color: '#27B992' }}>Like To Browse?</span></h2>
                <div className="browse-grid">
                    <div className="browse-card" onClick={() => navigate('/symptoms')}>
                        <div className="browse-icon-box"><FcSearch size={45} /></div>
                        <h4>By Symptoms</h4>
                        <p>Let our AI guide you</p>
                        <span className="browse-link">Explore <FaArrowRight size={12} /></span>
                    </div>
                    <div className="browse-card" onClick={() => {
                        const el = document.getElementById('directory-section');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}>
                        <div className="browse-icon-box"><FcFolder size={45} /></div>
                        <h4>By Specialty</h4>
                        <p>Browse full directory</p>
                        <span className="browse-link">Explore <FaArrowRight size={12} /></span>
                    </div>
                    <div className="browse-card" onClick={() => navigate('/find-doctors', { state: { availability: 'Today' } })}>
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
                <p className="section-subtitle">Our most requested departments, led by board-certified specialists.</p>

                <div className="featured-grid">
                    <div className="feature-card">
                        <div className="feature-icon-box" style={{ background: '#F0F8FF' }}>👨‍⚕️</div>
                        <div className="feature-content">
                            <h3>General Physician</h3>
                            <p>Expert primary care for everyday health concerns and preventive wellness.</p>
                        </div>
                        <div className="feature-footer">
                            <span className="feature-link">450+ Specialists</span>
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
                            <span className="feature-link">150+ Specialists</span>
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
                            <span className="feature-link">280+ Specialists</span>
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
                            <span className="feature-link">190+ Specialists</span>
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
                                    <div style={{ marginBottom: '10px' }}><img src="/pediatrician.png" alt="Pediatrician" style={{ width: '40px', height: '40px', objectFit: 'contain' }} /></div>
                                    <h4>Pediatrician</h4>
                                    <p>Comprehensive growth monitoring, vaccinations, and childhood illness care.</p>
                                    <span className="stage-link" onClick={() => navigate('/find-doctors', { state: { specialty: 'Pediatrician' } })} style={{ cursor: 'pointer' }}>Children's Specialist</span>
                                </div>
                                <div className="stage-card">
                                    <div style={{ marginBottom: '10px' }}><img src="/dentist.png" alt="Pediatric Dentist" style={{ width: '40px', height: '40px', objectFit: 'contain' }} /></div>
                                    <h4>Pediatric Dentist</h4>
                                    <p>Gentle dental care focused on developing teeth and preventive oral habits.</p>
                                    <span className="stage-link" onClick={() => navigate('/find-doctors', { state: { specialty: 'Dentist' } })} style={{ cursor: 'pointer' }}>Dental Care</span>
                                </div>
                                <div className="stage-card">
                                    <div style={{ marginBottom: '10px' }}><img src="/ENT specialist.png" alt="ENT Specialist" style={{ width: '40px', height: '40px', objectFit: 'contain' }} /></div>
                                    <h4>Ear & Throat</h4>
                                    <p>Expert treatment for common childhood issues like ear infections and tonsillitis.</p>
                                    <span className="stage-link" onClick={() => navigate('/find-doctors', { state: { specialty: 'ENT Specialist' } })} style={{ cursor: 'pointer' }}>ENT Care</span>
                                </div>
                                <div className="stage-card">
                                    <div style={{ marginBottom: '10px' }}><img src="/Ophthalmologist.png" alt="Eye Specialist" style={{ width: '40px', height: '40px', objectFit: 'contain' }} /></div>
                                    <h4>Eye Care</h4>
                                    <p>Early vision screening and treatment for refractive errors in children.</p>
                                    <span className="stage-link" onClick={() => navigate('/find-doctors', { state: { specialty: 'Ophthalmologist' } })} style={{ cursor: 'pointer' }}>Ophthalmology</span>
                                </div>

                                {/* Second Set For Infinite Loop */}
                                <div className="stage-card">
                                    <div style={{ marginBottom: '10px' }}><img src="/pediatrician.png" alt="Pediatrician" style={{ width: '40px', height: '40px', objectFit: 'contain' }} /></div>
                                    <h4>Pediatrician</h4>
                                    <p>Comprehensive growth monitoring, vaccinations, and childhood illness care.</p>
                                    <span className="stage-link" onClick={() => navigate('/find-doctors', { state: { specialty: 'Pediatrician' } })} style={{ cursor: 'pointer' }}>Children's Specialist</span>
                                </div>
                                <div className="stage-card">
                                    <div style={{ marginBottom: '10px' }}><img src="/dentist.png" alt="Pediatric Dentist" style={{ width: '40px', height: '40px', objectFit: 'contain' }} /></div>
                                    <h4>Pediatric Dentist</h4>
                                    <p>Gentle dental care focused on developing teeth and preventive oral habits.</p>
                                    <span className="stage-link" onClick={() => navigate('/find-doctors', { state: { specialty: 'Dentist' } })} style={{ cursor: 'pointer' }}>Dental Care</span>
                                </div>
                                <div className="stage-card">
                                    <div style={{ marginBottom: '10px' }}><img src="/ENT specialist.png" alt="ENT Specialist" style={{ width: '40px', height: '40px', objectFit: 'contain' }} /></div>
                                    <h4>Ear & Throat</h4>
                                    <p>Expert treatment for common childhood issues like ear infections and tonsillitis.</p>
                                    <span className="stage-link" onClick={() => navigate('/find-doctors', { state: { specialty: 'ENT Specialist' } })} style={{ cursor: 'pointer' }}>ENT Care</span>
                                </div>
                                <div className="stage-card">
                                    <div style={{ marginBottom: '10px' }}><img src="/Ophthalmologist.png" alt="Eye Specialist" style={{ width: '40px', height: '40px', objectFit: 'contain' }} /></div>
                                    <h4>Eye Care</h4>
                                    <p>Early vision screening and treatment for refractive errors in children.</p>
                                    <span className="stage-link" onClick={() => navigate('/find-doctors', { state: { specialty: 'Ophthalmologist' } })} style={{ cursor: 'pointer' }}>Ophthalmology</span>
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
                                    <div style={{ marginBottom: '10px' }}><img src="/General physician.png" alt="Gynecologist" style={{ width: '40px', height: '40px', objectFit: 'contain' }} /></div>
                                    <h4>Gynecologist</h4>
                                    <p>Comprehensive reproductive health care, prenatal care, and annual wellness exams.</p>
                                    <span className="stage-link" onClick={() => navigate('/find-doctors', { state: { specialty: 'Gynecologist' } })} style={{ cursor: 'pointer' }}>Women's Health</span>
                                </div>
                                <div className="stage-card">
                                    <div style={{ marginBottom: '10px' }}><img src="/Endocrinologist.png" alt="Endocrinologist" style={{ width: '40px', height: '40px', objectFit: 'contain' }} /></div>
                                    <h4>Hormonal Health</h4>
                                    <p>Specialized care for PCOS, thyroid issues, and hormonal imbalances in women.</p>
                                    <span className="stage-link" onClick={() => navigate('/find-doctors', { state: { specialty: 'Endocrinologist' } })} style={{ cursor: 'pointer' }}>Endocrinology</span>
                                </div>
                                <div className="stage-card">
                                    <div style={{ marginBottom: '10px' }}><img src="/deramatologist.png" alt="Dermatologist" style={{ width: '40px', height: '40px', objectFit: 'contain' }} /></div>
                                    <h4>Skin & Aesthetics</h4>
                                    <p>Advanced skincare solutions for acne, pigmentation, and anti-aging treatments.</p>
                                    <span className="stage-link" onClick={() => navigate('/find-doctors', { state: { specialty: 'Dermatologist' } })} style={{ cursor: 'pointer' }}>Dermatology</span>
                                </div>
                                <div className="stage-card">
                                    <div style={{ marginBottom: '10px' }}><img src="/pyschiatrist.png" alt="Psychiatrist" style={{ width: '40px', height: '40px', objectFit: 'contain' }} /></div>
                                    <h4>Mental Wellness</h4>
                                    <p>Compassionate support for postpartum depression and anxiety management.</p>
                                    <span className="stage-link" onClick={() => navigate('/find-doctors', { state: { specialty: 'Psychiatrist' } })} style={{ cursor: 'pointer' }}>Psychiatry</span>
                                </div>

                                {/* Second Set For Infinite Loop */}
                                <div className="stage-card">
                                    <div style={{ marginBottom: '10px' }}><img src="/General physician.png" alt="Gynecologist" style={{ width: '40px', height: '40px', objectFit: 'contain' }} /></div>
                                    <h4>Gynecologist</h4>
                                    <p>Comprehensive reproductive health care, prenatal care, and annual wellness exams.</p>
                                    <span className="stage-link" onClick={() => navigate('/find-doctors', { state: { specialty: 'Gynecologist' } })} style={{ cursor: 'pointer' }}>Women's Health</span>
                                </div>
                                <div className="stage-card">
                                    <div style={{ marginBottom: '10px' }}><img src="/Endocrinologist.png" alt="Endocrinologist" style={{ width: '40px', height: '40px', objectFit: 'contain' }} /></div>
                                    <h4>Hormonal Health</h4>
                                    <p>Specialized care for PCOS, thyroid issues, and hormonal imbalances in women.</p>
                                    <span className="stage-link" onClick={() => navigate('/find-doctors', { state: { specialty: 'Endocrinologist' } })} style={{ cursor: 'pointer' }}>Endocrinology</span>
                                </div>
                                <div className="stage-card">
                                    <div style={{ marginBottom: '10px' }}><img src="/deramatologist.png" alt="Dermatologist" style={{ width: '40px', height: '40px', objectFit: 'contain' }} /></div>
                                    <h4>Skin & Aesthetics</h4>
                                    <p>Advanced skincare solutions for acne, pigmentation, and anti-aging treatments.</p>
                                    <span className="stage-link" onClick={() => navigate('/find-doctors', { state: { specialty: 'Dermatologist' } })} style={{ cursor: 'pointer' }}>Dermatology</span>
                                </div>
                                <div className="stage-card">
                                    <div style={{ marginBottom: '10px' }}><img src="/pyschiatrist.png" alt="Psychiatrist" style={{ width: '40px', height: '40px', objectFit: 'contain' }} /></div>
                                    <h4>Mental Wellness</h4>
                                    <p>Compassionate support for postpartum depression and anxiety management.</p>
                                    <span className="stage-link" onClick={() => navigate('/find-doctors', { state: { specialty: 'Psychiatrist' } })} style={{ cursor: 'pointer' }}>Psychiatry</span>
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
                                    <div style={{ marginBottom: '10px' }}><img src="/General physician.png" alt="Physician" style={{ width: '40px', height: '40px', objectFit: 'contain' }} /></div>
                                    <h4>General Health</h4>
                                    <p>Routine checkups, lifestyle management, and overall wellness monitoring.</p>
                                    <span className="stage-link" onClick={() => navigate('/find-doctors', { state: { specialty: 'General Physician' } })} style={{ cursor: 'pointer' }}>Internal Medicine</span>
                                </div>
                                <div className="stage-card">
                                    <div style={{ marginBottom: '10px' }}><img src="/cardiologist.png" alt="Heart" style={{ width: '40px', height: '40px', objectFit: 'contain' }} /></div>
                                    <h4>Cardiac Care</h4>
                                    <p>Heart health assessments, blood pressure control, and stress management.</p>
                                    <span className="stage-link" onClick={() => navigate('/find-doctors', { state: { specialty: 'Cardiologist' } })} style={{ cursor: 'pointer' }}>Cardiology</span>
                                </div>
                                <div className="stage-card">
                                    <div style={{ marginBottom: '10px' }}><img src="/orthopedic.png" alt="Bones" style={{ width: '40px', height: '40px', objectFit: 'contain' }} /></div>
                                    <h4>Bone & Joints</h4>
                                    <p>Treatment for sports injuries, back pain, and joint health for active adults.</p>
                                    <span className="stage-link" onClick={() => navigate('/find-doctors', { state: { specialty: 'Orthopedic' } })} style={{ cursor: 'pointer' }}>Orthopedics</span>
                                </div>

                                {/* Second Set For Infinite Loop */}
                                <div className="stage-card">
                                    <div style={{ marginBottom: '10px' }}><img src="/General physician.png" alt="Physician" style={{ width: '40px', height: '40px', objectFit: 'contain' }} /></div>
                                    <h4>General Health</h4>
                                    <p>Routine checkups, lifestyle management, and overall wellness monitoring.</p>
                                    <span className="stage-link" onClick={() => navigate('/find-doctors', { state: { specialty: 'General Physician' } })} style={{ cursor: 'pointer' }}>Internal Medicine</span>
                                </div>
                                <div className="stage-card">
                                    <div style={{ marginBottom: '10px' }}><img src="/cardiologist.png" alt="Heart" style={{ width: '40px', height: '40px', objectFit: 'contain' }} /></div>
                                    <h4>Cardiac Care</h4>
                                    <p>Heart health assessments, blood pressure control, and stress management.</p>
                                    <span className="stage-link" onClick={() => navigate('/find-doctors', { state: { specialty: 'Cardiologist' } })} style={{ cursor: 'pointer' }}>Cardiology</span>
                                </div>
                                <div className="stage-card">
                                    <div style={{ marginBottom: '10px' }}><img src="/orthopedic.png" alt="Bones" style={{ width: '40px', height: '40px', objectFit: 'contain' }} /></div>
                                    <h4>Bone & Joints</h4>
                                    <p>Treatment for sports injuries, back pain, and joint health for active adults.</p>
                                    <span className="stage-link" onClick={() => navigate('/find-doctors', { state: { specialty: 'Orthopedic' } })} style={{ cursor: 'pointer' }}>Orthopedics</span>
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
                                    <div style={{ marginBottom: '10px' }}><img src="/neurologist.png" alt="Brain" style={{ width: '40px', height: '40px', objectFit: 'contain' }} /></div>
                                    <h4>Memory & Brain</h4>
                                    <p>Specialized care for dementia, Parkinson's, and cognitive health in seniors.</p>
                                    <span className="stage-link" onClick={() => navigate('/find-doctors', { state: { specialty: 'Neurologist' } })} style={{ cursor: 'pointer' }}>Neurology</span>
                                </div>
                                <div className="stage-card">
                                    <div style={{ marginBottom: '10px' }}><img src="/Ophthalmologist.png" alt="Eye" style={{ width: '40px', height: '40px', objectFit: 'contain' }} /></div>
                                    <h4>Vision Care</h4>
                                    <p>Cataract screening, glaucoma management, and age-related eye care.</p>
                                    <span className="stage-link" onClick={() => navigate('/find-doctors', { state: { specialty: 'Ophthalmologist' } })} style={{ cursor: 'pointer' }}>Ophthalmology</span>
                                </div>
                                <div className="stage-card">
                                    <div style={{ marginBottom: '10px' }}><img src="/orthopedic.png" alt="Arthritis" style={{ width: '40px', height: '40px', objectFit: 'contain' }} /></div>
                                    <h4>Joint Health</h4>
                                    <p>Pain management for arthritis, osteoporosis care, and mobility support.</p>
                                    <span className="stage-link" onClick={() => navigate('/find-doctors', { state: { specialty: 'Orthopedic' } })} style={{ cursor: 'pointer' }}>Geriatric Orthopedics</span>
                                </div>

                                {/* Second Set For Infinite Loop */}
                                <div className="stage-card">
                                    <div style={{ marginBottom: '10px' }}><img src="/neurologist.png" alt="Brain" style={{ width: '40px', height: '40px', objectFit: 'contain' }} /></div>
                                    <h4>Memory & Brain</h4>
                                    <p>Specialized care for dementia, Parkinson's, and cognitive health in seniors.</p>
                                    <span className="stage-link" onClick={() => navigate('/find-doctors', { state: { specialty: 'Neurologist' } })} style={{ cursor: 'pointer' }}>Neurology</span>
                                </div>
                                <div className="stage-card">
                                    <div style={{ marginBottom: '10px' }}><img src="/Ophthalmologist.png" alt="Eye" style={{ width: '40px', height: '40px', objectFit: 'contain' }} /></div>
                                    <h4>Vision Care</h4>
                                    <p>Cataract screening, glaucoma management, and age-related eye care.</p>
                                    <span className="stage-link" onClick={() => navigate('/find-doctors', { state: { specialty: 'Ophthalmologist' } })} style={{ cursor: 'pointer' }}>Ophthalmology</span>
                                </div>
                                <div className="stage-card">
                                    <div style={{ marginBottom: '10px' }}><img src="/orthopedic.png" alt="Arthritis" style={{ width: '40px', height: '40px', objectFit: 'contain' }} /></div>
                                    <h4>Joint Health</h4>
                                    <p>Pain management for arthritis, osteoporosis care, and mobility support.</p>
                                    <span className="stage-link" onClick={() => navigate('/find-doctors', { state: { specialty: 'Orthopedic' } })} style={{ cursor: 'pointer' }}>Geriatric Orthopedics</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Directory Section */}
            <section className="directory-section" id="directory-section">
                <div className="directory-container">
                    <div className="directory-header-row">
                        <h2 className="section-head" style={{ textAlign: 'left', margin: 0 }}>Complete <span style={{ color: '#27B992' }}>Directory</span></h2>
                        <div className="directory-search">
                            <FaSearch className="search-icon" />
                            <input 
                                type="text" 
                                placeholder="Search specialty..." 
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="directory-list">
                        {filteredSpecialties.length > 0 ? (
                            filteredSpecialties.map((spec) => (
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
                            ))
                        ) : (
                            <div className="no-results-msg" style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '40px', color: '#999' }}>
                                No specialties found matching "{searchQuery}"
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Trust Banner Reuse */}
            <div className="trust-banner" style={{ maxWidth: '950px', margin: '50px auto' }}>
                <div className="trust-item">
                    <div className="trust-icon-box"><FaUserCheck /></div>
                    <h4>Verified Doctors Only</h4>
                    <p>Stringent background checks for your peace of mind.</p>
                </div>
                <div className="trust-item">
                    <div className="trust-icon-box"><FaCalendarCheck /></div>
                    <h4>Instant Booking</h4>
                    <p>Book slots in real-time with zero waiting time.</p>
                </div>
                <div className="trust-item">
                    <div className="trust-icon-box"><FaLock /></div>
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
