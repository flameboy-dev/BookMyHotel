import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaLocationDot, FaArrowRight } from 'react-icons/fa6';

function HotelCard({ id, name, location, image, price, description, rating, amenities }) {
  const displayPrice = typeof price === 'object'
    ? Math.min(...Object.values(price))
    : (Number(price) || 0);

  return (
    <div className="hotel-card">
      <div className="hotel-image-wrapper">
        <div
          className="hotel-image-bg"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="hotel-gradient-overlay"></div>
        <div className="hotel-rating-badge">
          <FaStar className="star-icon" />
          <span>{rating}</span>
        </div>
        <div className="hotel-price-badge">
          <span className="price-amount">₹{displayPrice.toLocaleString()}</span>
          <span className="price-period">/night</span>
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
          <Link to={`/hotels/${id}`} className="hotel-link">
            <span>Book Stay</span>
            <FaArrowRight className="link-arrow" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HotelCard;
