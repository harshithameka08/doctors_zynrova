import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import {
    FaSearch, FaMapMarkerAlt, FaVideo, FaStar, FaFilter,
    FaCheckCircle, FaHeart, FaUserMd, FaShieldAlt, FaRegStar, FaBriefcase,
    FaUserCheck, FaCalendarCheck, FaLock
} from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';
import api from '../lib/api';
import './FindDoctors.css';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { FaHeartbeat, FaArrowRight } from 'react-icons/fa';
import { useEffect } from 'react';
import { useChat } from '../context/ChatContext';

const FindDoctors = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { openChatWithMsg } = useChat();

    const handleSearchSubmit = (e) => {
        if (e.key === 'Enter' && symptomQuery) {
            openChatWithMsg(`I am looking for information or doctors related to: ${symptomQuery}`);
        }
    };

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location.hash]);

    // Mock data fallback for when backend is unavailable
    const mockDoctors = [
        {
            id: 1,
            full_name: 'Dr. James Wilson',
            image: '/Ellipse 4031.png',
            specialization: 'General Physician',
            bio: 'Dr. James Wilson is a dedicated General Physician with a focus on comprehensive health care.',
            experience: 8,
            rating: 4.5,
            fees: 800
        },
        {
            id: 2,
            full_name: 'Dr. David Kim',
            image: '/Ellipse 4032.png',
            specialization: 'General Physician',
            bio: 'Dr. David Kim brings a wealth of knowledge to his practice as a General Physician.',
            experience: 12,
            rating: 4.8,
            fees: 1500
        },
        {
            id: 3,
            full_name: 'Dr. Robert Fox',
            image: '/Ellipse 4033.png',
            specialization: 'General Physician',
            bio: 'Dr. Robert Fox is known for his thorough examinations and friendly demeanor.',
            experience: 10,
            rating: 4.6,
            fees: 800
        },
        {
            id: 4,
            full_name: 'Dr. Linda Gregory',
            image: '/Ellipse 4034.png',
            specialization: 'General Physician',
            bio: 'Dr. Linda Gregory has a strong background in family medicine and preventive care.',
            experience: 14,
            rating: 4.7,
            fees: 1500
        },
        {
            id: 5,
            full_name: 'Dr. Sarah Mitchell',
            image: '/Ellipse 4035.png',
            specialization: 'General Physician',
            bio: 'Dr. Sarah Mitchell specializes in preventive care and comprehensive adult medicine.',
            experience: 9,
            rating: 4.4,
            fees: 800
        },
        {
            id: 6,
            full_name: 'Dr. Priya Sharma',
            image: '/Ellipse 4031.png',
            specialization: 'Cardiologist',
            bio: 'Dr. Priya Sharma is a leading Cardiologist with 12 years of experience in advanced heart and vascular care.',
            experience: 12,
            rating: 4.9,
            fees: 1500
        },
        {
            id: 7,
            full_name: 'Dr. Arjun Mehta',
            image: '/Ellipse 4032.png',
            specialization: 'Cardiologist',
            bio: 'Dr. Arjun Mehta specializes in interventional cardiology, offering cutting-edge diagnostics and treatment.',
            experience: 15,
            rating: 4.8,
            fees: 2000
        },
        {
            id: 8,
            full_name: 'Dr. Neha Kapoor',
            image: '/Ellipse 4033.png',
            specialization: 'Dentist',
            bio: 'Dr. Neha Kapoor is a skilled Dentist offering comprehensive oral health treatments from routine cleaning to complex surgery.',
            experience: 7,
            rating: 4.7,
            fees: 800
        },
        {
            id: 9,
            full_name: 'Dr. Rahul Verma',
            image: '/Ellipse 4034.png',
            specialization: 'Dentist',
            bio: 'Dr. Rahul Verma provides personalized dental care with a focus on patient comfort and advanced treatment methods.',
            experience: 11,
            rating: 4.5,
            fees: 1200
        },
        {
            id: 10,
            full_name: 'Dr. Suresh Patel',
            image: '/Ellipse 4035.png',
            specialization: 'Orthopedic',
            bio: 'Dr. Suresh Patel is an expert Orthopedic surgeon specializing in musculoskeletal injuries, joint replacement, and bone health.',
            experience: 20,
            rating: 4.9,
            fees: 2500
        },
        {
            id: 11,
            full_name: 'Dr. Anjali Singh',
            image: '/Ellipse 4031.png',
            specialization: 'Orthopedic',
            bio: 'Dr. Anjali Singh offers specialist care for sports injuries, spinal issues, and complex orthopedic conditions.',
            experience: 13,
            rating: 4.6,
            fees: 1800
        },
        {
            id: 12,
            full_name: 'Dr. Emily Blunt',
            image: '/dr_sarah_johnson_2.png',
            specialization: 'Pediatrician',
            bio: 'Dr. Emily Blunt is a world-renowned Pediatrician specializing in infant health and child development. With over 15 years of experience, she provides compassionate care for children.',
            experience: 18,
            rating: 5.0,
            fees: 1500
        },
        {
            id: 13,
            full_name: 'Dr. Sarah Johnson',
            image: '/dr_sarah_johnson.png',
            specialization: 'Dermatologist',
            bio: 'Dr. Sarah Johnson is a leading Dermatologist specializing in medical and aesthetic skin treatments, with a focus on patient safety and natural results.',
            experience: 16,
            rating: 4.9,
            fees: 2200
        },
        {
            id: 14,
            full_name: 'Dr. Meera Reddy',
            image: '/dr_sarah_johnson_1.png',
            specialization: 'Gynecologist',
            bio: 'Dr. Meera Reddy provides comprehensive women\'s health services, from routine checkups to advanced maternal-fetal medicine.',
            experience: 14,
            rating: 4.8,
            fees: 1600
        },
        {
            id: 15,
            full_name: 'Dr. Alan Turing',
            image: '/Ellipse 4032.png',
            specialization: 'Neurologist',
            bio: 'Dr. Alan Turing specializes in complex neurological disorders and brain health, utilizing the latest diagnostics and therapies.',
            experience: 17,
            rating: 4.7,
            fees: 3000
        },
        {
            id: 16,
            full_name: 'Dr. Sigmund Freud',
            image: '/Ellipse 4033.png',
            specialization: 'Psychiatrist',
            bio: 'Dr. Sigmund Freud offers compassionate psychiatric care and mental health support, specializing in therapy and medication management.',
            experience: 25,
            rating: 4.6,
            fees: 2500
        },
        {
            id: 17,
            full_name: 'Dr. Rosalind Franklin',
            image: '/Ellipse 4034.png',
            specialization: 'Endocrinologist',
            bio: 'Dr. Rosalind Franklin is an expert in hormone-related conditions, providing specialized care for diabetes, thyroid issues, and metabolic health.',
            experience: 19,
            rating: 4.8,
            fees: 2000
        },
        {
            id: 18,
            full_name: 'Dr. Isaac Newton',
            image: '/Ellipse 4035.png',
            specialization: 'Ophthalmologist',
            bio: 'Dr. Isaac Newton provides advanced eye care services, from routine vision checkups to complex ophthalmic surgeries.',
            experience: 22,
            rating: 4.9,
            fees: 2800
        },
        {
            id: 19,
            full_name: 'Dr. Alexander Bell',
            image: '/Ellipse 4031.png',
            specialization: 'ENT Specialist',
            bio: 'Dr. Alexander Bell specializes in the diagnosis and treatment of ear, nose, and throat conditions, offering both medical and surgical solutions.',
            experience: 21,
            rating: 4.7,
            fees: 1500
        }
    ];

    const incomingSpecialty = location.state?.specialty || null;
    const incomingType = location.state?.consultationType || null;
    const incomingAvailability = location.state?.availability || 'All';

    const allSpecialties = [
        'General Physician', 'Dentist', 'Cardiologist', 'Orthopedic', 
        'Pediatrician', 'Dermatologist', 'Gynecologist', 'Neurologist', 
        'Psychiatrist', 'Endocrinologist', 'Ophthalmologist', 'ENT Specialist'
    ];

    const [selectedSpecialties, setSelectedSpecialties] = useState(
        incomingSpecialty ? [incomingSpecialty] : ['General Physician']
    );
    const [symptomQuery, setSymptomQuery] = useState('');
    const [consultationType, setConsultationType] = useState(incomingType || 'All');
    const [availability, setAvailability] = useState(incomingAvailability);
    const [experience, setExperience] = useState(0);
    const [maxFees, setMaxFees] = useState(5000);
    const [minRating, setMinRating] = useState(0);
    const [sortBy, setSortBy] = useState('Relevance');
    const [showAll, setShowAll] = useState(false);
    const [isFiltersOpen, setIsFiltersOpen] = useState(false);

    const toggleSpecialty = (specialty) => {
        setSelectedSpecialties(prev =>
            prev.includes(specialty)
                ? prev.filter(s => s !== specialty)
                : [...prev, specialty]
        );
    };

    const clearFilters = () => {
        setSelectedSpecialties(['General Physician']);
        setSymptomQuery('');
        setConsultationType('All');
        setAvailability('All');
        setExperience(0);
        setMaxFees(5000);
        setMinRating(0);
        setSortBy('Relevance');
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

    // Helper to get experience number from bio
    const getDocExp = (bio) => {
        const match = bio.match(/\d+/);
        return match ? parseInt(match[0]) : 8;
    };

    // Filter by selected specialties and other filters
    const filteredDoctors = allDoctors.filter(d => {
        // Specialty Filter
        const matchSpecialty = selectedSpecialties.length === 0 || selectedSpecialties.includes(d.specialization);
        
        // Symptom Filter
        const matchSymptom = !symptomQuery || 
                           d.bio.toLowerCase().includes(symptomQuery.toLowerCase()) || 
                           d.specialization.toLowerCase().includes(symptomQuery.toLowerCase()) ||
                           d.full_name.toLowerCase().includes(symptomQuery.toLowerCase());

        // Consultation Type Filter
        const matchType = consultationType === 'All' || 
                         (consultationType === 'Online' && d.id % 2 === 0) || 
                         (consultationType === 'Clinic' && d.id % 2 !== 0);

        // Availability Filter
        const matchAvailability = availability === 'All' || 
                                (availability === 'Today' && d.id % 3 === 0) || 
                                (availability === 'Tomorrow' && d.id % 3 !== 0);

        // Experience Filter
        const matchExperience = getDocExp(d.bio) >= experience;

        // Fees Filter
        const docFees = d.fees || (d.id % 2 === 0 ? 1500 : 800); 
        const matchFees = docFees <= maxFees;

        // Rating Filter (Mocking rating)
        const docRating = 4.4;
        const matchRating = docRating >= minRating;

        return matchSpecialty && matchSymptom && matchType && matchAvailability && matchExperience && matchFees && matchRating;
    });

    // Apply Sorting
    const displayDoctors = [...filteredDoctors].sort((a, b) => {
        if (sortBy === 'Experience') {
            const expA = a.experience || getDocExp(a.bio);
            const expB = b.experience || getDocExp(b.bio);
            return expB - expA;
        }
        if (sortBy === 'Fees') {
            const feeA = a.fees || (a.id % 2 === 0 ? 1500 : 800);
            const feeB = b.fees || (b.id % 2 === 0 ? 1500 : 800);
            return feeA - feeB;
        }
        if (sortBy === 'Rating') {
            const rateA = a.rating || (a.id % 2 === 0 ? 4.9 : 4.4);
            const rateB = b.rating || (b.id % 2 === 0 ? 4.9 : 4.4);
            return rateB - rateA;
        }
        if (sortBy === 'Availability') {
            // Prioritize IDs divisible by 3 (Today)
            const availA = a.id % 3 === 0 ? 2 : (a.id % 3 === 1 ? 1 : 0);
            const availB = b.id % 3 === 0 ? 2 : (b.id % 3 === 1 ? 1 : 0);
            return availB - availA;
        }
        return 0; // Default: Relevance (original order)
    });

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

            {/* Old Hero Section Restored */}
            <header className="finder-header-classic">
                <h1 className="finder-title-classic">Find Doctors <span style={{ color: '#27B992' }}>Near You</span></h1>
                <p className="finder-subtitle-classic">Search doctors by speciality, symptoms, or location with ease. Get<br />expert medical care anytime, anywhere you need it.</p>
            </header>

            {/* Premium Search & Filter Section */}
            <header className="finder-header-new" style={{ paddingTop: '0' }}>
                <div className="header-top-row">
                    <div className="header-text">
                        <h2 className="finder-title-new" style={{ fontSize: '24px' }}>Find your specialist</h2>
                        <p className="finder-subtitle-new">Discover top-rated doctors verified for quality care.</p>
                    </div>
                    <div className="header-search-actions">
                        <div className="search-input-wrapper-new">
                            <FaSearch className="search-icon-new" />
                            <input 
                                type="text" 
                                placeholder="Search by specialty, doctor name..." 
                                value={symptomQuery}
                                onChange={(e) => setSymptomQuery(e.target.value)}
                                onKeyDown={handleSearchSubmit}
                            />
                        </div>
                        <button className={`filters-btn-new ${isFiltersOpen ? 'active' : ''}`} onClick={() => setIsFiltersOpen(!isFiltersOpen)}>
                            <FaFilter /> Filters
                        </button>
                    </div>
                </div>

                {isFiltersOpen && (
                    <div className="filters-panel-inline">
                        <div className="filter-panel-group">
                            <span className="filter-panel-label">CONSULTATION TYPE</span>
                            <div className="filter-pills-dark">
                                {['All', 'In-Clinic', 'Video', 'Audio'].map(type => (
                                    <button 
                                        key={type}
                                        className={`filter-pill-dark ${consultationType === type || (type === 'In-Clinic' && consultationType === 'Clinic') || (type === 'Video' && consultationType === 'Online') ? 'active' : ''}`}
                                        onClick={() => {
                                            if (type === 'In-Clinic') setConsultationType('Clinic');
                                            else if (type === 'Video') setConsultationType('Online');
                                            else setConsultationType(type);
                                        }}
                                    >
                                        {type}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="filter-panel-group">
                            <span className="filter-panel-label">AVAILABILITY</span>
                            <div className="filter-pills-dark">
                                {['All', 'Today', 'Tomorrow'].map(avail => (
                                    <button 
                                        key={avail}
                                        className={`filter-pill-dark ${availability === avail ? 'active' : ''}`}
                                        onClick={() => setAvailability(avail)}
                                    >
                                        {avail}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="filter-panel-group" style={{ flex: 1.5, paddingLeft: '40px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                                <span className="filter-panel-label">MAX PRICE:</span>
                                <span style={{ color: '#27B992', fontWeight: '800', fontSize: '15px' }}>₹{maxFees}</span>
                            </div>
                            <div className="range-slider-container-new">
                                <input 
                                    type="range" 
                                    min="500" 
                                    max="5000" 
                                    step="100"
                                    value={maxFees} 
                                    onChange={(e) => setMaxFees(parseInt(e.target.value))}
                                    className="range-slider-green" 
                                />
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px', color: '#888', fontSize: '12px', fontWeight: '600' }}>
                                <span>₹500</span>
                                <span>₹5000</span>
                            </div>
                        </div>
                    </div>
                )}

                <div className="category-pills-row">
                    <button 
                        className={`category-pill ${selectedSpecialties.length === 0 ? 'active' : ''}`}
                        onClick={() => setSelectedSpecialties([])}
                    >
                        All Specialists
                    </button>
                    {allSpecialties.map(spec => (
                        <button 
                            key={spec}
                            className={`category-pill ${selectedSpecialties.includes(spec) ? 'active' : ''}`}
                            onClick={() => setSelectedSpecialties([spec])}
                        >
                            {spec}
                        </button>
                    ))}
                </div>
            </header>

            {/* Main Content */}
            <div className="finder-content">
                {/* Doctors List Grid */}
                <main className="doctors-list-section" id="doctors-list">
                    <div className="list-header">
                        <span className="doctors-found"><b>{displayDoctors?.length || 0}</b> Doctors Found
                            {incomingSpecialty && <span style={{ marginLeft: '10px', color: '#27B992', fontSize: '13px', fontWeight: '500' }}>for {selectedSpecialties.join(', ')}</span>}
                            {incomingType && <span style={{ marginLeft: '10px', color: '#27B992', fontSize: '13px', fontWeight: '500' }}>for {incomingType} Consultation</span>}
                        </span>
                        <div className="sort-options">
                            {['Relevance', 'Experience', 'Fees', 'Rating', 'Availability'].map(option => (
                                <span 
                                    key={option}
                                    className={`sort-item ${sortBy === option ? 'active' : ''}`}
                                    onClick={() => setSortBy(option)}
                                >
                                    {option}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="doctors-grid-horizontal">
                        {(showAll ? displayDoctors : displayDoctors.slice(0, 10)).map((doctor) => {
                            const docFee = doctor.fees || (doctor.id % 2 === 0 ? 1500 : 800);
                            const docRating = doctor.rating || (doctor.id % 2 === 0 ? 4.9 : 4.4);
                            const docExp = doctor.experience || getDocExp(doctor.bio);

                            return (
                                <div className="doctor-card-horizontal compact" key={doctor.id}>
                                    <div className="card-image-left">
                                        <img src={doctor.image || '/dr_sarah_johnson_1.png'} alt={doctor.full_name} />
                                    </div>
                                    
                                    <div className="card-info-right">
                                        <div className="card-info-header">
                                            <div className="name-qual-group">
                                                <h3>{doctor.full_name}</h3>
                                                <p className="doc-qualifications">MD, {doctor.specialization}</p>
                                            </div>
                                            <div className="fee-box-right">
                                                <span className="fee-label">Fee</span>
                                                <span className="fee-value">₹{docFee}</span>
                                            </div>
                                        </div>

                                        <div className="doc-stats-mini">
                                            <span><FaStar /> {docRating}</span>
                                            <span><FaBriefcase /> {docExp} Yrs</span>
                                        </div>
                                        
                                        <div className="doc-specialties-list">
                                            <strong>Specialties:</strong>
                                            <ul>
                                                <li>{doctor.specialization}</li>
                                                <li>Patient Care</li>
                                            </ul>
                                        </div>
                                        
                                        <div className="card-horizontal-footer">
                                            <span onClick={() => navigate('/doctor-profile', { state: { doctor } })} className="view-profile-link">View Profile</span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    
                    {displayDoctors.length > 5 && !showAll && (
                        <div className="view-all-container" style={{ textAlign: 'center', padding: '30px 0' }}>
                            <button 
                                className="apply-btn" 
                                style={{ width: 'auto', padding: '12px 40px', fontSize: '16px' }}
                                onClick={() => setShowAll(true)}
                            >
                                View All Doctors ({displayDoctors.length})
                            </button>
                        </div>
                    )}

                    {!displayDoctors.length && <div style={{ padding: '20px', textAlign: 'center', color: '#888' }}>No doctors found.</div>}
                </main>
            </div>

            {/* Trust Banner */}
            <div className="trust-banner">
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

            {/* Footer reused from Home via styles */}
            <Footer />
        </div>
    );
};

export default FindDoctors;
