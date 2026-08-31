import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Hero.css';

function Hero() {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState('');
  const [destination, setDestination] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/hotels', {
      state: {
        destination,
        keyword
      }
    });
  };

  return (
    <div className="hero-section" style={{ backgroundImage: "url('/Images/bg_1.jpg')" }}>
      <div className="hero-overlay"></div>
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Find Extraordinary <span className="hero-highlight">Stays &amp; Dining</span>
          </h1>
          <p className="hero-description">
            Find great places to stay and eat with insider recommendations.
          </p>

          {/* Floating White Pill Search Form */}
          <div className="search-form">
            <form onSubmit={handleSubmit}>
              <div className="search-form-row">
                <div className="search-input">
                  <i className="fa-solid fa-magnifying-glass input-icon"></i>
                  <input
                    type="text"
                    placeholder="Ex: food, service, hotel"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                  />
                </div>

                <div className="search-input">
                  <i className="fa-solid fa-location-dot input-icon"></i>
                  <select
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                  >
                    <option value="">Where (All Locations)</option>
                    <option value="Shimla">Shimla, India</option>
                    <option value="Manali">Manali, India</option>
                    <option value="Varanasi">Varanasi, India</option>
                    <option value="Goa">Goa, India</option>
                    <option value="Kashmir">Kashmir, India</option>
                    <option value="Mumbai">Mumbai, India</option>
                    <option value="Jaipur">Jaipur, India</option>
                    <option value="Kedarnath">Kedarnath, India</option>
                  </select>
                </div>

                <button type="submit" className="search-submit">
                  <span>Search</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </form>
          </div>

          {/* Authentic Project Highlight Chips */}
          <div className="browse-wrapper">
            <span className="browse-text">Or browse the highlights:</span>
            <div className="browse-options">
              <Link to="/restaurant" className="browse-option">
                <i className="fa-solid fa-utensils"></i>
                <span>Restaurant</span>
              </Link>
              <Link to="/hotels" className="browse-option">
                <i className="fa-solid fa-hotel"></i>
                <span>Hotel</span>
              </Link>
              <Link to="/hotels" className="browse-option">
                <i className="fa-solid fa-location-dot"></i>
                <span>Places</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
