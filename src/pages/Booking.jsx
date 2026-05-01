import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaChevronLeft, FaCheckCircle, FaMapMarkerAlt, FaRegClock, FaUser, FaPhoneAlt, FaCalendarAlt, FaStethoscope, FaChevronRight, FaWallet } from 'react-icons/fa';
import api from '../lib/api';
import './Booking.css';

const DAYS_SHORT = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];

const Booking = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Initial state from navigation or defaults
    const [step, setStep] = useState(1);
    // Calendar state
    const [calViewDate, setCalViewDate] = useState(new Date(today.getFullYear(), today.getMonth(), 1));
    const [selectedDateObj, setSelectedDateObj] = useState(today);
    const [showCalendar, setShowCalendar] = useState(false);

    const [selectedTime, setSelectedTime] = useState('09:30 AM');
    const [timePeriod, setTimePeriod] = useState('Morning'); // Morning, Afternoon, Evening
    const [isBooking, setIsBooking] = useState(false);

    // Patient Details State
    const [patientDetails, setPatientDetails] = useState({
        fullName: '',
        age: '',
        gender: 'Male',
        phoneNumber: '',
        reason: '',
        bookingForSomeoneElse: false
    });

    const [formErrors, setFormErrors] = useState({});

    const [paymentMethod, setPaymentMethod] = useState('');
    const [showSuccess, setShowSuccess] = useState(false);

    // Auto-select valid time if current selection is in the past
    useEffect(() => {
        if (isTimeInPast(selectedTime)) {
            const morningSlots = ['09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM'];
            const afternoonSlots = ['12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM', '02:00 PM', '02:30 PM'];
            const eveningSlots = ['05:00 PM', '05:30 PM', '06:00 PM', '06:30 PM', '07:00 PM', '07:30 PM'];
            
            const allSlots = [...morningSlots, ...afternoonSlots, ...eveningSlots];
            const firstValid = allSlots.find(t => !isTimeInPast(t));
            
            if (firstValid) {
                setSelectedTime(firstValid);
                // Also update the period tab
                if (morningSlots.includes(firstValid)) setTimePeriod('Morning');
                else if (afternoonSlots.includes(firstValid)) setTimePeriod('Afternoon');
                else setTimePeriod('Evening');
            }
        }
    }, [selectedDateObj]);

    // Doctor info (fallback if not passed via state)
    // IMPORTANT: In Phase 2, we should fetch doctor details if ID is present but full object is missing.
    // For now maximizing resilience by fallback.
    const doctor = location.state?.doctor || {
        id: 1, // Fallback ID
        name: 'Dr. Sarah Mitchell',
        specialty: 'Senior Cardiologist',
        image: '/dr_sarah_johnson_1.png',
        location: 'Heartcare Specialist Center',
        fee: '800'
    };

    const feeStr = doctor.consultation_fee || doctor.fee || '800';
    const fee = parseInt(feeStr.replace(/[^0-9]/g, '') || 800);
    const tax = Math.round(fee * 0.18);
    const total = fee + tax;

    // ---- Calendar helpers ----
    const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
    const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

    const isSameDay = (a, b) =>
        a.getFullYear() === b.getFullYear() &&
        a.getMonth() === b.getMonth() &&
        a.getDate() === b.getDate();

    const formatDate = (d) => {
        const day = DAYS_SHORT[d.getDay()];
        const month = MONTHS[d.getMonth()].slice(0, 3);
        return { day, date: d.getDate(), month, year: d.getFullYear(), full: d };
    };

    // Generate 8 dates starting from selectedDateObj for the strip
    const generateStrip = () => {
        return Array.from({ length: 8 }, (_, i) => {
            const d = new Date(selectedDateObj);
            d.setDate(d.getDate() + i);
            return formatDate(d);
        });
    };

    const stripDates = generateStrip();

    const prevMonth = () => {
        setCalViewDate(prev => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
    };
    const nextMonth = () => {
        setCalViewDate(prev => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
    };

    const handleDayClick = (year, month, day) => {
        const clicked = new Date(year, month, day);
        clicked.setHours(0, 0, 0, 0);
        if (clicked < today) return; // disable past dates
        setSelectedDateObj(clicked);
        setCalViewDate(new Date(year, month, 1));
        setShowCalendar(false); // close calendar after picking a date
    };

    const buildCalendarGrid = () => {
        const year = calViewDate.getFullYear();
        const month = calViewDate.getMonth();
        const daysInMonth = getDaysInMonth(year, month);
        const firstDay = getFirstDayOfMonth(year, month);
        const cells = [];
        for (let i = 0; i < firstDay; i++) cells.push(null);
        for (let d = 1; d <= daysInMonth; d++) cells.push(d);
        return { year, month, cells };
    };

    const { year: calYear, month: calMonth, cells } = buildCalendarGrid();

    const isTimeInPast = (timeStr) => {
        const isToday = isSameDay(selectedDateObj, today);
        if (!isToday) return false;

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

    const handleBooking = async () => {
        setIsBooking(true);
        // Simulate API call for demo purpose
        setTimeout(() => {
            setIsBooking(false);
            setShowSuccess(true);
        }, 1500);
    };

    // Header with Progress Bar
    const renderHeader = () => (
        <div className="booking-header-container">
            <div className="booking-top-bar">
                <button className="back-circle-btn" onClick={() => step === 1 ? navigate(-1) : setStep(step - 1)}>
                    <FaChevronLeft />
                </button>
                <h2>Book Appointment</h2>

                <div className="booking-stepper">
                    {[
                        { num: 1, label: 'Slot' },
                        { num: 2, label: 'Review' },
                        { num: 3, label: 'Payment' }
                    ].map((item, index) => (
                        <React.Fragment key={item.num}>
                            <div className={`step-item ${step >= item.num ? 'active' : ''}`}>
                                <div className="step-circle">{item.num}</div>
                                <span className="step-label">{item.label}</span>
                            </div>
                            {index < 2 && <div className={`step-line ${step > item.num ? 'active' : ''}`}></div>}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );

    // Step 1: Slot Selection
    // Step 1: Patient Details (Replacing Slot Selection UI)
    const renderSlotSelection = () => {
        const handleProceedToReview = () => {
            const errors = {};
            if (!patientDetails.fullName.trim())
                errors.fullName = 'Full name is required.';
            if (!patientDetails.age || Number(patientDetails.age) <= 0 || Number(patientDetails.age) > 120)
                errors.age = 'Please enter a valid age (1–120).';
            if (!patientDetails.phoneNumber.trim() || patientDetails.phoneNumber.trim().length < 7)
                errors.phoneNumber = 'Please enter a valid phone number.';
            if (!patientDetails.reason.trim())
                errors.reason = 'Please describe your reason for visit.';
            setFormErrors(errors);
            if (Object.keys(errors).length === 0) setStep(2);
        };

        return (
            <div className="booking-body">
                <div className="booking-main-col">
                    <div className="booking-card">
                        <h3>Patient Details</h3>
                        <p className="sub-text">Please provide accurate info for the medical records.</p>
                        <hr className="divider" />
                        <form className="patient-form" onSubmit={(e) => e.preventDefault()}>
                            <div className="form-row">
                                <div className="form-group half">
                                    <label>Full Name <span className="required-star">*</span></label>
                                    <input
                                        type="text"
                                        placeholder="Enter your full name"
                                        value={patientDetails.fullName}
                                        className={formErrors.fullName ? 'input-error' : ''}
                                        onChange={(e) => { 
                                            const val = e.target.value.replace(/[^A-Za-z\s]/g, '');
                                            setPatientDetails({ ...patientDetails, fullName: val }); 
                                            if (formErrors.fullName) setFormErrors({ ...formErrors, fullName: '' }); 
                                        }}
                                    />
                                    {formErrors.fullName && <span className="error-msg">{formErrors.fullName}</span>}
                                </div>
                                <div className="form-group half">
                                    <label>Age <span className="required-star">*</span></label>
                                    <input
                                        type="number"
                                        placeholder="Enter age"
                                        value={patientDetails.age}
                                        className={formErrors.age ? 'input-error' : ''}
                                        onChange={(e) => { setPatientDetails({ ...patientDetails, age: e.target.value }); if (formErrors.age) setFormErrors({ ...formErrors, age: '' }); }}
                                    />
                                    {formErrors.age && <span className="error-msg">{formErrors.age}</span>}
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Gender</label>
                                <div className="gender-options">
                                    {['Male', 'Female', 'Other'].map(g => (
                                        <button key={g} type="button" className={`gender-btn ${patientDetails.gender === g ? 'active' : ''}`} onClick={() => setPatientDetails({ ...patientDetails, gender: g })}>{g}</button>
                                    ))}
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Phone Number <span className="required-star">*</span></label>
                                <input
                                    type="tel"
                                    placeholder="+91 XXXXX XXXXX"
                                    value={patientDetails.phoneNumber}
                                    className={formErrors.phoneNumber ? 'input-error' : ''}
                                    onChange={(e) => { 
                                        const val = e.target.value.replace(/\D/g, '');
                                        setPatientDetails({ ...patientDetails, phoneNumber: val }); 
                                        if (formErrors.phoneNumber) setFormErrors({ ...formErrors, phoneNumber: '' }); 
                                    }}
                                />
                                {formErrors.phoneNumber && <span className="error-msg">{formErrors.phoneNumber}</span>}
                            </div>
                            <div className="form-group">
                                <label>Reason For Visit <span className="required-star">*</span></label>
                                <textarea
                                    placeholder="Describe your reason for visit"
                                    value={patientDetails.reason}
                                    className={formErrors.reason ? 'input-error' : ''}
                                    onChange={(e) => { setPatientDetails({ ...patientDetails, reason: e.target.value }); if (formErrors.reason) setFormErrors({ ...formErrors, reason: '' }); }}
                                ></textarea>
                                {formErrors.reason && <span className="error-msg">{formErrors.reason}</span>}
                            </div>
                            <div className="form-group checkbox-row">
                                <input type="checkbox" id="others" checked={patientDetails.bookingForSomeoneElse} onChange={(e) => setPatientDetails({ ...patientDetails, bookingForSomeoneElse: e.target.checked })} />
                                <label htmlFor="others">Booking for someone else?</label>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="booking-sidebar-col">
                    <div className="booking-summary-card">
                        <div className="doc-summary-header">
                            <img src={doctor.image} alt={doctor.name} className="doc-img-sm" />
                            <div>
                                <h4>{doctor.name}</h4>
                                <p>{doctor.specialty}</p>
                            </div>
                        </div>
                        <div className="doc-summary-details">
                            <div className="summary-row">
                                <FaMapMarkerAlt className="icon-grey" />
                                <div className="summary-text-grp">
                                    <span className="label">Clinic Visit :</span>
                                    <span className="value">{doctor.location}</span>
                                </div>
                            </div>
                            <div className="summary-row">
                                <FaRegClock className="icon-grey" />
                                <div className="summary-text-grp">
                                    <span className="label">Consultation Fee:</span>
                                    <span className="value price">₹{fee}</span>
                                </div>
                            </div>
                        </div>
                        <div className="selected-slot-box">
                            <div>
                                <span className="slot-label-sm">Selected Slot</span>
                                <span className="slot-value-lg">
                                    {doctor.appointmentDate || MONTHS[selectedDateObj.getMonth()].slice(0, 3) + ' ' + selectedDateObj.getDate()}, {doctor.appointmentTime || selectedTime}
                                </span>
                            </div>
                            <FaCheckCircle className="check-icon" />
                        </div>
                        <button className="btn-continue" onClick={handleProceedToReview}>Continue Booking</button>
                    </div>
                </div>
            </div>
        );
    };

    // Step 2: Patient Details
    const renderPatientDetails = () => {
        const handleProceedToReview = () => {
            const errors = {};
            if (!patientDetails.fullName.trim())
                errors.fullName = 'Full name is required.';
            if (!patientDetails.age || Number(patientDetails.age) <= 0 || Number(patientDetails.age) > 120)
                errors.age = 'Please enter a valid age (1–120).';
            if (!patientDetails.phoneNumber.trim() || patientDetails.phoneNumber.trim().length < 7)
                errors.phoneNumber = 'Please enter a valid phone number.';
            if (!patientDetails.reason.trim())
                errors.reason = 'Please describe your reason for visit.';
            setFormErrors(errors);
            if (Object.keys(errors).length === 0) setStep(3);
        };
        return (
        <div className="booking-body-centered">
            <div className="booking-card-lg">
                <h3>Patient Details</h3>
                <p className="sub-text">Please provide accurate info for the medical records.</p>
                <hr className="divider" />
                <form className="patient-form" onSubmit={(e) => e.preventDefault()}>
                    <div className="form-row">
                        <div className="form-group half">
                            <label>Full Name <span className="required-star">*</span></label>
                            <input
                                type="text"
                                placeholder="Enter your full name"
                                value={patientDetails.fullName}
                                className={formErrors.fullName ? 'input-error' : ''}
                                onChange={(e) => { 
                                    const val = e.target.value.replace(/[^A-Za-z\s]/g, '');
                                    setPatientDetails({ ...patientDetails, fullName: val }); 
                                    if (formErrors.fullName) setFormErrors({ ...formErrors, fullName: '' }); 
                                }}
                            />
                            {formErrors.fullName && <span className="error-msg">{formErrors.fullName}</span>}
                        </div>
                        <div className="form-group half">
                            <label>Age <span className="required-star">*</span></label>
                            <input
                                type="number"
                                placeholder="Enter age (e.g. 25)"
                                min="1"
                                max="120"
                                value={patientDetails.age}
                                className={formErrors.age ? 'input-error' : ''}
                                onChange={(e) => { setPatientDetails({ ...patientDetails, age: e.target.value }); if (formErrors.age) setFormErrors({ ...formErrors, age: '' }); }}
                            />
                            {formErrors.age && <span className="error-msg">{formErrors.age}</span>}
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Gender</label>
                        <div className="gender-options">
                            {['Male', 'Female', 'Other'].map(g => (
                                <button key={g} type="button" className={`gender-btn ${patientDetails.gender === g ? 'active' : ''}`} onClick={() => setPatientDetails({ ...patientDetails, gender: g })}>{g}</button>
                            ))}
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Phone Number <span className="required-star">*</span></label>
                        <input
                            type="tel"
                            placeholder="+91 XXXXX XXXXX"
                            value={patientDetails.phoneNumber}
                            className={formErrors.phoneNumber ? 'input-error' : ''}
                            onChange={(e) => { 
                                const val = e.target.value.replace(/\D/g, '');
                                setPatientDetails({ ...patientDetails, phoneNumber: val }); 
                                if (formErrors.phoneNumber) setFormErrors({ ...formErrors, phoneNumber: '' }); 
                            }}
                        />
                        {formErrors.phoneNumber && <span className="error-msg">{formErrors.phoneNumber}</span>}
                    </div>
                    <div className="form-group">
                        <label>Reason For Visit <span className="required-star">*</span></label>
                        <textarea
                            placeholder="Describe your reason for visit (e.g. Fever, chest pain...)"
                            value={patientDetails.reason}
                            className={formErrors.reason ? 'input-error' : ''}
                            onChange={(e) => { setPatientDetails({ ...patientDetails, reason: e.target.value }); if (formErrors.reason) setFormErrors({ ...formErrors, reason: '' }); }}
                        ></textarea>
                        {formErrors.reason && <span className="error-msg">{formErrors.reason}</span>}
                    </div>
                    <div className="form-group checkbox-row">
                        <input type="checkbox" id="others" checked={patientDetails.bookingForSomeoneElse} onChange={(e) => setPatientDetails({ ...patientDetails, bookingForSomeoneElse: e.target.checked })} />
                        <label htmlFor="others">Booking for someone else?</label>
                    </div>
                    <div className="form-actions">
                        <button type="button" className="btn-back-light" onClick={() => setStep(1)}>Back</button>
                        <button type="button" className="btn-continue" onClick={handleProceedToReview}>Proceed To Payment</button>
                    </div>
                </form>
            </div>
        </div>
        );
    };

    // Step 2: Review Appointment
    const renderReview = () => (
        <div className="booking-body-centered">
            <div className="booking-card-lg">
                <h3>Review Appointment</h3>
                <p className="sub-text">Check everything is correct before proceeding.</p>

                <h4 className="section-title-sm">APPOINTMENT SUMMARY</h4>

                <div className="review-summary-box">
                    <div className="review-doc-header">
                        <img src={doctor.image} alt={doctor.name} />
                        <div>
                            <h4>{doctor.name}</h4>
                            <p>{doctor.specialty}</p>
                        </div>
                    </div>
                    <div className="review-details-grid">
                        <div className="review-item">
                            <FaCalendarAlt className="icon-teal" />
                            <span>{doctor.appointmentDate || (MONTHS[selectedDateObj.getMonth()].slice(0, 3) + ' ' + selectedDateObj.getDate() + ', ' + selectedDateObj.getFullYear())}</span>
                        </div>
                        <div className="review-item">
                            <FaRegClock className="icon-teal" /> <span>{doctor.appointmentTime || selectedTime}</span>
                        </div>
                        <div className="review-item">
                            <FaMapMarkerAlt className="icon-teal" /> <span>Clinic Visit</span>
                        </div>
                        <div className="review-item">
                            <FaWallet className="icon-teal" /> <span>₹{fee}</span>
                        </div>
                    </div>
                </div>

                <h4 className="section-title-sm">PATIENT INFO</h4>
                <div className="patient-info-card">
                    <div className="info-row">
                        <span className="label">Patient Name</span>
                        <span className="value">{patientDetails.fullName}</span>
                    </div>
                    <div className="info-row">
                        <span className="label">Phone Number</span>
                        <span className="label">+91 {patientDetails.phoneNumber}</span>
                    </div>
                    <div className="info-row">
                        <span className="label">Age / Gender</span>
                        <span className="value">{patientDetails.age} Yrs, {patientDetails.gender}</span>
                    </div>
                    <div className="info-row vertical" style={{ marginTop: '10px' }}>
                        <span className="label">Reason</span>
                        <span className="value">{patientDetails.reason}</span>
                    </div>
                </div>

                <div className="form-actions">
                    <button className="btn-back-light" onClick={() => setStep(1)}>Modify Details</button>
                    <button className="btn-continue" onClick={() => setStep(3)}>Confirm & Pay</button>
                </div>
            </div>
        </div>
    );

    // Step 4: Payment
    const renderPayment = () => (
        <div className="booking-body">
            <div className="booking-main-col">
                <div className="booking-card">
                    <h3>Payment Method</h3>
                    <div className="payment-options">
                        {[
                            { id: 'paytm', name: 'Paytm', img: '/paytm.png' },
                            { id: 'phonepay', name: 'PhonePe', img: '/phonepay.png' },
                            { id: 'upi', name: 'UPI / QR', img: '/upi.jpg' },
                            { id: 'googlepay', name: 'GPay', img: '/googlepay.jpg' }
                        ].map(method => (
                            <label key={method.id} className="payment-row">
                                <div className="pay-label-grp">
                                    <div className="pay-logo-box"><img src={method.img} alt={method.name} /></div>
                                    <span>{method.name}</span>
                                </div>
                                <input
                                    type="radio"
                                    name="payment"
                                    value={method.id}
                                    checked={paymentMethod === method.id}
                                    onChange={(e) => setPaymentMethod(e.target.value)}
                                />
                                <span className="radio-custom"></span>
                            </label>
                        ))}
                    </div>
                </div>
            </div>

            <div className="booking-sidebar-col">
                <div className="booking-card">
                    <h3>Price Breakdown</h3>
                    <div className="price-row">
                        <span>Consultation Fee</span>
                        <span>₹{fee}</span>
                    </div>
                    <div className="price-row">
                        <span>Service Tax (18% GST)</span>
                        <span>₹{tax}</span>
                    </div>
                    <hr className="divider" />
                    <div className="price-row total">
                        <span>Total Amount</span>
                        <span className="total-val">₹{total}</span>
                    </div>

                    <button className="btn-continue btn-pay" disabled={isBooking} onClick={handleBooking}>
                        {isBooking ? 'Processing...' : `Pay ₹${total}`}
                    </button>
                    <div className="back-link-wrapper">
                        <a onClick={() => setStep(2)}>Back to review</a>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderSuccessModal = () => (
        <div className="success-overlay">
            <div className="success-card">
                <div className="success-icon-bg">
                    <FaCheckCircle />
                </div>
                <h2>Payment Successful!</h2>
                <p>Your appointment has been confirmed for</p>
                <div className="confirmed-details">
                    <div className="detail-item">
                        <span className="label">Date:</span>
                        <span className="value">{MONTHS[selectedDateObj.getMonth()]} {selectedDateObj.getDate()}, {selectedDateObj.getFullYear()}</span>
                    </div>
                    <div className="detail-item">
                        <span className="label">Time:</span>
                        <span className="value">{selectedTime}</span>
                    </div>
                    <div className="detail-item">
                        <span className="label">Doctor:</span>
                        <span className="value">{doctor.name}</span>
                    </div>
                </div>
                <button className="btn-done" onClick={() => navigate('/')}>Done</button>
            </div>
        </div>
    );

    return (
        <div className="booking-page-container">
            {renderHeader()}
            <div className="booking-content-wrapper">
                {step === 1 && renderSlotSelection()}
                {step === 2 && renderReview()}
                {step === 3 && renderPayment()}
            </div>
            {showSuccess && renderSuccessModal()}
        </div>
    );
};

export default Booking;
