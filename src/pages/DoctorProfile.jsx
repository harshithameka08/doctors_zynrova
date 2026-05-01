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
import { useChat } from '../context/ChatContext';

const DoctorProfile = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { openChatWithMsg } = useChat();
    const { doctor } = location.state || {};
    const [showReviewsModal, setShowReviewsModal] = React.useState(false);
    const [showCalendar, setShowCalendar] = React.useState(false);

    const allReviews = [
        { id: 1, name: 'John Doe', type: 'Online Consultation', rating: 5, text: '"Dr. Mitchell is incredibly thorough and explained everything clearly."' },
        { id: 2, name: 'Sarah Smith', type: 'In-Clinic Visit', rating: 5, text: '"Excellent experience. The staff was very professional and the wait time was minimal."' },
        { id: 3, name: 'Michael Chen', type: 'Heart Checkup', rating: 4, text: '"Very knowledgeable doctor. Took the time to answer all my questions about heart health."' },
        { id: 4, name: 'Emily Davis', type: 'Follow-up', rating: 5, text: '"I appreciate the personalized care and the detailed follow-up plan provided."' },
        { id: 5, name: 'Robert Wilson', type: 'Online Consultation', rating: 5, text: '"Very convenient and professional service. Highly recommend for heart related issues."' },
        { id: 6, name: 'Lisa Anderson', type: 'In-Clinic Visit', rating: 4, text: '"The clinic is very clean and the doctor is very patient-centric."' },
    ];

    const generateDates = () => {
        const dates = [];
        const today = new Date();
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        
        for (let i = 0; i < 7; i++) {
            const d = new Date();
            d.setDate(today.getDate() + i);
            dates.push({
                day: days[d.getDay()],
                date: `${d.getDate().toString().padStart(2, '0')} ${months[d.getMonth()]}`,
                full: d
            });
        }
        return dates;
    };

    const availableDates = generateDates();
    const [selectedDate, setSelectedDate] = React.useState(availableDates[0].date);
    const [selectedSlot, setSelectedSlot] = React.useState('');

    const timeSlots = [
        '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM',
        '11:00 AM', '11:30 AM', '02:00 PM', '02:30 PM',
        '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM'
    ];

    const isTimeInPast = (timeStr, dateStr) => {
        const today = new Date();
        const todayStr = `${today.getDate().toString().padStart(2, '0')} ${['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][today.getMonth()]}`;
        
        if (dateStr !== todayStr) return false;

        const now = new Date();
        const [time, modifier] = timeStr.split(' ');
        let [hours, minutes] = time.split(':');
        hours = parseInt(hours);
        minutes = parseInt(minutes);

        if (modifier === 'PM' && hours < 12) hours += 12;
        if (modifier === 'AM' && hours === 12) hours = 0;

        const slotTime = new Date();
        slotTime.setHours(hours, minutes, 0, 0);

        return slotTime < now;
    };

    // Auto-select first valid slot
    React.useEffect(() => {
        const firstValid = timeSlots.find(slot => !isTimeInPast(slot, selectedDate));
        if (firstValid && (!selectedSlot || isTimeInPast(selectedSlot, selectedDate))) {
            setSelectedSlot(firstValid);
        }
    }, [selectedDate]);

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
                                <span className="exp-badge">{profileDoctor.experience || 10}+ Years Experience</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="stats-grid">
                        <div className="stat-box">
                            <div className="stat-icon"><img src="/Group heart.png" alt="icon" style={{ width: '34px' }} /></div>
                            <div className="stat-text">
                                <h5>Experience</h5>
                                <p>{profileDoctor.experience || 10} Yrs</p>
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
                                    <span>Plot No. 12, Attapur Main Rd, Hyderabad, Telangana 500048</span>
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
                            <span className="booking-price">₹{profileDoctor.fees || 800}</span>
                        </div>

                        <div className="date-section">
                            <div className="date-header">
                                Select Date
                                <span className="view-cal" onClick={() => setShowCalendar(true)}>View Calendar</span>
                            </div>
                            <div className="dates-row">
                                {availableDates.map((item) => (
                                    <div 
                                        key={item.date}
                                        className={`date-item ${selectedDate === item.date ? 'active' : ''}`}
                                        onClick={() => setSelectedDate(item.date)}
                                    >
                                        <h5>{item.day}</h5>
                                        <p>{item.date}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="slots-section">
                            <div className="date-header">Available Slots</div>
                            <div className="slots-grid">
                                {timeSlots.map((slot) => {
                                    const isPast = isTimeInPast(slot, selectedDate);
                                    return (
                                        <div 
                                            key={slot}
                                            className={`time-slot ${selectedSlot === slot ? 'active' : ''}${isPast ? ' disabled' : ''}`}
                                            onClick={() => !isPast && setSelectedSlot(slot)}
                                        >
                                            {slot}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <button 
                            className="btn-book-lg" 
                            onClick={() => navigate('/booking', { 
                                state: { 
                                    doctor: { 
                                        ...profileDoctor, 
                                        consultation_fee: `₹${profileDoctor.fees || 800}`, 
                                        location: 'Heart & Vascular Center',
                                        appointmentDate: selectedDate,
                                        appointmentTime: selectedSlot
                                    } 
                                } 
                            })}
                        >
                            Book Appointment
                        </button>
                        <button className="btn-cancel" onClick={() => navigate('/find-doctors')}>Cancel</button>

                        <div className="secure-note">
                            <FaLock /> Encrypted & Secure Booking
                        </div>
                    </div>

                    {/* Need Help */}
                    <div className="help-card">
                        <h3>Need Help?</h3>
                        <p>Our health advisors are here to assist you with your booking.</p>
                        <span className="chat-link" style={{ cursor: 'pointer' }} onClick={() => openChatWithMsg(`I need help booking an appointment with ${profileDoctor.full_name}`)}>Chat With Us</span>
                    </div>

                    {/* Patient Reviews Widget */}
                    <div className="profile-card">
                        <div className="reviews-section-header">
                            <h3 className="section-header" style={{ margin: 0 }}>Patient Reviews</h3>
                            <span className="view-all-reviews" onClick={() => setShowReviewsModal(true)} style={{ cursor: 'pointer' }}>View All</span>
                        </div>

                        {allReviews.slice(0, 3).map(review => (
                            <div className="review-card" key={review.id}>
                                <div className="review-user-header">
                                    <div className="review-avatar">{review.name[0]}</div>
                                    <div className="review-meta">
                                        <h5>{review.name}</h5>
                                        <span>Visited for {review.type}</span>
                                    </div>
                                    <div className="review-stars">
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar key={i} color={i < review.rating ? "orange" : "#ddd"} />
                                        ))}
                                    </div>
                                </div>
                                <p className="review-text">{review.text}</p>
                            </div>
                        ))}
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

            {/* Reviews Modal */}
            {showReviewsModal && (
                <div className="reviews-modal-overlay">
                    <div className="reviews-modal-card">
                        <div className="modal-header">
                            <h3>All Patient Reviews</h3>
                            <button className="close-modal-btn" onClick={() => setShowReviewsModal(false)}>&times;</button>
                        </div>
                        <div className="modal-body">
                            {allReviews.map(review => (
                                <div className="review-card" key={review.id}>
                                    <div className="review-user-header">
                                        <div className="review-avatar">{review.name[0]}</div>
                                        <div className="review-meta">
                                            <h5>{review.name}</h5>
                                            <span>Visited for {review.type}</span>
                                        </div>
                                        <div className="review-stars">
                                            {[...Array(5)].map((_, i) => (
                                                <FaStar key={i} color={i < review.rating ? "orange" : "#ddd"} />
                                            ))}
                                        </div>
                                    </div>
                                    <p className="review-text">{review.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
            
            {/* Calendar Modal */}
            {showCalendar && (
                <div className="reviews-modal-overlay">
                    <div className="reviews-modal-card">
                        <div className="modal-header">
                            <h3>Select Appointment Date</h3>
                            <button className="close-modal-btn" onClick={() => setShowCalendar(false)}>&times;</button>
                        </div>
                        <div className="modal-body">
                            <p style={{ fontSize: '14px', color: '#666', marginBottom: '20px' }}>Please select a date from the next 30 days:</p>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '15px' }}>
                                {[...Array(30)].map((_, i) => {
                                    const d = new Date();
                                    d.setDate(new Date().getDate() + i);
                                    const dateStr = `${d.getDate().toString().padStart(2, '0')} ${['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][d.getMonth()]}`;
                                    const dayName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][d.getDay()];
                                    return (
                                        <div 
                                            key={dateStr}
                                            className={`date-item ${selectedDate === dateStr ? 'active' : ''}`}
                                            style={{ padding: '15px 5px' }}
                                            onClick={() => {
                                                setSelectedDate(dateStr);
                                                setShowCalendar(false);
                                            }}
                                        >
                                            <h5 style={{ margin: 0, fontSize: '11px' }}>{dayName}</h5>
                                            <p style={{ margin: 0, fontSize: '14px', fontWeight: '700' }}>{dateStr}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default DoctorProfile;
