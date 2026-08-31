import React, { useState } from 'react';
import { FaStar, FaStarHalfStroke, FaRegStar, FaXmark, FaLocationDot, FaArrowRight, FaCalendarDays, FaClock, FaUserGroup } from 'react-icons/fa6';
import './Restaurant.css';

function RestaurantCard({ id, name, location, image, description, rating, amenities }) {
  const [showPopup, setShowPopup] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const todayStr = new Date().toISOString().split('T')[0];

  const [reservationData, setReservationData] = useState({
    name: '',
    date: todayStr,
    time: '19:30',
    guests: 2,
    specialRequests: ''
  });

  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<FaStar key={`star-${i}`} className="star-icon full" />);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<FaStarHalfStroke key={`star-half`} className="star-icon half" />);
      } else {
        stars.push(<FaRegStar key={`star-empty-${i}`} className="star-icon empty" />);
      }
    }

    return stars;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReservationData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (reservationData.date && reservationData.date < todayStr) {
      alert('Reservation date cannot be in the past.');
      return;
    }

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setShowPopup(false);
    }, 2000);
  };

  return (
    <>
      <div className="hotel-card restaurant-card-variant">
        <div className="hotel-image-wrapper">
          <div
            className="hotel-image-bg"
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className="hotel-gradient-overlay"></div>
          <div className="hotel-rating-badge">
            <FaStar className="star-icon" />
            <span>{rating.toFixed(1)}</span>
          </div>
          <div className="hotel-price-badge dining-badge-style">
            <span className="price-amount">Fine Dining</span>
          </div>
        </div>

        <div className="hotel-content">
          <h3 className="hotel-name" title={name}>{name}</h3>

          <div className="hotel-location">
            <FaLocationDot className="location-icon" />
            <span>{location}</span>
          </div>

          <p className="hotel-description">{description}</p>

          <div className="hotel-amenities">
            {amenities?.slice(0, 3).map((amenity, index) => (
              <span key={index} className="hotel-amenity">{amenity}</span>
            ))}
            {amenities?.length > 3 && (
              <span className="hotel-amenity extra">+{amenities.length - 3}</span>
            )}
          </div>

          <div className="hotel-card-footer">
            <button
              className="hotel-link"
              onClick={() => setShowPopup(true)}
            >
              <span>Reserve Table</span>
              <FaArrowRight className="link-arrow" />
            </button>
          </div>
        </div>
      </div>

      {/* Reservation Popup */}
      {showPopup && (
        <div className="restaurant-popup-overlay">
          <div className="popup-card-content">
            <button className="close-popup-btn" onClick={() => setShowPopup(false)} aria-label="Close modal">
              <FaXmark />
            </button>

            {isSubmitted ? (
              <div className="reservation-success-msg" style={{ textAlign: 'center', padding: '2.5rem 1rem' }}>
                <i className="fa-solid fa-circle-check" style={{ fontSize: '3.5rem', color: '#10b981', marginBottom: '1rem' }}></i>
                <h3 style={{ fontSize: '1.5rem', color: '#0f172a', fontWeight: 800, marginBottom: '0.5rem' }}>Reservation Confirmed!</h3>
                <p style={{ color: '#475569', fontSize: '0.95rem' }}>
                  Your table at <strong>{name}</strong> is reserved for <strong>{reservationData.guests} guests</strong> on <strong>{reservationData.date}</strong> at <strong>{reservationData.time}</strong>.
                </p>
              </div>
            ) : (
              <>
                <div className="popup-restaurant-header">
                  <div
                    className="popup-restaurant-thumb"
                    style={{ backgroundImage: `url(${image})` }}
                  ></div>
                  <div className="popup-restaurant-details">
                    <h3>{name}</h3>
                    <div className="popup-location">
                      <FaLocationDot />
                      <span>{location}</span>
                    </div>
                    <div className="popup-rating-row">
                      {renderStars()}
                      <span className="rating-num">{rating.toFixed(1)}</span>
                    </div>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="reservation-form">
                  <div className="form-group">
                    <label htmlFor="res-name">Full Name</label>
                    <input
                      type="text"
                      id="res-name"
                      name="name"
                      value={reservationData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="form-row-grid">
                    <div className="form-group">
                      <label htmlFor="res-date">
                        <FaCalendarDays className="field-icon" /> Date
                      </label>
                      <input
                        type="date"
                        id="res-date"
                        name="date"
                        value={reservationData.date}
                        onChange={handleInputChange}
                        required
                        min={todayStr}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="res-time">
                        <FaClock className="field-icon" /> Time
                      </label>
                      <input
                        type="time"
                        id="res-time"
                        name="time"
                        value={reservationData.time}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="res-guests">
                      <FaUserGroup className="field-icon" /> Number of Guests
                    </label>
                    <select
                      id="res-guests"
                      name="guests"
                      value={reservationData.guests}
                      onChange={handleInputChange}
                      required
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12].map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="res-notes">Special Requests (Optional)</label>
                    <textarea
                      id="res-notes"
                      name="specialRequests"
                      value={reservationData.specialRequests}
                      onChange={handleInputChange}
                      placeholder="Dietary preferences, seating request, anniversary..."
                      rows="2"
                    />
                  </div>

                  <button type="submit" className="submit-reservation-btn">
                    Confirm Table Booking
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default RestaurantCard;