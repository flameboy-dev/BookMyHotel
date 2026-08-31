import React, { useState } from 'react';
import MapSection from './MapSection';
import './ContactInfo.css';

const ContactInfo = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'General Inquiry',
        message: ''
      });
    }, 3000);
  };

  return (
    <section className="contact-main-section">
      <div className="container">
        {/* Top 3 Luxury Contact Cards */}
        <div className="contact-cards-grid">
          <div className="contact-channel-card">
            <div className="contact-card-icon">
              <i className="fa-solid fa-headset"></i>
            </div>
            <div className="contact-card-info">
              <span className="card-tag">24/7 SUPPORT</span>
              <h3>Concierge Hotline</h3>
              <p className="card-primary-txt">+91 74079 69835</p>
              <p className="card-sub-txt">Toll-Free: 1800 200 4567</p>
            </div>
          </div>

          <div className="contact-channel-card">
            <div className="contact-card-icon">
              <i className="fa-solid fa-paper-plane"></i>
            </div>
            <div className="contact-card-info">
              <span className="card-tag">DIRECT EMAIL</span>
              <h3>Email Assistance</h3>
              <p className="card-primary-txt">support@bookmyhotel.com</p>
              <p className="card-sub-txt">Responded within 15 mins</p>
            </div>
          </div>

          <div className="contact-channel-card">
            <div className="contact-card-icon">
              <i className="fa-solid fa-building-user"></i>
            </div>
            <div className="contact-card-info">
              <span className="card-tag">HEADQUARTERS</span>
              <h3>Corporate Office</h3>
              <p className="card-primary-txt">BookMyHotel Tower, BKC</p>
              <p className="card-sub-txt">Bandra East, Mumbai, MH 400051</p>
            </div>
          </div>
        </div>

        {/* 2-Column Contact Form & Map Section */}
        <div className="contact-split-wrapper">
          {/* Left Column: Form */}
          <div className="contact-form-card">
            <span className="form-badge">SEND US A MESSAGE</span>
            <h2 className="form-title">We’d Love To Hear From You</h2>
            <p className="form-subtitle">
              Whether you need help with a reservation, room customization, or dining recommendations, our team is ready to assist.
            </p>

            {isSubmitted ? (
              <div className="form-success-alert">
                <i className="fa-solid fa-circle-check"></i>
                <div>
                  <h4>Message Sent Successfully!</h4>
                  <p>Thank you, {formData.name || 'valued guest'}. Our concierge team will reach out to you shortly.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="luxury-contact-form">
                <div className="form-row-2col">
                  <div className="input-group-box">
                    <label htmlFor="name">
                      <i className="fa-solid fa-user field-label-icon"></i> Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Rahul Sharma"
                      required
                    />
                  </div>

                  <div className="input-group-box">
                    <label htmlFor="email">
                      <i className="fa-solid fa-envelope field-label-icon"></i> Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="rahul@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="form-row-2col">
                  <div className="input-group-box">
                    <label htmlFor="phone">
                      <i className="fa-solid fa-phone field-label-icon"></i> Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div className="input-group-box">
                    <label htmlFor="subject">
                      <i className="fa-solid fa-list-check field-label-icon"></i> Inquiry Type
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Hotel Booking Support">Hotel Booking Support</option>
                      <option value="Table Reservation">Table Reservation Support</option>
                      <option value="Partnership & Media">Partnership &amp; Media</option>
                    </select>
                  </div>
                </div>

                <div className="input-group-box">
                  <label htmlFor="message">
                    <i className="fa-solid fa-message field-label-icon"></i> Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help with your stay or reservation..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className="contact-submit-btn">
                  <span>Send Message</span>
                  <i className="fa-solid fa-paper-plane btn-arrow-icon"></i>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Map */}
          <div className="contact-map-wrapper">
            <MapSection />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;