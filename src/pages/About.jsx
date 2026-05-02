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
                    <img src="/about_hero_new.png" alt="Medical Team" />
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
                    <img src="/about_who_we_are_v2.png" alt="Patient-Doctor Interaction" />
                </div>
                <div className="who-content">
                    <h2>Who We <span>Are</span></h2>
                    <p>We are a healthcare technology platform focused on simplifying how patients find doctors, book appointments, and access medical care. Our goal is to remove confusion and create a seamless healthcare experience for everyone.</p>

                    <div className="who-traits-box">
                        <div className="who-trait">
                            <strong>Visionary</strong>
                            <span>Leadership</span>
                        </div>
                        <div className="who-trait">
                            <strong>Smart</strong>
                            <span>Technology</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Different Section */}
            <section className="features-section">
                <h2>What Makes Us <span>Different</span></h2>
                <p>Excellence built into every step of your health journey.</p>

                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon"><FaUserMd /></div>
                        <h4>Verified Medical Network</h4>
                        <p>Every doctor is carefully verified for credentials and experience.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon"><FaSearch /></div>
                        <h4>Smart Discovery</h4>
                        <p>Find doctors by specialty, symptoms, or location effortlessly.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon"><FaCalendarCheck /></div>
                        <h4>Flexible Consultations</h4>
                        <p>Book in-clinic or online consultations with ease.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon"><FaShieldAlt /></div>
                        <h4>Secure & Private</h4>
                        <p>Your health data is protected with industry-grade security.</p>
                    </div>
                </div>
            </section>

            {/* Trusted By Professionals */}
            <section className="trusted-section">
                <h2 className="section-title">Top Rated Doctors <span style={{ color: '#27B992' }}>Near You</span></h2>
                <p style={{ marginTop: '-40px', marginBottom: '40px', color: '#777' }}>Book with our highest-rated medical professionals trusted by the community.</p>

                <div className="trusted-grid">
                    {/* Card 1 */}
                    <div className="doc-card-about">
                        <div className="doc-img-about">
                            <img src="/dr_priya_sharma.png" alt="Dr. Priya Sharma" />
                            <div className="rating-badge"><FaStar size={10} /> 4.8</div>
                        </div>
                        <div className="doc-info-about">
                            <div className="doc-name">Dr. Priya Sharma</div>
                            <div className="doc-spec">Cardiology Specialist</div>
                            <div className="doc-meta">
                                <span>📍 Mumbai</span>
                                <span>12 Years Experience</span>
                            </div>
                            <button className="btn-book-sm" onClick={() => navigate('/doctor-profile', { state: { doctor: { full_name: 'Dr. Priya Sharma', specialization: 'Cardiology Specialist', image: '/dr_priya_sharma.png', location: 'Mumbai', fees: '1500', experience: '12', bio: 'Dr. Priya Sharma is a highly experienced cardiologist specializing in advanced heart care and preventive medicine.' } } })}>Book Appointment</button>
                        </div>
                    </div>
                    {/* Card 2 */}
                    <div className="doc-card-about">
                        <div className="doc-img-about">
                            <img src="/dr_amit_patel.png" alt="Dr. Amit Patel" />
                            <div className="rating-badge"><FaStar size={10} /> 4.9</div>
                        </div>
                        <div className="doc-info-about">
                            <div className="doc-name">Dr. Amit Patel</div>
                            <div className="doc-spec">Dental Specialist</div>
                            <div className="doc-meta">
                                <span>📍 Delhi</span>
                                <span>8 Years Experience</span>
                            </div>
                            <button className="btn-book-sm" onClick={() => navigate('/doctor-profile', { state: { doctor: { full_name: 'Dr. Amit Patel', specialization: 'Dental Specialist', image: '/dr_amit_patel.png', location: 'Delhi', fees: '850', experience: '8', bio: 'Dr. Amit Patel is known for his gentle touch and expertise in modern dental procedures.' } } })}>Book Appointment</button>
                        </div>
                    </div>
                    {/* Card 3 */}
                    <div className="doc-card-about">
                        <div className="doc-img-about">
                            <img src="/dr_sneha_reddy.png" alt="Dr. Sneha Reddy" />
                            <div className="rating-badge"><FaStar size={10} /> 5.0</div>
                        </div>
                        <div className="doc-info-about">
                            <div className="doc-name">Dr. Sneha Reddy</div>
                            <div className="doc-spec">Orthopedic Specialist</div>
                            <div className="doc-meta">
                                <span>📍 Bangalore</span>
                                <span>15 Years Experience</span>
                            </div>
                            <button className="btn-book-sm" onClick={() => navigate('/doctor-profile', { state: { doctor: { full_name: 'Dr. Sneha Reddy', specialization: 'Orthopedic Specialist', image: '/dr_sneha_reddy.png', location: 'Bangalore', fees: '2000', experience: '15', bio: 'Dr. Sneha Reddy is a senior orthopedic specialist focused on sports injuries and joint health.' } } })}>Book Appointment</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="how-it-works">
                <h2 className="section-head-center" style={{ marginBottom: '5px' }}>How It <span style={{ color: '#27B992' }}>Works</span></h2>
                <p style={{ color: '#888', marginTop: '0' }}>A simple path to better health.</p>

                <div className="how-steps">
                    <div className="how-step">
                        <div className="how-step-icon"><FaSearch /></div>
                        <h4>Search Doctor</h4>
                        <p>Find specialized care by doctor or symptom in seconds.</p>
                    </div>
                    <div className="how-step">
                        <div className="how-step-icon"><FaCalendarCheck /></div>
                        <h4>Pick a Time</h4>
                        <p>Compare availability and pick a slot that works for you.</p>
                    </div>
                    <div className="how-step">
                        <div className="how-step-icon"><FaUserMd /></div>
                        <h4>Book & Consult</h4>
                        <p>Consult with confidence in-clinic or online with ease.</p>
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

