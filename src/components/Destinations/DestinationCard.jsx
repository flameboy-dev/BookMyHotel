import React from 'react';
import { useNavigate } from 'react-router-dom';

function DestinationCard({ name, image, listingCount }) {
  const navigate = useNavigate();
  const cityName = name.split(',')[0].trim();

  const handleClick = () => {
    navigate('/hotels', {
      state: { destination: cityName }
    });
  };

  return (
    <div
      className="destination-card"
      onClick={handleClick}
      role="button"
      tabIndex={0}
      title={`Explore hotels in ${cityName}`}
    >
      <div
        className="destination-image"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="destination-icon">
          <i className="fas fa-arrow-right"></i>
        </div>
      </div>
      <div className="destination-overlay">
        <h3 className="destination-name">{name}</h3>
        <span className="destination-listings">{listingCount} Available Stays</span>
      </div>
    </div>
  );
}

export default DestinationCard;
