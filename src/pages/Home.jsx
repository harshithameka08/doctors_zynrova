import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    FaSearch, FaUserMd, FaTooth, FaHeartbeat, FaBone,
    FaNotesMedical, FaEye, FaVideo, FaMapMarkerAlt,
    FaArrowRight, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn,
    FaCheckCircle, FaStar, FaPlus, FaMinus, FaStethoscope, FaHeadSideCough,
    FaHandHoldingMedical
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
        { q: "How do I book an appointment with a doctor?", a: "Simply search for a doctor by specialty or symptom, choose a convenient time slot, and confirm your booking instantly." },
        { q: "Are the doctors on CareFlow verified?", a: "Yes, all doctors on our platform undergo a rigorous verification process, including background checks and medical license validation." },
        { q: "Can I have a video consultation from home?", a: "Absolutely! Many of our specialists offer secure video consultations. Just select the 'Online' option when booking." },
        { q: "How do I know which specialist to visit?", a: "You can use our CareFlow AI symptom analyzer on the home page. Just describe how you feel, and it will recommend the right specialist." }
    ];

    return (
        <div className="home-container">
            {/* Navbar */}
            <Navbar />

            {/* Hero Section */}
            <header className="hero-section animate-fade-up" id="home">
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
                            <img src="/doctor_teal_scrubs.png" alt="Dr. Sarah Johnson" />
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
                            <img src="/doctor_bw_labcoat.png" alt="Doctor" />
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
                            <img src="/doctor_blue_scrubs.png" alt="Doctor" />
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
                        <p>Heart health consultation and cardiac care.</p>
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

            {/* CareFlow AI Section */}
            <section className="section careflow-help-section">
                <h2 className="careflow-title">How CareFlow AI helps you</h2>
                <p className="careflow-subtitle">A seamless path from describing symptoms to receiving professional care.</p>
                
                <div className="careflow-grid">
                    <div className="careflow-item">
                        <div className="careflow-icon-circle icon-blue">
                            <FiMessageCircle />
                        </div>
                        <div className="careflow-text-box">
                            <h4>Tell your problem</h4>
                            <p>Simply describe your symptoms or health concerns in natural language.</p>
                        </div>
                    </div>

                    <div className="careflow-item">
                        <div className="careflow-icon-circle icon-purple">
                            <FiHelpCircle />
                        </div>
                        <div className="careflow-text-box">
                            <h4>Answer simple questions</h4>
                            <p>AI asks specific clarifying questions to understand your condition perfectly.</p>
                        </div>
                    </div>

                    <div className="careflow-item">
                        <div className="careflow-icon-circle icon-teal">
                            <FiUserCheck />
                        </div>
                        <div className="careflow-text-box">
                            <h4>Get recommendations</h4>
                            <p>Receive immediate guidance on which specialist category you should visit.</p>
                        </div>
                    </div>

                    <div className="careflow-item">
                        <div className="careflow-icon-circle icon-green">
                            <RiStethoscopeLine />
                        </div>
                        <div className="careflow-text-box">
                            <h4>Book your care</h4>
                            <p>Browse matched doctors and book a slot instantly for clinic or video visit.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Booking Steps Section */}
            <section className="section booking-section">
                <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '40px' }}>
                    How Appointment <span className="green-text">Booking<br />Works</span>
                </h2>
                <div className="booking-columns">
                    <div className="booking-content">
                        <div className="step-list">
                            <div className="step-item">
                                <div className="step-icon step-icon-1"><FaSearch /></div>
                                <div className="step-info">
                                    <h4>Step 1 – Search Doctor</h4>
                                    <p>Find doctors by speciality, symptom, or name.</p>
                                </div>
                            </div>
                            <div className="step-item">
                                <div className="step-icon step-icon-2"><RiCalendarCheckLine /></div>
                                <div className="step-info">
                                    <h4>Step 2 – Choose Slot</h4>
                                    <p>Select available date and time.</p>
                                </div>
                            </div>
                            <div className="step-item">
                                <div className="step-icon step-icon-3"><FaUserMd /></div>
                                <div className="step-info">
                                    <h4>Step 3 – Book Appointment</h4>
                                    <p>Confirm booking instantly.</p>
                                </div>
                            </div>
                            <div className="step-item">
                                <div className="step-icon step-icon-4"><RiServiceLine /></div>
                                <div className="step-info">
                                    <h4>Step 4 – Get Care</h4>
                                    <p>Consult online or visit clinic.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="booking-image">
                        <img src="/appointment_page.png" alt="Booking Process" />
                    </div>
                </div>
            </section>

            {/* Trusted Partner Section */}
            <section className="section partner-section">
                <div className="image-side">
                    <img src="/health_care_partner_page.png" alt="Trusted Partner" />
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
                <p style={{ marginTop: '-40px', marginBottom: '60px', color: '#777' }}>Book appointments for any medical concern with verified specialists.</p>

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
                <p style={{ marginTop: '-40px', marginBottom: '60px', color: '#777' }}>Book with our highest-rated medical professionals trusted by the community.</p>

                <div className="doctors-grid">
                    <div className="doctor-card">
                        <div className="doctor-img-container">
                            <img src="/dr_sarah_johnson_1.png" alt="Dr. Sarah Johnson" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            <div className="rating-badge"><FaStar size={10} /> 4.8</div>
                        </div>
                        <div className="doctor-card-content">
                            <h4>Dr. Sarah Johnson</h4>
                            <span className="doctor-specialty">Cardiology Specialist</span>
                            <div className="doctor-meta">
                                <span><FaMapMarkerAlt /> New York</span>
                                <span>12 Years Experience</span>
                            </div>
                            <button className="btn-primary" style={{ width: '100%', borderRadius: '8px', justifyContent: 'center' }} onClick={() => navigate('/booking', { state: { doctor: { name: 'Dr. Sarah Johnson', specialty: 'Cardiology Specialist', image: '/dr_sarah_johnson_1.png', location: 'New York', consultation_fee: '150' } } })}>Book Appointment</button>
                        </div>
                    </div>
                    <div className="doctor-card">
                        <div className="doctor-img-container">
                            <img src="/dr_sarah_johnson.png" alt="Dr. Mark Wilson" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            <div className="rating-badge"><FaStar size={10} /> 4.9</div>
                        </div>
                        <div className="doctor-card-content">
                            <h4>Dr. Mark Wilson</h4>
                            <span className="doctor-specialty">Dental Specialist</span>
                            <div className="doctor-meta">
                                <span><FaMapMarkerAlt /> Seattle</span>
                                <span>8 Years Experience</span>
                            </div>
                            <button className="btn-primary" style={{ width: '100%', borderRadius: '8px', justifyContent: 'center' }} onClick={() => navigate('/booking', { state: { doctor: { name: 'Dr. Mark Wilson', specialty: 'Dental Specialist', image: '/dr_sarah_johnson.png', location: 'Seattle', consultation_fee: '850' } } })}>Book Appointment</button>
                        </div>
                    </div>
                    <div className="doctor-card">
                        <div className="doctor-img-container">
                            <img src="/dr_sarah_johnson_2.png" alt="Dr. Emily Jones" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            <div className="rating-badge"><FaStar size={10} /> 5.0</div>
                        </div>
                        <div className="doctor-card-content">
                            <h4>Dr. Emily Jones</h4>
                            <span className="doctor-specialty">Orthopedic specialist</span>
                            <div className="doctor-meta">
                                <span><FaMapMarkerAlt /> Miami</span>
                                <span>15 Years Experience</span>
                            </div>
                            <button className="btn-primary" style={{ width: '100%', borderRadius: '8px', justifyContent: 'center' }} onClick={() => navigate('/booking', { state: { doctor: { name: 'Dr. Emily Jones', specialty: 'Orthopedic specialist', image: '/dr_sarah_johnson_2.png', location: 'Miami', consultation_fee: '150' } } })}>Book Appointment</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="section" id="testimonials">
                <h2 className="section-title animate-fade-up">What Our Patients <span className="green-text">Say</span></h2>
                <p className="animate-fade-up delay-1" style={{ marginTop: '-40px', marginBottom: '60px', color: '#777' }}>Real stories from our healthy community.</p>
                
                <div className="testimonials-wrapper">
                    <div className="testimonials-track">
                        {[1, 2].map(i => (
                            <React.Fragment key={i}>
                                <div className="testimonial-card">
                                    <div className="testimonial-stars"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                                    <p className="testimonial-text">"LuxeService completely transformed our brand perception. Their attention to detail and premium approach is unmatched in the industry."</p>
                                    <div className="testimonial-user">
                                        <div className="user-avatar">R</div>
                                        <div className="user-info">
                                            <h4>Richard James</h4>
                                            <span>CEO, TechCorp</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="testimonial-card">
                                    <div className="testimonial-stars"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                                    <p className="testimonial-text">"The level of care and professionalism displayed by the doctors here is outstanding. I felt heard and well taken care of throughout my visit."</p>
                                    <div className="testimonial-user">
                                        <div className="user-avatar">S</div>
                                        <div className="user-info">
                                            <h4>Sarah Williams</h4>
                                            <span>Patient</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="testimonial-card">
                                    <div className="testimonial-stars"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                                    <p className="testimonial-text">"Booking an appointment was seamless, and the clinic's atmosphere is so calming. Highly recommend this healthcare provider to everyone."</p>
                                    <div className="testimonial-user">
                                        <div className="user-avatar">M</div>
                                        <div className="user-info">
                                            <h4>Michael Brown</h4>
                                            <span>Entrepreneur</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="testimonial-card">
                                    <div className="testimonial-stars"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                                    <p className="testimonial-text">"The doctors are extremely knowledgeable and patient. They took the time to explain everything clearly. Highly satisfied with the service."</p>
                                    <div className="testimonial-user">
                                        <div className="user-avatar">A</div>
                                        <div className="user-info">
                                            <h4>Anjali Gupta</h4>
                                            <span>Software Engineer</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="testimonial-card">
                                    <div className="testimonial-stars"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                                    <p className="testimonial-text">"Excellent experience! The telemedicine feature is a lifesaver. I could consult with a specialist without leaving my house. 5 stars!"</p>
                                    <div className="testimonial-user">
                                        <div className="user-avatar">D</div>
                                        <div className="user-info">
                                            <h4>David Miller</h4>
                                            <span>Freelancer</span>
                                        </div>
                                    </div>
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </section>

            {/* Consultation Mode Section */}
            <section className="section" id="consultation">
                <div className="consultation-banner">
                    <div className="consult-mode-card online">
                        <div className="mode-icon"><FaVideo /></div>
                        <h3>Online Consultation</h3>
                        <p>Secure video calls from home with instant booking and direct prescription delivery.</p>
                        <div className="mode-feature"><FaCheckCircle /> High Definition Video</div>
                        <button 
                            className="btn-mode online-btn" 
                            onClick={() => navigate('/find-doctors', { state: { consultationType: 'Online' } })}
                        >
                            Start Consultation
                        </button>
                    </div>
                    <div className="consult-mode-card clinic">
                        <div className="mode-icon"><FaMapMarkerAlt /></div>
                        <h3>Clinic Visit</h3>
                        <p>Prefer face-to-face? Book an appointment at one of our nearby modern medical clinics.</p>
                        <div className="mode-feature"><FaCheckCircle /> Nearby Medical Facilities</div>

                        <button 
                            className="btn-mode clinic-btn"
                            onClick={() => navigate('/find-doctors', { state: { consultationType: 'Clinic' } })}
                        >
                            Find Clinics
                        </button>
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
