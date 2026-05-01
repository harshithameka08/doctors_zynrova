import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    FaSearch, FaArrowRight, FaHeadSideVirus, FaLungs, FaStethoscope,
    FaBone, FaBrain, FaHeartbeat, FaUserMd, FaBaby, FaCheckCircle,
    FaPlus, FaAmbulance, FaShieldAlt
} from 'react-icons/fa';
import { GiStomach, GiJoint } from 'react-icons/gi';
import Footer from '../components/Footer';
import './Symptoms.css';
import { FaHeartbeat as LogoIcon } from 'react-icons/fa'; // Navbar Logo reuse
import Navbar from '../components/Navbar';
import { useChat } from '../context/ChatContext';

const Symptoms = () => {
    const navigate = useNavigate();
    const { openChatWithMsg } = useChat();
    const [searchQuery, setSearchQuery] = useState('');
    const [activeBodyArea, setActiveBodyArea] = useState('Head & Neck');
    const [activeSymptom, setActiveSymptom] = useState('Fever');

    const handleSearchSubmit = (e) => {
        if (e) e.preventDefault();
        const query = searchQuery.trim().toLowerCase();
        
        // Find if the query matches any symptom exactly or partially
        const match = Object.keys(symptomsData).find(s => 
            s.toLowerCase().includes(query)
        );

        if (match) {
            setActiveSymptom(match);
            const el = document.querySelector('.sym-highlight-section');
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
            // If no match found in data, maybe it's a general query for the AI
            openChatWithMsg(`I am feeling ${searchQuery}. Who should I consult?`);
        }
        setSearchQuery('');
    };

    const symptomsData = {
        'Fever': {
            description: "A temporary increase in body temperature, often due to an illness. It's a sign that something out of the ordinary is going on in your body.",
            departments: [
                { name: 'General Physician', sub: 'Board Certified Experts', icon: <FaUserMd />, doctor: { full_name: 'Dr. James Wilson', specialization: 'General Physician', image: '/Ellipse 4031.png', bio: 'Dr. James Wilson is a dedicated General Physician with a focus on comprehensive health care. With over 8 years of experience, he provides personalized treatment plans and advocates for preventive medicine.' } },
                { name: 'Pediatrician', sub: 'Board Certified Experts', icon: <FaBaby />, doctor: { full_name: 'Dr. Linda Gregory', specialization: 'Pediatrician', image: '/Ellipse 4034.png', bio: 'Dr. Linda Gregory has a strong background in family medicine and preventive care. Her clinical expertise and compassionate bedside manner make her a highly recommended choice for patients of all ages.' } }
            ]
        },
        'Back Pain': {
            description: "Physical discomfort occurring anywhere on the spine or back, ranging from mild to disabling. Common causes include muscle strain and poor posture.",
            departments: [
                { name: 'Orthopedic', sub: 'Bone & Joint Specialists', icon: <FaBone />, doctor: { full_name: 'Dr. Robert Fox', specialization: 'Orthopedic Specialist', image: '/Ellipse 4033.png', bio: 'Dr. Robert Fox is known for his thorough examinations and friendly demeanor. With extensive experience in orthopedics, he excels at managing bone and joint conditions.' } },
                { name: 'Physiotherapist', sub: 'Rehabilitation Experts', icon: <FaUserMd />, doctor: { full_name: 'Dr. David Kim', specialization: 'Physiotherapist', image: '/Ellipse 4032.png', bio: 'Dr. David Kim brings a wealth of knowledge to rehabilitation therapy. He is passionate about patient education and ensuring optimal recovery outcomes.' } }
            ]
        },
        'Tooth Ache': {
            description: "Pain in or around a tooth, often caused by tooth decay, an abscess, or gum infection. Early treatment can prevent complications.",
            departments: [
                { name: 'Dentist', sub: 'Dental Care Experts', icon: <FaUserMd />, doctor: { full_name: 'Dr. Sarah Mitchell', specialization: 'Dentist', image: '/Ellipse 4035.png', bio: 'Dr. Sarah Mitchell is a world-renowned physician specializing in comprehensive dental care. She combines cutting-edge technology with a compassionate, patient-centered approach.' } }
            ]
        },
        'Skin Allergy': {
            description: "An immune system reaction that causes skin irritation, rashes, or swelling. Common triggers include certain foods, pollen, or pet dander.",
            departments: [
                { name: 'Dermatologist', sub: 'Skin Care Specialists', icon: <FaUserMd />, doctor: { full_name: 'Dr. Linda Gregory', specialization: 'Dermatologist', image: '/Ellipse 4034.png', bio: 'Dr. Linda Gregory has a strong background in dermatology and skin care. Her clinical expertise ensures the best outcomes for patients with skin conditions.' } }
            ]
        },
        'Headache': {
            description: "Pain or discomfort in the head or face. Causes can range from stress and dehydration to more complex neurological issues.",
            departments: [
                { name: 'General Physician', sub: 'Primary Care', icon: <FaUserMd />, doctor: { full_name: 'Dr. James Wilson', specialization: 'General Physician', image: '/Ellipse 4031.png', bio: 'Dr. James Wilson is a dedicated General Physician with a focus on comprehensive health care including headache and neurological symptoms management.' } },
                { name: 'Neurologist', sub: 'Brain & Nerve Specialists', icon: <FaBrain />, doctor: { full_name: 'Dr. David Kim', specialization: 'Neurologist', image: '/Ellipse 4032.png', bio: 'Dr. David Kim specializes in brain and nerve disorders. He brings a wealth of knowledge to treating neurological symptoms including headaches and migraines.' } }
            ]
        },
        'Joint Pain': {
            description: "Discomfort, aches, or soreness in any of the body's joints. It is a common complaint and can be caused by injury or arthritis.",
            departments: [
                { name: 'Orthopedic', sub: 'Joint Specialists', icon: <GiJoint />, doctor: { full_name: 'Dr. Robert Fox', specialization: 'Orthopedic Specialist', image: '/Ellipse 4033.png', bio: 'Dr. Robert Fox specializes in joint disorders and musculoskeletal conditions. His thorough approach helps patients manage chronic joint pain effectively.' } },
                { name: 'Rheumatologist', sub: 'Arthritis Experts', icon: <FaUserMd />, doctor: { full_name: 'Dr. Sarah Mitchell', specialization: 'Rheumatologist', image: '/Ellipse 4035.png', bio: 'Dr. Sarah Mitchell is an expert rheumatologist focused on arthritis and autoimmune joint conditions, providing targeted relief strategies for her patients.' } }
            ]
        }
    };

    const filteredQuickTags = Object.keys(symptomsData).filter(s => 
        s.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const bodyAreas = [
        { name: 'Head & Neck', icon: <FaHeadSideVirus />, color: '#fff', bg: '#1abc9c' }, /* Greenish */
        { name: 'Chest & Respiratory', icon: <FaLungs />, color: '#fff', bg: '#ff6b6b' }, /* Reddish/Pink */
        { name: 'Abdomen & Digestive', icon: <GiStomach />, color: '#fff', bg: '#feca57' }, /* Yellowish */
        { name: 'Joints & Bones', icon: <GiJoint />, color: '#fff', bg: '#54a0ff' }, /* Blueish */
        { name: 'Skin & Outer Body', icon: <FaShieldAlt />, color: '#fff', bg: '#ff9f43' }, /* Orange */
        { name: 'Pediatrics & Care', icon: <FaBaby />, color: '#fff', bg: '#ee5253' }, /* Reddish */
    ];

    const bodySymptoms = {
        'Head & Neck': ['Headache', 'Migraine', 'Dizziness', 'Vision Blur', 'Sore Throat'],
        'Chest & Respiratory': ['Chest Pain', 'Shortness of Breath', 'Cough', 'Wheezing', 'Congestion'],
        'Abdomen & Digestive': ['Stomach Ache', 'Nausea', 'Indigestion', 'Acid Reflux', 'Bloating'],
        'Joints & Bones': ['Knee Pain', 'Back Pain', 'Neck Stiffness', 'Arthritis', 'Muscle Cramp'],
        'Skin & Outer Body': ['Skin Rash', 'Itching', 'Sunburn', 'Acne', 'Eczema'],
        'Pediatrics & Care': ['Fever in Kids', 'Ear Infection', 'Growth Concerns', 'Immunization', 'Colic']
    };

    return (
        <div className="symptoms-page">
            <Navbar />
            
            {/* Nav + Hero wrapper — shared mint background */}
            <div className="sym-hero-wrapper">
                {/* Hero Section */}
                <header className="sym-hero">
                    <div className="sym-hero-inner">

                    <h1>Find The Right Doctor<br />Based On <span>Your Symptoms</span></h1>
                    <p>Tell us how you're feeling, and we'll guide you to the right medical specialist.</p>

                    <form className="sym-search-box" onSubmit={handleSearchSubmit}>
                        <FaSearch />
                        <input 
                            type="text" 
                            placeholder="search symptoms like fever, backpain, skin allergy...." 
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button type="submit" className="btn-find-spec">Find Specialists</button>
                    </form>
                </div>

                <div className="quick-tags">
                    {filteredQuickTags.length > 0 ? (
                        filteredQuickTags.map(symptom => (
                            <div
                                key={symptom}
                                className={`sym-tag ${activeSymptom === symptom ? 'active' : ''}`}
                                onClick={() => setActiveSymptom(symptom)}
                            >
                                {symptom}
                            </div>
                        ))
                    ) : (
                        <div style={{ color: '#999', fontSize: '13px', padding: '10px' }}>No matching symptoms found. Try searching for something else.</div>
                    )}
                </div>
            </header>
            </div>{/* end sym-hero-wrapper */}

            {/* Highlight Section */}
            <section className="sym-highlight-section">
                <div className="sym-detail-card">
                    <h2><span className="title-bar"></span>{activeSymptom}</h2>
                    <p>{symptomsData[activeSymptom].description}</p>

                    <div style={{ fontSize: '12px', color: '#27B992', fontWeight: 'bold', marginBottom: '15px' }}>Recommended Departments</div>
                    <div className="rec-depts">
                        {symptomsData[activeSymptom].departments.map((dept, idx) => (
                            <div
                                className="dept-pill"
                                key={idx}
                                onClick={() => navigate('/find-doctors', { state: { specialty: dept.name } })}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', flex: 1 }}>
                                    <div>
                                        <div style={{ fontSize: '14px', fontWeight: '700', color: '#333' }}>{dept.name}</div>
                                        <div style={{ fontSize: '11px', color: '#999', fontWeight: 'normal' }}>{dept.sub}</div>
                                    </div>
                                </div>
                                <div style={{ color: '#27B992', background: '#eefbf9', borderRadius: '50%', width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <FaArrowRight size={10} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Body Area Section */}
            <section className="body-area-section">
                <h2 className="section-head-center" style={{ marginBottom: '5px' }}>Symptoms By <span style={{ color: '#27B992' }}>Body Area</span></h2>
                <p style={{ textAlign: 'center', marginTop: '0', marginBottom: '50px', color: '#888', fontSize: '16px' }}>Click on a region to narrow down your concerns.</p>

                <div className="body-area-container">
                    {/* Left Menu */}
                    <div className="body-menu">
                        {bodyAreas.map((area) => (
                            <div
                                key={area.name}
                                className={`body-menu-item ${activeBodyArea === area.name ? 'active' : ''}`}
                                onClick={() => setActiveBodyArea(area.name)}
                            >
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div className="body-icon-circle" style={{ background: area.bg, color: area.color }}>{area.icon}</div>
                                    <span style={{ fontSize: '15px', fontWeight: 'bold' }}>{area.name}</span>
                                </div>
                                <div className={`status-dot ${activeBodyArea === area.name ? 'active' : ''}`}></div>
                            </div>
                        ))}
                    </div>

                    {/* Right Panel */}
                    <div className="body-detail-panel">
                        <div className="body-detail-header"><span className="title-bar" style={{ marginRight: '15px', height: '24px' }}></span> {activeBodyArea}</div>
                        <div className="symptom-list-grid">
                            {bodySymptoms[activeBodyArea].map((sym, i) => (
                                <div className="symptom-item" key={i}>
                                    {sym}
                                    <div style={{ background: '#eefbf9', borderRadius: '50%', width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <FaArrowRight size={10} color="#27B992" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Condition Insights */}
            <section className="insights-section">
                <h2 className="section-head-center" style={{ marginBottom: '5px' }}>Condition Insights</h2>
                <p style={{ color: '#666', marginTop: '0' }}>In-depth looks at common symptoms and specialized pathways.</p>

                <div className="insight-grid">
                    <div className="insight-card bg-cream">
                        <div className="insight-icon" style={{ color: '#FF7F50' }}><FaBone /></div>
                        <h3>Chronic Back Pain</h3>
                        <p>Understanding potential spinal issues, posture-related strain, and when to consult Orthopedics.</p>
                        <span className="link-find" onClick={() => navigate('/find-doctors', { state: { specialty: 'Orthopedic' } })}>Find Doctors</span>
                    </div>
                    <div className="insight-card bg-lavender">
                        <div className="insight-icon" style={{ color: '#9B59B6' }}><GiStomach /></div>
                        <h3>Digestive Health</h3>
                        <p>Identifying triggers for acidity and bloating, and exploring General Physician solutions.</p>
                        <span className="link-find" onClick={() => navigate('/find-doctors', { state: { specialty: 'General Physician' } })}>Find Doctors</span>
                    </div>
                    <div className="insight-card bg-mint">
                        <div className="insight-icon" style={{ color: '#27B992' }}><FaBrain /></div>
                        <h3>Mental Wellness</h3>
                        <p>Signs of anxiety, fatigue, and burnout. Connecting you with our mental health specialists.</p>
                        <span className="link-find" onClick={() => navigate('/find-doctors', { state: { specialty: 'Psychiatrist' } })}>Find Doctors</span>
                    </div>
                </div>
            </section>

            {/* What Happens Next? */}
            <section className="steps-section">
                <div className="steps-inner-wrapper">
                    <h2 className="section-head-center" style={{ marginBottom: '5px' }}>What Happens Next?</h2>
                    <p style={{ textAlign: 'center', color: '#666', marginTop: '0', marginBottom: '40px' }}>A simple, 4-step journey to feeling better.</p>
                    <div className="steps-container">
                        <div className="step-box-center">
                            <div className="step-number">01</div>
                            <div className="step-icon-lg"><FaSearch /></div>
                            <h4>Select Symptom</h4>
                            <p>Tell us what's bothering you</p>
                        </div>
                        <div className="step-connector"></div>
                        <div className="step-box-center">
                            <div className="step-number">02</div>
                            <div className="step-icon-lg"><FaUserMd /></div>
                            <h4>See Specialists</h4>
                            <p>Get matched with experts</p>
                        </div>
                        <div className="step-connector"></div>
                        <div className="step-box-center">
                            <div className="step-number">03</div>
                            <div className="step-icon-lg"><FaHeartbeat /></div>
                            <h4>Choose Visit</h4>
                            <p>Select clinic or online</p>
                        </div>
                        <div className="step-connector"></div>
                        <div className="step-box-center">
                            <div className="step-number">04</div>
                            <div className="step-icon-lg"><FaCheckCircle /></div>
                            <h4>Book Securely</h4>
                            <p>Instant confirmation</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Emergency Banner */}
            <div className="emergency-banner-container">
                <div className="emergency-banner">
                    <div className="emerg-icon"><FaAmbulance /></div>
                    <div className="emerg-content">
                        <h4>Emergency Medical Care</h4>
                        <p>If your symptoms are severe or life-threatening (e.g., severe chest pain, extreme difficulty breathing, sudden paralysis), please seek emergency medical care immediately by calling your local emergency services.</p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Symptoms;
