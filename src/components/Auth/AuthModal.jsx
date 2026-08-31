import React, { useState } from 'react';
import { FaEye, FaEyeSlash, FaXmark, FaEnvelope, FaLock, FaUser, FaCircleCheck, FaArrowLeft } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import authModel from '../../models/authModel';
import './AuthModal.css';

function AuthModal({ isOpen, onClose, initialMode = 'login' }) {
  const [authMode, setAuthMode] = useState(initialMode); // 'login' | 'signup' | 'forgot'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [successMsg, setSuccessMsg] = useState('');
  const navigate = useNavigate();

  if (!isOpen) return null;

  const isSignUp = authMode === 'signup';
  const isForgot = authMode === 'forgot';

  const switchMode = (mode) => {
    setAuthMode(mode);
    setFormData({ name: '', email: '', password: '', confirmPassword: '' });
    setErrors({});
    setSuccessMsg('');
  };

  const validateForm = () => {
    const newErrors = {};

    if (isForgot) {
      if (!formData.email.trim()) {
        newErrors.email = 'Email address is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Enter a valid email address';
      }
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    }

    if (isSignUp) {
      if (!formData.name.trim()) {
        newErrors.name = 'Full name is required';
      }
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    if (isForgot) {
      setSuccessMsg('Password reset link sent to your email!');
      return;
    }

    if (isSignUp) {
      authModel.login({ name: formData.name, email: formData.email, role: 'user' });
      setSuccessMsg('Account created successfully!');
    } else {
      authModel.login({ email: formData.email, role: 'user' });
      setSuccessMsg('Logged in successfully!');
    }

    setTimeout(() => {
      onClose();
      navigate('/user');
    }, 1400);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="compact-modal-overlay" onClick={onClose}>
      <div
        className={`compact-modal-card ${isSignUp ? 'signup-wide' : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button className="compact-close-btn" onClick={onClose} aria-label="Close modal">
          <FaXmark />
        </button>

        {/* Modal Header */}
        <div className="compact-header text-center">
          <div className="compact-logo">
            <img src="/Images/logo.png" alt="BookMyHotel" />
          </div>
          <h2 className="compact-title">
            {isForgot
              ? 'Reset Password'
              : isSignUp
              ? 'Create Your Account'
              : 'Welcome Back'}
          </h2>

          {!isForgot && (
            /* Toggle Pill Switcher for Log In / Create Account */
            <div className="compact-tab-pill">
              <button
                type="button"
                className={`compact-tab-btn ${authMode === 'login' ? 'active' : ''}`}
                onClick={() => switchMode('login')}
              >
                Log In
              </button>
              <button
                type="button"
                className={`compact-tab-btn ${authMode === 'signup' ? 'active' : ''}`}
                onClick={() => switchMode('signup')}
              >
                Create Account
              </button>
            </div>
          )}

          {isForgot && (
            <p className="compact-subtitle-desc">
              Enter your registered email address below and we'll send you instructions to reset your password.
            </p>
          )}
        </div>

        {/* Modal Form Body */}
        <div className="compact-body">
          {successMsg ? (
            <div className="compact-success text-center">
              <FaCircleCheck className="compact-success-icon" />
              <h3>{successMsg}</h3>
              {isForgot && (
                <button
                  type="button"
                  className="compact-back-btn mt-3"
                  onClick={() => switchMode('login')}
                >
                  <FaArrowLeft /> Back to Log In
                </button>
              )}
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="compact-form">
              {isForgot ? (
                /* Forgot Password Form */
                <>
                  <div className="compact-field">
                    <label htmlFor="c-email">
                      <FaEnvelope className="field-icon" /> Email Address
                    </label>
                    <input
                      type="email"
                      id="c-email"
                      name="email"
                      placeholder="rahul@example.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && <small className="compact-error">{errors.email}</small>}
                  </div>

                  <button type="submit" className="compact-submit-btn">
                    Send Reset Link
                  </button>

                  <div className="compact-forgot-back text-center">
                    <button
                      type="button"
                      className="compact-switch-btn back-link"
                      onClick={() => switchMode('login')}
                    >
                      <FaArrowLeft /> Back to Log In
                    </button>
                  </div>
                </>
              ) : isSignUp ? (
                /* 2-Column Grid for Signup */
                <>
                  <div className="compact-grid-2col">
                    <div className="compact-field">
                      <label htmlFor="c-name">
                        <FaUser className="field-icon" /> Full Name
                      </label>
                      <input
                        type="text"
                        id="c-name"
                        name="name"
                        placeholder="Rahul Sharma"
                        value={formData.name}
                        onChange={handleChange}
                      />
                      {errors.name && <small className="compact-error">{errors.name}</small>}
                    </div>

                    <div className="compact-field">
                      <label htmlFor="c-email">
                        <FaEnvelope className="field-icon" /> Email Address
                      </label>
                      <input
                        type="email"
                        id="c-email"
                        name="email"
                        placeholder="rahul@example.com"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {errors.email && <small className="compact-error">{errors.email}</small>}
                    </div>
                  </div>

                  <div className="compact-grid-2col">
                    <div className="compact-field">
                      <label htmlFor="c-password">
                        <FaLock className="field-icon" /> Password
                      </label>
                      <div className="compact-pass-wrapper">
                        <input
                          type={showPassword ? 'text' : 'password'}
                          id="c-password"
                          name="password"
                          placeholder="••••••••"
                          value={formData.password}
                          onChange={handleChange}
                        />
                        <button
                          type="button"
                          className="compact-eye-toggle"
                          onClick={() => setShowPassword((prev) => !prev)}
                        >
                          {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                      </div>
                      {errors.password && <small className="compact-error">{errors.password}</small>}
                    </div>

                    <div className="compact-field">
                      <label htmlFor="c-confirm-password">
                        <FaLock className="field-icon" /> Confirm Password
                      </label>
                      <div className="compact-pass-wrapper">
                        <input
                          type={showConfirmPassword ? 'text' : 'password'}
                          id="c-confirm-password"
                          name="confirmPassword"
                          placeholder="••••••••"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                        />
                        <button
                          type="button"
                          className="compact-eye-toggle"
                          onClick={() => setShowConfirmPassword((prev) => !prev)}
                        >
                          {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                      </div>
                      {errors.confirmPassword && (
                        <small className="compact-error">{errors.confirmPassword}</small>
                      )}
                    </div>
                  </div>

                  <button type="submit" className="compact-submit-btn">
                    Create Account
                  </button>
                </>
              ) : (
                /* Single-Column Stack for Login */
                <>
                  <div className="compact-field">
                    <label htmlFor="c-email">
                      <FaEnvelope className="field-icon" /> Email Address
                    </label>
                    <input
                      type="email"
                      id="c-email"
                      name="email"
                      placeholder="rahul@example.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && <small className="compact-error">{errors.email}</small>}
                  </div>

                  <div className="compact-field">
                    <label htmlFor="c-password">
                      <FaLock className="field-icon" /> Password
                    </label>
                    <div className="compact-pass-wrapper">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        id="c-password"
                        name="password"
                        placeholder="••••••••"
                        value={formData.password}
                        onChange={handleChange}
                      />
                      <button
                        type="button"
                        className="compact-eye-toggle"
                        onClick={() => setShowPassword((prev) => !prev)}
                      >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </button>
                    </div>
                    {errors.password && <small className="compact-error">{errors.password}</small>}
                  </div>

                  <div className="compact-forgot">
                    <button
                      type="button"
                      onClick={() => switchMode('forgot')}
                      className="compact-forgot-link-btn"
                    >
                      Forgot password?
                    </button>
                  </div>

                  <button type="submit" className="compact-submit-btn">
                    Log In
                  </button>
                </>
              )}
            </form>
          )}
        </div>

        {/* Modal Footer (for Log In & Create Account) */}
        {!isForgot && !successMsg && (
          <div className="compact-footer text-center">
            <p>
              {isSignUp ? 'Already a member?' : "Don't have an account?"}
              <button
                type="button"
                className="compact-switch-btn"
                onClick={() => switchMode(isSignUp ? 'login' : 'signup')}
              >
                {isSignUp ? ' Log In' : ' Sign Up'}
              </button>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default AuthModal;
