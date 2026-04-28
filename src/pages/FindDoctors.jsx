import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import {
    FaSearch, FaMapMarkerAlt, FaVideo, FaStar, FaFilter,
    FaCheckCircle, FaHeart, FaUserMd, FaShieldAlt, FaRegStar, FaBriefcase
} from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';
import api from '../lib/api';
import './FindDoctors.css';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { FaHeartbeat, FaArrowRight } from 'react-icons/fa';

const FindDoctors = () => {
    const navigate = useNavigate();

    // Mock data fallback for when backend is unavailable
    const mockDoctors = [
        {
            id: 1,
            full_name: 'Dr. James Wilson',
            image: '/Ellipse 4031.png',
            specialization: 'General Physician',
            bio: 'Dr. James Wilson is a dedicated General Physician with a focus on comprehensive health care.'
        },
        {
            id: 2,
            full_name: 'Dr. David Kim',
            image: '/Ellipse 4032.png',
            specialization: 'General Physician',
            bio: 'Dr. David Kim brings a wealth of knowledge to his practice as a General Physician.'
        },
        {
            id: 3,
            full_name: 'Dr. Robert Fox',
            image: '/Ellipse 4033.png',
            specialization: 'General Physician',
            bio: 'Dr. Robert Fox is known for his thorough examinations and friendly demeanor.'
        },
        {
            id: 4,
            full_name: 'Dr. Linda Gregory',
            image: '/Ellipse 4034.png',
            specialization: 'General Physician',
            bio: 'Dr. Linda Gregory has a strong background in family medicine and preventive care.'
        },
        {
            id: 5,
            full_name: 'Dr. Sarah Mitchell',
            image: '/Ellipse 4035.png',
            specialization: 'General Physician',
            bio: 'Dr. Sarah Mitchell specializes in preventive care and comprehensive adult medicine.'
        },
        {
            id: 6,
            full_name: 'Dr. Priya Sharma',
            image: '/Ellipse 4031.png',
            specialization: 'Cardiologist',
            bio: 'Dr. Priya Sharma is a leading Cardiologist with 12 years of experience in advanced heart and vascular care.'
        },
        {
            id: 7,
            full_name: 'Dr. Arjun Mehta',
            image: '/Ellipse 4032.png',
            specialization: 'Cardiologist',
            bio: 'Dr. Arjun Mehta specializes in interventional cardiology, offering cutting-edge diagnostics and treatment.'
        },
        {
            id: 8,
            full_name: 'Dr. Neha Kapoor',
            image: '/Ellipse 4033.png',
            specialization: 'Dentist',
            bio: 'Dr. Neha Kapoor is a skilled Dentist offering comprehensive oral health treatments from routine cleaning to complex surgery.'
        },
        {
            id: 9,
            full_name: 'Dr. Rahul Verma',
            image: '/Ellipse 4034.png',
            specialization: 'Dentist',
            bio: 'Dr. Rahul Verma provides personalized dental care with a focus on patient comfort and advanced treatment methods.'
        },
        {
            id: 10,
            full_name: 'Dr. Suresh Patel',
            image: '/Ellipse 4035.png',
            specialization: 'Orthopedic',
            bio: 'Dr. Suresh Patel is an expert Orthopedic surgeon specializing in musculoskeletal injuries, joint replacement, and bone health.'
        },
        {
            id: 11,
            full_name: 'Dr. Anjali Singh',
            image: '/Ellipse 4031.png',
            specialization: 'Orthopedic',
            bio: 'Dr. Anjali Singh offers specialist care for sports injuries, spinal issues, and complex orthopedic conditions.'
        },
    ];

    const location = useLocation();
    const incomingSpecialty = location.state?.specialty || null;

    const allSpecialties = [
        'General Physician', 'Dentist', 'Cardiologist', 'Orthopedic', 
        'Pediatrician', 'Dermatologist', 'Gynecologist', 'Neurologist', 
        'Psychiatrist', 'Endocrinologist', 'Ophthalmologist', 'ENT Specialist'
    ];

    const [selectedSpecialties, setSelectedSpecialties] = useState(
        incomingSpecialty ? [incomingSpecialty] : ['General Physician']
    );

    const toggleSpecialty = (specialty) => {
        setSelectedSpecialties(prev =>
            prev.includes(specialty)
                ? prev.filter(s => s !== specialty)
                : [...prev, specialty]
        );
    };

    const clearFilters = () => {
        setSelectedSpecialties(['General Physician']);
    };

    // Fetch doctors with TanStack Query, fallback to mock data on error
    const { data: doctors, isLoading, isError } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            const { data } = await api.get('/doctors/');
            return data;
        },
        // Use mock data as fallback when API fails
        placeholderData: mockDoctors,
        retry: 1
    });

    // Use mock data if API fails
    const allDoctors = isError ? mockDoctors : (doctors || mockDoctors);

    // Filter by selected specialties
    const displayDoctors = selectedSpecialties.length > 0
        ? allDoctors.filter(d => selectedSpecialties.includes(d.specialization))
        : allDoctors;

    if (isLoading) {
        return (
            <div className="find-doctors-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <div style={{ fontSize: '24px', color: '#2EB8A1' }}>Loading Doctors...</div>
            </div>
        );
    }

    return (
        <div className="find-doctors-container">
            {/* Navbar */}
            <Navbar />

            {/* Header Section */}
            <header className="finder-header">
                <h1 className="finder-title">Find Doctors <span style={{ color: '#27B992' }}>Near You</span></h1>
                <p className="finder-subtitle">Search doctors by speciality, symptoms, or location with ease.Get<br />expert medical care anytime, anywhere you need it.</p>

                <div className="finder-search-box">
                    <div className="finder-search-field">
                        <label>Search</label>
                        <div className="finder-input-wrapper">
                            <FaSearch />
                            <input type="text" placeholder="Doctors, specialty or symptoms..." />
                        </div>
                    </div>
                    <div className="finder-search-field">
                        <label>Location</label>
                        <div className="finder-input-wrapper">
                            <FaMapMarkerAlt />
                            <input type="text" placeholder="Near by clinic, hospitals..." />
                        </div>
                    </div>
                    <div className="finder-search-field">
                        <label>Consultation Type</label>
                        <div className="finder-input-wrapper">
                            <FaVideo />
                            <select>
                                <option>Online</option>
                                <option>Clinic</option>
                            </select>
                        </div>
                    </div>
                    <button className="finder-btn">Search</button>
                </div>
            </header>

            {/* Main Content */}
            <div className="finder-content">
                {/* Sidebar Filters */}
                <aside className="filters-sidebar">
                    <div className="filter-header">
                        <h3>Filters</h3>
                        <button className="clear-btn" onClick={clearFilters}>Clear All</button>
                    </div>

                    {/* Speciality */}
                    <div className="filter-group">
                        <div className="checkbox-list">
                            {allSpecialties.map(spec => (
                                <label className="checkbox-item" key={spec}>
                                    <input
                                        type="checkbox"
                                        checked={selectedSpecialties.includes(spec)}
                                        onChange={() => toggleSpecialty(spec)}
                                    />
                                    {' '}{spec}
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Symptoms */}
                    <div className="filter-group">
                        <h4>Symptoms</h4>
                        <input type="text" className="search-input-small" placeholder="Symptoms..." />
                    </div>

                    {/* Consultation Type */}
                    <div className="filter-group">
                        <h4>Consultation Type</h4>
                        <div className="checkbox-list">
                            <label className="checkbox-item"><input type="checkbox" /> All</label>
                            <label className="checkbox-item"><input type="checkbox" /> Online</label>
                            <label className="checkbox-item"><input type="checkbox" /> Clinic</label>
                            <label className="checkbox-item"><input type="checkbox" /> Both</label>
                        </div>
                    </div>

                    {/* Availability */}
                    <div className="filter-group">
                        <h4 style={{ color: '#333' }}>Availability</h4>
                        <div className="availability-toggles">
                            <button className="toggle-btn active">All</button>
                            <button className="toggle-btn">Today</button>
                            <button className="toggle-btn">Tomorrow</button>
                        </div>
                    </div>

                    {/* Experience Slider */}
                    <div className="filter-group">
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', alignItems: 'center' }}>
                            <h4 style={{ margin: 0, color: '#333' }}>Experience</h4>
                            <span style={{ fontSize: '13px', color: '#27B992' }}>0+ Yrs</span>
                        </div>
                        <div className="range-slider-container">
                            <input type="range" min="0" max="20" defaultValue="0" className="range-slider" />
                        </div>
                    </div>

                    {/* Fees Slider */}
                    <div className="filter-group">
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', alignItems: 'center' }}>
                            <h4 style={{ margin: 0, color: '#333' }}>Fees Max</h4>
                            <span style={{ fontSize: '13px', color: '#27B992' }}>$500</span>
                        </div>
                        <div className="range-slider-container">
                            <input type="range" min="0" max="1000" defaultValue="500" className="range-slider" />
                        </div>
                    </div>

                    {/* Rating */}
                    <div className="filter-group">
                        <h4 style={{ color: '#333' }}>Minimum Rating</h4>
                        <div className="rating-select">
                            <FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar />
                        </div>
                    </div>

                    <button className="apply-btn">Apply Filters</button>
                </aside>

                {/* Doctors List */}
                <main className="doctors-list-section">
                    <div className="list-header">
                        <span className="doctors-found"><b>{displayDoctors?.length || 0}</b> Doctors Found
                            {incomingSpecialty && <span style={{ marginLeft: '10px', color: '#27B992', fontSize: '13px', fontWeight: '500' }}>for {selectedSpecialties.join(', ')}</span>}
                        </span>
                        <div className="sort-options">
                            <span className="sort-item active">Relevance</span>
                            <span className="sort-item">Experience</span>
                            <span className="sort-item">Fees</span>
                            <span className="sort-item">Rating</span>
                            <span className="sort-item">Availability</span>
                        </div>
                    </div>

                    {displayDoctors && displayDoctors.map((doctor) => (
                        <div className="doctor-card-horizontal" key={doctor.id}>
                            <div className="card-profile-section">
                                <div className="card-image-col">
                                    <img src={doctor.image || '/dr_sarah_johnson_1.png'} alt={doctor.full_name} />
                                    <div className="availability-tag-container">
                                        <span className="availability-tag">Next Available</span>
                                    </div>
                                </div>
                                <div className="card-info-col">
                                    <h3>{doctor.full_name}</h3>
                                    <span className="doc-specialty">{doctor.specialization}</span>
                                    <div className="doc-details">
                                        <div className="doc-detail-row">
                                            <FaBriefcase color="#bbb" size={12} />
                                            <span>8 yrs experience</span>
                                            <FaStar color="#FFD700" size={12} style={{ marginLeft: '12px' }} />
                                            <span style={{ color: '#EAA300', fontWeight: 'bold', fontSize: '13px' }}>4.4</span>
                                        </div>
                                        <div className="doc-detail-row">
                                            <span className="lang-icon">文A</span>
                                            <span>Languages: English</span>
                                        </div>
                                    </div>
                                    <div className="card-tags">
                                        <span className="tag">Fever</span>
                                        <span className="tag">Fatigue</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card-action-col">
                                <div className="price-row" style={{ textAlign: 'right', marginBottom: '18px', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div style={{ fontSize: '12px', color: '#888' }}>Consultation Fee</div>
                                    <div style={{ fontSize: '24px', fontWeight: '800', color: '#27B992' }}>₹80</div>
                                </div>
                                <div className="slot-container">
                                    <span className="slot-label">Next Slot</span>
                                    <span className="slot-value">10:00 AM</span>
                                </div>
                                <div style={{ width: '100%' }}>
                                    <button className="btn-book-sm" onClick={() => navigate('/booking', { state: { doctor: { ...doctor, consultation_fee: '₹80', location: 'Heartcare Specialist Center' } } })}>Book Appointment</button>
                                    <div style={{ textAlign: 'center', marginTop: '10px' }}>
                                        <a onClick={() => navigate('/doctor-profile', { state: { doctor } })} className="view-profile" style={{ cursor: 'pointer' }}>View Profile</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    {!displayDoctors.length && <div style={{ padding: '20px', textAlign: 'center', color: '#888' }}>No doctors found.</div>}
                </main>
            </div>

            {/* Trust Banner */}
            <div className="trust-banner">
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

            {/* Footer reused from Home via styles */}
            <Footer />
        </div>
    );
};

export default FindDoctors;
