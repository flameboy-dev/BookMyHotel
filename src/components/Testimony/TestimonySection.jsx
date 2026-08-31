import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Testimony.css';
import testimonials from '../../data/testimonialData';

const TestimonySection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [transitionDirection, setTransitionDirection] = useState('right');

  const nextTestimonial = () => {
    setTransitionDirection('right');
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setTransitionDirection('left');
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setTransitionDirection(index > currentTestimonial ? 'right' : 'left');
    setCurrentTestimonial(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimony-section">
      <div className="testimony-container">
        {/* Left - Why Choose Us */}
        <div className="left-section">
          <span className="section-tag">ABOUT BOOKMYHOTEL</span>
          <h2>Why Choose Us?</h2>
          <p>
            We make hotel booking effortless with handpicked luxury stays, boutique resorts, and budget-friendly hotels tailored to your travel style.
          </p>
          <p>
            Enjoy real-time instant booking confirmation, verified guest reviews, zero hidden fees, and round-the-clock 24/7 concierge assistance. Your comfort and peace of mind is our highest priority!
          </p>
          <Link to="/about" className="read-more">
            <span>Read Our Story</span>
            <i className="fa-solid fa-arrow-right link-arrow"></i>
          </Link>
        </div>

        {/* Right - Guest Testimony */}
        <div className="right-section">
          <span className="section-tag">TESTIMONIALS</span>
          <h2>What Our Guests Say</h2>
          <div className="testimony-carousel">
            <div className="carousel-wrapper">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`testimony-card ${
                    index === currentTestimonial ? 'active' :
                    index === (currentTestimonial - 1 + testimonials.length) % testimonials.length ? 'left' :
                    index === (currentTestimonial + 1) % testimonials.length ? 'right' : ''
                  } ${
                    transitionDirection === 'right' ? 'slide-right' : 'slide-left'
                  }`}
                >
                  <div className="user-avatar">
                    <img src={testimonial.image} alt={testimonial.name} />
                    <span className="quote-icon"><i className="fa-solid fa-quote-right"></i></span>
                  </div>
                  <div className="testimony-content">
                    <div className="star-rating">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <p className="quote">"{testimonial.quote}"</p>
                    <p className="guest-name">{testimonial.name}</p>
                    <p className="guest-location">
                      <i className="fa-solid fa-location-dot"></i> {testimonial.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="carousel-controls">
              <button className="carousel-arrow left" onClick={prevTestimonial} aria-label="Previous testimony">
                <i className="fa-solid fa-chevron-left"></i>
              </button>
              <div className="carousel-dots">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`dot ${index === currentTestimonial ? 'active' : ''}`}
                    onClick={() => goToTestimonial(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              <button className="carousel-arrow right" onClick={nextTestimonial} aria-label="Next testimony">
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonySection;