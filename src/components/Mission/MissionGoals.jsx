import React from 'react';
import './MissionGoals.css';

function MissionGoals() {
  const values = [
    {
      icon: 'fa-solid fa-compass',
      tag: 'OUR MISSION',
      title: 'Effortless Bookings & Authentic Stays',
      desc: 'Simplifying hotel reservations while discovering India\'s most extraordinary stays with 100% price transparency and zero booking fees.',
      highlights: ['Zero hidden booking fees', 'Instant digital confirmation vouchers', 'Verified 5-star property standards'],
    },
    {
      icon: 'fa-solid fa-eye',
      tag: 'OUR VISION',
      title: 'Empowering Every Journey',
      desc: 'Building India\'s most trusted hospitality ecosystem, connecting travelers with handpicked boutique resorts and heritage retreats.',
      highlights: ['Curated luxury destinations', 'Personalized concierge guidance', 'Seamless mobile check-in support'],
    },
    {
      icon: 'fa-solid fa-gem',
      tag: 'WHAT WE DO',
      title: 'Curated Hospitality Platform',
      desc: 'Partnering directly with premier hotels and fine dining establishments to deliver unforgettable getaways with 24/7 guest support.',
      highlights: ['24/7 Concierge Support', 'Authentic guest reviews & ratings', 'Best price rate guarantee'],
    },
  ];

  return (
    <section className="mission-goals-section">
      <div className="container">
        <div className="mission-header text-center">
          <span className="mission-badge">OUR CORE VALUES</span>
          <h2 className="mission-main-title">Redefining Travel &amp; Hospitality</h2>
          <p className="mission-main-subtitle">
            Built on trust, transparency, and a passion for extraordinary hospitality.
          </p>
        </div>

        <div className="mission-grid">
          {values.map((item, index) => (
            <div key={index} className="mission-value-card">
              <div className="card-top">
                <div className="value-icon-box">
                  <i className={item.icon}></i>
                </div>
                <span className="value-tag">{item.tag}</span>
              </div>
              <h3 className="value-title">{item.title}</h3>
              <p className="value-desc">{item.desc}</p>
              
              <ul className="value-bullets">
                {item.highlights.map((bullet, bIndex) => (
                  <li key={bIndex}>
                    <i className="fa-solid fa-circle-check bullet-icon"></i>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MissionGoals;
