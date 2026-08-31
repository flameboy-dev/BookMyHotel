import React, { useEffect, useRef } from 'react';
import './FunFactsSection.css';

const countersData = [
  { number: 100000, label: 'Happy Customers', icon: 'fa-users' },
  { number: 40000, label: 'Destination Places', icon: 'fa-map-location-dot' },
  { number: 87000, label: 'Luxury Hotels', icon: 'fa-hotel' },
  { number: 56400, label: 'Top Restaurants', icon: 'fa-utensils' },
];

const FunFactsSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const formatNumber = (number) => {
      return number.toLocaleString();
    };

    const updateCounter = (counter) => {
      const target = +counter.getAttribute('data-number');
      const count = +counter.innerText.replace(/,/g, '');
      const increment = target / 200;

      if (count < target) {
        const newCount = Math.min(count + increment, target);
        counter.innerText = formatNumber(Math.ceil(newCount));
        requestAnimationFrame(() => updateCounter(counter));
      } else {
        counter.innerText = formatNumber(target);
      }
    };

    const counters = document.querySelectorAll('.number');
    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          counters.forEach((counter) => {
            updateCounter(counter);
          });
          observer.disconnect();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
  }, []);

  return (
    <section
      className="ftco-section ftco-counter img"
      id="section-counter"
      ref={sectionRef}
      style={{ backgroundImage: 'url(Images/bg_4.jpg)' }}
    >
      <div className="container">
        <div className="heading-wrapper">
          <p className="subheading-tag">MILESTONES</p>
          <h2 className="mb-4">Our Growing Community</h2>
          <span className="subheading">Over 100,000 happy travelers & 80,000+ verified stays</span>
        </div>

        <div className="counters-wrapper">
          {countersData.map((counter, index) => (
            <div className="counter-card" key={index}>
              <div className="counter-icon-box">
                <i className={`fa-solid ${counter.icon}`}></i>
              </div>
              <strong className="number" data-number={counter.number}>0</strong>
              <span className="counter-label">{counter.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FunFactsSection;
