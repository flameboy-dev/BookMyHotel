import React from 'react';
import './MapSection.css';

const MapSection = () => {
  return (
    <div className="hq-map-card">
      <div className="map-card-header">
        <span className="map-badge">HEADQUARTERS LOCATION</span>
        <h3 className="map-card-title">BookMyHotel Corporate Tower</h3>
        <p className="map-address-txt">
          <i className="fa-solid fa-location-dot map-pin-icon"></i>
          BKC Financial District, Bandra East, Mumbai, Maharashtra 400051
        </p>
      </div>

      <div className="map-iframe-container">
        <iframe
          title="BookMyHotel HQ Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.792612348571!2d72.86311687596041!3d19.06180325272635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8e11a000001%3A0x6b8f72c3d1000000!2sBandra%20Kurla%20Complex!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
          width="100%"
          height="340"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="map-features-footer">
        <div className="map-feat-pill">
          <i className="fa-solid fa-clock"></i>
          <span>HQ Hours: Mon - Sat (9am - 8pm)</span>
        </div>
        <div className="map-feat-pill">
          <i className="fa-solid fa-shield-halved"></i>
          <span>100% Guaranteed Verification</span>
        </div>
      </div>
    </div>
  );
};

export default MapSection;