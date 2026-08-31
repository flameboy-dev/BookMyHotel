import React from 'react';
import { Link } from 'react-router-dom';
import './AboutStory.css';

function AboutStory() {
  return (
    <section className="about-story-section">
      <div className="container">
        {/* Brand Story Row */}
        <div className="about-story-row">
          <div className="about-story-images">
            <div className="img-box img-large">
              <img
                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80"
                alt="Luxury Hotel Exterior"
              />
            </div>
            <div className="img-box img-small">
              <img
                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=600&q=80"
                alt="Resort Pool Sunset"
              />
            </div>
            <div className="experience-badge">
              <span className="exp-num">100%</span>
              <span className="exp-text">Verified Stays</span>
            </div>
          </div>

          <div className="about-story-text">
            <span className="story-badge">OUR BRAND STORY</span>
            <h2 className="story-title">Crafting Unforgettable Hospitality Experiences</h2>
            <p className="story-desc">
              BookMyHotel was founded with a singular purpose: to connect discerning travelers with India's finest handpicked hotels, boutique mountain retreats, and luxury dining destinations.
            </p>
            <p className="story-desc">
              We eliminate the friction of travel planning by offering transparent pricing, guaranteed room reservations, and curated recommendations tailored to your taste. Whether you seek a tranquil beach resort in Goa or a heritage palace stay in Jaipur, we ensure every trip exceeds your expectations.
            </p>

            <div className="story-highlights">
              <div className="highlight-item">
                <div className="highlight-icon-box">
                  <i className="fa-solid fa-shield-halved"></i>
                </div>
                <div>
                  <h4>Transparent Pricing</h4>
                  <p>No hidden fees or unexpected charges at check-in.</p>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon-box">
                  <i className="fa-solid fa-headset"></i>
                </div>
                <div>
                  <h4>24/7 Concierge Support</h4>
                  <p>Dedicated travel support team whenever you need help.</p>
                </div>
              </div>
            </div>

            <div className="story-actions">
              <Link to="/hotels" className="btn btn-primary story-btn">
                <span>Explore Luxury Hotels</span>
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>

        {/* Luxury Glassmorphism Dark Slate Stats Counter Bar */}
        <div className="luxury-stats-bar">
          <div className="luxury-stat-card">
            <div className="stat-badge-icon">
              <i className="fa-solid fa-hotel"></i>
            </div>
            <div className="stat-info">
              <h3 className="stat-val">250+</h3>
              <p className="stat-lbl">Handpicked Hotels</p>
            </div>
          </div>

          <div className="luxury-stat-card">
            <div className="stat-badge-icon">
              <i className="fa-solid fa-users"></i>
            </div>
            <div className="stat-info">
              <h3 className="stat-val">15,000+</h3>
              <p className="stat-lbl">Happy Travelers</p>
            </div>
          </div>

          <div className="luxury-stat-card">
            <div className="stat-badge-icon">
              <i className="fa-solid fa-map-location-dot"></i>
            </div>
            <div className="stat-info">
              <h3 className="stat-val">45+</h3>
              <p className="stat-lbl">Top Destinations</p>
            </div>
          </div>

          <div className="luxury-stat-card">
            <div className="stat-badge-icon">
              <i className="fa-solid fa-star"></i>
            </div>
            <div className="stat-info">
              <h3 className="stat-val">4.9 / 5</h3>
              <p className="stat-lbl">Average Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutStory;
