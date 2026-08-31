import React from 'react';
import DestinationCard from './DestinationCard';
import { destinations } from '../../data/destinations';
import './Destinations.css';

function Destinations() {
  return (
    <section className="destinations-section">
      <div className="container">
        <div className="section-title">
          <p className="section-subtitle">Featured</p>
          <h2 className="section-heading"><strong>Featured</strong> Destinations</h2>
        </div>

        <div className="destinations-grid">
          {destinations.slice(0, 6).map((destination) => (
            <DestinationCard
              key={destination.id}
              name={destination.name}
              image={destination.image}
              listingCount={destination.listingCount}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Destinations;
