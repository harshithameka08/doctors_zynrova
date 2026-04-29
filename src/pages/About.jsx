import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
    FaArrowRight, FaHeartbeat, FaCheckCircle, FaSearch, FaCalendarCheck, 
    FaShieldAlt, FaUserMd, FaBone, FaBriefcase, FaStar, FaStethoscope 
} from 'react-icons/fa';
import Footer from '../components/Footer';
import './About.css';
import { FaHeartbeat as LogoIcon } from 'react-icons/fa';
import Navbar from '../components/Navbar';

const CountUp = ({ end, duration = 2000, suffix = "" }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime = null;
        let animationFrame = null;

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);
            
            // Easing function (easeOutQuad)
            const easeOut = 1 - (1 - percentage) * (1 - percentage);
            
            const currentCount = easeOut * end;
            setCount(currentCount);

            if (percentage < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, [end, duration]);

    return (
        <h3>
            {Number.isInteger(end) 
                ? Math.floor(count).toLocaleString() 
                : count.toFixed(1)}
            {suffix}
        </h3>
    );
};

const About = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('Vision');

    return (
        <div className="about-page">
            {/* Navbar */}
            <Navbar />

            {/* Hero Section */}
            <section className="about-hero">
                <div className="about-hero-content">
                    <h1>Modern Healthcare,<br />Designed <span>Around You</span></h1>
                    <p>A trusted platform that connects patients with verified doctors, making appointments and consultations simple, fast, and reliable.</p>
                    <button className="btn-primary-about" onClick={() => navigate('/find-doctors')}>Find Doctors</button>
                </div>
                <div className="about-hero-image">
                    <img src="/about_image_1.png" alt="Doctors Team" />
                </div>
            </section>

            {/* Stats Section */}
            <section className="stats-section">
                <div className="stat-card">
                    <div className="stat-icon-circle"><FaUserMd /></div>
                    <CountUp end={50000} suffix="+" />
                    <p>Patients Served</p>
                </div>
                <div className="stat-card">
                    <div className="stat-icon-circle"><FaBriefcase /></div>
                    <CountUp end={2000} suffix="+" />
                    <p>Verified Doctors</p>
                </div>
                <div className="stat-card">
                    <div className="stat-icon-circle"><FaStethoscope /></div>
                    <CountUp end={25} suffix="+" />
                    <p>Medical Specialties</p>
                </div>
                <div className="stat-card">
                    <div className="stat-icon-circle"><FaStar /></div>
                    <CountUp end={4.7} suffix="★" duration={2500} />
                    <p>Average Rating</p>
                </div>
            </section>

            {/* Who We Are */}
            <section className="who-we-are">
                <div className="who-image">
                    <img src="/about_image_2.png" alt="Elderly Patient with Doctor" />
                </div>
                <div className="who-content">
                    <h2>Who We <span>Are</span></h2>
                    <p>We are a healthcare technology platform focused on simplifying how patients find doctors, book appointments, and access medical care. Our goal is to remove confusion and create a seamless healthcare experience for everyone.</p>

                    <div className="who-tabs">
                        <div className={`who-tab ${activeTab === 'Vision' ? 'active' : ''}`} onClick={() => setActiveTab('Vision')}>Vision</div>
                        <div className={`who-tab ${activeTab === 'Goal' ? 'active' : ''}`} onClick={() => setActiveTab('Goal')}>Goal</div>
                    </div>
                    {/* Content could change based on tab, but static text used for visual match */}
                </div>
            </section>

            {/* Different Section */}
            <section className="features-section">
                <h2>What Makes Us <span>Different</span></h2>
                <p>Excellence built into every step of your health journey.</p>

                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon"><img src="/cardiologist.png" alt="icon" style={{ width: '38px', height: '38px', objectFit: 'contain' }} /></div>
                        <h4>Verified Medical Network</h4>
                        <p>Every doctor is carefully verified for credentials and experience.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon"><img src="/cardiologist.png" alt="icon" style={{ width: '38px', height: '38px', objectFit: 'contain' }} /></div>
                        <h4>Smart Discovery</h4>
                        <p>Find doctors by specialty, symptoms, or location effortlessly.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon"><img src="/cardiologist.png" alt="icon" style={{ width: '38px', height: '38px', objectFit: 'contain' }} /></div>
                        <h4>Flexible Consultations</h4>
                        <p>Book in-clinic or online consultations with ease.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon"><img src="/cardiologist.png" alt="icon" style={{ width: '38px', height: '38px', objectFit: 'contain' }} /></div>
                        <h4>Secure & Private</h4>
                        <p>Your health data is protected with industry-grade security.</p>
                    </div>
                </div>
            </section>

            {/* Trusted By Professionals */}
            <section className="trusted-section">
                <h2 className="trusted-title">Trusted By <span>Professionals</span></h2>
                <p style={{ color: '#888', marginBottom: '40px' }}>Connecting patients with the top medical minds.</p>

                <div className="trusted-grid">
                    {/* Card 1 */}
                    <div className="doc-card-about">
                        <div className="doc-img-about">
                            <img src="/dr_sarah_johnson.png" alt="Dr Sarah" />
                            <div className="verified-badge">4.5 ★</div>
                        </div>
                        <div className="doc-info-about">
                            <div className="doc-name">Dr. Sarah Johnson</div>
                            <div className="doc-spec">Cardiology Specialist</div>
                            <div className="doc-meta">
                                <span>📍 New York</span>
                                <span>12 Years Experience</span>
                            </div>
                            <button className="btn-book-sm" onClick={() => navigate('/booking', { state: { doctor: { name: 'Dr. Sarah Johnson', specialty: 'Cardiology Specialist', image: '/dr_sarah_johnson.png', location: 'New York', consultation_fee: '150' } } })}>Book Appointment</button>
                        </div>
                    </div>
                    {/* Card 2 */}
                    <div className="doc-card-about">
                        <div className="doc-img-about">
                            <img src="/dr_sarah_johnson_1.png" alt="Dr James" />
                            <div className="verified-badge">4.9 ★</div>
                        </div>
                        <div className="doc-info-about">
                            <div className="doc-name">Dr. James Wilson</div>
                            <div className="doc-spec">Dermatology Expert</div>
                            <div className="doc-meta">
                                <span>📍 London</span>
                                <span>15 Years Experience</span>
                            </div>
                            <button className="btn-book-sm" onClick={() => navigate('/booking', { state: { doctor: { name: 'Dr. James Wilson', specialty: 'Dermatology Expert', image: '/dr_sarah_johnson_1.png', location: 'London', consultation_fee: '180' } } })}>Book Appointment</button>
                        </div>
                    </div>
                    {/* Card 3 */}
                    <div className="doc-card-about">
                        <div className="doc-img-about">
                            <img src="/dr_sarah_johnson_2.png" alt="Dr Emily" />
                            <div className="verified-badge">4.6 ★</div>
                        </div>
                        <div className="doc-info-about">
                            <div className="doc-name">Dr. Emily Davis</div>
                            <div className="doc-spec">Pediatric Specialist</div>
                            <div className="doc-meta">
                                <span>📍 Chicago</span>
                                <span>10 Years Experience</span>
                            </div>
                            <button className="btn-book-sm" onClick={() => navigate('/booking', { state: { doctor: { name: 'Dr. Emily Davis', specialty: 'Pediatric Specialist', image: '/dr_sarah_johnson_2.png', location: 'Chicago', consultation_fee: '130' } } })}>Book Appointment</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="how-it-works">
                <h2 className="section-head-center">How It <span style={{ color: '#27B992' }}>Works</span></h2>
                <p style={{ color: '#888' }}>A simple path to better health.</p>

                <div className="how-steps">
                    <div className="how-step">
                        <img src="/orthopedic.png" alt="icon" style={{ width: '36px', height: '36px', objectFit: 'contain' }} className="step-icon-img" />
                        <h4>Search Doctor Or Symptom</h4>
                        <p>Find specialized care in seconds.</p>
                    </div>
                    <div className="how-step">
                        <img src="/orthopedic.png" alt="icon" style={{ width: '36px', height: '36px', objectFit: 'contain' }} className="step-icon-img" />
                        <h4>Compare Availability</h4>
                        <p>Pick a time that works for you.</p>
                    </div>
                    <div className="how-step">
                        <img src="/orthopedic.png" alt="icon" style={{ width: '36px', height: '36px', objectFit: 'contain' }} className="step-icon-img" />
                        <h4>Book & Consult</h4>
                        <p>Consult with confidence and ease.</p>
                    </div>
                </div>
            </section>

            {/* Safety & Compliance */}
            <div className="safety-section">
                <div className="safety-icon">🚨</div>
                <div>
                    <h4 style={{ marginBottom: '15px', fontSize: '18px' }}>Safety & Compliance</h4>
                    <div className="safety-grid">
                        <div className="safety-item"><FaCheckCircle className="check-icon" /> Secure Payments Encrypted</div>
                        <div className="safety-item"><FaCheckCircle className="check-icon" /> Data Privacy Compliance</div>
                        <div className="safety-item"><FaCheckCircle className="check-icon" /> Verified Medical Profiles</div>
                        <div className="safety-item"><FaCheckCircle className="check-icon" /> Transparent Patient Reviews</div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default About;

