import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight, FaSearch, FaRegFolderOpen, FaRegClock, FaMapMarkerAlt, FaPhoneAlt, FaPlus, FaMinus } from 'react-icons/fa';
import { FaHeartbeat as LogoIcon } from 'react-icons/fa';
import Footer from '../components/Footer';
import './Contact.css';
import Navbar from '../components/Navbar';

const Contact = () => {
    const navigate = useNavigate();
    const [openFaq, setOpenFaq] = useState(null);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        subject: 'General Inquiry',
        message: ''
    });

    const handleNameChange = (e) => {
        const value = e.target.value;
        // Allow only alphabets and spaces
        const filteredValue = value.replace(/[^a-zA-Z\s]/g, '');
        setFormData({ ...formData, fullName: filteredValue });
    };

    const handlePhoneChange = (e) => {
        const value = e.target.value;
        // Allow only numbers
        const filteredValue = value.replace(/[^0-9]/g, '');
        setFormData({ ...formData, phone: filteredValue });
    };

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const faqs = [
        { q: "What should I do if I need to cancel an appointment?", a: "You can cancel or reschedule your appointment through the 'My Bookings' section in your account profile, or by contacting our support team at least 24 hours in advance." },
        { q: "How do I contact a doctor after my consultation?", a: "Post-consultation follow-ups can be managed through our secure messaging system or by booking a quick follow-up slot as recommended by your physician." },
        { q: "What information do I need to provide for a booking?", a: "You just need to provide basic details like your name, age, contact information, and a brief description of your symptoms to help the doctor prepare." },
        { q: "Is there an emergency number for immediate help?", a: "For life-threatening emergencies, please call your local emergency services (like 108 or 102) immediately. CareFlow is for non-emergency medical consultations." }
    ];

    return (
        <div className="contact-page">
            {/* Navbar */}
            <Navbar />

            {/* Hero Section */}
            <section className="contact-hero">
                <div className="contact-hero-content">
                    <h1>We're Here To<br /><span>Help You</span></h1>
                    <p>Have a question, need support, or want to partner with us? Our team is ready to assist you at every step.</p>
                </div>
                <div className="contact-hero-image">
                    {/* Assuming contact_page_image is the hero image based on request */}
                    <img src="/contact_page_image.png" alt="Support Team" />
                </div>
            </section>

            {/* Support Options */}
            <section className="support-section">
                <div className="support-card">
                    <div className="support-icon"><FaSearch color="#ff6b6b" /></div> {/* Orange/Red icon */}
                    <h3>Customer Support</h3>
                    <p>Get help with bookings and consultations.</p>
                    <a href="#" className="support-email">support@medicalsite.com</a>
                </div>
                <div className="support-card">
                    <div className="support-icon"><FaRegFolderOpen color="#feca57" /></div> {/* Yellow icon */}
                    <h3>Doctor Support</h3>
                    <p>For doctors & clinics using our platform.</p>
                    <a href="#" className="support-email">doctors@medicalsite.com</a>
                </div>
                <div className="support-card">
                    <div className="support-icon"><FaRegClock color="#ff9f43" /></div> {/* Orange icon */}
                    <h3>Partnerships</h3>
                    <p>Collaborate or integrate with our network.</p>
                    <a href="#" className="support-email">partners@medicalsite.com</a>
                </div>
            </section>

            {/* Contact Form */}
            <section className="contact-form-section">
                <h2>Send Us A Message</h2>
                <p>We usually respond within 24 hours.</p>

                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="form-grid">
                        <div className="form-group">
                            <label>Full Name</label>
                            <input 
                                type="text" 
                                placeholder="Full Name" 
                                value={formData.fullName}
                                onChange={handleNameChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Email Address</label>
                            <input 
                                type="email" 
                                placeholder="Email Address" 
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>
                        <div className="form-group">
                            <label>Phone Number</label>
                            <input 
                                type="tel" 
                                placeholder="Phone Number" 
                                value={formData.phone}
                                onChange={handlePhoneChange}
                                maxLength={10}
                            />
                        </div>
                        <div className="form-group">
                            <label>Subject</label>
                            <select 
                                value={formData.subject}
                                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                            >
                                <option>General Inquiry</option>
                                <option>Support</option>
                                <option>Partnership</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group" style={{ marginBottom: '30px' }}>
                        <label>Message</label>
                        <textarea 
                            placeholder="How we can help you ?"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        ></textarea>
                    </div>
                    <button type="submit" className="btn-send-msg">Send Message</button>
                </form>
            </section>

            {/* Office Section */}
            <section className="office-section">
                <div className="office-info">
                    <h2>Our Office</h2>
                    <p>We are conveniently located in the heart of Attapur to serve our local community.</p>

                    <div className="office-detail-item">
                        <div className="office-icon-box bg-light-teal"><FaMapMarkerAlt /></div>
                        <div className="office-text">
                            <h4>Our Address</h4>
                            <p>Attapur, Inner Ring Rd, Pillar No 143,<br />Hyderabad, Telangana 500048</p>
                        </div>
                    </div>

                    <div className="office-detail-item">
                        <div className="office-icon-box bg-light-teal"><FaRegClock /></div>
                        <div className="office-text">
                            <h4>Business Hours</h4>
                            <p>Monday – Saturday: 9:00 AM – 7:00 PM<br /><span>Sunday: Emergency Only</span></p>
                        </div>
                    </div>
                </div>
                <div className="map-container">
                    {/* Static map placeholder or iframe if preferred. Image suggests a custom map graphic. for now a placeholder showing area */}
                    <iframe
                        title="Map"
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        style={{ border: 0, opacity: 0.8 }}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15229.82393845927!2d78.4238!3d17.3916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb970868732d8f%3A0x6331899131d9266a!2sAttapur%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1625634567890!5m2!1sen!2sin"
                        allowFullScreen
                    ></iframe>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="faq-section">
                <h2>Frequently Asked <span>Questions</span></h2>
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

            <Footer />
        </div>
    );
};

export default Contact;
