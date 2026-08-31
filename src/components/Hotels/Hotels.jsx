import React from 'react';
import { Link } from 'react-router-dom';
import HotelCard from './HotelCard';
import { hotels } from '../../data/hotels';
import './Hotels.css';

function Hotels() {
  return (
    <section className="hotels-section">
      <div className="container">
        <div className="section-title">
          <p className="section-subtitle">Popular</p>
          <h2 className="section-heading"><strong>Popular</strong> Hotels & Rooms</h2>
        </div>

        <div className="hotels-grid">
          {hotels.map(hotel => (
            <HotelCard
              key={hotel.id}
              id={hotel.id}
              name={hotel.name}
              location={hotel.location}
              image={hotel.image}
              price={hotel.price}
              description={hotel.description}
              rating={hotel.rating}
              amenities={hotel.amenities}
            />
          ))}
        </div>

        <div className="more-button-container">
          <Link to="/hotels" className="hotel-link-more">More..</Link>
        </div>
      </div>
    </section>
  );
}

export default Hotels;
