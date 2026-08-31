import React from 'react';
import './PageLoader.css';

function PageLoader({ fadingOut }) {
  return (
    <div className={`page-loader ${fadingOut ? 'fade-out' : ''}`}>
      <div className="loader-content">
        <div className="spinner-wrapper">
          <div className="spinner-ring"></div>
          <img src="/Images/logo.png" alt="BookMyHotel" className="loader-logo" />
        </div>
        <div className="loader-brand">
          <span className="brand-name">
            BookMy<span className="brand-accent">Hotel</span>
          </span>
          <div className="loader-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageLoader;