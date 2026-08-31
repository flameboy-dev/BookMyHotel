import React from 'react';
import './AboutLeadership.css';

function AboutLeadership() {
  const team = [
    {
      name: 'Vikramaditya Roy',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=80',
      bio: 'Pioneering luxury travel experiences and digital hospitality innovation across India.',
    },
    {
      name: 'Ananya Sharma',
      role: 'Head of Hotel Curation',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80',
      bio: 'Handpicking boutique resorts, heritage properties, and 5-star hotel partnerships.',
    },
    {
      name: 'Rohan Malhotra',
      role: 'Director of Guest Experience',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=500&q=80',
      bio: 'Ensuring 24/7 concierge support and flawless check-in experiences for every traveler.',
    },
  ];

  return (
    <section className="about-leadership-section">
      <div className="container">
        <div className="leadership-header">
          <span className="leadership-badge">THE PEOPLE BEHIND BOOKMYHOTEL</span>
          <h2 className="leadership-title">Meet Our Leadership Team</h2>
          <p className="leadership-subtitle">
            Passionate hospitality leaders, curators, and travel tech innovators dedicated to your perfect stay.
          </p>
        </div>

        <div className="leadership-grid">
          {team.map((member, index) => (
            <div key={index} className="leader-card">
              <div className="leader-image-box">
                <img src={member.image} alt={member.name} />
                <div className="leader-socials">
                  <a href="#linkedin" onClick={(e) => e.preventDefault()} aria-label="LinkedIn">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                  <a href="#twitter" onClick={(e) => e.preventDefault()} aria-label="Twitter">
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>
                </div>
              </div>
              <div className="leader-info">
                <h3 className="leader-name">{member.name}</h3>
                <span className="leader-role">{member.role}</span>
                <p className="leader-bio">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutLeadership;
