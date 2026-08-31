import React, { useState } from 'react';
import './FAQSection.css';

function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      category: 'BOOKING & RESERVATION',
      question: 'How do I search and book a hotel on BookMyHotel?',
      answer: 'Simply enter your keyword or destination in the search bar, select your travel dates, browse available verified hotels, pick your room tier, and complete instant reservation without booking fees.',
    },
    {
      category: 'PRICING & TRANSPARENCY',
      question: 'Are there any hidden fees or extra booking charges?',
      answer: 'No. BookMyHotel operates with 100% price transparency. All taxes, room rates, and applicable fees are displayed upfront before you confirm your reservation.',
    },
    {
      category: 'CANCELLATION POLICY',
      question: 'Can I modify or cancel my hotel reservation?',
      answer: 'Yes, reservations can be modified or cancelled directly through your account dashboard in accordance with each individual hotel’s free cancellation policy window.',
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="container">
        <div className="faq-main-wrapper">
          {/* Left Column: Static Support Sidebar Card */}
          <div className="faq-sidebar">
            <span className="faq-badge">NEED INSTANT HELP?</span>
            <h2 className="sidebar-title">We Are Here For You 24/7</h2>
            <p className="sidebar-desc">
              Have questions about hotel check-ins, room amenities, or special requests? Our concierge team is always online.
            </p>

            <div className="support-box">
              <div className="support-icon-box">
                <i className="fa-solid fa-headset"></i>
              </div>
              <div className="support-info">
                <h4>24/7 Dedicated Support</h4>
                <p>concierge@bookmyhotel.com</p>
              </div>
            </div>

            <div className="support-badge-card">
              <div className="stars">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <span className="rating-text">4.9 / 5 Concierge Satisfaction</span>
            </div>
          </div>

          {/* Right Column: Luxury Categorized Accordions */}
          <div className="faq-content">
            <div className="faq-content-header">
              <h3 className="content-title">Frequently Asked Questions</h3>
              <p className="content-subtitle">
                Everything you need to know about booking luxury stays and dining with BookMyHotel.
              </p>
            </div>

            <div className="faq-accordion-list">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`faq-card ${activeIndex === index ? 'active' : ''}`}
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="faq-card-header">
                    <div className="faq-title-group">
                      <span className="faq-cat-tag">{faq.category}</span>
                      <h4 className="faq-q-text">{faq.question}</h4>
                    </div>
                    <div className="faq-toggle-circle">
                      <i className={`fa-solid ${activeIndex === index ? 'fa-minus' : 'fa-plus'}`}></i>
                    </div>
                  </div>
                  {activeIndex === index && (
                    <div className="faq-card-answer">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQSection;