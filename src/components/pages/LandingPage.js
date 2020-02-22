import React from 'react';
import widget from '../../assets/img/widget.svg';

const LandingPage = () => {
  return (
    <div className="landing-page-container">
      <div className="landing-page-content">
        <div className="landing-page-text">
          <div className="landing-page-title">Get real-time weather conditions and forecasts in your city</div>
          <a href="/signup" className="cta-btn">Get started</a>
        </div>
        <div className="landing-page-widget">
          <img src={widget} className="st-widget" alt="Weather widget"/>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
