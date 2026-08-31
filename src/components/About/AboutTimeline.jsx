import React from 'react';
import './AboutTimeline.css';

function AboutTimeline() {
  const milestones = [
    {
      year: '2022',
      title: 'Platform Genesis',
      description: 'Launched BookMyHotel with 10 handpicked boutique retreats in Shimla & Manali.',
      icon: 'fa-solid fa-rocket',
    },
    {
      year: '2023',
      title: 'Nationwide Expansion',
      description: 'Expanded across 25 major destinations including Goa, Rajasthan, Kerala & Kashmir.',
      icon: 'fa-solid fa-map-location-dot',
    },
    {
      year: '2024',
      title: 'Dining & Villa Integration',
      description: 'Introduced curated restaurant reservations and luxury villa partnerships for complete getaways.',
      icon: 'fa-solid fa-utensils',
    },
    {
      year: '2026',
      title: '250+ Verified Stays',
      description: 'Proudly serving 15,000+ happy travelers with 24/7 concierge excellence and 100% price guarantee.',
      icon: 'fa-solid fa-award',
    },
  ];

  return (
    <section className="about-timeline-section">
      <div className="container">
        <div className="timeline-header">
          <span className="timeline-badge">OUR JOURNEY</span>
          <h2 className="timeline-title">Milestones That Define Us</h2>
          <p className="timeline-subtitle">
            From humble beginnings to India's fastest-growing luxury hotel &amp; dining booking platform.
          </p>
        </div>

        <div className="timeline-grid">
          {milestones.map((item, index) => (
            <div key={index} className="timeline-card">
              <div className="timeline-year-box">
                <span className="timeline-year">{item.year}</span>
                <div className="timeline-icon-badge">
                  <i className={item.icon}></i>
                </div>
              </div>
              <div className="timeline-content">
                <h3 className="timeline-card-title">{item.title}</h3>
                <p className="timeline-card-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutTimeline;
