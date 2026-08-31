import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-container">
          {/* Column 1: Brand & Socials */}
          <div className="footer-column footer-about">
            <div className="footer-brand-logo">
              <Link to="/">
                <img src="/Images/logo.png" alt="BookMyHotel" className="footer-logo-img" />
              </Link>
            </div>
            <p className="footer-desc">
              Discover and book handpicked luxury stays, heritage resorts, and top dining destinations across India — effortlessly.
            </p>
            <div className="footer-social">
              <a href="#" className="footer-social-icon" aria-label="Facebook">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" className="footer-social-icon" aria-label="Twitter">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a href="#" className="footer-social-icon" aria-label="Instagram">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" className="footer-social-icon" aria-label="LinkedIn">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-column">
            <h3 className="footer-title">Quick Navigation</h3>
            <ul className="footer-links">
              <li className="footer-link">
                <Link to="/"><i className="fa-solid fa-chevron-right link-arrow"></i> Home</Link>
              </li>
              <li className="footer-link">
                <Link to="/hotels"><i className="fa-solid fa-chevron-right link-arrow"></i> Browse Hotels</Link>
              </li>
              <li className="footer-link">
                <Link to="/restaurant"><i className="fa-solid fa-chevron-right link-arrow"></i> Restaurants</Link>
              </li>
              <li className="footer-link">
                <Link to="/about"><i className="fa-solid fa-chevron-right link-arrow"></i> About Us</Link>
              </li>
              <li className="footer-link">
                <Link to="/contact"><i className="fa-solid fa-chevron-right link-arrow"></i> Contact Support</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Portals & Account */}
          <div className="footer-column">
            <h3 className="footer-title">Access & Portals</h3>
            <ul className="footer-links">
              <li className="footer-link">
                <Link to="/admin/login"><i className="fa-solid fa-chevron-right link-arrow"></i> Admin Portal</Link>
              </li>
              <li className="footer-link">
                <Link to="/hotel/login"><i className="fa-solid fa-chevron-right link-arrow"></i> Hotel Manager Login</Link>
              </li>
              <li className="footer-link">
                <Link to="/user"><i className="fa-solid fa-chevron-right link-arrow"></i> Guest Dashboard</Link>
              </li>
              <li className="footer-link">
                <Link to="/auth"><i className="fa-solid fa-chevron-right link-arrow"></i> Sign In / Register</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Newsletter */}
          <div className="footer-column">
            <h3 className="footer-title">Contact & Updates</h3>
            <div className="footer-contact">
              <div className="footer-contact-item">
                <div className="footer-contact-icon">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div className="footer-contact-text">
                  NH17, Namkhana, West Bengal, India
                </div>
              </div>
              <div className="footer-contact-item">
                <div className="footer-contact-icon">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div className="footer-contact-text">
                  +91 7407969835
                </div>
              </div>
              <div className="footer-contact-item">
                <div className="footer-contact-icon">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div className="footer-contact-text">
                  shubhajit.giri@tnu.in
                </div>
              </div>
            </div>

            <div className="footer-subscribe">
              {subscribed ? (
                <div className="subscribe-success">
                  <i className="fa-solid fa-circle-check"></i> Thank you for subscribing!
                </div>
              ) : (
                <form className="footer-subscribe-form" onSubmit={handleSubscribe}>
                  <input
                    type="email"
                    className="footer-subscribe-input"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button type="submit" className="footer-subscribe-button">Subscribe</button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Footer Bottom Row */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            Copyright &copy; {currentYear} <strong>BookMyHotel</strong>. All rights reserved.
          </p>
          <div className="footer-payments">
            <span className="payment-badge"><i className="fa-brands fa-cc-visa"></i> Visa</span>
            <span className="payment-badge"><i className="fa-brands fa-cc-mastercard"></i> Mastercard</span>
            <span className="payment-badge"><i className="fa-solid fa-mobile-screen"></i> UPI / GPay</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;