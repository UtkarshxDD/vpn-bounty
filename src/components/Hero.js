import React from 'react';
import { FaCheckCircle, FaStar } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-badge">
          <FaStar className="star-icon" />
          <span>Exclusive VPN Deals - Limited Time Offers</span>
        </div>
        <h1 className="hero-title">
          Get Exclusive VPN Deals & Free Months
        </h1>
        <p className="hero-subtitle">
          Compare top-rated VPN services and unlock exclusive offers. 
          Protect your privacy with premium VPN subscriptions and get free months.
        </p>
        <div className="hero-features">
          <div className="hero-feature">
            <FaCheckCircle className="check-icon" />
            <span>Verified Discounts</span>
          </div>
          <div className="hero-feature">
            <FaCheckCircle className="check-icon" />
            <span>30-Day Money-Back Guarantee</span>
          </div>
          <div className="hero-feature">
            <FaCheckCircle className="check-icon" />
            <span>24/7 Customer Support</span>
          </div>
        </div>
        <a href="#comparison" className="cta-button">
          View Best Deals
        </a>
      </div>
    </section>
  );
};

export default Hero;

