import React from 'react';
import './HotelsHero.css';
import { FaBuilding, FaUsers, FaStar, FaShieldHalved } from 'react-icons/fa6';
import FilterBar from '../FilterBar/FilterBar';

function HotelsHero({ onSearch }) {
  return (
    <section className="hotels-hero-section">
      <div className="hotels-hero-bg"></div>
      <div className="container hotels-hero-container">
        <div className="hotels-hero-content">
          <div className="hero-tag">
            <span>✨ EXCLUSIVE STAYS & RESORTS</span>
          </div>
          <h1 className="hero-main-title">
            Discover & Book <span className="title-gradient">Luxury Stays</span>
          </h1>
          <p className="hero-main-subtitle">
            Explore curated top-rated hotels, boutique villas, and mountain chalets with best rate guarantee.
          </p>

          {/* Stats Bar */}
          <div className="hero-stats-row">
            <div className="stat-item">
              <FaBuilding className="stat-icon" />
              <div>
                <strong className="stat-num">500+</strong>
                <span className="stat-label">Luxury Hotels</span>
              </div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <FaUsers className="stat-icon" />
              <div>
                <strong className="stat-num">100k+</strong>
                <span className="stat-label">Happy Guests</span>
              </div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <FaStar className="stat-icon gold" />
              <div>
                <strong className="stat-num">4.9 / 5</strong>
                <span className="stat-label">Average Rating</span>
              </div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <FaShieldHalved className="stat-icon" />
              <div>
                <strong className="stat-num">100%</strong>
                <span className="stat-label">Verified Stays</span>
              </div>
            </div>
          </div>
        </div>

        {/* Integrated Search Card */}
        <div className="hero-filter-wrapper">
          <FilterBar onSearch={onSearch} />
        </div>
      </div>
    </section>
  );
}

export default HotelsHero;
