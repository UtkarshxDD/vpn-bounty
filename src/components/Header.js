import React from 'react';
import { FaShieldAlt, FaLock } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-section">
          <FaShieldAlt className="logo-icon" />
          <span className="logo-text">VPNDeals</span>
        </div>
        <nav className="nav">
          <a href="#comparison" className="nav-link">Compare VPNs</a>
          <a href="#features" className="nav-link">Features</a>
          <a href="#testimonials" className="nav-link">Reviews</a>
        </nav>
        <div className="trust-badge">
          <FaLock className="trust-icon" />
          <span>Trusted by 500K+ Users</span>
        </div>
      </div>
    </header>
  );
};

export default Header;

