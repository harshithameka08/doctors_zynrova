import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    FaSearch, FaUserMd, FaTooth, FaHeartbeat, FaBone,
    FaNotesMedical, FaEye, FaVideo, FaMapMarkerAlt,
    FaArrowRight, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn,
    FaCheckCircle, FaStar, FaPlus, FaMinus, FaStethoscope, FaHeadSideCough,
    FaHandHoldingMedical, FaPhoneAlt, FaBrain, FaMapPin
} from 'react-icons/fa';
import { RiCalendarCheckLine, RiShieldCheckLine, RiServiceLine, RiStethoscopeLine } from "react-icons/ri";
import { FiClock, FiUser, FiSearch, FiArrowRight, FiMessageCircle, FiHelpCircle, FiUserCheck } from "react-icons/fi";
import { BiSupport } from "react-icons/bi";
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { useChat } from '../context/ChatContext';

import './Home.css';

const Home = () => {
    const navigate = useNavigate();
    const { openChatWithMsg } = useChat();
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchSubmit = (e) => {
        if (e) e.preventDefault();
        if (searchQuery.trim()) {
            openChatWithMsg(searchQuery);
            setSearchQuery('');
        }
    };

    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const faqs = [
        { q: "How do I choose the best doctor for my needs?", a: "Patients can browse through verified profiles, check specialized experience, read genuine patient reviews, and use our AI analyzer to find the perfect match for their specific health concerns." },
        { q: "Can doctors see my previous medical history?", a: "With your permission, doctors can access your shared medical records on Zynrova, allowing for more accurate diagnoses and personalized treatment plans during your consultation." },
        { q: "What happens if I need to cancel or reschedule?", a: "Patients can easily reschedule or cancel their appointments up to 4 hours before the scheduled time directly through the dashboard, notifying the doctor instantly." },
        { q: "How do doctors provide follow-up care?", a: "Doctors can schedule follow-up appointments and send secure chat messages or digital health plans to patients to ensure continuous care after the initial consultation." },
        { q: "Are my conversations with the doctor private?", a: "Yes, all doctor-patient interactions, including video calls and chat messages, are end-to-end encrypted and comply with global healthcare privacy standards." }
    ];

    return (
        <div className="home-container">
            {/* Navbar */}
            <Navbar />

            {/* Hero Section */}
            <header className="hero-section animate-fade-up" id="home">
                {/* Decorative Background Elements */}
                <div className="hero-bg-elements">
                    <FaHeartbeat className="bg-element el-1" />
                    <FaStethoscope className="bg-element el-2" />
                    <FaPlus className="bg-element el-3" />
                    <FaNotesMedical className="bg-element el-4" />
                    <div className="bg-element el-5"></div>
                    <div className="bg-element el-6"></div>
                    <FaNotesMedical className="bg-element el-7" />
                    <FaStethoscope className="bg-element el-8" />
                    <FaHeartbeat className="bg-element el-9" />
                    <FaTooth className="bg-element el-10" />
                    <FaBone className="bg-element el-11" />
                    <FaEye className="bg-element el-12" />
                    <FaVideo className="bg-element el-13" />
                    <FaMapMarkerAlt className="bg-element el-14" />
                    <FaNotesMedical className="bg-element el-15" />
                </div>

                <div className="hero-content-left">
                    <h1 className="hero-title">
                        Find The Right Doctor. Book<br />
                        <span className="green-text">Appointments Instantly.</span>
                    </h1>
                    
                    <p className="hero-subtitle">
                        Easily schedule appointments with the best doctors near you in India's best trusted medical network anytime, anywhere.
                    </p>

                    <form className="hero-search-bar" onSubmit={handleSearchSubmit}>
                        <FiSearch className="hero-search-icon" />
                        <input 
                            type="text" 
                            placeholder="Describe how you feel..." 
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button type="submit" className="btn-search-hero">
                            Start Analysis <FiArrowRight strokeWidth={3} />
                        </button>
                    </form>
                </div>

                <div className="hero-content-right animate-scale-in">
                    <div className="hero-grid">
                        <div className="hero-card doctor-card-large animate-float">
                            <img src="/hero_doctor_teal.png" alt="Dr. Sarah Johnson" />
                            <div className="floating-badge bottom-left-badge">
                                <span className="badge-specialty">DERMATOLOGIST</span>
                                <span className="badge-name">Dr. Sarah Johnson</span>
                            </div>
                        </div>
                        
                        <div className="hero-card doctor-card-small top-right-img animate-float delay-1">
                            <div className="floating-badge top-right-badge">
                                <div className="shield-icon-wrapper">
                                    <RiShieldCheckLine size={20} />
                                </div>
                                <div className="badge-text-group">
                                    <span className="badge-title">VERIFIED SECURE</span>
                                    <span className="badge-subtitle">HIPAA Compliant Care</span>
                                </div>
                            </div>
                            <img src="/hero_doctor_labcoat.png" alt="Doctor" />
                        </div>

                        <div className="hero-card stats-card-dark animate-float delay-2">
                            <div className="stat-group">
                                <h2>150+</h2>
                                <span className="green-label">SPECIALISTS</span>
                            </div>
                            <div className="stat-group">
                                <h2>24/7</h2>
                                <span className="green-label">AVAILABILITY</span>
                            </div>
                            <div className="stat-group">
                                <h2><FaStar className="star-icon" /> 4.9</h2>
                                <span className="green-label">RATING</span>
                            </div>
                        </div>

                        <div className="hero-card doctor-card-small bottom-right-img animate-float delay-3">
                            <img src="/hero_doctor_blue.png" alt="Doctor" />
                        </div>
                    </div>
                </div>
            </header>


            {/* Specialties Section */}
            <section className="section specialties-section" id="specialists">
                <h2 className="section-title animate-fade-up">Consult Doctors Across <span className="green-text">Top Specialties</span></h2>
                <p className="animate-fade-up delay-1" style={{ marginTop: '-40px', marginBottom: '50px', color: '#777' }}>Book appointments for any medical concern with verified specialists.</p>

                <div className="specialties-grid">
                    <div className="specialty-card animate-fade-up delay-1" onClick={() => navigate('/find-doctors#doctors-list', { state: { specialty: 'General Physician' } })}>
                        <div className="specialty-icon"><FaStethoscope size={24} /></div>
                        <h4>General Physician</h4>
                        <p>Diagnosis and treatment for common illnesses and preventive care.</p>
                        <div style={{ marginTop: 'auto', paddingTop: '20px' }}>
                            <span style={{ color: '#27B992', fontSize: '14px', fontWeight: 'bold' }}>
                                Read more &rarr;
                            </span>
                        </div>
                    </div>
                    <div className="specialty-card animate-fade-up delay-2" onClick={() => navigate('/find-doctors#doctors-list', { state: { specialty: 'Dentist' } })}>
                        <div className="specialty-icon"><FaTooth size={24} /></div>
                        <h4>Dentist</h4>
                        <p>Complete dental care including checkups and treatments.</p>
                        <div style={{ marginTop: 'auto', paddingTop: '20px' }}>
                            <span style={{ color: '#27B992', fontSize: '14px', fontWeight: 'bold' }}>
                                Read more &rarr;
                            </span>
                        </div>
                    </div>
                    <div className="specialty-card animate-fade-up delay-3" onClick={() => navigate('/find-doctors#doctors-list', { state: { specialty: 'Cardiologist' } })}>
                        <div className="specialty-icon"><FaHeadSideCough size={24} /></div>
                        <h4>Cardiologist</h4>
                        <p>Expert heart health consultations and comprehensive cardiac care services.</p>
                        <div style={{ marginTop: 'auto', paddingTop: '20px' }}>
                            <span style={{ color: '#27B992', fontSize: '14px', fontWeight: 'bold' }}>
                                Read more &rarr;
                            </span>
                        </div>
                    </div>
                    <div className="specialty-card animate-fade-up delay-4" onClick={() => navigate('/find-doctors#doctors-list', { state: { specialty: 'Orthopedic' } })}>
                        <div className="specialty-icon"><FaBone size={24} /></div>
                        <h4>Orthopedic Care</h4>
                        <p>Specialized care for bone, joint, and muscle conditions.</p>
                        <div style={{ marginTop: 'auto', paddingTop: '20px' }}>
                            <span style={{ color: '#27B992', fontSize: '14px', fontWeight: 'bold' }}>
                                Read more &rarr;
                            </span>
                        </div>
                    </div>
                    <div className="specialty-card animate-fade-up delay-5" onClick={() => navigate('/find-doctors#doctors-list', { state: { specialty: 'Pediatrician' } })}>
                        <div className="specialty-icon"><FaHeartbeat size={24} /></div>
                        <h4>Pediatrician</h4>
                        <p>Medical care for infants and children. And growth</p>
                        <div style={{ marginTop: 'auto', paddingTop: '20px' }}>
                            <span style={{ color: '#27B992', fontSize: '14px', fontWeight: 'bold' }}>
                                Read more &rarr;
                            </span>
                        </div>
                    </div>
                    <div className="specialty-card animate-fade-up delay-6" onClick={() => navigate('/find-doctors#doctors-list', { state: { specialty: 'Dermatologist' } })}>
                        <div className="specialty-icon"><FaHandHoldingMedical size={24} /></div>
                        <h4>Dermatologist</h4>
                        <p>Guided recovery programs for post-surgical patients.</p>
                        <div style={{ marginTop: 'auto', paddingTop: '20px' }}>
                            <span style={{ color: '#27B992', fontSize: '14px', fontWeight: 'bold' }}>
                                Read more &rarr;
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Zynrova AI Section */}
            <section className="section careflow-ai-section">
                <div className="section-header animate-fade-up">
                    <h2 className="careflow-title">Smart Healthcare <span className="green-text">Guided by AI</span></h2>
                    <p className="careflow-subtitle" style={{ marginTop: '-18px' }}>A seamless, AI-powered path from describing symptoms to receiving professional care.</p>
                </div>
                
                <div className="careflow-container">
                    <div className="careflow-grid">
                        <div className="careflow-card animate-fade-up delay-1">
                            <div className="step-number">01</div>
                            <div className="careflow-icon-wrapper icon-blue">
                                <FiMessageCircle />
                            </div>
                            <div className="careflow-content">
                                <h4>Describe Symptoms</h4>
                                <p>Simply tell our AI how you feel in your own words. No medical jargon needed.</p>
                            </div>
                        </div>

                        <div className="careflow-card animate-fade-up delay-2">
                            <div className="step-number">02</div>
                            <div className="careflow-icon-wrapper icon-purple">
                                <FiHelpCircle />
                            </div>
                            <div className="careflow-content">
                                <h4>Clarify Condition</h4>
                                <p>AI asks smart follow-up questions to pinpoint potential health concerns accurately.</p>
                            </div>
                        </div>

                        <div className="careflow-card animate-fade-up delay-3">
                            <div className="step-number">03</div>
                            <div className="careflow-icon-wrapper icon-orange">
                                <FaBrain />
                            </div>
                            <div className="careflow-content">
                                <h4>AI Analysis</h4>
                                <p>Receive an instant recommendation of the best specialist for your specific case.</p>
                            </div>
                        </div>

                        <div className="careflow-card animate-fade-up delay-4">
                            <div className="step-number">04</div>
                            <div className="careflow-icon-wrapper icon-green">
                                <RiStethoscopeLine />
                            </div>
                            <div className="careflow-content">
                                <h4>Book Expert Care</h4>
                                <p>Instantly book an appointment with a top-rated specialist near you or online.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Booking Steps Section */}
            <section className="section booking-section">
                <div className="section-header animate-fade-up">
                    <h2 className="section-title">How Appointment <span className="green-text">Booking Works</span></h2>
                    <p className="careflow-subtitle" style={{ marginTop: '-40px' }}>Simple, fast, and secure. Your health journey starts here.</p>
                </div>

                <div className="booking-columns">
                    <div className="booking-content animate-fade-up">
                        <div className="booking-timeline">
                            <div className="timeline-line"></div>
                            
                            <div className="booking-step-item">
                                <div className="step-number-node">01</div>
                                <div className="booking-step-card">
                                    <div className="step-icon-box"><FaSearch /></div>
                                    <div className="step-text">
                                        <h4>Search Your Specialist</h4>
                                        <p>Find the best doctors near you by name, specialty, or specific symptoms.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="booking-step-item">
                                <div className="step-number-node">02</div>
                                <div className="booking-step-card">
                                    <div className="step-icon-box"><RiCalendarCheckLine /></div>
                                    <div className="step-text">
                                        <h4>Choose Preferred Slot</h4>
                                        <p>Select a convenient date and time that perfectly fits your schedule.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="booking-step-item">
                                <div className="step-number-node">03</div>
                                <div className="booking-step-card">
                                    <div className="step-icon-box"><FaUserMd /></div>
                                    <div className="step-text">
                                        <h4>Confirm & Secure</h4>
                                        <p>Finalize your appointment instantly with secure one-click confirmation.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="booking-step-item">
                                <div className="step-number-node">04</div>
                                <div className="booking-step-card">
                                    <div className="step-icon-box"><RiServiceLine /></div>
                                    <div className="step-text">
                                        <h4>Receive Expert Care</h4>
                                        <p>Visit the clinic or connect via video call for professional medical advice.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="booking-image-side animate-scale-in">
                        <div className="booking-image-wrapper">
                            <div className="image-blob-bg"></div>
                            <div className="booking-image">
                                <img src="/medical_appointment_new.png" alt="Booking Process" />
                            </div>
                            {/* Decorative Floating Badges */}
                            <div className="floating-stat-badge top-stat">
                                <FaCheckCircle />
                                <span>100% Verified</span>
                            </div>
                            <div className="floating-stat-badge bottom-stat">
                                <FiClock />
                                <span>Instant Confirmation</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trusted Partner Section */}
            <section className="section partner-section">
                <div className="image-side">
                    <img src="/healthcare_partner_modern.png" alt="Trusted Partner" />
                </div>
                <div className="content-side">
                    <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '10px' }}>
                        Your Trusted Digital<br />
                        <span className="green-text">Healthcare Partner</span>
                    </h2>
                    <p style={{ color: '#666', lineHeight: '1.6', fontSize: '15px', marginBottom: '30px' }}>
                        We make healthcare simple and accessible by connecting patients with verified doctors across multiple specialties. Book appointments, consult online, or visit clinics — all in one place.
                    </p>
                    <ul className="feature-list">
                        <li><FaCheckCircle className="check-circle" /> Verified & Experienced Doctors</li>
                        <li><FaCheckCircle className="check-circle" /> Easy Appointment Booking</li>
                        <li><FaCheckCircle className="check-circle" /> Online & In-Clinic Consultations</li>
                    </ul>
                    <button 
                        className="btn-primary" 
                        style={{ borderRadius: '50px', padding: '12px 35px' }}
                        onClick={() => navigate('/about')}
                    >
                        Learn More <FaArrowRight style={{ marginLeft: '8px' }} />
                    </button>
                </div>
            </section>

            {/* Not Sure Selection */}
            <section className="section" id="symptoms">
                <h2 className="section-title">Not Sure Which <span className="green-text">Doctor To Visit?</span></h2>
                <p style={{ marginTop: '-40px', marginBottom: '40px', color: '#777' }}>Book appointments for any medical concern with verified specialists.</p>

                <div className="symptoms-grid">
                    <div className="symptom-card">
                        <div className="symptom-icon"><img src="/icons/temperature.png" alt="Fever" style={{ width: '38px', height: '38px', objectFit: 'contain' }} /></div>
                        <div className="symptom-info">
                            <h4>Fever</h4>
                            <p>Consult general physicians for diagnosis and care.</p>
                        </div>
                    </div>
                    <div className="symptom-card">
                        <div className="symptom-icon"><img src="/icons/back-pain.png" alt="Back Pain" style={{ width: '38px', height: '38px', objectFit: 'contain' }} /></div>
                        <div className="symptom-info">
                            <h4>Back Pain</h4>
                            <p>Find orthopedic specialists for relief.</p>
                        </div>
                    </div>
                    <div className="symptom-card">
                        <div className="symptom-icon"><img src="/icons/tooth_attack.png" alt="Tooth Ache" style={{ width: '38px', height: '38px', objectFit: 'contain' }} /></div>
                        <div className="symptom-info">
                            <h4>Tooth Ache</h4>
                            <p>Book trusted dental professionals.</p>
                        </div>
                    </div>
                    <div className="symptom-card">
                        <div className="symptom-icon"><img src="/icons/rashes.png" alt="Skin Allergy" style={{ width: '38px', height: '38px', objectFit: 'contain' }} /></div>
                        <div className="symptom-info">
                            <h4>Skin Allergy</h4>
                            <p>Consult dermatologists for skin issues.</p>
                        </div>
                    </div>
                    <div className="symptom-card">
                        <div className="symptom-icon"><img src="/icons/heart_attack.png" alt="Heart Issues" style={{ width: '38px', height: '38px', objectFit: 'contain' }} /></div>
                        <div className="symptom-info">
                            <h4>Heart Issues</h4>
                            <p>Get expert cardiac consultation.</p>
                        </div>
                    </div>
                    <div className="symptom-card">
                        <div className="symptom-icon"><img src="/icons/leg_pain.png" alt="Joint Pain" style={{ width: '38px', height: '38px', objectFit: 'contain' }} /></div>
                        <div className="symptom-info">
                            <h4>Joint Pain</h4>
                            <p>Orthopedic care for joints and muscles.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Top Doctors Section */}
            <section className="section" id="find-doctors">
                <h2 className="section-title">Top Rated Doctors <span className="green-text">Near You</span></h2>
                <p style={{ marginTop: '-40px', marginBottom: '40px', color: '#777' }}>Book with our highest-rated medical professionals trusted by the community.</p>

                <div className="doctors-grid">
                    <div className="doctor-card">
                        <div className="doctor-img-container">
                            <img src="/dr_priya_sharma.png" alt="Dr. Priya Sharma" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            <div className="rating-badge"><FaStar size={10} /> 4.8</div>
                        </div>
                        <div className="doctor-card-content">
                            <h4>Dr. Priya Sharma</h4>
                            <span className="doctor-specialty">Cardiology Specialist</span>
                            <div className="doctor-meta">
                                <span className="loc-meta">📍 Mumbai</span>
                                <span>12 Years Experience</span>
                            </div>
                            <button className="btn-primary" style={{ width: '100%', borderRadius: '8px', justifyContent: 'center' }} onClick={() => navigate('/doctor-profile', { state: { doctor: { full_name: 'Dr. Priya Sharma', specialization: 'Cardiology Specialist', image: '/dr_priya_sharma.png', location: 'Mumbai', fees: '1500', experience: '12', bio: 'Dr. Priya Sharma is a highly experienced cardiologist specializing in advanced heart care and preventive medicine. She has successfully treated thousands of patients over her 12-year career.' } } })}>Book Appointment</button>
                        </div>
                    </div>
                    <div className="doctor-card">
                        <div className="doctor-img-container">
                            <img src="/dr_amit_patel.png" alt="Dr. Amit Patel" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            <div className="rating-badge"><FaStar size={10} /> 4.9</div>
                        </div>
                        <div className="doctor-card-content">
                            <h4>Dr. Amit Patel</h4>
                            <span className="doctor-specialty">Dental Specialist</span>
                            <div className="doctor-meta">
                                <span className="loc-meta">📍 Delhi</span>
                                <span>8 Years Experience</span>
                            </div>
                            <button className="btn-primary" style={{ width: '100%', borderRadius: '8px', justifyContent: 'center' }} onClick={() => navigate('/doctor-profile', { state: { doctor: { full_name: 'Dr. Amit Patel', specialization: 'Dental Specialist', image: '/dr_amit_patel.png', location: 'Delhi', fees: '850', experience: '8', bio: 'Dr. Amit Patel is known for his gentle touch and expertise in modern dental procedures. He specializes in cosmetic dentistry and restorative treatments.' } } })}>Book Appointment</button>
                        </div>
                    </div>
                    <div className="doctor-card">
                        <div className="doctor-img-container">
                            <img src="/dr_sneha_reddy.png" alt="Dr. Sneha Reddy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            <div className="rating-badge"><FaStar size={10} /> 5.0</div>
                        </div>
                        <div className="doctor-card-content">
                            <h4>Dr. Sneha Reddy</h4>
                            <span className="doctor-specialty">Orthopedic specialist</span>
                            <div className="doctor-meta">
                                <span className="loc-meta">📍 Bangalore</span>
                                <span>15 Years Experience</span>
                            </div>
                            <button className="btn-primary" style={{ width: '100%', borderRadius: '8px', justifyContent: 'center' }} onClick={() => navigate('/doctor-profile', { state: { doctor: { full_name: 'Dr. Sneha Reddy', specialization: 'Orthopedic specialist', image: '/dr_sneha_reddy.png', location: 'Bangalore', fees: '1500', experience: '15', bio: 'Dr. Sneha Reddy is a premier orthopedic surgeon with 15 years of experience in joint replacements and sports injuries. She is dedicated to helping patients regain their mobility.' } } })}>Book Appointment</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="section" id="testimonials">
                <h2 className="section-title animate-fade-up">What Our Patients <span className="green-text">Say</span></h2>
                <p className="animate-fade-up delay-1" style={{ marginTop: '-40px', marginBottom: '40px', color: '#777' }}>Real stories from our healthy community.</p>
                
                <div className="testimonials-wrapper">
                    <div className="testimonials-track">
                        {[1, 2].map(i => (
                            <React.Fragment key={i}>
                                <div className="testimonial-card">
                                    <div className="testimonial-stars"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                                    <p className="testimonial-text">"The AI symptom checker was spot on! It recommended exactly the right specialist when I was feeling uneasy, and the booking was seamless. Truly a lifesaver."</p>
                                    <div className="testimonial-user">
                                        <div className="user-avatar" style={{ background: '#e6fcf5', color: '#27B992' }}>A</div>
                                        <div className="user-info">
                                            <h4>Anita Sharma</h4>
                                            <span>Patient</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="testimonial-card">
                                    <div className="testimonial-stars"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                                    <p className="testimonial-text">"I was skeptical about online consultations, but the experience was fantastic. The doctor was very patient and explained everything in detail. Highly recommend!"</p>
                                    <div className="testimonial-user">
                                        <div className="user-avatar" style={{ background: '#f0f7ff', color: '#007bff' }}>R</div>
                                        <div className="user-info">
                                            <h4>Rajesh Kumar</h4>
                                            <span>Patient</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="testimonial-card">
                                    <div className="testimonial-stars"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                                    <p className="testimonial-text">"Finding a verified specialist used to be a nightmare. Zynrova made it so easy to find a top-rated pediatrician for my daughter in minutes. Outstanding service!"</p>
                                    <div className="testimonial-user">
                                        <div className="user-avatar" style={{ background: '#fff5f5', color: '#ff6b6b' }}>M</div>
                                        <div className="user-info">
                                            <h4>Meera Patel</h4>
                                            <span>Parent</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="testimonial-card">
                                    <div className="testimonial-stars"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                                    <p className="testimonial-text">"Excellent interface! I love how I can see all my appointments and medical follow-ups in one place. It saves me so much time and effort in my busy schedule."</p>
                                    <div className="testimonial-user">
                                        <div className="user-avatar" style={{ background: '#fef3c7', color: '#d97706' }}>V</div>
                                        <div className="user-info">
                                            <h4>Vikram Singh</h4>
                                            <span>Professional</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="testimonial-card">
                                    <div className="testimonial-stars"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                                    <p className="testimonial-text">"The level of professionalism is outstanding. My clinic visit was perfectly organized with zero waiting time. The best healthcare platform I've used so far."</p>
                                    <div className="testimonial-user">
                                        <div className="user-avatar" style={{ background: '#ede9fe', color: '#7c3aed' }}>S</div>
                                        <div className="user-info">
                                            <h4>Sanjay Gupta</h4>
                                            <span>Patient</span>
                                        </div>
                                    </div>
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </section>            {/* Consultation Mode Section */}
            <section className="section consultation-mode-section" id="consultation">
                <div className="consultation-container">
                    <div className="consult-panel online animate-fade-up">
                        <div className="panel-content">
                            <div className="panel-badge">Remote Care</div>
                            <div className="panel-icon"><FaVideo /></div>
                            <h3>Online Consultation</h3>
                            <p>Connect with top specialists from the comfort of your home via secure, high-definition video calls.</p>
                            <ul className="panel-features">
                                <li><FaCheckCircle /> Instant Video Connect</li>
                                <li><FaCheckCircle /> Digital Prescriptions</li>
                                <li><FaCheckCircle /> 24/7 Availability</li>
                            </ul>
                            <button 
                                className="btn-panel online-btn" 
                                onClick={() => {
                                    new Audio('data:audio/wav;base64,UklGRigAAABXQVZFZm10IBAAAAABAAEARKwAAIhAAABAAgAZAFBkYXRhAgAAAAEA').play();
                                    navigate('/find-doctors', { state: { consultationType: 'Online' } });
                                }}
                            >
                                Start Online Call
                            </button>
                        </div>
                        <div className="panel-bg-glow"></div>
                    </div>

                    <div className="consult-panel audio animate-fade-up delay-1">
                        <div className="panel-content">
                            <div className="panel-badge">Voice Call</div>
                            <div className="panel-icon"><FaPhoneAlt /></div>
                            <h3>Audio Consultation</h3>
                            <p>Talk to qualified doctors via high-quality audio calls for quick medical advice and follow-ups.</p>
                            <ul className="panel-features">
                                <li><FaCheckCircle /> Private & Secure</li>
                                <li><FaCheckCircle /> Zero Waiting Time</li>
                                <li><FaCheckCircle /> Budget Friendly</li>
                            </ul>
                            <button 
                                className="btn-panel audio-btn"
                                onClick={() => {
                                    new Audio('data:audio/wav;base64,UklGRigAAABXQVZFZm10IBAAAAABAAEARKwAAIhAAABAAgAZAFBkYXRhAgAAAAEA').play();
                                    navigate('/find-doctors', { state: { consultationType: 'Audio' } });
                                }}
                            >
                                Start Audio Call
                            </button>
                        </div>
                        <div className="panel-bg-glow"></div>
                    </div>

                    <div className="consult-panel clinic animate-fade-up delay-2">
                        <div className="panel-content">
                            <div className="panel-badge">In-Person</div>
                            <div className="panel-icon"><FaMapMarkerAlt /></div>
                            <h3>Clinic Visit</h3>
                            <p>Prefer a face-to-face checkup? Book an appointment at our modern, fully-equipped medical clinics.</p>
                            <ul className="panel-features">
                                <li><FaCheckCircle /> Modern Facilities</li>
                                <li><FaCheckCircle /> Expert Diagnosis</li>
                                <li><FaCheckCircle /> Physical Checkup</li>
                            </ul>
                            <button 
                                className="btn-panel clinic-btn"
                                onClick={() => {
                                    new Audio('data:audio/wav;base64,UklGRigAAABXQVZFZm10IBAAAAABAAEARKwAAIhAAABAAgAZAFBkYXRhAgAAAAEA').play();
                                    navigate('/find-doctors', { state: { consultationType: 'Clinic' } });
                                }}
                            >
                                Find Nearby Clinics
                            </button>
                        </div>
                        <div className="panel-bg-glow"></div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="section" id="faq">
                <h2 className="section-title">Frequently Asked <span className="green-text">Questions</span></h2>
                <div className="faq-list">
                    {faqs.map((item, idx) => (
                        <div className={`faq-item ${openFaq === idx ? 'active' : ''}`} key={idx} onClick={() => toggleFaq(idx)}>
                            <div className="faq-header">
                                {item.q}
                                <span className="faq-icon">{openFaq === idx ? <FaMinus /> : <FaPlus />}</span>
                            </div>
                            <div className="faq-content">
                                {item.a}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Home;
