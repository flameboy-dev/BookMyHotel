import React from 'react';
import './RestaurantFeatures.css';

function RestaurantFeatures() {
  const features = [
    {
      icon: 'fa-solid fa-wine-glass',
      title: 'Chef-Curated Menus',
      description: 'Handpicked fine dining destinations featuring Michelin-trained chefs and exclusive tasting menus.',
    },
    {
      icon: 'fa-solid fa-utensils',
      title: 'Farm-to-Table Freshness',
      description: 'Sustainably sourced organic ingredients and authentic regional flavors crafted daily.',
    },
    {
      icon: 'fa-solid fa-champagne-glasses',
      title: 'Romantic & Private Dining',
      description: 'Private cabanas, rooftop sunset views, and candlelit ambiance for your special occasions.',
    },
    {
      icon: 'fa-solid fa-bolt',
      title: 'Instant Table Confirmation',
      description: 'Reserve your table instantly with real-time seat availability and zero booking fees.',
    },
  ];

  return (
    <section className="dining-features-section">
      <div className="container">
        <div className="dining-features-header text-center">
          <span className="dining-badge">THE BOOKMYHOTEL EXPERIENCE</span>
          <h2 className="dining-title">Why Reserve Dining With Us</h2>
          <p className="dining-subtitle">
            Immerse yourself in extraordinary culinary journeys across India's top destinations.
          </p>
        </div>

        <div className="dining-features-grid">
          {features.map((item, index) => (
            <div key={index} className="dining-feature-card">
              <div className="dining-icon-badge">
                <i className={item.icon}></i>
              </div>
              <h3 className="dining-card-title">{item.title}</h3>
              <p className="dining-card-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RestaurantFeatures;
