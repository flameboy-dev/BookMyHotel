import React from 'react';
import { Link } from 'react-router-dom';
import './AboutCTA.css';

function AboutCTA() {
  return (
    <section className="about-cta-section">
      <div className="container">
        <div className="about-cta-card">
          <div className="cta-content">
            <span className="cta-badge">READY TO EXPLORE?</span>
            <h2 className="cta-title">Find Your Next Extraordinary Stay</h2>
            <p className="cta-desc">
              Discover curated luxury hotels, heritage resorts, and premier dining destinations across India.
            </p>
            <div className="cta-buttons">
              <Link to="/hotels" className="btn btn-primary cta-btn-primary">
                <span>Browse Hotels</span>
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
              <Link to="/restaurant" className="btn cta-btn-secondary">
                <span>Explore Restaurants</span>
                <i className="fa-solid fa-utensils"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutCTA;
