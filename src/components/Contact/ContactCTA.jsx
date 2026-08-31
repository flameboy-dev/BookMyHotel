import React from 'react';
import { Link } from 'react-router-dom';
import './ContactCTA.css';

function ContactCTA() {
  return (
    <section className="contact-cta-section">
      <div className="container">
        <div className="contact-cta-card">
          <div className="cta-text-content">
            <span className="cta-badge-tag">HAVE QUICK QUESTIONS?</span>
            <h2 className="cta-headline">Explore Our Frequently Asked Questions</h2>
            <p className="cta-subhead">
              Find instant answers about room bookings, cancellation policies, dining vouchers, and concierge services.
            </p>
          </div>

          <div className="cta-buttons-group">
            <Link to="/about" className="btn btn-primary cta-btn-white">
              <span>View All FAQs</span>
              <i className="fa-solid fa-arrow-right"></i>
            </Link>
            <a href="tel:+917407969835" className="btn cta-btn-outline">
              <i className="fa-solid fa-phone"></i>
              <span>Call Concierge Now</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactCTA;
