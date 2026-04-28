import React from 'react';
import {
    FaArrowLeft, FaCheckCircle, FaStar, FaUserMd,
    FaGlobe, FaVideo, FaGraduationCap, FaMapMarkerAlt,
    FaLock, FaHeartbeat, FaArrowRight, FaShieldAlt
} from 'react-icons/fa';
import { FaCircleDot } from 'react-icons/fa6';
import { useNavigate, useLocation } from 'react-router-dom';
import './DoctorProfile.css';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const DoctorProfile = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { doctor } = location.state || {};

    const profileDoctor = doctor || {
        full_name: 'Dr. James Wilson',
        specialization: 'Cardiologist',
        image: '/dr_sarah_johnson_1.png',
        bio: 'Dr. James Wilson is a world-renowned cardiologist specializing in preventive heart care and complex cardiac conditions. With over 15 years of experience, he combines cutting-edge technology with a compassionate, patient-centered approach to ensure the best outcomes for heart health.'
    };

    return (
        <div className="profile-container">
            {/* Navbar (Duplicated for Consistency in this task) */}
            <Navbar />

            {/* Header Section */}
            <div className="profile-header-area">
                <div className="back-btn-wrapper" onClick={() => navigate('/find-doctors')}>
                    <button className="back-btn"><FaArrowLeft /></button>
                    <span className="back-text">Back to Search</span>
                </div>
                <h1 className="page-title">Doctor Profile</h1>
            </div>

            {/* Main Content Grid */}
            <div className="profile-content">
                {/* Left Column: Info & Bio */}
                <div className="left-column">
                    {/* Basic Info Card */}
                    <div className="profile-card doctor-header-card">
                        <img src="/verified_symbol.png" alt="Verified" className="verified-badge" style={{ background: 'transparent', mixBlendMode: 'normal' }} />
                        <img src={profileDoctor.image} alt={profileDoctor.full_name} className="doc-profile-img" />
                        <div className="doc-info-main">
                            <h2>{profileDoctor.full_name}</h2>
                            <span className="specialty-text">{profileDoctor.specialization}</span>
                            <div className="rating-row">
                                <div className="stars">
                                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar style={{ color: '#ffd700' }} /> {/* 4 full + maybe half? Image shows 4.5 but stars look full. Keeping simpler */}
                                </div>
                                <span className="rating-count">4.9 (120+ Patient Reviews)</span>
                            </div>
                            <div className="badges-row">
                                <span className="status-badge">Available Today</span>
                                <span className="exp-badge">15+ Years Experience</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="stats-grid">
                        <div className="stat-box">
                            <div className="stat-icon"><img src="/Group heart.png" alt="icon" style={{ width: '34px' }} /></div>
                            <div className="stat-text">
                                <h5>Experience</h5>
                                <p>15 Yrs</p>
                            </div>
                        </div>
                        <div className="stat-box">
                            <div className="stat-icon"><img src="/Group heart.png" alt="icon" style={{ width: '34px' }} /></div>
                            <div className="stat-text">
                                <h5>Languages</h5>
                                <p>English</p>
                            </div>
                        </div>
                        <div className="stat-box">
                            <div className="stat-icon"><img src="/Group heart.png" alt="icon" style={{ width: '34px' }} /></div>
                            <div className="stat-text">
                                <h5>Consultation</h5>
                                <p>Both</p>
                            </div>
                        </div>
                        <div className="stat-box">
                            <div className="stat-icon"><img src="/Group heart.png" alt="icon" style={{ width: '34px' }} /></div>
                            <div className="stat-text">
                                <h5>Rating</h5>
                                <p>4.9/5.0</p>
                            </div>
                        </div>
                    </div>

                    {/* About Doctor */}
                    <div className="profile-card">
                        <h3 className="section-header">About Doctor</h3>
                        <p className="about-text">
                            {profileDoctor.bio}
                        </p>
                    </div>

                    {/* Education & Experience */}
                    <div className="profile-card education-card">
                        <h3 className="section-header">Education & Experience</h3>
                        <div className="timeline">
                            <div className="timeline-item">
                                <div className="timeline-icon"><FaCircleDot size={22} color="var(--primary-color)" /></div>
                                <div className="timeline-content">
                                    <h4>Doctor Of Medicine</h4>
                                    <p>Harvard Medical School • 2008</p>
                                </div>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-icon"><FaCircleDot size={22} color="var(--primary-color)" /></div>
                                <div className="timeline-content">
                                    <h4>Residency In Cardiology</h4>
                                    <p>Johns Hopkins Hospital • 2012</p>
                                </div>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-icon"><FaCircleDot size={22} color="var(--primary-color)" /></div>
                                <div className="timeline-content">
                                    <h4>Fellowship In Interventional Cardiology</h4>
                                    <p>Mayo Clinic • 2015</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Services & Specialization */}
                    <div className="profile-card">
                        <h3 className="section-header">Services & Specialization</h3>
                        <div className="tags-container">
                            <span className="service-tag">Echocardiogram</span>
                            <span className="service-tag">Stress Testing</span>
                            <span className="service-tag">Cardiac Rehabilitation</span>
                            <span className="service-tag">Hypertension Management</span>
                        </div>
                    </div>

                    <div className="profile-card clinic-location-card">
                        <h3 className="section-header">Clinic & Location</h3>
                        <div className="clinic-card-content">
                            <div className="clinic-info">
                                <h4>Heart & Vascular Center</h4>
                                <div className="clinic-address">
                                    <FaMapMarkerAlt style={{ marginTop: '3px', color: '#27B992' }} />
                                    <span>452 Medical Parkway, Suite 100, New York</span>
                                </div>
                                <div className="clinic-hours">
                                    Consultation Hours<br />
                                    <strong>Mon - Fri, 09:00 AM - 06:00 PM</strong>
                                </div>
                            </div>
                            <div className="clinic-map">
                                <img src="/map.png" alt="Map Location" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Booking & Details */}
                <div className="right-column">
                    {/* Booking Widget */}
                    <div className="booking-card">
                        <div className="booking-header">
                            <span>Consultation Fee</span>
                            <span className="booking-price">₹80</span>
                        </div>

                        <div className="date-section">
                            <div className="date-header">
                                Select Date
                                <span className="view-cal">View Calendar</span>
                            </div>
                            <div className="dates-row">
                                <div className="date-item active">
                                    <h5>Mon</h5><p>12 Feb</p>
                                </div>
                                <div className="date-item">
                                    <h5>Tue</h5><p>13 Feb</p>
                                </div>
                                <div className="date-item">
                                    <h5>Wed</h5><p>14 Feb</p>
                                </div>
                                <div className="date-item">
                                    <h5>Thu</h5><p>15 Feb</p>
                                </div>
                            </div>
                        </div>

                        <div className="slots-section">
                            <div className="date-header">Available Slots</div>
                            <div className="slots-grid">
                                <div className="time-slot">09:00 AM</div>
                                <div className="time-slot">09:30 AM</div>
                                <div className="time-slot">10:00 AM</div>
                                <div className="time-slot">10:30 AM</div>
                                <div className="time-slot">09:00 AM</div>
                                <div className="time-slot">09:30 AM</div>
                                <div className="time-slot">10:00 AM</div>
                                <div className="time-slot">10:30 AM</div>
                            </div>
                        </div>

                        <button className="btn-book-lg" onClick={() => navigate('/booking', { state: { doctor: { ...profileDoctor, consultation_fee: '₹80', location: 'Heart & Vascular Center' } } })}>Book Appointment</button>
                        <button className="btn-cancel">Cancel</button>

                        <div className="secure-note">
                            <FaLock /> Encrypted & Secure Booking
                        </div>
                    </div>

                    {/* Need Help */}
                    <div className="help-card">
                        <h3>Need Help?</h3>
                        <p>Our health advisors are here to assist you with your booking.</p>
                        <span className="chat-link">Chat With Us</span>
                    </div>

                    {/* Patient Reviews Widget */}
                    <div className="profile-card">
                        <div className="reviews-section-header">
                            <h3 className="section-header" style={{ margin: 0 }}>Patient Reviews</h3>
                            <span className="view-all-reviews">View All</span>
                        </div>

                        <div className="review-card">
                            <div className="review-user-header">
                                <div className="review-avatar">J</div>
                                <div className="review-meta">
                                    <h5>John Doe</h5>
                                    <span>Visited for Online Consultation</span>
                                </div>
                                <div className="review-stars">
                                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                                </div>
                            </div>
                            <p className="review-text">"Dr. Mitchell is incredibly thorough and explained everything clearly."</p>
                        </div>

                        <div className="review-card">
                            <div className="review-user-header">
                                <div className="review-avatar">J</div>
                                <div className="review-meta">
                                    <h5>John Doe</h5>
                                    <span>Visited for Online Consultation</span>
                                </div>
                                <div className="review-stars">
                                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                                </div>
                            </div>
                            <p className="review-text">"Dr. Mitchell is incredibly thorough and explained everything clearly."</p>
                        </div>

                        <div className="review-card">
                            <div className="review-user-header">
                                <div className="review-avatar">J</div>
                                <div className="review-meta">
                                    <h5>John Doe</h5>
                                    <span>Visited for Online Consultation</span>
                                </div>
                                <div className="review-stars">
                                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                                </div>
                            </div>
                            <p className="review-text">"Dr. Mitchell is incredibly thorough and explained everything clearly."</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Trust Banner */}
            <div className="trust-banner" style={{ maxWidth: '1300px', margin: '0 auto 50px' }}>
                <div className="trust-item">
                    <div className="trust-icon-box"><FaShieldAlt /></div> {/* Using ShieldAlt for verified */}
                    <h4>Verified Doctors Only</h4>
                    <p>Stringent background checks for your peace of mind.</p>
                </div>
                <div className="trust-item">
                    <div className="trust-icon-box"><FaCheckCircle /></div>
                    <h4>Instant Booking</h4>
                    <p>Book slots in real-time with zero waiting time.</p>
                </div>
                <div className="trust-item">
                    <div className="trust-icon-box"><FaHeartbeat /></div>
                    <h4>Secure Medical Data</h4>
                    <p>Your privacy is our priority with HIPAA compliance.</p>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default DoctorProfile;
