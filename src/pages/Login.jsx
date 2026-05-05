import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import api from '../lib/api';
import { Link, useNavigate } from 'react-router-dom';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import './Auth.css';

const Login = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        emailOrPhone: '',
        password: '',
        rememberMe: false
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const [isForgotPassword, setIsForgotPassword] = useState(false);
    const [resetSent, setResetSent] = useState(false);

    const handleForgotPasswordSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        
        try {
            // Mocking API call for forgot password
            await new Promise(resolve => setTimeout(resolve, 1500));
            setResetSent(true);
        } catch (err) {
            setError('Failed to send reset link. Please check your email.');
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e) => {
        if (isForgotPassword) {
            return handleForgotPasswordSubmit(e);
        }
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            // Using OAuth2 spec: form-data body
            const params = new URLSearchParams();
            params.append('username', formData.emailOrPhone);
            params.append('password', formData.password);

            const response = await api.post('/auth/login', params, {
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            });

            const { access_token } = response.data;
            const payload = JSON.parse(atob(access_token.split('.')[1]));
            const user = {
                id: payload.sub,
                role: payload.role,
                email: formData.emailOrPhone,
                full_name: 'User' // Placeholder
            };

            login(access_token, user);

            if (user.role === 'doctor') {
                window.location.href = 'http://localhost:3000'; // Redirect to Doctor Dashboard
            } else {
                navigate('/');
            }

        } catch (err) {
            console.error('Login Failed', err);
            setError('Invalid credentials. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <div className="auth-form-section">
                    {!isForgotPassword ? (
                        <>
                            <div className="auth-header">
                                <h1>Login To Your Account</h1>
                                <p>Welcome back, Please enter your details.</p>
                            </div>

                            {error && <div className="error-message" style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}

                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="emailOrPhone">Email</label>
                                    <input
                                        type="text"
                                        id="emailOrPhone"
                                        name="emailOrPhone"
                                        placeholder="Enter email"
                                        value={formData.emailOrPhone}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        placeholder="Enter password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="form-options">
                                    <label className="remember-me">
                                        <input
                                            type="checkbox"
                                            name="rememberMe"
                                            checked={formData.rememberMe}
                                            onChange={handleChange}
                                        />
                                        Remember me
                                    </label>
                                    <button 
                                        type="button" 
                                        onClick={() => setIsForgotPassword(true)} 
                                        className="forgot-password-link"
                                        style={{ background: 'none', border: 'none', color: '#27B992', cursor: 'pointer', fontSize: '14px', fontWeight: '600' }}
                                    >
                                        Forget Password?
                                    </button>
                                </div>

                                <button type="submit" className="auth-btn" disabled={loading}>
                                    {loading ? 'Logging in...' : 'Log In'}
                                </button>

                                <div className="divider">Or Continue With</div>

                                <div className="social-login">
                                    <div className="social-btn"><FaFacebook size={24} color="#1877F2" /></div>
                                    <div className="social-btn"><FcGoogle size={24} /></div>
                                </div>

                                <div className="auth-footer">
                                    Don't Have An Account? <Link to="/signup" style={{ color: '#27B992', fontWeight: '600', textDecoration: 'none' }}>Create One</Link>
                                </div>
                            </form>
                        </>
                    ) : (
                        <>
                            <div className="auth-header">
                                <h1>Reset Your Password</h1>
                                <p>{resetSent ? 'Check your inbox for a reset link.' : 'Enter your email to receive a recovery link.'}</p>
                            </div>

                            {error && <div className="error-message" style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}
                            
                            {!resetSent ? (
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="resetEmail">Email Address</label>
                                        <input
                                            type="email"
                                            id="resetEmail"
                                            name="emailOrPhone"
                                            placeholder="Enter your registered email"
                                            value={formData.emailOrPhone}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <button type="submit" className="auth-btn" disabled={loading}>
                                        {loading ? 'Sending link...' : 'Send Reset Link'}
                                    </button>

                                    <div className="auth-footer" style={{ marginTop: '20px' }}>
                                        Remembered password? <button type="button" onClick={() => setIsForgotPassword(false)} style={{ background: 'none', border: 'none', color: '#27B992', cursor: 'pointer', fontWeight: '600' }}>Back to Login</button>
                                    </div>
                                </form>
                            ) : (
                                <div style={{ textAlign: 'center', marginTop: '30px' }}>
                                    <div className="success-icon" style={{ fontSize: '40px', color: '#27B992', marginBottom: '10px' }}>✓</div>
                                    <p style={{ color: '#666', marginBottom: '30px' }}>We've sent a password reset link to <strong>{formData.emailOrPhone}</strong>.</p>
                                    <button 
                                        type="button" 
                                        onClick={() => { setIsForgotPassword(false); setResetSent(false); }} 
                                        className="auth-btn"
                                    >
                                        Back to Login
                                    </button>
                                </div>
                            )}
                        </>
                    )}
                </div>
                <div className="auth-image-section">
                    <img src="/login_page_image.png" alt="Doctors Team" />
                </div>
            </div>
        </div>
    );
};

export default Login;
